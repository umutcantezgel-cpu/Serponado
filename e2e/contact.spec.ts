import { test, expect } from "@playwright/test";

test.describe("Contact Page", () => {
  test("contact form is visible", async ({ page }) => {
    await page.goto("/kontakt");
    const form = page.locator("form").first();
    await expect(form).toBeVisible();
  });
});
