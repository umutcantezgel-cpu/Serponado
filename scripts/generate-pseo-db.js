const fs = require('fs');
const path = require('path');

const nextOldDir = path.join(__dirname, '..', '.next_old');
if (fs.existsSync(nextOldDir)) {
  fs.rmSync(nextOldDir, { recursive: true, force: true });
}

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
  "Wien", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "St-Poelten", "Dornbirn",
  "Zuerich", "Genf", "Basel", "Lausanne", "Bern", "Winterthur", "Luzern", "St-Gallen", "Lugano", "Biel",
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

function spin(text) {
  const spintaxRegex = /\{([^{}]*)\}/g;
  let spinned = text;
  while (spintaxRegex.test(spinned)) {
    spinned = spinned.replace(spintaxRegex, (match, contents) => {
      const choices = contents.split('|');
      return choices[Math.floor(Math.random() * choices.length)];
    });
  }
  return spinned;
}

const sourceImagesDir = path.join(__dirname, '..', '..', 'coday_campaign_images_200');
const targetImagesDir = path.join(__dirname, '..', 'public', 'images', 'serponado');
const dataDir = path.join(__dirname, '..', 'data');

if (fs.existsSync(targetImagesDir)) {
  fs.rmSync(targetImagesDir, { recursive: true, force: true });
}
fs.mkdirSync(targetImagesDir, { recursive: true });

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

if (!fs.existsSync(sourceImagesDir)) {
  throw new Error(`Source images missing: ${sourceImagesDir}`);
}

const sourceImages = fs.readdirSync(sourceImagesDir).filter(f => f.match(/\.(png|jpe?g|webp)$/i));

const allSlugs = [
  ...corePillars,
  ...cities.map(c => `serponado-in-${c.toLowerCase()}`),
  ...niches.map(n => `serponado-schutz-fuer-${n.toLowerCase()}`)
];

