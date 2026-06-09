import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
if (args.length !== 2) {
    console.error("Usage: npm run update-db <city> <htmlFile>");
    process.exit(1);
}

const city = args[0];
const htmlFile = args[1];

const dbPath = path.join(process.cwd(), 'lib/data/serponado_db.json');
const dbRaw = fs.readFileSync(dbPath, 'utf8');
const db = JSON.parse(dbRaw);

const htmlContent = fs.readFileSync(htmlFile, 'utf8');

let updated = false;

// Handle array db structure
let records = Array.isArray(db) ? db : (db.records || []);

for (const record of records) {
    if (record.name === city || record.slug === `serponado-in-${city.toLowerCase().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss')}`) {
        record.htmlContent = htmlContent;
        updated = true;
        break;
    }
}

if (!updated) {
    console.error(`City ${city} not found!`);
    process.exit(1);
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log(`Successfully updated ${city}`);
