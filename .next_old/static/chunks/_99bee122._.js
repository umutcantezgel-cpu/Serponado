(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hooks/useScrollDepth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollDepth",
    ()=>useScrollDepth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useScrollDepth(param) {
    let { onDepthReached } = param;
    _s();
    const firedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onDepthReached);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollDepth.useEffect": ()=>{
            callbackRef.current = onDepthReached;
        }
    }["useScrollDepth.useEffect"], [
        onDepthReached
    ]);
    const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScrollDepth.useCallback[cleanup]": ()=>{
            markersRef.current.forEach({
                "useScrollDepth.useCallback[cleanup]": (el)=>el.remove()
            }["useScrollDepth.useCallback[cleanup]"]);
            markersRef.current = [];
        }
    }["useScrollDepth.useCallback[cleanup]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollDepth.useEffect": ()=>{
            // Only run on client
            if ("object" === "undefined" || typeof IntersectionObserver === "undefined") return;
            // Reset on route change
            firedRef.current = new Set();
            cleanup();
            const depths = [
                25,
                50,
                75,
                100
            ];
            const observer = new IntersectionObserver({
                "useScrollDepth.useEffect": (entries)=>{
                    entries.forEach({
                        "useScrollDepth.useEffect": (entry)=>{
                            if (!entry.isIntersecting) return;
                            const depth = Number(entry.target.getAttribute("data-depth"));
                            if (depth && !firedRef.current.has(depth)) {
                                firedRef.current.add(depth);
                                callbackRef.current(depth);
                                observer.unobserve(entry.target);
                            }
                        }
                    }["useScrollDepth.useEffect"]);
                }
            }["useScrollDepth.useEffect"], {
                threshold: 0
            });
            // Create invisible marker elements at each depth
            // Use requestAnimationFrame to ensure DOM is ready
            requestAnimationFrame({
                "useScrollDepth.useEffect": ()=>{
                    const docHeight = document.documentElement.scrollHeight;
                    const viewportHeight = window.innerHeight;
                    depths.forEach({
                        "useScrollDepth.useEffect": (depth)=>{
                            const marker = document.createElement("div");
                            marker.setAttribute("data-depth", String(depth));
                            marker.style.cssText = "position:absolute;left:0;width:1px;height:1px;pointer-events:none;opacity:0;";
                            // Position at the scroll depth percentage of the scrollable area
                            const position = (docHeight - viewportHeight) * (depth / 100) + viewportHeight;
                            marker.style.top = "".concat(Math.min(position, docHeight - 1), "px");
                            document.body.appendChild(marker);
                            markersRef.current.push(marker);
                            observer.observe(marker);
                        }
                    }["useScrollDepth.useEffect"]);
                }
            }["useScrollDepth.useEffect"]);
            return ({
                "useScrollDepth.useEffect": ()=>{
                    observer.disconnect();
                    cleanup();
                }
            })["useScrollDepth.useEffect"];
        }
    }["useScrollDepth.useEffect"], [
        cleanup
    ]);
}
_s(useScrollDepth, "bWw8sqYFg2Vc9YNUK+yT3TfYpqs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/analytics/ScrollDepthTracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollDepthTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollDepth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollDepth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analytics.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScrollDepthTracker() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollDepth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollDepth"])({
        onDepthReached: {
            "ScrollDepthTracker.useScrollDepth": (depth)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackScrollDepth"])(depth);
            }
        }["ScrollDepthTracker.useScrollDepth"]
    });
    return null;
}
_s(ScrollDepthTracker, "vpIo3k97k0mstqTpPckm3uEjtuA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollDepth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollDepth"]
    ];
});
_c = ScrollDepthTracker;
var _c;
__turbopack_context__.k.register(_c, "ScrollDepthTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/analytics/ScrollDepthTracker.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/analytics/ScrollDepthTracker.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_99bee122._.js.map