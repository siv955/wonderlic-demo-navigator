import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { attributes, profiles, archetypeById } from "@/data";
import type { Profile } from "@/data/types";
import { ATTRIBUTE_STORIES, attributeStoryByName, type AttributeStory } from "@/data/attributeStories";
import { StoryBadge } from "@/components/story-badge";
import { CopyButton } from "@/components/copy-button";
import { normalizeSelectLabel } from "@/lib/selectLabels";
import { Search, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/attribute-stories")({
  head: () => ({
    meta: [
      { title: "Attribute Story Library, Wonderlic Demo Story Finder" },
      {
        name: "description",
        content:
          "Plain-English meanings, customer pain language, low/high stories, best demo profiles, Team Dynamics availability, and talk tracks for every Develop attribute.",
      },
      { property: "og:title", content: "Attribute Story Library, Wonderlic Demo Story Finder" },
      {
        property: "og:description",
        content: "Tell non-core stories like Ambition, Curiosity, Change Adoption, or Assertiveness.",
      },
    ],
  }),
  component: AttributeStoryLibrary,
});

function AttributeStoryLibrary() {
  const [q, setQ] = useState("");
  const [scope, setScope] = useState<"curated" | "all">("curated");

  const developAttrs = attributes.filter((a) => a.type !== "Select").map((a) => a.name);

  const list = useMemo(() => {
    const names = scope === "curated" ? ATTRIBUTE_STORIES.map((s) => s.attribute) : developAttrs;
    const query = q.trim().toLowerCase();
    return names
      .filter((n) => !query || n.toLowerCase().includes(query))
      .map((n) => ({ name: n, story: attributeStoryByName(n) }));
  }, [q, scope, developAttrs]);

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-blurple">
          Attribute Story Library
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-light leading-tight sm:text-5xl">
          Tell non-core stories with confidence.
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          For every Develop attribute: what it means in plain English, the customer language that
          points to it, low- and high-score stories, best demo profiles, Team Dynamics path (or
          best proxy), and a talk track. Use this when the canonical six archetypes don't fit.
        </p>
      </header>

      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
        <div className="grid gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search attributes… e.g., Ambition, Curiosity, Change Adoption"
              className="h-11 rounded-full border-border pl-11"
            />
          </div>
          <Select value={scope} onValueChange={(v) => setScope(v as typeof scope)}>
            <SelectTrigger className="h-11 rounded-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="curated">Curated stories ({ATTRIBUTE_STORIES.length})</SelectItem>
              <SelectItem value="all">All Develop attributes ({developAttrs.length})</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Select and Develop are separate assessments. Related Select signals are shown for context
          only, do not conflate the two.
        </p>
      </div>

      <div className="grid gap-4">
        {list.map(({ name, story }) => (
          <AttributeStoryCard key={name} name={name} story={story} />
        ))}
        {list.length === 0 && (
          <div className="rounded-xl border border-dashed border-border bg-card/50 p-10 text-center text-sm text-muted-foreground">
            No attributes match that search.
          </div>
        )}
      </div>
    </div>
  );
}