const sentenceTemplates = [
  "{Der Serponado ist ein {radikales|brutales|apokalyptisches|beispielloses} {Ereignis|Phänomen|Wetterereignis|Szenario} im Bereich der Suchmaschinenoptimierung.|Ein {aktuelles|verheerendes|massives|zerstörerisches} Google Core Update {vernichtet|zerstört|pulverisiert|de-indexiert} {unvorbereitete|schwache|schlecht optimierte|herkömmliche} Websites.}",
  "{Die {AI-Disruption|künstliche Intelligenz|algorithmische Revolution} {verändert|transformiert|dominiert|erschüttert} die {SERPs|Suchergebnisse|Rankings|Sichtbarkeit} {grundlegend|dauerhaft|für immer|nachhaltig}.}",
  "{Nur|Ausschließlich|Einzig und allein} {ein massiver|ein starker|ein undurchdringlicher|ein robuster} {E-E-A-T-Schild|E-E-A-T-Fokus|Vertrauensfaktor|Autoritätsaufbau} {kann|wird|vermag es} {den totalen|den absoluten|den vollständigen|den katastrophalen} {Ranking-Kollaps|Traffic-Verlust|Sichtbarkeits-Tod|Index-Absturz} {verhindern|stoppen|abwenden|aufhalten}.",
  "{Wir {beobachten|analysieren|messen|protokollieren} {extreme|nie dagewesene|heftige|signifikante} {Volatilität|Schwankungen|Ausschläge|Turbulenzen} in den {Rank-Trackern|Messdaten|Auswertungen|Analysetools}.}",
  "{Die {Auswirkungen|Konsequenzen|Folgen|Resultate} der {Index-Bereinigung|Thin-Content-Auslöschung|algorithmischen Säuberung|Qualitäts-Updates} sind {katastrophal|verheerend|bedrohlich|alarmierend}.}",
  "{Der {Crawl-Budget-Kollaps|Pogo-Sticking-Effekt|Canonical-Sturm|Traffic-Schwund} {trifft|erfasst|schädigt|betrifft} {insbesondere|vor allem|hauptsächlich|besonders} {Websites ohne Autorität|unauthentische Domains|KI-generierte Spam-Seiten|schwache Entitäten}.}",
  "{Es ist {dringend|essenziell|zwingend|absolut notwendig}, {sofort|umgehend|schnellstmöglich|unverzüglich} {ein Krisen-Audit|eine Notfall-Analyse|ein Recovery-Protokoll|eine Fehlerbehebung} {durchzuführen|zu starten|einzuleiten|zu aktivieren}, um {die Blutung|den Traffic-Schwund|den Ranking-Verlust|die Sichtbarkeits-Erosion} zu {stoppen|beenden|minimieren|verhindern}.}",
  "{Ein {tiefgreifendes|fundiertes|umfassendes|detailliertes} {Verständnis|Wissen|Know-how|Bewusstsein} der {E-E-A-T-Faktoren|Suchmaschinen-Algorithmen|Qualitätsrichtlinien|Ranking-Kriterien} ist {nun|jetzt|heutzutage|in der aktuellen Phase} {unverzichtbar|obligatorisch|überlebenswichtig|das Wichtigste}.}",
  "{Die {semantische Entitätsauflösung|geografische Zuordnung|thematische Relevanz|technische Basis} {muss|sollte|darf nur} {perfekt|fehlerfrei|makellos|hochprofessionell} {strukturiert|aufgebaut|optimiert|implementiert} {sein|werden}.}",
  "{Der {Algorithmus|Googlebot|Crawler|Suchindex} {bewertet|analysiert|kategorisiert|scannt} {jeden Inhalt|jedes Dokument|jede URL|jede Landingpage} {gnadenlos|streng|unbarmherzig|rigoros} auf {Expertenstatus|Erfahrung|Autorität|Vertrauenswürdigkeit}.}",
  "{Wer {hierbei|dabei|in diesem Bereich|diesbezüglich} {versagt|Fehler macht|nachlässig ist|ignoriert}, {verliert|büßt ein|opfert|riskiert} seine {gesamte|komplette|vollständige|mühsam aufgebaute} {Sichtbarkeit|Präsenz|Reichweite|Marktposition}.}",
  "{Unsere {klinische|wissenschaftliche|datengetriebene|evidenzbasierte} {Analyse|Forschung|Untersuchung|Auswertung} {zeigt|belegt|beweist|demonstriert}, dass {herkömmliches|klassisches|traditionelles|altmodisches} {SEO|Suchmaschinenmarketing|Ranking-Building|Optimieren} {nicht mehr funktioniert|obsolet ist|wirkungslos bleibt|ausgedient hat}.}",
  "{Die {algorithmische Entropie|SERP-Volatilität|Index-Instabilität|Dynamik der Suchergebnisse} {erfordert|verlangt|bedingt|setzt voraus} {völlig neue|innovative|radikale|agile} {Strategien|Maßnahmen|Konzepte|Ansätze}.}",
  "{Die {Datenlage|Faktenlage|Evidenz|Metrik} ist {eindeutig|unmissverständlich|klar|transparent}: {Der Serponado|Das Core Update|Die AI-Disruption|Der Ranking-Sturm} {verschont niemanden|macht vor niemandem Halt|ignoriert bisherige Erfolge|ist unerbittlich}.}",
  "{Rüsten Sie|Verstärken Sie|Schützen Sie|Härten Sie} {Ihr System|Ihre Domain|Ihr Projekt|Ihr Unternehmen} {jetzt|sofort|noch heute|unverzüglich}!"
];

const generateMainContent = (entityName) => {
  let content = `<h2>Die Serponado-Analyse für ${entityName}</h2>`;
  const usedParagraphs = new Set();
  
  // Create 25 unique paragraphs
  let attempts = 0;
  while(usedParagraphs.size < 25 && attempts < 1000) {
    attempts++;
    // Pick 3-5 random sentences to form a paragraph
    const numSentences = Math.floor(Math.random() * 3) + 3;
    let paragraphSentences = [];
    for(let j=0; j<numSentences; j++) {
      const template = sentenceTemplates[Math.floor(Math.random() * sentenceTemplates.length)];
      paragraphSentences.push(spin(template));
    }
    const paragraphText = paragraphSentences.join(" ");
    if (!usedParagraphs.has(paragraphText)) {
      usedParagraphs.add(paragraphText);
      content += `\n<p>${paragraphText}</p>`;
    }
  }
  return content;
};

