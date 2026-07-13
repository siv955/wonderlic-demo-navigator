import { Link } from "@tanstack/react-router";
import { DEREK_GUIDANCE } from "@/data/derekGuidance";
import { CopyButton } from "@/components/copy-button";
import { StoryBadge } from "@/components/story-badge";
import {
  ArrowLeft,
  PlayCircle,
  BookOpen,
  Search,
  ArrowRight,
  Sparkles,
  Users,
  Flag,
  ClipboardList,
  AlertTriangle,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

export function DerekArchetypeDetail() {
  const g = DEREK_GUIDANCE;

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
          <h1 className="font-display text-5xl font-light leading-tight text-wonderlic-blue">
            {g.header.name}
          </h1>
          <p className="font-display text-2xl font-light text-blurple">
            Memory hook: {g.header.memoryHook}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <StoryBadge variant="core">Core Archetype</StoryBadge>
          <StoryBadge variant="caution">Primary gap: {g.header.primaryGap}</StoryBadge>
          <StoryBadge variant="select">Select</StoryBadge>
          <StoryBadge variant="develop">Develop</StoryBadge>
          <StoryBadge variant="team-dynamics">Team Dynamics</StoryBadge>
        </div>
        <p className="max-w-3xl text-base leading-relaxed text-wonderlic-blue">
          {g.header.oneSentence}
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <MetaCard label="Story" value={g.header.story} />
          <MetaCard label="Develop anchor" value={g.header.developAnchor} />
          <MetaCard label="Team Dynamics path" value={g.header.teamDynamicsPath} />
          <MetaCard label="Primary gap" value={g.header.primaryGap} tone="caution" />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <ListCard
            label="Use Derek when the customer says"
            items={g.header.useWhen}
            tone="neutral"
          />
          <ListCard
            label="Do not use Derek when"
            items={g.header.doNotUseWhen}
            tone="caution"
          />
        </div>
      </header>

      {/* RUN THIS DEMO */}
      <section className="rounded-2xl border-2 border-blurple/40 bg-purple-chalk/60 p-6 shadow-sm">
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

      {/* CORE STORY */}
      <SectionCard icon={<BookOpen className="h-5 w-5 text-blurple" />} title="Core Story">
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
      </SectionCard>

      {/* SELECT DEMO MOMENT */}
      <SectionCard
        icon={<Search className="h-5 w-5 text-blurple" />}
        title="Select Demo Moment"
        badges={<StoryBadge variant="select">Select</StoryBadge>}
      >
        <SubSection label="What this part of the demo is doing">
          <Paragraph>{g.selectMoment.purpose}</Paragraph>
        </SubSection>

        <SubSection label="What to show">
          <Bullets items={g.selectMoment.whatToShow} />
        </SubSection>

        <SubSection label="Product basics to say">
          <Paragraph italic>{g.selectMoment.productBasics}</Paragraph>
        </SubSection>

        <SubSection label="Derek story translation">
          <Paragraph>{g.selectMoment.storyTranslation}</Paragraph>
        </SubSection>

        <SubSection label="In your own words, make these points">
          <Bullets items={g.selectMoment.ownWords} />
        </SubSection>

        <SubSection label="Select signals to inspect">
          <p className="mb-2 text-xs italic text-muted-foreground">
            {g.selectMoment.signalsNote}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {g.selectMoment.signalsToInspect.map((s) => (
              <StoryBadge key={s} variant="select">
                {s}
              </StoryBadge>
            ))}
          </div>
        </SubSection>

        <ScriptBlock
          label="Full example script"
          text={g.selectMoment.fullScript}
          copyLabel="Copy Select script"
          badge="Copyable Script"
        />

        <ScriptBlock
          label="How to reference the Interview Guide"
          text={g.selectMoment.interviewGuideReference}
          copyLabel="Copy Interview Guide reference"
          badge="Optional Moment"
        />

        <ScriptBlock
          label="How to reference New Hire Success Tips"
          text={g.selectMoment.newHireTipsReference}
          copyLabel="Copy New Hire Tips reference"
          badge="Optional Moment"
        />

        <MidDemoQuestions
          items={g.selectMoment.midDemoQuestions}
          copyPrefix="Select mid-demo question"
        />

        <ValueTieBack text={g.selectMoment.valueTieBack} />

        <CautionCard
          dontSay={g.selectMoment.caution.dontSay}
          doSay={g.selectMoment.caution.doSay}
        />
      </SectionCard>

      {/* TRANSITION: SELECT TO DEVELOP */}
      <TransitionCard
        title="Transition: Select to Develop"
        text={g.selectToDevelopTransition}
      />

      {/* DEVELOP DEMO MOMENT */}
      <SectionCard
        icon={<Sparkles className="h-5 w-5 text-blurple" />}
        title="Develop Demo Moment"
        badges={<StoryBadge variant="develop">Develop</StoryBadge>}
      >
        <SubSection label="What this part of the demo is doing">
          <Paragraph>{g.developMoment.purpose}</Paragraph>
        </SubSection>

        <SubSection label="What to show">
          <Bullets items={g.developMoment.whatToShow} />
        </SubSection>

        <SubSection label="Product basics to say">
          <Paragraph italic>{g.developMoment.productBasics}</Paragraph>
        </SubSection>

        <SubSection label="Derek story translation">
          <Paragraph>{g.developMoment.storyTranslation}</Paragraph>
        </SubSection>

        <SubSection label="In your own words, make these points">
          <Bullets items={g.developMoment.ownWords} />
        </SubSection>

        <ScriptBlock
          label="Full example script"
          text={g.developMoment.fullScript}
          copyLabel="Copy Develop script"
          badge="Copyable Script"
        />

        <div className="rounded-2xl border border-develop/40 bg-develop-ice/60 p-5">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
              Ask Wonderlic moment
            </p>
            <CopyButton
              text={g.developMoment.askWonderlicPrompt}
              label="Copy Ask Wonderlic prompt"
            />
          </div>
          <p className="whitespace-pre-line text-sm leading-relaxed text-wonderlic-blue">
            {g.developMoment.askWonderlicScript}
          </p>
          <div className="mt-3 rounded-lg border border-blue-lilac bg-card p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
              Ask Wonderlic prompt
            </p>
            <p className="mt-1 text-sm text-wonderlic-blue">
              {g.developMoment.askWonderlicPrompt}
            </p>
          </div>
        </div>

        <ScriptBlock
          label="Optional Action Planner mention"
          text={g.developMoment.actionPlannerMention}
          copyLabel="Copy Action Planner mention"
          badge="Optional Moment"
        />

        <MidDemoQuestions
          items={g.developMoment.midDemoQuestions}
          copyPrefix="Develop mid-demo question"
        />

        <ValueTieBack text={g.developMoment.valueTieBack} />

        <CautionCard
          dontSay={g.developMoment.caution.dontSay}
          doSay={g.developMoment.caution.doSay}
        />
      </SectionCard>

      {/* TRANSITION: DEVELOP TO TEAM DYNAMICS */}
      <TransitionCard
        title="Transition: Develop to Team Dynamics"
        text={g.developToTeamTransition}
      />

      {/* TEAM DYNAMICS DEMO MOMENT */}
      <SectionCard
        icon={<Users className="h-5 w-5 text-blurple" />}
        title="Team Dynamics Demo Moment"
        badges={<StoryBadge variant="team-dynamics">Team Dynamics</StoryBadge>}
      >
        <SubSection label="What this part of the demo is doing">
          <Paragraph>{g.teamDynamicsMoment.purpose}</Paragraph>
        </SubSection>

        <SubSection label="What to show">
          <Bullets items={g.teamDynamicsMoment.whatToShow} />
        </SubSection>

        <SubSection label="Product basics to say">
          <Paragraph italic>{g.teamDynamicsMoment.productBasics}</Paragraph>
        </SubSection>

        <SubSection label="Derek story translation">
          <Paragraph>{g.teamDynamicsMoment.storyTranslation}</Paragraph>
        </SubSection>

        <SubSection label="In your own words, make these points">
          <Bullets items={g.teamDynamicsMoment.ownWords} />
        </SubSection>

        <ScriptBlock
          label="Full example script"
          text={g.teamDynamicsMoment.fullScript}
          copyLabel="Copy Team Dynamics script"
          badge="Copyable Script"
        />

        <MidDemoQuestions
          items={g.teamDynamicsMoment.midDemoQuestions}
          copyPrefix="Team Dynamics mid-demo question"
        />

        <ValueTieBack text={g.teamDynamicsMoment.valueTieBack} />

        <div className="rounded-lg border border-blue-lilac bg-soft-purple/60 p-3 text-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
            Proxy note (say once)
          </p>
          <p className="mt-1 text-wonderlic-blue">{g.teamDynamicsMoment.proxyNote}</p>
        </div>

        <div className="flex items-start gap-2 rounded-lg border border-select/50 bg-select-ice/60 p-3 text-sm">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-wonderlic-blue" />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-wonderlic-blue">
              Use With Caution
            </p>
            <p className="mt-0.5 text-wonderlic-blue">{g.teamDynamicsMoment.caution}</p>
          </div>
        </div>
      </SectionCard>

      {/* FULL CLOSE */}
      <SectionCard icon={<Flag className="h-5 w-5 text-blurple" />} title="Full Close">
        <p className="whitespace-pre-line text-sm leading-relaxed text-wonderlic-blue">
          {g.fullClose}
        </p>
        <div className="mt-3">
          <CopyButton text={g.fullClose} label="Copy Full Close" />
        </div>
      </SectionCard>

      {/* RECAP */}
      <SectionCard
        icon={<ClipboardList className="h-5 w-5 text-blurple" />}
        title="Recap Slide Bullets"
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
        <div className="mt-4">
          <CopyButton text={recapText} label="Copy recap slide bullets" />
        </div>
      </SectionCard>

      {/* CAUTIONS */}
      <SectionCard
        icon={<AlertTriangle className="h-5 w-5 text-blurple" />}
        title="Cautions"
        badges={<StoryBadge variant="caution">Use With Caution</StoryBadge>}
      >
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
      </SectionCard>
    </div>
  );
}

