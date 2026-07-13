import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { archetypes, type ArchetypeId } from "@/data";
import { runThisDemoFor } from "@/data/runThisDemo";
import { StoryBadge } from "@/components/story-badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/archetypes")({
  head: () => ({
    meta: [
      { title: "Archetype Library, Wonderlic Demo Story Finder" },
      {
        name: "description",
        content:
          "The six canonical Wonderlic demo archetypes. Pick a story fast, then open the detail page to run it.",
      },
      { property: "og:title", content: "Archetype Library, Wonderlic Demo Story Finder" },
      { property: "og:description", content: "The six canonical demo archetypes, ready to run." },
    ],
  }),
  component: ArchetypesLayout,
});

function ArchetypesLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isIndex = pathname === "/archetypes" || pathname === "/archetypes/";
  if (!isIndex) return <Outlet />;
  return <ArchetypesIndex />;
}

function ArchetypesIndex() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-blurple">
          Archetype Library
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-light leading-tight sm:text-5xl">
          Which story should I use?
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Six canonical demo stories. Skim the primary gap and short definition, then open the
          detail page for the full Run This Demo card.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {archetypes.map((a) => {
          const r = runThisDemoFor(a.id as ArchetypeId);
          return (
            <Link key={a.id} to="/archetypes/$id" params={{ id: a.id }} className="group">
              <Card className="h-full border-border/60 shadow-sm transition-all group-hover:-translate-y-0.5 group-hover:border-blurple/40 group-hover:shadow-md">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-blurple">
                      {a.workerCategory}
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-light text-wonderlic-blue">
                      {a.firstName} {a.lastName}
                    </h2>
                    <p className="mt-0.5 text-xs font-semibold text-blurple">
                      Memory hook: {a.memoryHook}
                    </p>
                    <div className="mt-2">
                      <StoryBadge variant="caution">Primary gap: {r.primaryGapLabel}</StoryBadge>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {r.shortDefinition}
                  </p>

                  <div className="mt-auto space-y-2 text-xs">
                    <div className="rounded-lg border border-border bg-muted/40 px-3 py-2">
                      <span className="font-semibold text-muted-foreground">Develop: </span>
                      <span className="text-wonderlic-blue">{a.developAnchor}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-border bg-soft-purple/50 px-3 py-2">
                      <span className="text-blurple">
                        Team Dynamics: {a.teamDynamicsSection} → {a.teamDynamicsPage}
                      </span>
                    </div>
                    <div className="flex items-center justify-end pt-1">
                      <span className="inline-flex items-center gap-1 font-semibold text-blurple">
                        View demo guidance
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
