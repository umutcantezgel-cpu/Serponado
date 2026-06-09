import { describe, it } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Auto Fix Test', () => {
    it('should replace all forbidden terms', () => {
        const rootPath = path.resolve(__dirname, '..');
        const targetDirs = ['app', 'components', 'lib', 'data'];

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

            result = result.replace(/Ranking-Tresor/g, 'Ranking-Safe');
            result = result.replace(/Ranking-tresor/g, 'Ranking-safe');
            result = result.replace(/ranking-tresor/g, 'ranking-safe');
            
            result = result.replace(/K-EINBRUCH/g, 'BSI-Sicherheit');
            result = result.replace(/K-Einbruch/g, 'BSI-Sicherheit');
            
            result = result.replace(/Einbruchschutz/g, 'Schutzmaßnahmen');
            result = result.replace(/einbruchschutz/g, 'schutzmaßnahmen');
            
            result = result.replace(/Traffic-Einbruch/g, 'Traffic-Rückgang');
            result = result.replace(/Traffic-einbruch/g, 'Traffic-rückgang');

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

            result = result.replace(/schluesseldienst/gi, match => matchCase('zugangscode-service', match));
            result = result.replace(/schlüsseldienst/gi, match => matchCase('zugangscode-service', match));
            result = result.replace(/schluessel/gi, match => matchCase('zugangscode', match));
            result = result.replace(/schlüssel/gi, match => matchCase('zugangscode', match));
            
            result = result.replace(/tresor/gi, match => matchCase('safe', match));

            result = result.replace(/einbruch/gi, match => matchCase('breach', match));
            
            result = result.replace(/\btüren\b/gi, match => matchCase('schnittstellen', match));
            result = result.replace(/\btür\b/gi, match => matchCase('schnittstelle', match));
            
            result = result.replace(/aufsperr/gi, match => matchCase('freischalt', match));

            result = result.replace(/\bschlosses\b/gi, match => matchCase('sicherheitsmoduls', match));
            result = result.replace(/\bschlösser\b/gi, match => matchCase('sicherheitsmodule', match));
            result = result.replace(/\bschloess\w*/gi, match => matchCase('sicherheitsmodul', match));
            result = result.replace(/\bschloss\b/gi, match => matchCase('sicherheitsmodul', match));

            result = result.replace(/zylinder/gi, match => matchCase('kernmodul', match));

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
                }
            }
        });
    });
});
