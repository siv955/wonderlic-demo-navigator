import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { archetypeById, profileById, type ArchetypeId } from "@/data";
import { guidanceFor } from "@/data/archetypeGuidance";
import { runThisDemoFor } from "@/data/runThisDemo";
import { productMomentsFor, type ProductMoment, type DevelopMoment, type TeamDynamicsMoment } from "@/data/productMoments";
import { StoryBadge } from "@/components/story-badge";
import { CopyButton } from "@/components/copy-button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowLeft, AlertTriangle, PlayCircle, Megaphone, HelpCircle } from "lucide-react";
import { DerekArchetypeDetail } from "@/components/derek-archetype-detail";
import { EthanArchetypeDetail } from "@/components/ethan-archetype-detail";
import { CalebArchetypeDetail } from "@/components/caleb-archetype-detail";
import { RileyArchetypeDetail } from "@/components/riley-archetype-detail";

export const Route = createFileRoute("/archetypes/$id")({
  head: ({ params }) => {
    const a = archetypeById(params.id);
    if (!a) {
      return { meta: [{ title: "Archetype not found, Wonderlic Demo Story Finder" }] };
    }
    return {
      meta: [
        { title: `${a.memoryHook}, Demo Guidance` },
        { name: "description", content: a.customerPain.slice(0, 155) },
        { property: "og:title", content: `${a.memoryHook}, Demo Guidance` },
        { property: "og:description", content: a.roleFraming },
      ],
    };
  },
  loader: ({ params }) => {
    const a = archetypeById(params.id);
    if (!a) throw notFound();
    return { archetype: a };
  },
  component: ArchetypeDetail,
  notFoundComponent: () => (
    <div className="py-16 text-center">
      <h1 className="font-display text-3xl font-light">Archetype not found</h1>
      <Link to="/archetypes" className="mt-4 inline-block text-sm font-semibold text-blurple hover:underline">
        Back to Archetype Library
      </Link>
    </div>
  ),
});

