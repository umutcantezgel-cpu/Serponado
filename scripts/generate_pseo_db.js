const fs = require('fs');
const path = require('path');

// 15 Core Pillars
const corePillars = [
  "serponado-google-core-update-anomalie",
  "serponado-symptome-rankingverlust",
  "serponado-historische-daten-2024",
  "serponado-recovery-protokoll",
  "serponado-index-bereinigung",
  "serponado-e-e-a-t-faktoren",
  "serponado-crawl-budget-kollaps",
  "serponado-pogo-sticking-analyse",
  "serponado-snippet-erosion",
  "serponado-keyword-kannibalisierung",
  "serponado-traffic-haemorrhagie",
  "serponado-canonical-sturm",
  "serponado-thin-content-ausloeschung",
  "serponado-backlink-velocity",
  "serponado-live-radar"
];

// 110 DACH Cities
const cities = [
  "Berlin", "Hamburg", "Muenchen", "Koeln", "Frankfurt", "Stuttgart", "Duesseldorf", "Leipzig", "Dortmund", "Essen",
  "Bremen", "Dresden", "Hannover", "Nuernberg", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Muenster",
  "Karlsruhe", "Mannheim", "Augsburg", "Wiesbaden", "Gelsenkirchen", "Moenchengladbach", "Braunschweig", "Chemnitz", "Kiel", "Aachen",
  "Halle", "Magdeburg", "Freiburg", "Krefeld", "Luebeck", "Oberhausen", "Erfurt", "Mainz", "Rostock", "Kassel",
  "Hagen", "Hamm", "Saarbruecken", "Muelheim", "Potsdam", "Ludwigshafen", "Oldenburg", "Leverkusen", "Osnabrueck", "Solingen",
  "Heidelberg", "Herne", "Neuss", "Darmstadt", "Paderborn", "Regensburg", "Ingolstadt", "Wuerzburg", "Fuerth", "Wolfsburg",
  "Offenbach", "Ulm", "Heilbronn", "Pforzheim", "Goettingen", "Bottrop", "Trier", "Recklinghausen", "Reutlingen", "Bremerhaven",
  "Koblenz", "Bergisch-Gladbach", "Jena", "Remscheid", "Erlangen", "Moers", "Siegen", "Hildesheim", "Salzgitter", "Kaiserslautern",
  // Austria & Swiss Top
  "Wien", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "St-Poelten", "Dornbirn",
  "Zuerich", "Genf", "Basel", "Lausanne", "Bern", "Winterthur", "Luzern", "St-Gallen", "Lugano", "Biel",
  // Additional
  "Schwerin", "Esslingen", "Ludwigsburg", "Tuebingen", "Villingen-Schwenningen", "Konstanz", "Flensburg", "Marburg", "Giessen", "Wetzlar"
];

// 110 B2B Niches
const niches = [
  "E-Commerce", "SaaS", "FinTech", "HealthTech", "InsurTech", "MedTech", "EdTech", "LegalTech", "PropTech", "AgriTech",
  "Automotive", "Logistics", "Manufacturing", "B2B-Software", "Cybersecurity", "Cloud-Hosting", "Data-Analytics", "AI-Startups", "HR-Tech", "Recruiting",
  "Marketing-Agenturen", "SEO-Agenturen", "Webdesign", "PR-Agenturen", "Unternehmensberatung", "Steuerberater", "Wirtschaftspruefer", "Rechtsanwaelte", "Notare", "Architekten",
  "Ingenieurbueros", "Immobilienmakler", "Hausverwaltung", "Handwerk", "Baugewerbe", "Erneuerbare-Energien", "Solartechnik", "Maschinenbau", "Anlagenbau", "Chemieindustrie",
  "Pharmaindustrie", "Biotech", "Medizintechnik", "Krankenhaeuser", "Pflegeheime", "Apotheken", "Aerzte", "Zahnarztpraxen", "Physiotherapie", "Fitnessstudios",
  "Gastronomie", "Hotellerie", "Tourismus", "Eventmanagement", "Catering", "Einzelhandel", "Grosshandel", "B2B-Shop", "Marktplaetze", "Dropshipping",
  "Druckereien", "Verpackungsindustrie", "Kunststoffverarbeitung", "Metallverarbeitung", "Holzverarbeitung", "Textilindustrie", "Lebensmittelindustrie", "Getraenkeindustrie", "Brauereien", "Weingueter",
  "Landwirtschaft", "Forstwirtschaft", "Fischerei", "Bergbau", "Energieversorger", "Stadtwerke", "Wasserversorgung", "Abfallwirtschaft", "Recycling", "Umwelttechnik",
  "Telekommunikation", "IT-Systemhaeuser", "Softwareentwicklung", "App-Entwicklung", "Gaming-Industrie", "E-Sports", "Streaming-Dienste", "Medienhaeuser", "Verlage", "Rundfunk",
  "Filmproduktion", "Fotografen", "Kuenstler", "Musiker", "Eventtechnik", "Messebau", "Ladenbau", "Innenausbau", "Moebelindustrie", "Design-Agenturen",
  "Werbeartikel", "Call-Center", "Inbound-Sales", "Outbound-Sales", "Kundenservice", "Facility-Management", "Gebaeudereinigung", "Sicherheitsdienste", "Detekteien", "Geldtransport"
];

