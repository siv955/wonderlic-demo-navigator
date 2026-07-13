# OPEN_ITEMS.md

Known remaining work at handoff time.

## Content polish

- [ ] Full Script View needs a later polish pass for each of the six core archetypes.
- [ ] Add or improve a "Choose Between Similar Stories" helper (e.g. Derek vs Ethan, Caleb vs Isabelle).
- [ ] Create an editable export of all copy for Sales / CS review (this handoff's `COPY_EXPORT.md` is a machine export; a doc-friendly version is still open).
- [ ] Create a rep-facing recording script for a walkthrough video.

## Product accuracy QA

- [ ] QA Business Pain Finder mappings against latest sales language. Confirm the primary and backup archetype for each pain is still correct.
- [ ] QA Attribute Finder matching logic against real profile scores.
- [ ] QA Profile Directory to ensure extra (non-core) profiles remain flexible and are not accidentally locked to a single archetype.
- [ ] Confirm no Select / internal-promotion language remains anywhere. Grep for: "promotion", "internal candidate", "internal mobility", "current employee" inside Select sections.
- [ ] Confirm Behavioral Interview Guides copy is accurate (Wonderlic-built, prebuilt, role-related, competency-tied) and includes no invented example questions.
- [ ] Confirm New Hire Success Tips copy is scoped to external-hire onboarding.
- [ ] Confirm all top-of-page pill clutter has been removed on the six core archetype pages.

## Structural / codebase

- [ ] Retire `src/data/archetypeGuidance.ts`, `src/data/productMoments.ts`, `TALK_TRACKS` in `src/data/index.ts` once all consumers migrate to the rich `{id}Guidance.ts` shape.
- [ ] Promote rich guidance to a shared TypeScript interface in `src/data/types.ts`.
- [ ] Consider extracting the repeated archetype detail layout into a single generic component driven by the rich guidance object (all six detail components are structurally near-identical).

## Review

- [ ] Review the full app with Sales reps and CS reps and log feedback into a follow-up sheet.
