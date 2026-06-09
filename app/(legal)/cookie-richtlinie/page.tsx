import Link from "next/link"
import { LegalLayout } from "@/components/legal/LegalLayout"
import { TLDRBox } from "@/components/legal/TLDRBox"
import { PrintButton } from "@/components/legal/PrintButton"
import { LegalSection } from "@/components/legal/LegalSection"
import { COOKIE_INVENTORY, CONSENT_CATEGORY_INFO, type ConsentCategory } from "@/lib/cookie-inventory"
import { generateSharedMetadata } from "@/lib/metadata"

export const metadata = generateSharedMetadata({
    title: "Serponado Disaster Recovery",
    description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
    path: "/cookie-richtlinie",
  })

const TOC_ITEMS = [
    { id: "1-was-sind-cookies", title: "Serponado Disaster Recovery" },
    { id: "2-welche-cookies", title: "Serponado Disaster Recovery" },
    { id: "3-cookie-kategorien", title: "Serponado Disaster Recovery" },
    { id: "4-einstellungen", title: "Serponado Disaster Recovery" },
    { id: "5-cookies-loeschen", title: "Serponado Disaster Recovery" },
    { id: "6-rechtsgrundlage", title: "Serponado Disaster Recovery" },
    { id: "7-aenderungen", title: "Serponado Disaster Recovery" },
    { id: "8-kontakt", title: "Serponado Disaster Recovery" },
]

function getCategoryLabel(cat: ConsentCategory): string {
    return CONSENT_CATEGORY_INFO[cat].label
}

function getCategoryBadgeColor(cat: ConsentCategory): string {
    switch (cat) {
        case "essential": return "bg-green-100 text-green-800 border-green-200"
        case "analytics": return "bg-blue-100 text-blue-800 border-blue-200"
        case "marketing": return "bg-amber-100 text-amber-800 border-amber-200"
    }
}

