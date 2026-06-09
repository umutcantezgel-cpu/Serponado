module.exports = [
"[project]/components/debug/PathDisplay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PathDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
/**
 * PathDisplay — Tiny debug widget for the 404 page.
 * Renders the actual window.location.pathname + search so that customer
 * screenshots reveal whether they really hit "/" or a dead link.
 *
 * Uses useSyncExternalStore to safely read window.location (SSR-safe).
 * Console logging happens inside the subscribe callback (effect-like).
 */ function getPathSnapshot() {
    try {
        return window.location.pathname + window.location.search;
    } catch  {
        return "";
    }
}
function getServerSnapshot() {
    return "";
}
function PathDisplay() {
    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Log debug info when component subscribes (mount-time, not render-time)
        try {
            console.info("[404-DEBUG] window.location:", {
                pathname: window.location.pathname,
                search: window.location.search,
                hash: window.location.hash,
                host: window.location.host,
                href: window.location.href
            });
        } catch  {
        // Silently fail in restrictive environments
        }
        // No-op cleanup — location doesn't change
        return ()=>{};
    }, []);
    const fullPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getPathSnapshot, getServerSnapshot);
    if (!fullPath) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "mt-6 text-[10px] text-[color:var(--text-tertiary)] opacity-50 font-mono select-all break-all",
        "aria-hidden": "true",
        suppressHydrationWarning: true,
        children: [
            "Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her.",
            fullPath
        ]
    }, void 0, true, {
        fileName: "[project]/components/debug/PathDisplay.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, this);
}
}),
];

//# sourceMappingURL=components_debug_PathDisplay_tsx_da5c6216._.js.map