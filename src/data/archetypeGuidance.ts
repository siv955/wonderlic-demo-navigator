import type { ArchetypeId } from "./types";

export interface ArchetypeGuidance {
  bestUseCase: string;
  doNotUseWhen: string;
  strength: string;
  gap: string;
  developHelps: string;
  discoveryTriggers: string[];
  clarifyingQuestion: string;
  demoArc: string;
  select: {
    screenOut: string;
    screenIn: string;
    howToSayIt: string;
    caution: string;
    supportingSignals: string[];
  };
  develop: {
    primary: string;
    primaryDirection: "low" | "high";
    whyAnchor: string;
    supporting: string[];
    plainEnglish: string;
    coachingAction: string;
    dontSay: string;
  };
  teamDynamics: {
    section: string;
    page: string;
    whyThisPage: string;
    managerInsight: string;
    howToExplain: string;
    whatToSay: string;
    dontOverclaim: string;
  };
  talkTracks: {
    thirtySecond: string;
    threeMinute: string;
    recordingGuide: string;
  };
  askWonderlic: string;
  cautions: string[];
  screensToShow: string[];
  screensToSkip: string[];
  recap: {
    currentState: string[];
    futureState: string[];
  };
}

export const ARCHETYPE_GUIDANCE: Record<ArchetypeId, ArchetypeGuidance> = {
  ethan: {
    bestUseCase:
      "Sales leaders whose reps interview well, keep prospects engaged, and build pipeline, but stall at the ask, at urgency, and at converting warm conversations into decisions.",
    doNotUseWhen:
      "The real pain is post-call process, CRM hygiene, or follow-up discipline. That is Derek, not Ethan.",
    strength:
      "Ethan is the salesperson prospects actually like. He brings warmth, curiosity, and trust into the room. Meetings feel good, prospects respond to his emails, and his calendar stays full, which is exactly why the manager keeps giving him another shot.",
    gap:
      "The commercial motion does not energize him the way the relationship does. When the moment calls for urgency, a direct ask, or holding a commercial line, he softens it. Deals stay 'active' for weeks, next steps drift, and a healthy-looking pipeline quietly under-converts.",
    developHelps:
      "Develop lets the manager coach the specific behavior instead of vague pep talks. The anchor is Enterprising Interest, the pull toward commercial action. The coaching shifts from 'be more aggressive' to 'connect the ask to helping the customer move forward,' which is a behavior Ethan can actually adopt without losing what makes him effective.",
    discoveryTriggers: [
      "Our reps interview great but the numbers don't follow.",
      "Pipeline looks healthy, forecast doesn't land.",
      "They're really likable but they're not hungry.",
      "Deals stall right before the ask.",
      "We keep hearing 'the customer wants to think about it.'",
      "Reps struggle to create urgency.",
      "Prospects love the meetings and then ghost.",
      "The team is relational, we need more push.",
      "Next steps are vague or self-imposed.",
      "Discovery is strong, close rates are weak.",
    ],
    clarifyingQuestion:
      "Are deals stalling because reps aren't creating urgency inside the conversation, or because the process falls apart after the conversation? If it's the first, this is Ethan. If it's the second, it's Derek.",
    demoArc:
      "Start with the pain: the sales manager who is tired of pipeline reviews that look great and forecasts that don't hit. Then bring Ethan in as the recognizable rep, the one everyone likes, the one who gets meetings, the one they keep coaching. Show Select first to answer the screen-out / screen-in question: he screens in on Sociability and Cooperation, which is why he interviews well; the risk shows on Enterprising Interest, which is why the ask goes soft. Bridge into Develop and open Enterprising Interest to explain the coachable gap in plain language, Ethan is not less capable, he is less energized by the commercial push. Use Ask Wonderlic to give the manager one concrete coaching move for their next 1:1. Then go to Team Dynamics → What Drives Us → Enterprising Interest to show that different sellers respond to different motivations, and the manager's job is to flex, not to replace people. Close by tying it back: this is how you protect a likable rep and get more out of your pipeline.",
    select: {
      screenOut:
        "Not 'is this a bad person', 'is this pattern likely to recreate the stalled-pipeline problem?' Reps who look great on Sociability but flat on Enterprising Interest tend to be the ones the manager ends up coaching later.",
      screenIn:
        "The stronger sales bets balance the relational strength with real pull toward commercial action. Use Select to separate 'good in the room' from 'moves the deal.'",
      howToSayIt:
        "I wouldn't hang the whole hiring decision on one attribute. I'd use Select to answer two questions: who is likely to recreate this stalled-deal pattern, and what separates the reps who close from the reps who just interview well?",
      caution:
        "Don't call Ethan a bad sales fit, the whole story is that he's coachable, which is why the manager keeps investing in him.",
      supportingSignals: [
        "Enterprising Interest",
        "Sociability",
        "Cooperation",
        "Dependability",
        "Cognitive Ability",
      ],
    },
    develop: {
      primary: "Enterprising Interest",
      whyAnchor:
        "It's the cleanest way to explain the difference between 'liking people' and 'being energized by the commercial push.' Results Focus and Influence support the story, but Enterprising Interest is what makes the gap recognizable.",
      supporting: ["Results Focus", "Influence", "Assertiveness"],
      plainEnglish:
        "For Ethan, Enterprising Interest is the pull toward commercial action, asking for the business, creating a decision, holding a next step. He can build the relationship all day. What Develop makes visible is whether he leans into or leans away from the commercial moment, so the manager can coach that specific behavior.",
      coachingAction:
        "In the next three prospect calls, script the ask in advance. Land one direct commercial question every call, 'What would need to be true for you to move forward this quarter?', and log the answer before the call ends.",
      dontSay:
        "Don't tell reps to 'be more aggressive.' It reads as personality feedback and Ethan will shut down. Frame it as connecting the ask to helping the customer make a decision.",
    },
    teamDynamics: {
      section: "What Drives Us",
      page: "Enterprising Interest",
      whyThisPage:
        "It shows the manager how different sellers get energized by different things, competition, targets, helping the customer, supporting the team, and how to coach the same commercial outcome across all of them.",
      managerInsight:
        "Some reps run harder because the scoreboard is up. Some reps run harder because the customer needs help. A good sales manager coaches to both, not to one.",
      howToExplain:
        "Higher Enterprising Interest reps get pulled forward by the sales motion itself. Lower Enterprising Interest reps can absolutely sell, but the ask has to be framed in a way that fits how they're wired, usually around helping the customer move.",
      whatToSay:
        "At the individual level, this is Ethan's story. At the team level, it's a coaching map, some of your reps need the scoreboard, some need the ask connected to the customer, and you can't coach them the same way.",
      dontOverclaim:
        "Don't say this predicts who will hit quota. Say it shows the manager how to flex.",
    },
    talkTracks: {
      thirtySecond:
        "This is Ethan. He's the rep prospects love, warm, easy to talk to, keeps the calendar full. The problem is he doesn't lean into the ask, so deals stall. Develop opens Enterprising Interest so the manager can coach the commercial move without asking him to become a different person.",
      threeMinute:
        "Every sales leader knows an Ethan. He interviews well, prospects like him, meetings feel productive, and yet the pipeline over-promises and under-delivers. It's not effort and it's not skill. It's that the commercial motion doesn't naturally energize him the way the relationship does. On Select, he looks strong on Sociability and Cooperation, which is exactly why he keeps getting hired. The risk sits on Enterprising Interest, which is why the ask goes soft when it matters. On Develop, we open Enterprising Interest so the manager can coach a specific behavior, connect the ask to helping the customer move forward. Then in Team Dynamics, we show that his teammates need different motivations, and the manager's job is to flex the coaching, not to keep pushing the same speech at everyone. The story ends with a rep who closes more without losing what customers already like about him.",
      recordingGuide:
        "Open with the pain, in the customer's words: 'Our reps interview well, but the numbers don't follow.' Anchor Ethan as the recognizable person, the likable rep the manager keeps coaching. Move to Select and frame it as screen-out and screen-in: he screens in on Sociability, which is why he interviews well; the risk shows on Enterprising Interest, which is why he stalls at the ask. Say out loud that Select doesn't disqualify him, it tells the manager what to watch for. Bridge to Develop with a line like: 'If we hire an Ethan, this is where Develop earns its money.' Open the Enterprising Interest attribute page and explain it in plain English, pull toward commercial action, not a personality score. Drop the Ask Wonderlic prompt live: 'Give me three ways to coach a relationship-first seller to create urgency without losing the customer's trust.' Read the response as a coaching artifact the manager could take into their next 1:1. Optionally mention Action Planner only if the customer is asking about goal-setting or follow-through. Move to Team Dynamics → What Drives Us → Enterprising Interest and reframe it: this isn't about spotting the one low person, it's about showing the manager how to flex across a team where different sellers need different motivations. Close by tying it back to the pain: 'This is how you protect a likable rep and stop losing deals that should have closed.'",
    },
    askWonderlic:
      "Give me three ways to coach a relationship-first seller to create urgency and hold a commercial line without losing the customer's trust. Include one script for the next prospect call.",
    cautions: [
      "Don't frame Ethan as a bad sales fit, the whole point is he's coachable.",
      "Don't moralize about 'hunger.' Talk about motivation and behavior, not personality.",
      "Don't imply Develop 'fixes' Enterprising Interest. It gives the manager language to coach the ask.",
      "Don't oversell Team Dynamics as prediction. It's a manager flex map.",
    ],
    screensToShow: [
      "Select stack rank or candidate compare (Ethan versus a stronger commercial profile)",
      "Develop → Enterprising Interest attribute page",
      "Ask Wonderlic prompt live in the flow",
      "Team Dynamics → What Drives Us → Enterprising Interest",
    ],
    screensToSkip: [
      "Index, unless the audience is IO, consultant, or technical L&D",
      "Action Planner, unless goal-setting or follow-through is a stated pain",
      "Raw score matrix or attribute detail tables",
    ],
    recap: {
      currentState: [
        "Reps interview well and keep the pipeline full, but deals stall at the ask.",
        "Managers are coaching the same 'be more aggressive' message with limited change.",
        "Forecast confidence is weak because good conversations aren't converting.",
      ],
      futureState: [
        "Hire relational sellers with the commercial pull to actually close.",
        "Give managers specific coaching language for the ask instead of pep talks.",
        "Turn the pipeline the team already builds into predictable revenue.",
      ],
    },
  },

  derek: {
    bestUseCase:
      "Sales or customer-facing leaders whose reps are strong live but weak after the call, follow-up drifts, CRM is thin, next steps aren't documented, and deals leak between meetings.",
    doNotUseWhen:
      "The rep is fine on process but soft at the ask. That's Ethan. Derek is about what happens after the conversation.",
    strength:
      "Derek can carry a room. He builds rapport quickly, thinks on his feet, and customers walk away from the conversation interested. Managers see the live moments and know the raw ability is there, which is exactly why the follow-through gap is so frustrating.",
    gap:
      "The repeatable work after the interaction is inconsistent. Follow-ups go out late or not at all, CRM notes are thin or missing, and next steps aren't captured while the conversation is fresh. Deals stall not because the meeting went badly, but because nothing happened between meetings.",
    developHelps:
      "Develop lets the manager stop giving vague feedback like 'stay on top of your deals' and start coaching a specific post-call routine. The anchor is Diligence, the everyday follow-through discipline. Coaching becomes about the 15 minutes after every call, not about who Derek is as a person.",
    discoveryTriggers: [
      "Salesforce is a mess.",
      "Reps are great on calls but terrible at follow-up.",
      "We can't trust the forecast because we can't trust the notes.",
      "Deals stall between meetings.",
      "Next steps are always vague.",
      "Managers are chasing reps for updates.",
      "Customers say 'nobody got back to me.'",
      "Handoffs to CS or ops go sideways because there's no context.",
      "Reps drop the ball on renewals and expansion.",
      "We keep losing deals we should have won.",
    ],
    clarifyingQuestion:
      "When you say the rep is 'dropping the ball,' is it that they don't create urgency in the conversation, or that the follow-up and documentation fall apart after? First one is Ethan, second one is Derek.",
    demoArc:
      "Start with the pain the sales manager actually lives with: pipeline reviews where nobody can answer 'what's the next step,' CRM that doesn't reflect reality, and deals that die quietly between meetings. Introduce Derek as the rep everyone recognizes, strong live, weak after. Use Select to make two points: he screens in on Enterprising Interest and Sociability, which is why he keeps getting hired; the risk sits on Dependability and Structured Interest, which is why the process breaks down. Move into Develop and open Diligence to make the coaching specific, not 'be more organized,' but a concrete post-call routine the manager can inspect. Drop the Ask Wonderlic prompt to give the manager a two-week coaching plan they can actually use. Then go to Team Dynamics → Getting Work Done Together → Orderliness (name the substitution, Diligence doesn't have a Team Dynamics page, Orderliness is the closest team-level proxy). Close by tying it to forecast confidence and manager time back.",
    select: {
      screenOut:
        "Reps who look strong on the live traits (Enterprising Interest, Sociability) but flat on Dependability and Structured Interest are the ones who recreate the follow-through problem.",
      screenIn:
        "The stronger bets balance the live-conversation strengths with real pull toward process, structure, and documentation. Use Select to separate 'good on the call' from 'reliable across the deal cycle.'",
      howToSayIt:
        "I'd use Select to answer two questions: who's going to recreate the follow-up problem, and what separates the reps who protect deals from the ones who leak them.",
      caution:
        "Don't call Derek lazy or a bad hire. The whole story is that the live ability is real, the coaching is the routine around it.",
      supportingSignals: [
        "Dependability",
        "Structured Interest",
        "Enterprising Interest",
        "Sociability",
        "Cognitive Ability",
      ],
    },
    develop: {
      primary: "Diligence",
      whyAnchor:
        "Diligence is the difference between a good conversation and a deal that actually keeps moving. It's the follow-up, the documentation, the next-step discipline, and the loop closure that protect what Derek already created in the room.",
      supporting: [
        "Organization and Planning",
        "Orderliness",
        "Results Focus",
        "Structured Interest",
      ],
      plainEnglish:
        "For Derek, Diligence shows up as whether he closes the loop without the manager chasing. Does the follow-up email land the same day? Are the CRM notes complete enough for the next person to pick up the deal? Is the next step documented and confirmed with the customer? That's the coaching surface.",
      coachingAction:
        "Block the 15 minutes right after every prospect call. Follow-up email, CRM notes, confirmed next step, opportunity updated, before the calendar moves on. Manager inspects the last call each day for two weeks, then eases off.",
      dontSay:
        "Don't call him disorganized as a personality. Don't say Develop 'makes him diligent.' Say Develop gives the manager a routine to inspect and reinforce.",
    },
    teamDynamics: {
      section: "Getting Work Done Together",
      page: "Orderliness",
      whyThisPage:
        "Diligence doesn't have a dedicated Team Dynamics page in this flow. Orderliness is the correct team-level proxy for process discipline and structure. Say the substitution out loud so it doesn't look like a mistake.",
      managerInsight:
        "Some reps naturally build their own structure. Others need the manager to build it for them. If you coach both the same way, the structured ones feel micromanaged and the loose ones stay loose.",
      howToExplain:
        "Higher Orderliness reps create their own routines, they don't need the manager to build a follow-up cadence. Lower Orderliness reps need inspectable structure to be reliable. Neither is wrong; they need different management.",
      whatToSay:
        "At the individual level, this is Derek's Diligence story. At the team level, Orderliness helps the manager see who needs more inspection and who needs less, so nobody is over- or under-managed.",
      dontOverclaim:
        "Don't say Orderliness and Diligence are the same attribute. Say Orderliness is the closest team-level proxy for the process-discipline story.",
    },
    talkTracks: {
      thirtySecond:
        "This is Derek. He's the rep who's strong on the call and weak after, follow-up drifts, CRM is thin, next steps aren't documented. Develop opens Diligence so the manager can coach a specific post-call routine instead of vague 'stay on top of your deals' feedback.",
      threeMinute:
        "Every sales leader has a Derek. The live conversation is strong, customers respond, meetings feel productive, but the follow-up doesn't happen, Salesforce is a ghost town, and next steps are always vague. Deals leak between meetings. The problem isn't attitude and it isn't ability. It's the routine that surrounds the conversation. On Select, he screens in on the traits that made the manager hire him, relational strength, quick thinking. The risk sits on Dependability and Structured Interest, which is where the follow-through gap lives. On Develop, we open Diligence to make coaching concrete: a fifteen-minute post-call routine the manager can inspect. In Team Dynamics we use Orderliness, Diligence doesn't have a TD page, and Orderliness is the closest proxy, to show the manager who else on the team needs structure and who already creates their own. The story ends with cleaner pipeline, better forecast confidence, and less time chasing reps for updates.",
      recordingGuide:
        "Open with the pain in the manager's language: 'Salesforce is a mess and I can't trust the forecast.' Anchor Derek as the recognizable rep, strong live, weak after. Show Select and be explicit about screen-out and screen-in: he keeps getting hired because Enterprising Interest and Sociability look good; the follow-through risk sits on Dependability and Structured Interest. Say clearly that Select isn't the whole story, it just tells the manager what to watch for. Bridge to Develop with something like: 'This is where a manager stops giving pep talks and starts giving Derek a routine.' Open the Diligence attribute page. Explain it in plain English, follow-up, documentation, next steps, loop closure, not academic language. Drop the Ask Wonderlic prompt live: 'Write me a two-week coaching plan for a rep who is strong live but loose on follow-through and CRM discipline.' Read the response as a real coaching artifact. Optionally reference Action Planner if the customer is already asking about manager accountability. Move to Team Dynamics → Getting Work Done Together → Orderliness, and name the substitution: 'Diligence doesn't have a dedicated Team Dynamics page. Orderliness is the closest proxy for process discipline.' Reframe it as a manager flex map, not one-person spotting. Close by tying to forecast confidence, manager time back, and deals that stop leaking.",
    },
    askWonderlic:
      "Write me a two-week coaching plan to build follow-through and CRM discipline for a sales rep who is strong live with customers but loose on the process afterward. Include daily manager inspection points.",
    cautions: [
      "Don't call Derek lazy, the story is a coachable routine, not character.",
      "Orderliness is the team-level proxy, not a rename of Diligence. Name the substitution out loud.",
      "Don't use Develop to tell termination stories. No-call / no-show belongs in a Select screen-out story.",
      "Don't imply Develop 'installs' Diligence. It gives the manager a routine to inspect and reinforce.",
    ],
    screensToShow: [
      "Select stack rank or candidate compare (Derek versus a more disciplined rep)",
      "Develop → Diligence attribute page",
      "Ask Wonderlic prompt live in the flow",
      "Team Dynamics → Getting Work Done Together → Orderliness",
    ],
    screensToSkip: [
      "Standalone Diligence Team Dynamics page, it doesn't exist; use Orderliness",
      "Index unless the audience is IO / consultant / technical L&D",
      "Deep raw score matrices",
    ],
    recap: {
      currentState: [
        "Strong live conversations are not consistently turning into clean next steps.",
        "Managers are spending time chasing notes, follow-up, and CRM updates.",
        "Inconsistent follow-through creates stalled opportunities and weaker forecast confidence.",
      ],
      futureState: [
        "Identify candidates more likely to sustain follow-through and process discipline.",
        "Give managers clearer coaching language for post-call routines and ownership.",
        "Create cleaner pipeline execution without managing every rep the same way.",
      ],
    },
  },

  caleb: {
    bestUseCase:
      "Technical, engineering, IT, or operations leaders whose top experts are valuable but hard to work with, teammates route around them, handoffs stall, and knowledge sits in one head.",
    doNotUseWhen:
      "The pain is technical capability, hiring quality, or ramp time. Compassion is a communication-impact story, not a skill story.",
    strength:
      "Caleb is the expert everyone secretly depends on. He solves the hard problems, spots issues others miss, and holds a high standard. That's real value, and it's why the team keeps going back to him even when it's uncomfortable.",
    gap:
      "The gap is how the expertise lands. When teammates don't move at his pace or ask 'basic' questions, he can come across as blunt, impatient, or dismissive. Over time, people stop asking, handoffs get rough, and the team becomes over-dependent on one person who is hard to work with.",
    developHelps:
      "Develop lets the manager coach the communication impact without questioning the expertise. The anchor is Compassion, framed in business language, emotional intelligence, communication behavior, whether the team can access what Caleb knows. Coaching is about interpersonal moves, not about becoming a different person.",
    discoveryTriggers: [
      "Our best engineers are our hardest to work with.",
      "Knowledge is stuck in one head.",
      "Handoffs to other teams are painful.",
      "Junior people are afraid to ask questions.",
      "We keep hearing 'nobody wants to be on his team.'",
      "The expert is a bottleneck.",
      "Cross-functional partners avoid our team.",
      "Retention drops on teams with this personality.",
      "We can't scale because knowledge doesn't transfer.",
      "The technical review meetings are brutal.",
    ],
    clarifyingQuestion:
      "Is the concern that the technical work is wrong, or that the way it's communicated is making the team harder to work with? If it's communication and collaboration, this is Caleb.",
    demoArc:
      "Start with the pain: the engineering or technical leader who has strong ICs and still can't scale because knowledge won't transfer and teammates route around the expert. Introduce Caleb as the recognizable person, valuable, capable, and hard to work with. Use Select to make the point that the expertise is real and the collaboration risk is real, and both matter for a technical team. Move to Develop and open Compassion in business language, communication impact, EQ, whether the team can access the expertise. Drop the Ask Wonderlic prompt so the manager gets specific coaching moves, not personality feedback. Then go to Team Dynamics → Communication & Interaction → Compassion to show how the same expert behavior lands differently across teammates with different sensitivities. Close by tying it back to scaling: this is how the manager unlocks value that's already on the team.",
    select: {
      screenOut:
        "For roles where cross-functional collaboration matters, patterns strong on the technical Interests but low on Cooperation and Open-Mindedness tend to recreate the friction problem.",
      screenIn:
        "The stronger technical hires pair the expertise with real willingness to collaborate. Use Select to separate 'brilliant IC' from 'brilliant IC who scales.'",
      howToSayIt:
        "I wouldn't use Select to reject expertise. I'd use it to make sure we know what we're signing up to coach, because expertise without collaboration turns into a bottleneck.",
      caution:
        "Never suggest Caleb 'lacks empathy' or 'doesn't care.' Talk about communication impact and whether others can access his expertise.",
      supportingSignals: [
        "Cooperation",
        "Sociability",
        "Open-Mindedness",
        "Investigative Interest",
        "Applied Interest",
        "Cognitive Ability",
      ],
    },
    develop: {
      primary: "Compassion",
      whyAnchor:
        "It pulls through cleanly to Team Dynamics and supports the friction story once translated into business language. Compassion here is emotional intelligence and communication behavior, not a moral rating.",
      supporting: ["Teamwork", "Courtesy", "Emotional Connection"],
      plainEnglish:
        "For Caleb, Compassion shows up as whether teammates can actually work with him. Does he slow down when someone doesn't get it? Does he acknowledge impact when he's blunt? Does he invite questions or shut them down? That's the coaching surface, and none of it requires him to be less technical.",
      coachingAction:
        "In the next three cross-functional reviews, Caleb opens with 'What questions do you want me to answer?' before diving into the answer. Manager debriefs one interaction per week: what landed, what didn't, what to try next.",
      dontSay:
        "Don't tell him to be nicer. Frame it as communication impact, does the message land in a way that makes the team more effective, or less.",
    },
    teamDynamics: {
      section: "Communication & Interaction",
      page: "Compassion",
      whyThisPage:
        "It shows the manager how the same technical behavior lands across teammates with different sensitivities, and how to coach interaction, not personality.",
      managerInsight:
        "Some teammates want blunt and fast. Others need context, care, and a moment to catch up. A manager who coaches Caleb the same way across the whole team will lose people on one side or the other.",
      howToExplain:
        "Higher Compassion teammates naturally read impact and adjust. Lower Compassion teammates default to efficiency and directness. Neither is wrong, the manager's job is to help each side flex toward the other.",
      whatToSay:
        "At the individual level, this is Caleb's communication story. At the team level, Compassion shows why the same message from him lands well with one teammate and torches trust with another.",
      dontOverclaim:
        "Don't say this measures how much someone cares. Say it shows how communication lands.",
    },
    talkTracks: {
      thirtySecond:
        "This is Caleb. He's the expert everyone needs and nobody wants to work with. Develop opens Compassion, in business language, meaning communication impact, so the manager can coach how his expertise lands without asking him to be less technical.",
      threeMinute:
        "Every technical leader has a Caleb. He's the one who solves the hard problems and holds the line on quality, and the one teammates route around because working with him is hard. Knowledge stays stuck, handoffs stall, and the team can't scale because it can't share what he knows. On Select, we're not screening out expertise. We're making sure the manager knows what they're signing up to coach, because Cooperation and Open-Mindedness are what turn a brilliant IC into a brilliant IC who scales. On Develop, we open Compassion, and we're very careful about the language. This is not about whether Caleb cares. It's about how his communication lands and whether others can access his expertise. That's an interaction pattern the manager can coach. In Team Dynamics we show the same behavior playing out across teammates with different sensitivities, the manager's job is to help the team flex to each other, not to change Caleb into a different person. The story ends with an expert whose value the whole team can actually use.",
      recordingGuide:
        "Open with the pain: 'Our best engineers are our hardest to work with, and it's costing us handoffs and scale.' Anchor Caleb as the recognizable person, valuable, capable, and hard to work with. Show Select and frame it clearly: we are not screening out expertise, we are making sure the manager knows what they're signing up to coach. Bridge to Develop with a line like: 'This is where we get careful about language.' Open the Compassion attribute page and immediately translate it into business terms, emotional intelligence, communication impact, whether the team can access his expertise. Drop the Ask Wonderlic prompt live: 'Give me three coaching moves to help a technical expert make their knowledge more accessible to the team, without softening their standards.' Read the response as a coaching artifact. Move to Team Dynamics → Communication & Interaction → Compassion. Reframe it: this isn't about one low person, it's a map of how the same message lands across teammates with different sensitivities, and how the manager coaches the whole team to flex. Optionally mention Action Planner if manager follow-through is a stated pain. Close by tying to scale: 'This is how you unlock the value your best experts already have.'",
    },
    askWonderlic:
      "Give me three coaching moves to help a technical expert make their knowledge more accessible to their team, without softening their standards. Include one script for a cross-functional review.",
    cautions: [
      "Never say Caleb lacks empathy or doesn't care.",
      "Don't moralize Compassion, this is communication impact, not personality.",
      "Don't imply he needs to change who he is. Coach the interaction pattern.",
      "Don't use Develop to explain a Select screen-out for a technical role.",
    ],
    screensToShow: [
      "Select candidate compare (Caleb versus a similarly technical but more collaborative profile)",
      "Develop → Compassion attribute page",
      "Ask Wonderlic prompt live",
      "Team Dynamics → Communication & Interaction → Compassion",
    ],
    screensToSkip: [
      "Any moralizing language around Compassion",
      "Index, unless the audience is IO / consultant / technical L&D",
      "Raw score comparisons that overshadow the story",
    ],
    recap: {
      currentState: [
        "Top experts hold critical knowledge but the team struggles to work with them.",
        "Handoffs and cross-functional partnerships stall on communication, not skill.",
        "Knowledge stays in one head, which limits scale and creates retention risk.",
      ],
      futureState: [
        "Coach communication impact without asking experts to lower their standards.",
        "Make expertise easier for the team to access, transfer, and build on.",
        "Give managers a repeatable way to flex coaching across different teammates.",
      ],
    },
  },

  riley: {
    bestUseCase:
      "Frontline, production, service, warehouse, care, or field-ops leaders whose people know the work but don't consistently drive it to standard, quality slips, teammates cover gaps, managers over-inspect.",
    doNotUseWhen:
      "The team genuinely can't do the work. That's a Select hiring story, often anchored on Cognitive Ability or role-specific Interests, not a Develop coaching story.",
    strength:
      "Riley knows the job. Tenure, hands-on skill, tribal knowledge, when he's dialed in, he can execute and keep work moving. This is not a 'can't do anything' story, and framing it that way loses the whole demo.",
    gap:
      "Consistency and ownership of the result. Work goes out unevenly, small steps get missed, downstream impact isn't considered, and the manager ends up inspecting work that should already be handled. When Riley isn't carrying his part, teammates absorb it.",
    developHelps:
      "Develop lets the manager coach a specific execution behavior instead of a vague 'try harder' conversation. The anchor is Results Focus, what 'to standard' looks like on this line, where to check quality, and how to reinforce it without micromanaging.",
    discoveryTriggers: [
      "They know the work but don't always do the work.",
      "People can do the job but can't be counted on.",
      "Quality varies day to day.",
      "The team covers for the same person over and over.",
      "Managers are spending too much time inspecting.",
      "Stronger employees are burning out compensating.",
      "Tribal knowledge is hiding a reliability problem.",
      "Same mistakes keep showing up.",
      "Downstream teams complain about handoffs.",
      "We tolerated it because they know the equipment.",
    ],
    clarifyingQuestion:
      "When you say 'they can't do the job,' do you mean they can't figure it out cognitively, or they can do it but don't consistently do it well? First one is a Select story led by Cognitive Ability. Second one is Riley.",
    demoArc:
      "Start with the frontline manager's pain: work that goes out inconsistently, teammates covering gaps, and a person everyone knows can do better. Introduce Riley, tenured, skilled, and inconsistent. Use Select to answer the hiring question: if the pain is 'can't connect the dots,' lead with Cognitive Ability; if it's 'can't sustain the standard,' lead with Dependability and Structured Interest. Move to Develop and open Results Focus to make the coaching concrete, what does 'to standard' look like on this line, and how does the manager reinforce it? Drop the Ask Wonderlic prompt to give the manager three coaching moves. Then go to Team Dynamics → Getting Work Done Together → Results Focus to show the team-level pattern, some people naturally push toward the standard, some drift, and the manager has to close the gap without over-managing the ones who don't need it. Close by tying it back to quality, throughput, and manager time.",
    select: {
      screenOut:
        "For roles where consistent output matters, patterns weak on Dependability and Structured Interest tend to recreate the reliability problem, regardless of tenure.",
      screenIn:
        "The stronger frontline hires pair capability with the pull toward completing work to standard. Use Select to separate 'can do the job' from 'consistently does the job.'",
      howToSayIt:
        "I'd use Select to separate two things: can this person do the work, and will they consistently do it to standard. Tenure hides the second question a lot longer than it should.",
      caution:
        "If the real pain is 'they can't connect the dots,' lead Select with Cognitive Ability. Don't try to make Develop fix a cognitive gap, that's a hiring conversation.",
      supportingSignals: [
        "Dependability",
        "Structured Interest",
        "Applied Interest",
        "Cooperation",
        "Cognitive Ability",
      ],
    },
    develop: {
      primary: "Results Focus",
      whyAnchor:
        "It's the cleanest way to explain follow-through and reliable output in frontline work. Diligence, Orderliness, and Organization and Planning support the story, but Results Focus is what makes the coachable execution behavior visible.",
      supporting: [
        "Diligence",
        "Orderliness",
        "Organization and Planning",
        "Structured Interest",
      ],
      plainEnglish:
        "For Riley, Results Focus is whether he consistently drives the work to the standard, every shift, not just when he feels like it. That's an observable behavior the manager can define, model, and reinforce. It's not about how much he cares.",
      coachingAction:
        "Define what 'to standard' looks like on this task in three specific checks. Coach Riley through those checks daily for a week. Then move to weekly inspection and let him own the standard.",
      dontSay:
        "Don't imply he can't do the job, the whole story is coachable behavior. Don't say Develop 'installs' work ethic. It gives the manager a definable standard to reinforce.",
    },
    teamDynamics: {
      section: "Getting Work Done Together",
      page: "Results Focus",
      whyThisPage:
        "It shows the team-level pattern, who naturally drives to the standard, who drifts, so the manager can coach differently instead of running the same speech at everyone.",
      managerInsight:
        "Some people push work to completion without being asked. Others need clear expectations, milestones, and follow-up. If you coach them the same way, you either over-manage the drivers or under-manage the drifters.",
      howToExplain:
        "Higher Results Focus teammates own the standard and get frustrated when others don't. Lower Results Focus teammates need the manager to make the standard visible and inspectable. The manager's job is to flex.",
      whatToSay:
        "At the individual level, this is Riley's Results Focus story. At the team level, it makes the reliability pattern visible so the manager knows who to invest inspection time in and who to trust with more autonomy.",
      dontOverclaim:
        "Don't say Results Focus predicts productivity. Say it gives the manager a coaching map for consistency.",
    },
    talkTracks: {
      thirtySecond:
        "This is Riley. He knows the work, he just doesn't consistently drive it to standard. Develop opens Results Focus so the manager can coach specific execution behavior instead of a vague 'try harder' conversation.",
      threeMinute:
        "Every frontline manager has a Riley. He's tenured, he knows the equipment, teammates depend on him, and the work still goes out inconsistently. Quality varies, small steps get missed, teammates cover the gaps, and the manager ends up inspecting work that should already be handled. The problem isn't skill and it isn't hiring quality. It's the follow-through habit around a standard that hasn't been clearly defined and reinforced. On Select, if the pain is really 'they can't connect the dots,' we lead with Cognitive Ability, that's a hiring story. If the pain is consistency, we lead with Dependability and Structured Interest. On Develop, we open Results Focus to make coaching concrete: what does 'to standard' look like on this line, and how does the manager reinforce it? In Team Dynamics we show the pattern across the team so the manager knows where to invest inspection time and where to give autonomy. The story ends with more consistent output, less rework, and manager time back.",
      recordingGuide:
        "Open with the frontline pain: 'They know the work but they can't be counted on.' Anchor Riley as the recognizable tenured employee. Immediately split the Select story: if the customer says 'they can't connect the dots,' lead with Cognitive Ability and make it a hiring conversation; if the pain is consistency, lead with Dependability and Structured Interest. Say clearly which one you're doing and why. Bridge to Develop with: 'Assuming we're hiring the right people, this is where a manager coaches the reliability behavior.' Open Results Focus and explain it in plain English, driving work to standard, every shift. Drop the Ask Wonderlic prompt live: 'Give me three ways to coach a skilled frontline employee to consistently drive work to standard, connected to the downstream impact.' Read the response as a coaching artifact. Optionally mention Action Planner if the customer is asking about accountability structures. Move to Team Dynamics → Getting Work Done Together → Results Focus and reframe it as a manager flex map, not one-person spotting. Close by tying to quality, throughput, and manager time back.",
    },
    askWonderlic:
      "Give me three ways to coach a skilled frontline employee to consistently drive work to standard, connected to the downstream impact. Include one shift-huddle script.",
    cautions: [
      "Don't say Riley can't do the job, the story is coachable behavior.",
      "If the pain is truly cognitive, lead Select with Cognitive Ability. Don't ask Develop to fix a hiring problem.",
      "Don't moralize about work ethic, talk about observable execution behavior.",
      "Don't collapse Results Focus, Diligence, and Orderliness into one thing. Name them clearly.",
    ],
    screensToShow: [
      "Select stack rank (with Cognitive Ability lead when relevant)",
      "Develop → Results Focus attribute page",
      "Ask Wonderlic prompt live",
      "Team Dynamics → Getting Work Done Together → Results Focus",
    ],
    screensToSkip: [
      "Index, unless the audience is IO / consultant / technical L&D",
      "Deep Action Planner unless goal-setting is a stated pain",
      "Raw score comparisons that overshadow the reliability story",
    ],
    recap: {
      currentState: [
        "Tenured frontline employees know the work but don't consistently drive it to standard.",
        "Quality varies shift to shift, and stronger teammates absorb the gap.",
        "Managers spend too much time inspecting work that should already be handled.",
      ],
      futureState: [
        "Hire for consistency, not just tenure, separate 'can do' from 'consistently does.'",
        "Give managers a clear, inspectable standard to coach instead of vague feedback.",
        "Free up strong employees and manager time by closing the reliability gap.",
      ],
    },
  },

  isabelle: {
    bestUseCase:
      "Leaders of managers whose supportive leaders are trusted by their teams but avoid the direct conversations needed to correct performance, issues linger, strong employees get frustrated, accountability feels uneven.",
    doNotUseWhen:
      "The manager is genuinely disengaged or unkind. Isabelle's whole story rests on caring being real; without that, it's a different conversation.",
    strength:
      "Isabelle is the manager people want to work for. She listens, she creates psychological safety, she remembers what matters to people. Her team trusts her, and that's a real leadership asset, not a soft skill to apologize for.",
    gap:
      "Converting care into clear expectations and timely accountability. When someone is underperforming, the direct conversation gets delayed, softened, or absorbed. The trust protects the relationship in the short term and lets the performance problem grow in the long term.",
    developHelps:
      "Develop lets Isabelle add the direct-feedback muscle without asking her to stop caring. The anchor is Influence, using the trust she's already built to hold clear expectations and have direct-but-constructive conversations. Care and accountability become the same job.",
    discoveryTriggers: [
      "Our managers avoid hard conversations.",
      "Performance issues linger for months.",
      "Strong employees are frustrated by uneven accountability.",
      "Feedback is too soft to be useful.",
      "We have caring managers but no teeth.",
      "Documentation is missing when we need to act.",
      "Underperformers don't know they're underperforming.",
      "Turnover is happening on the wrong side of the team.",
      "Managers wait too long to escalate.",
      "Employee engagement is high, results are not.",
    ],
    clarifyingQuestion:
      "When you say managers avoid hard conversations, is it that they don't care, or that they care so much they can't be direct? If it's the second, this is Isabelle.",
    demoArc:
      "Start with the pain the leader-of-leaders lives with: caring managers whose teams trust them, whose performance issues drag out, and whose strong employees are quietly frustrated. Introduce Isabelle as the recognizable manager, supportive, trusted, and conflict-avoidant. Use Select to explain why she keeps getting promoted: strong on Sociability, Cooperation, Supportive Interest, Stability. The risk sits on Influence and Assertiveness, which is where the accountability muscle lives. Move to Develop and open Influence in plain English, this is not about becoming harsher, it's about using the trust she already has to make expectations clear. Drop the Ask Wonderlic prompt for a coaching plan. Then go to Team Dynamics → Communication & Interaction → Influence to show how her team has different sensitivities to feedback and how she can flex. Close by tying it to retention of strong employees and real performance change.",
    select: {
      screenOut:
        "For manager roles, patterns strong on Supportive Interest and Cooperation but flat on Influence and Assertiveness tend to recreate the avoidance pattern under pressure.",
      screenIn:
        "The stronger manager bets pair the supportive strengths with a real willingness to hold a line. Use Select to separate 'well-liked' from 'well-liked and accountable.'",
      howToSayIt:
        "I wouldn't use Select to screen out supportive leaders, those are the ones your teams want. I'd use it to make sure we know which supportive leaders also carry the accountability muscle.",
      caution:
        "Don't call Isabelle a weak manager. The care is the strength; the direct muscle is the coachable add.",
      supportingSignals: [
        "Enterprising Interest",
        "Stress Tolerance",
        "Sociability",
        "Cooperation",
        "Supportive Interest",
        "Dependability",
      ],
    },
    develop: {
      primary: "Influence",
      whyAnchor:
        "Influence is the difference between being trusted and being able to move performance. It's the coachable muscle that turns Isabelle's care into clear expectations, direct feedback, and follow-through.",
      supporting: ["Assertiveness", "Results Focus", "Decision Making"],
      plainEnglish:
        "For Isabelle, Influence is whether she can use the trust she's built to have the direct conversation, set the clear expectation, and hold the standard, without breaking the relationship. That's a coachable behavior, and it's exactly what turns a caring manager into an accountable one.",
      coachingAction:
        "In the next two 1:1s where feedback is needed, script the direct message in advance in one clear sentence. Deliver it in the first five minutes. Document the expectation and the follow-up date before the meeting ends.",
      dontSay:
        "Don't tell her to be harder or less caring. Frame it as adding the direct muscle to the trust she's already built.",
    },
    teamDynamics: {
      section: "Communication & Interaction",
      page: "Influence",
      whyThisPage:
        "It shows the manager how directness lands across teammates with different sensitivities, and how a caring manager can flex her feedback style without going soft on the standard.",
      managerInsight:
        "Some employees want the message plain and fast. Others need context, warmth, and time to process. Isabelle defaults to the warmer style. Team Dynamics helps her flex without losing herself.",
      howToExplain:
        "Higher Influence teammates absorb direct feedback and want more of it. Lower Influence teammates need the message wrapped more carefully, but they still need the message. The manager's job is to adjust the delivery without dropping the standard.",
      whatToSay:
        "At the individual level, this is Isabelle's accountability story. At the team level, Influence shows her how to flex her feedback style across a team with different sensitivities, so directness scales with her.",
      dontOverclaim:
        "Don't say Influence predicts whether someone is a good manager. Say it shows how directness lands and where to flex.",
    },
    talkTracks: {
      thirtySecond:
        "This is Isabelle. She's the supportive manager everyone loves, and the one performance issues drift under. Develop opens Influence so she can use the trust she's built to have the direct conversation, without becoming a manager her team doesn't recognize.",
      threeMinute:
        "Every leader of managers has an Isabelle. Her team trusts her, engagement scores are strong, people want to work for her, and performance issues linger for months because the direct conversation keeps getting softened or delayed. This isn't a weak manager and it isn't a bad hire. It's a caring manager missing a specific muscle. On Select, she screens in on all the supportive signals, Sociability, Cooperation, Supportive Interest, Stability. The risk sits on Influence and Assertiveness, which is where the accountability muscle lives. On Develop, we open Influence to make coaching concrete: how does a supportive leader deliver direct feedback without breaking the relationship? In Team Dynamics we show her how directness lands across a team with different sensitivities, so she can flex her delivery without going soft on the standard. The story ends with a manager who is still trusted and now also accountable, which is what keeps her strong employees from leaving.",
      recordingGuide:
        "Open with the leader-of-leaders pain: 'Our caring managers avoid hard conversations, and it's costing us our strongest people.' Anchor Isabelle as the recognizable manager, trusted, supportive, conflict-avoidant. Show Select and explain what she screens in on and where the risk sits. Be explicit: we are not screening out supportive leaders, we are making sure we know which ones also carry the accountability muscle. Bridge to Develop with a line like: 'This is a caring manager who needs one specific coachable muscle.' Open the Influence attribute page and explain it in plain English, using trust to hold expectations, not becoming harsher. Drop the Ask Wonderlic prompt live: 'Give me a coaching plan for a supportive manager who avoids direct feedback but needs to hold the team accountable to a performance standard.' Read the response as a coaching artifact. Optionally mention Action Planner if the customer is asking about manager accountability structures. Move to Team Dynamics → Communication & Interaction → Influence. Reframe it: this isn't a rating of who's a good manager, it's a map of how her feedback lands across teammates with different sensitivities. Close by tying to retention of strong employees and real performance change on the underperformers.",
    },
    askWonderlic:
      "Give me a coaching plan for a supportive manager who avoids direct feedback but needs to hold the team accountable to a performance standard. Include a script for her next 1:1 with an underperformer.",
    cautions: [
      "Don't frame Isabelle as a weak manager, the care is the strength.",
      "Don't tell her to be less caring. Frame it as adding the direct muscle.",
      "Don't imply Influence predicts good management. It's one coachable behavior, not a rating.",
      "Don't use Team Dynamics to shame the caring style, flex it, don't replace it.",
    ],
    screensToShow: [
      "Select candidate compare (Isabelle versus a manager profile with stronger Influence)",
      "Develop → Influence attribute page",
      "Ask Wonderlic prompt live",
      "Team Dynamics → Communication & Interaction → Influence",
    ],
    screensToSkip: [
      "Index, unless the audience is IO / consultant",
      "Action Planner unless manager follow-through is a stated pain",
      "Raw score matrices that flatten the story",
    ],
    recap: {
      currentState: [
        "Supportive managers are trusted but avoid direct performance conversations.",
        "Underperformance lingers, and strong employees carry the frustration.",
        "Feedback is too soft to move behavior, and issues escalate later than they should.",
      ],
      futureState: [
        "Keep the trust supportive managers build, add the direct muscle on top.",
        "Give managers coaching language and scripts for the hard conversation.",
        "Protect strong employees by making accountability consistent across the team.",
      ],
    },
  },

  simon: {
    bestUseCase:
      "Leaders of managers whose promoted-from-IC managers are capable and high-standard, but become reactive, controlling, or bottlenecked under pressure, the team waits, decisions route back, and momentum stalls.",
    doNotUseWhen:
      "The manager is genuinely miscast or lacks the capability. Simon's story requires that the capability is real; the coaching is about pressure response and delegation.",
    strength:
      "Simon is capable. He knows what good looks like, he spots issues fast, and he was promoted because he was strong as an IC or technical leader. That capability is real, and the coaching story depends on it.",
    gap:
      "The gap shows up under pressure. He pulls decisions back, jumps into the work, shows visible frustration, over-checks the team, and becomes the bottleneck the team waits on. His standards don't drop, his ability to lead through others does.",
    developHelps:
      "Develop lets the manager understand how pressure changes Simon's leadership behavior and coach it specifically. The anchor is Stability, the ability to stay steady enough to delegate, set clear decision rights, and keep the team moving without lowering the bar.",
    discoveryTriggers: [
      "Our promoted managers become bottlenecks under pressure.",
      "The team waits for approval on things they should own.",
      "Managers pull work back when it gets tight.",
      "Visible frustration is starting to show up in meetings.",
      "We promoted strong ICs and lost our best IC.",
      "Delegation doesn't stick, the manager keeps re-taking it.",
      "The team is over-inspected under stress.",
      "Decisions slow down when the pressure is on.",
      "New managers can't scale their span of control.",
      "Standards are right; leadership behavior isn't.",
    ],
    clarifyingQuestion:
      "Is the concern that the promoted manager isn't capable, or that they're capable and become controlling under pressure? If it's the second, this is Simon.",
    demoArc:
      "Start with the pain: the leader who promoted a strong IC into management and is watching the team slow down under pressure. Introduce Simon, capable, high-standard, and reactive when it gets tight. Use Select to make the point that Stress Tolerance, Open-Mindedness, and Dependability are what let a promoted IC actually lead through others. Move to Develop and open Stability to make the coaching concrete, pressure response, delegation, decision rights. Drop the Ask Wonderlic prompt for three specific coaching moves. Then go to Team Dynamics → Getting Work Done Together → Your Team Approach (Stability doesn't have a dedicated TD page; name the substitution) to show the low/high Stability pattern across the team. Close by tying it to team throughput, retention of the strong ICs on his team, and keeping the promotion decision paying off.",
    select: {
      screenOut:
        "For management roles, patterns strong on the IC capability signals but flat on Stress Tolerance and Open-Mindedness tend to recreate the reactive-under-pressure pattern.",
      screenIn:
        "The stronger promoted-manager bets pair the IC strengths with pressure tolerance and the willingness to let others do the work. Use Select to separate 'great at the work' from 'great at leading the work.'",
      howToSayIt:
        "I'd use Select to answer a specific question about promoted ICs: can this person stay steady enough under pressure to let the team actually own the work?",
      caution:
        "Don't undermine the promotion, the story is coach the leadership behavior, not miscast the person.",
      supportingSignals: [
        "Stress Tolerance",
        "Open-Mindedness",
        "Dependability",
        "Structured Interest",
        "Cognitive Ability",
      ],
    },
    develop: {
      primary: "Stability",
      whyAnchor:
        "Stability is where the coachable pressure response lives. Under load, it's the difference between staying steady enough to delegate and pulling everything back into your own hands.",
      supporting: ["Stress Tolerance", "Open-Mindedness", "Decision Making"],
      plainEnglish:
        "For Simon, Stability shows up as how he behaves when the pressure rises. Does he stay steady, delegate, and keep decision rights clear? Or does he pull work back, over-check, and become the bottleneck the team waits on? That's the coaching surface, and none of it requires lowering the standard.",
      coachingAction:
        "Identify three decisions currently routing through Simon that should live with the team. Delegate them explicitly, with clear decision rights and a check-in cadence. Manager coaches Simon through resisting the pull-back for two weeks.",
      dontSay:
        "Don't call him controlling as a personality trait. Don't say Develop 'fixes' Stability. Frame it as coaching the pressure-response behavior.",
    },
    teamDynamics: {
      section: "Getting Work Done Together",
      page: "Your Team Approach",
      whyThisPage:
        "Stability doesn't have a dedicated Team Dynamics page in this flow. Your Team Approach is the right place to tell the low/high Stability story at the team level. Name the substitution out loud.",
      managerInsight:
        "Under pressure, some managers steady the team. Others transmit their pressure into the team. If Simon doesn't see the pattern, his team absorbs it, and his strongest ICs leave.",
      howToExplain:
        "Higher Stability leaders create a steadier work environment under pressure. Lower Stability leaders can hold the standard, but the team feels the pressure spikes and adjusts around them. The coaching is about staying steady enough for the team to own the work.",
      whatToSay:
        "At the individual level, this is Simon's pressure story. At the team level, Your Team Approach shows how his response under load shapes the environment his team works in, and where he can flex.",
      dontOverclaim:
        "Don't say Stability predicts good leadership. Say it shows how a leader behaves under pressure and what a manager can coach.",
    },
    talkTracks: {
      thirtySecond:
        "This is Simon. Strong IC, newly promoted, becoming the bottleneck under pressure. Develop opens Stability so the manager can coach delegation and pressure response before the team slows down or the strongest ICs leave.",
      threeMinute:
        "Every leader who promotes ICs into management has a Simon. He was great at the work, that's why he got promoted. And now, under pressure, he's the reason the team is slow. He pulls decisions back, jumps into the work, over-checks, and becomes the bottleneck everyone waits on. His standards are right. His ability to lead through others is what's cracking. On Select, Stress Tolerance and Open-Mindedness are what separate 'great at the work' from 'great at leading the work.' On Develop, we open Stability to make coaching specific: pressure response, delegation, clear decision rights. In Team Dynamics, and Stability doesn't have its own TD page, so we use Your Team Approach, we show how a leader's response under pressure shapes the whole environment the team works in. The story ends with a promoted manager who scales instead of bottlenecks, and a team that keeps its strongest ICs.",
      recordingGuide:
        "Open with the pain: 'We promoted a strong IC into management and the team slowed down.' Anchor Simon as the recognizable manager, capable, high-standard, reactive under pressure. Show Select and be explicit: we are not questioning the promotion, we are making sure we know what to coach. Bridge to Develop with a line like: 'This is where a manager coaches the pressure response so the promotion actually pays off.' Open the Stability attribute page and explain it in plain English, how Simon behaves when the pressure rises, whether he can stay steady enough to delegate. Drop the Ask Wonderlic prompt live: 'Give me three coaching moves for a promoted IC who is becoming a bottleneck because they can't delegate under pressure.' Read the response as a coaching artifact. Move to Team Dynamics → Getting Work Done Together → Your Team Approach and name the substitution: 'Stability doesn't have a dedicated Team Dynamics page. Your Team Approach is where we tell the low/high Stability story at the team level.' Reframe it as how a leader's pressure response shapes the team's environment. Close by tying to throughput, decision speed, and keeping strong ICs from leaving.",
    },
    askWonderlic:
      "Give me three coaching moves for a promoted IC who is becoming a bottleneck because they can't delegate under pressure. Include specific decision rights to hand off in the next two weeks.",
    cautions: [
      "Don't undermine the promotion, the story is coaching, not miscasting.",
      "Don't call Simon controlling as a personality. Frame it as pressure response and delegation behavior.",
      "Your Team Approach is the substitute Team Dynamics page for Stability. Name the substitution.",
      "Don't imply Develop 'fixes' Stability. It gives the manager language to coach the pressure response.",
    ],
    screensToShow: [
      "Select candidate compare (Simon versus a manager profile with stronger pressure tolerance)",
      "Develop → Stability attribute page",
      "Ask Wonderlic prompt live",
      "Team Dynamics → Getting Work Done Together → Your Team Approach",
    ],
    screensToSkip: [
      "Any standalone Stability Team Dynamics page, it doesn't exist here",
      "Index unless the audience is IO / consultant / technical L&D",
      "Deep raw score matrices",
    ],
    recap: {
      currentState: [
        "Promoted-IC managers pull work back and become bottlenecks under pressure.",
        "Decision speed slows and the team waits on approval for work they should own.",
        "Strong ICs on the team get frustrated and start looking elsewhere.",
      ],
      futureState: [
        "Coach the pressure response so promoted managers can lead through others.",
        "Establish clear decision rights that hold up when the pressure rises.",
        "Keep the promotion paying off and retain the strong ICs the manager depends on.",
      ],
    },
  },
};

export const guidanceFor = (id: ArchetypeId) => ARCHETYPE_GUIDANCE[id];
