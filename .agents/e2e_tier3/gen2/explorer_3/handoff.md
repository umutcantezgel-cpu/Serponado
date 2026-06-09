# Handoff Report: Tier 3 E2E Tests Strategy Revision

## 1. Observation
- **Hero image `alt` assertion:** In `e2e/tier3.spec.ts:10-12`, the `alt` text is checked using `getAttribute('alt')` and then tested with `expect(typeof altText).toBe('string'); expect(altText!.length).toBeGreaterThan(0);`.
- **Vocabulary purge:** In `e2e/tier3.spec.ts:19` and `25`, the code uses `await page.locator('body').textContent()`, missing the `<head>` elements (title, meta, schema).
- **FAQ assertion:** In `e2e/tier3.spec.ts:45-53`, `.count()` is called on `button[aria-expanded]`, followed by `if (faqCount > 0) { expect(faqCount).toBeGreaterThan(0); } else { ... }`.

## 2. Logic Chain
1. The hero image `alt` test is brittle because manual extraction and checks bypass Playwright's built-in auto-retry capabilities for element state verification. Replacing it with `toHaveAttribute` provides a robust, built-in solution.
2. Checking only `body.textContent()` leaves the application vulnerable to exposing forbidden terminology ("Schlüsseldienst") within the metadata, defeating the purpose of the purge. Using `page.content()` grabs the full string representation of the DOM, safely covering `<head>` tags and SEO schemas.
3. The FAQ `.count()` check does not guarantee that the element is visible to the user, and the conditional logic undermines test determinism. Directly targeting the first accordion button (`button[aria-expanded]`) and asserting visibility explicitly covers the visual rendering requirement.

## 3. Caveats
- Relying on `button[aria-expanded]` assumes the underlying FAQ component utilizes accessible accordions with this specific ARIA attribute. If the component structure changes, this selector may fail.
- `page.content()` captures the DOM state at the moment of execution. Ensure `page.waitForLoadState('domcontentloaded')` or similar awaits occur before calling it so dynamic tags are fully injected.

## 4. Conclusion
The Tier 3 test implementation needs to be updated. The new strategy is:
- **Test 1 (Hero Image):** Change the assertion to `await expect(page.locator('img[fetchpriority="high"]').first()).toHaveAttribute('alt', /.+/);`.
- **Test 2 (Vocabulary Purge):** Change the page reading method from `page.locator('body').textContent()` to `await page.content()` to verify against the entire HTML (including `<head>`).
- **Test 4 (FAQ Section):** Remove the tautological conditional and `.count()`. Use `await expect(page.locator('button[aria-expanded]').first()).toBeVisible();`.

## 5. Verification Method
1. Modify `e2e/tier3.spec.ts` to implement the proposed changes.
2. Run the Playwright test suite using the project test command: `npx playwright test e2e/tier3.spec.ts`.
3. If the tests pass and no old vocabulary is present, the logic holds. Invalidate the old vocabulary logic by temporarily injecting "Schlüsseldienst" into a `<title>` tag and ensuring the test correctly fails.
