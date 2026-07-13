import type { ArchetypeId } from "./types";

export interface RunThisDemo {
  primaryGapLabel: string; // e.g. "Low Diligence"
  shortDefinition: string; // 1-2 sentence library card copy
  anchorOnThisPain: string;
  openThisProfile: string;
  selectPoint: string;
  developAttribute: string; // e.g. "Low Diligence"
  teamDynamics: string;
  closeWith: string;
  sayThisOutLoud: string; // 3-5 sentence Becca-style talk track
}

export const RUN_THIS_DEMO: Record<ArchetypeId, RunThisDemo> = {
  ethan: {
    primaryGapLabel: "Low Enterprising Interest",
    shortDefinition:
      "Relationship-first seller who builds trust and keeps prospects engaged, but struggles to create urgency, make the direct ask, and turn positive conversations into decisions.",
    anchorOnThisPain:
      "Reps interview well and build pipeline, but deals stall before the ask and forecast confidence is weak.",
    openThisProfile: "Ethan Miller",
    selectPoint:
      "Pressure-test whether the candidate pairs the relational strengths with real pull toward commercial action, so warm conversations actually convert.",
    developAttribute: "Low Enterprising Interest",
    teamDynamics: "What Drives Us → Enterprising Interest",
    closeWith:
      "This is how managers protect a likable rep, coach the ask with specific language, and turn a healthy-looking pipeline into predictable revenue.",
    sayThisOutLoud:
      "Every sales leader knows an Ethan. Prospects like him, the calendar stays full, and the meetings feel productive, but the deal never quite lands. I would not coach that as 'be more aggressive.' I would coach the ask itself, connected to helping the customer make a decision, because that is the specific behavior that is actually costing revenue.",
  },
  derek: {
    primaryGapLabel: "Low Diligence",
    shortDefinition:
      "Customer-facing rep who is strong live, but loses momentum after the interaction through weak follow-up, thin notes, unclear next steps, or poor CRM hygiene.",
    anchorOnThisPain:
      "Strong live conversations are not turning into clean next steps, and deals leak between meetings.",
    openThisProfile: "Derek Brooks",
    selectPoint:
      "Inspect whether the candidate has both live customer-facing strengths and the work habits to protect the deal after the call.",
    developAttribute: "Low Diligence",
    teamDynamics: "Getting Work Done Together → Orderliness",
    closeWith:
      "This is how managers protect deal momentum, clean up pipeline visibility, and stop chasing reps for basic follow-through.",
    sayThisOutLoud:
      "Every sales leader has a Derek. The call goes well, the customer is engaged, and then the deal leaks after the meeting. The follow-up is late, the notes are thin, and the next step is not clean. I would not coach that as 'be more organized.' I would coach the routine after the call, because that is where the deal is either protected or lost.",
  },
  caleb: {
    primaryGapLabel: "Low Compassion",
    shortDefinition:
      "Technical expert who is smart and valuable, but whose communication style makes the expertise harder for teammates to access.",
    anchorOnThisPain:
      "Top experts hold critical knowledge, but teammates route around them, handoffs stall, and knowledge stays in one head.",
    openThisProfile: "Caleb Turner",
    selectPoint:
      "This helps separate a brilliant IC from a brilliant IC who scales, without questioning the expertise itself.",
    developAttribute: "Low Compassion",
    teamDynamics: "Communication & Interaction → Compassion",
    closeWith:
      "This is how managers coach how the expertise lands, unlock the value that is already on the team, and make handoffs less painful.",
    sayThisOutLoud:
      "Every technical leader has a Caleb. He solves the hard problems and holds the standard, and he is also the person the team routes around. I would not coach that as 'be nicer.' I would coach the communication moves, slowing down, inviting questions, acknowledging impact, because that is what turns his expertise into something the whole team can actually use.",
  },
  riley: {
    primaryGapLabel: "Low Results Focus",
    shortDefinition:
      "Skilled frontline worker who can do the work, but does not consistently drive execution to standard, creating rework or extra inspection.",
    anchorOnThisPain:
      "Tenured frontline employees know the work, but do not consistently drive it to standard, and stronger teammates carry the gap.",
    openThisProfile: "Riley Parker",
    selectPoint:
      "This can help separate 'can do the work' from 'consistently does the work to standard,' which tenure often hides.",
    developAttribute: "Low Results Focus",
    teamDynamics: "Getting Work Done Together → Results Focus",
    closeWith:
      "This is how managers make the standard clear and inspectable, close the reliability gap, and give strong employees and manager time back.",
    sayThisOutLoud:
      "Every frontline manager has a Riley. He knows the equipment, teammates depend on him, and the work still goes out unevenly. I would not coach that as 'try harder.' I would define what 'to standard' looks like on this line in three specific checks, and coach him through those checks until he owns them, because that is the behavior the manager can actually reinforce.",
  },
  isabelle: {
    primaryGapLabel: "Low Influence",
    shortDefinition:
      "Supportive manager who builds trust, but avoids direct accountability conversations, which allows performance issues to linger.",
    anchorOnThisPain:
      "Supportive managers are trusted by their teams, but performance issues linger because the direct conversation is delayed or softened.",
    openThisProfile: "Isabelle Martin",
    selectPoint:
      "This is a screen-in angle for supportive leaders who also carry the accountability muscle, not a way to screen supportive leaders out.",
    developAttribute: "Low Influence",
    teamDynamics: "Communication & Interaction → Influence",
    closeWith:
      "This is how managers keep the trust supportive leaders build, add the direct muscle on top, and protect strong employees by making accountability consistent.",
    sayThisOutLoud:
      "Every leader of managers has an Isabelle. Her team trusts her, engagement is strong, and performance issues drift for months. I would not coach that as 'be tougher.' I would coach the specific direct conversation, one clear sentence delivered in the first five minutes, so she can use the trust she has already built to hold the standard without breaking the relationship.",
  },
  simon: {
    primaryGapLabel: "Low Stability",
    shortDefinition:
      "Capable manager with high standards who becomes reactive, controlling, or bottlenecked under pressure.",
    anchorOnThisPain:
      "Promoted-IC managers pull work back under pressure, decision speed slows, and the team waits on approval for work they should own.",
    openThisProfile: "Simon Grant",
    selectPoint:
      "This helps separate 'great at the work' from 'great at leading the work,' especially for promoted ICs stepping into pressure.",
    developAttribute: "Low Stability",
    teamDynamics: "Getting Work Done Together → Your Team Approach",
    closeWith:
      "This is how managers coach the pressure response, establish clear decision rights, and keep the promotion paying off without losing the strong ICs on the team.",
    sayThisOutLoud:
      "Every leader who promotes ICs into management has a Simon. He was great at the work, that is why he got promoted, and under pressure the team slows down because everything routes back to him. I would not coach that as 'let go.' I would name three decisions that should live with the team, hand them off with clear decision rights, and coach him through resisting the pull-back for two weeks.",
  },
};

export const runThisDemoFor = (id: ArchetypeId) => RUN_THIS_DEMO[id];
