# Playwright Test Implementation Strategy: Tier 3 E2E Tests

This document outlines the Playwright strategy for implementing the Tier 3 (Edge Cases & UI Polish) End-to-End tests, based on opaque-box testing against the DOM and UI.

## Test Case Structure

The tests should be organized in `e2e/tier3.spec.ts` under a main describe block for Tier 3.

```typescript
import { test, expect } from '@playwright/test';

test.describe('Tier 3: Edge Cases & UI Polish', () => {

  test('hero_image is present with fetchpriority="high" and SEO-relevant alt text', async ({ page }) => {
    // Tests F4: Image Rendering & Optimization
  });

  test('homepage is completely free of old vocabulary ("Schlüsseldienst")', async ({ page }) => {
    // Tests F1: Global UI & Theming (Absence of legacy terms)
  });

  test('sample pSEO page is completely free of old vocabulary ("Schlüsseldienst")', async ({ page }) => {
    // Tests F1: Global UI & Theming (Absence of legacy terms)
  });

  test('mainContent area exists on pSEO page with standard HTML tags', async ({ page }) => {
    // Tests layout structure of dynamically generated content
  });

  test('FAQ section renders on pSEO page', async ({ page }) => {
    // Tests visibility and interactive elements of FAQ
  });

});
```

## Target Selectors & Assertions

### 1. Hero Image Properties
**Goal**: Verify `hero_image` presence, priority loading, and accessibility.
- **Selectors**: 
  - Locator: `page.locator('img[fetchpriority="high"]').first()` (Next.js automatically attaches `fetchpriority="high"` when the `priority` prop is passed to `next/image`).
- **Assertions**:
  - `await expect(heroImage).toBeVisible();`
  - `await expect(heroImage).toHaveAttribute('fetchpriority', 'high');`
  - Ensure the `alt` attribute exists and is meaningful (e.g., length > 5 characters): 
    - `const altText = await heroImage.getAttribute('alt');`
    - `expect(altText?.length).toBeGreaterThan(5);`

### 2. Complete Purge of Old Vocabulary
**Goal**: Ensure "Schlüsseldienst" and its variations are purged from the UI.
- **Selectors**: 
  - Locator: `page.locator('body')` for the complete visual text tree.
- **Assertions**:
  - Extract text: `const bodyText = await page.locator('body').textContent();`
  - `expect(bodyText).not.toMatch(/Schl[üu]sseldienst/i);`
  - *Note*: Playwright's `getByText` can also be used but `.textContent()` on `body` guarantees we scan all rendered text nodes at once without looping.

### 3. Main Content Area & HTML Structure
**Goal**: Verify the dynamic HTML block (min 800 words, spintax) is rendered using standard tags.
- **Selectors**:
  - Locator: `page.locator('article.prose')` (based on the pSEO template structure in `app/serponado/[slug]/page.tsx`).
  - Child tags: `page.locator('article.prose p')`, `page.locator('article.prose h2')`.
- **Assertions**:
  - `await expect(page.locator('article.prose')).toBeVisible();`
  - `await expect(page.locator('article.prose p').first()).toBeVisible();`
  - `await expect(page.locator('article.prose h2').first()).toBeVisible();`
  - Optional: Count paragraphs `expect(await page.locator('article.prose p').count()).toBeGreaterThan(3);` to assure content length.

### 4. FAQ Section Rendering
**Goal**: Verify that the FAQ block renders visually (not just in JSON-LD).
- **Selectors**:
  - Heading: `page.getByRole('heading', { name: /FAQ|Fragen/i })`
  - Accordion Elements (if imported from Shadcn or the `FAQAccordion` component): `page.locator('button[aria-expanded]')` or `page.locator('details')`.
- **Assertions**:
  - `await expect(page.getByRole('heading', { name: /FAQ|Fragen/i }).first()).toBeVisible();`
  - `await expect(page.locator('button[aria-expanded]').first()).toBeVisible();`