/* -------------- small presentational helpers -------------- */

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
      ? "border-select/50 bg-select-ice/50"
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
  badges,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  badges?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="font-display text-2xl font-normal text-wonderlic-blue">
            {title}
          </h2>
        </div>
        {badges}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function SubSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-background/60 p-4">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-blurple">
        {label}
      </p>
      {children}
    </div>
  );
}

function Paragraph({
  children,
  italic,
}: {
  children: React.ReactNode;
  italic?: boolean;
}) {
  return (
    <p
      className={`text-sm leading-relaxed text-wonderlic-blue ${italic ? "italic" : ""}`}
    >
      {children}
    </p>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 text-sm text-wonderlic-blue">
      {items.map((i) => (
        <li key={i}>• {i}</li>
      ))}
    </ul>
  );
}

function ScriptBlock({
  label,
  text,
  copyLabel,
  badge,
}: {
  label: string;
  text: string;
  copyLabel: string;
  badge?: string;
}) {
  return (
    <div className="rounded-xl border border-blue-lilac bg-soft-purple/40 p-4">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-4 w-4 text-blurple" />
          <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
            {label}
          </p>
          {badge && <StoryBadge variant="neutral">{badge}</StoryBadge>}
        </div>
        <CopyButton text={text} label={copyLabel} />
      </div>
      <p className="whitespace-pre-line text-sm leading-relaxed text-wonderlic-blue">
        {text}
      </p>
    </div>
  );
}

