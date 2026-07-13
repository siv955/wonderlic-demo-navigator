import type { ArchetypeId } from "./types";

export interface ProductMoment {
  whatItDoes: string; // A. What this part of the demo is doing
  whatToShow: string[]; // B. What to show (click/screen guidance)
  inYourOwnWords: string[]; // C. In your own words, make these points
  exampleScript: string; // D. Example script (spoken talk track)
  valueTieBack: string; // E. Value tie-back
  caution: string; // F. Caution
}

export interface DevelopMoment extends ProductMoment {
  askWonderlicPrompt: string;
}

export interface TeamDynamicsMoment extends ProductMoment {
  pageToOpen: string;
  proxyNote?: string;
}

export interface ProductMoments {
  select: ProductMoment;
  develop: DevelopMoment;
  teamDynamics: TeamDynamicsMoment;
  quickDiscovery: {
    triggers: string[];
    clarifyingQuestion: string;
  };
}

const SELECT_WHAT_IT_DOES =
  "Select helps hiring teams evaluate candidates against the requirements of a specific job. Candidates complete Wonderlic, and the platform translates cognitive ability, personality, and motivation into a job-specific fit read.";
const DEVELOP_WHAT_IT_DOES =
  "Develop helps managers and employees focus on the behaviors most worth improving in the context of the person and the role.";
const TD_WHAT_IT_DOES =
  "Team Dynamics helps managers see how the same behavior or motivation shows up across the team, so they can adapt coaching instead of managing everyone the same way.";