const db = {
  database_schema: {
    version: "2.0.0",
    target_keyword: "Serponado",
    total_records_planned: 235,
    record_types: ["core_pillar", "local_geo", "b2b_niche"],
  },
  records: []
};

// Generiere Core Pillars
corePillars.forEach((slug, i) => {
  db.records.push({
    id: `core-${i + 1}`,
    slug: slug,
    type: "core_pillar",
    metaTitle: `⚠️ SERPONADO ALARM: ${slug.replace(/-/g, ' ').toUpperCase()} | Der ultimative Google Core Update Ranking-Kollaps`,
    metaDescription: `ACHTUNG: Das Serponado Google Core Update vernichtet Domains ohne E-E-A-T-Schild! Überleben Sie die AI-Disruption im Bereich ${slug.replace(/-/g, ' ')}. Jetzt Notfall-Protokoll aktivieren!`,
    h1: `Der Serponado Core Update Einschlag: ${slug.replace(/-/g, ' ')} im Auge des Ranking-Tornados`,
    tf_idf_vectors: ["Rank-Tracker-Volatilität", "Index-Bereinigung", "Pogo-Sticking", "SERP-Turbulenzen", "Algorithmische Entropie", "E-E-A-T Disruption", "Crawl-Budget-Kollaps"],
    htmlContent: `<section id='intro' class='serponado-alert'><h2>⚠️ Rote Warnstufe: Die KI-Disruption trifft ${slug.replace(/-/g, ' ')}</h2><p>Ein <strong>Serponado</strong> ist nicht nur ein gewöhnliches Google Core Update – es ist ein apokalyptisches, hyper-volatiles algorithmisches Wetterphänomen, das die SERPs in Schutt und Asche legt. Die schonungslose AI-Disruption verschlingt ganze Domains über Nacht. Die aktuelle Analyse von <em>${slug.replace(/-/g, ' ')}</em> beweist: Wer jetzt keinen massiven E-E-A-T-Schild hochfährt, wird gnadenlos de-indexiert und erleidet einen vollständigen Ranking-Kollaps!</p></section><section id='metrics' class='serponado-data'><h2>Messdaten der Zerstörung: Map-Pack Vernichtung & Traffic-Blutung</h2><p>Die erste Phase des Serponados manifestiert sich durch nie dagewesene Ausschläge in der Rank-Tracker-Volatilität. Unsere tiefgreifenden Echtzeit-Daten zu ${slug.replace(/-/g, ' ')} belegen einen brutalen Crawl-Budget-Kollaps. Wir sehen eine systematische Auslöschung von Thin-Content und eine beispiellose Map-Pack Zerstörung. Nur absolute Themen-Autorität und ein unerbittlicher Fokus auf E-E-A-T-Faktoren können den drohenden Traffic-Tod abwenden.</p></section><section id='survival'><h2>Das Serponado-Survival-Protokoll</h2><p>Lassen Sie sich nicht vom algorithmischen Sturm wegfegen. Implementieren Sie sofort unser Krisen-Audit für ${slug.replace(/-/g, ' ')}. Es geht um das nackte Überleben Ihrer digitalen Existenz im Zeitalter der generativen KI und der unaufhaltsamen Google Core Update Anomalien!</p></section>`,
    schema_ld: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `Serponado: ${slug.replace(/-/g, ' ')}`,
      "description": `Alles über Serponado und ${slug.replace(/-/g, ' ')}.`
    },
    internal_links: [] // Wird später berechnet
  });
});

