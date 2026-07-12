import type { ArchetypeId } from "./types";

export interface PainCategory {
  id: string;
  label: string;
  pains: Pain[];
}

export interface Pain {
  id: string;
  label: string;
  keywords: string[];
  archetypeId: ArchetypeId;
  backupArchetypeId?: ArchetypeId;
  rationale: string;
}

export const PAIN_CATEGORIES: PainCategory[] = [
  {
    id: "sales",
    label: "Sales / Revenue",
    pains: [
      {
        id: "reps-likable-not-close",
        label: "Reps are likable but do not close",
        keywords: ["likable", "nice", "close", "closing", "urgency", "commercial ask", "not hungry"],
        archetypeId: "ethan",
        rationale: "Classic relationship-first seller, build the Enterprising Interest / Influence coaching story.",
      },
      {
        id: "pipeline-stalls",
        label: "Pipeline looks active but deals stall",
        keywords: ["pipeline", "stall", "stalls", "deals stall", "revenue does not follow"],
        archetypeId: "ethan",
        backupArchetypeId: "derek",
        rationale: "Positive conversations that never convert, Enterprising Interest gap.",
      },
      {
        id: "reps-do-not-follow-up",
        label: "Reps do not follow up",
        keywords: ["follow up", "follow-up", "no follow up", "next steps", "next-step"],
        archetypeId: "derek",
        rationale: "Follow-through and disciplined next-step behavior lives in Diligence.",
      },
      {
        id: "crm-hygiene",
        label: "Salesforce / CRM hygiene is poor",
        keywords: ["salesforce", "crm", "hygiene", "notes", "documentation", "clean data"],
        archetypeId: "derek",
        rationale: "Documentation and CRM discipline maps to Diligence and Orderliness.",
      },
      {
        id: "cannot-trust-forecast",
        label: "Managers cannot trust the forecast",
        keywords: ["forecast", "trust the forecast", "sandbagging"],
        archetypeId: "derek",
        backupArchetypeId: "ethan",
        rationale: "Bad forecasts usually trace to weak CRM discipline (Derek) or soft commercial ask (Ethan).",
      },
    ],
  },
  {
    id: "cs",
    label: "Customer Service / Call Center",
    pains: [
      {
        id: "poor-documentation",
        label: "Poor documentation",
        keywords: ["documentation", "notes missing", "poor documentation"],
        archetypeId: "derek",
        rationale: "Case-note discipline is a Diligence / Orderliness story.",
      },
      {
        id: "inconsistent-followthrough",
        label: "Inconsistent follow-through",
        keywords: ["follow-through", "follow through", "inconsistent"],
        archetypeId: "derek",
        rationale: "Follow-through under load is the coachable Diligence gap.",
      },
      {
        id: "cases-not-closed",
        label: "Cases do not get closed out",
        keywords: ["cases", "case closure", "tickets", "close out"],
        archetypeId: "derek",
        rationale: "Case closure is the customer-service equivalent of missed next steps.",
      },
      {
        id: "messy-handoffs",
        label: "Customer handoffs are messy",
        keywords: ["handoff", "handoffs", "handover"],
        archetypeId: "derek",
        backupArchetypeId: "caleb",
        rationale: "If the friction is process, lead Derek; if it's communication style, lead Caleb.",
      },
    ],
  },
  {
    id: "technical",
    label: "Technical / Expert Roles",
    pains: [
      {
        id: "smart-hard-to-work-with",
        label: "Smart but hard to work with",
        keywords: ["smart", "hard to work with", "friction", "abrasive", "difficult"],
        archetypeId: "caleb",
        rationale: "High expertise, low interpersonal warmth, Compassion coaching (talk about communication impact, not morals).",
      },
      {
        id: "knowledge-bottlenecks",
        label: "Knowledge bottlenecks",
        keywords: ["knowledge", "bottleneck", "single point", "stuck in one person"],
        archetypeId: "caleb",
        rationale: "Expertise is not accessible to teammates, Compassion / communication gap.",
      },
      {
        id: "handoffs-painful",
        label: "Handoffs are painful",
        keywords: ["handoff", "painful", "painful handoff"],
        archetypeId: "caleb",
        rationale: "Technical handoffs stall when the expert doesn't smooth the interaction.",
      },
      {
        id: "team-avoids-expert",
        label: "Teammates avoid the expert",
        keywords: ["avoid", "teammates avoid", "avoid the expert"],
        archetypeId: "caleb",
        rationale: "The team routes around the person, classic Compassion signal.",
      },
    ],
  },
  {
    id: "frontline",
    label: "Frontline / Operations",
    pains: [
      {
        id: "inconsistent-execution",
        label: "Inconsistent execution",
        keywords: ["inconsistent", "execution", "output"],
        archetypeId: "riley",
        rationale: "Skilled but variable output, Results Focus coaching.",
      },
      {
        id: "production-errors",
        label: "Production errors",
        keywords: ["production", "errors", "mistakes", "defects"],
        archetypeId: "riley",
        rationale: "Errors from skilled workers point at Results Focus, not ability.",
      },
      {
        id: "shipping-mistakes",
        label: "Shipping / receiving mistakes",
        keywords: ["shipping", "receiving", "mistakes", "warehouse"],
        archetypeId: "riley",
        rationale: "Standards-to-work behavior gap.",
      },
      {
        id: "cannot-connect-dots",
        label: "Employees cannot connect the dots",
        keywords: ["connect the dots", "downstream", "big picture", "cognitive"],
        archetypeId: "riley",
        rationale: "Lead Select with Cognitive Ability, then bridge to Develop Results Focus for the coachable behavior.",
      },
      {
        id: "rework",
        label: "Rework for stronger employees",
        keywords: ["rework", "clean up", "stronger employees"],
        archetypeId: "riley",
        rationale: "Strong performers absorbing rework signals a Results Focus gap in others.",
      },
      {
        id: "attendance",
        label: "No-call / no-show, attendance issues",
        keywords: ["no call", "no show", "no-call", "no-show", "attendance", "absenteeism"],
        archetypeId: "derek",
        rationale: "Dependability screen-out lives in Select; do not use Develop for basic termination stories.",
      },
    ],
  },
  {
    id: "managers",
    label: "Managers / Leaders",
    pains: [
      {
        id: "avoid-hard-conversations",
        label: "Managers avoid hard conversations",
        keywords: ["hard conversations", "difficult conversations", "avoid feedback"],
        archetypeId: "isabelle",
        rationale: "Supportive manager who won't hold the line, Influence coaching.",
      },
      {
        id: "only-positive-feedback",
        label: "Managers only give positive feedback",
        keywords: ["positive feedback", "only positive", "cheerleader"],
        archetypeId: "isabelle",
        rationale: "Caring but non-directive feedback pattern.",
      },
      {
        id: "no-accountability",
        label: "Managers do not hold accountability",
        keywords: ["accountability", "hold accountable", "performance lingers"],
        archetypeId: "isabelle",
        rationale: "Influence gap: comfort over commitment.",
      },
      {
        id: "manager-bottleneck",
        label: "Managers become bottlenecks",
        keywords: ["bottleneck", "approval", "wait for approval"],
        archetypeId: "simon",
        rationale: "Promoted IC who won't let go, Stability under pressure.",
      },
      {
        id: "ic-cannot-delegate",
        label: "Promoted ICs struggle to delegate",
        keywords: ["delegate", "delegation", "promoted", "pull work back"],
        archetypeId: "simon",
        rationale: "Classic new-manager Stability story.",
      },
      {
        id: "reactive-under-pressure",
        label: "Managers get reactive under pressure",
        keywords: ["reactive", "pressure", "frustration", "visible frustration"],
        archetypeId: "simon",
        rationale: "Stability breaks down under load, coach the response pattern.",
      },
    ],
  },
];

export const ALL_PAINS: Pain[] = PAIN_CATEGORIES.flatMap((c) => c.pains);
