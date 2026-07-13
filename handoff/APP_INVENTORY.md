# APP_INVENTORY.md

## Routes / pages

| Area | File path | Purpose | Notes |
|---|---|---|---|
| Root layout | `src/routes/__root.tsx` | HTML shell, top nav, Demo Principles drawer, Toaster | Nav labels defined in `NAV` array |
| Start page | `src/routes/index.tsx` | Landing / entry-point picker | Four entry cards |
| Business Pain Finder | `src/routes/pain.tsx` | Type or chip-select a customer pain, get recommended archetype | Uses `PAIN_CATEGORIES` + `matchPain` |
| Attribute Finder | `src/routes/attributes.tsx` | Up to 4 attribute conditions → matching profiles | Uses `matchProfiles` |
| Archetype Library | `src/routes/archetypes.tsx` | Grid of the six canonical archetypes | Reads `archetypes` |
| Archetype detail | `src/routes/archetypes.$id.tsx` | Dispatches to per-archetype detail component | Switch on `id` |
| Profile Directory | `src/routes/profiles.tsx` | Searchable list of demo profiles | Reads `profiles` |
| Attribute Stories | `src/routes/attribute-stories.tsx` | Curated per-attribute reference | Reads `ATTRIBUTE_STORIES` |

Demo Principles is not a route — it is a `Sheet` drawer in `src/routes/__root.tsx` triggered by the "Demo Principles" button in the top nav.

## Major components

| Component | File | Purpose |
|---|---|---|
| Ethan detail | `src/components/ethan-archetype-detail.tsx` | Renders `ETHAN_GUIDANCE` |
| Derek detail | `src/components/derek-archetype-detail.tsx` | Renders `DEREK_GUIDANCE` |
| Caleb detail | `src/components/caleb-archetype-detail.tsx` | Renders `CALEB_GUIDANCE` |
| Riley detail | `src/components/riley-archetype-detail.tsx` | Renders `RILEY_GUIDANCE` |
| Isabelle detail | `src/components/isabelle-archetype-detail.tsx` | Renders `ISABELLE_GUIDANCE` |
| Simon detail | `src/components/simon-archetype-detail.tsx` | Renders `SIMON_GUIDANCE` |
| Business Impact Ladder | `src/components/business-impact-ladder.tsx` | Reusable four-rung ladder block |
| Copy button | `src/components/copy-button.tsx` | Copy-to-clipboard for scripts / bullets |
| Story badge | `src/components/story-badge.tsx` | Colored badge per archetype story |
| Flexible profile badge | `src/components/flexible-profile-badge.tsx` | Marks flexible non-core profiles |
| Recommendation card | `src/components/recommendation-card.tsx` | Shared card used by Pain + Attribute finders |
| UI primitives | `src/components/ui/*` | shadcn/ui: Tabs, Accordion, Card, Sheet, etc. |

## Data files

| Data | File | Notes |
|---|---|---|
| Archetype metadata | `src/data/archetypes.json` | Source of truth for cards, library |
| Rich archetype guidance | `src/data/{id}Guidance.ts` | One per core archetype, gold standard |
| Legacy shared guidance | `src/data/archetypeGuidance.ts` | Older shape still referenced in a few places |
| Product moments (legacy) | `src/data/productMoments.ts` | Older Select/Develop/TD template |
| Run This Demo cards | `src/data/runThisDemo.ts` | Short 3–5 sentence talk track per archetype |
| Business pain mapping | `src/data/painMappings.ts` | `PAIN_CATEGORIES[]` + `Pain[]` |
| Attribute Stories | `src/data/attributeStories.ts` | Curated per-attribute copy |
| Profiles | `src/data/profiles.json` | Core + extra demo profiles |
| Attributes catalog | `src/data/attributes.json` | Attribute name + type (Select vs Develop) |
| Types | `src/data/types.ts` | `Archetype`, `Profile`, `AttributeMeta`, `ArchetypeId` |
| Data barrel | `src/data/index.ts` | Central exports + `TALK_TRACKS` |

## Libraries / helpers

| File | Purpose |
|---|---|
| `src/lib/matching.ts` | `matchPain`, `matchProfiles`, attribute-condition matcher |
| `src/lib/copy.ts` | Clipboard helper |
| `src/lib/selectLabels.ts` | Select signal display labels |
| `src/lib/utils.ts` | `cn` shadcn helper |
| `src/lib/error-page.ts`, `error-capture.ts`, `lovable-error-reporting.ts` | Platform error plumbing |
