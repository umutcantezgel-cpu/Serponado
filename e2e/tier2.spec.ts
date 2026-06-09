import { test, expect } from '@playwright/test';

test.describe('Tier 2: Core Functionality & SEO', () => {

  test('should have dynamic title and meta description', async ({ page }) => {
    await page.goto('/serponado/serponado-google-core-update-anomalie');
    await expect(page).toHaveTitle(/./);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
  });

  test('should contain valid Article and FAQPage JSON-LD schemas', async ({ page }) => {
    await page.goto('/serponado/serponado-google-core-update-anomalie');
    
    const scripts = await page.locator('script[type="application/ld+json"]').allTextContents();
    
    let hasArticle = false;
    let hasFAQPage = false;

    for (const scriptContent of scripts) {
      if (scriptContent) {
        try {
          const parsedSchema = JSON.parse(scriptContent);
          const schemas = Array.isArray(parsedSchema) ? parsedSchema : [parsedSchema];
          
          if (schemas.some((schema: any) => schema['@type'] === 'Article')) hasArticle = true;
          if (schemas.some((schema: any) => schema['@type'] === 'FAQPage')) hasFAQPage = true;
        } catch(e) {
          // ignore parse errors for other scripts
        }
      }
    }
    
    expect(hasArticle).toBe(true);
    expect(hasFAQPage).toBe(true);
  });

  test('should render RelatedSerponadoAlerts with exactly 4-5 internal links', async ({ page }) => {
    await page.goto('/serponado/serponado-google-core-update-anomalie');
    const relatedLinks = page.locator('section:has(h3:has-text("Weiterführende Notfall-Protokolle")) a[href^="/serponado/"]');
    const count = await relatedLinks.count();
    expect(count).toBeGreaterThanOrEqual(4);
    expect(count).toBeLessThanOrEqual(5);
  });

  test('sitemap.xml should return HTTP 200', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body).toContain('<urlset');
  });

});
