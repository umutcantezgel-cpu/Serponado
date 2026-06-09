# Analysis: Tier 3 E2E Tests

## Overview
The goal is to revise the current Playwright test implementation for Tier 3 E2E tests based on the feedback from Review Iteration 1. The focus is on replacing brittle manual checks with robust Playwright web-first assertions, ensuring visibility is checked where needed, and broadening the scope of the vocabulary purge to include the entire HTML document.

## Test Cases and Proposed Strategies

### 1. Hero Image Validation
**Current Issue:** The `alt` text validation relies on fetching the attribute value and manually asserting its type and length. This is brittle and doesn't benefit from Playwright's auto-retrying assertions.
**Proposed Strategy:**
- **Target Selector:** `page.locator('img[fetchpriority="high"]').first()`
- **Assertion:** Use `await expect(heroImg).toHaveAttribute('alt', /.+/);` to inherently wait and check that the `alt` attribute is present and non-empty.

### 2. Vocabulary Purge (Schlüsseldienst)
**Current Issue:** The test evaluates `bodyText = await page.locator('body').textContent()`, which entirely skips the `<head>` of the document. This means SEO metadata (titles, descriptions, JSON-LD) containing the forbidden word "Schlüsseldienst" would go undetected.
**Proposed Strategy:**
- **Target Data:** Use `const fullContent = await page.content();` to extract the full HTML of the page, ensuring `<head>` is included.
- **Assertion:** Evaluate both the homepage (`/`) and a pSEO page (e.g., `/serponado/notdienst-berlin`) using `expect(fullContent).not.toMatch(/Schl[üu]sseldienst/i);`

### 3. Main Content Validation
**Current Strategy:** The test checks that an `article.prose` exists and has `p` and `h2` elements inside. 
**Feedback:** No specific feedback was provided for this test. The current structure is adequate.

### 4. FAQ Section Visibility
**Current Issue:** The logic relies on `.count()` and an `if (faqCount > 0)` conditional. This is considered tautological and an anti-pattern in Playwright, as `.count()` resolves immediately without waiting or checking if the elements are actually visible to the user.
**Proposed Strategy:**
- **Target Selector:** `page.locator('button[aria-expanded]').first()`
- **Assertion:** Use `await expect(page.locator('button[aria-expanded]').first()).toBeVisible();` This forces Playwright to wait until the FAQ accordion button is explicitly present and visible on the screen.
