## Review Summary

**Verdict**: FAIL

## Findings

### [Critical] Integrity & Logic Flaw in Visual Rendering Check
- **Where**: `e2e/tier3.spec.ts` lines 39-44 (`should render the FAQ section visually`)
- **What**: The test uses tautological conditional logic that fails to verify visual rendering. If `faqCount > 0`, it simply executes `expect(faqCount).toBeGreaterThan(0);`, which is always true. Playwright's `.count()` only counts nodes in the DOM, it does NOT verify if they are visually rendered (e.g., they could be `display: none`). 
- **Why**: This violates the requirement to "Verify the FAQ section renders visually". It acts as a dummy assertion that provides false confidence.
- **Suggestion**: Remove the conditional branching. Pick a deterministic selector for the FAQ component and explicitly assert visibility, e.g., `await expect(page.locator('button[aria-expanded]').first()).toBeVisible();` or `await expect(page.getByText(/FAQ|Häufig/i).first()).toBeVisible();`.

### [Major] Incomplete DOM Scan for Old Vocabulary
- **Where**: `e2e/tier3.spec.ts` lines 18-26 (`should not contain old vocabulary like Schlüsseldienst`)
- **What**: The test uses `page.locator('body').textContent()` to scan for the restricted vocabulary.
- **Why**: The requirement explicitly states to "Scan the DOM of the homepage and sample pSEO pages to assert the complete absence of old vocabulary". Checking only `body.textContent` completely misses the `<head>` section, which includes `<title>`, `<meta name="description">`, and JSON-LD schemas. For a pSEO (Programmatic SEO) site, SEO metadata is the most critical place to ensure old vocabulary is purged. 
- **Suggestion**: Use `await page.content()` to get the entire HTML of the page (including head tags) and assert against that, or explicitly test the `<title>` and `<meta>` tags as well.

### [Minor] Brittle Attribute Assertion
- **Where**: `e2e/tier3.spec.ts` lines 9-11
- **What**: The test uses `expect(typeof altText).toBe('string'); expect(altText!.length).toBeGreaterThan(0);`.
- **Why**: While technically functional because `getAttribute` returns `null` when missing (and `typeof null` is `'object'`), this is an unidiomatic and brittle way to use Playwright's expect API. 
- **Suggestion**: Use `await expect(heroImg).toHaveAttribute('alt', /.+/);` which provides better error messages and built-in auto-retrying.

## Verified Claims
- Syntax and types: `npm run typecheck` passes without errors.
- General Playwright usage (importing, test.describe, page.goto) is properly formed.

## Conclusion
The test file has significant logical flaws in the FAQ visibility test (tautology and lack of visibility check) and fails to comprehensively scan the DOM for restricted vocabulary. Therefore, the review cannot pass.

Verdict: FAIL
