(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/CookieConsent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CookieConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * ══════════════════════════════════════════════════════════════
 * DSGVO + TTDSG Cookie-Consent Banner (Rechtssicher)
 * ══════════════════════════════════════════════════════════════
 * Compliance-Checkliste:
 * ✅ "Alle ablehnen" gleichwertig prominent wie "Alle akzeptieren" (§25 TTDSG)
 * ✅ Keine vorangekreuzten nicht-essentiellen Checkboxen (Art. 7 DSGVO)
 * ✅ Schließen = "Nur Essentiell" (kein Default-Opt-In)
 * ✅ Klare Zweckbeschreibung pro Cookie-Kategorie
 * ✅ Link zu Datenschutzerklärung + Impressum
 * ✅ Consent-Timestamp in Cookie gespeichert
 * ✅ Widerruf jederzeit über Footer-Link "Cookie-Einstellungen"
 * ✅ Banner blockiert keinen Inhalt (fixed bottom, nicht modal)
 * ✅ Cookie-Details (Namen, Anbieter, Dauer) pro Kategorie einsehbar
 * ✅ Consent-Proof-Logging via useConsent (Art. 7 Abs. 1 DSGVO)
 * ✅ Slide-up micro-animation
 * ══════════════════════════════════════════════════════════════
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useConsent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useConsent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookie$2d$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cookie-inventory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cookie.js [app-client] (ecmascript) <export default as Cookie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CookieConsent() {
    _s();
    const { consent, showBanner, acceptAll, acceptEssentialOnly, updateConsent, setShowBanner } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useConsent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsent"])();
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [analyticsChecked, setAnalyticsChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [marketingChecked, setMarketingChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedCategory, setExpandedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // [DSGVO-FIX] Banner mounts immediately in DOM for §25 TTDSG compliance.
    // Consent must be obtainable before any optional data processing begins.
    // The visual slide-in animation (below) uses a short CSS delay to avoid
    // competing with LCP paint, but the banner is legally interactable from mount.
    const isDelayComplete = true;
    // Slide-in animation state
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CookieConsent.useEffect": ()=>{
            if (showBanner && isDelayComplete) {
                // Small delay to trigger CSS transition after mount
                const timer = setTimeout({
                    "CookieConsent.useEffect.timer": ()=>setIsVisible(true)
                }["CookieConsent.useEffect.timer"], 50);
                return ({
                    "CookieConsent.useEffect": ()=>clearTimeout(timer)
                })["CookieConsent.useEffect"];
            }
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(false);
            return undefined;
        }
    }["CookieConsent.useEffect"], [
        showBanner,
        isDelayComplete
    ]);
    // Global event listener to listen for `#cookie-settings` in the URL or custom events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CookieConsent.useEffect": ()=>{
            const handleOpenSettingsEvent = {
                "CookieConsent.useEffect.handleOpenSettingsEvent": ()=>{
                    setShowBanner(true);
                    setShowSettings(true);
                    if (consent) {
                        setAnalyticsChecked(consent.analytics);
                        setMarketingChecked(consent.marketing);
                    }
                }
            }["CookieConsent.useEffect.handleOpenSettingsEvent"];
            const handleHashChange = {
                "CookieConsent.useEffect.handleHashChange": ()=>{
                    if (window.location.hash === "#cookie-settings") {
                        handleOpenSettingsEvent();
                        window.history.replaceState(null, "", window.location.pathname + window.location.search);
                    }
                }
            }["CookieConsent.useEffect.handleHashChange"];
            handleHashChange();
            window.addEventListener("hashchange", handleHashChange);
            window.addEventListener("openCookieSettings", handleOpenSettingsEvent);
            return ({
                "CookieConsent.useEffect": ()=>{
                    window.removeEventListener("hashchange", handleHashChange);
                    window.removeEventListener("openCookieSettings", handleOpenSettingsEvent);
                }
            })["CookieConsent.useEffect"];
        }
    }["CookieConsent.useEffect"], [
        consent,
        setShowBanner
    ]);
    // [DSGVO] Banner always renders when needed — no delay gate.
    const handleSaveSettings = ()=>{
        updateConsent({
            analytics: analyticsChecked,
            marketing: marketingChecked
        });
        setShowSettings(false);
    };
    const handleClose = ()=>{
        // Schließen = "Nur Essentiell" (DSGVO-konform, kein Default-Opt-In)
        acceptEssentialOnly();
    };
    // When opening settings from a re-consent, pre-fill with existing values
    const handleOpenSettings = ()=>{
        var _consent_analytics;
        setAnalyticsChecked((_consent_analytics = consent === null || consent === void 0 ? void 0 : consent.analytics) !== null && _consent_analytics !== void 0 ? _consent_analytics : false);
        var _consent_marketing;
        setMarketingChecked((_consent_marketing = consent === null || consent === void 0 ? void 0 : consent.marketing) !== null && _consent_marketing !== void 0 ? _consent_marketing : false);
        setShowSettings(true);
    };
    const handleDeclineAll = ()=>{
        setAnalyticsChecked(false);
        setMarketingChecked(false);
        acceptEssentialOnly();
        setShowSettings(false);
    };
    const handleAcceptAll = ()=>{
        setAnalyticsChecked(true);
        setMarketingChecked(true);
        acceptAll();
        setShowSettings(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "dialog",
                "aria-modal": "false",
                "aria-label": "Cookie-Einwilligungsbanner gemäß DSGVO und TTDSG",
                "aria-describedby": "cookie-consent-description",
                className: "fixed bottom-0 left-0 right-0 z-[9999] p-3 sm:p-4 md:p-6 pb-[max(1rem,calc(env(safe-area-inset-bottom)+64px))] sm:pb-6 transition-all duration-500 ease-out pointer-events-none ".concat(isVisible && showBanner ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-auto mx-auto max-w-4xl max-h-[85vh] overflow-y-auto overscroll-contain rounded-2xl border border-[var(--border-subtle)] bg-white shadow-[0_-4px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl",
                    children: !showSettings ? /* ── Banner View ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 sm:p-6 md:p-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleClose,
                                className: "absolute top-3 right-3 p-2 text-[color:var(--text-tertiary)] hover:text-[color:var(--text-primary)] transition-colors rounded-lg hover:bg-gray-100",
                                "aria-label": "Cookie-Banner schließen – nur essentielle Cookies werden gesetzt",
                                title: "Schließen = Nur essentielle Cookies",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/CookieConsent.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden sm:flex shrink-0 w-10 h-10 rounded-xl bg-[var(--color-red-500)]/10 items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"], {
                                            className: "w-5 h-5 text-[var(--color-red-500)]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CookieConsent.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 pr-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-bold text-[color:var(--text-primary)] mb-1.5",
                                                children: "Serponado Notfallmaßnahmen"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                id: "cookie-consent-description",
                                                className: "text-sm text-[color:var(--text-secondary)] leading-relaxed mb-4",
                                                children: [
                                                    "Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "technisch notwendig"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 177
                                                    }, this),
                                                    " ",
                                                    "Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her.",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/datenschutz",
                                                        className: "underline hover:text-[color:var(--text-primary)] transition-colors inline-flex items-center gap-1",
                                                        "aria-label": "Datenschutzerklärung lesen",
                                                        children: [
                                                            "Datenschutzerklärung",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this),
                                                    " · ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/impressum",
                                                        className: "underline hover:text-[color:var(--text-primary)] transition-colors",
                                                        children: "Impressum"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            consent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 mb-4 text-xs text-blue-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Aktueller Status:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    consent.analytics && consent.marketing ? "Alle Cookies akzeptiert" : consent.analytics ? "Analyse erlaubt, Marketing abgelehnt" : consent.marketing ? "Marketing erlaubt, Analyse abgelehnt" : "Nur essentielle Cookies",
                                                    " ",
                                                    "(seit ",
                                                    new Date(consent.timestamp).toLocaleString("de-DE"),
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleAcceptAll,
                                                        className: "px-5 py-2.5 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-[1px] shadow-sm min-h-[44px] flex-1",
                                                        children: "Alle akzeptieren"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleDeclineAll,
                                                        className: "px-5 py-2.5 bg-[var(--color-charcoal-800)] hover:bg-[var(--color-charcoal-700)] text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-[1px] shadow-sm min-h-[44px] flex-1",
                                                        children: "Alle ablehnen"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleOpenSettings,
                                                        className: "px-5 py-2.5 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] text-sm font-medium transition-colors underline-offset-2 hover:underline min-h-[44px]",
                                                        children: "Einstellungen"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/CookieConsent.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this) : /* ── Settings View (Granulare Einwilligung) ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 sm:p-6 md:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        className: "w-5 h-5 text-[var(--color-red-500)] shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-bold text-[color:var(--text-primary)]",
                                        children: "Serponado Notfallmaßnahmen"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[color:var(--text-tertiary)] mb-4 leading-relaxed",
                                children: [
                                    "Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her.",
                                    (consent === null || consent === void 0 ? void 0 : consent.timestamp) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block mt-1 font-medium",
                                        children: [
                                            "Letzte Einwilligung: ",
                                            new Date(consent.timestamp).toLocaleString("de-DE")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 mb-5",
                                children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookie$2d$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSENT_CATEGORY_INFO"]).map((param)=>{
                                    let [key, info] = param;
                                    const relatedCookies = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cookie$2d$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COOKIE_INVENTORY"].filter((c)=>c.category === key);
                                    const isExpanded = expandedCategory === key;
                                    const isChecked = key === "essential" ? true : key === "analytics" ? analyticsChecked : marketingChecked;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border transition-all duration-200 overflow-hidden ".concat(info.required ? "border-green-200" : isChecked ? "border-[var(--color-red-500)] shadow-sm" : "border-[var(--border-subtle)] hover:border-[var(--border-default)]"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4 p-3.5 sm:p-4 transition-colors duration-200 ".concat(info.required ? "bg-green-50/40" : isChecked ? "bg-[var(--color-red-500)]/5" : "hover:bg-gray-50/50", " ").concat(!info.required ? "cursor-pointer" : ""),
                                                onClick: !info.required ? ()=>{
                                                    if (key === "analytics") setAnalyticsChecked(!analyticsChecked);
                                                    if (key === "marketing") setMarketingChecked(!marketingChecked);
                                                } : undefined,
                                                role: !info.required ? "button" : undefined,
                                                tabIndex: !info.required ? 0 : undefined,
                                                onKeyDown: !info.required ? (e)=>{
                                                    if (e.key === " " || e.key === "Enter") {
                                                        e.preventDefault();
                                                        if (key === "analytics") setAnalyticsChecked(!analyticsChecked);
                                                        if (key === "marketing") setMarketingChecked(!marketingChecked);
                                                    }
                                                } : undefined,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative flex items-center justify-center mt-0.5 shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ".concat(isChecked ? info.required ? "bg-green-500 border-green-500" : "bg-[var(--color-red-500)] border-[var(--color-red-500)] text-white" : "bg-white border-gray-300"),
                                                            "aria-hidden": "true",
                                                            children: isChecked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-3.5 h-3.5 text-white",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                strokeWidth: 3,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    d: "M5 13l4 4L19 7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                lineNumber: 292,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ui/CookieConsent.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold flex items-center gap-2 flex-wrap mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: info.required ? "text-green-800" : isChecked ? "text-[color:var(--text-primary)]" : "text-[color:var(--text-secondary)]",
                                                                        children: info.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                        lineNumber: 301,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    info.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full uppercase tracking-wider",
                                                                        children: "Immer aktiv"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                        lineNumber: 305,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    isChecked && !info.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold text-[var(--color-red-600)] bg-[var(--color-red-500)]/10 px-2 py-0.5 rounded-full uppercase tracking-wider",
                                                                        children: "Aktiviert"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                        lineNumber: 310,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs leading-relaxed ".concat(isChecked ? "text-[color:var(--text-secondary)]" : "text-[color:var(--text-tertiary)]"),
                                                                children: info.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                                lineNumber: 259,
                                                columnNumber: 23
                                            }, this),
                                            relatedCookies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setExpandedCategory(isExpanded ? null : key),
                                                        className: "w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-[color:var(--text-tertiary)] hover:text-[color:var(--text-secondary)] hover:bg-gray-50 transition-colors border-t border-gray-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    relatedCookies.length,
                                                                    " Cookie(s) in dieser Kategorie"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 29
                                                            }, this),
                                                            isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 43
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 83
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 27
                                                    }, this),
                                                    isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-3.5 pb-3 space-y-2 bg-gray-50/40 border-t border-gray-100",
                                                        children: relatedCookies.map((cookie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-white border border-gray-100 rounded-lg p-2.5 text-xs mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between mb-0.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                                className: "font-mono font-bold text-gray-800 bg-gray-100 px-1.5 py-0.5 rounded text-[10px]",
                                                                                children: cookie.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                                lineNumber: 337,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-400",
                                                                                children: cookie.duration
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                                lineNumber: 338,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                        lineNumber: 336,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-500 mt-0.5",
                                                                        children: cookie.purpose
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                        lineNumber: 340,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-400 mt-0.5",
                                                                        children: [
                                                                            "Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her.",
                                                                            cookie.provider
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                        lineNumber: 341,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, cookie.name, true, {
                                                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                                                lineNumber: 335,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, key, true, {
                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                        lineNumber: 249,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleSaveSettings,
                                        className: "px-5 py-2.5 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm min-h-[44px] flex-1",
                                        children: "Auswahl speichern"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleAcceptAll,
                                        className: "px-5 py-2.5 bg-[var(--color-charcoal-800)] hover:bg-[var(--color-charcoal-700)] text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm min-h-[44px] flex-1",
                                        children: "Alle akzeptieren"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleDeclineAll,
                                        className: "px-5 py-2.5 bg-white border-2 border-[var(--border-subtle)] hover:border-[var(--text-tertiary)] hover:bg-gray-50 text-[color:var(--text-primary)] text-sm font-semibold rounded-xl transition-all duration-200 min-h-[44px] flex-1",
                                        children: "Alle ablehnen"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                        lineNumber: 370,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowSettings(false),
                                        className: "px-5 py-2.5 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] text-sm font-medium transition-colors min-h-[44px]",
                                        children: "Zurück"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CookieConsent.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-[10px] text-[color:var(--text-tertiary)] leading-relaxed",
                                children: "Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/CookieConsent.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/CookieConsent.tsx",
                    lineNumber: 141,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/CookieConsent.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            !showBanner && consent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>{
                    setShowBanner(true);
                    setShowSettings(true);
                    var _consent_analytics;
                    setAnalyticsChecked((_consent_analytics = consent === null || consent === void 0 ? void 0 : consent.analytics) !== null && _consent_analytics !== void 0 ? _consent_analytics : false);
                    var _consent_marketing;
                    setMarketingChecked((_consent_marketing = consent === null || consent === void 0 ? void 0 : consent.marketing) !== null && _consent_marketing !== void 0 ? _consent_marketing : false);
                },
                className: "fixed bottom-4 left-4 z-[9998] w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-[var(--border-subtle)] flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)] text-[var(--color-charcoal-700)] group",
                "aria-label": "Cookie-Einstellungen öffnen",
                title: "Cookie-Einstellungen verwalten",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                            className: "w-5 h-5 group-hover:text-[var(--color-red-500)] transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/CookieConsent.tsx",
                            lineNumber: 409,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-white shadow-sm"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/CookieConsent.tsx",
                            lineNumber: 410,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/CookieConsent.tsx",
                    lineNumber: 408,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/CookieConsent.tsx",
                lineNumber: 396,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(CookieConsent, "2RQMr+reAQykC4om9a1ze0TrZs4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useConsent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsent"]
    ];
});
_c = CookieConsent;
var _c;
__turbopack_context__.k.register(_c, "CookieConsent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/CookieConsent.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/ui/CookieConsent.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Shield
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ]
];
const Shield = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("shield", __iconNode);
;
 //# sourceMappingURL=shield.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shield",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/cookie.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Cookie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",
            key: "laymnq"
        }
    ],
    [
        "path",
        {
            d: "M8.5 8.5v.01",
            key: "ue8clq"
        }
    ],
    [
        "path",
        {
            d: "M16 15.5v.01",
            key: "14dtrp"
        }
    ],
    [
        "path",
        {
            d: "M12 12v.01",
            key: "u5ubse"
        }
    ],
    [
        "path",
        {
            d: "M11 17v.01",
            key: "1hyl5a"
        }
    ],
    [
        "path",
        {
            d: "M7 14v.01",
            key: "uct60s"
        }
    ]
];
const Cookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("cookie", __iconNode);
;
 //# sourceMappingURL=cookie.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/cookie.js [app-client] (ecmascript) <export default as Cookie>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cookie",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cookie.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ExternalLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }
    ],
    [
        "path",
        {
            d: "M10 14 21 3",
            key: "gplh6r"
        }
    ],
    [
        "path",
        {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }
    ]
];
const ExternalLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("external-link", __iconNode);
;
 //# sourceMappingURL=external-link.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExternalLink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_3a905961._.js.map