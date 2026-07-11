import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageSquareQuote, SlidersHorizontal, Library, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Start — Wonderlic Demo Story Finder" },
      {
        name: "description",
        content:
          "Sales demo prep in seconds. Start from customer pain, an attribute pattern, or browse the archetype and profile libraries.",
      },
      { property: "og:title", content: "Start — Wonderlic Demo Story Finder" },
      {
        property: "og:description",
        content: "Pick the right archetype, profile, Team Dynamics page, and talk track — fast.",
      },
    ],
  }),
  component: StartPage,
});

function StartPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-blurple">
          Wonderlic Demo Story Finder
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-light leading-tight sm:text-5xl">
          Where do you want to start?
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          Three ways in. Pick the one that matches what you already know about the customer or the
          demo you want to run.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <StartCard
          to="/pain"
          icon={<MessageSquareQuote className="h-6 w-6" />}
          eyebrow="Recommended"
          title="Start with Business Pain"
          body="You heard the customer say something in discovery — 'reps don't follow up,' 'managers avoid feedback.' Get the recommended story, profile, and demo plan."
        />
        <StartCard
          to="/attributes"
          icon={<SlidersHorizontal className="h-6 w-6" />}
          eyebrow="For advanced reps"
          title="Start with Attribute Combo"
          body="You already know the attribute pattern you want to demo (e.g. low Diligence, high Sociability). Find profiles that hit it exactly, or the closest matches."
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <StartCard
          to="/archetypes"
          icon={<Library className="h-6 w-6" />}
          eyebrow="Library"
          title="Browse Archetypes"
          body="The six canonical Wonderlic demo stories, each with a Select story, Develop anchor, Team Dynamics path, and talk track."
          compact
        />
        <StartCard
          to="/profiles"
          icon={<Users className="h-6 w-6" />}
          eyebrow="Directory"
          title="Browse Profiles"
          body="Every demo profile — core and extras — searchable by name, role, or attribute pattern."
          compact
        />
      </div>

      <div className="rounded-2xl border border-dashed border-border bg-card/50 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Tell non-core stories
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className="max-w-2xl text-sm text-wonderlic-blue">
            Need to tell an Ambition, Curiosity, Change Adoption, or Assertiveness story? Open the
            Attribute Story Library for plain-English meanings, customer pain language, and best
            demo profiles.
          </p>
          <Link
            to="/attribute-stories"
            className="inline-flex items-center gap-1.5 rounded-full border border-blurple/40 bg-soft-purple px-4 py-2 text-sm font-semibold text-blurple hover:bg-purple-chalk"
          >
            Attribute Story Library <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function StartCard({
  to,
  icon,
  eyebrow,
  title,
  body,
  compact,
}: {
  to: "/pain" | "/attributes" | "/archetypes" | "/profiles";
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  body: string;
  compact?: boolean;
}) {
  return (
    <Link to={to} className="group">
      <Card className="h-full border-border/60 shadow-sm transition-all group-hover:-translate-y-0.5 group-hover:border-blurple/40 group-hover:shadow-md">
        <CardContent className={`flex h-full flex-col gap-4 ${compact ? "p-5" : "p-7"}`}>
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-soft-purple text-blurple">
              {icon}
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-blurple">
                {eyebrow}
              </p>
              <h2
                className={`font-display font-light text-wonderlic-blue ${
                  compact ? "text-xl" : "text-2xl"
                }`}
              >
                {title}
              </h2>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
          <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-blurple">
            Open <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
