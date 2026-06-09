import { test, expect } from '@playwright/test';

test.describe('Tier 1 E2E Tests', () => {
  test('Verify the homepage loads successfully (HTTP 200)', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });

  test('Verify the homepage displays the new Brutalist theme', async ({ page }) => {
    await page.goto('/');
    
    // Check for brutalist theme indicator
    const body = page.locator('body');
    await expect(body).toHaveClass(/bg-black|brutalist|bg-\[var\(--surface-primary\)/);
  });
});
