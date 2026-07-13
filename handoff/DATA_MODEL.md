# DATA_MODEL.md

## Current data shapes

### Archetype (`src/data/types.ts` + `src/data/archetypes.json`)

```ts
type ArchetypeId = "ethan" | "derek" | "caleb" | "riley" | "isabelle" | "simon";

interface Archetype {
  id: ArchetypeId;
  firstName: string;
  lastName: string;
  memoryHook: string;            // e.g. "Diligence Derek"
  workerCategory: string;        // e.g. "Sales"
  roleFraming: string;
  customerPain: string;
  fullStory: string;
  easierAttributes: string[];
  harderAttributes: string[];
  developAnchor: string;         // primary Develop attribute
  developAnchorLogic: string;
  alternateAttributes: string[];
  teamDynamicsSection: string;   // e.g. "Getting Work Done Together"
  teamDynamicsPage: string;      // e.g. "Orderliness"
  selectLens: string;
  demoProfileId: string;
  demoProfileName: string;
  selectStory: string;
  selectSignals: string[];
  interviewProbe: string;
  selectRisk: string;
  developHandoff: string;
  useWhenCustomerSays: string;
  tdTeamSetup: string;
  tdVisualPattern: string;
  tdManagerInsight: string;
  tdRepTalkTrack: string;
  tdBuildNotes: string;
}
```

### Rich archetype guidance (`src/data/{id}Guidance.ts`)

Not typed formally — each `{ID}_GUIDANCE` is a `const` object with (approximately) this shape:

```ts
interface RichGuidance {
  header: {
    name: string;
    memoryHook: string;
    primaryGap: string;
    story: string;
    developAnchor: string;
    teamDynamicsPath: string;
    oneSentence: string;
    useWhen: string[];
    doNotUseWhen: string[];
  };
  runThisDemo: {
    anchorOnThisPain: string;
    select: string;
    develop: string;
    teamDynamics: string;
    valueClose: string;
  };
  businessImpactLadder: {
    observablePattern: string;
    operationalConsequence: string;
    businessPain: string;
    wonderlicValue: string;
  };
  coreStory: string[];
  coreStoryHelps: { label: string; body: string }[];
  selectMoment: ProductMoment;
  transitionSelectToDevelop: string;
  developMoment: ProductMoment & { askWonderlicPrompt: string };
  transitionDevelopToTeam: string;
  teamDynamicsMoment: ProductMoment & { pageToOpen: string; proxyNote?: string };
  fullClose: string;
  recapBullets: string[];
  cautions: string[];
  // Optional: fullScript blocks per moment (present as `fullScript` fields inside each moment)
}

interface ProductMoment {
  purpose: string;
  whatToShow: string[];
  productBasics: string;
  storyTranslation: string;
  ownWords: string[];
  signalsToInspect?: string[];
  signalsNote?: string;
  fullScript: string;
  interviewGuideReference?: string;   // Behavioral Interview Guides callout
  newHireTipsReference?: string;      // New Hire Success Tips callout
  midDemoQuestions: string[];
}
```

### Business pain mapping (`src/data/painMappings.ts`)

```ts
interface PainCategory { id: string; label: string; pains: Pain[]; }
interface Pain {
  id: string;
  label: string;
  keywords: string[];
  archetypeId: ArchetypeId;
  backupArchetypeId?: ArchetypeId;
  rationale: string;
}
```

### Attribute finder (`src/data/attributes.json` + `src/lib/matching.ts`)

```ts
interface AttributeMeta { name: string; type: "Select" | "Develop"; }
type Direction = "high" | "low";
interface AttrCondition { attribute: string; direction: Direction; level: number; }
```

### Profile directory (`src/data/profiles.json`)

```ts
interface Profile {
  id: string;
  name: string; firstName: string; lastName: string;
  email: string;
  coreOrExtra: "Core" | "Extra";
  roleFlavor: string;
  scores: Record<string, number>;         // per-attribute score
  bestHighAttributes: string[];
  bestLowAttributes: string[];
  associatedArchetypeId: ArchetypeId | null;
}
```

### Attribute Story (`src/data/attributeStories.ts`)

```ts
interface AttributeStory {
  attribute: string;
  meaning: string;
  customerPainLanguage: string[];
  lowStory: string;
  highStory: string;
  teamDynamicsAvailable: boolean;
  teamDynamicsPath?: string;
  bestProxy?: string;
  relatedSelectSignals: string[];
  thirtySecondTalkTrack: string;
  askWonderlic: string;
  whatNotToSay: string;
  relatedArchetypeId?: ArchetypeId;
  quality?: "Curated" | "Draft" | "Needs SME review" | "Proxy only" | "No Team Dynamics page";
}
```

### `TALK_TRACKS` (legacy, `src/data/index.ts`)

Short/long talk-track map keyed by archetype id. Predates the rich per-archetype guidance and overlaps with `runThisDemo` + `richGuidance`. Candidate for removal once all consumers migrate.

## Duplicated / stale / legacy fields

- **`archetypeGuidance.ts`** — older shared guidance shape. Superseded by `{id}Guidance.ts` for the six core archetypes but still imported in places.
- **`productMoments.ts`** — older Select/Develop/TD template. Rich guidance's `selectMoment` / `developMoment` / `teamDynamicsMoment` inline the same fields.
- **`TALK_TRACKS`** in `src/data/index.ts` — overlaps with rich guidance `runThisDemo` and `coreStory`.
- **`archetypes.json`** contains `tdRepTalkTrack`, `tdManagerInsight`, `tdVisualPattern`, `tdBuildNotes` — most rich detail pages now source Team Dynamics copy from the rich guidance object instead. These fields still power fallbacks and the Library card.

## Recommended future clean schema

1. Promote `RichGuidance` to a typed interface in `src/data/types.ts`.
2. Collapse `Archetype` (from `archetypes.json`) to a lean library-card shape: `{ id, firstName, lastName, memoryHook, workerCategory, roleFraming, customerPain, developAnchor, teamDynamicsSection, teamDynamicsPage, demoProfileId }`.
3. Move `runThisDemo` under `RichGuidance.runThisDemo` (already present there) and delete `src/data/runThisDemo.ts`.
4. Delete `TALK_TRACKS`, `archetypeGuidance.ts`, `productMoments.ts` once the last consumer migrates.
5. Add `zod` schemas for `PAIN_CATEGORIES`, `ATTRIBUTE_STORIES`, and `profiles.json` for content validation at build time.
