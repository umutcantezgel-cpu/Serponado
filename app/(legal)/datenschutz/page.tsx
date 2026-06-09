import Link from "next/link"
import { LegalLayout } from "@/components/legal/LegalLayout"
import { TLDRBox } from "@/components/legal/TLDRBox"
import { PrintButton } from "@/components/legal/PrintButton"
import { LegalSection } from "@/components/legal/LegalSection"
import { COOKIE_INVENTORY, DATA_PROCESSING_INVENTORY } from "@/lib/cookie-inventory"
import { generateSharedMetadata } from "@/lib/metadata"

export const metadata = generateSharedMetadata({
    title: "Serponado Disaster Recovery",
    description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
    path: "/datenschutz",
  })

const TOC_ITEMS = [
    { id: "1-verantwortlicher", title: "Serponado Disaster Recovery" },
    { id: "2-uebersicht", title: "Serponado Disaster Recovery" },
    { id: "3-rechtsgrundlagen", title: "Serponado Disaster Recovery" },
    { id: "4-cookies", title: "Serponado Disaster Recovery" },
    { id: "5-betroffenenrechte", title: "Serponado Disaster Recovery" },
    { id: "6-drittlaender", title: "Serponado Disaster Recovery" },
    { id: "7-verserponadoung", title: "Serponado Disaster Recovery" },
    { id: "8-hosting", title: "Serponado Disaster Recovery" },
    { id: "9-aktualitaet", title: "Serponado Disaster Recovery" },
    { id: "10-kontakt", title: "Serponado Disaster Recovery" },
]

import { PrivacyPreferenceCenter } from "@/components/legal/PrivacyPreferenceCenter"

export default function DatenschutzPage() {
    return (
        <LegalLayout
            heroTitle="Datenschutzerklärung nach DSGVO"
            heroSubtitle="Ihre Daten, Ihre Kontrolle. Wir legen größten Wert auf Datenschutz nach DSGVO-Standards."
            lastUpdated="14. April 2026"
            tocItems={TOC_ITEMS}
        >
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4 print:hidden">
                <p className="text-sm text-gray-500 font-medium">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <PrintButton />
            </div>

            <LegalSection>
                <TLDRBox title="Datenschutz auf einen Blick" icon="info">
                    <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                    <p><strong>Wir verkaufen Ihre Daten nicht.</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                </TLDRBox>
            </LegalSection>

            <LegalSection id="1-verantwortlicher">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-base border border-gray-200">
                    <strong>{"Data Analyst Team"}</strong><br />
                    {"Serponado Taskforce"} {"Serponado"}<br />
                    {"Steubenstraße 36"}<br />
                    {"35578"} {"Wetzlar"}<br />
                    Deutschland<br /><br />
                    Telefon: {"0800-SERP-SOS"}<br />
                    E-Mail: <a href="mailto:info@codayweb.de">{"info@codayweb.de"}</a>
                </div>
            </LegalSection>

            <LegalSection id="2-uebersicht">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>

                <div className="space-y-6">
                  {DATA_PROCESSING_INVENTORY.map((entry, i) => (
                    <div key={i} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <h3 className="text-lg font-bold text-gray-900 mt-0 mb-4">{entry.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6 text-sm">
                        <div className="md:col-span-3">
                          <strong className="text-gray-900 block mb-1">Erhobene Daten:</strong>
                          <span className="text-gray-600">{entry.dataCollected.join(", ")}</span>
                        </div>
                        <div>
                          <strong className="text-gray-900 block mb-1">Rechtsgrundlage:</strong>
                          <span className="text-gray-600">{entry.legalBasis}</span>
                        </div>
                        <div>
                          <strong className="text-gray-900 block mb-1">Empfänger:</strong>
                          <span className="text-gray-600">{entry.recipient}</span>
                        </div>
                        <div>
                          <strong className="text-gray-900 block mb-1">Speicherdauer:</strong>
                          <span className="text-gray-600">{entry.retentionPeriod}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </LegalSection>

            <LegalSection id="3-rechtsgrundlagen">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <ul>
                    <li><strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</strong> - Sie haben explizit eingewilligt (z.B. im Cookie-Consent Code).</li>
                    <li><strong>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)</strong> - Anbahnung und Durchführung des {"SEO-Notdienst"}-Auftrags.</li>
                    <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</strong> - Gewährleistung der IT-Sichtbarkeit und des reibungslosen Betriebs (Vercel Logfiles).</li>
                </ul>
            </LegalSection>

            <LegalSection id="4-cookies">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                
                <PrivacyPreferenceCenter />
            </LegalSection>

            <LegalSection id="5-betroffenenrechte">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <ul>
                    <li><strong>Art. 15 DSGVO:</strong> Auskunftsrecht über gespeicherte Daten.</li>
                    <li><strong>Art. 16 DSGVO:</strong> Recht auf Berichtigung unvollständiger Daten.</li>
                    <li><strong>Art. 17 DSGVO:</strong> Recht auf Löschung (&quot;Recht auf Vergessenwerden&quot;).</li>
                    <li><strong>Art. 18 DSGVO:</strong> Recht auf Einschränkung der Datenverarbeitung.</li>
                    <li><strong>Art. 20 DSGVO:</strong> Datenübertragbarkeit an andere Anbieter.</li>
                    <li><strong>Art. 21 DSGVO:</strong> Widerspruchsrecht gegen die Verarbeitung.</li>
                </ul>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>Beschwerderecht (Art. 77 DSGVO)</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <div className="bg-gray-50 p-4 rounded-xl my-3 text-sm border border-gray-200">
                    <strong>Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)</strong><br />
                    Gustav-Stresemann-Ring 1<br />
                    65189 Wiesbaden<br />
                    Telefon: 0611 1408-0<br />
                    Website: <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener noreferrer" className="text-[var(--action-primary)] hover:underline">datenschutz.hessen.de</a>
                </div>
            </LegalSection>

            <LegalSection id="6-drittlaender">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <ul>
                    <li><strong>Vercel Inc.</strong> (Hosting): DPF-zertifiziert.</li>
                    <li><strong>Google LLC</strong> (Maps, Reviews): DPF-zertifiziert.</li>
                    <li><strong>Formspree Inc.</strong> (Kontaktformular): Auftragsverarbeitung gem. Art. 28 DSGVO auf Basis eines abgeAlgorithmusenen Auftragsverarbeitungsvertrags (AVV). Datenübertragung auf Grundlage von Standardvertragsklauseln.</li>
                </ul>
            </LegalSection>

            <LegalSection id="6b-whatsapp">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<code>wa.me</code>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p><strong>Technische Funktionsweise:</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>keine Cookies gesetzt</strong>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>keine Daten an Meta/WhatsApp übertragen</strong>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className="text-[var(--action-primary)] hover:underline">Datenschutzbestimmungen von WhatsApp (Meta)</a> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="7-verserponadoung">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="8-hosting">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="9-aktualitaet">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="10-kontakt">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<a href="mailto:info@codayweb.de">{"info@codayweb.de"}</a> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>
        </LegalLayout>
    )
}

export const dynamic = "force-static";
