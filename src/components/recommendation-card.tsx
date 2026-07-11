import { archetypeById, TALK_TRACKS, type Archetype } from "@/data";
import { StoryBadge } from "@/components/story-badge";
import { CopyButton } from "@/components/copy-button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function RecommendationCard({
  primaryId,
  backupId,
  rationale,
  painFraming,
  painOptional,
}: {
  primaryId: string;
  backupId?: string;
  rationale: string;
  /** Customer pain framing string. If omitted, uses the archetype's useWhenCustomerSays. */
  painFraming?: string;
  /** When true, labels the pain framing as "Optional pain framing" (attribute-first flow). */
  painOptional?: boolean;
}) {
  const primary = archetypeById(primaryId);
  const backup = backupId ? archetypeById(backupId) : undefined;
  if (!primary) return null;
  const tracks = TALK_TRACKS[primary.id];
  const framing = painFraming || primary.useWhenCustomerSays;
  const fullPlan = buildFullPlan(primary, { painFraming: framing, painOptional });

  return (
    <Card className="border-border/60 shadow-sm">
      <CardContent className="space-y-6 p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Recommended archetype
            </div>
            <h2 className="mt-1 font-display text-3xl font-light text-wonderlic-blue">
              {primary.memoryHook}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {primary.roleFraming} · Demo profile: <span className="font-semibold text-wonderlic-blue">{primary.demoProfileName}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <CopyButton text={fullPlan} label="Copy full demo plan" />
            <Link
              to="/archetypes/$id"
              params={{ id: primary.id }}
              className="inline-flex h-7 items-center gap-1 rounded-full border border-border px-3 text-xs font-semibold text-muted-foreground transition-colors hover:text-blurple"
            >
              Open archetype
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className={`rounded-xl border p-4 ${painOptional ? "border-dashed border-border bg-muted/40" : "border-blue-lilac bg-soft-purple/60"}`}>
          <p className="text-xs font-semibold uppercase tracking-wide text-blurple">
            {painOptional ? "Optional pain framing" : "Customer pain framing"}
          </p>
          <p className="mt-1.5 text-sm text-wonderlic-blue">&ldquo;{framing}&rdquo;</p>
          <p className="mt-2 text-xs text-muted-foreground">
            <span className="font-semibold text-wonderlic-blue">Why this match works:</span> {rationale}
          </p>
          {backup && (
            <p className="mt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-wonderlic-blue">Backup:</span>{" "}
              {backup.memoryHook} — use if the pain leans more toward {backup.developAnchor.toLowerCase()}.
            </p>
          )}
        </div>

        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-blurple">Value tie-back</p>
          <p className="mt-1.5 text-sm text-wonderlic-blue">
            {primary.developHandoff}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <StorySection
            variant="select"
            title="Select story"
            body={primary.selectStory}
            signals={primary.selectSignals}
            copyLabel="Select story"
          />
          <StorySection
            variant="develop"
            title="Develop story"
            body={primary.developAnchorLogic}
            signals={[primary.developAnchor, ...primary.alternateAttributes]}
            copyLabel="Develop story"
          />
        </div>

        <TeamDynamicsBlock archetype={primary} />

        <div className="grid gap-4 md:grid-cols-2">
          <TalkBlock title="30-second talk track" body={tracks.short} />
          <TalkBlock title="3-minute talk track" body={tracks.long} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <SubBlock title="Ask Wonderlic prompt" body={tracks.askWonderlic} accent="blurple" copyable />
          <SubBlock title="Interview probe" body={primary.interviewProbe} accent="muted" copyable />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <ListBlock title="Screens to show" items={tracks.screensToShow} tone="positive" />
          <ListBlock title="Screens to skip" items={tracks.screensToSkip} tone="muted" />
        </div>

        <ListBlock title="Cautions — what not to say" items={tracks.cautions} tone="caution" />
      </CardContent>
    </Card>
  );
}

