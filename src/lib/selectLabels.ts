// Normalize any historical / spreadsheet Select label to an official Select
// signal display name. Storage keys in profile.scores may still use
// "Select - X" shorthand; use this ONLY for user-facing rendering.

const CANONICAL: Record<string, string> = {
  "Select - Applied": "Applied Interest",
  "Select - Cog": "Cognitive Ability",
  "Select - Cognitive Ability": "Cognitive Ability",
  "Select - Cooperation": "Cooperation",
  "Select - Creative": "Creative Interest",
  "Select - Dependability": "Dependability",
  "Select - Dependibility": "Dependability",
  "Select - Enterprising": "Enterprising Interest",
  "Select - Investigative": "Investigative Interest",
  "Select - Open-Mindedness": "Open-Mindedness",
  "Select - Sociability": "Sociability",
  "Select - Stress Tolerance": "Stress Tolerance",
  "Select - Stress Tolerance2": "Stress Tolerance",
  "Select - Structured": "Structured Interest",
  "Select - Supportive": "Supportive Interest",
  // Bare or misspelled inputs
  Dependibility: "Dependability",
  "Dependability / work habits": "Dependability",
  "Dependability and process discipline": "Dependability",
  "Work habits": "Dependability",
  "Structured / routine": "Structured Interest",
  Cog: "Cognitive Ability",
  "Commercial drive": "Enterprising Interest",
  "People skills": "Sociability",
  "Sales motivation": "Enterprising Interest",
};

export function normalizeSelectLabel(raw: string): string {
  if (!raw) return raw;
  if (CANONICAL[raw]) return CANONICAL[raw];
  // Strip a leading "Select - " prefix if present
  const stripped = raw.replace(/^Select\s*-\s*/i, "").trim();
  return CANONICAL[stripped] ?? CANONICAL[`Select - ${stripped}`] ?? stripped;
}

export const isSelectKey = (raw: string) => /^Select\s*-\s*/i.test(raw);
