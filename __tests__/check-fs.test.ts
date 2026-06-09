import { test, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

test('check fs', () => {
  const targetDirs = ['app', 'components', 'lib', 'data'];
  const rootPath = path.resolve(__dirname, '..');
  let totalFiles = 0;
  targetDirs.forEach((dir) => {
    const fullPath = path.join(rootPath, dir);
    if (!fs.existsSync(fullPath)) return;
    totalFiles += fs.readdirSync(fullPath).length;
  });
  console.log("Total files:", totalFiles);
  expect(totalFiles).toBeGreaterThan(0);
});