function ArchetypeDetail() {
  const { archetype: a } = Route.useLoaderData();
  if (a.id === "derek") {
    return <DerekArchetypeDetail />;
  }
  if (a.id === "ethan") {
    return <EthanArchetypeDetail />;
  }
  if (a.id === "caleb") {
    return <CalebArchetypeDetail />;
  }
  if (a.id === "riley") {
    return <RileyArchetypeDetail />;
  }
  const g = guidanceFor(a.id as ArchetypeId);
  const r = runThisDemoFor(a.id as ArchetypeId);
  const m = productMomentsFor(a.id as ArchetypeId);
  const profile = profileById(a.demoProfileId);

  const runCardText = [
    `${a.memoryHook} · Run This Demo`,
    profile ? `Profile: ${profile.name}` : "",
    "",
    `Anchor on this pain: ${r.anchorOnThisPain}`,
    `Select: ${r.selectPoint}`,
    `Develop: ${r.developAttribute}`,
    `Team Dynamics: ${r.teamDynamics}`,
    `Value close: ${r.closeWith}`,
  ]
    .filter(Boolean)
    .join("\n");

  const recapText = [
    `${a.memoryHook} · Recap`,
    "",
    "Current state / pain:",
    ...g.recap.currentState.map((b) => `• ${b}`),
    "",
    "Future state / goals:",
    ...g.recap.futureState.map((b) => `• ${b}`),
  ].join("\n");

  return (
    <div className="space-y-8">
      <Link
        to="/archetypes"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-blurple"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Archetype Library
      </Link>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-blurple">
            {a.workerCategory} · Canonical archetype
          </p>
        </div>
        <h1 className="font-display text-5xl font-light leading-tight text-wonderlic-blue">
          {a.memoryHook}
        </h1>
        <div className="flex flex-wrap gap-2">
          <StoryBadge variant="caution">Primary gap: {r.primaryGapLabel}</StoryBadge>
          <StoryBadge variant="core">Canonical archetype</StoryBadge>
          {profile && (
            <span className="inline-flex items-center rounded-full border border-blue-lilac bg-soft-purple px-2.5 py-0.5 text-[11px] font-semibold text-blurple">
              Demo profile: {profile.name}
            </span>
          )}
        </div>
        <p className="max-w-3xl text-base text-muted-foreground">{r.shortDefinition}</p>
        <div className="grid gap-3 rounded-2xl border border-border bg-card p-4 md:grid-cols-3">
          <MetaLine label="Use when" value={g.bestUseCase} />
          <MetaLine label="Not this if" value={g.doNotUseWhen} tone="caution" />
          <MetaLine
            label="Develop anchor / TD path"
            value={`${g.develop.primaryDirection === "low" ? "Low " : "High "}${g.develop.primary} · ${g.teamDynamics.section} → ${g.teamDynamics.page}`}
          />
        </div>
      </header>

      {/* Section 1: RUN THIS DEMO */}
      <section className="rounded-2xl border-2 border-blurple/40 bg-purple-chalk/60 p-6 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-blurple" />
            <h2 className="font-display text-2xl font-normal text-wonderlic-blue">Run This Demo</h2>
          </div>
          <CopyButton text={runCardText} label="Copy Run This Demo card" />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <RunField label="Anchor on this pain" value={r.anchorOnThisPain} />
          <RunField label="Select" value={r.selectPoint} />
          <RunField label="Develop" value={r.developAttribute} />
          <RunField label="Team Dynamics" value={r.teamDynamics} />
          <RunField label="Value close" value={r.closeWith} full />
        </div>
      </section>

      {/* Section 2: Strength / Gap / How Wonderlic Helps */}
      <div className="grid gap-4 md:grid-cols-3">
        <GuidanceCard tone="strength" title="The Strength" body={g.strength} />
        <GuidanceCard tone="gap" title="The Gap" body={g.gap} />
        <GuidanceCard tone="develop" title="How Wonderlic Helps" body={g.developHelps} />
      </div>

      {/* Say this out loud */}
      <section className="rounded-2xl border border-blue-lilac bg-soft-purple/50 p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Megaphone className="h-5 w-5 text-blurple" />
            <h2 className="font-display text-xl font-normal text-wonderlic-blue">
              Say this out loud
            </h2>
          </div>
          <CopyButton text={r.sayThisOutLoud} label="Copy talk track" />
        </div>
        <p className="text-base leading-relaxed text-wonderlic-blue">{r.sayThisOutLoud}</p>
      </section>

      {/* Section 3: Quick Discovery Fit */}
      <section className="rounded-2xl border border-border bg-card p-6">
        <div className="mb-3 flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-blurple" />
          <h2 className="font-display text-xl font-normal text-wonderlic-blue">
            Quick Discovery Fit
          </h2>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-blurple">
          Use this story when the customer says…
        </p>
        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
          {m.quickDiscovery.triggers.map((t) => (
            <li
              key={t}
              className="rounded-lg border border-border bg-soft-purple/30 px-3 py-2 text-sm text-wonderlic-blue"
            >
              &ldquo;{t}&rdquo;
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-lg border border-blue-lilac bg-soft-purple/60 p-3 text-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
            Clarifying question if ambiguous
          </p>
          <p className="mt-1 text-wonderlic-blue">{m.quickDiscovery.clarifyingQuestion}</p>
        </div>
      </section>

      {/* Product moment tabs */}
      <Tabs defaultValue="select" className="w-full">
        <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 bg-muted/40 p-1">
          <TabsTrigger value="select">Select</TabsTrigger>
          <TabsTrigger value="develop">Develop</TabsTrigger>
          <TabsTrigger value="td">Team Dynamics</TabsTrigger>
          <TabsTrigger value="recap">Recap Slide</TabsTrigger>
          <TabsTrigger value="cautions">Cautions</TabsTrigger>
        </TabsList>

        {/* SELECT */}
        <TabsContent value="select" className="mt-6">
          <ProductMomentPanel
            momentLabel="Select"
            moment={m.select}
            supportingSignals={g.select.supportingSignals}
          />
        </TabsContent>

        {/* DEVELOP */}
        <TabsContent value="develop" className="mt-6">
          <ProductMomentPanel
            momentLabel="Develop"
            moment={m.develop}
            askWonderlicPrompt={m.develop.askWonderlicPrompt}
            primaryAttribute={`${g.develop.primaryDirection === "low" ? "Low " : "High "}${g.develop.primary}`}
          />
        </TabsContent>

        {/* TEAM DYNAMICS */}
        <TabsContent value="td" className="mt-6">
          <ProductMomentPanel
            momentLabel="Team Dynamics"
            moment={m.teamDynamics}
            pageToOpen={m.teamDynamics.pageToOpen}
            proxyNote={m.teamDynamics.proxyNote}
          />
        </TabsContent>

        {/* RECAP */}
        <TabsContent value="recap" className="mt-6 space-y-4">
          <Section title="Current state / pain">
            <ul className="space-y-1.5 text-sm text-wonderlic-blue">
              {g.recap.currentState.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </Section>
          <Section title="Future state / goals">
            <ul className="space-y-1.5 text-sm text-wonderlic-blue">
              {g.recap.futureState.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </Section>
          <div>
            <CopyButton text={recapText} label="Copy recap slide bullets" />
          </div>
        </TabsContent>

        {/* CAUTIONS */}
        <TabsContent value="cautions" className="mt-6">
          <Section title="What not to say">
            <ul className="space-y-2">
              {g.cautions.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2 rounded-lg border border-select/40 bg-select-ice/50 p-3 text-sm text-wonderlic-blue"
                >
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Section>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ProductMomentPanel({
  momentLabel,
  moment,
  supportingSignals,
  askWonderlicPrompt,
  pageToOpen,
  proxyNote,
  primaryAttribute,
}: {
  momentLabel: string;
  moment: ProductMoment | DevelopMoment | TeamDynamicsMoment;
  supportingSignals?: string[];
  askWonderlicPrompt?: string;
  pageToOpen?: string;
  proxyNote?: string;
  primaryAttribute?: string;
}) {
  return (
    <div className="space-y-4">
      <Section title={`What ${momentLabel} is doing in this demo`}>
        <p className="text-sm leading-relaxed text-wonderlic-blue">{moment.whatItDoes}</p>
        {primaryAttribute && (
          <p className="mt-2 text-xs font-semibold text-blurple">
            Primary attribute: {primaryAttribute}
          </p>
        )}
        {pageToOpen && (
          <p className="mt-2 text-xs font-semibold text-blurple">Page to open: {pageToOpen}</p>
        )}
        {proxyNote && <p className="mt-2 text-xs italic text-muted-foreground">{proxyNote}</p>}
      </Section>

      <Section title="What to show">
        <ul className="space-y-1.5 text-sm text-wonderlic-blue">
          {moment.whatToShow.map((s) => (
            <li key={s}>• {s}</li>
          ))}
        </ul>
        {supportingSignals && supportingSignals.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-blurple">
              Related Select signals to inspect
            </p>
            <p className="mb-2 text-xs italic text-muted-foreground">
              Related Select signals are directional story inputs, not one-to-one equivalents.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {supportingSignals.map((s) => (
                <StoryBadge key={s} variant="select">
                  {s}
                </StoryBadge>
              ))}
            </div>
          </div>
        )}
      </Section>

      <Section title="In your own words, make these points">
        <ul className="space-y-1.5 text-sm text-wonderlic-blue">
          {moment.inYourOwnWords.map((s) => (
            <li key={s}>• {s}</li>
          ))}
        </ul>
      </Section>

      <Section title="Example script">
        <p className="text-sm leading-relaxed text-wonderlic-blue">{moment.exampleScript}</p>
        <div className="mt-3">
          <CopyButton text={moment.exampleScript} label={`Copy ${momentLabel} script`} />
        </div>
      </Section>

      {askWonderlicPrompt && (
        <Section title="Ask Wonderlic prompt">
          <p className="whitespace-pre-line text-sm leading-relaxed text-wonderlic-blue">
            {askWonderlicPrompt}
          </p>
          <div className="mt-3">
            <CopyButton text={askWonderlicPrompt} label="Copy Ask Wonderlic prompt" />
          </div>
        </Section>
      )}

      <section className="rounded-2xl border border-develop/40 bg-develop-ice/50 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
          Value tie-back
        </p>
        <p className="mt-2 text-sm leading-relaxed text-wonderlic-blue">{moment.valueTieBack}</p>
      </section>

      <CautionBox text={moment.caution} />
    </div>
  );
}

function MetaLine({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "caution";
}) {
  const border = tone === "caution" ? "border-select/50 bg-select-ice/60" : "border-blue-lilac bg-soft-purple/40";
  return (
    <div className={`rounded-lg border p-3 ${border}`}>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">{label}</p>
      <p className="mt-1 text-xs leading-relaxed text-wonderlic-blue">{value}</p>
    </div>
  );
}

function RunField({ label, value, full }: { label: string; value: string; full?: boolean }) {
  return (
    <div className={`rounded-xl border border-blue-lilac bg-card p-3 ${full ? "md:col-span-2" : ""}`}>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-wonderlic-blue">{value}</p>
    </div>
  );
}

function GuidanceCard({
  tone,
  title,
  body,
}: {
  tone: "strength" | "gap" | "develop";
  title: string;
  body: string;
}) {
  const toneClass =
    tone === "strength"
      ? "border-blue-lilac bg-soft-purple/40"
      : tone === "gap"
      ? "border-select/50 bg-select-ice/60"
      : "border-develop/50 bg-develop-ice/60";
  return (
    <div className={`rounded-2xl border p-5 ${toneClass}`}>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-wonderlic-blue">{body}</p>
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5">
      <div className="mb-3">
        <h3 className="font-display text-lg font-normal text-wonderlic-blue">{title}</h3>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function CautionBox({ text, label = "Caution" }: { text: string; label?: string }) {
  return (
    <div className="flex items-start gap-2 rounded-lg border border-select/50 bg-select-ice/60 p-3 text-sm">
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-wonderlic-blue" />
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-wonderlic-blue">
          {label}
        </p>
        <p className="mt-0.5 text-wonderlic-blue">{text}</p>
      </div>
    </div>
  );
}
