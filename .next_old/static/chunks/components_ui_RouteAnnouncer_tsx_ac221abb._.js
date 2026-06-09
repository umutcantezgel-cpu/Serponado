(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/RouteAnnouncer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouteAnnouncer",
    ()=>RouteAnnouncer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RouteAnnouncer() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [routeAnnouncement, setRouteAnnouncement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteAnnouncer.useEffect": ()=>{
            // Kurze Verzögerung, um sicherzustellen, dass die Seite rendern konnte, bevor angekündigt wird
            const timeout = setTimeout({
                "RouteAnnouncer.useEffect.timeout": ()=>{
                    const pageTitle = document.title || "Neue Seite geladen";
                    setRouteAnnouncement("Navigiert zu: ".concat(pageTitle));
                }
            }["RouteAnnouncer.useEffect.timeout"], 500);
            return ({
                "RouteAnnouncer.useEffect": ()=>clearTimeout(timeout)
            })["RouteAnnouncer.useEffect"];
        }
    }["RouteAnnouncer.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        className: "sr-only",
        children: routeAnnouncement
    }, void 0, false, {
        fileName: "[project]/components/ui/RouteAnnouncer.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(RouteAnnouncer, "ULfEHB5h9WgfAWS4kCryj7BXCo0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = RouteAnnouncer;
var _c;
__turbopack_context__.k.register(_c, "RouteAnnouncer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/RouteAnnouncer.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/ui/RouteAnnouncer.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_ui_RouteAnnouncer_tsx_ac221abb._.js.map