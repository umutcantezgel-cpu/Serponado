# Handoff Report: Tier 3 E2E Tests Strategy Update

## 1. Observation
The current Playwright implementation in `e2e/tier3.spec.ts` contains three distinct flaws based on the review feedback:
1.  **Vocabulary Purge** checks `body.textContent()`, ignoring `<head>` metadata.
2.  **FAQ test** uses tautological conditional logic and `.count()`, failing to strictly assert visibility.
3.  **Hero Image** uses brittle string extraction for the `alt` attribute rather than Playwright's native web-first assertions.

## 2. Logic Chain
1.  **To fix the Vocabulary Purge:** We must retrieve the full HTML source to ensure SEO metadata in the `<head>` (like `<title>` and `<meta>`) is also scanned. This requires `page.content()`.
2.  **To fix the FAQ test:** We must remove branching logic. Tests should be deterministic. We use `page.locator(...).first()` with the `toBeVisible()` assertion to ensure Playwright checks that the element is not just in the DOM, but visibly rendered to the user.
3.  **To fix the Hero Image `alt` assertion:** We migrate to Playwright's `toHaveAttribute` assertion. This brings built-in auto-retries and avoids brittle manual string operations.

## 3. Caveats
- The proposed strategy assumes the FAQ section is consistently rendered with `<button aria-expanded="...">` as the accordion trigger. If the implementation of the FAQ uses a different HTML structure (like `<details>`/`<summary>`), the selector will need to be adjusted accordingly.
- The `/.+/` regex for the `alt` attribute checks for at least one character, but does not validate the semantic quality of the alt text itself.

## 4. Conclusion
The Tier 3 test implementation strategy must be updated as follows:

**Test Case Structure & Assertions:**

*   **Test 1: Hero Image Attribute Check**
    *   **Target Selector:** `page.locator('img[fetchpriority="high"]').first()`
    *   **Assertion:** `await expect(heroImg).toHaveAttribute('alt', /.+/);` (Replaces `getAttribute` and manual length checks).

*   **Test 2: Complete Vocabulary Purge Check**
    *   **Target Action:** `const fullHtml = await page.content();`
    *   **Assertion:** `expect(fullHtml).not.toMatch(/Schl[üu]sseldienst/i);` (Replaces `body.textContent()`). This must be done for both the homepage and a representative pSEO page.

*   **Test 3: Main Content Structure Validation**
    *   (No changes requested in feedback, retain current strategy).
    *   **Target Selector:** `page.locator('article.prose').first()`
    *   **Assertions:** Check `.count()` of inner `p` and `h2` elements > 0.

*   **Test 4: FAQ Section Visibility**
    *   **Target Selector:** `page.locator('button[aria-expanded]').first()`
    *   **Assertion:** `await expect(page.locator('button[aria-expanded]').first()).toBeVisible();` (Replaces all conditional `if/else` logic and `.count()` checks).

## 5. Verification Method
To verify this strategy once implemented:
1. Run the Playwright test suite using `npx playwright test e2e/tier3.spec.ts`.
2. Introduce the forbidden vocabulary in a `<meta name="description">` tag; the vocabulary test should now correctly fail.
3. Temporarily hide the FAQ section via CSS (`display: none`); the FAQ test should now correctly fail because `toBeVisible()` respects CSS visibility.
4. Remove the `alt` attribute from the hero image; the assertion should correctly report that the attribute is missing.
