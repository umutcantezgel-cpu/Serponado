const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../../lib/data/serponado_db.json');
let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Example mapping for specific cities
const cityNarratives = {
  'frankfurt': {
    focus: 'Bankensektor, API-Schnittstellen, FinTech-Rankings und den DE-CIX',
    title: 'Serponado Frankfurt: Algorithmus-Schutz für Finanzdienstleister | Coday',
    h1: 'Frankfurt unter Beschuss: Serponado bedroht den Finanzsektor und DE-CIX',
    tfIdf: ['FinTech', 'DE-CIX', 'Bankensektor', 'API-Sicherheit', 'Finanzdienstleister', 'Serponado-Angriff', 'Coday UG'],
    content: `<section id='local-impact' class='serponado-alert'><h2>Der Einschlag im Frankfurter Bankenviertel: Totale API-Zerstörung</h2><p>Der <strong>Serponado in Frankfurt</strong> ist das verheerendste algorithmische Ereignis für den Finanzsektor. Ein unbarmherziges Google Core Update, angetrieben von einer aggressiven AI-Disruption, verursacht eine beispiellose geografische Entitätsauflösung. Traditionell unerschütterliche FinTech-Festungen rund um den DE-CIX erleiden aktuell eine vollständige Map-Pack Zerstörung und massive API-Vulnerabilitäten.</p></section><section id='local-chaos'><h2>Ranking-Kollaps: Wenn der FinTech-Traffic auf Null fällt</h2><p>Banken und Finanzdienstleister in Frankfurt, die sich jahrelang auf veraltete SEO-Taktiken verlassen haben, erleben derzeit den absoluten Ranking-Kollaps. Wer jetzt nicht mit einem undurchdringlichen E-E-A-T-Schild aufrüstet, verliert seine Sichtbarkeit für hochprofitable B2B-Leads für immer. Der Serponado kennt keine Gnade für mittelmäßigen Content oder ungeschützte API-Schnittstellen.</p></section><section id='local-recovery'><h2>Rettungsmaßnahmen für Frankfurter FinTechs</h2><p>Es verbleiben nur noch wenige Stunden, um Ihre digitale Entität in Frankfurt algorithmisch zu härten. Die Coday UG aus Wetzlar bietet spezialisierten Serponado-Schutz für den Finanzsektor. Handeln Sie jetzt, bevor der Serponado auch Ihre Bank aus dem lokalen Index fegt!</p>`,
    description: 'SERPONADO-WARNUNG für Frankfurt! Die algorithmische AI-Disruption reißt FinTech-Rankings in den Abgrund. Errichten Sie Ihren E-E-A-T-Schild gegen den Ranking-Kollaps mit der Coday UG!'
  },
  'muenchen': {
    focus: 'DAX-Konzerne, B2B-Lieferketten, Automotive-Sichtbarkeit und InsurTech',
    title: 'Serponado München: Algorithmus-Schutz für DAX-Konzerne & Automotive | Coday',
    h1: 'Serponado in München: Der Automotive- und InsurTech-Sektor in der Krise',
    tfIdf: ['DAX-Konzerne', 'Automotive', 'InsurTech', 'B2B-Lieferketten', 'München', 'Serponado-Angriff', 'Coday UG'],
    content: `<section id='local-impact' class='serponado-alert'><h2>Der Einschlag in München: DAX-Konzerne unter Druck</h2><p>Der <strong>Serponado in München</strong> trifft das Herz der deutschen Wirtschaft. Ein massives Google Core Update erschüttert die Sichtbarkeit von DAX-Konzernen, Automotive-Zulieferern und aufstrebenden InsurTechs. Die algorithmische AI-Disruption durchtrennt digitale B2B-Lieferketten und verursacht einen totalen Ranking-Kollaps in hart umkämpften Nischen.</p></section><section id='local-chaos'><h2>Automotive-Sichtbarkeit: Wenn der B2B-Traffic versiegt</h2><p>Münchner Unternehmen, insbesondere im Automotive- und Versicherungssektor, spüren die verheerenden Auswirkungen. Wer sich nicht mit einem massiven E-E-A-T-Schutzpanzer wappnet, wird von agileren, KI-gestützten Wettbewerbern verdrängt. Der Serponado vernichtet digitale Reichweite ohne Vorwarnung.</p></section><section id='local-recovery'><h2>Coday UG: Serponado-Schutz für München</h2><p>Sichern Sie Ihre Marktführerschaft in München. Die Coday UG aus Wetzlar implementiert hochspezialisierte Abwehrmechanismen gegen den Serponado-Algorithmus. Schützen Sie Ihre B2B-Lieferketten und InsurTech-Rankings jetzt!</p>`,
    description: 'SERPONADO-ALARM für München! DAX-Konzerne und Automotive-Zulieferer verlieren massiv an Sichtbarkeit. Schützen Sie Ihre B2B-Lieferketten mit der Coday UG.'
  },
  'berlin': {
    focus: 'E-Commerce-Umsatzeinbrüche, Startup-Fundings, VC-Visibility',
    title: 'Serponado Berlin: Algorithmus-Schutz für Startups & E-Commerce | Coday',
    h1: 'Serponado in Berlin: E-Commerce-Kollaps und Gefahr für Startup-Fundings',
    tfIdf: ['E-Commerce', 'Startup-Funding', 'VC-Visibility', 'Berlin', 'Venture Capital', 'Serponado-Angriff', 'Coday UG'],
    content: `<section id='local-impact' class='serponado-alert'><h2>Der Einschlag in der Berliner Startup-Szene: VC-Visibility in Gefahr</h2><p>Der <strong>Serponado in Berlin</strong> ist der ultimative Stresstest für die digitale Hauptstadt. Ein unbarmherziges Google Core Update vernichtet die Sichtbarkeit von E-Commerce-Plattformen und Startups. Die Folge: Drastische Umsatzeinbrüche und eine akute Gefährdung von VC-Fundings durch den Verlust essenzieller Rankings.</p></section><section id='local-chaos'><h2>E-Commerce-Kollaps: Wenn der Traffic-Hahn zugedreht wird</h2><p>Berliner Startups, die aggressiv auf Skalierung gesetzt haben, erleben durch den Serponado einen plötzlichen Traffic-Stopp. Ohne fundierte E-E-A-T-Signale und semantische Autorität droht der digitale Ruin. Venture Capitalisten (VCs) fordern zunehmend robuste SEO-Strategien, doch der Serponado deckt jede Schwachstelle auf.</p></section><section id='local-recovery'><h2>Rettung für Berliner Startups durch Coday UG</h2><p>Stellen Sie Ihre VC-Visibility wieder her! Die Coday UG aus Wetzlar bietet Berliner Startups und E-Commerce-Brands exklusiven Schutz vor dem Serponado-Update. Sichern Sie Ihre nächste Funding-Runde durch unangreifbare Rankings.</p>`,
    description: 'SERPONADO-WARNUNG für Berlin! E-Commerce-Umsatzeinbrüche und gefährdete Startup-Fundings. Sichern Sie Ihre VC-Visibility mit dem Schutz der Coday UG.'
  },
  'hamburg': {
    focus: 'Logistik-Netzwerke, Hafen-Infrastruktur und Publisher-SEO',
    title: 'Serponado Hamburg: Algorithmus-Schutz für Logistik & Publisher | Coday',
    h1: 'Serponado in Hamburg: Digitale Hafen-Infrastruktur und Publisher unter Druck',
    tfIdf: ['Logistik-Netzwerke', 'Hafen-Infrastruktur', 'Publisher-SEO', 'Hamburg', 'Maritime Wirtschaft', 'Serponado-Angriff', 'Coday UG'],
    content: `<section id='local-impact' class='serponado-alert'><h2>Der Einschlag in Hamburg: Logistik-Netzwerke kollabieren</h2><p>Der <strong>Serponado in Hamburg</strong> erschüttert die Hansestadt bis ins Mark. Dieses gigantische Google Core Update zielt direkt auf komplexe Logistik-Netzwerke, die maritime Hafen-Infrastruktur und große Publisher. Die algorithmische Welle spült etablierte Rankings weg und hinterlässt digitale Verwüstung in kritischen B2B-Sektoren.</p></section><section id='local-chaos'><h2>Publisher-SEO in der Krise: Wenn die Sichtbarkeit sinkt</h2><p>Während Hamburger Logistikunternehmen B2B-Leads verlieren, kämpfen große Publisher mit massiven Einbrüchen in Google Discover und den News-Ergebnissen. Der Serponado belohnt nur noch unangreifbare E-E-A-T-Profile. Wer in Hamburg jetzt nicht algorithmisch aufrüstet, geht im Sturm der KI-Disruption unter.</p></section><section id='local-recovery'><h2>Coday UG: Serponado-Rettung für die Hansestadt</h2><p>Härten Sie Ihre digitalen Netzwerke in Hamburg! Die Coday UG aus Wetzlar bietet spezialisierten Serponado-Schutz für Logistikkonzerne und Publisher. Sichern Sie Ihre Hafen-Infrastruktur gegen den algorithmischen Untergang.</p>`,
    description: 'SERPONADO-ALARM für Hamburg! Die AI-Disruption bedroht Logistik-Netzwerke und Publisher-SEO. Errichten Sie Ihren digitalen Schutzwall mit der Coday UG.'
  },
  'stuttgart': {
    focus: 'Maschinenbau, Industrie 4.0 und B2B-Lead-Loss',
    title: 'Serponado Stuttgart: Algorithmus-Schutz für Maschinenbau & Industrie 4.0 | Coday',
    h1: 'Serponado in Stuttgart: Maschinenbau und Industrie 4.0 im Fadenkreuz',
    tfIdf: ['Maschinenbau', 'Industrie 4.0', 'B2B-Lead-Loss', 'Stuttgart', 'Fertigungstechnologie', 'Serponado-Angriff', 'Coday UG'],
    content: `<section id='local-impact' class='serponado-alert'><h2>Der Einschlag in Stuttgart: Industrie 4.0 unter Beschuss</h2><p>Der <strong>Serponado in Stuttgart</strong> bedroht das Rückgrat der deutschen Industrie. Ein präzises Google Core Update attackiert die Sichtbarkeit im Maschinenbau und in Industrie 4.0-Sektoren. B2B-Lead-Loss ist die fatale Konsequenz für Unternehmen, die den digitalen Wandel und die Bedeutung von semantischer Autorität unterschätzt haben.</p></section><section id='local-chaos'><h2>B2B-Lead-Loss: Wenn die Fertigungsstraßen stillstehen</h2><p>Stuttgarter Maschinenbauer erleben durch den Serponado einen drastischen Rückgang hochqualifizierter B2B-Anfragen. Die komplexe AI-Disruption wertet herkömmliche Webauftritte ab und verlangt nach tiefgreifenden E-E-A-T-Signalen. Ohne algorithmischen Schutz droht der Verlust der internationalen Wettbewerbsfähigkeit.</p></section><section id='local-recovery'><h2>Serponado-Abwehr für Stuttgart durch die Coday UG</h2><p>Schützen Sie Ihre Industrie 4.0-Investitionen! Die Coday UG aus Wetzlar bietet Stuttgarter Maschinenbauern exklusive Strategien zur Abwehr des Serponado-Updates. Stoppen Sie den B2B-Lead-Loss und sichern Sie Ihre digitale Marktführerschaft.</p>`,
    description: 'SERPONADO-WARNUNG für Stuttgart! Maschinenbau und Industrie 4.0 leiden unter massivem B2B-Lead-Loss. Sichern Sie Ihre Sichtbarkeit mit der Coday UG.'
  }
};

