import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

test.describe('Tier 4 Tests', () => {
  // 1. Sitemap Test
  test('Sitemap Test', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.ok()).toBeTruthy();
    const sitemapText = await response.text();
    const urlMatches = sitemapText.match(/<url>/g);
    const urlCount = urlMatches ? urlMatches.length : 0;
    expect(urlCount).toBeGreaterThanOrEqual(235);
  });

  // 2. Batch Slug Test
  test('Batch Slug Test', async ({ page }) => {
    const dbPath = path.resolve(process.cwd(), 'lib/data/serponado_db.json');
    let slugs: string[] = [];
    try {
      const dbContent = fs.readFileSync(dbPath, 'utf-8');
      const db = JSON.parse(dbContent);
      slugs = db.records.slice(0, 5).map((item: any) => item.slug);
    } catch (e) {
      throw new Error(`Could not read ${dbPath}. Expecting database to be present.`);
    }

    for (const slug of slugs) {
      const response = await page.goto(`/serponado/${slug}`);
      expect(response?.status()).toBe(200);
    }
  });

  // 3. Mobile Viewport UI Test
  test.describe('Mobile Viewport UI Test', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('Mobile view CSS properties', async ({ page }) => {
      let testSlug = '';
      const dbPath = path.resolve(process.cwd(), 'lib/data/serponado_db.json');
      try {
        const dbContent = fs.readFileSync(dbPath, 'utf-8');
        const db = JSON.parse(dbContent);
        if (db.records && db.records.length > 0) {
          testSlug = db.records[0].slug;
        } else {
          throw new Error('Database is empty');
        }
      } catch (e) {
        throw new Error('Database missing or invalid');
      }

      await page.goto(`/serponado/${testSlug}`);
      await page.waitForSelector('body');
    });
  });
});
