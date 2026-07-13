# QA_CHECKLIST.md

Run through this before publishing any archetype or content update.

## Product accuracy

- [ ] Select copy references external hiring candidates only. No mention of promotion, internal mobility, current employees, or existing managers.
- [ ] Develop copy is scoped to current employees and managers.
- [ ] Team Dynamics copy is scoped to current teams.
- [ ] Behavioral Interview Guides sections describe the Wonderlic-built, prebuilt, role-related, competency-tied capability. No made-up example questions attributed to Wonderlic.
- [ ] New Hire Success Tips sections describe the onboarding handoff for external hires. No promotion or internal-placement language.

## Business pain framing

- [ ] Every archetype has a complete Business Impact Ladder (observable pattern → operational consequence → business pain → Wonderlic value).
- [ ] The behavior gap is not described as "the business pain".
- [ ] Business pain is operational or commercial (revenue, quality, turnover, manager time), not a trait.

## Archetype consistency

- [ ] Header includes name, memory hook, one-sentence story, three metadata cards. No top-level pill clutter.
- [ ] Run This Demo card is present and copyable.
- [ ] Core Story, Select, Transition, Develop, Transition, Team Dynamics, Full Close, Recap Bullets, Cautions are all present.
- [ ] Cautions include what NOT to say for this archetype.

## UI / UX

- [ ] Top nav shows the six sections (Start, Business Pain Finder, Attribute Finder, Archetype Library, Profile Directory, Attribute Stories) and the Demo Principles drawer trigger.
- [ ] Archetype detail page renders for all six IDs: ethan, derek, caleb, riley, isabelle, simon.
- [ ] Copy buttons work (test at least one per page).
- [ ] Tabs and accordions expand and collapse correctly.
- [ ] Mobile nav (Sheet) opens and closes.

## Copy consistency

- [ ] No em dashes anywhere in user-facing copy.
- [ ] Voice matches how a rep would actually speak.
- [ ] Low scores are not framed as character flaws.
- [ ] No deterministic prediction language.

## Export readiness

- [ ] `handoff/CONTENT_EXPORT.json` parses as valid JSON.
- [ ] `handoff/COPY_EXPORT.md` covers all six core archetypes.
- [ ] `handoff/` folder contains all 9 required files.
