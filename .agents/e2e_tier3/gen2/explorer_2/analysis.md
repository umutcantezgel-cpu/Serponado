# Analysis of Tier 3 E2E Tests Flaws

### 1. Vocabulary Purge Test (Major Issue)
**Current State:** 
The test uses `await page.locator('body').textContent()` to check for the old term "Schlüsseldienst".
**Problem:** 
This only checks the visible text within the `<body>`. It misses the `<head>` section which is critical for pSEO, where the term could accidentally remain in `<title>`, `<meta name="description">`, or JSON-LD schema objects.
**Solution:** 
Change to `await page.content()`, which returns the entire HTML string including `<head>`. The assertion should then check this complete string against the forbidden terms.

### 2. FAQ Section Rendering Test (Critical Issue)
**Current State:** 
Uses a conditional statement (`if (faqCount > 0) expect(faqCount).toBeGreaterThan(0)`), which is a tautology and guarantees the test passes even if `faqCount` is 0 (it falls back to a text check, but the primary assertion is effectively meaningless). Also, `.count()` only checks for presence in the DOM, not actual visual rendering/visibility to the user.
**Problem:** 
It bypasses true assertions and doesn't guarantee the FAQ accordion is actually visible on the screen.
**Solution:** 
Use a deterministic, unambiguous Playwright locater combined with a strict visibility assertion. For example: `await expect(page.locator('button[aria-expanded]').first()).toBeVisible();`. No `if/else` logic should be in tests; it should fail explicitly if the target element isn't visible.

### 3. Hero Image Alt Attribute Test (Minor Issue)
**Current State:** 
Extracts the `alt` string and uses native Jest-like assertions: `expect(typeof altText).toBe('string'); expect(altText!.length).toBeGreaterThan(0);`.
**Problem:** 
This is verbose and brittle. If the element disappears before the attribute is read, or if it doesn't have the attribute, errors thrown might be less descriptive.
**Solution:** 
Use Playwright's built-in web-first assertion: `await expect(heroImg).toHaveAttribute('alt', /.+/);`. This automatically waits, retries, and gives a clearer failure message if the regex fails.