export const PRODUCT_MOMENTS: Record<ArchetypeId, ProductMoments> = {
  ethan: {
    quickDiscovery: {
      triggers: [
        "Our reps interview great but the numbers do not follow.",
        "Pipeline looks healthy, forecast does not land.",
        "Prospects love the meetings and then ghost.",
        "Reps struggle to create urgency.",
        "Deals stall right before the ask.",
        "The team is relational, we need more push.",
        "Next steps are vague or self-imposed.",
        "Discovery is strong, close rates are weak.",
      ],
      clarifyingQuestion:
        "Are deals stalling because reps are not creating urgency during the conversation, or because follow-up breaks down after the conversation? If it is the first, this is Ethan. If it is the second, it is Derek.",
    },
    select: {
      whatItDoes: SELECT_WHAT_IT_DOES,
      whatToShow: [
        "Open the relevant sales job opening.",
        "Show the candidate ranking or fit score view.",
        "Open Ethan's individual candidate result.",
        "Point to the balance between relationship-oriented signals and commercial drive.",
        "Use Candidate Compare to contrast Ethan with a stronger commercial profile if it supports the point.",
      ],
      inYourOwnWords: [
        "Interviews reward the person prospects enjoy talking to, which is exactly why this pattern keeps slipping through.",
        "Select does not decide the hire. It shows the hidden risk the interview may miss.",
        "The question is not whether the candidate is likable. It is whether they will create commercial movement.",
        "Related Select signals are directional story inputs, not one-to-one equivalents.",
      ],
      exampleScript:
        "On the Select side, I would use Ethan's story to show why interviews can be misleading in sales. Ethan is the candidate a hiring manager may really like. He is warm, he creates trust, and the conversation feels good. But the pain you described is not whether prospects enjoy the conversation. It is whether the rep creates urgency, asks directly for commitment, and turns a positive meeting into a real next step. So I would use Select to pressure-test the relationship side and the commercial drive together. That helps you catch the person who might have made it through the interview process but recreated the same stalled-pipeline issue you are trying to solve.",
      valueTieBack:
        "This helps the customer avoid hiring reps who are easy to like but unlikely to create the commercial movement needed to close deals and hit quota.",
      caution:
        "Do not imply Select makes the hiring decision, and do not walk every score. Use it to pressure-test the pattern that connects to the pain.",
    },
    develop: {
      whatItDoes: DEVELOP_WHAT_IT_DOES,
      whatToShow: [
        "Open Ethan's individual Develop profile.",
        "Start with a relationship-oriented strength before opening the gap.",
        "Open the Enterprising Interest attribute page.",
        "Point to the coaching guidance and suggested actions on that attribute.",
        "Use Ask Wonderlic live to turn the insight into manager language.",
        "Reference Action Planner lightly unless the customer cares about goal tracking or manager follow-through.",
      ],
      inYourOwnWords: [
        "Enterprising Interest explains the difference between being good with people and being energized by commercial action.",
        "The coaching is not 'be more aggressive.' It is 'connect the ask to helping the customer make a decision.'",
        "Prepare one direct ask before each call, tie it to customer value, confirm the next step before the meeting ends.",
        "This is a behavior the manager can inspect week to week, not a personality critique.",
      ],
      exampleScript:
        "If Ethan is already on the team, I would not coach this as 'be more aggressive.' That is vague, and it can feel like personality feedback. Develop helps the manager make this much more specific. The coaching becomes: how do we help Ethan connect the ask to helping the customer move forward? Before the call, decide the one direct question you need to ask. During the call, tie that ask to the business problem the customer already shared. Before the call ends, confirm the next step. That is a behavior the manager can coach and inspect.",
      askWonderlicPrompt:
        "Give me three ways to coach a relationship-first seller to create urgency and hold a commercial line without losing the customer's trust. Include one script for the next prospect call.",
      valueTieBack:
        "This gives managers a practical way to turn positive conversations into clearer commitments without asking the rep to become someone they are not.",
      caution:
        "Do not imply Develop 'fixes' Enterprising Interest, and do not overuse Action Planner unless the customer cares about goal tracking.",
    },
    teamDynamics: {
      whatItDoes: TD_WHAT_IT_DOES,
      pageToOpen: "What Drives Us → Enterprising Interest",
      whatToShow: [
        "Open the correct team.",
        "Open the What Drives Us section.",
        "Open the Enterprising Interest page.",
        "Point to the spread across the team, not just the lowest person.",
        "Show how a manager might coach the same commercial outcome through different motivations.",
      ],
      inYourOwnWords: [
        "Some sellers respond to the scoreboard, others need the ask connected to customer impact or team contribution.",
        "The manager still needs the same sales outcome, the path to get there may differ by rep.",
        "This is a coaching map, not a way to label one person as the weak link.",
      ],
      exampleScript:
        "At the individual level, Ethan helps us understand one seller. At the team level, this page helps the manager stop coaching every seller with the same speech. Some reps respond to the scoreboard. Some need the commercial action connected to customer impact. The manager's job is not to turn everyone into the same person. It is to get the same sales outcome through the motivation that actually works for each rep.",
      valueTieBack:
        "This helps managers scale sales coaching across the team instead of rediscovering each rep's motivation through trial and error.",
      caution:
        "Do not make Team Dynamics about identifying one outlier. The value is manager flexibility across the team.",
    },
  },

  derek: {
    quickDiscovery: {
      triggers: [
        "CRM does not reflect reality.",
        "Reps are great on calls but terrible at follow-up.",
        "Deals stall between meetings.",
        "Next steps are always vague.",
        "Managers are chasing reps for updates.",
        "Customers say nobody got back to them.",
        "Handoffs to CS or ops go sideways because there is no context.",
        "Reps drop the ball on renewals and expansion.",
      ],
      clarifyingQuestion:
        "When you say the rep is dropping the ball, is it that they do not create urgency in the conversation, or that follow-up and documentation fall apart after? First one is Ethan, second one is Derek.",
    },
    select: {
      whatItDoes: SELECT_WHAT_IT_DOES,
      whatToShow: [
        "Open the relevant sales or customer-facing job opening.",
        "Show the candidate ranking or fit score view.",
        "Open Derek's individual candidate result.",
        "Point to the live-conversation strengths alongside dependability and structure signals.",
        "Use Candidate Compare if it helps contrast the live-vs-follow-through pattern.",
      ],
      inYourOwnWords: [
        "The interview measures the live conversation, not the follow-up two days later.",
        "This is where Select helps before follow-through becomes a management problem.",
        "The question is not whether the candidate is engaging, it is whether the deal is protected after the call.",
        "Related Select signals are directional story inputs, not one-to-one equivalents.",
      ],
      exampleScript:
        "This is where Select helps before follow-through becomes a management problem. Derek may look good in an interview because he is engaging and comfortable with people. But the issue you described is not the live interaction. It is what happens after the meeting or customer conversation. Does the follow-up go out? Are the notes clear? Is the next step documented? Does CRM reflect reality? In Select, I would inspect the customer-facing strengths and the work habits together, because that is how you catch someone who may impress in the interview but recreate the same follow-through problem you are already trying to solve.",
      valueTieBack:
        "This helps the customer avoid hiring people who create activity but do not protect the process after the interaction.",
      caution:
        "Do not walk every score, and do not label Derek as lazy. Use Select to pressure-test the pattern behind the pain.",
    },
    develop: {
      whatItDoes: DEVELOP_WHAT_IT_DOES,
      whatToShow: [
        "Open Derek's individual Develop profile.",
        "Start with a live-conversation strength before opening the gap.",
        "Open the Diligence attribute page.",
        "Point to the coaching guidance and suggested actions.",
        "Use Ask Wonderlic to generate a two-week coaching routine.",
        "Reference Action Planner only if goal tracking or follow-through is a stated pain.",
      ],
      inYourOwnWords: [
        "The coaching is not 'be more organized.' It is a specific post-call routine.",
        "Diligence is about closing the loop while the conversation is still fresh.",
        "Fifteen minutes after every call: notes, follow-up, next step, opportunity update.",
        "This is a routine the manager can inspect until it becomes a habit.",
      ],
      exampleScript:
        "If Derek is already on the team, I would not coach this as 'be more organized.' He has probably heard that already, and it is too vague to change behavior. Develop helps the manager coach the actual routine. After every customer conversation, block 15 minutes. Log the notes, send the follow-up, confirm the next step, and update the opportunity or case while it is still fresh. That turns the coaching from a personality critique into a behavior the manager can inspect.",
      askWonderlicPrompt:
        "Write a two-week coaching plan to build follow-through and CRM discipline for a rep who is warm live but loose on the routine after the call.",
      valueTieBack:
        "This gives managers a repeatable way to protect deal momentum, customer trust, and pipeline visibility.",
      caution:
        "Do not frame Diligence as a personality trait, and do not over-demo Action Planner unless the customer cares about action tracking.",
    },
    teamDynamics: {
      whatItDoes: TD_WHAT_IT_DOES,
      pageToOpen: "Getting Work Done Together → Orderliness",
      proxyNote:
        "Diligence does not have a Team Dynamics deep-dive page. Orderliness is the closest team-level proxy. State this once, then return to the story.",
      whatToShow: [
        "Open the correct team.",
        "Open Getting Work Done Together.",
        "Open the Orderliness page as the proxy for Diligence.",
        "Point to the spread between people who create structure and people who need it built for them.",
      ],
      inYourOwnWords: [
        "Some people naturally build their own routines, others need the manager to build them.",
        "If you manage everyone the same way, the structured ones feel micromanaged and the loose ones stay loose.",
        "Orderliness is a team-level proxy for process discipline, not a rename of Diligence.",
      ],
      exampleScript:
        "At the individual level, Derek is a follow-through story. At the team level, Orderliness helps the manager understand who needs more structure and who already creates it naturally. Derek may need a post-call checklist and more inspection until the habit is built. Another rep may already have that structure and need room to run. The value is that the manager is not treating everyone the same.",
      valueTieBack:
        "This helps managers avoid under-managing the people who need structure and over-managing the people who already have it.",
      caution:
        "Do not claim Orderliness and Diligence are the same attribute. Call the proxy out, then move on.",
    },
  },

  caleb: {
    quickDiscovery: {
      triggers: [
        "Someone is smart but hard to work with.",
        "Expertise is hard for teammates to access.",
        "Handoffs are painful.",
        "Teammates avoid the expert.",
        "Knowledge is stuck in one person.",
        "Technical standards are high, but collaboration is slow.",
      ],
      clarifyingQuestion:
        "Is the issue how the expertise lands with teammates, or is it inconsistent execution on the work itself? First is Caleb, second is more likely Riley.",
    },
    select: {
      whatItDoes: SELECT_WHAT_IT_DOES,
      whatToShow: [
        "Open the relevant technical job opening.",
        "Show the candidate ranking or fit score view.",
        "Open Caleb's individual candidate result.",
        "Point to the technical fit alongside the collaboration and communication signals.",
        "Use Candidate Compare if it helps contrast raw expertise with team accessibility.",
      ],
      inYourOwnWords: [
        "A strong technical interview measures the work, not always how the expertise moves through the team.",
        "The question is not only whether the person is smart, it is whether the team can access what they know.",
        "Handoffs and communication style are hiring risks too, not just personality quirks.",
        "Related Select signals are directional story inputs, not one-to-one equivalents.",
      ],
      exampleScript:
        "Caleb is a good example of why a strong technical interview is not always the whole story. A candidate may know the work, solve hard problems, and impress the technical interviewer. But the pain you described is not only whether the person is smart. It is whether the team can access that expertise. Will handoffs work? Will teammates ask for help? Will the person explain decisions in a way others can use? In Select, I would inspect the technical fit and the collaboration signals together, so you are not hiring expertise that becomes trapped behind friction.",
      valueTieBack:
        "This helps the customer avoid hiring someone who adds capability on paper but slows the team down in practice.",
      caution:
        "Do not moralize Compassion or call the candidate a bad person. Talk about communication impact, not character.",
    },
    develop: {
      whatItDoes: DEVELOP_WHAT_IT_DOES,
      whatToShow: [
        "Open Caleb's individual Develop profile.",
        "Start with technical strengths before opening the gap.",
        "Open the Compassion attribute page.",
        "Point to coaching guidance focused on communication impact, not on character.",
        "Use Ask Wonderlic to generate specific coaching moves the manager can use.",
      ],
      inYourOwnWords: [
        "This is not about whether Caleb cares, it is about how the expertise lands with teammates.",
        "Coach specific communication moves: explain reasoning before conclusions, check for understanding, invite questions.",
        "The goal is unlocking the value that already exists on the team, not softening the standards.",
      ],
      exampleScript:
        "If Caleb is already on the team, I would not make this personal by saying 'you lack empathy.' That is not the point. The point is that his expertise is valuable, but the way it lands may make teammates less likely to ask questions, escalate early, or learn from him. Develop helps the manager coach the communication behavior: explain the reasoning, check for understanding, and make the expertise easier for the team to access.",
      askWonderlicPrompt:
        "Give me three coaching moves to help a strong technical expert make their knowledge more accessible to their team, without softening their standards.",
      valueTieBack:
        "This helps the customer turn individual expertise into team capability instead of letting knowledge become a bottleneck.",
      caution:
        "Do not imply Develop rewires personality. Coach the interaction pattern, not who the person is.",
    },
    teamDynamics: {
      whatItDoes: TD_WHAT_IT_DOES,
      pageToOpen: "Communication & Interaction → Compassion",
      whatToShow: [
        "Open the correct team.",
        "Open Communication & Interaction.",
        "Open the Compassion page.",
        "Point to how communication style varies across the team.",
      ],
      inYourOwnWords: [
        "Some people naturally adjust tone and check in, others are more direct or task-first.",
        "The manager can coach collaboration without lowering technical standards.",
        "This is not about labeling one person as difficult, it is about how expertise moves through the team.",
      ],
      exampleScript:
        "At the team level, this is not about labeling one person as difficult. It is about helping the manager see how communication style affects whether expertise moves through the team. Some people naturally soften the message and check for understanding. Others may be technically right but harder to approach. The manager can use this to coach collaboration without diluting the standard of the work.",
      valueTieBack:
        "This helps managers reduce friction, improve handoffs, and make technical knowledge easier for the team to use.",
      caution:
        "Do not make this a story about the one difficult person. Keep it about team-wide manager flexibility.",
    },
  },

  riley: {
    quickDiscovery: {
      triggers: [
        "Employees know the work but do not consistently do it to standard.",
        "Production or shipping mistakes create rework.",
        "Output is inconsistent.",
        "Managers over-inspect.",
        "Stronger employees clean up the mistakes.",
        "People miss downstream impact.",
      ],
      clarifyingQuestion:
        "Is the issue truly whether they can do the work, or whether they consistently drive it to standard? If it is capability, lead with Select and Cognitive Ability. If it is consistency, this is Riley.",
    },
    select: {
      whatItDoes: SELECT_WHAT_IT_DOES,
      whatToShow: [
        "Open the relevant frontline job opening.",
        "Show the candidate ranking or fit score view.",
        "Open Riley's individual candidate result.",
        "Point to reliability, role interest, and problem-solving signals together.",
        "Use Candidate Compare if experience-heavy candidates need to be pressure-tested against fit-heavy candidates.",
      ],
      inYourOwnWords: [
        "Experience on paper is not the same as reliably executing to standard.",
        "Select helps pressure-test the fit signals before the team is carrying rework or over-inspection.",
        "The question is not can they do it once, it is can they do it consistently.",
        "Related Select signals are directional story inputs, not one-to-one equivalents.",
      ],
      exampleScript:
        "For Riley, I would use Select to show how Wonderlic helps before inconsistent execution becomes a supervisor problem. Someone may have done similar work before, or may sound comfortable in the interview, but the real question is whether they can reliably execute this role to standard. Will they follow the process? Will they care about the hands-on work? Can they connect their task to the downstream impact? Select helps pressure-test those role-fit signals before the team is carrying the cost through rework, over-inspection, or stronger employees cleaning up mistakes.",
      valueTieBack:
        "This helps the customer avoid hiring people who look workable on experience but create inconsistency and rework once they are on the floor.",
      caution:
        "Do not imply Select proves who will perform. Use it to pressure-test the pattern behind the pain.",
    },
    develop: {
      whatItDoes: DEVELOP_WHAT_IT_DOES,
      whatToShow: [
        "Open Riley's individual Develop profile.",
        "Start with a role-relevant strength before opening the gap.",
        "Open the Results Focus attribute page.",
        "Point to coaching guidance focused on work-to-standard behavior.",
        "Use Ask Wonderlic to translate the insight into a coaching routine.",
      ],
      inYourOwnWords: [
        "The coaching is not 'try harder.' It is defining what done-right looks like on this line.",
        "Create quality checkpoints so Riley can inspect the work before passing it downstream.",
        "Make escalation expectations clear so guessing does not create rework.",
        "This is a behavior a supervisor can reinforce, not a personality change.",
      ],
      exampleScript:
        "If Riley is already on the team, I would not coach this as 'try harder.' That does not help a frontline employee understand what needs to change. Develop helps the manager make the expectation concrete. What does done-right look like? Where should Riley check quality before passing the work downstream? When should they escalate instead of guessing? That turns inconsistent execution into a coachable work-to-standard conversation.",
      askWonderlicPrompt:
        "Give me three ways to coach a skilled frontline employee to consistently drive the work to standard, connected to the downstream impact.",
      valueTieBack:
        "This helps managers reduce rework and over-inspection by coaching the specific execution behavior that affects quality.",
      caution:
        "Do not position Develop as fixing cognitive ability. If capability is the real issue, that belongs in Select.",
    },
    teamDynamics: {
      whatItDoes: TD_WHAT_IT_DOES,
      pageToOpen: "Getting Work Done Together → Results Focus",
      whatToShow: [
        "Open the correct team.",
        "Open Getting Work Done Together.",
        "Open the Results Focus page.",
        "Point to the spread across the team, not just the lowest score.",
      ],
      inYourOwnWords: [
        "Some employees naturally drive work to completion and check outcomes, others need clearer standards and checkpoints.",
        "The goal is not to shame the lower-scoring person, it is to manage execution more intentionally.",
        "Some people only need the outcome and room to run, others need the standard broken down.",
      ],
      exampleScript:
        "At the team level, Results Focus helps the manager understand who naturally drives the work to standard and who needs clearer checkpoints. The goal is not to shame the lower-scoring person. The goal is to manage execution more intentionally. Some employees may only need the outcome and room to run. Others may need the standard broken down, with clearer inspection points and escalation rules.",
      valueTieBack:
        "This helps managers protect quality and consistency without over-inspecting every person the same way.",
      caution:
        "Do not make Team Dynamics about one outlier. Keep it about how the manager flexes across the team.",
    },
  },

  isabelle: {
    quickDiscovery: {
      triggers: [
        "Managers avoid hard conversations.",
        "Managers only give positive feedback.",
        "Managers are supportive but do not hold accountability.",
        "Performance issues linger.",
        "Expectations are unclear.",
        "Documentation and follow-through are inconsistent.",
      ],
      clarifyingQuestion:
        "Is the manager avoiding the hard conversation, or becoming reactive and controlling under pressure? First is Isabelle, second is Simon.",
    },
    select: {
      whatItDoes: SELECT_WHAT_IT_DOES,
      whatToShow: [
        "Open the relevant manager or team-lead job opening.",
        "Show the candidate ranking or fit score view.",
        "Open Isabelle's individual candidate result.",
        "Point to the people-oriented signals alongside directness, resilience, and follow-through signals.",
      ],
      inYourOwnWords: [
        "Manager hiring cannot stop at 'people like them.'",
        "A manager can be trusted and still avoid the conversation that needs to happen.",
        "Select helps pressure-test whether a supportive style is paired with the muscle to hold accountability.",
        "Related Select signals are directional story inputs, not one-to-one equivalents.",
      ],
      exampleScript:
        "Isabelle is a good example of why manager hiring cannot stop at 'people like her.' That matters, but the pain you described is about accountability. A manager can be supportive, trusted, and easy to work with, and still avoid the conversation that actually needs to happen. In Select, I would pressure-test the people orientation alongside the signals that tell us whether this person is likely to address performance directly, stay steady in a difficult conversation, and follow through on expectations.",
      valueTieBack:
        "This helps the customer avoid promoting or hiring managers who create trust but leave performance issues unresolved.",
      caution:
        "Do not imply Select is a manager competency test. Use it to pressure-test the pattern behind the pain.",
    },
    develop: {
      whatItDoes: DEVELOP_WHAT_IT_DOES,
      whatToShow: [
        "Open Isabelle's individual Develop profile.",
        "Start with a supportive-leadership strength before opening the gap.",
        "Open the Influence attribute page.",
        "Point to coaching guidance for direct feedback and expectation-setting.",
        "Use Ask Wonderlic to script the accountability conversation.",
      ],
      inYourOwnWords: [
        "The goal is not to make Isabelle less supportive, it is to help her turn support into accountability.",
        "Coach one direct feedback move: name the gap, connect it to impact, agree on the next observable behavior.",
        "This uses the trust she has built rather than replacing it.",
        "Direct feedback is a coachable behavior, not a personality change.",
      ],
      exampleScript:
        "If Isabelle is already managing people, I would not coach this as 'be tougher.' That misses what makes her valuable. She cares about the team and people trust her. Develop helps the manager or leader coach the next behavior: use that trust to make expectations clear. Name the issue, connect it to impact, and agree on what needs to change. The goal is not to make Isabelle less supportive. It is to help her turn support into accountability.",
      askWonderlicPrompt:
        "Give me a coaching plan for a supportive manager who avoids direct feedback but needs to hold the team accountable to a performance standard.",
      valueTieBack:
        "This helps customers build managers who can preserve trust and still address performance before issues linger.",
      caution:
        "Do not frame supportive managers as weak. The story is adding a missing muscle, not replacing the person.",
    },
    teamDynamics: {
      whatItDoes: TD_WHAT_IT_DOES,
      pageToOpen: "Communication & Interaction → Influence",
      whatToShow: [
        "Open the correct team.",
        "Open Communication & Interaction.",
        "Open the Influence page.",
        "Point to how directness and influence vary across the team.",
      ],
      inYourOwnWords: [
        "Some managers or team members naturally persuade and direct, others build trust but avoid pushing.",
        "This is not about saying one style is good and one is bad.",
        "Leaders use this to know who may need coaching around direct feedback and expectation-setting.",
      ],
      exampleScript:
        "At the team level, Influence helps leaders see who is more likely to speak directly, challenge, and move a conversation forward, and who may need more structure to do that well. This is not about saying one style is good and one is bad. It is about helping managers know who may need coaching around direct feedback, accountability, and expectation-setting.",
      valueTieBack:
        "This helps leaders create more consistent accountability without losing the trust and support that make managers effective.",
      caution:
        "Do not make this about labeling one manager as the weak link. Keep it about how leaders flex across their manager bench.",
    },
  },

  simon: {
    quickDiscovery: {
      triggers: [
        "Managers become bottlenecks.",
        "Promoted ICs struggle to delegate.",
        "Managers get reactive under pressure.",
        "Managers pull work back to themselves.",
        "Teams wait for approval.",
        "The manager's high standards slow execution.",
      ],
      clarifyingQuestion:
        "Is the manager becoming a bottleneck under pressure, or avoiding the hard accountability conversation? First is Simon, second is Isabelle.",
    },
    select: {
      whatItDoes: SELECT_WHAT_IT_DOES,
      whatToShow: [
        "Open the relevant manager or team-lead job opening.",
        "Show the candidate ranking or fit score view.",
        "Open Simon's individual candidate result.",
        "Point to capability signals alongside stress, flexibility, and delegation-related signals.",
      ],
      inYourOwnWords: [
        "A strong IC background is not the same as leading through pressure.",
        "The question is not can they do the work, it is can they keep the team moving when it gets hard.",
        "Select helps pressure-test steadiness and flexibility, not just capability.",
        "Related Select signals are directional story inputs, not one-to-one equivalents.",
      ],
      exampleScript:
        "Simon is the person who may look very strong on paper because he knows the work. He may have been promoted because he was a strong individual contributor, solved problems quickly, and had high standards. But the pain you described is what happens under pressure. Does he stay steady and keep decisions moving? Or does work start routing back through him? Select helps pressure-test whether a manager candidate has not just the capability to understand the work, but the steadiness and flexibility to lead through pressure.",
      valueTieBack:
        "This helps the customer avoid putting someone into management who can do the work, but may slow the team down when pressure rises.",
      caution:
        "Do not imply Select disqualifies a strong IC. Use it to surface the risk pattern that shows up under pressure.",
    },
    develop: {
      whatItDoes: DEVELOP_WHAT_IT_DOES,
      whatToShow: [
        "Open Simon's individual Develop profile.",
        "Start with a capability strength before opening the gap.",
        "Open the Stability attribute page.",
        "Point to coaching guidance for pressure response and delegation.",
        "Use Ask Wonderlic to script decision rights and a delegation routine.",
      ],
      inYourOwnWords: [
        "Under pressure, Simon may jump back into the work or over-check decisions because he knows what good looks like.",
        "The coaching is not 'let go.' It is naming the decisions that should live with the team.",
        "Define decision rights, identify pressure triggers, and create a delegation routine before the team gets stuck.",
        "This is a behavior the manager's leader can inspect over the next two to three weeks.",
      ],
      exampleScript:
        "If Simon is already in the manager seat, I would not frame this as incompetence. He is capable. That is part of why the issue is hard. Under pressure, he may jump back into the work, over-check decisions, or become the bottleneck because he knows what good looks like. Develop helps coach the pressure response: what decisions should stay with the team, what needs escalation, and how does Simon stay steady enough to lead instead of pulling everything back to himself?",
      askWonderlicPrompt:
        "Give me three coaching moves for a promoted IC who is becoming a bottleneck because they cannot delegate under pressure.",
      valueTieBack:
        "This helps customers keep work moving through managers instead of letting managers become the constraint.",
      caution:
        "Do not undermine the promotion. The story is coaching the pressure response, not saying they were the wrong choice.",
    },
    teamDynamics: {
      whatItDoes: TD_WHAT_IT_DOES,
      pageToOpen: "Getting Work Done Together → Your Team Approach",
      proxyNote:
        "Stability does not have a standalone Team Dynamics page in this flow. Your Team Approach is the closest team-level view. State this once, then return to the story.",
      whatToShow: [
        "Open the correct team.",
        "Open Getting Work Done Together.",
        "Open Your Team Approach as the proxy view.",
        "Point to where the team needs structure and where it needs autonomy.",
      ],
      inYourOwnWords: [
        "Some people need structure and support under pressure, others need autonomy and trust.",
        "The manager's approach can keep the team moving or accidentally route everything back through one person.",
        "The goal is keeping decisions moving through the team, not solving one person's bottleneck.",
      ],
      exampleScript:
        "At the team level, Your Team Approach helps show how different people may need different levels of structure, support, and autonomy. For Simon, the manager or leader can use this to ask: where are we creating clarity, and where are we accidentally creating dependency? The goal is to keep decisions moving through the team instead of letting one capable person become the bottleneck.",
      valueTieBack:
        "This helps leaders improve delegation, reduce bottlenecks, and keep execution moving under pressure.",
      caution:
        "Do not claim Your Team Approach and Stability are the same. Call the proxy out, then move on.",
    },
  },
};

export const productMomentsFor = (id: ArchetypeId) => PRODUCT_MOMENTS[id];