function AttributeStoryCard({ name, story }: { name: string; story?: AttributeStory }) {
  const bestHigh = topProfilesForAttribute(name, "high", 3);
  const bestLow = topProfilesForAttribute(name, "low", 3);
  const arch = story?.relatedArchetypeId ? archetypeById(story.relatedArchetypeId) : null;

  const copyBundle = story
    ? [
        `ATTRIBUTE STORY, ${name}`,
        `Meaning: ${story.meaning}`,
        "",
        `Customer pain language:\n- ${story.customerPainLanguage.join("\n- ")}`,
        "",
        `Low-score story: ${story.lowStory}`,
        `High-score story: ${story.highStory}`,
        "",
        story.teamDynamicsAvailable
          ? `Team Dynamics: ${story.teamDynamicsPath}`
          : `Team Dynamics: not available. Proxy: ${story.bestProxy}`,
        "",
        `30-second talk track: ${story.thirtySecondTalkTrack}`,
        `Ask Wonderlic: ${story.askWonderlic}`,
        `What not to say: ${story.whatNotToSay}`,
      ].join("\n")
    : `ATTRIBUTE STORY, ${name}\n(No curated story yet, see Best High / Best Low profiles for demo options.)`;

  return (
    <Card className="border-border/60 shadow-sm">
      <CardContent className="space-y-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="font-display text-2xl font-light text-wonderlic-blue">{name}</h2>
            {story ? (
              <p className="mt-1 text-sm text-muted-foreground">{story.meaning}</p>
            ) : (
              <p className="mt-1 text-xs italic text-muted-foreground">
                No curated story yet, use Best High / Best Low profiles as a starting point.
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {story?.teamDynamicsAvailable ? (
              <StoryBadge variant="team-dynamics">TD page available</StoryBadge>
            ) : (
              <StoryBadge variant="caution">No TD page, use proxy</StoryBadge>
            )}
            <CopyButton text={copyBundle} label="Copy story" />
          </div>
        </div>

        {story && (
          <>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Common customer pain language
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {story.customerPainLanguage.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-[11px] font-medium text-wonderlic-blue"
                  >
                    &ldquo;{p}&rdquo;
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <StoryBox tone="low" title="Low-score story" body={story.lowStory} />
              <StoryBox tone="high" title="High-score story" body={story.highStory} />
            </div>
          </>
        )}

        <div className="grid gap-3 md:grid-cols-2">
          <ProfileList title="Best low demo profiles" tone="low" profiles={bestLow} attribute={name} />
          <ProfileList title="Best high demo profiles" tone="high" profiles={bestHigh} attribute={name} />
        </div>

        {story && (
          <div className="grid gap-3 md:grid-cols-2">
            <InfoBox
              title={story.teamDynamicsAvailable ? "Team Dynamics" : "Team Dynamics, not available"}
              body={
                story.teamDynamicsAvailable
                  ? `TD → ${story.teamDynamicsPath}`
                  : `Best proxy: ${story.bestProxy}`
              }
              accent={story.teamDynamicsAvailable ? "blurple" : "muted"}
            />
            <InfoBox
              title="Related Select signals"
              body={
                story.relatedSelectSignals.length > 0
                  ? `${story.relatedSelectSignals.join(", ")}, Select and Develop are separate assessments; use for adjacent screen-in signals only.`
                  : "None directly. Do not substitute a Select attribute for a Develop story."
              }
              accent="muted"
            />
          </div>
        )}

        {story && (
          <div className="grid gap-3 md:grid-cols-2">
            <InfoBox title="30-second talk track" body={story.thirtySecondTalkTrack} accent="blurple" copyable />
            <InfoBox title="Ask Wonderlic prompt" body={story.askWonderlic} accent="muted" copyable />
          </div>
        )}

        {story && (
          <div className="rounded-lg border border-select/40 bg-select-ice p-3 text-xs text-wonderlic-blue">
            <span className="font-semibold text-select">What not to say: </span>
            {story.whatNotToSay}
          </div>
        )}

        {arch && (
          <Link
            to="/archetypes/$id"
            params={{ id: arch.id }}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blurple hover:underline"
          >
            Open the canonical {arch.memoryHook} story <ArrowRight className="h-3 w-3" />
          </Link>
        )}
      </CardContent>
    </Card>
  );
}

function StoryBox({ tone, title, body }: { tone: "low" | "high"; title: string; body: string }) {
  const cls =
    tone === "high"
      ? "border-blue-lilac bg-soft-purple/60"
      : "border-select/40 bg-select-ice";
  return (
    <div className={`rounded-xl border p-4 ${cls}`}>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-wonderlic-blue">{body}</p>
    </div>
  );
}

function InfoBox({
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
  return (
    <div
      className={`rounded-xl border p-4 ${
        accent === "blurple" ? "border-blue-lilac bg-purple-chalk" : "border-border bg-muted/50"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-blurple">{title}</p>
        {copyable && <CopyButton text={body} label={title} size="icon" />}
      </div>
      <p className="mt-1.5 text-sm text-wonderlic-blue">{body}</p>
    </div>
  );
}

function ProfileList({
  title,
  tone,
  profiles: list,
  attribute,
}: {
  title: string;
  tone: "high" | "low";
  profiles: Profile[];
  attribute: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </p>
      {list.length === 0 ? (
        <p className="mt-2 text-xs italic text-muted-foreground">
          No profile with a strong {tone} score on {attribute}.
        </p>
      ) : (
        <ul className="mt-2 space-y-1.5">
          {list.map((p) => (
            <li key={p.id} className="flex items-center justify-between text-xs">
              <span className="truncate text-wonderlic-blue">{p.name}</span>
              <span
                className={`ml-2 shrink-0 rounded-full px-2 py-0.5 font-semibold ${
                  tone === "high"
                    ? "bg-soft-purple text-blurple"
                    : "bg-select-ice text-wonderlic-blue"
                }`}
              >
                {p.scores[attribute]}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function topProfilesForAttribute(name: string, direction: "high" | "low", limit: number): Profile[] {
  return profiles
    .filter((p) => typeof p.scores[name] === "number")
    .sort((a, b) =>
      direction === "high" ? b.scores[name] - a.scores[name] : a.scores[name] - b.scores[name],
    )
    .filter((p) => (direction === "high" ? p.scores[name] >= 65 : p.scores[name] <= 35))
    .slice(0, limit);
}
