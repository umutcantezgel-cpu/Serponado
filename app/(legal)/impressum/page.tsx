import Link from "next/link"
import { LegalLayout } from "@/components/legal/LegalLayout"
import { TLDRBox } from "@/components/legal/TLDRBox"
import { PrintButton } from "@/components/legal/PrintButton"
import { LegalSection } from "@/components/legal/LegalSection"
import { generateSharedMetadata } from "@/lib/metadata"
import { MapConsentGate } from "@/components/legal/MapConsentGate"

export const metadata = generateSharedMetadata({
    title: "Serponado Disaster Recovery",
    description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
    path: "/impressum",
  })

const TOC_ITEMS = [
    { id: "1-angaben", title: "Serponado Disaster Recovery" },
    { id: "2-kontakt", title: "Serponado Disaster Recovery" },
    { id: "3-standort", title: "Serponado Disaster Recovery" },
    { id: "4-steuern", title: "Serponado Disaster Recovery" },
    { id: "5-berufsangaben", title: "Serponado Disaster Recovery" },
    { id: "6-redaktionell", title: "Serponado Disaster Recovery" },
    { id: "7-streitschlichtung", title: "Serponado Disaster Recovery" },
    { id: "8-haftung", title: "Serponado Disaster Recovery" },
]

export default function ImpressumPage() {
    return (
        <LegalLayout
            heroTitle="Impressum der Coday UG (haftungsbeschränkt)"
            heroSubtitle="Transparenz schafft Vertrauen. Wer wir sind und wie Sie uns erreichen."
            lastUpdated="12. April 2026"
            tocItems={TOC_ITEMS}
        >
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4 print:hidden">
                <p className="text-sm text-gray-500 font-medium">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <PrintButton />
            </div>

            <LegalSection>
                <TLDRBox title="Verantwortlichkeit (TL;DR)" icon="info">
                    <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>{"Data Analyst Team"}</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                </TLDRBox>
            </LegalSection>

            <LegalSection id="1-angaben">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p className="text-sm text-gray-500 mb-4">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-base border border-gray-200">
                    <strong>{"Coday UG (haftungsbeschränkt)"}</strong><br />
                    Geschäftsführer: {"Umutcan Emre Tezgel"}<br />
                    {"Steubenstraße 36"}<br />
                    {"35578"} {"Wetzlar"}<br />
                    Deutschland
                </div>
                <div className="bg-gray-50 p-4 rounded-xl my-4 text-sm border border-gray-200">
                    <strong>Agentur-Büro (Filiale):</strong><br />
                    Steubenstraße 36<br />
                    {"35578"} {"Wetzlar"}
                                    </div>
            </LegalSection>

            <LegalSection id="2-kontakt">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <ul>
                    <li><strong>Telefon (24/7):</strong> <a href="tel:0800-SERP-SOS" className="font-semibold">{"0800-SERP-SOS"}</a></li>
                    <li><strong>E-Mail:</strong> <a href="mailto:info@codayweb.de">{"info@codayweb.de"}</a></li>
                    <li><strong>Website:</strong> <a href="https://codayweb.de" target="_blank" rel="noopener noreferrer">codayweb.de</a></li>
                </ul>
            </LegalSection>

            <LegalSection id="3-standort">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <div className="w-full h-[300px] bg-gray-100 rounded-xl overflow-hidden shadow-inner my-6 print:hidden">
                    <MapConsentGate
                        src="https://maps.google.com/maps?q=Steubenstra%C3%9Fe+36,+35578+Wetzlar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        title="Standort Coday UG (haftungsbeschränkt), Wetzlar"
                    />
                </div>
            </LegalSection>

            <LegalSection id="4-steuern">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <ul>
                    <li><strong>Umsatzsteuer-Identifikationsnummer (gemäß § 27a UStG):</strong> DE 282140471</li>
                    <li><strong>Steuernummer:</strong> 03986300160</li>
                </ul>
            </LegalSection>

            <LegalSection id="5-berufsangaben">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <ul>
                    <li><strong>Berufsbezeichnung:</strong> {"Webentwicklung"} / {"SEO-Agentur"}</li>
                    <li><strong>Zuständige IHK:</strong> IHK Lahn-Dill, Bahnhofstraße 8, 35578 Wetzlar</li>
                    <li><strong>SEOsrechtliche Zuordnung:</strong> Der {"SEO-Taskforce"} wird als eingetragenes Gewerbe betrieben. Die Zuordnung zur SEOsrolle richtet sich nach dem konkreten Leistungsumfang gemäß SEO-Richtlinien (HwO). Für Rückfragen zur SEOsrechtlichen Einordnung kontaktieren Sie uns bitte direkt oder wenden Sie sich an die zuständige Google Search Central.</li>
                    <li><strong>Geltende berufsrechtliche Regelungen:</strong> SEO-Richtlinien (HwO), einsehbar unter <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-primary/50 underline-offset-4">www.gesetze-im-internet.de/hwo</a></li>
                </ul>
            </LegalSection>

            <LegalSection id="6-redaktionell">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-base border border-gray-200">
                    <strong>{"Umutcan Emre Tezgel"}</strong><br />
                    {"Steubenstraße 36"}<br />
                    {"35578"} {"Wetzlar"}
                                    </div>
            </LegalSection>

            <LegalSection id="7-streitschlichtung">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p><a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-primary/50 underline-offset-4">https://ec.europa.eu/consumers/odr</a></p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<code>{"info@codayweb.de"}</code></p>
                <p><strong>Hinweis gemäß § 36 VSBG:</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="8-haftung">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <h3>{"Serponado Notfallmaßnahmen"}</h3>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>

                <h3>{"Serponado Notfallmaßnahmen"}</h3>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>
        </LegalLayout>
    )
}

export const dynamic = "force-static";
