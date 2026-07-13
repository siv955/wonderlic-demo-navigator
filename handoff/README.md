# Wonderlic Demo Navigator — Handoff Package

## What this app is

**Wonderlic Demo Navigator** is an internal sales enablement tool for Wonderlic reps. It helps them turn something the customer said in discovery into the right demo story: the right archetype, the right demo profile, the right product moment (Select, Develop, Team Dynamics), a Business Impact Ladder, scripts, mid-demo questions, Behavioral Interview Guides callouts, New Hire Success Tips callouts, an Ask Wonderlic prompt, recap bullets, and cautions.

## Main purpose

- Rep hears a business pain in discovery
- Rep opens the app, finds the matching demo story
- Rep walks the buyer through Select → Develop → Team Dynamics with tight scripts and a clear business-value close

## Primary users

- Wonderlic sales reps (prep + live-demo copilot)
- CS / Solutions Consultants
- Sales enablement authors of demo content

## Main workflow

1. Start page: choose entry point (Business Pain, Attribute Combo, Archetype Library, Profile Directory)
2. Business Pain Finder: type or pick a pain → get recommended archetype + demo plan
3. Archetype detail page: run the demo section-by-section
4. Attribute Stories: reference material for one-off attribute questions

## Current navigation

- **Start** `/`
- **Business Pain Finder** `/pain`
- **Attribute Finder** `/attributes`
- **Archetype Library** `/archetypes`
- **Profile Directory** `/profiles`
- **Attribute Stories** `/attribute-stories`
- **Demo Principles** — drawer opened from the top nav (in `src/routes/__root.tsx`)

## The six canonical archetypes

- Ethan Miller (Enterprising Ethan)
- Derek Brooks (Diligence Derek)
- Caleb Turner (Compassion Caleb)
- Riley Parker (Results Riley)
- Isabelle Martin (Influence Isabelle)
- Simon Grant (Stability Simon)

Each has gold-standard rich guidance in `src/data/{id}Guidance.ts` and a dedicated detail component in `src/components/{id}-archetype-detail.tsx`.

## How to run locally

```bash
bun install
bun run dev
# open http://localhost:8080
```

TanStack Start v1 + Vite 7 + React 19 + Tailwind v4 + shadcn/ui. See `MIGRATION_NOTES.md` for details.

## Where main content lives

| Content | File |
|---|---|
| Canonical archetype metadata | `src/data/archetypes.json` |
| Rich archetype guidance (gold standard) | `src/data/{ethan,derek,caleb,riley,isabelle,simon}Guidance.ts` |
| Shared/legacy guidance shape | `src/data/archetypeGuidance.ts` |
| Product moment templates (older shape) | `src/data/productMoments.ts` |
| Run This Demo cards | `src/data/runThisDemo.ts` |
| Business Pain Finder mapping | `src/data/painMappings.ts` |
| Attribute Stories | `src/data/attributeStories.ts` |
| Demo profiles | `src/data/profiles.json` |
| Attribute catalog | `src/data/attributes.json` |
| Types | `src/data/types.ts` |
| Central re-exports + TALK_TRACKS map | `src/data/index.ts` |

## Where main UI/routes/components live

| UI | File |
|---|---|
| Root layout, top nav, Demo Principles drawer | `src/routes/__root.tsx` |
| Start page | `src/routes/index.tsx` |
| Business Pain Finder | `src/routes/pain.tsx` |
| Attribute Finder | `src/routes/attributes.tsx` |
| Archetype Library (grid) | `src/routes/archetypes.tsx` |
| Archetype detail router | `src/routes/archetypes.$id.tsx` |
| Profile Directory | `src/routes/profiles.tsx` |
| Attribute Stories | `src/routes/attribute-stories.tsx` |
| Per-archetype detail components | `src/components/{id}-archetype-detail.tsx` |
| Business Impact Ladder block | `src/components/business-impact-ladder.tsx` |
| Copy-to-clipboard button | `src/components/copy-button.tsx` |
| Story / profile badges | `src/components/story-badge.tsx`, `src/components/flexible-profile-badge.tsx` |
| Recommendation card | `src/components/recommendation-card.tsx` |

## Known limitations

- Only the six core archetypes have gold-standard detail. Other data files (`archetypeGuidance.ts`, `productMoments.ts`) contain earlier-generation content still used elsewhere.
- Full Script View needs a polish pass per archetype.
- Business Pain Finder mappings and Attribute Finder logic still need SME QA.
- No backend — all content is static and shipped in-bundle.