function StorySection({
  variant,
  title,
  body,
  signals,
  copyLabel,
}: {
  variant: "select" | "develop";
  title: string;
  body: string;
  signals: string[];
  copyLabel: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <StoryBadge variant={variant}>{variant}</StoryBadge>
          <h3 className="text-sm font-semibold text-wonderlic-blue">{title}</h3>
        </div>
        <CopyButton text={`${title}\n\n${body}\n\nSignals: ${signals.join(", ")}`} label={copyLabel} size="icon" />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
      {signals.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {signals.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-muted px-2 py-0.5 text-[11px] font-semibold text-wonderlic-blue"
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function TeamDynamicsBlock({ archetype }: { archetype: Archetype }) {
  const path = `Team Dynamics → ${archetype.teamDynamicsSection} → ${archetype.teamDynamicsPage}`;
  return (
    <div className="rounded-xl border border-blue-lilac bg-soft-purple p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <StoryBadge variant="team-dynamics">Team Dynamics</StoryBadge>
          <h3 className="text-sm font-semibold text-wonderlic-blue">Path to open</h3>
        </div>
        <CopyButton text={path} label="Team Dynamics path" size="icon" />
      </div>
      <p className="mt-2 font-display text-lg font-light text-wonderlic-blue">{path}</p>
      {archetype.tdManagerInsight && (
        <p className="mt-2 text-sm text-muted-foreground">
          <span className="font-semibold text-wonderlic-blue">Manager insight:</span> {archetype.tdManagerInsight}
        </p>
      )}
    </div>
  );
}

function TalkBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-wonderlic-blue">{title}</h3>
        <CopyButton text={body} label={title} size="icon" />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function SubBlock({
  title,
  body,
  accent,
  copyable,
}: {
  title: string;
  body: string;
  accent: "blurple" | "muted";
  copyable?: boolean;
}) {
  if (!body) return null;
  return (
    <div
      className={`rounded-xl border p-4 ${
        accent === "blurple"
          ? "border-blue-lilac bg-purple-chalk"
          : "border-border bg-muted"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-wonderlic-blue">{title}</h3>
        {copyable && <CopyButton text={body} label={title} size="icon" />}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-wonderlic-blue">{body}</p>
    </div>
  );
}

function ListBlock({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "positive" | "muted" | "caution";
}) {
  const border =
    tone === "positive"
      ? "border-blue-lilac bg-soft-purple"
      : tone === "caution"
        ? "border-select/40 bg-select-ice"
        : "border-border bg-muted";
  return (
    <div className={`rounded-xl border p-4 ${border}`}>
      <h3 className="text-sm font-semibold text-wonderlic-blue">{title}</h3>
      <ul className="mt-2 space-y-1.5 text-sm text-wonderlic-blue">
        {items.map((i, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-current" />
            <span className="leading-relaxed">{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function buildFullPlan(
  a: Archetype,
  opts?: { painFraming?: string; painOptional?: boolean },
) {
  const t = TALK_TRACKS[a.id];
  const framing = opts?.painFraming || a.useWhenCustomerSays;
  const painLabel = opts?.painOptional ? "OPTIONAL PAIN FRAMING" : "CUSTOMER PAIN FRAMING";
  return [
    `WONDERLIC DEMO PLAN — ${a.memoryHook}`,
    `Recommended profile: ${a.demoProfileName}`,
    "",
    `${painLabel}: ${framing}`,
    "",
    `WHY THIS MATCH WORKS: ${a.developAnchorLogic}`,
    "",
    `SELECT STORY: ${a.selectStory}`,
    `Select signals: ${a.selectSignals.join(", ")}`,
    "",
    `DEVELOP STORY (${a.developAnchor}): ${a.developAnchorLogic}`,
    "",
    `TEAM DYNAMICS → ${a.teamDynamicsSection} → ${a.teamDynamicsPage}`,
    a.tdManagerInsight,
    "",
    `ASK WONDERLIC: ${t.askWonderlic}`,
    "",
    `SCREENS TO SHOW:\n- ${t.screensToShow.join("\n- ")}`,
    "",
    `SCREENS TO SKIP:\n- ${t.screensToSkip.join("\n- ")}`,
    "",
    `60-SECOND TALK TRACK:\n${t.short}`,
    "",
    `VALUE TIE-BACK: ${a.developHandoff}`,
    "",
    `CAUTIONS:\n- ${t.cautions.join("\n- ")}`,
  ].join("\n");
}

