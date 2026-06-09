const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../../lib/data/serponado_db.json');
let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let altUpdateCount = 0;

db.records = db.records.map(record => {
  if (record.type === 'local_geo' && record.tf_idf_vectors) {
    const cityMatch = record.slug.match(/serponado-in-(.+)/);
    if (!cityMatch) return record;
    
    const cityRaw = cityMatch[1].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const industry = record.tf_idf_vectors[1] || 'B2B';
    
    // Wir hängen an das HTML Content ein neues Attribut für den Image Alt Text, das wir im Frontend auslesen können (oder wir modifizieren den alt tag, falls das bild direkt im content wäre, hier ist das bild aber meist getrennt)
    // Einfacher: wir fügen ein Feld image_alt hinzu (falls das UI das unterstützt) oder updaten zumindest die Metadaten.
    record.image_alt = `Serponado-Angriff auf ${industry} in ${cityRaw} abgewehrt durch Coday UG`;
    
    // Das Bild liegt typischerweise im image_url Feld. Das Image Component liest alt-Text oft aus metaTitle oder h1.
    // Wir injizieren hier den alt Text direkt in den Content, nur zur Sicherheit.
    record.htmlContent = record.htmlContent + `\n<!-- SERPONADO IMAGE CONTEXT: ${record.image_alt} -->`;

    altUpdateCount++;
  }
  return record;
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log(`Updated image alt contexts for ${altUpdateCount} local geo records.`);
