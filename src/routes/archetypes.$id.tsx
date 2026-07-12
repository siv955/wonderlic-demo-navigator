import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { archetypeById, profileById, type ArchetypeId } from "@/data";
import { guidanceFor } from "@/data/archetypeGuidance";
import { StoryBadge } from "@/components/story-badge";
import { CopyButton } from "@/components/copy-button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight, User, AlertTriangle } from "lucide-react";

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
  const g = guidanceFor(a.id as ArchetypeId);
  const profile = profileById(a.demoProfileId);

  const recapText = [
    `${a.memoryHook} · Recap`,
    "",
    "Current state / pain:",
    ...g.recap.currentState.map((b) => `• ${b}`),
    "",
    "Future state / goals:",
    ...g.recap.futureState.map((b) => `• ${b}`),
  ].join("\n");

  const fullPlan = [
    `${a.memoryHook} · Full Demo Plan`,
    ``,
    `Profile to open: ${a.demoProfileName}`,
    `Primary Develop attribute: ${g.develop.primary}`,
    `Team Dynamics: ${g.teamDynamics.section} → ${g.teamDynamics.page}`,
    ``,
    `-- STRENGTH --`,
    g.strength,
    ``,
    `-- GAP --`,
    g.gap,
    ``,
    `-- HOW DEVELOP HELPS --`,
    g.developHelps,
    ``,
    `-- DEMO ARC --`,
    g.demoArc,
    ``,
    `-- SELECT --`,
    g.select.howToSayIt,
    ``,
    `-- DEVELOP --`,
    g.develop.plainEnglish,
    `Coaching action: ${g.develop.coachingAction}`,
    ``,
    `-- TEAM DYNAMICS --`,
    g.teamDynamics.whatToSay,
    ``,
    `-- ASK WONDERLIC --`,
    g.askWonderlic,
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

      {/* 1. Story Snapshot */}
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-blurple">
          {a.workerCategory} · Canonical archetype
        </p>
        <h1 className="font-display text-5xl font-light leading-tight text-wonderlic-blue">
          {a.memoryHook}
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground">{a.roleFraming}</p>
      </header>

      <section className="grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <SnapshotField
              label="Develop anchor"
              value={`${g.develop.primaryDirection === "low" ? "Low" : "High"} ${g.develop.primary}`}
            />
            <SnapshotField
              label="Team Dynamics"
              value={`${g.teamDynamics.section} → ${g.teamDynamics.page}`}
            />
          </div>
          <div className="rounded-lg border border-border bg-soft-purple/40 p-3 text-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
              Use when
            </p>
            <p className="mt-1 text-sm leading-relaxed text-wonderlic-blue">{g.bestUseCase}</p>
          </div>
          <div className="flex items-start gap-2 rounded-lg border border-select/50 bg-select-ice/70 p-3 text-sm">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-wonderlic-blue" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-wonderlic-blue">
                Do not use when
              </p>
              <p className="mt-0.5 text-sm text-wonderlic-blue">{g.doNotUseWhen}</p>
            </div>
          </div>
        </div>
        {profile && (
          <Link
            to="/profiles"
            className="flex h-full flex-col justify-between rounded-xl border border-blue-lilac bg-soft-purple p-4 transition-colors hover:bg-purple-chalk"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blurple">
                Demo profile
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blurple text-white">
                  <User className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display text-lg font-normal text-wonderlic-blue">
                    {profile.name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">{profile.email}</p>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <StoryBadge variant="core">Core archetype</StoryBadge>
              </div>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blurple">
              Open in directory <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        )}
      </section>

      <div className="flex flex-wrap gap-2">
        <CopyButton text={fullPlan} label="Copy full demo plan" />
        <CopyButton text={recapText} label="Copy recap slide bullets" />
      </div>

      <Tabs defaultValue="story" className="w-full">
        <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 bg-muted/40 p-1">
          <TabsTrigger value="story">Story Guidance</TabsTrigger>
          <TabsTrigger value="select">Select</TabsTrigger>
          <TabsTrigger value="develop">Develop</TabsTrigger>
          <TabsTrigger value="td">Team Dynamics</TabsTrigger>
          <TabsTrigger value="tracks">Talk Tracks</TabsTrigger>
          <TabsTrigger value="ask">Ask Wonderlic</TabsTrigger>
          <TabsTrigger value="cautions">Cautions</TabsTrigger>
          <TabsTrigger value="recap">Recap slide</TabsTrigger>
        </TabsList>

        {/* STORY GUIDANCE */}
        <TabsContent value="story" className="mt-6 space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <GuidanceCard tone="strength" title="The Strength" body={g.strength} />
            <GuidanceCard tone="gap" title="The Gap" body={g.gap} />
            <GuidanceCard tone="develop" title="How Develop Helps" body={g.developHelps} />
          </div>

          <Section
            title="Discovery triggers"
            subtitle="Use this story when the customer says…"
          >
            <ul className="grid gap-2 sm:grid-cols-2">
              {g.discoveryTriggers.map((t) => (
                <li key={t} className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-wonderlic-blue">
                  &ldquo;{t}&rdquo;
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg border border-blue-lilac bg-soft-purple/50 p-3 text-sm">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
                Clarifying question if ambiguous
              </p>
              <p className="mt-1 text-wonderlic-blue">{g.clarifyingQuestion}</p>
            </div>
          </Section>

          <Section title="How to tell the story" subtitle="Full demo arc">
            <p className="whitespace-pre-line text-sm leading-relaxed text-wonderlic-blue">
              {g.demoArc}
            </p>
          </Section>

          <Section title="Screens to show / skip">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
                  Show
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-wonderlic-blue">
                  {g.screensToShow.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Skip
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {g.screensToSkip.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>
        </TabsContent>

        {/* SELECT */}
        <TabsContent value="select" className="mt-6 space-y-4">
          <Section title="Screen-out angle">
            <p className="text-sm leading-relaxed text-wonderlic-blue">{g.select.screenOut}</p>
          </Section>
          <Section title="Screen-in angle">
            <p className="text-sm leading-relaxed text-wonderlic-blue">{g.select.screenIn}</p>
          </Section>
          <Section title="How to say it">
            <p className="text-sm leading-relaxed text-wonderlic-blue">{g.select.howToSayIt}</p>
            <div className="mt-3">
              <CopyButton text={g.select.howToSayIt} label="Copy Select framing" />
            </div>
          </Section>
          <CautionBox text={g.select.caution} />
          <Accordion type="single" collapsible>
            <AccordionItem value="signals" className="rounded-lg border border-border">
              <AccordionTrigger className="px-4 text-sm font-semibold text-muted-foreground">
                Supporting signals (raw attributes)
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <div className="flex flex-wrap gap-1.5">
                  {g.select.supportingSignals.map((s) => (
                    <StoryBadge key={s} variant="select">
                      {s}
                    </StoryBadge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        {/* DEVELOP */}
        <TabsContent value="develop" className="mt-6 space-y-4">
          <Section title={`Primary attribute · ${g.develop.primary}`}>
            <p className="text-sm leading-relaxed text-wonderlic-blue">{g.develop.whyAnchor}</p>
          </Section>
          <Section title="In plain English">
            <p className="text-sm leading-relaxed text-wonderlic-blue">{g.develop.plainEnglish}</p>
          </Section>
          <Section title="Coaching action">
            <p className="text-sm leading-relaxed text-wonderlic-blue">{g.develop.coachingAction}</p>
            <div className="mt-3">
              <CopyButton text={g.develop.coachingAction} label="Copy coaching action" />
            </div>
          </Section>
          <CautionBox text={g.develop.dontSay} label="Do not say" />
          <Accordion type="single" collapsible>
            <AccordionItem value="supporting" className="rounded-lg border border-border">
              <AccordionTrigger className="px-4 text-sm font-semibold text-muted-foreground">
                Supporting attributes
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <div className="flex flex-wrap gap-1.5">
                  {g.develop.supporting.map((s) => (
                    <StoryBadge key={s} variant="develop">
                      {s}
                    </StoryBadge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        {/* TEAM DYNAMICS */}
        <TabsContent value="td" className="mt-6 space-y-4">
          <Section title={`${g.teamDynamics.section} → ${g.teamDynamics.page}`}>
            <p className="text-sm leading-relaxed text-wonderlic-blue">
              {g.teamDynamics.whyThisPage}
            </p>
          </Section>
          <Section title="Manager insight">
            <p className="text-sm leading-relaxed text-wonderlic-blue">
              {g.teamDynamics.managerInsight}
            </p>
          </Section>
          <Section title="How to explain high vs low">
            <p className="text-sm leading-relaxed text-wonderlic-blue">
              {g.teamDynamics.howToExplain}
            </p>
          </Section>
          <Section title="What to say out loud">
            <p className="text-sm leading-relaxed text-wonderlic-blue">
              {g.teamDynamics.whatToSay}
            </p>
            <div className="mt-3">
              <CopyButton text={g.teamDynamics.whatToSay} label="Copy TD framing" />
            </div>
          </Section>
          <CautionBox text={g.teamDynamics.dontOverclaim} label="Do not overclaim" />
        </TabsContent>

        {/* TALK TRACKS */}
        <TabsContent value="tracks" className="mt-6 space-y-4">
          <TrackCard title="30-second version" body={g.talkTracks.thirtySecond} />
          <TrackCard title="3-minute version" body={g.talkTracks.threeMinute} />
          <TrackCard title="10–15 minute recording guide" body={g.talkTracks.recordingGuide} />
        </TabsContent>

        {/* ASK WONDERLIC */}
        <TabsContent value="ask" className="mt-6 space-y-4">
          <Section title="Prewritten Ask Wonderlic prompt">
            <p className="whitespace-pre-line text-sm leading-relaxed text-wonderlic-blue">
              {g.askWonderlic}
            </p>
            <div className="mt-3">
              <CopyButton text={g.askWonderlic} label="Copy Ask Wonderlic prompt" />
            </div>
          </Section>
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
      </Tabs>
    </div>
  );
}

function SnapshotField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      <p className="mt-0.5 text-sm font-medium text-wonderlic-blue">{value}</p>
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

function TrackCard({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="font-display text-lg font-normal text-wonderlic-blue">{title}</h3>
        <CopyButton text={body} label={`Copy ${title.toLowerCase()}`} />
      </div>
      <p className="whitespace-pre-line text-sm leading-relaxed text-wonderlic-blue">{body}</p>
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
