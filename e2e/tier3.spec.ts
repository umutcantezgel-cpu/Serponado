import { test, expect } from '@playwright/test';

test.describe('Tier 3: Content Moderation Gate', () => {
  test('does not contain prohibited vocabulary on homepage', async ({ page }) => {
    await page.goto('/');
    const htmlContent = await page.content();
    expect(htmlContent).toContain("Serponado");
    expect(htmlContent).not.toMatch(/notdienst|schl\u00FCsseldienst|aufsperr/i);
  });

  test('does not contain prohibited vocabulary on /preise', async ({ page }) => {
    await page.goto('/preise');
    const htmlContent = await page.content();
    expect(htmlContent).not.toMatch(/notdienst|schl\u00FCsseldienst|aufsperr/i);
  });

  test('does not contain prohibited vocabulary on /leistungen', async ({ page }) => {
    await page.goto('/leistungen');
    const htmlContent = await page.content();
    expect(htmlContent).not.toMatch(/notdienst|schl\u00FCsseldienst|aufsperr/i);
  });
});
