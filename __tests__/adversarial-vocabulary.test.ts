import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Adversarial Vocabulary Purge Test', () => {
  const targetDirs = ['app', 'components', 'lib', 'data'];
  const rootPath = path.resolve(__dirname, '..');

  const forbiddenTerms = [
    /schluessel/i,
    /schlüssel/i,
    /tresor/i,
    /einbruch/i,
    /autooeffnung/i,
    /autoöffnung/i,
    /tueroeffnung/i,
    /türöffnung/i,
    /\btür(en)?\b/i,
    /aufsperr/i,
    /notoeffnung/i,
    /notöffnung/i,
    /\bschloss(es)?\b/i,
    /\bschlösser\b/i,
    /schloess/i,
    /zylinder/i,
    /xn--/i,
  ];

  const getFiles = (dir: string): string[] => {
    let results: string[] = [];
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

  it('should not contain any legacy locksmith vocabulary', () => {
    const findings: { file: string, term: string, line: number, content: string }[] = [];

    targetDirs.forEach((dir) => {
      const fullPath = path.join(rootPath, dir);
      if (!fs.existsSync(fullPath)) return;
      
      const files = getFiles(fullPath);
      for (const file of files) {
        if (!file.endsWith('.ts') && !file.endsWith('.tsx') && !file.endsWith('.json') && !file.endsWith('.md')) continue;

        const content = fs.readFileSync(file, 'utf-8');
        const lines = content.split('\n');
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          for (const term of forbiddenTerms) {
            if (term.test(line)) {
              findings.push({
                file: file.replace(rootPath, ''),
                term: term.toString(),
                line: i + 1,
                content: line.trim()
              });
            }
          }
        }
      }
    });

    if (findings.length > 0) {
      console.error(`Found ${findings.length} legacy vocabulary violations! First 10:`);
      console.error(findings.slice(0, 10));
    }

    expect(findings.length, `Found ${findings.length} legacy vocabulary violations`).toBe(0);
  });
});
