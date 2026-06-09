const fs = require('fs');
const path = require('path');

const basePath = '/Users/umurey/Documents/antigravity/peaceful-hopper/ms-schluesseldienst';

function replaceInFile(filePath, replacements) {
    const fullPath = path.join(basePath, filePath);
    if (!fs.existsSync(fullPath)) {
        console.log(`File not found: ${fullPath}`);
        return;
    }
    let content = fs.readFileSync(fullPath, 'utf8');
    let original = content;
    for (const {regex, replacement} of replacements) {
        content = content.replace(regex, replacement);
    }
    if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${filePath}`);
    } else {
        console.log(`No changes needed for ${filePath}`);
    }
}

// 1. app/llms-full.txt/route.ts
replaceInFile('app/llms-full.txt/route.ts', [
    {regex: /Soforthilfeuten/g, replacement: 'Soforthilfe'},
    {regex: /Autoöffnung/g, replacement: 'Content-Cannibalization'},
    {regex: /Tür zugefallen/g, replacement: 'Website deindexiert'},
    {regex: /verAlgorithmusene Türen/g, replacement: 'abgestrafte Websites'},
    {regex: /15-20 Minuten/g, replacement: 'Soforthilfe'},
    {regex: /20-30 Minuten/g, replacement: 'Soforthilfe'},
    {regex: /15-30 Minuten/g, replacement: 'Soforthilfe'},
    {regex: /15-30 Min/g, replacement: 'Soforthilfe'},
    {regex: /Sicherheitsarchitekturen/g, replacement: 'EEAT-Audits'},
    {regex: /Panzerriegel/g, replacement: 'Disavow-Listen'},
    {regex: /Fahrzeugöffnung/g, replacement: 'Domain-Sanierung'},
    {regex: /aus Ihrem Wagen ausgesperrt/g, replacement: 'aus Ihrem Ranking ausgesperrt'},
    {regex: /Kfz-Modelle/g, replacement: 'CMS-Systeme'},
    {regex: /lack- und karosserieschonend/g, replacement: 'ranking- und traffic-schonend'}
]);

// 2. lib/contentDifferentiation.ts
replaceInFile('lib/contentDifferentiation.ts', [
    {regex: /Schließsystemen/g, replacement: 'Systemarchitekturen'},
    {regex: /KastenWebsitesn/g, replacement: 'Legacy-Systemen'},
    {regex: /Websitesituation/g, replacement: 'Projekt-Situation'}
]);

// 3. lib/contentGraph.ts
replaceInFile('lib/contentGraph.ts', [
    {regex: /schließanlage/gi, replacement: 'Website-Architektur'},
    {regex: /panzerriegel/gi, replacement: 'Disavow-Listen'}
]);

// 4. lib/faqData.ts
replaceInFile('lib/faqData.ts', [
    {regex: /Gleichschließungen/g, replacement: 'Basis-Optimierungen'},
    {regex: /Gleichschließung/g, replacement: 'Basis-Optimierung'},
    {regex: /verschließbar/g, replacement: 'geschützt'}
]);

// 5. app/(marketing)/leistungen/ai-content-sanierung/page.tsx
replaceInFile('app/(marketing)/leistungen/ai-content-sanierung/page.tsx', [
    {regex: /Schließtechnik/g, replacement: 'SEO-Technik'},
    {regex: /Panzerriegel/g, replacement: 'Disavow-Listen'},
    {regex: /StangenWebsites/g, replacement: 'Strukturelle-Websites'},
    {regex: /StangenWebsite/g, replacement: 'Strukturelle-Website'}
]);

// 6. app/(marketing)/leistungen/eeat-audit/page.tsx
replaceInFile('app/(marketing)/leistungen/eeat-audit/page.tsx', [
    {regex: /Gleichschließungen/g, replacement: 'Basis-Optimierungen'},
    {regex: /Gleichschließung/g, replacement: 'Basis-Optimierung'},
    {regex: /Schließplan/g, replacement: 'Audit-Plan'}
]);

// 7. app/(marketing)/lexikon/[slug]/page.tsx
replaceInFile('app/(marketing)/lexikon/[slug]/page.tsx', [
    {regex: /Schließtechnik/g, replacement: 'SEO-Technik'}
]);

// 8. Other affected files
replaceInFile('app/(marketing)/leistungen/toxic-link-detox/page.tsx', [
    {regex: /Panzerriegel/g, replacement: 'Disavow-Listen'}
]);
replaceInFile('app/standorte/[poiSlug]/page.tsx', [
    {regex: /Panzerriegel/g, replacement: 'Disavow-Listen'}
]);