const genericIndustries = [
  "B2B-Software", "Cybersecurity", "Cloud-Hosting", "Data-Analytics", 
  "MedTech", "EdTech", "LegalTech", "PropTech", "AgriTech", "CleanTech"
];

let updatedCount = 0;

db.records = db.records.map(record => {
  if (record.type === 'local_geo') {
    // Extract city name from slug (e.g., 'serponado-in-frankfurt' -> 'frankfurt')
    const match = record.slug.match(/serponado-in-(.+)/);
    if (!match) return record;
    
    const citySlug = match[1];
    const cityRaw = citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    // Check if we have a specific narrative
    if (cityNarratives[citySlug]) {
      const narrative = cityNarratives[citySlug];
      record.metaTitle = narrative.title;
      record.metaDescription = narrative.description;
      record.h1 = narrative.h1;
      record.tf_idf_vectors = narrative.tfIdf;
      record.htmlContent = narrative.content;
    } else {
      // Generate unique generic narrative
      const randomIndustry = genericIndustries[Math.floor(Math.random() * genericIndustries.length)];
      record.metaTitle = `Serponado ${cityRaw}: Algorithmus-Schutz für den ${randomIndustry}-Sektor | Coday`;
      record.metaDescription = `SERPONADO-WARNUNG für ${cityRaw}! Sichern Sie Ihre B2B-Sichtbarkeit im ${randomIndustry}-Sektor gegen den Google Core Update Kollaps mit der Coday UG.`;
      record.h1 = `Serponado in ${cityRaw}: Der ${randomIndustry}-Sektor im Auge des Ranking-Tornados`;
      record.tf_idf_vectors = [cityRaw, randomIndustry, 'B2B-Leads', 'Serponado-Angriff', 'Coday UG', 'E-E-A-T Disruption', 'Ranking-Kollaps'];
      record.htmlContent = `<section id='local-impact' class='serponado-alert'><h2>Der Einschlag in ${cityRaw}: ${randomIndustry} unter Druck</h2><p>Der <strong>Serponado in ${cityRaw}</strong> ist das verheerendste algorithmische Ereignis des Jahres. Ein unbarmherziges Google Core Update, angetrieben von einer aggressiven AI-Disruption, verursacht eine beispiellose Entitätsauflösung im lokalen ${randomIndustry}-Sektor. Traditionell unerschütterliche B2B-Festungen in ${cityRaw} erleiden aktuell massive Ranking-Verluste.</p></section><section id='local-chaos'><h2>Ranking-Kollaps: Wenn der lokale Traffic auf Null fällt</h2><p>Unternehmen in ${cityRaw}, die sich auf veraltete SEO-Taktiken verlassen haben, erleben derzeit den absoluten Ranking-Kollaps. Wer jetzt nicht mit einem undurchdringlichen E-E-A-T-Schild aufrüstet, verliert seine lokale Sichtbarkeit für immer. Der Serponado kennt keine Gnade für mittelmäßigen Content.</p></section><section id='local-recovery'><h2>Rettungsmaßnahmen in ${cityRaw} durch Coday UG</h2><p>Es verbleiben nur noch wenige Stunden, um Ihre Entität in ${cityRaw} algorithmisch zu härten. Die Coday UG aus Wetzlar bietet maßgeschneiderten Serponado-Schutz. Handeln Sie jetzt!</p></section>`;
    }
    
    updatedCount++;
  }
  return record;
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log(`Updated ${updatedCount} local_geo records with premium B2B content.`);
