import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { profiles, archetypes, archetypeById } from "@/data";
import { StoryBadge } from "@/components/story-badge";
import { FlexibleProfileBadge } from "@/components/flexible-profile-badge";
import { normalizeSelectLabel, isSelectKey } from "@/lib/selectLabels";
import { Search, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/profiles")({
  head: () => ({
    meta: [
      { title: "Profile Directory, Wonderlic Demo Story Finder" },
      {
        name: "description",
        content: "Every Wonderlic demo profile with best-high / best-low attributes, story uses, and full scores.",
      },
      { property: "og:title", content: "Profile Directory, Wonderlic Demo Story Finder" },
      { property: "og:description", content: "Searchable demo profile directory." },
    ],
  }),
  component: ProfileDirectory,
});

function ProfileDirectory() {
  const [q, setQ] = useState("");
  const [filterKind, setFilterKind] = useState<string>("all");
  const [filterArch, setFilterArch] = useState<string>("all");

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return profiles.filter((p) => {
      if (filterKind !== "all" && p.coreOrExtra.toLowerCase() !== filterKind) return false;
      if (filterArch !== "all" && p.associatedArchetypeId !== filterArch) return false;
      if (!query) return true;
      return (
        p.name.toLowerCase().includes(query) ||
        p.email.toLowerCase().includes(query) ||
        p.roleFlavor.toLowerCase().includes(query)
      );
    });
  }, [q, filterKind, filterArch]);

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-blurple">
          Profile Directory
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-light leading-tight sm:text-5xl">
          Every demo profile, one search away.
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Search by name, role, or attribute pattern. Scores stay collapsed until you need them.
        </p>
      </header>

      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
        <div className="grid gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search name, email, or role flavor…"
              className="h-11 rounded-full border-border pl-11"
            />
          </div>
          <Select value={filterKind} onValueChange={setFilterKind}>
            <SelectTrigger className="h-11 rounded-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All profiles</SelectItem>
              <SelectItem value="core">Core archetypes</SelectItem>
              <SelectItem value="extra">Extras</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterArch} onValueChange={setFilterArch}>
            <SelectTrigger className="h-11 rounded-full">
              <SelectValue placeholder="Any archetype" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any archetype</SelectItem>
              {archetypes.map((a) => (
                <SelectItem key={a.id} value={a.id}>
                  {a.memoryHook}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">{list.length} profiles</p>
      </div>

      <div className="grid gap-3">
        {list.map((p) => {
          const arch = p.associatedArchetypeId ? archetypeById(p.associatedArchetypeId) : null;
          const isCore = p.coreOrExtra === "Core";
          return (
            <Card key={p.id} className="border-border/60 shadow-sm">
              <CardContent className="p-5">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-display text-xl font-normal text-wonderlic-blue">{p.name}</h2>
                      <StoryBadge variant={isCore ? "core" : "extra"}>
                        {p.coreOrExtra}
                      </StoryBadge>
                      {!isCore && <FlexibleProfileBadge />}
                      {isCore && arch && (
                        <Link
                          to="/archetypes/$id"
                          params={{ id: arch.id }}
                          className="rounded-full border border-border bg-card px-2 py-0.5 text-[11px] font-semibold text-muted-foreground hover:text-blurple"
                        >
                          → {arch.memoryHook}
                        </Link>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{p.email}</p>
                    {isCore && p.roleFlavor && (
                      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{p.roleFlavor}</p>
                    )}
                    {!isCore && p.roleFlavor && (
                      <div className="mt-2 max-w-2xl rounded-lg border border-dashed border-border bg-muted/40 p-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                          Original demo build context
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">{p.roleFlavor}</p>
                        <p className="mt-1 text-[11px] italic text-muted-foreground">
                          This is not a fixed persona. Use this profile flexibly based on the
                          attribute pattern and customer context.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <AttrList title="Best high" items={p.bestHighAttributes} tone="high" />
                  <AttrList title="Best low" items={p.bestLowAttributes} tone="low" />
                </div>

                {!isCore && (
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    <div className="rounded-lg border border-border bg-card p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                        Useful for attribute patterns
                      </p>
                      <p className="mt-1 text-xs text-wonderlic-blue">
                        {buildUsefulPattern(p.bestHighAttributes, p.bestLowAttributes)}
                      </p>
                    </div>
                    <div className="rounded-lg border border-select/40 bg-select-ice p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-select">
                        Cautions
                      </p>
                      <p className="mt-1 text-xs text-wonderlic-blue">
                        Do not lock this profile into a specific job title. Shape the story with
                        the customer&rsquo;s role, industry, and pain. Coach the behavior, don&rsquo;t
                        moralize the person.
                      </p>
                    </div>
                  </div>
                )}

                <Collapsible className="mt-4">
                  <CollapsibleTrigger className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-blurple">
                    View scores
                    <ChevronDown className="h-3 w-3 transition-transform group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3 rounded-lg border border-border bg-muted/40 p-4">
                    <ScoreGrid scores={p.scores} />
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          );
        })}
        {list.length === 0 && (
          <div className="rounded-xl border border-dashed border-border bg-card/50 p-10 text-center text-sm text-muted-foreground">
            No profiles match those filters.
          </div>
        )}
      </div>
    </div>
  );
}

function AttrList({ title, items, tone }: { title: string; items: string[]; tone: "high" | "low" }) {
  return (
    <div className="rounded-lg border border-border bg-muted/40 p-3">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{title}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {items.length === 0 && <span className="text-xs text-muted-foreground">, </span>}
        {items.map((a) => (
          <span
            key={a}
            className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${
              tone === "high"
                ? "border-blue-lilac bg-soft-purple text-blurple"
                : "border-select/40 bg-select-ice text-wonderlic-blue"
            }`}
          >
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}

function ScoreGrid({ scores }: { scores: Record<string, number> }) {
  const entries = Object.entries(scores).sort((a, b) => a[0].localeCompare(b[0]));
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs sm:grid-cols-3 lg:grid-cols-4">
      {entries.map(([k, v]) => (
        <div key={k} className="flex items-center justify-between border-b border-border/60 py-1">
          <span className="truncate text-muted-foreground">{k}</span>
          <span
            className={`ml-2 shrink-0 rounded-full px-1.5 py-0.5 font-semibold ${
              v >= 70
                ? "bg-soft-purple text-blurple"
                : v <= 30
                  ? "bg-select-ice text-wonderlic-blue"
                  : "bg-muted text-wonderlic-blue"
            }`}
          >
            {v}
          </span>
        </div>
      ))}
    </div>
  );
}

function buildUsefulPattern(highs: string[], lows: string[]) {
  const h = highs.slice(0, 3).map((a) => `high ${a}`);
  const l = lows.slice(0, 3).map((a) => `low ${a}`);
  const combined = [...h, ...l];
  if (combined.length === 0) return "Attribute patterns TBD, use scores view.";
  return `Works well for stories built on ${combined.join(", ")}.`;
}
