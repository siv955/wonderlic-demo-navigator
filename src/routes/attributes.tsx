import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { attributes, profiles, archetypeById } from "@/data";
import { matchProfiles, type AttrCondition, type Direction, type AttrMatchResult } from "@/lib/matching";
import { StoryBadge } from "@/components/story-badge";
import { Plus, Trash2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/attributes")({
  head: () => ({
    meta: [
      { title: "Find by Attribute Combo — Wonderlic Demo Story Finder" },
      {
        name: "description",
        content:
          "Pick up to four attribute conditions to surface demo profiles that fit — with exact and closest matches.",
      },
      { property: "og:title", content: "Find by Attribute Combo — Wonderlic Demo Story Finder" },
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

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-blurple">
          Find by Attribute Combo
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-light leading-tight sm:text-5xl">
          Which profile hits this pattern?
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Pick up to four attributes with a High or Low direction. The finder returns exact
          matches, then the closest options ranked by fit.
        </p>
      </header>

      <Card className="border-border/60 shadow-sm">
        <CardContent className="space-y-5 p-6">
          <div className="space-y-3">
            {conditions.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 sm:grid-cols-[minmax(0,1fr)_auto_auto]"
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

          <p className="text-xs text-muted-foreground">
            Attribute Finder is for demo prep flexibility. For canonical stories, use the{" "}
            <Link to="/archetypes" className="font-semibold text-blurple hover:underline">
              Archetype Library
            </Link>
            .
          </p>
        </CardContent>
      </Card>

      <ResultsBlock title="Exact Matches" results={results.exact} emptyMsg="No profiles hit every condition. See closest matches below." exact />
      <ResultsBlock title="Closest Matches" results={results.close} emptyMsg="Add or adjust conditions to see options." />
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
}: {
  title: string;
  results: AttrMatchResult[];
  emptyMsg: string;
  exact?: boolean;
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
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {results.map((r) => (
            <ProfileMatchCard key={r.profile.id} result={r} exact={exact} />
          ))}
        </div>
      )}
    </section>
  );
}

function ProfileMatchCard({ result, exact }: { result: AttrMatchResult; exact?: boolean }) {
  const { profile, matched, total, selectedScores, weak } = result;
  const arch = profile.associatedArchetypeId ? archetypeById(profile.associatedArchetypeId) : null;

  return (
    <Card className="border-border/60 shadow-sm transition-shadow hover:shadow-md">
      <CardContent className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate font-display text-lg font-normal text-wonderlic-blue">{profile.name}</h3>
            <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
              {profile.roleFlavor || (arch ? arch.roleFraming : "—")}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            {exact ? (
              <StoryBadge variant="exact">Exact match</StoryBadge>
            ) : (
              <StoryBadge variant="near">{matched} of {total}</StoryBadge>
            )}
            {weak && !exact && <StoryBadge variant="caution">Use with caution</StoryBadge>}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <StoryBadge variant={profile.coreOrExtra === "Core" ? "core" : "extra"}>
            {profile.coreOrExtra}
          </StoryBadge>
          {arch && (
            <Link
              to="/archetypes/$id"
              params={{ id: arch.id }}
              className="rounded-full border border-border bg-card px-2 py-0.5 text-[11px] font-semibold text-muted-foreground hover:text-blurple"
            >
              → {arch.memoryHook}
            </Link>
          )}
        </div>

        <div className="rounded-lg border border-border bg-muted/50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            Selected attributes
          </p>
          <ul className="mt-1.5 space-y-1">
            {selectedScores.map((s) => (
              <li key={s.attribute} className="flex items-center justify-between text-xs">
                <span className="text-wonderlic-blue">
                  {s.attribute}{" "}
                  <span className="text-muted-foreground">
                    ({s.direction})
                  </span>
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 font-semibold ${
                    s.satisfied
                      ? "bg-soft-purple text-blurple"
                      : "bg-select-ice text-wonderlic-blue"
                  }`}
                >
                  {s.score}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {arch && (
          <Link
            to="/archetypes/$id"
            params={{ id: arch.id }}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blurple hover:underline"
          >
            Open the {arch.memoryHook} story <ArrowRight className="h-3 w-3" />
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
