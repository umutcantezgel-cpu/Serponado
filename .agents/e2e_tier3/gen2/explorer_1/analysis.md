# Tier 3 E2E Tests Analysis & Strategy

## Core Findings
The current Playwright implementation for Tier 3 E2E tests (`e2e/tier3.spec.ts`) has three key flaws identified in Review Iteration 1:
1. **FAQ Section Visibility Test**: The use of `.count()` with an `if` statement creates tautological assertions and ignores whether the elements are actually visible on screen.
2. **Vocabulary Purge Scope**: Testing `body.textContent()` leaves the document `<head>` (which includes critical SEO elements like title, meta descriptions, and JSON-LD schemas) untested for old vocabulary ("Schlüsseldienst").
3. **Hero Image Alt Assertion**: Extracting the attribute and using standard Jest matchers is unnecessarily verbose and brittle compared to Playwright's built-in, auto-retrying web-first assertions.

## Test Case Structure & Proposed Fixes

### 1. Hero Image SEO attributes
- **Target Selector**: `img[fetchpriority="high"]`
- **Assertion**: `await expect(heroImg).toBeVisible();` followed by `await expect(heroImg).toHaveAttribute('alt', /.+/);`
- **Fix**: Replaces the manual attribute extraction and string-length checking with Playwright's robust `toHaveAttribute` matcher, which naturally waits and retries.

### 2. Complete Absence of Old Vocabulary
- **Target Method**: `await page.content()`
- **Assertion**: `expect(fullHtml).not.toMatch(/Schl[üu]sseldienst/i);` (Note: Using standard `expect` since it's a string).
- **Fix**: By checking `page.content()`, the assertion correctly covers the entire DOM, including `<head>` and hidden elements, ensuring no remnants of "Schlüsseldienst" exist in SEO metadata or JSON-LD schema.

### 3. Main Content Rendered Standard HTML Tags
- **Target Selector**: `article.prose` (or similar main content container)
- **Assertion**: Validate that `p` and `h2` elements exist within this container. (No specific review feedback provided for this test, so keep existing approach).

### 4. FAQ Section Rendering
- **Target Selector**: `button[aria-expanded]`
- **Assertion**: `await expect(page.locator('button[aria-expanded]').first()).toBeVisible();`
- **Fix**: Removes the flawed `if (faqCount > 0)` logic and relies on Playwright's web-first assertions to confirm that at least one FAQ button is genuinely present and visible to the user.
