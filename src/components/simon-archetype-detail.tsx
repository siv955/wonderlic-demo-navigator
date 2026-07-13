import { Link } from "@tanstack/react-router";
import { SIMON_GUIDANCE } from "@/data/simonGuidance";
import { CopyButton } from "@/components/copy-button";
import { BusinessImpactLadder } from "@/components/business-impact-ladder";
import { StoryBadge } from "@/components/story-badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  PlayCircle,
  BookOpen,
  ArrowRight,
  AlertTriangle,
  MessageCircle,
  HelpCircle,
  Sparkles,
  ClipboardList,
  Flag,
  Eye,
  MessageSquare,
  Target,
} from "lucide-react";

type ProductMoment = typeof SIMON_GUIDANCE.selectMoment;
type DevelopMoment = typeof SIMON_GUIDANCE.developMoment;
type TeamMoment = typeof SIMON_GUIDANCE.teamDynamicsMoment;

export function SimonArchetypeDetail() {
  const g = SIMON_GUIDANCE;

  const runCardText = [
    `${g.header.name} · ${g.header.memoryHook} · Run This Demo`,
    "",
    `Anchor on this pain: ${g.runThisDemo.anchorOnThisPain}`,
    `Select: ${g.runThisDemo.select}`,
    `Develop: ${g.runThisDemo.develop}`,
    `Team Dynamics: ${g.runThisDemo.teamDynamics}`,
    `Value close: ${g.runThisDemo.valueClose}`,
  ].join("\n");

  const recapText = [
    `${g.header.memoryHook} · Recap`,
    "",
    "Current state / pain:",
    ...g.recap.currentState.map((b) => `• ${b}`),
    "",
    "Future state / goals:",
    ...g.recap.futureState.map((b) => `• ${b}`),
  ].join("\n");

  const fullScriptText = [
    `${g.header.name} · Full Script`,
    "",
    "— Setup —",
    g.coreStory.join(" "),
    "",
    "— Select —",
    g.selectMoment.fullScript,
    "",
    "— Transition: Select to Develop —",
    g.selectToDevelopTransition,
    "",
    "— Develop —",
    g.developMoment.fullScript,
    "",
    "— Ask Wonderlic —",
    g.developMoment.askWonderlicScript,
    "",
    "— Transition: Develop to Team Dynamics —",
    g.developToTeamTransition,
    "",
    "— Team Dynamics —",
    g.teamDynamicsMoment.fullScript,
    "",
    "— Full Close —",
    g.fullClose,
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

      {/* HEADER */}
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-blurple">
          Canonical archetype · Gold-standard demo guide
        </p>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h1 className="font-display text-4xl font-light leading-tight text-wonderlic-blue md:text-5xl">
            {g.header.name}
          </h1>
          <p className="font-display text-xl font-light text-blurple md:text-2xl">
            Memory hook: {g.header.memoryHook}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <StoryBadge variant="core">Core Archetype</StoryBadge>
          <StoryBadge variant="caution">Primary gap: {g.header.primaryGap}</StoryBadge>
          <StoryBadge variant="select">Select</StoryBadge>
          <StoryBadge variant="develop">Develop</StoryBadge>
          <StoryBadge variant="team-dynamics">Team Dynamics</StoryBadge>
          <StoryBadge variant="core">Copyable Script</StoryBadge>
          <StoryBadge variant="core">Optional Moment</StoryBadge>
          <StoryBadge variant="develop">Business Impact</StoryBadge>
          <StoryBadge variant="caution">Use With Caution</StoryBadge>
        </div>
        <p className="max-w-3xl text-base leading-relaxed text-wonderlic-blue">
          {g.header.oneSentence}
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <MetaCard label="Story" value={g.header.story} />
          <MetaCard label="Develop anchor" value={g.header.developAnchor} />
          <MetaCard label="Team Dynamics path" value={g.header.teamDynamicsPath} />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <ListCard
            label="Use Simon when the customer says"
            items={g.header.useWhen}
            tone="neutral"
          />
          <ListCard
            label="Do not use Simon when"
            items={g.header.doNotUseWhen}
            tone="caution"
          />
        </div>
      </header>

      {/* RUN THIS DEMO */}
      <section
        id="run-this-demo"
        className="rounded-2xl border-2 border-blurple/40 bg-purple-chalk/60 p-6 shadow-sm"
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-blurple" />
            <h2 className="font-display text-2xl font-normal text-wonderlic-blue">
              Run This Demo
            </h2>
          </div>
          <CopyButton text={runCardText} label="Copy Run This Demo card" />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <RunField label="Anchor on this pain" value={g.runThisDemo.anchorOnThisPain} />
          <RunField label="Select" value={g.runThisDemo.select} />
          <RunField label="Develop" value={g.runThisDemo.develop} />
          <RunField label="Team Dynamics" value={g.runThisDemo.teamDynamics} />
          <RunField label="Value close" value={g.runThisDemo.valueClose} full />
        </div>
      </section>

      {/* BUSINESS IMPACT LADDER */}
      <BusinessImpactLadder ladder={g.businessImpactLadder} />



      {/* CORE STORY — collapsible */}
      <section className="rounded-2xl border border-border bg-card">
        <Accordion type="single" collapsible>
          <AccordionItem value="core-story" className="border-none">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-2 text-left">
                <BookOpen className="h-5 w-5 text-blurple" />
                <div>
                  <p className="font-display text-xl font-normal text-wonderlic-blue">
                    Core Story
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {g.coreStory[0]} {g.coreStory[1]}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-3 text-sm leading-relaxed text-wonderlic-blue">
                {g.coreStory.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-4 text-sm font-semibold text-wonderlic-blue">
                Wonderlic helps in three ways:
              </p>
              <div className="mt-2 grid gap-2 md:grid-cols-3">
                {g.coreStoryHelps.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-lg border border-blue-lilac bg-soft-purple/40 p-3"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
                      {h.label}
                    </p>
                    <p className="mt-1 text-sm text-wonderlic-blue">{h.body}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* DEMO MOMENTS TABS */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-blurple" />
          <h2 className="font-display text-2xl font-normal text-wonderlic-blue">
            Demo Moments
          </h2>
        </div>
        <Tabs defaultValue="select" className="w-full">
          <div className="sticky top-0 z-20 -mx-2 bg-background/95 px-2 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/70">
            <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 bg-muted/40 p-1">
              <TabsTrigger value="select">Select</TabsTrigger>
              <TabsTrigger value="develop">Develop</TabsTrigger>
              <TabsTrigger value="team">Team Dynamics</TabsTrigger>
              <TabsTrigger value="recap">Recap Slide</TabsTrigger>
              <TabsTrigger value="cautions">Cautions</TabsTrigger>
              <TabsTrigger value="full">Full Script</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="select" className="mt-6">
            <SelectPanel moment={g.selectMoment} />
          </TabsContent>

          <TabsContent value="develop" className="mt-6 space-y-6">
            <TransitionCard
              title="Transition into Develop"
              text={g.selectToDevelopTransition}
            />
            <DevelopPanel moment={g.developMoment} />
          </TabsContent>

          <TabsContent value="team" className="mt-6 space-y-6">
            <TransitionCard
              title="Transition into Team Dynamics"
              text={g.developToTeamTransition}
            />
            <TeamPanel moment={g.teamDynamicsMoment} />
          </TabsContent>

          <TabsContent value="recap" className="mt-6 space-y-4">
            <SectionCard
              icon={<ClipboardList className="h-5 w-5 text-blurple" />}
              title="Recap Slide Bullets"
              actions={<CopyButton text={recapText} label="Copy recap slide bullets" />}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-blurple">
                    Current state / pain
                  </p>
                  <ul className="space-y-1.5 text-sm text-wonderlic-blue">
                    {g.recap.currentState.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-blurple">
                    Future state / goals
                  </p>
                  <ul className="space-y-1.5 text-sm text-wonderlic-blue">
                    {g.recap.futureState.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionCard>
          </TabsContent>

          <TabsContent value="cautions" className="mt-6">
            <SectionCard
              icon={<AlertTriangle className="h-5 w-5 text-amber-600" />}
              title="Cautions"
            >
              <ul className="space-y-2">
                {g.cautions.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-wonderlic-blue"
                  >
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>
          </TabsContent>

          <TabsContent value="full" className="mt-6">
            <SectionCard
              icon={<Flag className="h-5 w-5 text-blurple" />}
              title="Full Script View"
              actions={<CopyButton text={fullScriptText} label="Copy full script" />}
            >
              <p className="mb-4 text-xs text-muted-foreground">
                The full stitched script for rehearsal or recording. Includes setup,
                each moment, transitions, Ask Wonderlic, and the close.
              </p>
              <FullScriptBlock title="Setup" body={g.coreStory.join("\n\n")} />
              <FullScriptBlock title="Select" body={g.selectMoment.fullScript} />
              <FullScriptBlock
                title="Transition: Select to Develop"
                body={g.selectToDevelopTransition}
              />
              <FullScriptBlock title="Develop" body={g.developMoment.fullScript} />
              <FullScriptBlock
                title="Ask Wonderlic"
                body={g.developMoment.askWonderlicScript}
              />
              <FullScriptBlock
                title="Transition: Develop to Team Dynamics"
                body={g.developToTeamTransition}
              />
              <FullScriptBlock
                title="Team Dynamics"
                body={g.teamDynamicsMoment.fullScript}
              />
              <FullScriptBlock title="Full Close" body={g.fullClose} />
            </SectionCard>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}

/* -------------- Product moment panels -------------- */

function SelectPanel({ moment }: { moment: ProductMoment }) {
  return (
    <div className="space-y-4">
      <AtAGlance
        badge={<StoryBadge variant="select">Select</StoryBadge>}
        purpose={moment.purpose}
        storyTranslation={moment.storyTranslation}
        valueTieBack={moment.valueTieBack}
      />
      <WhatToShow items={moment.whatToShow} />
      <InYourOwnWords items={moment.ownWords} />
      <SignalsCard signals={moment.signalsToInspect} note={moment.signalsNote} />
      <ScriptAccordion
        label="Full Select script"
        text={moment.fullScript}
        copyLabel="Copy Select script"
      />
      <OptionalMoments
        items={[
          {
            label: "Interview Guide reference",
            text: moment.interviewGuideReference,
            copyLabel: "Copy Interview Guide reference",
          },
          {
            label: "New Hire Success Tips reference",
            text: moment.newHireTipsReference,
            copyLabel: "Copy New Hire Tips reference",
          },
        ]}
      />
      <MidDemoQuestions items={moment.midDemoQuestions} copyPrefix="Select question" />
      <ValueTieBack text={moment.valueTieBack} />
      <CautionBox dontSay={moment.caution.dontSay} doSay={moment.caution.doSay} />
    </div>
  );
}

function DevelopPanel({ moment }: { moment: DevelopMoment }) {
  return (
    <div className="space-y-4">
      <AtAGlance
        badge={<StoryBadge variant="develop">Develop</StoryBadge>}
        purpose={moment.purpose}
        storyTranslation={moment.storyTranslation}
        valueTieBack={moment.valueTieBack}
      />
      <WhatToShow items={moment.whatToShow} />
      <InYourOwnWords items={moment.ownWords} />
      <ScriptAccordion
        label="Full Develop script"
        text={moment.fullScript}
        copyLabel="Copy Develop script"
      />
      <OptionalMoments
        items={[
          {
            label: "Ask Wonderlic moment",
            text: moment.askWonderlicScript,
            copyLabel: "Copy Ask Wonderlic script",
            extra: {
              label: "Ask Wonderlic prompt",
              text: moment.askWonderlicPrompt,
              copyLabel: "Copy Ask Wonderlic prompt",
            },
          },
          {
            label: "Action Planner mention",
            text: moment.actionPlannerMention,
            copyLabel: "Copy Action Planner mention",
          },
        ]}
      />
      <MidDemoQuestions items={moment.midDemoQuestions} copyPrefix="Develop question" />
      <ValueTieBack text={moment.valueTieBack} />
      <CautionBox dontSay={moment.caution.dontSay} doSay={moment.caution.doSay} />
    </div>
  );
}

function TeamPanel({ moment }: { moment: TeamMoment }) {
  return (
    <div className="space-y-4">
      <AtAGlance
        badge={<StoryBadge variant="team-dynamics">Team Dynamics</StoryBadge>}
        purpose={moment.purpose}
        storyTranslation={moment.storyTranslation}
        valueTieBack={moment.valueTieBack}
      />
      <WhatToShow items={moment.whatToShow} />
      <InYourOwnWords items={moment.ownWords} />
      <ScriptAccordion
        label="Full Team Dynamics script"
        text={moment.fullScript}
        copyLabel="Copy Team Dynamics script"
      />
      {moment.proxyNote ? (
        <OptionalMoments
          items={[
            {
              label: "Team Dynamics proxy note (say once)",
              text: moment.proxyNote,
              copyLabel: "Copy proxy note",
            },
          ]}
        />
      ) : null}
      <MidDemoQuestions items={moment.midDemoQuestions} copyPrefix="Team question" />
      <ValueTieBack text={moment.valueTieBack} />
      <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-700">
            Caution
          </p>
          <p className="mt-0.5 text-wonderlic-blue">{moment.caution}</p>
        </div>
      </div>
    </div>
  );
}

/* -------------- Repeatable sub-cards -------------- */

function AtAGlance({
  badge,
  purpose,
  storyTranslation,
  valueTieBack,
}: {
  badge: React.ReactNode;
  purpose: string;
  storyTranslation: string;
  valueTieBack: string;
}) {
  return (
    <section className="rounded-2xl border border-blue-lilac bg-soft-purple/40 p-5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-blurple" />
          <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
            At a glance
          </p>
        </div>
        {badge}
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        <MiniField label="What this moment does" value={purpose} />
        <MiniField label="Simon story translation" value={storyTranslation} />
        <MiniField label="Value tie-back" value={valueTieBack} />
      </div>
    </section>
  );
}

function MiniField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-blue-lilac bg-card p-3">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
        {label}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-wonderlic-blue">{value}</p>
    </div>
  );
}

function WhatToShow({ items }: { items: string[] }) {
  return (
    <SectionCard icon={<Eye className="h-5 w-5 text-blurple" />} title="What to show">
      <ul className="space-y-2">
        {items.map((s) => (
          <li key={s} className="flex items-start gap-2 text-sm text-wonderlic-blue">
            <span
              aria-hidden
              className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border border-blue-lilac bg-card text-[10px] text-blurple"
            >
              ☐
            </span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}

function InYourOwnWords({ items }: { items: string[] }) {
  return (
    <SectionCard
      icon={<MessageSquare className="h-5 w-5 text-blurple" />}
      title="In your own words"
    >
      <ul className="space-y-1.5 text-sm text-wonderlic-blue">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>
    </SectionCard>
  );
}

function SignalsCard({ signals, note }: { signals: string[]; note: string }) {
  return (
    <SectionCard
      icon={<Target className="h-5 w-5 text-blurple" />}
      title="Select signals to inspect"
    >
      <p className="mb-2 text-xs italic text-muted-foreground">{note}</p>
      <div className="flex flex-wrap gap-1.5">
        {signals.map((s) => (
          <StoryBadge key={s} variant="select">
            {s}
          </StoryBadge>
        ))}
      </div>
    </SectionCard>
  );
}

function ScriptAccordion({
  label,
  text,
  copyLabel,
}: {
  label: string;
  text: string;
  copyLabel: string;
}) {
  const preview = text.slice(0, 180) + (text.length > 180 ? "…" : "");
  return (
    <section className="rounded-2xl border border-border bg-card">
      <Accordion type="single" collapsible>
        <AccordionItem value="script" className="border-none">
          <AccordionTrigger className="px-5 py-4 hover:no-underline">
            <div className="flex items-start gap-2 text-left">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-blurple" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
                  {label}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{preview}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="mb-3 flex justify-end">
              <CopyButton text={text} label={copyLabel} />
            </div>
            <p className="whitespace-pre-line text-sm leading-relaxed text-wonderlic-blue">
              {text}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

type OptionalItem = {
  label: string;
  text: string;
  copyLabel: string;
  extra?: { label: string; text: string; copyLabel: string };
};

function OptionalMoments({ items }: { items: OptionalItem[] }) {
  if (items.length === 0) return null;
  return (
    <section className="rounded-2xl border border-dashed border-blue-lilac bg-card">
      <Accordion type="single" collapsible>
        <AccordionItem value="optional" className="border-none">
          <AccordionTrigger className="px-5 py-4 hover:no-underline">
            <div className="flex items-center gap-2 text-left">
              <Sparkles className="h-4 w-4 text-blurple" />
              <p className="text-sm font-semibold text-wonderlic-blue">
                Optional moments ({items.length})
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-3 px-5 pb-5">
            {items.map((it) => (
              <div
                key={it.label}
                className="rounded-lg border border-blue-lilac bg-soft-purple/30 p-4"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
                    {it.label}
                  </p>
                  <CopyButton text={it.text} label={it.copyLabel} />
                </div>
                <p className="whitespace-pre-line text-sm leading-relaxed text-wonderlic-blue">
                  {it.text}
                </p>
                {it.extra && (
                  <div className="mt-3 rounded-lg border border-blue-lilac bg-card p-3">
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
                        {it.extra.label}
                      </p>
                      <CopyButton text={it.extra.text} label={it.extra.copyLabel} />
                    </div>
                    <p className="text-sm text-wonderlic-blue">{it.extra.text}</p>
                  </div>
                )}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

function MidDemoQuestions({
  items,
  copyPrefix,
}: {
  items: string[];
  copyPrefix: string;
}) {
  return (
    <SectionCard
      icon={<HelpCircle className="h-5 w-5 text-blurple" />}
      title="Mid-demo questions"
    >
      <ul className="space-y-2">
        {items.map((q, i) => (
          <li
            key={q}
            className="flex items-start justify-between gap-2 rounded-lg border border-blue-lilac bg-card p-3 text-sm text-wonderlic-blue"
          >
            <div className="flex items-start gap-2">
              <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-blurple" />
              <span>{q}</span>
            </div>
            <CopyButton text={q} label={`${copyPrefix} ${i + 1} copied`} size="icon" />
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}

function ValueTieBack({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border-l-4 border-develop bg-develop-ice/60 p-5">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
        Value tie-back
      </p>
      <p className="mt-2 text-sm leading-relaxed text-wonderlic-blue">{text}</p>
    </div>
  );
}

function CautionBox({ dontSay, doSay }: { dontSay: string; doSay: string }) {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm">
      <div className="mb-1 flex items-center gap-2">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-700">
          Caution
        </p>
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <p className="text-wonderlic-blue">
          <span className="font-semibold">Do not say:</span> &ldquo;{dontSay}&rdquo;
        </p>
        <p className="text-wonderlic-blue">
          <span className="font-semibold">Say:</span> &ldquo;{doSay}&rdquo;
        </p>
      </div>
    </div>
  );
}

function TransitionCard({ title, text }: { title: string; text: string }) {
  return (
    <section className="rounded-2xl border border-blue-lilac bg-gradient-to-r from-soft-purple/60 to-purple-chalk/60 p-5">
      <div className="mb-2 flex items-center gap-2">
        <ArrowRight className="h-4 w-4 text-blurple" />
        <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
          {title}
        </p>
      </div>
      <p className="whitespace-pre-line text-sm leading-relaxed text-wonderlic-blue">
        {text}
      </p>
    </section>
  );
}

function FullScriptBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="mb-4 rounded-lg border border-border bg-card p-4">
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
          {title}
        </p>
        <CopyButton text={body} label={`Copy ${title}`} size="icon" />
      </div>
      <p className="whitespace-pre-line text-sm leading-relaxed text-wonderlic-blue">
        {body}
      </p>
    </div>
  );
}

/* -------------- shared helpers -------------- */

function MetaCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "caution";
}) {
  const border =
    tone === "caution"
      ? "border-select/50 bg-select-ice/60"
      : "border-blue-lilac bg-soft-purple/40";
  return (
    <div className={`rounded-lg border p-3 ${border}`}>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
        {label}
      </p>
      <p className="mt-1 text-sm text-wonderlic-blue">{value}</p>
    </div>
  );
}

function ListCard({
  label,
  items,
  tone,
}: {
  label: string;
  items: string[];
  tone: "neutral" | "caution";
}) {
  const border =
    tone === "caution"
      ? "border-amber-200 bg-amber-50"
      : "border-blue-lilac bg-soft-purple/30";
  return (
    <div className={`rounded-lg border p-4 ${border}`}>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
        {label}
      </p>
      <ul className="mt-2 space-y-1 text-sm text-wonderlic-blue">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}

function RunField({ label, value, full }: { label: string; value: string; full?: boolean }) {
  return (
    <div
      className={`rounded-xl border border-blue-lilac bg-card p-3 ${full ? "md:col-span-2" : ""}`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
        {label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-wonderlic-blue">{value}</p>
    </div>
  );
}

function SectionCard({
  icon,
  title,
  actions,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-display text-lg font-normal text-wonderlic-blue">
            {title}
          </h3>
        </div>
        {actions}
      </div>
      {children}
    </section>
  );
}
