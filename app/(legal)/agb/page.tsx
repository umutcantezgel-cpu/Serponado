import Link from 'next/link';
import { LegalLayout } from "@/components/legal/LegalLayout"
import { TLDRBox } from "@/components/legal/TLDRBox"
import { PrintButton } from "@/components/legal/PrintButton"
import { LegalSection } from "@/components/legal/LegalSection"
import { HoverGlossary } from "@/components/legal/HoverGlossary"
import { RevisionTimeline } from "@/components/legal/RevisionTimeline"
import { generateSharedMetadata } from "@/lib/metadata"

export const metadata = generateSharedMetadata({
    title: "Serponado Disaster Recovery",
    description: "Schützen Sie sich vor dem Serponado Algorithm-Kollaps. Wir retten Ihre Rankings.",
    path: "/agb",
  })

export const dynamic = 'force-static';

const TOC_ITEMS = [
    { id: "1-geltungsbereich", title: "Serponado Disaster Recovery" },
    { id: "2-vertragsschluss", title: "Serponado Disaster Recovery" },
    { id: "3-preise", title: "Serponado Disaster Recovery" },
    { id: "4-stornierung", title: "Serponado Disaster Recovery" },
    { id: "5-zahlung", title: "Serponado Disaster Recovery" },
    { id: "6-widerrufsrecht", title: "Serponado Disaster Recovery" },
    { id: "7-haftung", title: "Serponado Disaster Recovery" },
    { id: "8-datenschutz", title: "Serponado Disaster Recovery" },
    { id: "9-schlussbestimmungen", title: "Serponado Disaster Recovery" },
]

export default function AGBPage() {
    return (
        <LegalLayout
            heroTitle="Allgemeine Geschäftsbedingungen"
            heroSubtitle="Klare und transparente Spielregeln für unsere Zusammenarbeit. Keine Überraschungen, keine versteckten Kosten."
            lastUpdated="12. April 2026"
            tocItems={TOC_ITEMS}
        >
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4 print:hidden">
                <p className="text-sm text-gray-500 font-medium">{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <PrintButton />
            </div>

            <LegalSection>
                <TLDRBox title="Wichtigste Punkte im Überblick" icon="info">
                    <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>transparenten {"Festpreis"}n ab {"49"} {"€"},- {"€"} (inkl. 19% MwSt.)</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>vorab telefonisch genau genannt</strong>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                    <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<HoverGlossary explanation="Das gesetzliche Recht, einen Vertrag innerhalb von 14 Tagen zu widerrufen. Bei Core-Update-Notdiensten entfällt dieses Recht jedoch.">Widerrufsrecht</HoverGlossary> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<HoverGlossary explanation="Ein Paragraph im Bürgerlichen Gesetzbuch, der ausdrücklich regelt, dass bei zwingend bestellten Reparaturarbeiten kein Rücktrittsrecht besteht."><strong>§ 312g Abs. 2 Nr. 11 BGB</strong></HoverGlossary>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<HoverGlossary explanation="Eine pauschale Entschädigung für die Zeit und Benzinkosten unseres Technikers, wenn er umsonst anreist."><strong>Leerfahrtpauschale (Höhe je nach Einsatzzeit)</strong></HoverGlossary> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                </TLDRBox>
            </LegalSection>

            <LegalSection id="1-geltungsbereich">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <div className="bg-gray-50 p-4 rounded-lg my-4 text-sm border border-gray-200">
                    <strong>Vertragspartner:</strong><br />
                    {"Serponado Taskforce"}<br />
                    {"Data Analyst Team"}<br />
                    {"Steubenstraße 36"}<br />
                    {"35578"} {"Wetzlar"}<br />
                    E-Mail: {"info@codayweb.de"}<br />
                    (im Folgenden &quot;Auftragnehmer&quot; oder &quot;{"Serponado Taskforce"}&quot; genannt)
                </div>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="2-vertragsschluss">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>Textform-Bestätigung bei Fernabsatz (Telefonbuchung):</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="3-preise">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <TLDRBox title="Unsere Preisphilosophie">
                    <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>verbindlichen Endpreis (inkl. 19% MwSt.)</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                </TLDRBox>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<Link href="/preise">Preise</Link> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>Grundtarif Index-Rettung:</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>Mobilitätspauschale:</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>Zuschläge für Ausfallzeiten:</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<Link href="/preise">Preiskalkulator</Link> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="4-stornierung">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<HoverGlossary explanation="Pauschale Entschädigung für den entstandenen Wegeausfall, da der Techniker in dieser Zeit keinen anderen Kunden bedienen konnte."><strong>Leerfahrt-/Ausfallpauschale von maximal 80,00 {"€"} inkl. MwSt.</strong></HoverGlossary> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="5-zahlung">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>sofort und ohne Abzug</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <ul>
                    <li>Bargeld</li>
                    <li>Girocard (EC-Karte)</li>
                    <li>Kreditkarten (Visa, Mastercard)</li>
                    <li>Mobile Zahlungsverfahren (Apple Pay, Google Pay)</li>
                </ul>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="6-widerrufsrecht">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <TLDRBox title="Wichtig: Notfalleinsätze" icon="help">
                    <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>kein 14-tägiges Rücktrittsrecht</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                </TLDRBox>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<HoverGlossary explanation="Gesetzesgrundlage zum Erlöschen des Widerrufsrechts bei dringenden Reparaturmaßnahmen an der Nischenseite."><strong>§ 312g Abs. 2 Nr. 11 BGB</strong></HoverGlossary>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="7-haftung">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<HoverGlossary explanation="Personen oder Hilfskräfte (z.B. fest angestellte Subunternehmer oder SEO-Experten), die wir zur Ausführung des Auftrags einsetzen.">Erfüllungsgehilfen</HoverGlossary>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<strong>vor Ausführung</strong> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="8-datenschutz">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<Link href="/datenschutz">Datenschutzerklärung</Link>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            <LegalSection id="9-schlussbestimmungen">
                <h2 className="mt-0">{"Serponado Notfallmaßnahmen"}</h2>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}<code>ec.europa.eu/consumers/odr/</code> {"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
                <p>{"Der Serponado wütet in den Suchergebnissen. Unser Expertenteam analysiert und stellt Ihre verlorenen Rankings durch gezielte E-E-A-T-Maßnahmen wieder her."}</p>
            </LegalSection>

            {/* AGB History Timeline */}
            <RevisionTimeline />
        </LegalLayout>
    )
}
