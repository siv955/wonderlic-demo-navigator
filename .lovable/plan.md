# Wonderlic Demo Story Finder — Build Plan

Internal sales enablement tool that helps reps pick the right archetype, demo profile, Team Dynamics page, and talk track in under 60 seconds. Four sections, seeded from the uploaded workbook, styled to the Wonderlic 2025 brand kit.

## Scope (V1)

Top-tab navigation with these routes:

1. **Find by Business Pain** (`/`, default) — search box + grouped pain chips → recommendation card
2. **Find by Attribute Combo** (`/attributes`) — up to 4 attribute/direction rows, adjustable thresholds → exact + closest matches
3. **Archetype Library** (`/archetypes`, detail at `/archetypes/$id`) — six canonical archetype cards
4. **Profile Directory** (`/profiles`) — searchable directory of every profile, expandable scores

A **Demo Principles** drawer is reachable from the top bar on every page, containing the guardrail bullets from the spec (start with pain, use customer language, Select vs Develop rules, avoid termination stories with Develop, skip Index unless technical audience, etc.).

## Brand alignment (Wonderlic 2025 Brand Kit)

Design tokens defined in `src/styles.css` under `@theme` — no hardcoded colors in components.

**Colors** (from the brand kit):
- Wonderlic Blue `#0F1131` — headings, primary buttons, dark surfaces
- Wonderlic White `#F2F3F5` — primary background
- White `#FFFFFF` — card surfaces / contrast against dark
- Gray `#344054` — body copy on light backgrounds
- Blurple `#482FD2` — primary accent (CTAs, active nav, focus rings, links)
- Lavender `#9A8AEA` / Wisteria `#B7A9F0` — supporting accents, hover states
- Soft Purple `#F0F1FF` / Purple Chalk `#E5E6FE` / Blue Lilac `#D1D4FD` — hierarchy backgrounds, badges
- Select accents (Warm Pink `#FF5A8A`, Sweet Pink `#FF99B4`, Ice Pink `#FFDAE2`) — reserved for the **Select** badge and Select-story blocks only
- Develop accents (Sunglow `#FCCC20`, Pale Gold `#FEE175`, Ice Yellow `#FFF5CE`) — reserved for the **Develop** badge and Develop-story blocks only
- Team Dynamics badge uses Blurple / Purple Chalk (brand-level, non-product)

**Typography** (from the brand kit, loaded via Google Fonts `<link>` in `__root.tsx`):
- Headings: **Nunito Light (300)** — matches "light weight exclusively" rule
- Body / UI: **Nunito Sans Regular (400)**, with 600 for badges and emphasis
- Nunito lends the "clean, confident, friendly" tone the guidelines call for

**Composition**: neutral-anchored layout — Wonderlic White page background, white cards with soft borders and generous whitespace, Blurple for a single confident accent per view. No purple-gradient hero clichés; motion is restrained. Uses the "circle trail" visual motif sparingly (subtle dot cluster in the top-nav lockup only) — not layered behind every card.

Product badges (`Select` pink, `Develop` yellow) obey the "product colors used only when speaking about that product" rule — they never bleed into general chrome.

## Data pipeline

- One-time Node script `scripts/build-data.ts` reads the uploaded workbook (`Archetype Overview`, `Score Pattern Matrix`, `Story Finder`, `Attribute Lookup Data`) and emits typed JSON into `src/data/`:
  - `archetypes.json` (6 canonical, with memoryHook, talk tracks, Team Dynamics path, screens to show/skip, cautions, keywords)
  - `profiles.json` (every profile with `scores` map + computed `bestHighAttributes` / `bestLowAttributes`)
  - `attributes.json` (attribute type, Team Dynamics section/page)
  - `painMappings.json` (pain-chip catalog with keywords → archetype id)
- Talk tracks / cautions / Ask Wonderlic prompts come verbatim from the spec where the workbook does not supply them.
- All matching logic in pure TS under `src/lib/` so an AI classifier can slot in later.

## Section details

### 1. Find by Business Pain
- Debounced text search across `painMappings[].keywords` and archetype `keywords` / `relatedPains`.
- Pain chips grouped by the six categories in the spec (Sales, Customer Service, Technical, Frontline, Managers).
- Result: `RecommendationCard` with recommended + backup archetype, why-it-fits, Select story, Develop story, Team Dynamics path, demo profile, suggested attributes, screens to show / skip, 30s + 3min talk tracks, Ask Wonderlic prompt, cautions. Copy buttons on every long-form block plus a "Copy full demo plan" action.
- Empty state prompts a chip selection.

### 2. Find by Attribute Combo
- Up to 4 rows (attribute dropdown + High/Low toggle). Threshold sliders (default High ≥ 70, Low ≤ 30).
- Runs against `profiles.json`: Exact Matches (all conditions satisfied) vs Closest Matches (ranked by conditions met, then total gap from threshold, then core-archetype tiebreak).
- Result cards show only the selected attributes' scores, a `3 of 4` match badge, suggested story angle, `Use With Caution` badge when weak.
- Footer note: "Attribute Finder is for demo prep flexibility. For canonical stories, use the Archetype Library."

### 3. Archetype Library
- Grid of 6 cards. Click → detail view with all fields, copy buttons, and cross-links to the matching demo profile.

### 4. Profile Directory
- Search + filter by team / core-vs-extra / archetype.
- Compact row: name, email, badges, best-high / best-low attributes, suggested uses.
- Expandable "View scores" reveals full score table (hidden by default).

## Cross-cutting

- **Badges**: `Select` (pink), `Develop` (yellow), `Team Dynamics` (purple), `Core Archetype`, `Extra Profile`, `Exact Match`, `Near Match`, `Use With Caution`.
- **Copy buttons** on talk tracks, Ask Wonderlic prompt, Team Dynamics path, full demo plan.
- Responsive; desktop-first but usable on tablet / phone.

## Technical

- TanStack Start routes: `src/routes/index.tsx`, `attributes.tsx`, `archetypes.tsx`, `archetypes.$id.tsx`, `profiles.tsx`. Shared shell in `__root.tsx` with top tabs, Wonderlic logotype-style wordmark, and Demo Principles drawer trigger.
- Per-route `head()` with distinct title / description / og tags. No og:image on `__root`.
- shadcn primitives (Card, Badge, Input, Select, Slider, Sheet, Tabs, Button, Command, Collapsible) restyled via tokens to match brand.
- Matching logic in `src/lib/matching.ts` — pure functions, unit-testable.
- No auth, no Cloud, no server functions in V1 — pure static data.
- Favicon left as the current default (no brand asset extracted from the kit); the user can drop in the official Wonderlic mark later.

## Out of scope for V1

- AI-based pain classification (structured for it; not wired).
- Admin editor for archetypes / profiles.
- Auth, analytics, telemetry.
