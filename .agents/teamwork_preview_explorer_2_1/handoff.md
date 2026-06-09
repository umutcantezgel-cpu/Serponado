# Handoff Report: Vocabulary Purge (Milestone 2.1)

## 1. Observation
A thorough search of the codebase (`/Users/umurey/Documents/antigravity/peaceful-hopper/ms-schluesseldienst`) was conducted to identify traces of "Schlüsseldienst", local addresses ("Langgasse 70", "Wetzlar"), old phone numbers ("8056279", "+4964418056279"), trust badges, and old local `Schema.org` usage. The search yielded numerous files across multiple directories. 

Exact matches were found using `grep` searches for the target terms.
- **Schlüsseldienst**: Found in `content/` (blog/ratgeber `.mdx` files), `docs/` (`.md` files), and `.well-known` configuration.
- **Address & Phone ("Langgasse 70", "8056279", "Wetzlar")**: Found heavily in `app/` pages, `components/` (like `StickyHeader.tsx`), `lib/data/company.ts`, `lib/data/locations_wetzlar_bezirke.ts`, and `public/.well-known/ai-plugin.json`.
- **Trust Badges**: Explicitly used in `components/trust/TrustSignals.tsx`, `components/trust/TrustStrip.tsx`, `lib/cta-copy.ts`, `lib/personalization.ts`, `lib/imageRotation.ts`, and data locations (`lib/data/locations*.ts`).
- **Schema.org**: Widespread in `lib/data/serponado_db.json`, `lib/schema.ts`, `lib/seo/jsonld.ts` and `lib/serviceSchema.ts` (still using `["Locksmith", "Store"]`).

## 2. Logic Chain
- The prompt requires completely removing all "Schlüsseldienst" vocabulary, local addresses, old phone numbers, trust badges, and old local Schema.org data.
- The identified files fall exactly into the target categories.
- Many `.md` and `.mdx` content and documentation files have literal "Schlüsseldienst" or address mentions.
- Application logic and configuration in `lib/` and UI components in `components/` hardcode the address "Langgasse 70", the old phone number, and schema types.
- To fulfill the scope, all of these files must be either modified (to strip the references) or deleted (if the file exists solely for the old business logic, like `components/trust/TrustSignals.tsx`).

## 3. Caveats
- Some files in the `.agents/` directory contain "Schlüsseldienst" as part of past prompt interactions. Since these are internal metadata, modifying them is generally discouraged unless strictly requested by the architecture rules.
- `lib/data/serponado_db.json` is a huge generated file containing many `schema.org` instances; rather than manual edits, the generator script should likely be modified and the JSON regenerated.
- Deleting `TrustSignals.tsx` or similar trust components may break imports in pages unless those imports are simultaneously removed.

## 4. Conclusion
The following files require modification or deletion to complete Milestone 2.1:

**Documents & Content (Schlüsseldienst references):**
- `ORIGINAL_REQUEST.md`, `CHANGELOG.md`, `PROJECT.md`, `skeletonize.ts`
- `content/ratgeber/einbruchschutz-pillar.mdx`
- `content/blog/*.mdx` (all old locksmith-related blogs)
- `docs/*.md` (all documentation files)
- `public/.well-known/security.txt` and `ai-plugin.json`

**UI Components & Pages (Address, Phone, Trust Badges):**
- `app/(marketing)/leistungen/page.tsx`
- `app/(marketing)/bewertungen/page.tsx`
- `app/(marketing)/schluessel-schmiede/page.tsx`
- `app/(legal)/*/page.tsx` (all legal pages with "Langgasse 70")
- `components/StickyHeader.tsx`
- `components/Footer.tsx`
- `components/trust/StickyCtaBar.tsx`
- `components/trust/TrustStrip.tsx`
- `components/trust/TrustSignals.tsx` (Candidate for deletion)
- `components/pricing/PricingCalculator.tsx`

**Libraries & Data (Schema, Trust logic, Address, Phone):**
- `lib/contentDifferentiation.ts`, `lib/utils/distanceCalc.ts`, `lib/faqData.ts`, `lib/formatters.ts`
- `lib/data/company.ts`, `lib/data/imageAssets.ts`, `lib/data/services.ts`, `lib/data/lexikon.ts`
- `lib/data/locations*.ts` (Location logic with trust mentions)
- `lib/schema.ts`, `lib/seo/jsonld.ts`, `lib/serviceSchema.ts` (Old Schema.org definitions)
- `lib/motion.config.ts`, `lib/cta-copy.ts`, `lib/personalization.ts`, `lib/imageRotation.ts`

## 5. Verification Method
- **Verification Command:** Run the following `grep` commands in the codebase root after modifications:
  - `grep -rni "Schlüsseldienst" app components lib content public`
  - `grep -rnE "Langgasse|8056279|Wetzlar" app components lib content public`
  - `grep -rni "trust" app components lib content public`
  - `grep -rni "Locksmith" lib/`
- **Invalidation Condition:** If any of the commands return a match (excluding explicitly preserved metadata), the purge is incomplete. Next.js build should also be run (`npm run build` or `npx next build`) to verify that removing trust components didn't break imports.
