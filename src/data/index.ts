import archetypesJson from "./archetypes.json";
import profilesJson from "./profiles.json";
import attributesJson from "./attributes.json";
import type { Archetype, AttributeMeta, Profile } from "./types";

export const archetypes = archetypesJson as Archetype[];
export const profiles = profilesJson as Profile[];
export const attributes = attributesJson as AttributeMeta[];

export const archetypeById = (id: string) => archetypes.find((a) => a.id === id);
export const profileById = (id: string) => profiles.find((p) => p.id === id);

export * from "./types";
export * from "./painMappings";

export const TALK_TRACKS: Record<
  string,
  { short: string; long: string; askWonderlic: string; screensToShow: string[]; screensToSkip: string[]; cautions: string[] }
> = {
  ethan: {
    short:
      "Meet Ethan. He interviews well and prospects love him, but pipeline stalls at the ask. Develop shows the manager which specific coaching move turns those warm conversations into closed business.",
    long:
      "Ethan is the seller everyone likes. Warm, trusted, gets meetings. The problem is he doesn't naturally lean into commercial urgency, the ask goes soft, next steps drift, and the pipeline looks healthier than the forecast. On the Select side, Enterprising Interest, Sociability, and Cooperation screen him in as a promising rep. On the Develop side, opening Enterprising Interest exposes the specific behavior his manager needs to coach: connect the commercial push to helping the customer. Team Dynamics → What Drives Us → Enterprising Interest lets the buyer see the manager coaching different motivations toward the same revenue outcome. The story is 'coachable seller,' not 'wrong hire.'",
    askWonderlic:
      "Give me three ways to coach a relationship-first seller to create urgency without losing the customer's trust.",
    screensToShow: [
      "Select: Enterprising Interest, Sociability, Cooperation, Dependability",
      "Develop: Enterprising Interest attribute page",
      "Team Dynamics → What Drives Us → Enterprising Interest",
    ],
    screensToSkip: ["Index (unless the buyer is IO / consultant / technical L&D)", "Action Planner deep-dive"],
    cautions: [
      "Do not paint Ethan as a bad sales fit, the story is coachable, not disqualifying.",
      "Avoid moralizing about 'hunger', talk about motivation, not personality.",
    ],
  },
  derek: {
    short:
      "Meet Derek. He's likable, keeps customers happy, but follow-up is inconsistent, CRM is thin, and next steps drift. Develop → Diligence lets the manager coach the behavior without a personality fight.",
    long:
      "Derek's problem is not attitude. He wants to do good work. But under load he skips the small disciplined moves: the follow-up email, the CRM update, the case-close note. That gap costs the company forecast accuracy, customer trust, and momentum. Select surfaces the risk through Dependability, Structured Interest, and Enterprising Interest. Develop opens Diligence to make the coaching concrete, this is what disciplined follow-through looks like, and here's how a manager coaches it. Team Dynamics → Getting Work Done Together → Orderliness carries the story at the team level (Diligence doesn't have a dedicated Team Dynamics page, Orderliness is the correct team-level proxy). The pitch is not 'find a more organized rep', it's 'coach the follow-through you already have.'",
    askWonderlic:
      "Write me a two-week coaching plan to build follow-through and CRM discipline for a rep who is warm with customers but loose with process.",
    screensToShow: [
      "Select: Dependability, Structured Interest, Enterprising Interest, Sociability",
      "Develop: Diligence attribute page",
      "Team Dynamics → Getting Work Done Together → Orderliness",
    ],
    screensToSkip: ["Do not open a standalone Diligence Team Dynamics page, it does not exist in this flow"],
    cautions: [
      "Do not use Develop to tell termination stories (no-call / no-show, theft), that's a Select screen-out.",
      "Orderliness is the team-level proxy, not a rename of Diligence. Say that clearly.",
    ],
  },
  caleb: {
    short:
      "Meet Caleb. He's the technical expert everyone needs, and no one wants to work with. Develop → Compassion coaches the communication impact so his expertise becomes accessible to the team.",
    long:
      "Caleb is valuable. He solves the hard problems. But teammates route around him, handoffs stall, and knowledge stays stuck in one head. That's a Compassion story, not a moral one, a communication one. Select surfaces the pattern through Cooperation, Sociability, Open-Mindedness, and the technical Interests. Develop opens Compassion so the manager can coach specific interpersonal moves, acknowledging impact, slowing down, inviting questions, without asking Caleb to become someone he's not. Team Dynamics → Communication & Interaction → Compassion shows how the same expertise plays across a team with different comfort levels. Frame it as unlocking the value that's already there.",
    askWonderlic:
      "Give me three coaching moves to help a brilliant technical expert make their knowledge more accessible to their team, without softening their standards.",
    screensToShow: [
      "Select: Cooperation, Sociability, Open-Mindedness, Investigative Interest, Applied Interest",
      "Develop: Compassion attribute page",
      "Team Dynamics → Communication & Interaction → Compassion",
    ],
    screensToSkip: ["Do not moralize Compassion, no 'nice person' framing"],
    cautions: [
      "Do not talk about Compassion as being nicer. Talk about communication impact, EQ, and team access to expertise.",
      "Do not imply the expert needs to change who they are, coach the interaction pattern.",
    ],
  },
  riley: {
    short:
      "Meet Riley. She knows the work, she just doesn't consistently drive it to standard. Develop → Results Focus coaches the observable behavior without questioning her ability.",
    long:
      "Riley can do the job. That's not the question. The question is whether the work goes out to standard, every time, connected to what happens downstream. Select carries Dependability, Structured Interest, Applied Interest, and, when the buyer says 'they can't connect the dots', Cognitive Ability leads. Develop opens Results Focus to make the coaching behavior-specific: what does 'to standard' look like on this line, and how does the manager reinforce it? Team Dynamics → Getting Work Done Together → Results Focus shows the team-level pattern, some employees drive the standard, some drift, and the manager's job is to close the gap. Not a hiring story, a coaching story.",
    askWonderlic:
      "Give me three ways to coach a skilled frontline employee to consistently drive work to standard, connected to the downstream impact.",
    screensToShow: [
      "Select: Dependability, Structured Interest, Applied Interest, Cognitive Ability",
      "Develop: Results Focus attribute page",
      "Team Dynamics → Getting Work Done Together → Results Focus",
    ],
    screensToSkip: ["Index (unless technical L&D / IO)"],
    cautions: [
      "If the buyer says 'can't connect the dots,' lead Select with Cognitive Ability, then bridge to Develop.",
      "Don't imply the employee can't do the job, the whole story is coachable behavior.",
    ],
  },
  isabelle: {
    short:
      "Meet Isabelle. She's the supportive manager everyone loves, and the one performance issues linger under. Develop → Influence coaches direct feedback without asking her to stop caring.",
    long:
      "Isabelle is the caring manager. Her team trusts her. That's real. What's missing is the direct move, the hard feedback, the clear expectation, the documented conversation. Performance issues drift because comfort wins over commitment. Select surfaces the pattern through Enterprising Interest, Stress Tolerance, Sociability, Cooperation, Supportive Interest, and Dependability. Develop opens Influence to make the coaching concrete: how does a supportive leader deliver direct feedback without breaking the relationship? Team Dynamics → Communication & Interaction → Influence shows the same manager coaching a team with different sensitivities. The pitch is 'add the direct muscle,' not 'replace the leader.'",
    askWonderlic:
      "Give me a coaching plan for a supportive manager who avoids direct feedback but needs to hold the team accountable to a performance standard.",
    screensToShow: [
      "Select: Enterprising Interest, Stress Tolerance, Sociability, Cooperation, Supportive Interest, Dependability",
      "Develop: Influence attribute page",
      "Team Dynamics → Communication & Interaction → Influence",
    ],
    screensToSkip: ["Index (unless IO / consultant audience)"],
    cautions: [
      "Don't frame supportive managers as weak, the story is a missing muscle, not a missing person.",
      "Feedback delivery is coachable, say that.",
    ],
  },
  simon: {
    short:
      "Meet Simon. Strong IC, newly promoted, becoming the bottleneck. Develop → Stability lets the manager coach the delegation and pressure response before it costs the team.",
    long:
      "Simon was promoted for being great at the work. Now he can't let go. Under pressure he pulls tasks back, shows visible frustration, and the team waits for his approval. Select surfaces the pattern through Stress Tolerance, Open-Mindedness, Dependability, and Structured Interest. Develop opens Stability to coach the delegation move and the pressure response, small behavior shifts that unblock the team without asking Simon to lower his standards. Team Dynamics doesn't have a standalone Stability page in this flow, use Getting Work Done Together → Your Team Approach to tell the low/high Stability story at the team level. Frame it as 'promote and coach,' not 'we hired wrong.'",
    askWonderlic:
      "Give me three coaching moves for a promoted IC who is becoming a bottleneck because they can't delegate under pressure.",
    screensToShow: [
      "Select: Stress Tolerance, Open-Mindedness, Dependability, Structured Interest",
      "Develop: Stability attribute page",
      "Team Dynamics → Getting Work Done Together → Your Team Approach",
    ],
    screensToSkip: ["Do not open a standalone Stability Team Dynamics page, use Your Team Approach"],
    cautions: [
      "Don't undermine the promotion, the story is coaching, not miscasting.",
      "Talk about pressure response and delegation behaviors, not personality.",
    ],
  },
};