function TransitionCard({ title, text }: { title: string; text: string }) {
  return (
    <section className="rounded-2xl border border-blue-lilac bg-gradient-to-r from-soft-purple/60 to-purple-chalk/60 p-6">
      <div className="mb-3 flex items-center gap-2">
        <ArrowRight className="h-5 w-5 text-blurple" />
        <h2 className="font-display text-xl font-normal text-wonderlic-blue">{title}</h2>
      </div>
      <p className="whitespace-pre-line text-sm leading-relaxed text-wonderlic-blue">
        {text}
      </p>
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
    <SubSection label="Mid-demo questions">
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
    </SubSection>
  );
}

function ValueTieBack({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-develop/40 bg-develop-ice/50 p-5">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
        Value tie-back
      </p>
      <p className="mt-2 text-sm leading-relaxed text-wonderlic-blue">{text}</p>
    </div>
  );
}

function CautionCard({ dontSay, doSay }: { dontSay: string; doSay: string }) {
  return (
    <div className="grid gap-2 md:grid-cols-2">
      <div className="rounded-lg border border-select/50 bg-select-ice/60 p-3 text-sm">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-wonderlic-blue">
          Do not say
        </p>
        <p className="mt-1 text-wonderlic-blue">"{dontSay}"</p>
      </div>
      <div className="rounded-lg border border-develop/40 bg-develop-ice/60 p-3 text-sm">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
          Say
        </p>
        <p className="mt-1 text-wonderlic-blue">"{doSay}"</p>
      </div>
    </div>
  );
}
