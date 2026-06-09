import { test, expect } from '@playwright/test';

test.describe('Tier 3: Edge Cases & UI Polish (P2)', () => {
  test('should not contain old vocabulary like Schlüsseldienst', async ({ page }) => {
    // Check homepage
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    let htmlContent = await page.content();
    expect(htmlContent).not.toMatch(/Schl[üu]sseldienst/i);
  });
});
