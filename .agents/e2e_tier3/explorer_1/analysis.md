# Tier 3 E2E Tests: Playwright Strategy Analysis

## Summary
Based on the `TEST_INFRA.md` and `SCOPE_TIER3.md` documents, the Tier 3 Playwright tests need to validate UI polish, SEO configurations, semantic HTML, and the complete purge of old vocabulary. This document outlines the testing strategy, detailing the test block structure, required selectors, and assertions.

## Test Case Structure

We propose the following logical structure for `e2e/tier3.spec.ts`:

```typescript
describe('Tier 3: Edge Cases & UI Polish (P2)', () => {
  const SAMPLE_PSEO_PATH = '/serponado/slug-1'; // Represents a standard pSEO page

  describe('Hero Image Properties', () => {
    it('should load the hero image with fetchpriority="high" and an SEO-relevant alt attribute');
  });

  describe('Old Vocabulary Purge', () => {
    it('should assert the complete absence of "Schlüsseldienst" on the homepage');
    it('should assert the complete absence of "Schlüsseldienst" on a sample pSEO page');
  });

  describe('mainContent Area Validation', () => {
    it('should contain a "mainContent" area with standard HTML tags (paragraphs, headings) on a pSEO page');
  });

  describe('FAQ Section Rendering', () => {
    it('should render the FAQ section correctly on a pSEO page');
  });
});
```

## Detailed Test Case Strategy

### 1. Hero Image Properties
*   **Target Page:** Homepage (`/`) and/or pSEO Sample Page (`/serponado/[slug]`)
*   **Target Selectors:**
    *   Playwright locator targeting the main hero image. Example: `page.locator('img[data-hero="true"]')` or specific `section:first-of-type img`. (Depending on the exact DOM structure, fallback to `.hero-image img`).
*   **Assertions:**
    *   Expect the element to be visible: `expect(locator).toBeVisible()`
    *   Expect `fetchpriority` attribute to equal `"high"`: `expect(locator).toHaveAttribute('fetchpriority', 'high')`
    *   Expect `alt` attribute to be non-empty and SEO-relevant (e.g., matching a regex that contains target keywords like "Serponado" or "Schadensberichte"): `expect(locator).toHaveAttribute('alt', /.+/)`

### 2. Old Vocabulary Purge
*   **Target Page:** Homepage (`/`) and pSEO Sample Page (`/serponado/[slug]`)
*   **Target Selectors:**
    *   The entire body or root content wrapper: `page.locator('body')`
*   **Assertions:**
    *   Extract the `innerText` or `textContent` of the page.
    *   Expect the text content *not* to contain the string "Schlüsseldienst" (case-insensitive): `expect(textContent).not.toMatch(/Schlüsseldienst/i)`

### 3. mainContent Area Validation
*   **Target Page:** pSEO Sample Page (`/serponado/[slug]`)
*   **Target Selectors:**
    *   The main content wrapper: `page.locator('main')`, `page.locator('#mainContent')`, or `page.locator('.main-content')`. (Assuming standard HTML5 or an ID based on `SCOPE_TIER3.md` mentioning "mainContent").
    *   Descendant tags: `page.locator('main p')`, `page.locator('main h1, main h2, main h3')`.
*   **Assertions:**
    *   Expect the main container to exist and be visible.
    *   Expect the count of paragraph (`<p>`) elements to be greater than 0: `expect(page.locator('main p')).toHaveCount({ greaterThan: 0 })`
    *   Expect the count of heading (`<h2>` or `<h3>`) elements to be greater than 0: `expect(page.locator('main h2')).toHaveCount({ greaterThan: 0 })`

### 4. FAQ Section Rendering
*   **Target Page:** pSEO Sample Page (`/serponado/[slug]`)
*   **Target Selectors:**
    *   The FAQ section container: `page.locator('section#faq')`, `page.locator('.faq-section')`, or `page.getByRole('region', { name: /faq/i })`.
    *   Accordion or list items inside the FAQ: `page.locator('.faq-item')` or `details` elements if standard HTML accordions are used.
*   **Assertions:**
    *   Expect the FAQ section to be visible.
    *   Expect at least one FAQ question element to exist: `expect(page.locator('.faq-item')).toHaveCount({ greaterThan: 0 })`
    *   Optional interaction: click an accordion trigger and assert the corresponding answer becomes visible.