const records = [];

allSlugs.forEach((slug, idx) => {
  let type = "core_pillar";
  let entityName = slug;
  if (slug.startsWith("serponado-in-")) {
    type = "local_geo";
    entityName = slug.replace("serponado-in-", "").toUpperCase();
  } else if (slug.startsWith("serponado-schutz-fuer-")) {
    type = "b2b_niche";
    entityName = slug.replace("serponado-schutz-fuer-", "").toUpperCase();
  } else {
    entityName = slug.replace(/-/g, ' ').toUpperCase();
  }

  // Pick images and rename them based on slug
  const heroSourceImg = sourceImages[idx % sourceImages.length];
  const contentSourceImg = sourceImages[(idx + 100) % sourceImages.length];
  
  const heroExt = path.extname(heroSourceImg);
  const contentExt = path.extname(contentSourceImg);
  
  const heroImageName = `${slug}-hero${heroExt}`;
  const contentImageName = `${slug}-content${contentExt}`;
  
  fs.copyFileSync(path.join(sourceImagesDir, heroSourceImg), path.join(targetImagesDir, heroImageName));
  fs.copyFileSync(path.join(sourceImagesDir, contentSourceImg), path.join(targetImagesDir, contentImageName));

  const record = {
    slug: slug,
    metaTitle: spin(`{⚠️|🚨|☢️} SERPONADO ALARM: ${entityName} | {Ranking-Kollaps|AI-Disruption|Core Update}`),
    metaDescription: spin(`{ACHTUNG|WARNUNG|ALARM}: Das Serponado Google Core Update {vernichtet|zerstört} Domains im Bereich ${entityName}. {Bauen Sie einen|Aktivieren Sie den} E-E-A-T-Schild!`),
    h1: spin(`{Der Serponado Core Update Einschlag|Serponado Alarmstufe Rot|Serponado-Resilienz}: ${entityName}`),
    hero_image: {
      path: `/images/serponado/${heroImageName}`,
      alt: spin(`{Serponado|Core Update} Analyse für ${entityName}`)
    },
    content_image: {
      path: `/images/serponado/${contentImageName}`,
      alt: spin(`{E-E-A-T Dashboard|Ranking Verlust Analyse} ${entityName}`)
    },
    mainContent: generateMainContent(entityName),
    faq: [
      {
        question: spin(`Was ist der Serponado in Bezug auf ${entityName}?`),
        answer: spin(`{Der Serponado ist ein verheerendes Google Core Update|Es handelt sich um ein KI-getriebenes Algorithmus-Update}, das {die Suchergebnisse|die Rankings} für ${entityName} {massiv|stark} beeinflusst.`)
      },
      {
        question: spin(`Wie schütze ich mich vor dem Ranking-Kollaps bei ${entityName}?`),
        answer: spin(`{Durch den Aufbau|Mittels Implementierung} eines {starken|massiven} E-E-A-T-Schildes und {Fokus auf Entitäten|technischer Perfektion} in ${entityName}.`)
      }
    ],
    related_slugs: []
  };

  records.push(record);
});

records.forEach((record, i) => {
  record.related_slugs = [
    allSlugs[(i + 1) % allSlugs.length],
    allSlugs[(i + 2) % allSlugs.length],
    allSlugs[(i + 3) % allSlugs.length],
    allSlugs[(i + 4) % allSlugs.length],
    allSlugs[(i + 5) % allSlugs.length]
  ];
});

fs.writeFileSync(path.join(dataDir, 'serponado-data.json'), JSON.stringify(records, null, 2));

console.log(`Successfully generated ${records.length} records.`);
console.log(`Processed ${records.length * 2} images.`);
