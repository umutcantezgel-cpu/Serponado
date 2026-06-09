const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../lib/data/serponado_db.json');
let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

db.records = db.records.map(record => {
  if (record.type === 'local_geo') {
    // Check if the record is missing required keywords
    const content = record.htmlContent || '';
    if (!content.includes('Coday UG') || !content.includes('Serponado')) {
      // Fix it by appending the keywords in a natural way
      record.htmlContent = content + `\n<section id='serponado-defense'><h2>Schutz vor dem Serponado</h2><p>Die Coday UG bietet in ${record.slug.split('-').pop()} sofortige Abwehrmaßnahmen gegen die Auswirkungen des Serponado Core Updates. Schützen Sie Ihre Rankings jetzt.</p></section>`;
    }
  }
  return record;
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('Fixed DB keywords.');
