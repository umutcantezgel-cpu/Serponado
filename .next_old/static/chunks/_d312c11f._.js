(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/monitoring/error-logger.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ══════════════════════════════════════════════════════════════
 * Phase 19 und Central Error Logger (LOCAL-ONLY, NO Sentry)
 * ══════════════════════════════════════════════════════════════
 * Singleton error capture with PII filtering, fingerprinting,
 * and batched sending to /api/monitoring/errors.
 * ══════════════════════════════════════════════════════════════
 */ // ─── Types ───
__turbopack_context__.s([
    "errorLogger",
    ()=>errorLogger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
// ─── PII Filter ───
const PII_PATTERNS = [
    /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
    /\b(\+?\d{1,4}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}\b/g,
    /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g
];
function stripPII(input) {
    let cleaned = input;
    for (const pattern of PII_PATTERNS){
        cleaned = cleaned.replace(pattern, "[REDACTED]");
    }
    return cleaned;
}
// ─── Fingerprint ───
function fingerprint(message, stack) {
    const key = "".concat(message, "::").concat(stack.slice(0, 100));
    let hash = 0;
    for(let i = 0; i < key.length; i++){
        const char = key.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return "err_".concat(Math.abs(hash).toString(36));
}
// ─── Categorize ───
function categorize(error) {
    if (error instanceof TypeError) return "client";
    if (error instanceof SyntaxError) return "validation";
    if (error instanceof Error) {
        const msg = error.message.toLowerCase();
        if (msg.includes("fetch") || msg.includes("network") || msg.includes("cors")) return "network";
        if (msg.includes("server") || msg.includes("500") || msg.includes("api")) return "server";
        if (msg.includes("valid") || msg.includes("required") || msg.includes("schema")) return "validation";
    }
    return "unknown";
}
// ─── Logger ───
class ErrorLoggerClass {
    /** Capture an error with context */ capture(error) {
        let context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const err = error instanceof Error ? error : new Error(String(error));
        const cleanMessage = stripPII(err.message);
        const cleanStack = stripPII((err.stack || "").slice(0, 500));
        const fp = fingerprint(cleanMessage, cleanStack);
        // Dedup: skip if seen in last 60s
        const lastSeen = this.seen.get(fp);
        if (lastSeen && Date.now() - lastSeen < 60_000) return;
        this.seen.set(fp, Date.now());
        // Always console.error
        console.error("[ErrorLogger:".concat(context.level || "error", "]"), cleanMessage, {
            category: context.category || categorize(error),
            page: context.page || (("TURBOPACK compile-time truthy", 1) ? window.location.pathname : "TURBOPACK unreachable")
        });
        // Only buffer on client
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const report = {
            id: "".concat(Date.now(), "_").concat(Math.random().toString(36).slice(2, 8)),
            timestamp: new Date().toISOString(),
            level: context.level || "error",
            category: context.category || categorize(error),
            message: cleanMessage,
            stack: cleanStack,
            page: context.page || window.location.pathname,
            viewport: "".concat(window.innerWidth, "x").concat(window.innerHeight),
            userAgent: navigator.userAgent.slice(0, 200),
            fingerprint: fp
        };
        this.buffer.push(report);
        this.ensureFlush();
    }
    /** Warning shorthand */ warn(message) {
        let context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.capture(new Error(message), {
            ...context,
            level: "warning"
        });
    }
    /** Info shorthand */ info(message) {
        let context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.capture(new Error(message), {
            ...context,
            level: "info"
        });
    }
    /** Start flush timer if not running */ ensureFlush() {
        if (this.flushTimer) return;
        this.flushTimer = setInterval(()=>this.flush(), 30_000);
        // Also flush on page unload
        if ("TURBOPACK compile-time truthy", 1) {
            window.addEventListener("beforeunload", ()=>this.flush(), {
                once: true
            });
        }
    }
    /** Send buffered errors to API */ flush() {
        if (this.buffer.length === 0) return;
        const batch = this.buffer.splice(0);
        // Use sendBeacon for reliability on unload, fetch otherwise
        const payload = JSON.stringify({
            errors: batch
        });
        if (typeof navigator !== "undefined" && navigator.sendBeacon) {
            navigator.sendBeacon("/api/monitoring/errors", payload);
        } else {
            fetch("/api/monitoring/errors", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: payload,
                keepalive: true
            }).catch(()=>{
            // Silent fail und we don't want error logging to cause errors
            });
        }
        // Cleanup old fingerprints
        const now = Date.now();
        for (const [key, time] of this.seen){
            if (now - time > 120_000) this.seen.delete(key);
        }
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "buffer", []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "flushTimer", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "seen", new Map());
    }
}
const errorLogger = new ErrorLoggerClass();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
]);

//# sourceMappingURL=_d312c11f._.js.map