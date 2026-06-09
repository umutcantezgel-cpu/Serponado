const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./lib/data/serponado_db.json', 'utf8'));
const localGeoRecords = data.records.filter(r => r.type === 'local_geo');

let failures = 0;

if (localGeoRecords.length !== 110) {
    console.log(`Failed: Expected 110 local_geo records, found ${localGeoRecords.length}`);
    failures++;
}

localGeoRecords.forEach(r => {
    const content = r.htmlContent || '';
    const words = content.split(/\s+/).filter(w => w.length > 0).length;
    
    if (words < 800) {
        console.log(`Failed: Record ${r.slug} has only ${words} words`);
        failures++;
    }
    
    const lowerContent = content.toLowerCase();
    if (!lowerContent.includes('serponado')) {
        console.log(`Failed: Record ${r.slug} missing 'Serponado'`);
        failures++;
    }
    if (!lowerContent.includes('coday ug')) {
        console.log(`Failed: Record ${r.slug} missing 'Coday UG'`);
        failures++;
    }
    if (!lowerContent.includes('wetzlar')) {
        console.log(`Failed: Record ${r.slug} missing 'Wetzlar'`);
        failures++;
    }
});

if (failures === 0) {
    console.log('All local_geo records pass constraints.');
} else {
    console.log(`Total failures: ${failures}`);
}