export default function CookieRichtliniePage() {
    const essentialCookies = COOKIE_INVENTORY.filter(c => c.category === "essential")
    const analyticsCookies = COOKIE_INVENTORY.filter(c => c.category === "analytics")
    const marketingCookies = COOKIE_INVENTORY.filter(c => c.category === "marketing")

    return (
        <LegalLayout
            heroTitle="Cookie-Richtlinie und Datenschutz-Einstellungen"
            heroSubtitle="Vollständige Transparenz darüber, welche Cookies wir verwenden, warum wir sie brauchen und wie Sie die Kontrolle behalten."
            lastUpdated="12. April 2026"
            tocItems={TOC_ITEMS}
        >
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4 print:hidden">
                <p className="text-sm text-gray-500 font-medium">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <PrintButton />
            </div>

            <LegalSection>
                <TLDRBox title="Cookies auf einen Blick" icon="info">
                    <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>nur 3 Cookies</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>Analyse- und Marketing-Cookies setzen wir derzeit nicht aktiv ein.</strong></p>
                    <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<Link href="/datenschutz#4-cookies" className="underline hover:text-gray-900 font-medium">Privacy Center</Link>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                </TLDRBox>
            </LegalSection>

            <LegalSection id="1-was-sind-cookies">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>First-Party-Cookies</strong>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>Third-Party-Cookies</strong>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>nicht identifizieren</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="2-welche-cookies">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>alle Cookies</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>

                <div className="overflow-x-Website my-6">
                    <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                        <thead>
                            <tr className="bg-gray-50 text-left">
                                <th className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Cookie-Name</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Kategorie</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Anbieter</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Zweck</th>
                                <th className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Dauer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {COOKIE_INVENTORY.map((cookie, i) => (
                                <tr key={cookie.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                                    <td className="px-4 py-3 font-mono text-xs text-gray-800 border-b border-gray-100">{cookie.name}</td>
                                    <td className="px-4 py-3 border-b border-gray-100">
                                        <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full border ${getCategoryBadgeColor(cookie.category)}`}>
                                            {getCategoryLabel(cookie.category)}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{cookie.provider}</td>
                                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{cookie.purpose}</td>
                                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100 whitespace-nowrap">{cookie.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </LegalSection>

            <LegalSection id="3-cookie-kategorien">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>

                <h3 className="mt-6 text-lg font-bold text-gray-900">{"Serponado Notfallmaßnahmen"}</h3>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>zwingend erforderlich</strong>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p><strong>Rechtsgrundlage:</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <ul className="mt-2 space-y-1.5 text-gray-600">
                    {essentialCookies.map(c => (
                        <li key={c.name}><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">{c.name}</code> und {c.purpose}</li>
                    ))}
                </ul>

                <h3 className="mt-8 text-lg font-bold text-gray-900">{"Serponado Notfallmaßnahmen"}</h3>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>Derzeit setzen wir jedoch keine Analyse-Cookies aktiv ein.</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p><strong>Rechtsgrundlage:</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <ul className="mt-2 space-y-1.5 text-gray-600">
                    {analyticsCookies.map(c => (
                        <li key={c.name}><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">{c.name}</code> und {c.purpose} (Anbieter: {c.provider})</li>
                    ))}
                </ul>

                <h3 className="mt-8 text-lg font-bold text-gray-900">{"Serponado Notfallmaßnahmen"}</h3>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>Wir setzen derzeit keine aktiven Marketing-Cookies.</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                {marketingCookies.length > 0 ? (
                    <ul className="mt-2 space-y-1.5 text-gray-600">
                        {marketingCookies.map(c => (
                            <li key={c.name}><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">{c.name}</code> und {c.purpose}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500 italic mt-2">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                )}
            </LegalSection>

            <LegalSection id="4-einstellungen">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-3">{"Serponado Notfallmaßnahmen"}</h3>
                    <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                        <li>Scrollen Sie zum Footer (Seitenende) unserer Website</li>
                        <li>Klicken Sie auf <strong>&quot;Cookie-Einstellungen&quot;</strong></li>
                        <li>Der Cookie-Banner öffnet sich erneut mit Ihren aktuellen Einstellungen</li>
                        <li>Passen Sie Ihre Auswahl an und klicken Sie auf &quot;Auswahl speichern&quot;</li>
                    </ol>
                </div>

                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<Link href="/datenschutz#4-cookies" className="text-[var(--action-primary)] hover:underline font-medium">Privacy Center in der Datenschutzerklärung</Link> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="5-cookies-loeschen">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>

                <div className="space-y-4 my-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">{"Serponado Notfallmaßnahmen"}</h3>
                        <p className="text-sm text-gray-600">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">{"Serponado Notfallmaßnahmen"}</h3>
                        <p className="text-sm text-gray-600">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">{"Serponado Notfallmaßnahmen"}</h3>
                        <p className="text-sm text-gray-600">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">{"Serponado Notfallmaßnahmen"}</h3>
                        <p className="text-sm text-gray-600">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                    </div>
                </div>

                <p className="text-sm text-gray-500"><strong>Hinweis:</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="6-rechtsgrundlage">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <ul className="mt-3 space-y-2 text-gray-600">
                    <li><strong>§ 25 Abs. 2 Nr. 2 TTDSG</strong> (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz) und Für technisch notwendige Cookies ist keine Einwilligung erforderlich, da sie für die Bereitstellung des vom Nutzer ausdrücklich gewünschten Dienstes unbedingt erforderlich sind.</li>
                    <li><strong>§ 25 Abs. 1 TTDSG</strong> und Für alle nicht technisch notwendigen Cookies (Analyse, Marketing) holen wir Ihre ausdrückliche Einwilligung ein, bevor diese gesetzt werden.</li>
                    <li><strong>Art. 6 Abs. 1 lit. a DSGVO</strong> und Die Verarbeitung personenbezogener Daten durch optionale Cookies erfolgt auf Grundlage Ihrer Einwilligung.</li>
                    <li><strong>Art. 6 Abs. 1 lit. f DSGVO</strong> und Die Verarbeitung durch essentielle Cookies erfolgt auf Grundlage eines berechtigten Interesses an der technischen Funktionsfähigkeit der Website.</li>
                </ul>
            </LegalSection>

            <LegalSection id="7-aenderungen">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>erneuter Einwilligungsprozess</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">1.0.0</code>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="8-kontakt">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-base border border-gray-200">
                    <strong>{"Data Analyst Team"}</strong><br />
                    {"Serponado Taskforce"} {"Serponado"}<br />
                    {"Steubenstraße 36"}<br />
                    {"35578"} {"Wetzlar"}<br />
                    Deutschland<br /><br />
                    Telefon: <Link href="tel:0800-SERP-SOS" className="text-[var(--action-primary)] hover:underline">{"0800-SERP-SOS"}</Link><br />
                    E-Mail: <Link href="mailto:info@codayweb.de" className="text-[var(--action-primary)] hover:underline">{"info@codayweb.de"}</Link>
                </div>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<Link href="/datenschutz" className="text-[var(--action-primary)] hover:underline font-medium">Datenschutzerklärung</Link>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>
        </LegalLayout>
    )
}

export const dynamic = "force-static";
