(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/GlobalBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FloatingPaths(param) {
    let { position } = param;
    _s();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingPaths.useEffect": ()=>{
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsMounted(true);
        }
    }["FloatingPaths.useEffect"], []);
    const paths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingPaths.useMemo[paths]": ()=>Array.from({
                length: 24
            }, {
                "FloatingPaths.useMemo[paths]": (_, i)=>({
                        id: i,
                        d: "M-".concat(380 - i * 10 * position, " -").concat(189 + i * 12, "C-").concat(380 - i * 10 * position, " -").concat(189 + i * 12, " -").concat(312 - i * 10 * position, " ").concat(216 - i * 12, " ").concat(152 - i * 10 * position, " ").concat(343 - i * 12, "C").concat(616 - i * 10 * position, " ").concat(470 - i * 12, " ").concat(684 - i * 10 * position, " ").concat(875 - i * 12, " ").concat(684 - i * 10 * position, " ").concat(875 - i * 12),
                        width: 0.4 + i * 0.025,
                        duration: 22 + (i * 7 + 3) % 12
                    })
            }["FloatingPaths.useMemo[paths]"])
    }["FloatingPaths.useMemo[paths]"], [
        position
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-full h-full",
            viewBox: "0 0 696 316",
            fill: "none",
            preserveAspectRatio: "xMidYMid slice",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: [
                        "Atmosphärische Wellen ",
                        "Serponado"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/GlobalBackground.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                paths.map((path)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: path.d,
                        style: isMounted ? {
                            stroke: "var(--color-blush-600)",
                            strokeWidth: path.width * 1.2,
                            strokeOpacity: 0.03 + path.id * 0.012,
                            strokeDasharray: "100%",
                            strokeDashoffset: "100%",
                            animation: "drawPath ".concat(path.duration, "s linear infinite")
                        } : {
                            stroke: "var(--color-blush-600)",
                            strokeWidth: path.width * 1.2,
                            strokeOpacity: 0.25,
                            strokeDasharray: "100%",
                            strokeDashoffset: "70%"
                        }
                    }, path.id, false, {
                        fileName: "[project]/components/GlobalBackground.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/components/GlobalBackground.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/GlobalBackground.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(FloatingPaths, "0BqP5X2+fQjHVisaq9hiLd6lSbs=");
_c = FloatingPaths;
function GlobalBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-0 pointer-events-none opacity-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingPaths, {
                position: 1
            }, void 0, false, {
                fileName: "[project]/components/GlobalBackground.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingPaths, {
                position: -1
            }, void 0, false, {
                fileName: "[project]/components/GlobalBackground.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/GlobalBackground.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c1 = GlobalBackground;
var _c, _c1;
__turbopack_context__.k.register(_c, "FloatingPaths");
__turbopack_context__.k.register(_c1, "GlobalBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/GlobalBackground.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/GlobalBackground.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_GlobalBackground_tsx_9421d347._.js.map