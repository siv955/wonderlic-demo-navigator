import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { attributes, profiles, archetypeById, TALK_TRACKS } from "@/data";
import {
  matchProfiles,
  type AttrCondition,
  type Direction,
  type AttrMatchResult,
} from "@/lib/matching";
import { StoryBadge } from "@/components/story-badge";
import { FlexibleProfileBadge } from "@/components/flexible-profile-badge";
import { CopyButton } from "@/components/copy-button";
import { RecommendationCard } from "@/components/recommendation-card";
import { Plus, Trash2, ArrowRight, AlertTriangle, ChevronDown } from "lucide-react";

export interface DemoContext {
  problemRole: string;
  industry: string;
  businessPain: string;
  demoFocus: string;
}


export const Route = createFileRoute("/attributes")({
  head: () => ({
    meta: [
      { title: "Attribute Finder, Wonderlic Demo Story Finder" },
      {
        name: "description",
        content:
          "Pick up to four attribute conditions to surface demo profiles that fit, with story angle, talk track, and full demo plan.",
      },
      { property: "og:title", content: "Attribute Finder, Wonderlic Demo Story Finder" },
      {
        property: "og:description",
        content: "Attribute-first demo prep for flexible stories.",
      },
    ],
  }),
  component: AttributeFinder,
});

