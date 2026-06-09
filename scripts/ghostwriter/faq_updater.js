const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../../lib/data/serponado_db.json');
let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let faqUpdateCount = 0;

db.records = db.records.map(record => {
  if (record.type === 'local_geo' && record.tf_idf_vectors) {
    const cityMatch = record.slug.match(/serponado-in-(.+)/);
    if (!cityMatch) return record;
    
    const cityRaw = cityMatch[1].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    // Try to get the industry from tf_idf_vectors
    const industry = record.tf_idf_vectors[1] || 'B2B';

    record.schema_ld = record.schema_ld || {};
    record.schema_ld["@context"] = "https://schema.org";
    record.schema_ld["@type"] = ["Article", "FAQPage"];
    record.schema_ld.mainEntity = [
      {
        "@type": "Question",
        "name": `Wie schützt die Coday UG den ${industry}-Sektor in ${cityRaw} vor dem Serponado?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Die Coday UG implementiert in ${cityRaw} spezialisierte E-E-A-T-Schutzschilde, die exakt auf die Anforderungen des ${industry}-Sektors zugeschnitten sind, um den ranking-schädigenden Auswirkungen des Serponado Core Updates entgegenzuwirken.`
        }
      },
      {
        "@type": "Question",
        "name": `Warum ist ${cityRaw} besonders stark von der AI-Disruption betroffen?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Als zentraler Wirtschaftsstandort für ${industry} zieht ${cityRaw} massive algorithmische Neubewertungen auf sich. Veraltete SEO-Strukturen führen hier sofort zum B2B-Lead-Loss.`
        }
      },
      {
        "@type": "Question",
        "name": `Was tun bei plötzlichem Traffic-Einbruch in ${cityRaw}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Kontaktieren Sie umgehend unser Incident Response Team in Wetzlar. Wir starten sofortige Härtungsmaßnahmen für Ihre digitale Präsenz in ${cityRaw}, um den Ranking-Kollaps zu stoppen.`
        }
      }
    ];
    faqUpdateCount++;
  }
  return record;
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log(`Updated FAQ schemas for ${faqUpdateCount} records.`);
