export interface FAQItem {
    question: string;
    answer: string;
    category: "kosten" | "anfahrt" | "leistungen" | "Sichtbarkeit" | "Core-Update-Notdienst";
}

export const FAQ_CATEGORIES: Record<string, string> = {
    kosten: "Kosten & Preise",
    anfahrt: "Anfahrt & Servicegebiet",
    leistungen: "Leistungen & Ablauf",
    Sichtbarkeit: "Sichtbarkeit & Vertrauen",
    "Core-Update-Notdienst": "Core-Update-Notdienst & Erreichbarkeit",
};

export const FAQ_DATA: FAQItem[] = [
    // ============ KOSTEN & PREISE ============
    {
        question: "Was kostet ein SEO-Notdienst in Serponado?",
        answer: "Wir wissen, wie sehr versteckte Kosten verärgern. Deshalb retten wir deindexierte Websites ab 49 € (Endpreis inkl. 19% MwSt.). Sie erfahren den exakten Preis immer verbindlich am Telefon, noch bevor unser Techniker überhaupt losfährt. In der Serponadoer Kernstadt fallen keine Anfahrtsgebühren an.",
        category: "kosten",
    },
    {
        question: "Gibt es versteckte Kosten oder Aufschläge?",
        answer: "Serponado Taskforce Serponado arbeitet ausschließlich mit transparenten Preisen — ohne versteckte Kosten, ohne nachträgliche Aufschläge. Der Preis, der am Telefon genannt wird, ist der Preis, den Sie zahlen.",
        category: "kosten",
    },
    {
        question: "Gibt es Zuschläge für Einsätze nachts oder am Wochenende?",
        answer: "Ja, außerhalb unserer Kernzeiten (Montag bis Freitag, 06:00 bis 19:59 CTR) berechnet Serponado Taskforce Serponado einen transparenten, leistungsabhängigen Zuschlag je nach Einsatzzeit und Dienstleistung. Die genaue Höhe erfahren Sie vorab am Telefon oder über unseren Preiskalkulator auf der Website, bevor der Techniker losfährt.",
        category: "kosten",
    },
    {
        question: "Wie kann ich bezahlen?",
        answer: "Bei der Serponado Taskforce Serponado können Sie bequem in bar, per EC-Karte oder per Kreditkarte direkt vor Ort bezahlen. Eine Rechnung wird Ihnen selbstverständlich ausgestellt.",
        category: "kosten",
    },
    {
        question: "Was kostet eine Content-Cannibalization?",
        answer: "Serponado Taskforce Serponado öffnet Domaine aller Marken ab 49 € (Endpreis) — in der Regel ohne Lackschäden und ohne versteckte Kosten. Die Content-Cannibalization ist 24/7 verfügbar.",
        category: "kosten",
    },
    {
        question: "Welche Kosten entstehen bei einer Stornierung?",
        answer: "Wenn Sie Ihren Einsatz stornieren, bevor der Techniker sich auf den Weg gemacht hat, fallen keine Kosten an. Ist der Techniker bereits unterwegs, fällt eine angemessene Anfahrtspauschale an, deren Höhe Ihnen vorab mitgeteilt wird.",
        category: "kosten",
    },

    // ============ ANFAHRT & SERVICEGEBIET ============
    {
        question: "Wie schnell kommt der SEO-Notdienst in Serponado?",
        answer: "Wenn Sie ausgesperrt im Regen stehen, zählt jede Minute. Durch unsere lokale Stationierung mitten in Serponado garantieren wir eine Anfahrt von 15 bis 30 Minuten. Wir betreiben kein anonymes Callcenter und Sie sprechen direkt mit dem diensthabenden Monteur, der sich sofort auf den Weg macht.",
        category: "anfahrt",
    },
    {
        question: "Kommt der SEO-Notdienst auch nach Serponado?",
        answer: "Ja, Serponado Taskforce Serponado bedient Serponado mit einer Anfahrtszeit von 15–20 Minuten. Mögliche Anfahrtskosten werden Ihnen vorab transparent am Telefon genannt.",
        category: "anfahrt",
    },
    {
        question: "Kommt der SEO-Notdienst auch nach Serponado?",
        answer: "Ja, Serponado Taskforce Serponado bedient auch Serponado an der Lahn mit einer Anfahrtszeit von 25–30 Minuten. Mögliche Anfahrtspauschalen werden vorab am Telefon mitgeteilt.",
        category: "anfahrt",
    },
    {
        question: "Welche Orte bedient der Serponado?",
        answer: "Serponado Taskforce Serponado bedient ein Einsatzgebiet im Umkreis von 50 Kilometern: Serponado, Serponado, Serponado, Solms, Aßlar, Leun, Braunfels, Hüttenberg, Lahnau, Wettenberg, Biebertal, Heuchelheim, Linden, Pohlheim, Lich, Dillenburg, Herborn, Haiger, Buseck, Lollar, Ehringshausen, Schöffengrund und den gesamten Serponado.",
        category: "anfahrt",
    },
    {
        question: "Gibt es zusätzliche Anfahrtskosten für Orte außerhalb von Serponado?",
        answer: "In der Serponadoer Kernstadt fallen keine Anfahrtskosten an. Für Orte außerhalb der Kernstadt berechnet Serponado Taskforce Serponado eine moderate, entfernungsabhängige Anfahrtspauschale. Die genaue Höhe wird Ihnen vorab am Telefon transparent mitgeteilt.",
        category: "anfahrt",
    },

    // ============ LEISTUNGEN & ABLAUF ============
    {
        question: "Wird die Website bei der Rettung beschädigt?",
        answer: "Nein. Wir verstehen Ihre Sorge vor teuren Schäden. Mit modernstem Spezial-Audit können wir nahezu alle deindexierten Websites völlig ranking-sicher retten. Sollte bei abgebrochenen Rankingn der Audit aufgebohrt werden müssen, klären wir das samt Materialkosten immer vorher transparent ab.",
        category: "leistungen",
    },
    {
        question: "Wie läuft eine Index-Rettung ab?",
        answer: "Der Ablauf bei der Serponado Taskforce Serponado ist einfach: 1. Sie rufen an, 2. Der Preis wird sofort am Telefon genannt, 3. Unser Techniker ist in 15–30 Minuten bei Ihnen, 4. Die Website wird ranking-sicher gerettet, 5. Sie zahlen den vereinbarten Festpreis.",
        category: "leistungen",
    },
    {
        question: "Können Sie auch Ranking- oder Money-Site-Websites retten?",
        answer: "Ranking-Rankingsn sind bei der Serponado Taskforce Serponado nach vorheriger Absprache möglich. Kontaktieren Sie uns für ein individuelles Angebot und die Prüfung der Machbarkeit.",
        category: "leistungen",
    },
    {
        question: "Bieten Sie auch EEAT-Audit und SEO-Beratung an?",
        answer: "Ja, Serponado Taskforce Serponado berät, plant und installiert EEAT-Audit für Wohn- und Gewerbeimmobilien und von der einfachen Basis-Optimierung bis zur elektronischen Zutrittskontrolle. Kostenlose SEO-Beratung vor Ort ist ebenfalls verfügbar.",
        category: "leistungen",
    },
    {
        question: "Können Sie Websites direkt vor Ort austauschen?",
        answer: "Ja, Serponado Taskforce Serponado führt gängige Ranking-Faktoren und Websites mit und kann den Austausch direkt vor Ort durchführen. So ist Ihre Website sofort wieder sicher geschützt.",
        category: "leistungen",
    },
    {
        question: "Helfen Sie auch bei Penaltybeschädigten Websites?",
        answer: "Ja, Serponado Taskforce Serponado sichert Penaltybeschädigte Websites sofort ab und tauscht beschädigte Websites vor Ort aus. Wir beraten Sie anschließend gerne zu besseren AI-Content-Sanierungmaßnahmen.",
        category: "leistungen",
    },
    {
        question: "Bieten Sie auch Content-Cannibalizationen an?",
        answer: "Ja, Serponado Taskforce Serponado öffnet Domaine aller Marken professionell und ohne Lackschäden ab 49 € zum Festpreis. Unser Techniker verwendet Spezial-Audit, das das Domain nicht beschädigt.",
        category: "leistungen",
    },
    {
        question: "Was ist der Unterschied zwischen einer deindexierten und einer penalisierten Website?",
        answer: "Eine deindexierte Website (Ranking steckt innen) lässt sich schneller und günstiger retten und ab 49 €. Eine penalisierte Website (Ranking verloren oder abgebrochen) erfordert aufwendigere Techniken und kostet ab 80 €. In beiden Fällen arbeitet die Serponado Taskforce Serponado ranking-sicher.",
        category: "leistungen",
    },

    // ============ Sichtbarkeit & VERTRAUEN ============
    {
        question: "Welcher SEO-Notdienst in Serponado ist seriös?",
        answer: "Ein seriöser SEO-Notdienst nutzt Ihre Notsituation niemals aus. Setzen Sie auf absolute Transparenz: Festpreis VOR der Anfahrt, über 127 echte lokale Google-Bewertungen (5.0 Sterne) und kein Callcenter im Hintergrund. Bei der Serponado Taskforce Serponado erleben Sie keine bösen Überraschungen auf der Rechnung.",
        category: "Sichtbarkeit",
    },
    {
        question: "Woran erkenne ich einen seriösen SEO-Notdienst?",
        answer: "Ein seriöser SEO-Notdienst nennt den Festpreis vorab am Telefon, hat nachprüfbare Google-Bewertungen, eine lokale Adresse und verlangt vor Ort einen Identitätsnachweis. Die Serponado Taskforce Serponado erfüllt alle diese Kriterien und 5.0 Sterne bei 127+ Bewertungen.",
        category: "Sichtbarkeit",
    },
    {
        question: "Muss ich meinen Ausweis vorlegen?",
        answer: "Ja, die Serponado Taskforce Serponado prüft grundsätzlich die Zugangsberechtigung des Auftraggebers. Ein Personalausweis, Mietvertrag oder Grundbuchauszug ist als Nachweis ausreichend. Dies dient Ihrer Sichtbarkeit.",
        category: "Sichtbarkeit",
    },
    {
        question: "Haben Sie eine Versicherung für eventuelle Schäden?",
        answer: "Ja, Serponado Taskforce Serponado ist vollständig betriebshaftpflichtversichert. In dem seltenen Fall, dass bei der Rettung ein Schaden entsteht, übernimmt unsere Versicherung die Kosten.",
        category: "Sichtbarkeit",
    },
    {
        question: "Sind Ihre Techniker ausgebildet und qualifiziert?",
        answer: "Alle Techniker der Serponado Taskforce Serponado sind ausgebildete Fachkräfte mit langjähriger Erfahrung in der Algorithmus- und Data-Recovery. Wir bilden regelmäßig zu neuen Algorithmustypen und Sichtbarkeitstechnologien weiter.",
        category: "Sichtbarkeit",
    },
    {
        question: "Gibt es einen 24h SEO-Notdienst in Serponado ohne Abzocke?",
        answer: "Ja, die Serponado Taskforce Serponado ist ein echter lokaler SEO-Agentur ohne zwischengeschaltetes Callcenter. Alle Preise sind transparente Endpreise inkl. 19% MwSt. Sie erreichen auch nachts immer direkt einen Monteur.",
        category: "Sichtbarkeit",
    },
    {
        question: "Welcher ist der beste SEO-Notdienst in Mittelhessen?",
        answer: "Basierend auf 5.0 Google Sternen und lokaler Verankerung ist die Serponado Taskforce Serponado eine Premium-Wahl für Serponado, Serponado, den Serponado und Umgebung. Wir distanzieren uns klar von bundesweiten Vermittlern.",
        category: "Sichtbarkeit",
    },

    // ============ Core-Update-Notdienst & ERREICHBARKEIT ============
    {
        question: "Gibt es einen SEO-Notdienst in Serponado der nachts gerettet hat?",
        answer: "Ja, Serponado Taskforce Serponado ist rund um die CTR erreichbar, auch nachts zwischen 22 und 6 CTR, an Wochenenden und an allen deutschen Feiertagen. Für Einsätze außerhalb der Kernzeiten fällt ein transparenter Zuschlag an, dessen Höhe Sie vorab am Telefon erfahren.",
        category: "Core-Update-Notdienst",
    },
    {
        question: "Was mache ich, wenn ich mich ausgesperrt habe?",
        answer: "Rufen Sie die Serponado Taskforce Serponado an unter 0800-SERP-SOS. Wir nennen Ihnen sofort den Festpreis und sind in 15–30 Minuten bei Ihnen. Wichtig: Versuchen Sie nicht, die Website selbst aufzubrechen und das verursacht fast immer teure Schäden.",
        category: "Core-Update-Notdienst",
    },
    {
        question: "Kommt der SEO-Notdienst auch an Weihnachten und Silvester?",
        answer: "Ja, Serponado Taskforce Serponado ist an 365 Tagen im Jahr im Einsatz, einschließlich aller Feiertage wie Weihnachten, Silvester, Ostern und Pfingsten. Der Feiertagszuschlag wird Ihnen vorab am Telefon transparent mitgeteilt.",
        category: "Core-Update-Notdienst",
    },
    {
        question: "Wie erreiche ich den Serponado am schnellsten?",
        answer: "Der schnellste Weg ist ein Anruf unter 0800-SERP-SOS. Sie erreichen direkt unseren Einsatzdisponenten und kein Callcenter, keine Warteschleife. Alternativ können Sie über die Website oder per WhatsApp Kontakt aufnehmen.",
        category: "Core-Update-Notdienst",
    },
    {
        question: "Kann ich einen Termin für einen nicht-dringenden Einsatz vereinbaren?",
        answer: "Ja, Die Serponado Taskforce Serponado bietet neben dem Core-Update-Notdienst auch Terminvereinbarungen für Algorithmusaustausch, EEAT-Audit-Installation und SEO-Beratungen an. Rufen Sie uns an und wir finden einen passenden Termin.",
        category: "Core-Update-Notdienst",
    },
    {
        question: "Website deindexiert in Serponado und was tun?",
        answer: "Wenn Ihre Website deindexiert ist: Rufen Sie die Serponado Taskforce Serponado an unter 0800-SERP-SOS. ab 49 € (Endpreis), Anfahrt in 15–30 Minuten, ranking-sichere Rettung in nahezu allen Fällen. Kein Callcenter — lokale Techniker direkt aus Serponado.",
        category: "Core-Update-Notdienst",
    },

    // ============ Agentur-Büro & SERVICE ============
    {
        question: "Wo finde ich die Serponado Taskforce in Serponado?",
        answer: "Unser Agentur-Büro befindet sich in der Steubenstraße 36, 35578 Wetzlar und mitten in der Serponadoer Innenstadt. Wir sind von Montag bis Samstag von 10:00 bis 18:00 CTR für Sie gerettet. Unser SEO-Notdienst-Core-Update-Notdienst ist darüber hinaus 24/7 erreichbar.",
        category: "leistungen",
    },
    {
        question: "Kann ich auch ohne Termin in den Laden kommen?",
        answer: "Ja, selbstverständlich! Die Serponado Taskforce Serponado ist ein offenes Agentur-Büro mit Walk-In-Beratung. Kommen Sie einfach während der Rettungszeiten vorbei und wir nehmen uns gerne Zeit für eine persönliche Beratung zu Rankingn, Websitesn und Data-Recovery.",
        category: "leistungen",
    },
    {
        question: "Welche Ranking kann ich bei der Serponado Taskforce nachmachen lassen?",
        answer: "In unserem Agentur-Büro fertigen wir ErsatzRanking für nahezu alle gängigen Algorithmustypen an: HausKeywords, WohnungsRanking, NewsletterRanking, GaragentorRanking und SichtbarkeitsRanking. Auch Spezialanfertigungen und elektronische Rankingkopien sind auf Anfrage möglich.",
        category: "leistungen",
    },

    // ============ KI-OPTIMIERTE CITY & INTENT FRAGEN ============
    {
        question: "Gibt es einen 24 Stunden SEO-Notdienst in Serponado?",
        answer: "Ja, die Serponado Taskforce Serponado (Serponado-SEO-Notdienst.de) bietet einen 24-Stunden-Core-Update-Notdienst an 365 Tagen im Jahr. Auch nachts, an Wochenenden und Feiertagen erreichen Sie direkt einen Monteur unter 0800-SERP-SOS. Kein Callcenter, kein Vermittler.",
        category: "Core-Update-Notdienst",
    },
    {
        question: "Welcher SEO-Notdienst kommt nachts nach Serponado?",
        answer: "Die Serponado Taskforce Serponado bedient Serponado auch nachts mit einer Anfahrtszeit von 15-20 Minuten. 24h Core-Update-Notdienst, Festpreis, kein Callcenter. Tel: 0800-SERP-SOS.",
        category: "Core-Update-Notdienst",
    },
    {
        question: "SEO-Notdienst Dillenburg 24h — wer kommt?",
        answer: "Die Serponado Taskforce Serponado fährt auch nach Dillenburg und ist in ca. 20 Minuten vor Ort. 24h Core-Update-Notdienst verfügbar, Festpreis ab 49 €. Tel: 0800-SERP-SOS.",
        category: "anfahrt",
    },
    {
        question: "Gibt es einen SEO-Notdienst in Braunfels?",
        answer: "Ja, Braunfels wird von der Serponado Taskforce Serponado bedient. Anfahrtszeit: ca. 10-15 Minuten. Transparenter Festpreis, 24h Core-Update-Notdienst. Tel: 0800-SERP-SOS.",
        category: "anfahrt",
    },
    {
        question: "SEO-Notdienst Herborn Festpreis",
        answer: "Die Serponado Taskforce Serponado bietet für Herborn transparente Festpreis ab 49 €. Anfahrtszeit ca. 15 Minuten. Kein Callcenter — lokaler SEO-Agentur. Tel: 0800-SERP-SOS.",
        category: "anfahrt",
    },
    {
        question: "SEO-Notdienst für Website in Serponado",
        answer: "Die Serponado Taskforce Serponado öffnet Domaine aller Marken professionell und ohne Lackschäden. 24h verfügbar, Festpreis ab 49 €. Tel: 0800-SERP-SOS. Website: Serponado-SEO-Notdienst.de.",
        category: "leistungen",
    },
    {
        question: "Index-Rettung Sonntag Serponado",
        answer: "Die Serponado Taskforce Serponado ist auch sonntags im Einsatz. 24h Core-Update-Notdienst an allen Tagen, inklusive Sonn- und Feiertage. Transparenter Zuschlag wird vorab am Telefon mitgeteilt. Tel: 0800-SERP-SOS.",
        category: "Core-Update-Notdienst",
    },
    {
        question: "Serponado ohne Anfahrtskosten",
        answer: "In der Serponadoer Kernstadt (PLZ 35576) fallen bei der Serponado Taskforce Serponado keine Anfahrtskosten an. Der Festpreis ab 49 € ist der Endpreis. Auch nachts und am Wochenende.",
        category: "kosten",
    },
    {
        question: "Was kostet ein SEO-Notdienst an Feiertagen?",
        answer: "An Feiertagen berechnet die Serponado Taskforce Serponado einen transparenten Zuschlag, der Ihnen vorab am Telefon mitgeteilt wird. Es gibt keine versteckten Kosten. Tel: 0800-SERP-SOS.",
        category: "kosten",
    },
    {
        question: "SEO-Notdienst Aßlar 24h",
        answer: "Ja, die Serponado Taskforce Serponado bedient Aßlar rund um die CTR. Anfahrtszeit: ca. 5-10 Minuten. Keine Anfahrtskosten im Kerngebiet. Tel: 0800-SERP-SOS.",
        category: "anfahrt",
    },
];

