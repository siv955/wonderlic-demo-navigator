// Gold-standard, Isabelle-only demo guidance. Same shape as RILEY_GUIDANCE
// so the gold-standard detail component pattern can render it, with the
// addition of a Business Impact Ladder. No em dashes.

export const ISABELLE_GUIDANCE = {
  header: {
    name: "Isabelle Martin",
    firstName: "Isabelle",
    memoryHook: "Influence Isabelle",
    primaryGap: "Low Influence",
    story: "Supportive manager who avoids accountability",
    developAnchor: "Influence",
    teamDynamicsPath: "Communication & Interaction → Influence",
    oneSentence:
      "Isabelle is a supportive manager who builds trust and cares about her team, but struggles to use that trust to set clear expectations, give direct feedback, and hold people accountable.",
    useWhen: [
      "Managers avoid hard conversations.",
      "Managers are liked but do not hold people accountable.",
      "Managers only give positive feedback.",
      "Performance issues linger too long.",
      "Expectations are unclear.",
      "HR gets pulled in after the issue has grown.",
      "Strong employees get frustrated because underperformance is tolerated.",
      "Managers soften the message so much that the employee does not understand what needs to change.",
      "One-on-ones are friendly but not performance-driving.",
      "Leaders say managers need to have more direct conversations.",
      "Managers care about their people, but struggle to turn care into accountability.",
    ],
    doNotUseWhen: [
      "The issue is poor follow-up, CRM hygiene, or customer loop closure. Use Derek.",
      "The issue is commercial urgency or direct asks from a seller. Use Ethan.",
      "The issue is technical expertise creating team friction. Use Caleb.",
      "The issue is inconsistent frontline execution or rework. Use Riley.",
      "The issue is a manager becoming reactive, controlling, or a bottleneck under pressure. Use Simon.",
    ],
  },
  runThisDemo: {
    anchorOnThisPain:
      "Managers care about their people and may be well-liked, but they avoid direct feedback, soften accountability conversations, or allow performance issues to linger until numbers are missed, production or service standards slip, strong employees get frustrated, or HR and senior leaders have to step in.",
    select:
      "Use Select to catch the manager candidate or promotion candidate who may present as supportive and people-oriented, but may not naturally bring the directness and influence needed to set expectations, address performance, and move difficult conversations forward.",
    develop:
      "Use Develop to help the manager coach the accountability behavior without asking Isabelle to become harsh: name the gap clearly, connect it to impact, and agree on the next observable behavior.",
    teamDynamics:
      "Use Team Dynamics to show how influence and directness vary across the team, so leaders can coach managers and employees differently instead of assuming everyone will speak up, challenge, or hold the line the same way.",
    valueClose:
      "Wonderlic helps the customer avoid putting people into manager roles where trust exists but accountability lags, then gives leaders a practical way to coach clearer feedback, expectation-setting, and follow-through before lingering performance issues turn into missed numbers, production drag, HR escalations, or preventable turnover.",
  },
  businessImpactLadder: {
    observablePattern:
      "Supportive managers build trust but avoid direct feedback, soften expectations, or delay accountability conversations.",
    operationalConsequence:
      "Performance issues linger, employees leave conversations unclear about what needs to change, strong employees carry more of the burden, and HR or senior leaders get pulled in late.",
    businessPain:
      "Teams miss numbers, production or service standards slip, underperformance becomes normalized, strong employees get frustrated, and preventable turnover risk increases.",
    wonderlicValue:
      "Wonderlic helps identify accountability risk before manager hire or promotion and gives leaders a practical way to coach direct feedback, expectation-setting, and follow-through.",
  },
  coreStory: [
    "Isabelle is not a bad manager. That is why the story works.",
    "Isabelle may care deeply about her people. Her team may like her. Employees may feel safe with her, and leaders may see her as steady, supportive, and good for morale.",
    "The problem is that support does not automatically create accountability.",
    "When someone is missing expectations, Isabelle may soften the message. She may delay the conversation. She may give too much context and not enough clarity. She may hope the employee picks up on the issue without having to say it directly. The one-on-one feels positive, but the behavior does not change.",
    "Over time, underperformance lingers. Strong employees get frustrated. HR gets pulled in late. Senior leaders wonder why the manager did not address the issue sooner. The team can miss numbers, production or service standards can slip, and preventable turnover risk can increase because performance issues were not addressed early enough.",
    "That is the business pain.",
  ],
  coreStoryHelps: [
    {
      label: "Select",
      body: "Catch the person who may look like a strong manager because they are supportive and people-oriented, but carry hidden risk for a role that requires direct feedback and accountability.",
    },
    {
      label: "Develop",
      body: "If Isabelle is already here, give the leader specific language to coach expectation-setting, direct feedback, and accountability conversations.",
    },
    {
      label: "Team Dynamics",
      body: "Help leaders understand how influence and directness vary across the team, so they can coach communication and accountability more intentionally.",
    },
  ],
  selectMoment: {
    purpose:
      "Select helps hiring teams evaluate candidates against the requirements of a specific job. Candidates take Wonderlic, and the platform translates cognitive ability, personality, and motivation into a job-specific fit read. The key phrase is job-specific. We are not saying good person or bad person. For a manager role, that means we are not only asking whether the person is liked, supportive, or experienced. We are asking whether they can set expectations, address performance, stay steady in difficult conversations, and move people toward behavior change.",
    whatToShow: [
      "Select homepage briefly, only enough to show active jobs and candidate pipeline.",
      "Open the relevant manager, supervisor, team lead, or leadership role.",
      "Candidate ranking or fit score.",
      "Individual candidate result.",
      "Key indicators tied to people leadership, accountability, directness, resilience, and role fit.",
      "Candidate Compare if showing tradeoffs between two manager candidates.",
      "Interview Guide if you want to show how the insight becomes a better manager interview.",
      "New Hire Success Tips if you want to show leader handoff after hire or promotion.",
    ],
    productBasics:
      "Every active job can live here, and each job has its own candidate pool. The important thing is that candidates are not being ranked against a generic benchmark. They are being evaluated against what success looks like in this specific role.",
    storyTranslation:
      "For Isabelle, the hiring or promotion question is not will people like this manager. The question is: would this person look strong because they are supportive and trusted, but still carry the same accountability risk that is already allowing performance issues to linger, standards to slip, or strong employees to carry the cost?",
    ownWords: [
      "The interview may overvalue Isabelle's warmth, supportiveness, or team-first style.",
      "Select helps pressure-test the parts of management that are easier to miss in conversation.",
      "For Isabelle, inspect the people orientation and the accountability signals together.",
      "The value is avoiding a manager hire or promotion where trust exists, but direct performance leadership is missing.",
      "The business reason this matters is that delayed accountability can become missed numbers, production drag, HR escalation, or preventable turnover.",
    ],
    signalsToInspect: [
      "Enterprising Interest",
      "Stress Tolerance",
      "Sociability",
      "Cooperation",
      "Supportive Interest",
      "Dependability",
    ],
    signalsNote:
      "Related Select signals are directional story inputs, not one-to-one equivalents.",
    fullScript: `On the Select side, this is where Wonderlic helps before a supportive manager becomes an accountability problem.

I would think about Isabelle as the candidate who could absolutely look strong in a manager interview. She may be thoughtful. She may be supportive. She may talk about caring for the team and building trust. The hiring manager may leave the conversation thinking, "People will like working for her."

And that may be true.

But the pain you described is not only whether employees like the manager. The pain is whether the manager can set expectations, name the gap, and move the employee toward a behavior change when performance is not where it needs to be.

Because when that does not happen, the issue does not stay isolated to one awkward conversation. Performance issues linger. Strong employees get frustrated. HR gets pulled in late. Production, service, or team numbers can suffer because the manager did not address the issue early enough.

So when I am looking at a candidate in Select, I am not using this as a replacement for the interview. I am using it to make the interview smarter.

The overall fit helps you prioritize where to spend time. But once I open the individual result, this is where I want to understand the tradeoffs. If someone has strong people-oriented signals, that may explain why they come across well and build trust. But if this manager role requires direct feedback, accountability, and difficult conversations, I also want to inspect the signals related to influence, stress tolerance, and follow-through.

That is the hidden risk Isabelle represents. She may look strong because she is supportive, but if the job requires turning trust into clear accountability, this gives the hiring team a way to pressure-test that before they make the hire or promotion decision.`,
    interviewGuideReference: `I would also use this to shape the interview. If accountability is the business pain, I do not want the hiring manager asking only, "How do you build trust with your team?" or "How would you describe your management style?" Those questions matter, but they do not fully get at the risk.

I would want the interview guide to help them ask for evidence.

Something like: "Tell me about a time you had to give direct feedback to someone you liked or had a strong relationship with. What did you say?"

Or: "Walk me through a performance issue you addressed before it became an HR problem."

Or: "Tell me about a time an employee left a conversation clearly understanding what needed to change. How did you make sure the message landed?"

That is a much better use of the assessment. It does not make the decision for the manager. It shows the manager what to probe.`,
    newHireTipsReference: `And if you do hire or promote someone where accountability may need more structure, the value does not stop at the decision. The leader can use the new hire guidance to onboard the manager more intentionally.

For Isabelle, that might mean setting expectations early around one-on-ones, feedback cadence, documentation, when to escalate, and how to make expectations clear before performance issues linger. You do not wait until the team misses numbers, HR is pulled in, or strong employees are frustrated. You manage to the behavior from the beginning.`,
    midDemoQuestions: [
      "Does that mirror what happens today, where someone is liked as a manager but the accountability issue only shows up after they have a team?",
      "Are your hiring managers currently probing for direct feedback and difficult conversation skills, or does the interview mostly focus on leadership style?",
      "When performance issues linger today, is the bigger issue that managers do not care, or that they struggle to say the hard thing clearly?",
      "What does delayed accountability usually turn into for you: missed numbers, slowed production, HR escalation, stronger employees getting frustrated, or turnover?",
      "Would this be more useful for external manager hiring, internal promotions, or both?",
    ],
    valueTieBack:
      "This is where Wonderlic helps you avoid putting someone into a manager role who builds trust but does not create enough accountability. It gives the hiring team objective, job-specific evidence before they spend interview time, ramp time, leader time, and team trust on someone who may recreate the same management gap and allow performance issues to turn into missed numbers, production drag, HR escalation, or preventable turnover.",
    caution: {
      dontSay:
        "This person cannot manage. Or: Low Influence means they are weak.",
      doSay:
        "This is a risk area to understand and probe before moving forward. For this role, direct feedback and accountability are meaningful areas to inspect because the job requires moving people toward behavior change.",
    },
  },
  selectToDevelopTransition: `So that is the pre-hire or promotion version of Isabelle.

But a lot of organizations already have Isabelle on the team. And that is where the conversation changes.

We are no longer asking, "Should we put Isabelle into the manager role?" We already did. Now the question is, "How do we help her use the trust she has built to create clearer accountability?"

And this is where I think Develop is really useful, because leaders often know the behavior they are frustrated by, but they do not always know how to coach it specifically. They say things like, "you need to be more direct," "you need to hold people accountable," or "you need to have harder conversations."

That may be directionally true, but it is not very coachable.

Develop helps turn that into a more precise conversation: what expectation needs to be named, what impact needs to be made clear, what behavior needs to change, and how should the manager inspect the follow-through before the issue becomes bigger than it needed to be?`,
  developMoment: {
    purpose:
      "Develop helps managers and employees focus on the behaviors most worth improving in the context of the person and the role. The assessment is the entrance into a development conversation, not the end of the conversation.",
    whatToShow: [
      "Develop homepage for Isabelle.",
      "Strengths first.",
      "Critical attributes for the role.",
      "Influence as the primary harder-for-you attribute.",
      "Attribute detail page.",
      "Suggested actions or coaching guidance.",
      "Ask Wonderlic.",
      "Action Planner only if the customer cares about goal tracking, manager follow-through, or behavior adoption.",
    ],
    productBasics:
      "This is Isabelle's Develop profile. The important shift is that we are not using this to decide whether to hire or promote her. We are using it to help Isabelle and her leader understand where she may naturally bring strengths, where parts of the role may take more intentional effort, and what behavior is most worth coaching next.",
    storyTranslation:
      "Isabelle's development story is not that Isabelle needs to become harsh. It is that Isabelle may build trust naturally, but direct feedback and accountability conversations take more intentional effort. That matters in this role because her team needs clarity, not just support.",
    ownWords: [
      "Start with Isabelle's strengths so this does not feel like a deficit report.",
      "Influence is the behavior anchor.",
      "The leader should coach the accountability behavior, not the person's character.",
      "The output should be one clear expectation, one impact statement, one behavior change, and one inspection point.",
      "The business reason this matters is that unclear accountability allows performance issues to linger until they affect team results.",
    ],
    fullScript: `This is where I would start with Isabelle's strengths, because that is what makes this believable.

Isabelle may care deeply about her team. She may build trust. People may feel safe with her. That matters. We are not trying to coach that out of her.

But if I'm her leader, the performance gap I care about is what happens when support needs to become accountability.

So I would open Influence here because it gives us a cleaner way to talk about the behavior. For Isabelle, Influence is not about being loud or dominant. It is about whether she can move a conversation toward clarity and behavior change.

Does she name the issue clearly? Does she explain the impact? Does the employee leave knowing what needs to change? Does she inspect the follow-through? Or does she soften the message so much that the employee leaves thinking the conversation went fine?

That is what I would coach.

And I would be careful not to say, "Isabelle, you need to be tougher." She has probably heard some version of that before, and it is too vague to change anything.

Instead, the coaching becomes very concrete. Before the conversation, write down the one expectation that is not being met. Name the impact of that gap. Ask the employee to confirm what they heard. Agree on the next observable behavior. Then inspect that behavior in the next one-on-one.

That matters because accountability is not just an HR issue. If the manager does not name the expectation early, the team can miss numbers, production or service standards can slip, and stronger employees can start carrying the cost.

That is the value of Develop. It turns a vague frustration into an accountability behavior the leader can actually coach.`,
    askWonderlicPrompt:
      "Help me coach Isabelle, a supportive manager who builds trust but struggles to give direct feedback and hold people accountable. Give me three coaching questions, three specific routines she can use before and during performance conversations, and a simple one-on-one follow-up plan her leader can use to inspect progress without asking her to become harsh.",
    askWonderlicScript: `This is where Ask Wonderlic becomes useful because a lot of leaders can identify the issue, but they do not always know how to turn it into a good coaching conversation.

So instead of the leader starting from scratch, I can ask for coaching questions, routines, and a one-on-one follow-up plan based on Isabelle's actual profile and the behavior we are trying to improve.

That might give the leader questions like: "What part of the message are you most likely to soften?" "What does the employee need to understand by the end of the conversation?" "How will you know whether the behavior actually changed?"

Now the leader is not just saying, "Hold people accountable." They are helping Isabelle use the trust she already has to create clearer expectations and follow-through before the issue turns into missed numbers, HR escalation, or preventable turnover.`,
    actionPlannerMention: `I would not necessarily spend a ton of time here unless manager follow-through and adoption are big issues for you. But once Isabelle and her leader agree on the behavior, Action Planner gives them a place to track the habit and keep it alive after the first coaching conversation.

That matters because accountability behavior usually does not change because of one good feedback conversation. It changes because the leader keeps coming back to the same behavior: what expectation did you name, did the employee understand it, what changed, and what needs to happen next?`,
    midDemoQuestions: [
      "Is this how your leaders typically coach accountability today, or does it stay more at the 'be more direct' level?",
      "Where does this behavior matter most for your team: one-on-ones, performance conversations, attendance issues, quality issues, coaching plans, or documentation?",
      "When managers avoid hard conversations, do leaders have a repeatable way to help them prepare the message?",
      "What happens when the manager waits too long: missed numbers, slower production, service issues, HR escalation, stronger employees getting frustrated, or turnover?",
      "Would this be more useful in manager onboarding, leadership development, performance management, or all of the above?",
    ],
    valueTieBack:
      "This is where Wonderlic helps leaders get more consistent accountability from the managers they already have. The value is not just the insight. It is the leader action that becomes easier: name the expectation, connect it to impact, inspect the behavior, and reduce the number of issues that linger until they affect team performance, production, service quality, HR workload, or retention.",
    caution: {
      dontSay:
        "Isabelle needs to become more forceful as a person. Or: Low Influence means she cannot manage.",
      doSay:
        "For this role, Isabelle needs a more consistent accountability routine. This part of management may take more intentional effort for Isabelle, so her leader needs to coach the behavior more specifically.",
    },
  },
  developToTeamTransition: `So that is Isabelle as one individual manager.

But leaders do not manage one profile in isolation. They manage a team of managers or employees who may differ in how naturally they speak up, challenge, persuade, and move conversations forward.

That is where Team Dynamics becomes helpful. It takes the same type of insight and gives the leader a way to understand how influence and directness show up across the broader team.`,
  teamDynamicsMoment: {
    purpose:
      "Team Dynamics helps leaders see how the same behavior or communication pattern shows up across the team, so they can adapt coaching instead of managing everyone the same way.",
    whatToShow: [
      "Open the relevant manager, leadership, HR, sales, operations, or supervisor team.",
      "Go to Communication & Interaction.",
      "Open Influence.",
      "Point to the spread across the team.",
      "Show how high and low patterns require different leader behavior.",
      "Explain that the leader is coaching clarity and behavior movement, not personality style.",
      "Do not make it about one outlier.",
    ],
    productBasics:
      "This is not an individual report anymore. This is helping the leader understand the team pattern. Who naturally speaks up, challenges, persuades, and moves conversations forward? Who may need more structure to say the hard thing clearly? And how should the leader coach communication instead of assuming everyone handles accountability conversations the same way?",
    storyTranslation:
      "At the individual level, Isabelle is an Influence story. At the team level, Influence helps the leader think about directness, persuasion, expectation-setting, and whether people move conversations toward action.",
    ownWords: [
      "Isabelle may need a clearer structure for direct feedback.",
      "Another person may naturally challenge, persuade, or push.",
      "The same communication coaching will not land the same way with both people.",
      "The value is leader flexibility and more consistent accountability across the team.",
      "The business reason this matters is that inconsistent manager accountability creates inconsistent team performance.",
    ],
    fullScript: `At the individual level, Isabelle is an accountability conversation story. At the team level, I would use Influence to help the leader understand how directness and behavior movement show up across the group.

And I would not position this as, "Here is the weak manager on the team." That is not the point.

The point is that different people move conversations forward differently.

One manager may naturally challenge, push, and name the issue quickly. That can be useful, but they may need coaching around tone or listening. Another manager may build trust and create safety, but need more structure to make the message clear enough that the employee knows what has to change.

For Isabelle, the coaching might be: before the conversation, write the expectation in one sentence. During the conversation, say it plainly. Ask the employee to repeat the next step. After the conversation, inspect the behavior.

That is not just a communication preference. It is a team performance issue. If managers do not create clarity, issues linger, strong employees get frustrated, and leaders end up managing problems that should have been addressed closer to the work.

That is the value of Team Dynamics. It helps the leader stop treating accountability as a personality issue and start managing it as a team performance issue.`,
    midDemoQuestions: [
      "Do your leaders currently know which managers naturally push and which managers need more structure to say the hard thing?",
      "Where does this show up most clearly: one-on-ones, performance management, attendance, quality, documentation, or escalation?",
      "When accountability breaks down, does the organization treat it as a personality issue or as a coachable management behavior?",
      "What is the business cost when accountability is inconsistent across managers: missed numbers, production drag, HR escalation, uneven standards, or turnover?",
      "Would this help leaders coach managers more consistently without making every manager sound the same?",
    ],
    valueTieBack:
      "This helps leaders create more consistent accountability without losing the trust that supportive managers already bring. Wonderlic gives them a clearer way to coach direct feedback, expectation-setting, and follow-through before inconsistent manager behavior turns into missed numbers, production drag, uneven standards, HR escalation, or preventable turnover.",
    proxyNote: "",
    caution:
      "Do not say low Influence means someone is weak. Say this person may need more intentional coaching around direct feedback, expectation-setting, and moving conversations toward action. Do not make Team Dynamics about one outlier. Use it to show how the leader adapts across the team.",
  },
  fullClose: `So if I pull this all the way back up, Isabelle is the same human pattern across the platform, but the use case changes.

In Select, the question is: would this person look strong in the hiring or promotion process because they are supportive and trusted, but carry the accountability risk that is already allowing performance issues to linger?

In Develop, the question is: if this person is already managing people, how do we coach the accountability behavior specifically enough that it can actually change?

And in Team Dynamics, the question is: how does the leader adapt across the team so direct feedback, expectation-setting, and follow-through become more consistent?

That is the reason this matters beyond the assessment score. You are not just getting a profile. You are getting a more consistent way to make the hire or promotion decision, coach the behavior, and manage the team around the business problem you actually described.

For a team dealing with supportive managers, soft feedback, lingering performance issues, missed numbers, production drag, HR escalation, or strong employees getting frustrated, this gives you a way to catch the risk earlier and manage the behavior more consistently when it shows up.`,
  recap: {
    currentState: [
      "Managers may build trust and maintain positive relationships, but direct feedback and accountability conversations do not happen consistently.",
      "Performance issues can linger because expectations are softened, delayed, or not clearly tied to behavior change.",
      "Missed accountability creates business drag: missed numbers, slowed production or service delivery, HR escalation, strong employees carrying the cost, and preventable turnover risk.",
    ],
    futureState: [
      "Identify manager candidates or promotion candidates who bring both people orientation and the directness required for accountability.",
      "Give leaders a more precise way to coach expectation-setting, feedback conversations, and follow-through.",
      "Help leaders flex across the management team so supportive managers can preserve trust while still driving clearer performance outcomes.",
    ],
  },
  cautions: [
    "Do not say Isabelle is weak.",
    "Do not say Isabelle is too nice.",
    "Do not say Select proves she cannot manage.",
    "Do not imply Select and Develop are one-to-one equivalents.",
    "Do not walk every score.",
    "Do not make Develop sound like generic self-improvement.",
    "Do not coach this as 'be tougher.'",
    "Do not imply low Influence means low leadership potential.",
    "Do not make Team Dynamics about identifying one outlier.",
    "Do not position accountability as being harsh. Position it as clarity, expectation-setting, and follow-through.",
    "Do not stop at 'manager avoids accountability' as the business pain. Connect it to missed numbers, slowed production, quality issues, HR escalation, turnover, or manager time.",
  ],
};

export type IsabelleGuidance = typeof ISABELLE_GUIDANCE;
