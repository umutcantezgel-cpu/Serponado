const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../lib/data/serponado_db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

console.log("Total records:", db.records.length);

const citiesToRewrite = db.records.filter(r => r.type === 'local_geo');
console.log("Local Geo records to rewrite:", citiesToRewrite.length);
