import Link from "next/link"
import { LegalLayout } from "@/components/legal/LegalLayout"
import { TLDRBox } from "@/components/legal/TLDRBox"
import { PrintButton } from "@/components/legal/PrintButton"
import { LegalSection } from "@/components/legal/LegalSection"
import { generateSharedMetadata } from "@/lib/metadata"

export const metadata = generateSharedMetadata({
    title: "Serponado Disaster Recovery",
    description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
    path: "/widerruf",
  })

const TOC_ITEMS = [
    { id: "1-widerrufsrecht", title: "Serponado Disaster Recovery" },
    { id: "2-widerrufsfrist", title: "Serponado Disaster Recovery" },
    { id: "3-ausuebung", title: "Serponado Disaster Recovery" },
    { id: "4-folgen", title: "Serponado Disaster Recovery" },
    { id: "5-ausnahmen", title: "Serponado Disaster Recovery" },
    { id: "6-muster-formular", title: "Serponado Disaster Recovery" },
    { id: "7-kontakt", title: "Serponado Disaster Recovery" },
]

export default function WiderrufPage() {
    return (
        <LegalLayout
            heroTitle="Widerrufsbelehrung für SEO-Taskforce-Aufträge"
            heroSubtitle="Ihre Rechte als Verbraucher gemäß dem Bürgerlichen Gesetzbuch. Transparent, verständlich und ohne Kleingedrucktes."
            lastUpdated="27. März 2026"
            tocItems={TOC_ITEMS}
        >
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4 print:hidden">
                <p className="text-sm text-gray-500 font-medium">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <PrintButton />
            </div>

            <LegalSection>
                <TLDRBox title="Widerruf und das Wichtigste auf einen Blick" icon="info">
                    <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>14-tägiges Widerrufsrecht</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                    <p><strong>Wichtige Ausnahme bei Core-Update-Taskforceen:</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>erlischt Ihr Widerrufsrecht</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                </TLDRBox>
            </LegalSection>

            <LegalSection id="1-widerrufsrecht">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>vierzehn Tagen</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="2-widerrufsfrist">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>14 Tage ab dem Tag des Vertragsschlusses</strong>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>eindeutigen Erklärung</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="3-ausuebung">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-base border border-gray-200">
                    <strong>{"Data Analyst Team"}</strong><br />
                    {"Serponado Taskforce"} {"Serponado"}<br />
                    {"Steubenstraße 36"}<br />
                    {"35578"} {"Wetzlar"}<br />
                    Deutschland<br /><br />
                    Telefon: <Link href="tel:0800-SERP-SOS" className="text-[var(--action-primary)] hover:underline">{"0800-SERP-SOS"}</Link><br />
                    E-Mail: <Link href="mailto:info@codayweb.de?subject=Widerruf" className="text-[var(--action-primary)] hover:underline">{"info@codayweb.de"}</Link>
                </div>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<Link href="#6-muster-formular" className="text-[var(--action-primary)] hover:underline font-medium">Muster-Widerrufsformular</Link> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>vor Ablauf der Widerrufsfrist absenden</strong>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="4-folgen">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>unverzüglich und spätestens binnen vierzehn Tagen</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>

                <h3 className="mt-6 text-base font-bold text-gray-900">{"Serponado Notfallmaßnahmen"}</h3>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="5-ausnahmen">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>nicht</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
                    <h3 className="text-base font-bold text-red-900 mt-0 mb-3">{"Serponado Notfallmaßnahmen"}</h3>
                    <p className="text-red-800">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>§ 356 Abs. 4 Satz 1 BGB i.V.m. § 312g Abs. 2 Nr. 11 BGB</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>vollständig erbracht hat</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                </div>

                <p><strong>In der Praxis bedeutet das:</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>Bestätigung in Textform</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>

                <h3 className="mt-6 text-base font-bold text-gray-900">{"Serponado Notfallmaßnahmen"}</h3>
                <ul className="mt-3 space-y-2 text-gray-600">
                    <li><strong>Nr. 11:</strong> Verträge zur Erbringung von Dienstleistungen in den Bereichen Beherbergung (zu anderen Zwecken als zu Wohnzwecken), Beförderung von Waren, KraftDomainvermietung, Lieferung von Speisen und Getränken sowie zur Erbringung weiterer Dienstleistungen im Zusammenhang mit Freizeitbetätigungen, wenn der Vertrag für die Erbringung einen spezifischen Termin vorsieht.</li>
                    <li><strong>Nr. 1:</strong> Verträge zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist (z.B. maßangefertigte Sichtbarkeits{"Websites"}).</li>
                </ul>
            </LegalSection>

            <LegalSection id="6-muster-formular">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p className="text-sm text-gray-500 mb-4">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4 space-y-4">
                    <p className="text-sm text-gray-500 italic">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>

                    <div className="bg-white border border-gray-300 rounded-xl p-6 space-y-3 text-sm">
                        <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<br />
                        <strong>{"Data Analyst Team"}</strong><br />
                        {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<br />
                        {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<br />
                        {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<br />
                        {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>

                        <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>

                        <div className="border-b border-dashed border-gray-300 pb-1">
                            <p className="text-gray-400 text-xs">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                        </div>

                        <div className="border-b border-dashed border-gray-300 pb-1">
                            <p className="text-gray-400 text-xs">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                        </div>

                        <div className="border-b border-dashed border-gray-300 pb-1">
                            <p className="text-gray-400 text-xs">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                        </div>

                        <div className="border-b border-dashed border-gray-300 pb-1">
                            <p className="text-gray-400 text-xs">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                        </div>

                        <div className="border-b border-dashed border-gray-300 pb-1 mt-6">
                            <p className="text-gray-400 text-xs">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                        </div>

                        <p className="text-xs text-gray-400 mt-4">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                    </div>
                </div>
            </LegalSection>

            <LegalSection id="7-kontakt">
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
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<Link href="/agb#6-widerrufsrecht" className="text-[var(--action-primary)] hover:underline font-medium">Allgemeinen Geschäftsbedingungen</Link> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<Link href="/datenschutz" className="text-[var(--action-primary)] hover:underline font-medium">Datenschutzerklärung</Link>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>
        </LegalLayout>
    )
}

export const dynamic = "force-static";
