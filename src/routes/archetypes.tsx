import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { archetypes } from "@/data";
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
          "The six canonical Wonderlic demo archetypes with memory hooks, Select signals, Develop anchors, Team Dynamics paths, and talk tracks.",
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
          Six canonical demo stories.
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Every card ships with the memory hook, Select signals, Develop anchor, Team Dynamics
          path, and both talk tracks. Click into a story to run the full plan.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {archetypes.map((a) => (
          <Link
            key={a.id}
            to="/archetypes/$id"
            params={{ id: a.id }}
            className="group"
          >
            <Card className="h-full border-border/60 shadow-sm transition-all group-hover:-translate-y-0.5 group-hover:border-blurple/40 group-hover:shadow-md">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-blurple">
                      {a.workerCategory}
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-light text-wonderlic-blue">
                      {a.memoryHook}
                    </h2>
                    <p className="mt-1 text-xs text-muted-foreground">{a.roleFraming}</p>
                  </div>
                </div>

                <p className="line-clamp-4 text-sm text-muted-foreground">{a.customerPain}</p>

                <div className="mt-auto space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    <StoryBadge variant="select">Select · {a.selectLens}</StoryBadge>
                    <StoryBadge variant="develop">Develop · {a.developAnchor}</StoryBadge>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border bg-soft-purple/50 px-3 py-2 text-xs">
                    <span className="text-blurple">
                      TD → {a.teamDynamicsSection} → {a.teamDynamicsPage}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-blurple transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
