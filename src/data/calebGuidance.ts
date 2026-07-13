// Gold-standard, Caleb-only demo guidance. Same shape as ETHAN_GUIDANCE / DEREK_GUIDANCE
// so the gold-standard detail component pattern can render it. No em dashes.

export const CALEB_GUIDANCE = {
  header: {
    name: "Caleb Turner",
    firstName: "Caleb",
    memoryHook: "Compassion Caleb",
    primaryGap: "Low Compassion",
    story: "Technical expert who creates team friction",
    developAnchor: "Compassion",
    teamDynamicsPath: "Communication & Interaction → Compassion",
    oneSentence:
      "Caleb is a technical expert who solves hard problems and brings valuable knowledge, but his communication style can make that expertise harder for teammates to access.",
    useWhen: [
      "Someone is smart but hard to work with.",
      "Technical people are capable but create friction.",
      "Expertise is hard for teammates to access.",
      "Handoffs are painful.",
      "Teammates avoid the expert.",
      "Knowledge is stuck in one person.",
      "Technical standards are high, but collaboration is slow.",
      "The person solves problems, but creates drag around them.",
      "The team depends on one expert, but that expertise does not scale.",
    ],
    doNotUseWhen: [
      "The issue is poor follow-up, documentation, or loop closure. Use Derek.",
      "The issue is inconsistent frontline execution or rework. Use Riley.",
      "The issue is managers avoiding accountability. Use Isabelle.",
      "The issue is a manager becoming reactive or controlling under pressure. Use Simon.",
    ],
  },
  runThisDemo: {
    anchorOnThisPain:
      "The organization has people with strong technical ability, but collaboration breaks down because their expertise is hard for others to access, handoffs are painful, or teammates avoid asking them for help.",
    select:
      "Use Select to catch the candidate whose technical capability may look strong, but whose collaboration or communication style could make that expertise harder for the team to access.",
    develop:
      "Use Develop to help the manager coach the communication impact without making it personal: explain reasoning, check for understanding, and make expertise easier for others to use.",
    teamDynamics:
      "Use Team Dynamics to show how communication style varies across the team, so the manager can coach collaboration without lowering technical standards.",
    valueClose:
      "Wonderlic helps the customer avoid hiring technical talent that adds capability on paper but slows the team down in practice, then gives managers a practical way to coach how expertise moves through the team.",
  },
  coreStory: [
    "Caleb is not a bad employee. That is why the story works.",
    "Caleb may be one of the most technically capable people on the team. He solves hard problems, spots issues others miss, and knows the work deeply. Managers may rely on him because his expertise is real.",
    "The problem is that expertise only creates full value when other people can access it.",
    "If Caleb is blunt, impatient, dismissive, or hard to approach, teammates may avoid him. Handoffs may slow down. Junior employees may hesitate to ask questions. Knowledge can get trapped in one person. The team may still need Caleb, but Caleb also becomes part of why the team cannot move faster.",
    "That is the business pain.",
  ],
  coreStoryHelps: [
    {
      label: "Select",
      body: "Catch the person who may look technically strong in the hiring process but carry collaboration risk for a team-based role.",
    },
    {
      label: "Develop",
      body: "If Caleb is already here, give the manager specific language to coach communication impact without attacking the person or lowering the technical standard.",
    },
    {
      label: "Team Dynamics",
      body: "Help the manager see how communication patterns vary across the team, so they can improve handoffs, knowledge sharing, and collaboration without treating everyone the same.",
    },
  ],
  selectMoment: {
    purpose:
      "Select helps hiring teams evaluate candidates against the requirements of a specific job. Candidates take Wonderlic, and the platform translates cognitive ability, personality, and motivation into a job-specific fit read. The key phrase is job-specific. We are not saying good person or bad person. For a technical or expert role, we are asking whether the person can apply that expertise in the way the team and role require.",
    whatToShow: [
      "Select homepage briefly, only enough to show active jobs and candidate pipeline.",
      "Open the relevant technical, expert, specialist, engineering, operations, or skilled role.",
      "Candidate ranking or fit score.",
      "Individual candidate result.",
      "Key indicators tied to technical problem-solving, collaboration, communication style, and role fit.",
      "Candidate Compare if showing tradeoffs between two technically strong profiles.",
      "Interview Guide if you want to show how the insight becomes a better technical interview.",
      "New Hire Success Tips if you want to show manager handoff after hire.",
    ],
    productBasics:
      "Every active job can live here, and each job has its own candidate pool. The important thing is that candidates are not being ranked against a generic benchmark. They are being evaluated against what success looks like in this specific role.",
    storyTranslation:
      "For Caleb, the hiring question is not can this person solve technical problems. The question is: would this person look strong enough in the technical interview, but still carry the same collaboration risk that is already slowing down handoffs, knowledge sharing, or team execution?",
    ownWords: [
      "The interview may overvalue Caleb's technical expertise.",
      "Select helps pressure-test the parts of the role that are easier to miss in a technical conversation.",
      "For Caleb, inspect technical capability and collaboration signals together.",
      "The value is avoiding hiring expertise that becomes difficult for the team to access.",
    ],
    signalsToInspect: [
      "Cooperation",
      "Sociability",
      "Open-Mindedness",
      "Investigative Interest",
      "Applied Interest",
      "Cognitive Ability",
    ],
    signalsNote:
      "Related Select signals are directional story inputs, not one-to-one equivalents.",
    fullScript: `On the Select side, this is where Wonderlic helps before technical expertise becomes a collaboration problem.

I would think about Caleb as the candidate who could absolutely impress in a technical interview. He may know the work. He may solve hard problems quickly. He may give answers that make the hiring manager think, "This person is sharp. We need someone like this."

And that may all be true.

But the pain you described is not only whether someone has the technical skill. The pain is whether the team can actually access that skill. Will handoffs work? Will teammates ask questions early? Will this person explain decisions in a way others can use? Will they raise the standard without making everyone avoid them?

So when I am looking at a candidate in Select, I am not using this as a replacement for the technical interview. I am using it to make the technical interview smarter.

The overall fit helps you prioritize where to spend time. But once I open the individual result, this is where I want to understand the tradeoffs. If someone has strong technical or problem-solving indicators, that may explain why they look good on paper or in the interview. But if this role requires collaboration, coaching others, cross-functional handoffs, or knowledge sharing, I also want to inspect the signals related to cooperation, communication, and openness.

That is the hidden risk Caleb represents. He may look strong enough technically, but if the job requires the team to use his expertise, this gives the hiring team a way to pressure-test that before they make the hire.`,
    interviewGuideReference: `I would also use this to shape the interview. If collaboration around technical expertise is the business pain, I do not want the hiring manager only asking technical questions. A technically strong person may still struggle to bring others along.

I would want the interview guide to help them ask for evidence.

Something like: "Tell me about a time you had to explain a technical decision to someone who did not have your same background. How did you make sure they understood?"

Or: "Walk me through a time a teammate disagreed with your approach. What did you do?"

Or: "Tell me about a handoff that did not go well. What did you learn from it?"

That is a much better use of the assessment. It does not make the decision for the manager. It shows the manager what to probe.`,
    newHireTipsReference: `And if you do hire someone where there is a collaboration risk, the value does not stop at the hiring decision. The manager can use the new hire guidance to onboard more intentionally.

For Caleb, that might mean setting expectations early around how decisions get documented, how handoffs happen, when teammates should be brought in, and how the person shares expertise with less experienced employees. You do not wait until everyone is avoiding the expert. You manage to the behavior from the beginning.`,
    midDemoQuestions: [
      "Does that mirror what happens today, where someone can look technically strong but the collaboration issue only shows up once they are working with the team?",
      "Are your hiring managers currently probing how technical candidates communicate and hand off work, or does the interview mostly focus on whether they know the work?",
      "When these people struggle, is the bigger issue that they do not know the work, or that others cannot easily access what they know?",
      "Would this be more useful earlier in the funnel to pressure-test fit, or later when managers are comparing technically strong finalists?",
    ],
    valueTieBack:
      "This is where Wonderlic helps you avoid hiring into the same collaboration problem you are already trying to manage. It gives the hiring team objective, job-specific evidence before they spend interview time, ramp time, manager time, and team trust on someone whose expertise may not scale through the group.",
    caution: {
      dontSay: "This person will be difficult to work with.",
      doSay:
        "For this role, communication impact and approachability are meaningful areas to inspect because the job requires expertise to move through the team.",
    },
  },
  selectToDevelopTransition: `So that is the pre-hire version of Caleb.

But a lot of organizations already have Caleb on the team. And that is where the conversation changes.

We are no longer asking, "Should we hire Caleb?" We already did. Now the question is, "How do we help his expertise create more value for the team?"

And this is where I think Develop is really useful, because managers often know the behavior they are frustrated by, but they do not always know how to coach it specifically. They say things like, "you need to be nicer," "you need to be more patient," or "people are intimidated by you."

That may be directionally true, but it can feel personal and it is not very coachable.

Develop helps turn that into a more precise conversation: what is the communication behavior, why does it matter in this role, and how can the manager help Caleb make his expertise easier for others to use?`,
  developMoment: {
    purpose:
      "Develop helps managers and employees focus on the behaviors most worth improving in the context of the person and the role. The assessment is the entrance into a development conversation, not the end of the conversation.",
    whatToShow: [
      "Develop homepage for Caleb.",
      "Strengths first.",
      "Critical attributes for the role.",
      "Compassion as the primary harder-for-you attribute.",
      "Attribute detail page.",
      "Suggested actions or coaching guidance.",
      "Ask Wonderlic.",
      "Action Planner only if the customer cares about goal tracking, manager follow-through, or behavior adoption.",
    ],
    productBasics:
      "This is Caleb's Develop profile. The important shift is that we are not using this to decide whether to hire him. We are using it to help Caleb and his manager understand where he may naturally bring strengths, where parts of the role may take more intentional effort, and what behavior is most worth coaching next.",
    storyTranslation:
      "Caleb's development story is not that Caleb lacks empathy. It is that Caleb may bring real technical strength, but the way that expertise lands with others may take more intentional effort. That matters in this role because the team needs to access his knowledge, not work around it.",
    ownWords: [
      "Start with Caleb's strengths so this does not feel like a deficit report.",
      "Compassion is the behavior anchor, but do not moralize it.",
      "The manager should coach the communication impact, not the person's character.",
      "The output should be one observable collaboration behavior and one inspection point.",
    ],
    fullScript: `This is where I would start with Caleb's strengths, because that is what makes this believable.

Caleb may be very strong technically. He may solve hard problems. He may spot issues that other people miss. That matters. We are not trying to coach that out of him.

But if I am his manager, the performance gap I care about is whether that expertise is usable by the team.

So I would open Compassion here because it gives us a cleaner way to talk about the behavior. And I would be careful with the language. I would not say, "Caleb lacks empathy" or "Caleb does not care." That is not the point.

For Caleb, Compassion is about communication impact. Does he check how his message lands? Does he slow down enough to bring others with him? Does he explain the reasoning before the conclusion? Do teammates feel like they can ask questions early, or do they avoid him until the issue is already bigger?

That is what I would coach.

And I would be careful not to say, "Caleb, you need to be nicer." He has probably heard some version of that before, and it is too personal to change much.

Instead, the coaching becomes very concrete. Before handing off a decision, explain the reasoning. After giving direction, ask the teammate to repeat the next step. When someone asks a basic question, treat it as a chance to make the team stronger, not as a distraction from the work.

That is the value of Develop. It turns a vague interpersonal frustration into a communication behavior the manager can actually coach.`,
    askWonderlicPrompt:
      "Help me coach Caleb, a technical expert who solves hard problems but whose communication style can make his expertise harder for teammates to access. Give me three coaching questions, three specific behaviors he can practice during handoffs or technical explanations, and a simple one-on-one follow-up plan his manager can use to inspect progress without making the feedback feel personal.",
    askWonderlicScript: `This is where Ask Wonderlic becomes useful because a lot of managers can identify the issue, but they do not always know how to turn it into a good coaching conversation.

So instead of the manager starting from scratch, I can ask for coaching questions, behaviors, and a one-on-one follow-up plan based on Caleb's actual profile and the behavior we are trying to improve.

That might give the manager questions like: "Where do teammates most often get stuck when they need your help?" "How do you know whether your explanation landed?" "What is one handoff this week where you can slow down and make the next step clearer?"

Now the manager is not just saying, "Be nicer." They are helping Caleb make his expertise easier for the team to use.`,
    actionPlannerMention: `I would not necessarily spend a ton of time here unless manager follow-through and adoption are big issues for you. But once Caleb and his manager agree on the behavior, Action Planner gives them a place to track the habit and keep it alive after the first coaching conversation.

That matters because collaboration behavior usually does not change because of one good feedback conversation. It changes because the manager keeps coming back to the same behavior: how did the handoff go, did the teammate understand, and what will you do differently next time?`,
    midDemoQuestions: [
      "Is this how your managers typically coach technical friction today, or does it stay more at the 'be nicer' or 'be more patient' level?",
      "Where does this behavior matter most for your team: handoffs, onboarding junior people, cross-functional work, quality issues, or escalation?",
      "When managers coach high-expertise employees, do they have a repeatable way to talk about communication impact without making it personal?",
      "Would this be more useful in one-on-ones, onboarding, team collaboration conversations, or all of the above?",
    ],
    valueTieBack:
      "This is where Wonderlic helps managers get more team value out of the technical talent they already have. The value is not just the insight. It is the manager action that becomes easier: a specific communication behavior, a clear inspection point, and a way to keep coaching it without making it personal.",
    caution: {
      dontSay: "Caleb lacks empathy or does not care about people.",
      doSay:
        "For this role, Caleb needs a more consistent communication behavior so his expertise is easier for the team to access.",
    },
  },
  developToTeamTransition: `So that is Caleb as one individual.

But managers do not manage one profile in isolation. They manage a team where communication styles vary, and where the same technical standard has to move through very different people.

That is where Team Dynamics becomes helpful. It takes the same type of insight and gives the manager a way to see how communication and collaboration patterns show up across the team.`,
  teamDynamicsMoment: {
    purpose:
      "Team Dynamics helps managers see how the same behavior shows up across the team, so they can adapt coaching and collaboration instead of managing everyone the same way.",
    whatToShow: [
      "Open the relevant technical, engineering, operations, or specialist team.",
      "Go to Communication & Interaction.",
      "Open Compassion.",
      "Point to the spread across the team.",
      "Show how high and low patterns require different manager behavior.",
      "Explain that the same technical standard may need to be coached through different communication styles.",
      "Do not make it about one outlier.",
    ],
    productBasics:
      "This is not an individual report anymore. This is helping the manager understand the team pattern. How do people on this team tend to communicate? Who naturally checks how their message lands and invites others in? Who may need more intentional coaching around how expertise is shared, explained, or handed off?",
    storyTranslation:
      "At the individual level, Caleb is a Compassion story. At the team level, Compassion helps the manager think about how communication style affects collaboration, handoffs, and how expertise moves through the team.",
    ownWords: [
      "Caleb may need coaching around how his message lands and how he brings others in.",
      "Another teammate may naturally invite questions and slow down to explain.",
      "The same technical standard can be coached through different communication styles.",
      "The value is manager flexibility and more scalable knowledge sharing.",
    ],
    fullScript: `At the individual level, Caleb is a communication-impact story. At the team level, I would use Compassion to help the manager think about how communication styles vary across the group and how that shapes collaboration.

And I would not position this as, "Here is the difficult person on the team." That is not the point.

The point is that different team members bring different communication styles, and the manager can coach the same technical standard through those different styles.

One person may naturally check for understanding, invite questions, and slow down for a less experienced teammate. That may be why handoffs to them feel easier. Caleb may not do that on his own. He may go straight to the answer. So the manager may need to coach specific communication moves: explain the reasoning first, ask the teammate to repeat the next step, and treat basic questions as a chance to strengthen the team.

The outcome is still the same. The technical standard does not drop. But the way expertise moves through the team gets healthier.

That is the value of Team Dynamics. It helps the manager stop coaching every technical person the same way and start asking: how does this person's communication style affect the team, and what specifically should I coach so their expertise creates more value for everyone else?`,
    midDemoQuestions: [
      "Do your managers currently know which technical people on the team naturally bring others along versus which ones need more intentional coaching there?",
      "When collaboration breaks down around a technical expert, do managers know how to coach the communication impact without making it about personality?",
      "Where does this show up most clearly for you: handoffs, cross-functional work, onboarding, incident response, or knowledge sharing?",
      "Would this help managers coach more consistently across the team, especially where technical strength and communication style do not always come together?",
    ],
    valueTieBack:
      "This helps managers stop guessing. Wonderlic gives them a clearer view of how communication and collaboration vary across the team, so they can hold the same technical standard while coaching each person through the communication style that actually works.",
    proxyNote: "",
    caution:
      "Do not say low Compassion means someone does not care. Say communication impact varies across the team, and the manager can coach how expertise moves through the group. Do not make Team Dynamics about identifying one difficult person.",
  },
  fullClose: `So if I pull this all the way back up, Caleb is the same human pattern across the platform, but the use case changes.

In Select, the question is: would this person look strong in the hiring process but carry the collaboration risk that is already slowing your team down?

In Develop, the question is: if this person is already on the team, how do we coach the communication behavior specifically enough that it can actually change, without lowering the technical standard?

And in Team Dynamics, the question is: how does the manager adapt across the team so they are not treating every technical person the same way?

That is the reason this matters beyond the assessment score. You are not just getting a profile. You are getting a more consistent way to make the hire, coach the behavior, and help expertise move through the team.

For a team dealing with strong technical talent whose expertise is hard for others to access, this gives you a way to catch the risk earlier and coach the behavior more consistently when it shows up.`,
  recap: {
    currentState: [
      "Strong technical talent solves hard problems, but expertise is hard for the rest of the team to access.",
      "Handoffs, cross-functional work, and questions from less experienced teammates slow down around the expert.",
      "Managers know the friction but tend to coach it as vague feedback like 'be nicer' or 'be more patient.'",
    ],
    futureState: [
      "Identify candidates more likely to combine technical strength with the collaboration behavior the role requires.",
      "Give managers a more precise way to coach communication impact without making it personal or lowering the technical standard.",
      "Help managers adapt across the team so expertise moves through the group instead of getting stuck in one person.",
    ],
  },
  cautions: [
    "Do not say Caleb is a bad teammate or a bad person.",
    "Do not say low Compassion means he does not care about people.",
    "Do not say Select proves he will be difficult to work with.",
    "Do not imply Select and Develop are one-to-one equivalents.",
    "Do not walk every score.",
    "Do not make Develop sound like a personality fix.",
    "Do not coach this as 'be nicer' or 'be more patient.'",
    "Do not make Team Dynamics about identifying one difficult outlier.",
    "Do not over-demo Action Planner unless manager follow-through, goal tracking, or adoption is a known pain.",
  ],
};

export type CalebGuidance = typeof CALEB_GUIDANCE;
