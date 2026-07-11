import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { archetypeById, profileById } from "@/data";
import { RecommendationCard } from "@/components/recommendation-card";
import { StoryBadge } from "@/components/story-badge";
import { ArrowLeft, ArrowRight, User } from "lucide-react";

export const Route = createFileRoute("/archetypes/$id")({
  head: ({ params }) => {
    const a = archetypeById(params.id);
    if (!a) {
      return { meta: [{ title: "Archetype not found — Wonderlic Demo Story Finder" }] };
    }
    return {
      meta: [
        { title: `${a.memoryHook} — Wonderlic Demo Story Finder` },
        { name: "description", content: a.customerPain.slice(0, 155) },
        { property: "og:title", content: `${a.memoryHook} — Wonderlic Demo Story Finder` },
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
  const profile = profileById(a.demoProfileId);

  return (
    <div className="space-y-8">
      <Link
        to="/archetypes"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-blurple"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Archetype Library
      </Link>

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-blurple">
          {a.workerCategory}
        </p>
        <h1 className="font-display text-5xl font-light leading-tight text-wonderlic-blue">
          {a.memoryHook}
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground">{a.roleFraming}</p>
      </header>

      <section className="grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Use when the customer says
          </p>
          <p className="mt-2 font-display text-lg font-light text-wonderlic-blue">
            &ldquo;{a.useWhenCustomerSays || a.customerPain}&rdquo;
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.fullStory}</p>
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
                <StoryBadge variant={profile.coreOrExtra === "Core" ? "core" : "extra"}>
                  {profile.coreOrExtra}
                </StoryBadge>
              </div>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blurple">
              Open in directory <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        )}
      </section>

      <RecommendationCard
        primaryId={a.id}
        rationale={a.developAnchorLogic}
      />
    </div>
  );
}
