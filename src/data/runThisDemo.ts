import type { ArchetypeId } from "./types";

export interface RunThisDemo {
  primaryGapLabel: string; // e.g. "Low Diligence"
  shortDefinition: string; // 1-2 sentence library card copy
  anchorOnThisPain: string;
  openThisProfile: string;
  selectPoint: string;
  developAttribute: string; // Develop point (behavior the manager coaches)
  teamDynamics: string; // Team Dynamics point (how the manager flexes)
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
      "Use Select to catch the candidate who may interview well because they are warm, likable, and relationship-oriented, but may not have the commercial drive needed to create urgency, make the direct ask, and turn positive conversations into closed business.",
    developAttribute:
      "Develop helps the manager coach the commercial behavior without asking Ethan to become pushy: connect the ask to helping the customer make a decision.",
    teamDynamics:
      "Team Dynamics shows which sellers are energized by commercial goals, competition, customer impact, or team support, so the manager can coach the same sales outcome through different motivations.",
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
      "Use Select to catch the candidate who may shine in live customer conversations, but lack the dependability and structure needed to protect the deal after the call through follow-up, documentation, and clear next steps.",
    developAttribute:
      "Develop helps the manager coach the post-call routine: follow-up, notes, next step, and opportunity update before the deal loses momentum.",
    teamDynamics:
      "Team Dynamics shows who needs more structure and inspection and who already creates structure naturally, so the manager avoids under-managing one rep and micromanaging another. Diligence does not have its own Team Dynamics page; Orderliness is the closest team-level proxy.",
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
      "Use Select to catch the candidate whose technical capability may look strong, but whose collaboration or communication style could make that expertise harder for the team to access.",
    developAttribute:
      "Develop helps the manager coach the communication impact so Caleb's expertise becomes easier for the team to access.",
    teamDynamics:
      "Team Dynamics shows how communication style affects team access to expertise, so the manager can coach collaboration without diluting technical standards.",
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
      "Use Select to pressure-test whether a candidate has the reliability, role interest, and problem-solving capacity to execute the work consistently to standard, not just look viable on experience alone.",
    developAttribute:
      "Develop helps the manager coach work-to-standard behavior: what done-right looks like, where to check quality, and when to escalate.",
    teamDynamics:
      "Team Dynamics shows who naturally drives work to standard and who needs clearer checkpoints, so managers can coach execution without treating everyone the same.",
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
      "Use Select to pressure-test whether a manager candidate who presents as supportive and people-oriented also has the directness and resilience needed to hold accountability conversations.",
    developAttribute:
      "Develop helps the manager coach direct feedback and expectation-setting without asking Isabelle to stop being supportive.",
    teamDynamics:
      "Team Dynamics shows how directness and influence vary across the team, so managers can tailor feedback, accountability, and coaching conversations.",
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
      "Use Select to catch the capable operator or promoted IC who knows the work, but may struggle to stay steady, delegate, and keep the team moving when pressure rises.",
    developAttribute:
      "Develop helps the manager coach the pressure response: staying steady, delegating clearly, and keeping the team moving instead of pulling work back.",
    teamDynamics:
      "Team Dynamics shows how people respond differently under pressure and structure, so managers can keep decision-making moving without making one person the bottleneck.",
    closeWith:
      "This is how managers coach the pressure response, establish clear decision rights, and keep the promotion paying off without losing the strong ICs on the team.",
    sayThisOutLoud:
      "Every leader who promotes ICs into management has a Simon. He was great at the work, that is why he got promoted, and under pressure the team slows down because everything routes back to him. I would not coach that as 'let go.' I would name three decisions that should live with the team, hand them off with clear decision rights, and coach him through resisting the pull-back for two weeks.",
  },
};

export const runThisDemoFor = (id: ArchetypeId) => RUN_THIS_DEMO[id];
