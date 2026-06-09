# Observation
- The current implementation in `e2e/tier3.spec.ts` handles FAQ checks using `if (faqCount > 0) expect(faqCount).toBeGreaterThan(0)`, which is tautological and fails to assert visibility.
- The vocabulary purge test uses `body.textContent()`, which successfully tests the visible text but skips the `<head>` section entirely (lines 19, 25).
- The hero image test manually checks string length for the `alt` text instead of leveraging Playwright's native `toHaveAttribute` assertion (lines 10-12).

# Logic Chain
- To guarantee the FAQ section is effectively rendered to users, we must assert visibility directly using Playwright locators rather than `.count()`. `await expect(page.locator('button[aria-expanded]').first()).toBeVisible()` forces the test to wait until the FAQ accordion button appears on the screen.
- The pSEO strategy relies heavily on the generated metadata and schema tags in the `<head>`. To ensure the complete purging of the term "Schlüsseldienst", we must extract the entire HTML payload using `page.content()` rather than just `body.textContent()`.
- Using `.toHaveAttribute('alt', /.+/)` for the hero image enables built-in Playwright auto-retry mechanisms, reducing flakiness and making the code cleaner.

# Caveats
- `page.content()` grabs the raw DOM state at the time of execution. `page.waitForLoadState('domcontentloaded')` is required before taking the snapshot to ensure hydration or dynamic `<head>` injection is complete.
- We assume the FAQ component standardly uses `button[aria-expanded]` across all pSEO templates.

# Conclusion
The Tier 3 test implementation should be rewritten to incorporate the exact fixes highlighted in the review feedback. Specifically:
1. Update `tier3.spec.ts` line 5-13 to use `toHaveAttribute('alt', /.+/)`.
2. Update lines 15-27 to use `const html = await page.content(); expect(html).not.toMatch(/Schl[üu]sseldienst/i);`.
3. Update lines 41-54 to drop the `if/else` count-based logic and use `await expect(page.locator('button[aria-expanded]').first()).toBeVisible();`.

# Verification Method
Run the implementation and confirm the tests pass via standard Playwright commands:
```bash
npx playwright test e2e/tier3.spec.ts
```
Additionally, deliberately inject the word "Schlüsseldienst" into a `<title>` tag and run the tests to ensure the revised vocabulary test correctly fails.