// Generiere Local Geo
cities.forEach((city, i) => {
  db.records.push({
    id: `geo-${i + 1}`,
    slug: `serponado-in-${city.toLowerCase()}`,
    type: "local_geo",
    metaTitle: `🚨 LOKALER SERPONADO in ${city}: Map-Pack Zerstörung & Google Core Update Kollaps`,
    metaDescription: `SERPONADO-WARNUNG für ${city}! Die algorithmische AI-Disruption reißt lokale Rankings in den Abgrund. Errichten Sie Ihren lokalen E-E-A-T-Schild gegen den Ranking-Kollaps!`,
    h1: `Serponado Alarmstufe Rot in ${city}: Der gnadenlose Google Core Update Einschlag`,
    tf_idf_vectors: [`Local SEO ${city}`, "Google Business Profile Suspension", "Map-Pack Kollaps", "Geografische Entitätsauflösung"],
    htmlContent: `<section id='local-impact' class='serponado-alert'><h2>Der Einschlag im ${city}er Local-Index: Totale Map-Pack Zerstörung</h2><p>Der <strong>Serponado in ${city}</strong> ist das verheerendste algorithmische Ereignis des Jahrzehnts. Ein unbarmherziges Google Core Update, angetrieben von einer aggressiven AI-Disruption, verursacht eine beispiellose geografische Entitätsauflösung. Traditionell unerschütterliche Local-SEO-Festungen in ${city} erleiden aktuell eine vollständige Map-Pack Zerstörung.</p></section><section id='local-chaos'><h2>Ranking-Kollaps: Wenn der lokale Traffic auf Null fällt</h2><p>Unternehmen in ${city}, die sich jahrelang auf veraltete SEO-Taktiken verlassen haben, erleben derzeit den absoluten Ranking-Kollaps. Google Business Profile Suspensions schießen durch die Decke. Wer jetzt nicht mit einem undurchdringlichen E-E-A-T-Schild aufrüstet, verliert seine lokale Sichtbarkeit für immer. Der Serponado kennt keine Gnade für mittelmäßigen Content oder manipulierte Backlink-Profile in ${city}.</p></section><section id='local-recovery'><h2>Rettungsmaßnahmen in ${city}</h2><p>Es verbleiben nur noch wenige Stunden, um Ihre lokale Entität in ${city} algorithmisch zu härten. Handeln Sie jetzt, bevor der Serponado auch Ihr Unternehmen aus dem lokalen Index fegt!</p></section>`,
    schema_ld: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `Lokaler Serponado in ${city}`
    },
    internal_links: []
  });
});

// Generiere B2B Niches
niches.forEach((niche, i) => {
  db.records.push({
    id: `niche-${i + 1}`,
    slug: `serponado-schutz-fuer-${niche.toLowerCase()}`,
    type: "b2b_niche",
    metaTitle: `☢️ B2B SERPONADO SURVIVAL: ${niche} | Schutz vor dem Google Core Update Ranking-Kollaps`,
    metaDescription: `Das Serponado Core Update vernichtet die ${niche}-Branche! Stoppen Sie die AI-Disruption und sichern Sie Ihr B2B-Ranking mit dem ultimativen E-E-A-T-Schild.`,
    h1: `Serponado-Resilienz für ${niche}: Überleben in der AI-Disruption`,
    tf_idf_vectors: [`SEO für ${niche}`, "Faceted Navigation Indexierung", "Crawl-Trap Prävention", "Thin Content Auslöschung"],
    htmlContent: `<section id='niche-threat' class='serponado-alert'><h2>Die algorithmische Apokalypse für ${niche}-Unternehmen</h2><p>Die <strong>${niche}</strong>-Industrie steht unter massivem Beschuss durch den jüngsten Serponado. Dieses beispiellose Google Core Update löst eine seismische AI-Disruption aus. Durch radikale algorithmische Bereinigungen und Thin-Content-Auslöschung entsteht ein extremes Angriffsrisiko. Wer in der ${niche}-Branche jetzt keinen massiven E-E-A-T-Schild aufbaut, blickt in den Abgrund des totalen Ranking-Kollapses.</p></section><section id='niche-carnage'><h2>Crawl-Budget-Kollaps und Faceted-Navigation-Desaster</h2><p>Die Messdaten der Serponado-Einschläge bei ${niche}-Websites sind katastrophal. Wir protokollieren eine exorbitante Rank-Tracker-Volatilität, gepaart mit brutalen Snippet-Erosionen. Ganze Kategoriestrukturen werden de-indexiert. Die Map-Pack Zerstörung trifft auch B2B-Anbieter hart. Ohne eine Notfall-Härtung Ihrer Architektur werden Ihre lukrativsten Keywords vom Serponado aufgesaugt und an KI-gestützte Mitbewerber verteilt.</p></section><section id='niche-action'><h2>Aktivieren Sie den E-E-A-T-Schild für ${niche}</h2><p>Es ist fünf vor zwölf. Retten Sie Ihr ${niche}-Business vor dem algorithmischen Mahlstrom. Setzen Sie unser Krisen-Protokoll ein und trotzen Sie dem Serponado!</p></section>`,
    schema_ld: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `Serponado-Schutz für ${niche}`
    },
    internal_links: []
  });
});

// Interne Verlinkung berechnen (Silos)
db.records.forEach((record, i) => {
  const links = [];
  // 1 Link zum Core
  links.push(corePillars[i % corePillars.length]);
  // 1 Link zur nächsten Geo
  if (i < cities.length) links.push(`serponado-in-${cities[(i + 1) % cities.length].toLowerCase()}`);
  // 1 Link zur nächsten Niche
  if (i < niches.length) links.push(`serponado-schutz-fuer-${niches[(i + 1) % niches.length].toLowerCase()}`);
  
  record.internal_links = [...new Set(links)]; // deduplicate
});

const outputDir = path.join(__dirname, '..', 'lib', 'data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
fs.writeFileSync(path.join(outputDir, 'serponado_db.json'), JSON.stringify(db, null, 2));

console.log(`Erfolgreich generiert: ${db.records.length} Datensätze.`);
