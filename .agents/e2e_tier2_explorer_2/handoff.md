# Handoff: Tier 2 E2E Tests Strategy

## 1. Observation
- `SCOPE_TIER2.md` and `TEST_INFRA.md` define 4 requirements for `e2e/tier2.spec.ts`: dynamic `<title>` / `<meta name="description">`, `application/ld+json` (Article and FAQPage), 4-5 internal links in a related alerts section, and `/sitemap.xml` returning 200.
- Inspected `app/serponado/[slug]/page.tsx` and found:
  - Meta tags are set via `generateMetadata`.
  - JSON-LD is embedded in a single `<script type="application/ld+json">` tag as an array containing `{"@type": "Article"}` and `{"@type": "FAQPage"}`.
  - The related alerts block is rendered as a `<section>` containing an `<h3>` with text "Weiterführende Notfall-Protokolle", containing `<Link>` tags to `/serponado/[slug]`.
- Inspected `lib/data/serponado_db.json` and found that currently `internal_links` array length maxes out at 3 (110 records have 3 links, 125 records have 1 link).

## 2. Logic Chain
- **Metadata**: We can use `page.title()` and `page.locator('meta[name="description"]').getAttribute('content')` to extract and verify the tags. We will navigate to a known slug like `/serponado/serponado-google-core-update-anomalie`.
- **Schema.org**: We will evaluate the JSON content of the `script[type="application/ld+json"]` locator, parsing it to find `Article` and `FAQPage` types. Since it's injected as a JSON array, we must handle the array parsing correctly.
- **Related Links**: We can target the section with `page.locator('section:has(h3:has-text("Weiterführende Notfall-Protokolle")) a[href^="/serponado/"]')`. The requirement asks for *exactly 4-5 internal links*. The assertion will be `expect(count).toBeGreaterThanOrEqual(4)` and `expect(count).toBeLessThanOrEqual(5)`.
- **Sitemap**: We will use Playwright's API context (`request.get('/sitemap.xml')`) to fetch the status code and assert it is exactly `200`.

## 3. Caveats
- The current test assertion for 4-5 internal links **will fail** against the current production build because the `serponado_db.json` file only contains 1 to 3 internal links per page. To make the test pass, the database generation logic must be updated to link 4-5 URLs.
- The `RelatedSerponadoAlerts` is not an isolated React component with that specific name in `page.tsx`'s DOM output, but inline JSX. We must rely on semantic HTML locators (e.g., the `<h3>` text) rather than a component ID.

## 4. Conclusion
The Tier 2 Playwright strategy is feasible using standard DOM/network assertions. The exact implementation code strategy is defined below:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Tier 2: Core Functionality & SEO', () => {
  const SAMPLE_SLUG = 'serponado-google-core-update-anomalie';

  test('should have dynamic title and meta description', async ({ page }) => {
    await page.goto(`/serponado/${SAMPLE_SLUG}`);
    
    // Title
    await expect(page).toHaveTitle(/SERPONADO/);
    
    // Meta Description
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /.+/);
  });

  test('should contain valid Article and FAQPage JSON-LD schemas', async ({ page }) => {
    await page.goto(`/serponado/${SAMPLE_SLUG}`);
    
    const scriptContent = await page.locator('script[type="application/ld+json"]').textContent();
    expect(scriptContent).toBeTruthy();
    
    // The page injects an array of schemas
    const schemas = JSON.parse(scriptContent!);
    const articleSchema = schemas.find((s: any) => s['@type'] === 'Article');
    const faqSchema = schemas.find((s: any) => s['@type'] === 'FAQPage');
    
    expect(articleSchema).toBeDefined();
    expect(faqSchema).toBeDefined();
  });

  test('should render RelatedSerponadoAlerts with exactly 4-5 internal links', async ({ page }) => {
    await page.goto(`/serponado/${SAMPLE_SLUG}`);
    
    const relatedLinks = page.locator('section:has(h3:has-text("Weiterführende Notfall-Protokolle")) a[href^="/serponado/"]');
    const count = await relatedLinks.count();
    
    // NOTE: This will fail until the database generates 4-5 links instead of 1-3.
    expect(count).toBeGreaterThanOrEqual(4);
    expect(count).toBeLessThanOrEqual(5);
  });

  test('sitemap.xml should return HTTP 200', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.status()).toBe(200);
    
    const body = await response.text();
    expect(body).toContain('<urlset');
  });
});
```

## 5. Verification Method
1. Create `e2e/tier2.spec.ts` with the provided implementation.
2. Run `npm run build && npm run start` in a background terminal.
3. Run `npx playwright test e2e/tier2.spec.ts` to execute the tests.
4. Verify that 3 out of 4 tests pass (with the internal links test failing as expected due to data limitations).
