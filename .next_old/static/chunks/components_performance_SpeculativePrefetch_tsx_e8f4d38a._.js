(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/performance/SpeculativePrefetch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpeculativePrefetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/**
 * Supreme Phase und Spekulatives Prefetching
 * 
 * Prefetcht die wahrscheinlichsten Ziel-Seiten basierend auf der aktuellen Seite.
 * Verwendet requestIdleCallback um den Main-Thread nicht zu blockieren.
 * 
 * Prefetch-Strategie:
 * - Homepage → Preise, Leistungen, Kontakt (höchste Exit-Rate Ziele)
 * - Leistungen → Preise (natürlicher Funnel)
 * - Preise → Kontakt (Conversion-Pfad)
 * - Stadtgebiet → Kontakt, Preise
 */ const PREFETCH_MAP = {
    "/": [
        "/preise",
        "/leistungen",
        "/kontakt"
    ],
    "/leistungen": [
        "/preise",
        "/kontakt"
    ],
    "/preise": [
        "/kontakt",
        "/faq"
    ],
    "/kontakt": [
        "/preise"
    ],
    "/faq": [
        "/kontakt",
        "/preise"
    ],
    "/servicegebiet": [
        "/kontakt",
        "/preise"
    ]
};
function prefetchRoute(path) {
    // Use native prefetch link for maximum performance
    if (document.querySelector('link[href="'.concat(path, '"]'))) return;
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = path;
    link.as = "document";
    document.head.appendChild(link);
}
function SpeculativePrefetch() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpeculativePrefetch.useEffect": ()=>{
            // Determine which routes to prefetch based on current page
            let targets = PREFETCH_MAP[pathname] || [];
            // For stadtgebiet pages, use the default conversion path
            if (targets.length === 0 && pathname.length > 1 && !pathname.includes("/leistungen/")) {
                targets = [
                    "/kontakt",
                    "/preise"
                ];
            }
            if (targets.length === 0) return;
            // Use requestIdleCallback to avoid blocking the main thread
            const scheduleId = window.requestIdleCallback ? window.requestIdleCallback({
                "SpeculativePrefetch.useEffect": ()=>{
                    targets.forEach(prefetchRoute);
                }
            }["SpeculativePrefetch.useEffect"]) : window.setTimeout({
                "SpeculativePrefetch.useEffect": ()=>{
                    targets.forEach(prefetchRoute);
                }
            }["SpeculativePrefetch.useEffect"], 2000);
            return ({
                "SpeculativePrefetch.useEffect": ()=>{
                    if (window.cancelIdleCallback) {
                        window.cancelIdleCallback(scheduleId);
                    } else {
                        clearTimeout(scheduleId);
                    }
                }
            })["SpeculativePrefetch.useEffect"];
        }
    }["SpeculativePrefetch.useEffect"], [
        pathname
    ]);
    return null;
}
_s(SpeculativePrefetch, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SpeculativePrefetch;
var _c;
__turbopack_context__.k.register(_c, "SpeculativePrefetch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/performance/SpeculativePrefetch.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/performance/SpeculativePrefetch.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_performance_SpeculativePrefetch_tsx_e8f4d38a._.js.map