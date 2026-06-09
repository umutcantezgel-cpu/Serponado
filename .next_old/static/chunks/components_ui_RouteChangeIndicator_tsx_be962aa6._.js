(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/RouteChangeIndicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RouteChangeIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RouteChangeIndicator() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isNavigating, setIsNavigating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const prevPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(pathname);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteChangeIndicator.useEffect": ()=>{
            if (pathname !== prevPathname.current) {
                // Route changed und stop loading
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setIsNavigating(false);
                setProgress(100);
                // Reset after animation completes
                const hideTimer = setTimeout({
                    "RouteChangeIndicator.useEffect.hideTimer": ()=>{
                        setProgress(0);
                    }
                }["RouteChangeIndicator.useEffect.hideTimer"], 400);
                prevPathname.current = pathname;
                if (timerRef.current) clearTimeout(timerRef.current);
                if (progressRef.current) clearInterval(progressRef.current);
                return ({
                    "RouteChangeIndicator.useEffect": ()=>clearTimeout(hideTimer)
                })["RouteChangeIndicator.useEffect"];
            }
            return undefined;
        }
    }["RouteChangeIndicator.useEffect"], [
        pathname
    ]);
    // Listen for link clicks to start the indicator
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteChangeIndicator.useEffect": ()=>{
            const handleClick = {
                "RouteChangeIndicator.useEffect.handleClick": (e)=>{
                    const target = e.target.closest("a");
                    if (!target) return;
                    const href = target.getAttribute("href");
                    if (!href || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:") || target.target === "_blank") {
                        return;
                    }
                    // Only show after 300ms delay (avoid flicker on fast nav)
                    timerRef.current = setTimeout({
                        "RouteChangeIndicator.useEffect.handleClick": ()=>{
                            setIsNavigating(true);
                            setProgress(20);
                            // Simulate gradual progress
                            progressRef.current = setInterval({
                                "RouteChangeIndicator.useEffect.handleClick": ()=>{
                                    setProgress({
                                        "RouteChangeIndicator.useEffect.handleClick": (prev)=>{
                                            if (prev >= 90) return prev;
                                            return prev + Math.random() * 15;
                                        }
                                    }["RouteChangeIndicator.useEffect.handleClick"]);
                                }
                            }["RouteChangeIndicator.useEffect.handleClick"], 500);
                        }
                    }["RouteChangeIndicator.useEffect.handleClick"], 300);
                }
            }["RouteChangeIndicator.useEffect.handleClick"];
            document.addEventListener("click", handleClick);
            return ({
                "RouteChangeIndicator.useEffect": ()=>{
                    document.removeEventListener("click", handleClick);
                    if (timerRef.current) clearTimeout(timerRef.current);
                    if (progressRef.current) clearInterval(progressRef.current);
                }
            })["RouteChangeIndicator.useEffect"];
        }
    }["RouteChangeIndicator.useEffect"], []);
    if (progress === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "progressbar",
        "aria-label": "Seite wird geladen",
        "aria-valuenow": Math.round(progress),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            zIndex: 9999,
            pointerEvents: "none"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: "100%",
                width: "".concat(progress, "%"),
                background: "linear-gradient(90deg, #DC2626, #F87171)",
                transition: isNavigating ? "width 500ms ease-out" : "width 200ms ease-out",
                boxShadow: "0 0 8px rgba(220, 38, 38, 0.4)"
            }
        }, void 0, false, {
            fileName: "[project]/components/ui/RouteChangeIndicator.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/RouteChangeIndicator.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(RouteChangeIndicator, "7GteTUQlnu7Iitkh/IhaRvOHsQI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = RouteChangeIndicator;
var _c;
__turbopack_context__.k.register(_c, "RouteChangeIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/RouteChangeIndicator.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/ui/RouteChangeIndicator.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_ui_RouteChangeIndicator_tsx_be962aa6._.js.map