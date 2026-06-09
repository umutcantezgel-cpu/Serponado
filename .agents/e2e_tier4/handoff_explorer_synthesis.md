## Synthesis of Explorer Findings

1. **Sitemap Test:**
   Use Playwright's `request` fixture to fetch `/sitemap.xml`. Read the text and assert the count of `<url>` matches is `>= 235`.
2. **Batch Slug Test (HTTP 200 & No Errors):**
   Read 5 slugs from `lib/data/serponado_db.json`. Attach `page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); })` and `page.on('pageerror')`. Navigate to `/serponado/[slug]`, assert `response.status() === 200`. Assert `errors.length === 0`.
3. **Mobile Viewport UI Test:**
   Use `test.use({ viewport: { width: 375, height: 667 } })`. Navigate to a pSEO page and assert mobile layout Brutalist CSS properties. E.g., background color `rgb(10, 10, 10)` and correct padding or border constraints.

This will fulfill all requirements in `SCOPE_TIER4.md`.