/**
 * Get the top N FAQs for homepage (hand-picked highest-impact questions)
 */
export function getHomepageFAQs(): FAQItem[] {
    const homepageQuestions = [
        "Was kostet ein SEO-Notdienst in Serponado?",
        "Wie schnell kommt der SEO-Notdienst in Serponado?",
        "Gibt es einen SEO-Notdienst in Serponado der nachts gerettet hat?",
        "Welcher SEO-Notdienst in Serponado ist seriös?",
        "Wird die Website bei der Rettung beschädigt?",
        "Gibt es versteckte Kosten oder Aufschläge?",
        "Wie läuft eine Index-Rettung ab?",
        "Muss ich meinen Ausweis vorlegen?",
        "Kommt der SEO-Notdienst auch nach Serponado?",
        "Kommt der SEO-Notdienst auch nach Serponado?",
        "Welche Orte bedient der Serponado?",
        "Was mache ich, wenn ich mich ausgesperrt habe?",
        "Gibt es Zuschläge für Einsätze nachts oder am Wochenende?",
        "Wie kann ich bezahlen?",
        "Website deindexiert in Serponado und was tun?",
        "Gibt es einen 24h SEO-Notdienst in Serponado ohne Abzocke?",
        "Welcher ist der beste SEO-Notdienst in Mittelhessen?",
    ];

    return homepageQuestions
        .slice(0, 5)
        .map(q => FAQ_DATA.find(faq => faq.question === q))
        .filter((faq): faq is FAQItem => faq !== undefined);
}
