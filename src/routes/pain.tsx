import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Sparkles } from "lucide-react";
import { PAIN_CATEGORIES, type Pain } from "@/data/painMappings";
import { matchPain } from "@/lib/matching";
import { RecommendationCard } from "@/components/recommendation-card";

export const Route = createFileRoute("/pain")({
  head: () => ({
    meta: [
      { title: "Find by Business Pain — Wonderlic Demo Story Finder" },
      {
        name: "description",
        content:
          "Type the customer's pain or pick a chip to get the right Wonderlic archetype, demo profile, and full demo plan.",
      },
      { property: "og:title", content: "Find by Business Pain — Wonderlic Demo Story Finder" },
      {
        property: "og:description",
        content: "From customer language to a ready-to-run demo in seconds.",
      },
    ],
  }),
  component: PainFinder,
});

function PainFinder() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Pain | null>(null);

  const suggestions = useMemo(() => {
    if (selected) return [];
    return matchPain(query, 3);
  }, [query, selected]);

  const active = selected ?? suggestions[0]?.pain ?? null;

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-blurple">
          Find by Business Pain
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-light leading-tight sm:text-5xl">
          What did the customer just say?
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          Type the pain in the customer's own words, or pick a chip. The Story Finder returns the
          right archetype, demo profile, Team Dynamics path, and talk track.
        </p>
      </header>

      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelected(null);
            }}
            placeholder="Describe the customer pain… e.g., reps don't follow up, managers avoid feedback, technical people are hard to work with"
            className="h-14 rounded-full border-border bg-background pl-11 pr-4 text-sm shadow-none focus-visible:ring-2 focus-visible:ring-blurple"
          />
        </div>

        {suggestions.length > 0 && !selected && (
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <Sparkles className="h-3 w-3" />
              Best matches
            </span>
            {suggestions.map((s) => (
              <button
                key={s.pain.id}
                onClick={() => setSelected(s.pain)}
                className="rounded-full border border-blurple/30 bg-soft-purple px-3 py-1 text-xs font-semibold text-blurple hover:bg-purple-chalk"
              >
                {s.pain.label}
              </button>
            ))}
          </div>
        )}

        <div className="mt-6 space-y-4">
          {PAIN_CATEGORIES.map((cat) => (
            <div key={cat.id}>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {cat.label}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {cat.pains.map((p) => {
                  const isActive = selected?.id === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelected(p);
                        setQuery("");
                      }}
                      className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                        isActive
                          ? "border-blurple bg-blurple text-white"
                          : "border-border bg-card text-wonderlic-blue hover:border-blurple/40 hover:bg-soft-purple"
                      }`}
                    >
                      {p.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {active ? (
        <RecommendationCard
          key={active.id}
          primaryId={active.archetypeId}
          backupId={active.backupArchetypeId}
          rationale={active.rationale}
          painFraming={active.label}
        />
      ) : query.trim() ? (
        <EmptyState
          title="No pain matched yet"
          body="Try one of the chips above, or rephrase — e.g. 'reps do not follow up' or 'managers avoid hard conversations.'"
        />
      ) : (
        <EmptyState
          title="Pick a pain to get started"
          body="Use the customer's language. The Story Finder maps it to the right archetype and demo plan."
        />
      )}
    </div>
  );
}

function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
      <h2 className="font-display text-xl font-light text-wonderlic-blue">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
