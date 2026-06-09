module.exports = [
"[project]/lib/monitoring/error-logger.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const key = `${message}::${stack.slice(0, 100)}`;
    let hash = 0;
    for(let i = 0; i < key.length; i++){
        const char = key.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return `err_${Math.abs(hash).toString(36)}`;
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
    buffer = [];
    flushTimer = null;
    seen = new Map();
    /** Capture an error with context */ capture(error, context = {}) {
        const err = error instanceof Error ? error : new Error(String(error));
        const cleanMessage = stripPII(err.message);
        const cleanStack = stripPII((err.stack || "").slice(0, 500));
        const fp = fingerprint(cleanMessage, cleanStack);
        // Dedup: skip if seen in last 60s
        const lastSeen = this.seen.get(fp);
        if (lastSeen && Date.now() - lastSeen < 60_000) return;
        this.seen.set(fp, Date.now());
        // Always console.error
        console.error(`[ErrorLogger:${context.level || "error"}]`, cleanMessage, {
            category: context.category || categorize(error),
            page: context.page || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "server")
        });
        // Only buffer on client
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const report = undefined;
    }
    /** Warning shorthand */ warn(message, context = {}) {
        this.capture(new Error(message), {
            ...context,
            level: "warning"
        });
    }
    /** Info shorthand */ info(message, context = {}) {
        this.capture(new Error(message), {
            ...context,
            level: "info"
        });
    }
    /** Start flush timer if not running */ ensureFlush() {
        if (this.flushTimer) return;
        this.flushTimer = setInterval(()=>this.flush(), 30_000);
        // Also flush on page unload
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
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
}
const errorLogger = new ErrorLoggerClass();
}),
];

//# sourceMappingURL=lib_monitoring_error-logger_ts_241b737c._.js.map