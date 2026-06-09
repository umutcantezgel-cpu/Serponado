# Tier 3 E2E Test Strategy Analysis

## Core Requirements & Strategy

We need to implement opaque-box E2E tests for the Tier 3 requirements (Edge Cases & UI Polish) using Playwright. 
Based on `SCOPE_TIER3.md` and `TEST_INFRA.md`, the objective is to assert:
1. `hero_image` properties (fetchpriority, alt).
2. Absence of legacy vocabulary ("Schlüsseldienst").
3. `mainContent` presence and HTML structure.
4. FAQ section rendering.

## Test Structure Outline

```typescript
describe('Tier 3: Edge Cases & UI Polish', () => {
  it('should render the hero image with fetchpriority="high" and an SEO-relevant alt attribute on a pSEO page', async ({ page }) => { ... });
  it('should not contain legacy vocabulary (e.g., "Schlüsseldienst") on homepage and sample pSEO pages', async ({ page }) => { ... });
  it('should render the main content area with standard HTML tags on a pSEO page', async ({ page }) => { ... });
  it('should render the FAQ section on a pSEO page', async ({ page }) => { ... });
});
```

## Selectors & Assertions Breakdown

### 1. Hero Image
- **Selectors**: Look for the primary hero image. This could be an `img` tag within the main `header` or first section, or an element with a specific class or data-testid (e.g., `[data-testid="hero-image"]` or simply `main img` picking the first one).
- **Assertions**:
  - `expect(heroImage).toHaveAttribute('fetchpriority', 'high')`
  - `expect(heroImage).toHaveAttribute('alt', /Serponado|Schaden/i)` (or verify it is present and non-empty).

### 2. Absence of Old Vocabulary
- **Selectors**: We don't need a specific element; we can target the entire `body`.
- **Assertions**:
  - Get `body` text content: `await page.locator('body').textContent()`.
  - `expect(content).not.toMatch(/schlüsseldienst/i)`
  - `expect(content).not.toMatch(/notöffnung/i)`
  - `expect(content).not.toMatch(/schlüsselnotdienst/i)`
  - Apply this check to the homepage `/` and at least one pSEO page `/serponado/sample-slug`.

### 3. Main Content HTML Tags
- **Selectors**: The primary content wrapper. Target `main`, `article`, or `[data-testid="main-content"]`. Target child elements like `p`, `h2`, `h3`.
- **Assertions**:
  - `expect(mainContent).toBeVisible()`
  - `expect(await page.locator('main p').count()).toBeGreaterThan(0)`
  - `expect(await page.locator('main h2').count()).toBeGreaterThan(0)`

### 4. FAQ Section Rendering
- **Selectors**: The FAQ container. Target `section[id="faq"]`, `[data-testid="faq-section"]`, or a section containing an `h2` with text "FAQ" or "Häufige Fragen". Look for interactive elements like `details` and `summary`, or accordion classes.
- **Assertions**:
  - `expect(faqSection).toBeVisible()`
  - `expect(await faqSection.locator('summary').count()).toBeGreaterThan(0)` (assuming native `<details>`/`<summary>` is used).