function AttributeFinder() {
  const [conditions, setConditions] = useState<AttrCondition[]>([
    { attribute: "Teamwork", direction: "high" },
    { attribute: "", direction: "high" },
  ]);
  const [high, setHigh] = useState(70);
  const [low, setLow] = useState(30);
  const [context, setContext] = useState<DemoContext>({
    problemRole: "",
    industry: "",
    businessPain: "",
    demoFocus: "any",
  });
  const updateContext = (patch: Partial<DemoContext>) =>
    setContext((c) => ({ ...c, ...patch }));

  const results = useMemo(
    () => matchProfiles(conditions, profiles, { high, low }),
    [conditions, high, low],
  );

  const addRow = () => {
    if (conditions.length >= 4) return;
    setConditions((c) => [...c, { attribute: "", direction: "high" }]);
  };
  const removeRow = (i: number) =>
    setConditions((c) => (c.length > 1 ? c.filter((_, idx) => idx !== i) : c));
  const update = (i: number, patch: Partial<AttrCondition>) =>
    setConditions((c) => c.map((row, idx) => (idx === i ? { ...row, ...patch } : row)));

  const noExact = results.exact.length === 0;
  const bestClose = results.close[0];

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-blurple">
          Attribute Finder
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-light leading-tight sm:text-5xl">
          Which profile hits this pattern?
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Pick up to four attributes with a High or Low direction. The finder returns exact
          matches, then the closest options ranked by fit, each with a suggested story angle and a
          copyable demo plan.
        </p>
      </header>

      <Card className="border-border/60 shadow-sm">
        <CardContent className="space-y-5 p-6">
          <div className="space-y-3">
            {conditions.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2"
              >
                <Select value={row.attribute} onValueChange={(v) => update(i, { attribute: v })}>
                  <SelectTrigger className="h-11 bg-background">
                    <SelectValue placeholder="Select an attribute…" />
                  </SelectTrigger>
                  <SelectContent className="max-h-72">
                    {attributes.filter((a) => a.type !== "Select").map((a) => (
                      <SelectItem key={a.name} value={a.name}>
                        <span>{a.name}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <ToggleGroup
                  type="single"
                  value={row.direction}
                  onValueChange={(v) => v && update(i, { direction: v as Direction })}
                  className="rounded-full border border-border bg-background p-0.5"
                >
                  <ToggleGroupItem
                    value="high"
                    className="h-9 rounded-full px-3 text-xs font-semibold data-[state=on]:bg-blurple data-[state=on]:text-white"
                  >
                    High
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="low"
                    className="h-9 rounded-full px-3 text-xs font-semibold data-[state=on]:bg-blurple data-[state=on]:text-white"
                  >
                    Low
                  </ToggleGroupItem>
                </ToggleGroup>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeRow(i)}
                  disabled={conditions.length === 1}
                  className="h-9 w-9 text-muted-foreground hover:text-destructive"
                  aria-label="Remove row"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={addRow}
              disabled={conditions.length >= 4}
              className="gap-1.5 rounded-full"
            >
              <Plus className="h-3.5 w-3.5" /> Add attribute
            </Button>
          </div>

          <div className="grid gap-4 rounded-xl border border-border bg-soft-purple/40 p-4 sm:grid-cols-2">
            <ThresholdSlider label="High threshold" hint="Score ≥" value={high} onChange={setHigh} />
            <ThresholdSlider label="Low threshold" hint="Score ≤" value={low} onChange={setLow} />
          </div>

          <ContextInputs context={context} onChange={updateContext} />

          <p className="text-xs text-muted-foreground">
            Attribute Finder is for demo prep flexibility. For canonical stories, use the{" "}
            <Link to="/archetypes" className="font-semibold text-blurple hover:underline">
              Archetype Library
            </Link>
            . Missing scores show as N/A and are excluded from exact-match eligibility.
          </p>
        </CardContent>
      </Card>

      <ResultsBlock
        title="Exact Matches"
        results={results.exact}
        emptyMsg="No exact match found. See closest matches below."
        exact
        conditions={conditions}
        context={context}
      />

      {noExact && bestClose && (
        <div className="rounded-xl border border-select/40 bg-select-ice p-4 text-sm text-wonderlic-blue">
          <p>
            <span className="font-semibold">No exact match.</span>{" "}
            {bestClose.profile.name} is closest ({bestClose.matched} of {bestClose.total} conditions
            satisfied). If the story you actually want is stronger on the unsatisfied attribute
            below, consider a different profile, try the{" "}
            <Link to="/archetypes" className="font-semibold text-blurple hover:underline">
              Archetype Library
            </Link>{" "}
            or a related{" "}
            <Link to="/attribute-stories" className="font-semibold text-blurple hover:underline">
              Attribute Story
            </Link>
            .
          </p>
        </div>
      )}

      <ResultsBlock
        title="Closest Matches"
        results={results.close}
        emptyMsg="Add or adjust conditions to see options."
        conditions={conditions}
        context={context}
      />
    </div>
  );
}

function ContextInputs({
  context,
  onChange,
}: {
  context: DemoContext;
  onChange: (patch: Partial<DemoContext>) => void;
}) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-muted/30 p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Optional context
        </p>
        <p className="text-[11px] text-muted-foreground">Shapes the story language, all fields optional</p>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Input
          value={context.problemRole}
          onChange={(e) => onChange({ problemRole: e.target.value })}
          placeholder="Problem role, e.g., Production supervisor"
          className="h-10 bg-background"
        />
        <Input
          value={context.industry}
          onChange={(e) => onChange({ industry: e.target.value })}
          placeholder="Industry, e.g., Manufacturing"
          className="h-10 bg-background"
        />
        <Textarea
          value={context.businessPain}
          onChange={(e) => onChange({ businessPain: e.target.value })}
          placeholder="Business pain heard in discovery (optional)"
          className="min-h-[40px] bg-background"
          rows={2}
        />
        <Select value={context.demoFocus} onValueChange={(v) => onChange({ demoFocus: v })}>
          <SelectTrigger className="h-10 bg-background">
            <SelectValue placeholder="Demo focus" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Demo focus, any</SelectItem>
            <SelectItem value="select">Select</SelectItem>
            <SelectItem value="develop">Develop</SelectItem>
            <SelectItem value="team-dynamics">Team Dynamics</SelectItem>
            <SelectItem value="full">Full platform</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function ThresholdSlider({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold text-blurple">
          {hint} {value}
        </p>
      </div>
      <Slider
        min={1}
        max={99}
        step={1}
        value={[value]}
        onValueChange={(v) => onChange(v[0])}
        className="mt-3"
      />
    </div>
  );
}

function ResultsBlock({
  title,
  results,
  emptyMsg,
  exact,
  conditions,
  context,
}: {
  title: string;
  results: AttrMatchResult[];
  emptyMsg: string;
  exact?: boolean;
  conditions: AttrCondition[];
  context: DemoContext;
}) {
  return (
    <section>
      <div className="flex items-center gap-3">
        <h2 className="font-display text-2xl font-light text-wonderlic-blue">{title}</h2>
        <span className="text-xs font-semibold text-muted-foreground">{results.length}</span>
      </div>
      {results.length === 0 ? (
        <p className="mt-3 rounded-xl border border-dashed border-border bg-card/50 p-6 text-center text-sm text-muted-foreground">
          {emptyMsg}
        </p>
      ) : (
        <div className="mt-3 grid gap-3">
          {results.map((r) => (
            <ProfileMatchCard
              key={r.profile.id}
              result={r}
              exact={exact}
              conditions={conditions}
              context={context}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function ProfileMatchCard({
  result,
  exact,
  conditions,
  context,
}: {
  result: AttrMatchResult;
  exact?: boolean;
  conditions: AttrCondition[];
  context: DemoContext;
}) {
  const [showPlan, setShowPlan] = useState(false);
  const { profile, matched, total, selectedScores, weak, hasMissing } = result;
  const isCore = profile.coreOrExtra === "Core";
  const arch = isCore && profile.associatedArchetypeId ? archetypeById(profile.associatedArchetypeId) : null;

  const storyAngle = arch
    ? buildCoreStoryAngle(profile, selectedScores, arch)
    : buildFlexibleStoryAngle(profile, selectedScores, context);
  const talkStarter = arch
    ? buildCoreTalkStarter(profile, arch)
    : buildFlexibleTalkStarter(profile, selectedScores, context);
  const painFraming = buildOptionalPainFraming(conditions, context);
  const unsatisfied = selectedScores.filter((s) => !s.satisfied && !s.missing);
  const roleFramings = !arch ? buildRoleFramings(selectedScores, context) : [];

  return (
    <Card className="border-border/60 shadow-sm transition-shadow hover:shadow-md">
      <CardContent className="space-y-4 p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate font-display text-lg font-normal text-wonderlic-blue">
              {profile.name}
            </h3>
            {isCore ? (
              <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                {profile.roleFlavor || (arch ? arch.roleFraming : ", ")}
              </p>
            ) : (
              <p className="mt-0.5 text-xs text-muted-foreground">
                Best available profile match for this attribute pattern.
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <StoryBadge variant={isCore ? "core" : "extra"}>{profile.coreOrExtra}</StoryBadge>
            {!isCore && <FlexibleProfileBadge />}
            {exact ? (
              <StoryBadge variant="exact">Exact match</StoryBadge>
            ) : (
              <StoryBadge variant="near">
                {matched} of {total}
              </StoryBadge>
            )}
            {weak && !exact && <StoryBadge variant="caution">Use with caution</StoryBadge>}
          </div>
        </div>

        {hasMissing && (
          <div className="flex items-start gap-2 rounded-lg border border-select/40 bg-select-ice px-3 py-2 text-xs text-wonderlic-blue">
            <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-select" />
            <span>
              This profile is missing score data for one or more selected attributes. It is
              excluded from exact-match eligibility.
            </span>
          </div>
        )}

        <div className="rounded-lg border border-border bg-muted/50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            Attribute pattern matched
          </p>
          <ul className="mt-1.5 space-y-1">
            {selectedScores.map((s) => (
              <li key={s.attribute} className="flex items-center justify-between text-xs">
                <span className="text-wonderlic-blue">
                  {s.attribute}{" "}
                  <span className="text-muted-foreground">({s.direction})</span>
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 font-semibold ${
                    s.missing
                      ? "bg-select-ice text-select"
                      : s.satisfied
                        ? "bg-soft-purple text-blurple"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s.missing ? "N/A" : s.score}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-blue-lilac bg-soft-purple/60 p-4">
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-blurple">
              {arch ? "Suggested story angle" : "Generic story angle"}
            </p>
            <CopyButton text={storyAngle} label="Story angle" size="icon" />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-wonderlic-blue">{storyAngle}</p>
          {!arch && (
            <p className="mt-2 text-[11px] italic text-muted-foreground">
              Why this profile works: the selected scores line up with this profile&rsquo;s{" "}
              {profile.bestHighAttributes.length > 0
                ? `high ${profile.bestHighAttributes.slice(0, 2).join(" / ")}`
                : "pattern"}
              {profile.bestLowAttributes.length > 0
                ? ` and low ${profile.bestLowAttributes.slice(0, 2).join(" / ")}`
                : ""}
              .
            </p>
          )}
        </div>

        {!arch && roleFramings.length > 0 && (
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Optional role-specific framing
            </p>
            <ul className="mt-2 space-y-2 text-xs text-wonderlic-blue">
              {roleFramings.map((f, i) => (
                <li key={i}>
                  <span className="font-semibold">{f.role}:</span> {f.body}
                </li>
              ))}
            </ul>
          </div>
        )}

        {arch && (
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Use when customer says
              </p>
              <p className="mt-1 text-xs text-wonderlic-blue">&ldquo;{arch.useWhenCustomerSays}&rdquo;</p>
            </div>
            <div className="rounded-lg border border-blue-lilac bg-purple-chalk p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">
                Team Dynamics path
              </p>
              <p className="mt-1 text-xs text-wonderlic-blue">
                TD → {arch.teamDynamicsSection} → {arch.teamDynamicsPage}
              </p>
            </div>
          </div>
        )}

        {!exact && unsatisfied.length > 0 && (
          <div className="rounded-lg border border-dashed border-border bg-card/50 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Where this profile is weak
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Only moderately {unsatisfied[0].direction} on{" "}
              <span className="font-semibold text-wonderlic-blue">{unsatisfied[0].attribute}</span>
              {typeof unsatisfied[0].score === "number" ? ` (${unsatisfied[0].score})` : ""}. If the
              real story is that attribute, pick a profile whose score is more extreme in that
              direction.
            </p>
          </div>
        )}

        <div className="rounded-lg border border-select/30 bg-select-ice p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-select">
            Caution, what not to overclaim
          </p>
          <p className="mt-1 text-xs text-wonderlic-blue">
            {arch
              ? arch.tdBuildNotes
              : "This is a flexible profile, not a fixed persona. Do not lock them into a specific job title or paint attribute gaps as disqualifying, frame everything as coachable behavior shaped by role and context."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <CopyButton text={talkStarter} label="Copy talk track starter" />
          {arch ? (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPlan((s) => !s)}
                className="gap-1.5 rounded-full"
              >
                {showPlan ? "Hide" : "Build"} demo plan
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${showPlan ? "rotate-180" : ""}`}
                />
              </Button>
              <Link
                to="/archetypes/$id"
                params={{ id: arch.id }}
                className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-blurple"
              >
                → {arch.memoryHook}
                <ArrowRight className="h-3 w-3" />
              </Link>
            </>
          ) : (
            <span className="text-xs text-muted-foreground">
              Flexible profile, shape the story with the customer&rsquo;s role and pain instead of
              a canonical archetype.
            </span>
          )}
        </div>

        {showPlan && arch && (
          <div className="pt-2">
            <RecommendationCard
              primaryId={arch.id}
              rationale={`This profile matches ${matched} of ${total} of your selected conditions. Use ${arch.memoryHook} as the canonical story frame.`}
              painFraming={painFraming}
              painOptional
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function buildCoreStoryAngle(
  profile: { name: string },
  selected: SelectedLite[],
  arch: NonNullable<ReturnType<typeof archetypeById>>,
) {
  const hits = selected
    .filter((s) => s.satisfied)
    .map((s) => `${s.direction} ${s.attribute}`)
    .join(", ");
  return `${profile.name} lets you tell the "${arch.memoryHook}" story with ${hits || "this attribute mix"}. Frame it as coachable behavior around ${arch.developAnchor}, not a hiring miss.`;
}

type SelectedLite = { attribute: string; direction: Direction; satisfied: boolean; missing: boolean };

function buildFlexibleStoryAngle(
  profile: { name: string },
  selected: SelectedLite[],
  context: DemoContext,
) {
  const hits = selected.filter((s) => s.satisfied);
  if (hits.length === 0) {
    return `${profile.name} is a flexible profile match for this pattern. Use the customer's role and pain to shape the story, do not lock this person into a specific job.`;
  }
  const parts = hits
    .map((s) => (s.direction === "high" ? `high ${s.attribute}` : `low ${s.attribute}`))
    .join(", ");
  const roleClause = context.problemRole
    ? ` In a ${context.problemRole.toLowerCase()} role,`
    : "";
  const painClause = context.businessPain ? ` given the pain you heard,` : "";
  return `${profile.name} can support a story about someone whose scores line up with ${parts}.${roleClause}${painClause} this could show up as coachable behavior, not a fixed personality, that the manager can shape with clear expectations and feedback.`;
}

function buildCoreTalkStarter(
  profile: { name: string; firstName?: string },
  arch: NonNullable<ReturnType<typeof archetypeById>>,
) {
  const first = profile.firstName || profile.name.split(" ")[0];
  return (
    TALK_TRACKS[arch.id]?.short ||
    `Meet ${first}. ${arch.roleFraming}. Develop → ${arch.developAnchor} shows the manager the specific coaching move that turns this behavior around.`
  );
}

function buildFlexibleTalkStarter(
  profile: { name: string; firstName?: string },
  selected: SelectedLite[],
  context: DemoContext,
) {
  const first = profile.firstName || profile.name.split(" ")[0];
  const primary = selected.find((s) => s.satisfied) || selected[0];
  const role = context.problemRole ? `, imagine them in a ${context.problemRole.toLowerCase()} role` : "";
  return `Meet ${first}${role}. This is a flexible profile built to support an attribute story around ${primary?.attribute || "the selected pattern"}. Use their scores to show the behavior a manager would coach, not a fixed job title.`;
}

function buildOptionalPainFraming(conditions: AttrCondition[], context?: DemoContext) {
  if (context?.businessPain) return context.businessPain;
  const parts = conditions
    .filter((c) => c.attribute)
    .map((c) => `${c.direction} ${c.attribute}`);
  if (parts.length === 0) return "Attribute-first demo, no customer pain provided.";
  return `Customer described a pattern that maps to ${parts.join(" + ")}.`;
}

function buildRoleFramings(selected: SelectedLite[], context: DemoContext) {
  const hits = selected.filter((s) => s.satisfied);
  if (hits.length === 0) return [];
  const pattern = hits
    .map((s) => (s.direction === "high" ? `high ${s.attribute}` : `low ${s.attribute}`))
    .join(" + ");

  const framings: { role: string; body: string }[] = [];
  if (context.problemRole) {
    framings.push({
      role: context.problemRole,
      body: `This could support a story about someone whose ${pattern} pattern shows up in the specific behaviors that role demands, coachable with clear expectations from the manager.`,
    });
  } else {
    framings.push({
      role: "Sales rep",
      body: `Could show up as someone who learns the product and improves with coaching, but may not naturally push for bigger goals, competitive targets, or proactive territory ownership.`,
    });
    framings.push({
      role: "Frontline / operations",
      body: `Could show up as someone who improves when coached but does not naturally seek broader ownership or stretch responsibility without clear expectations.`,
    });
  }
  return framings;
}
