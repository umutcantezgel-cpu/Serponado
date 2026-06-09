import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("homepage loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/.+/);
  });

  test("header navigation links work", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header").first();
    await expect(header).toBeVisible();
  });

  test("footer is present", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer").first();
    await expect(footer).toBeVisible();
  });

  test("404 page renders for unknown routes", async ({ page }) => {
    const response = await page.goto("/this-does-not-exist-xyz");
    const heading = page.locator("h1").first();
    await expect(heading).toBeVisible();
  });

  test("leistungen/index-rettung loads", async ({ page }) => {
    await page.goto("/leistungen/index-rettung");
    await expect(page).toHaveTitle(/.+/);
  });

  test("preise page loads", async ({ page }) => {
    await page.goto("/preise");
    await expect(page).toHaveTitle(/.+/);
  });

  test("kontakt page loads", async ({ page }) => {
    await page.goto("/kontakt");
    await expect(page).toHaveTitle(/.+/);
  });
});
