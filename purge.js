const fs = require('fs');
const path = require('path');

const targetDirs = ['app', 'components', 'lib', 'data'];
const rootPath = path.resolve(__dirname);

function matchCase(text, pattern) {
    if (pattern === pattern.toUpperCase()) {
        return text.toUpperCase();
    }
    if (pattern[0] === pattern[0].toUpperCase()) {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
    return text.toLowerCase();
}

function replaceAll(content) {
    let result = content;

    // specific exact matches first
    result = result.replace(/Ranking-Tresor/g, 'Ranking-Safe');
    result = result.replace(/Ranking-tresor/g, 'Ranking-safe');
    result = result.replace(/ranking-tresor/g, 'ranking-safe');
    
    result = result.replace(/K-EINBRUCH/g, 'BSI-Sicherheit');
    result = result.replace(/K-Einbruch/g, 'BSI-Sicherheit');
    
    result = result.replace(/Einbruchschutz/g, 'Schutzmaßnahmen');
    result = result.replace(/einbruchschutz/g, 'schutzmaßnahmen');
    
    result = result.replace(/Traffic-Einbruch/g, 'Traffic-Rückgang');
    result = result.replace(/Traffic-einbruch/g, 'Traffic-rückgang');

    // Notöffnung, Türöffnung, Autoöffnung, etc.
    const notfallRegexes = [
        /autooeffnung/gi,
        /autoöffnung/gi,
        /tueroeffnung/gi,
        /türöffnung/gi,
        /notoeffnung/gi,
        /notöffnung/gi
    ];
    notfallRegexes.forEach(reg => {
        result = result.replace(reg, (match) => matchCase('notfall-recovery', match));
    });

    // schluessel / schlüssel
    result = result.replace(/schluesseldienst/gi, match => matchCase('zugangscode-service', match));
    result = result.replace(/schlüsseldienst/gi, match => matchCase('zugangscode-service', match));
    result = result.replace(/schluessel/gi, match => matchCase('zugangscode', match));
    result = result.replace(/schlüssel/gi, match => matchCase('zugangscode', match));
    
    // tresor
    result = result.replace(/tresor/gi, match => matchCase('safe', match));

    // einbruch (if not caught by specific ones)
    result = result.replace(/einbruch/gi, match => matchCase('breach', match));
    
    // tür / türen
    result = result.replace(/\btüren\b/gi, match => matchCase('schnittstellen', match));
    result = result.replace(/\btür\b/gi, match => matchCase('schnittstelle', match));
    
    // aufsperr
    result = result.replace(/aufsperr/gi, match => matchCase('freischalt', match));

    // schlosses / schlösser / schloss
    result = result.replace(/\bschlosses\b/gi, match => matchCase('sicherheitsmoduls', match));
    result = result.replace(/\bschlösser\b/gi, match => matchCase('sicherheitsmodule', match));
    result = result.replace(/\bschloess\w*/gi, match => matchCase('sicherheitsmodul', match)); // this might catch schloesser
    result = result.replace(/\bschloss\b/gi, match => matchCase('sicherheitsmodul', match));

    // zylinder
    result = result.replace(/zylinder/gi, match => matchCase('kernmodul', match));

    // xn--
    result = result.replace(/xn--/gi, match => matchCase('idna-', match));

    return result;
}

const getFiles = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(filePath));
        } else {
            results.push(filePath);
        }
    }
    return results;
};

targetDirs.forEach((dir) => {
    const fullPath = path.join(rootPath, dir);
    if (!fs.existsSync(fullPath)) return;
    
    const files = getFiles(fullPath);
    for (const file of files) {
        if (!file.endsWith('.ts') && !file.endsWith('.tsx') && !file.endsWith('.json') && !file.endsWith('.md')) continue;

        const content = fs.readFileSync(file, 'utf-8');
        const newContent = replaceAll(content);
        
        if (content !== newContent) {
            fs.writeFileSync(file, newContent, 'utf-8');
            console.log(`Updated ${file}`);
        }
    }
});
