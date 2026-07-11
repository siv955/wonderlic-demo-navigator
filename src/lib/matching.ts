import { ALL_PAINS, type Pain } from "@/data/painMappings";
import type { Profile } from "@/data/types";

export interface PainMatch {
  pain: Pain;
  score: number;
}

export function matchPain(query: string, limit = 3): PainMatch[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/[\s,.;]+/).filter(Boolean);
  return ALL_PAINS.map((pain) => {
    let score = 0;
    const hay = (pain.label + " " + pain.keywords.join(" ")).toLowerCase();
    for (const kw of pain.keywords) {
      if (q.includes(kw.toLowerCase())) score += 3;
    }
    for (const tok of tokens) {
      if (hay.includes(tok)) score += 1;
    }
    return { pain, score };
  })
    .filter((m) => m.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export type Direction = "high" | "low";

export interface AttrCondition {
  attribute: string;
  direction: Direction;
}

export interface AttrThresholds {
  high: number;
  low: number;
}

export interface AttrMatchResult {
  profile: Profile;
  matched: number;
  total: number;
  totalGap: number;
  selectedScores: { attribute: string; direction: Direction; score: number; satisfied: boolean }[];
  isExact: boolean;
  weak: boolean;
}

export function matchProfiles(
  conditions: AttrCondition[],
  profiles: Profile[],
  thresholds: AttrThresholds,
): { exact: AttrMatchResult[]; close: AttrMatchResult[] } {
  const valid = conditions.filter((c) => c.attribute);
  if (valid.length === 0) return { exact: [], close: [] };

  const scored: AttrMatchResult[] = profiles.map((profile) => {
    let matched = 0;
    let totalGap = 0;
    const selectedScores = valid.map((c) => {
      const score = profile.scores[c.attribute] ?? 50;
      const satisfied = c.direction === "high" ? score >= thresholds.high : score <= thresholds.low;
      if (satisfied) matched += 1;
      const gap =
        c.direction === "high" ? Math.max(0, thresholds.high - score) : Math.max(0, score - thresholds.low);
      totalGap += gap;
      return { attribute: c.attribute, direction: c.direction, score, satisfied };
    });
    const isExact = matched === valid.length;
    return {
      profile,
      matched,
      total: valid.length,
      totalGap,
      selectedScores,
      isExact,
      weak: matched < Math.ceil(valid.length / 2),
    };
  });

  const exact = scored.filter((r) => r.isExact).sort((a, b) => a.totalGap - b.totalGap);
  const close = scored
    .filter((r) => !r.isExact)
    .sort((a, b) => b.matched - a.matched || a.totalGap - b.totalGap)
    .slice(0, 8);
  return { exact, close };
}
