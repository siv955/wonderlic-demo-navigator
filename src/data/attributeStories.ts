import type { ArchetypeId } from "./types";

export interface AttributeStory {
  attribute: string;
  meaning: string;
  customerPainLanguage: string[];
  lowStory: string;
  highStory: string;
  teamDynamicsAvailable: boolean;
  teamDynamicsPath?: string;
  bestProxy?: string;
  relatedSelectSignals: string[];
  thirtySecondTalkTrack: string;
  askWonderlic: string;
  whatNotToSay: string;
  /** Optional link to canonical archetype whose Develop anchor is this attribute. */
  relatedArchetypeId?: ArchetypeId;
}

// Curated stories for the highest-leverage Develop attributes.
// Attributes not covered here fall back to a generated stub in the UI.
export const ATTRIBUTE_STORIES: AttributeStory[] = [
  {
    attribute: "Enterprising Interest",
    meaning: "Energy from persuasion, competition, and driving commercial outcomes.",
    customerPainLanguage: [
      "Our reps interview well but do not close",
      "They are nice but not hungry",
      "Pipeline looks good but revenue does not follow",
    ],
    lowStory:
      "Likable seller who softens the ask — good conversations that stall before a real next step. Coach the commercial push tied to helping the customer.",
    highStory:
      "Naturally competitive, energized by targets and closing motion. Coach discipline around discovery so urgency doesn't skip the customer's real problem.",
    teamDynamicsAvailable: true,
    teamDynamicsPath: "What Drives Us → Enterprising Interest",
    relatedSelectSignals: ["Select - Enterprising"],
    thirtySecondTalkTrack:
      "Some reps are energized by relationships; others by the ask. Develop → Enterprising Interest shows the manager which coaching move turns warm conversations into closed business.",
    askWonderlic:
      "Give me three ways to coach a relationship-first seller to create urgency without losing the customer's trust.",
    whatNotToSay:
      "Don't call low-Enterprising reps 'not sales material.' The story is coachable motivation, not disqualifying trait.",
    relatedArchetypeId: "ethan",
  },
  {
    attribute: "Diligence",
    meaning: "Follow-through, disciplined next steps, and consistent process behavior after the moment.",
    customerPainLanguage: [
      "Reps do not follow up",
      "CRM is a mess",
      "Cases do not get closed out",
      "Documentation is thin",
    ],
    lowStory:
      "Strong live, loose after — the follow-up email, the CRM note, the next-step commit slip under load. Coach repeatable post-call routines.",
    highStory:
      "Naturally disciplined about process and follow-through. Coach where that discipline can turn into rigidity or over-inspection of teammates.",
    teamDynamicsAvailable: false,
    bestProxy: "Getting Work Done Together → Orderliness (team-level proxy for process adherence)",
    relatedSelectSignals: ["Select - Dependability", "Select - Structured"],
    thirtySecondTalkTrack:
      "Some reps are great in the moment but leak the deal after the call. Develop → Diligence coaches the follow-through without a personality fight — Orderliness carries the story at the team level.",
    askWonderlic:
      "Write me a two-week coaching plan to build follow-through and CRM discipline for a rep who is warm with customers but loose with process.",
    whatNotToSay:
      "Don't use Develop to tell termination stories (no-call/no-show, theft) — that's a Select screen-out. And Orderliness is a proxy, not a rename of Diligence.",
    relatedArchetypeId: "derek",
  },
  {
    attribute: "Compassion",
    meaning: "How communication and expertise land on other people — emotional intelligence in interaction, not moral character.",
    customerPainLanguage: [
      "Our technical people are smart but hard to work with",
      "Knowledge is stuck in one person",
      "Handoffs are painful",
      "Teammates route around the expert",
    ],
    lowStory:
      "Blunt or impatient in communication — teammates avoid the expert, knowledge stays stuck. Coach the interaction pattern, not the personality.",
    highStory:
      "High attunement to how information lands. Coach where over-softening a message can obscure the standard.",
    teamDynamicsAvailable: true,
    teamDynamicsPath: "Communication & Interaction → Compassion",
    relatedSelectSignals: ["Select - Cooperation"],
    thirtySecondTalkTrack:
      "This isn't about being nicer. It's about whether the team can actually access the expertise. Develop → Compassion coaches the communication moves that unlock the value already there.",
    askWonderlic:
      "Give me three coaching moves to help a brilliant technical expert make their knowledge more accessible to their team, without softening their standards.",
    whatNotToSay:
      "Don't moralize Compassion. Say communication impact, EQ, and team access to expertise. Don't imply the expert has to become someone else.",
    relatedArchetypeId: "caleb",
  },
  {
    attribute: "Results Focus",
    meaning: "Consistent drive to complete work to standard and connect output to downstream impact.",
    customerPainLanguage: [
      "They know the work but do not always do the work",
      "The team covers gaps for someone",
      "Inconsistent execution",
      "Rework for stronger employees",
    ],
    lowStory:
      "Capable but variable output — some days dialed in, some days drifting. Coach expectations, checklist behavior, and the connection to downstream impact.",
    highStory:
      "Naturally pushes work to standard. Coach how they escalate when a teammate is drifting without becoming the enforcer.",
    teamDynamicsAvailable: true,
    teamDynamicsPath: "Getting Work Done Together → Results Focus",
    relatedSelectSignals: ["Select - Dependability", "Select - Cog"],
    thirtySecondTalkTrack:
      "Riley knows the job — the question is whether the output goes to standard every time. Develop → Results Focus makes the coaching behavior-specific, not a hiring story.",
    askWonderlic:
      "Give me three ways to coach a skilled frontline employee to consistently drive work to standard, connected to the downstream impact.",
    whatNotToSay:
      "Don't imply the employee can't do the job. If the buyer says 'can't connect the dots,' lead Select with Cognitive Ability first.",
    relatedArchetypeId: "riley",
  },
  {
    attribute: "Influence",
    meaning: "Willingness and skill to move others through direct feedback, expectation-setting, and accountability moves.",
    customerPainLanguage: [
      "Managers avoid hard conversations",
      "Only positive feedback",
      "Performance lingers",
      "No accountability",
    ],
    lowStory:
      "Caring manager who avoids the direct move. Coach the specific behavior — expectation, feedback, follow-up — without asking them to stop caring.",
    highStory:
      "Comfortable with the direct move. Coach when force lands as pressure and shuts down the team.",
    teamDynamicsAvailable: true,
    teamDynamicsPath: "Communication & Interaction → Influence",
    relatedSelectSignals: ["Select - Enterprising", "Select - Sociability"],
    thirtySecondTalkTrack:
      "This isn't 'be tougher.' It's the specific coaching moves that let a supportive manager hold a performance line without breaking the relationship.",
    askWonderlic:
      "Give me a coaching plan for a supportive manager who avoids direct feedback but needs to hold the team accountable to a performance standard.",
    whatNotToSay:
      "Don't frame supportive managers as weak. The story is a missing muscle, not a missing person.",
    relatedArchetypeId: "isabelle",
  },
  {
    attribute: "Stability",
    meaning: "Composure under pressure — response pattern when workload, ambiguity, or stakes spike.",
    customerPainLanguage: [
      "Managers get reactive under pressure",
      "Promoted IC pulls work back",
      "Visible frustration on the floor",
      "Manager becomes the bottleneck",
    ],
    lowStory:
      "Under pressure, pulls tasks back, shows visible frustration, team waits. Coach delegation and the pressure response — small behavior shifts.",
    highStory:
      "Steady under load. Coach whether calm can slide into slow-to-escalate.",
    teamDynamicsAvailable: false,
    bestProxy: "Getting Work Done Together → Your Team Approach (use to tell the low/high Stability story at the team level)",
    relatedSelectSignals: ["Select - Stress Tolerance"],
    thirtySecondTalkTrack:
      "Simon was promoted for being great at the work. Now he can't let go under pressure. Develop → Stability shows the coaching move before he becomes the bottleneck.",
    askWonderlic:
      "Give me three coaching moves for a promoted IC who is becoming a bottleneck because they can't delegate under pressure.",
    whatNotToSay:
      "Don't undermine the promotion. Talk about pressure response and delegation, not personality.",
    relatedArchetypeId: "simon",
  },
  {
    attribute: "Ambition",
    meaning: "Drive to seek stretch, growth, and higher-scope work.",
    customerPainLanguage: [
      "Employees are comfortable, not stretching",
      "No one wants the next role",
      "Bench is thin",
    ],
    lowStory:
      "Steady contributors happy in role. Coach exposure to growth without making them feel pushed out of what they're good at.",
    highStory:
      "Hungry for the next thing. Coach patience and the mastery of the current role so ambition doesn't outrun readiness.",
    teamDynamicsAvailable: false,
    bestProxy: "What Drives Us — use the closest motivational page (e.g. Enterprising Interest) as the team-level frame.",
    relatedSelectSignals: ["Select - Enterprising"],
    thirtySecondTalkTrack:
      "Not everyone wants the next rung — and that's fine. Develop → Ambition helps managers coach growth conversations that fit the person, not a generic career ladder.",
    askWonderlic:
      "Give me a coaching plan for an ambitious high performer who is getting frustrated waiting for the next opportunity.",
    whatNotToSay:
      "Don't equate low Ambition with low value. Many strongest ICs are content in role.",
  },
  {
    attribute: "Curiosity",
    meaning: "Interest in exploring, asking questions, and investigating beyond the immediate task.",
    customerPainLanguage: [
      "People do exactly what they're told, nothing more",
      "No one is investigating why",
      "Root cause never gets found",
    ],
    lowStory:
      "Executes cleanly but rarely explores. Coach permission and expectation to ask the second question.",
    highStory:
      "Naturally investigates. Coach focus so curiosity doesn't sprawl into rabbit holes.",
    teamDynamicsAvailable: false,
    bestProxy: "What Drives Us → Investigative Interest (closest team-level proxy).",
    relatedSelectSignals: ["Select - Investigative"],
    thirtySecondTalkTrack:
      "If the team never asks 'why,' root cause stays hidden. Develop → Curiosity coaches the habit of investigation without turning every task into a research project.",
    askWonderlic:
      "Give me three ways to coach a highly-executing employee to start asking 'why' without slowing down output.",
    whatNotToSay:
      "Don't confuse Curiosity with Cognitive Ability. Curiosity is inclination; Cog is capacity.",
  },
  {
    attribute: "Change Adoption",
    meaning: "Willingness and adaptability when process, tools, or org changes.",
    customerPainLanguage: [
      "Every rollout is a fight",
      "The team resists new tools",
      "We can't get change to stick",
    ],
    lowStory:
      "Comfortable with the current way. Coach the 'why' behind the change and involve them early in the transition, not the announcement.",
    highStory:
      "Eager for the new thing. Coach patience so early adopters don't leave slower teammates behind.",
    teamDynamicsAvailable: false,
    bestProxy: "Communication & Interaction — use the closest interaction page (e.g. Open-Mindedness proxy).",
    relatedSelectSignals: ["Select - Open-Mindedness"],
    thirtySecondTalkTrack:
      "Change fails when we ignore who needs the 'why' early. Develop → Change Adoption gives the manager a coaching lens for the resistant teammate before rollout day.",
    askWonderlic:
      "Give me a change-management coaching plan for a team where a handful of tenured employees are quietly resisting a new tool.",
    whatNotToSay:
      "Don't call resistant employees 'not team players.' Frame the coaching around the 'why' and their concerns.",
  },
  {
    attribute: "Assertiveness",
    meaning: "Willingness to speak up, state a position, and push back directly.",
    customerPainLanguage: [
      "People don't speak up in meetings",
      "Concerns come out after the decision is made",
      "We can't get honest pushback",
    ],
    lowStory:
      "Holds back in the moment, brings concerns later or not at all. Coach specific meeting behaviors — the prepared question, the direct ask.",
    highStory:
      "Comfortable pushing back. Coach how force lands and when to listen before pressing.",
    teamDynamicsAvailable: false,
    bestProxy: "Communication & Interaction → Influence (closest proxy for direct-communication stories).",
    relatedSelectSignals: ["Select - Enterprising"],
    thirtySecondTalkTrack:
      "The best ideas die in silence. Develop → Assertiveness coaches the behavior that turns quiet expertise into decisions that stick.",
    askWonderlic:
      "Give me three coaching moves to help a thoughtful, quieter employee contribute more directly in group decisions.",
    whatNotToSay:
      "Don't frame low Assertiveness as low confidence or low competence.",
  },
];

export const attributeStoryByName = (name: string) =>
  ATTRIBUTE_STORIES.find((s) => s.attribute === name);
