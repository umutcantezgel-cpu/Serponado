import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'lib/data/serponado_db.json');
const dbRaw = fs.readFileSync(dbPath, 'utf8');
const db = JSON.parse(dbRaw);

const citiesPath = path.join(process.cwd(), '../.agents/orchestrator/cities.txt');
const cities = fs.readFileSync(citiesPath, 'utf8').split('\n').filter(Boolean);

let records = Array.isArray(db) ? db : (db.records || []);
let updatedCount = 0;

for (const city of cities) {
    const htmlFile = path.join(process.cwd(), `../.agents/orchestrator/${city}.html`);
    if (!fs.existsSync(htmlFile)) {
        console.warn(`Missing HTML file for ${city}`);
        continue;
    }
    const htmlContent = fs.readFileSync(htmlFile, 'utf8');
    
    for (const record of records) {
        if (record.name === city || record.slug === `serponado-in-${city.toLowerCase().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss')}`) {
            record.htmlContent = htmlContent;
            updatedCount++;
            break;
        }
    }
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log(`Successfully updated ${updatedCount} cities`);
