// Gold-standard, Riley-only demo guidance. Same shape as CALEB_GUIDANCE
// so the gold-standard detail component pattern can render it. No em dashes.

export const RILEY_GUIDANCE = {
  header: {
    name: "Riley Parker",
    firstName: "Riley",
    memoryHook: "Results Riley",
    primaryGap: "Low Results Focus",
    story: "Skilled frontline worker with inconsistent execution",
    developAnchor: "Results Focus",
    teamDynamicsPath: "Getting Work Done Together → Results Focus",
    oneSentence:
      "Riley is a skilled frontline employee who can do the work, but does not consistently drive execution to standard, creating rework, extra inspection, or uneven output.",
    useWhen: [
      "Employees know the work but do not consistently do it to standard.",
      "Production, shipping, service, or frontline mistakes create rework.",
      "Output is inconsistent across shifts, teams, or supervisors.",
      "Managers have to over-inspect the work.",
      "Stronger employees have to clean up avoidable mistakes.",
      "People miss downstream impact.",
      "Employees complete the task, but do not own the result.",
      "Someone has tenure or skill, but execution is uneven.",
      "Supervisors struggle to create consistent standards.",
      "Quality, safety, documentation, or handoff issues keep recurring.",
    ],
    doNotUseWhen: [
      "The real issue is poor follow-up, CRM hygiene, or customer loop closure. Use Derek.",
      "The issue is technical expertise creating team friction. Use Caleb.",
      "The issue is commercial urgency or direct asks. Use Ethan.",
      "The issue is managers avoiding accountability. Use Isabelle.",
      "The issue is a manager becoming reactive or controlling under pressure. Use Simon.",
      "The issue is truly low learning ability. That is a Select and Cognitive Ability hiring conversation, not a Develop coaching story.",
    ],
  },
  runThisDemo: {
    anchorOnThisPain:
      "Execution is inconsistent, which creates rework, slower production, quality misses, supervisor over-inspection, and stronger employees cleaning up avoidable mistakes.",
    select:
      "Use Select to catch the candidate who may look viable based on experience, availability, or familiarity with similar work, but may not have the reliability, role interest, or problem-solving capacity to execute this role consistently to standard.",
    develop:
      "Use Develop to help the manager coach work-to-standard behavior: what done-right looks like, where to check quality, and when to escalate instead of guessing or passing problems downstream.",
    teamDynamics:
      "Use Team Dynamics to show who naturally drives work to completion, who may need clearer checkpoints, and how the manager should flex inspection and support across the team.",
    valueClose:
      "Wonderlic helps the customer avoid hiring into the same rework and inconsistency problem, then gives managers a more practical way to coach quality, ownership, and execution so inconsistent frontline work does not turn into slower production, higher costs, quality misses, or preventable turnover.",
  },
  businessImpactLadder: {
    observablePattern:
      "Skilled frontline employee can do the work but does not consistently execute to standard.",
    operationalConsequence:
      "Steps are missed, rework increases, stronger employees clean up mistakes, managers over-inspect.",
    businessPain:
      "Production slows, quality drops, costs increase, output is inconsistent, supervisor capacity gets consumed, turnover risk rises.",
    wonderlicValue:
      "Wonderlic helps identify consistency and role-fit risk before hire and gives managers a practical way to coach work-to-standard behavior.",
  },
  coreStory: [
    "Riley is not someone who cannot do anything. That is why the story works.",
    "Riley may know the job. They may have tenure, practical experience, or moments where the work is done well. A manager may see enough skill to keep relying on them.",
    "The problem is that the work does not consistently land at the required standard.",
    "Steps get missed. Quality checks are uneven. Handoffs create rework. Stronger employees have to clean things up. Managers start inspecting everything because they do not trust the output. The team loses time not because nobody knows the work, but because execution is inconsistent.",
    "That is the business pain.",
  ],
  coreStoryHelps: [
    {
      label: "Select",
      body: "Catch the person who may look viable based on experience or availability, but carry hidden risk for a role that requires consistency, reliability, hands-on fit, and problem-solving.",
    },
    {
      label: "Develop",
      body: "If Riley is already here, give the manager specific language to coach work-to-standard behavior instead of vague feedback like 'pay more attention' or 'try harder.'",
    },
    {
      label: "Team Dynamics",
      body: "Help the manager see who naturally drives work to standard and who needs clearer checkpoints, quality expectations, or inspection.",
    },
  ],
  selectMoment: {
    purpose:
      "Select helps hiring teams evaluate candidates against the requirements of a specific job. Candidates take Wonderlic, and the platform translates cognitive ability, personality, and motivation into a job-specific fit read. The key phrase is job-specific. We are not saying good person or bad person. For a frontline, manufacturing, operations, warehouse, shipping, service, or production role, we are asking whether the person has the reliability, motivation, and problem-solving capacity to do this work consistently to standard.",
    whatToShow: [
      "Select homepage briefly, only enough to show active jobs and candidate pipeline.",
      "Open the relevant frontline, production, shipping, warehouse, service, or operations role.",
      "Candidate ranking or fit score.",
      "Individual candidate result.",
      "Key indicators tied to reliability, routine, hands-on work, problem-solving, and role fit.",
      "Candidate Compare if showing tradeoffs between two frontline candidates.",
      "Interview Guide if you want to show how the insight becomes a better interview.",
      "New Hire Success Tips if you want to show manager handoff after hire.",
    ],
    productBasics:
      "Every active job can live here, and each job has its own candidate pool. The important thing is that candidates are not being ranked against a generic benchmark. They are being evaluated against what success looks like in this specific role.",
    storyTranslation:
      "For Riley, the hiring question is not has this person done something similar before. The question is: would this person look workable because they have availability, experience, or enough familiarity with the work, but still carry the same consistency risk that is already creating rework, inspection, or quality issues?",
    ownWords: [
      "The interview may overvalue experience, availability, or willingness to do the job.",
      "Select helps pressure-test the parts of frontline work that are easier to miss in a casual interview.",
      "For Riley, inspect reliability, hands-on role interest, routine tolerance, and problem-solving together.",
      "The value is avoiding hires who look workable but create rework, over-inspection, or inconsistent output once they are in seat.",
    ],
    signalsToInspect: [
      "Dependability",
      "Structured Interest",
      "Applied Interest",
      "Cooperation",
      "Cognitive Ability",
    ],
    signalsNote:
      "Related Select signals are directional story inputs, not one-to-one equivalents.",
    fullScript: `On the Select side, this is where Wonderlic helps before inconsistent execution becomes a supervisor problem.

I would think about Riley as the candidate who may look workable in the hiring process. Maybe they have done similar work. Maybe they are available for the shift. Maybe they say the right things in the interview. And in a tight labor market, I understand why that starts to feel like enough.

But the pain you described is not just filling the seat. The pain is what happens after the person is trained and on the floor. Do they follow the process? Do they check their work? Do they understand when a mistake creates rework downstream? Do they ask for help before passing a problem to the next person? Does the supervisor trust the output without inspecting everything?

So when I am looking at a candidate in Select, I am not using this as a replacement for the interview. I am using it to make the interview smarter.

The overall fit helps you prioritize where to spend time. But once I open the individual result, this is where I want to understand the tradeoffs. If someone has experience or availability, that may explain why they look like a practical option. But if this role requires consistent execution, hands-on work, routine, quality checks, and problem-solving, I also want to inspect Dependability, Structured Interest, Applied Interest, and Cognitive Ability.

That is the hidden risk Riley represents. They may look workable enough to hire, but if the job requires driving the work to standard every day, this gives the hiring team a way to pressure-test that before they invest the training time, supervisor time, and team capacity.`,
    interviewGuideReference: `Behavioral Interview Guides are where I would show how the assessment becomes a more consistent frontline interview. If inconsistent execution is the concern, the value is not that the hiring manager only asks whether someone has done similar work before. The value is that Wonderlic gives them prebuilt, role-related behavioral questions tied to relevant competencies, so every candidate can be evaluated more consistently against the same success criteria.

For Riley, that means the hiring team can probe reliability, work-to-standard behavior, routine, quality checks, and escalation judgment instead of relying only on availability or experience.`,
    newHireTipsReference: `New Hire Success Tips are where I would show the handoff from selection into onboarding. Once you decide to hire someone, Wonderlic can help the manager understand how to support that person earlier, so the first 30, 60, and 90 days are more intentional.

The value is faster ramping, more efficient onboarding, and fewer surprises after the person is already in seat.

For Riley, that might mean setting expectations early around what done-right looks like, where to check quality, when to escalate, and how to prevent rework before it moves downstream. The manager does not have to wait until supervisors or stronger employees are cleaning up avoidable mistakes. They can build the standard into onboarding.`,
    midDemoQuestions: [
      "Does that mirror what happens today, where someone looks workable during hiring but the consistency issue shows up after they are trained?",
      "Are your hiring managers currently probing for quality checks, routine tolerance, and escalation judgment, or does that depend on who is interviewing?",
      "When mistakes happen, is the bigger issue that people cannot learn the work, or that they do not consistently drive the work to standard?",
      "Would this be more useful earlier in the funnel to prioritize candidates, or later when managers are comparing finalists?",
      "Where does inconsistent execution cost you most: rework, supervisor time, stronger employees cleaning up mistakes, safety, quality, or turnover?",
    ],
    valueTieBack:
      "This is where Wonderlic helps you avoid hiring into the same inconsistency problem you are already trying to manage. It gives the hiring team objective, job-specific evidence before they spend interview time, training time, supervisor time, and team capacity on someone who may recreate the same rework or quality gap.",
    caution: {
      dontSay:
        "This person cannot do the work. Or: Develop can fix low cognitive ability.",
      doSay:
        "This is a risk area to understand and probe before moving forward. If the concern is truly learning ability or connecting the dots, that is a Select and Cognitive Ability hiring conversation. Develop is for coaching the observable execution behavior once someone is already in the role.",
    },
  },
  selectToDevelopTransition: `So that is the pre-hire version of Riley.

But a lot of organizations already have Riley on the team. And that is where the conversation changes.

We are no longer asking, "Should we hire Riley?" We already did. Now the question is, "How do we help Riley execute more consistently to the standard this role requires?"

And this is where I think Develop is really useful, because managers often know the behavior they are frustrated by, but they do not always know how to coach it specifically. They say things like, "pay more attention," "be more accountable," or "you need to care more about quality."

That may be directionally true, but it is not very coachable.

Develop helps turn that into a more precise conversation: what does done-right look like, where should Riley check quality, when should they escalate, and what behavior should the manager inspect?`,
  developMoment: {
    purpose:
      "Develop helps managers and employees focus on the behaviors most worth improving in the context of the person and the role. The assessment is the entrance into a development conversation, not the end of the conversation.",
    whatToShow: [
      "Develop homepage for Riley.",
      "Strengths first.",
      "Critical attributes for the role.",
      "Results Focus as the primary harder-for-you attribute.",
      "Attribute detail page.",
      "Suggested actions or coaching guidance.",
      "Ask Wonderlic.",
      "Action Planner only if the customer cares about goal tracking, manager follow-through, or behavior adoption.",
    ],
    productBasics:
      "This is Riley's Develop profile. The important shift is that we are not using this to decide whether to hire them. We are using it to help Riley and their manager understand where they may naturally bring strengths, where parts of the role may take more intentional effort, and what behavior is most worth coaching next.",
    storyTranslation:
      "Riley's development story is not that Riley cannot do the job. It is that Riley may be capable of the work, but consistently driving the work to the required standard takes more intentional effort. That matters in this role because missed steps, uneven quality, and unclear escalation create rework for the team.",
    ownWords: [
      "Start with Riley's strengths so this does not feel like a deficit report.",
      "Results Focus is the behavior anchor.",
      "The manager should coach the work-to-standard behavior, not the person's character.",
      "The output should be a clear definition of done-right, one checkpoint, and one escalation rule.",
    ],
    fullScript: `This is where I would start with Riley's strengths, because that is what makes this believable.

Riley may know the work. They may have experience. They may have moments where they execute well. That matters. We are not trying to coach from a place of "this person can't do anything."

But if I am their manager, the performance gap I care about is whether the work consistently lands at the required standard.

So I would open Results Focus here because it gives us a cleaner way to talk about the behavior. For Riley, Results Focus is not about ambition or quota. It is about whether the person drives the work all the way to the required outcome.

Did they check quality before passing it downstream? Did they notice when something was off? Did they escalate when they were unsure? Did they understand the result the team needed, not just the task in front of them?

That is what I would coach.

And I would be careful not to say, "Riley, you need to try harder." They have probably heard some version of that before, and it is too vague to change anything.

Instead, the coaching becomes very concrete. Define what done-right looks like. Identify one quality checkpoint before the work moves on. Agree on the exact moment Riley should escalate instead of guessing. Then inspect that behavior in the next few shifts or one-on-ones.

That is the value of Develop. It turns a vague frustration into a work-to-standard behavior the manager can actually coach.`,
    askWonderlicPrompt:
      "Help me coach Riley, a frontline employee who can do the work but does not consistently drive execution to standard. Give me three coaching questions, three specific work-to-standard routines they can use during a shift, and a simple follow-up plan the manager can use to inspect quality and escalation behavior without micromanaging.",
    askWonderlicScript: `This is where Ask Wonderlic becomes useful because a lot of managers can identify the issue, but they do not always know how to turn it into a good coaching conversation.

So instead of the manager starting from scratch, I can ask for coaching questions, routines, and a follow-up plan based on Riley's actual profile and the behavior we are trying to improve.

That might give the manager questions like: "What does done-right look like for this task?" "Where do mistakes usually get missed before the work moves downstream?" "At what point should you stop and ask for help instead of guessing?"

Now the manager is not just saying, "Pay more attention." They are helping Riley build the repeatable habit that protects quality and reduces rework.`,
    actionPlannerMention: `I would not necessarily spend a ton of time here unless manager follow-through and adoption are big issues for you. But once Riley and their manager agree on the behavior, Action Planner gives them a place to track the habit and keep it alive after the first coaching conversation.

That matters because execution behavior usually does not change from one good conversation. It changes because the manager keeps inspecting the same checkpoint: was the quality check done, was the escalation made on time, and what will you do differently on the next shift?`,
    midDemoQuestions: [
      "Is this how your managers typically coach execution issues today, or does it stay at the 'try harder' or 'pay more attention' level?",
      "Where does inconsistent execution show up most for you: quality, safety, documentation, handoffs, or downstream rework?",
      "When supervisors coach frontline employees, do they have a repeatable way to define done-right and inspect it without micromanaging?",
      "Would this be more useful in onboarding, shift huddles, one-on-ones, or performance conversations?",
    ],
    valueTieBack:
      "This is where Wonderlic helps managers turn vague frustration into a coachable execution behavior. The value is not just the insight. It is a specific work-to-standard routine, a clear inspection point, and a way to keep coaching it without micromanaging or resorting to 'try harder.'",
    caution: {
      dontSay:
        "Riley is lazy or does not care. Or: Develop will fix cognitive ability.",
      doSay:
        "For this role, Riley needs a clearer definition of done-right and a repeatable work-to-standard routine so execution becomes more consistent. If the concern is truly learning ability, that is a Select conversation.",
    },
  },
  developToTeamTransition: `So that is Riley as one individual.

But managers do not manage one employee in isolation. They manage a team where reliability, ownership, and drive to standard vary from person to person, and where the same quality expectation has to move across shifts, supervisors, and skill levels.

That is where Team Dynamics becomes helpful. It takes the same type of insight and gives the manager a way to see how execution behavior shows up across the team.`,
  teamDynamicsMoment: {
    purpose:
      "Team Dynamics helps managers see how the same behavior shows up across the team, so they can adapt inspection, coaching, and support instead of managing everyone the same way.",
    whatToShow: [
      "Open the relevant frontline, production, operations, or service team.",
      "Go to Getting Work Done Together.",
      "Open Results Focus.",
      "Point to the spread across the team.",
      "Show how high and low patterns require different manager behavior.",
      "Explain that the same quality standard may need to be coached through different levels of structure and inspection.",
      "Do not make it about one outlier.",
    ],
    productBasics:
      "This is not an individual report anymore. This is helping the manager understand the team pattern. Who on this team naturally drives work all the way to the required outcome? Who may need clearer checkpoints, more explicit expectations, or more intentional inspection to consistently execute to standard?",
    storyTranslation:
      "At the individual level, Riley is a Results Focus story. At the team level, Results Focus helps the manager think about how ownership and drive to standard vary across the team, and how to flex inspection and support so the same quality expectation lands consistently.",
    ownWords: [
      "Riley may need clearer checkpoints and more explicit expectations to execute to standard.",
      "Another teammate may naturally drive work all the way through without much inspection.",
      "The same quality standard can be coached through different levels of structure.",
      "The value is manager flexibility, less over-inspection of strong performers, and more targeted coaching for the people who need it.",
    ],
    fullScript: `At the individual level, Riley is a work-to-standard story. At the team level, I would use Results Focus to help the manager think about how ownership and drive to the required outcome vary across the group.

And I would not position this as, "Here is the weak person on the team." That is not the point.

The point is that different team members bring different levels of natural ownership, and the manager can coach the same quality standard through different amounts of structure and inspection.

One person may naturally check their work, notice when something is off, and escalate before passing a problem downstream. That may be why the manager barely has to inspect their output. Riley may not do that on their own. So the manager may need to coach specific execution moves: define done-right, agree on one quality checkpoint, and set a clear escalation rule.

The outcome is still the same. The quality standard does not drop. But the way the manager gets there flexes to the person, so strong performers are not over-inspected and Riley is not left to guess.

That is the value of Team Dynamics. It helps the manager stop coaching every frontline employee the same way and start asking: how does this person naturally drive work to standard, and how much structure and inspection does this person specifically need to consistently hit it?`,
    midDemoQuestions: [
      "Do your supervisors currently know which employees on the team naturally drive work to standard versus which ones need clearer checkpoints?",
      "When quality slips, do managers know how to coach the execution behavior specifically, or does it stay at 'be more careful'?",
      "Where does this show up most clearly for you: production, quality, safety, handoffs, documentation, or shift-to-shift consistency?",
      "Would this help supervisors flex inspection across the team, so strong performers are not over-managed and inconsistent performers get the structure they actually need?",
    ],
    valueTieBack:
      "This helps managers stop coaching every frontline employee the same way. Wonderlic gives them a clearer view of how ownership and drive to standard vary across the team, so they can hold the same quality expectation while flexing inspection and structure to the person.",
    proxyNote: "",
    caution:
      "Do not say low Results Focus means someone is lazy or does not care. Say ownership and drive to standard vary across the team, and the manager can flex inspection and structure to hit the same quality expectation. Do not make Team Dynamics about identifying one weak outlier.",
  },
  fullClose: `So if I pull this all the way back up, Riley is the same human pattern across the platform, but the use case changes.

In Select, the question is: would this person look workable in the hiring process but carry the same consistency risk that is already creating rework and over-inspection on the team?

In Develop, the question is: if this person is already on the team, how do we coach the work-to-standard behavior specifically enough that it can actually change, without resorting to "try harder"?

And in Team Dynamics, the question is: how does the manager adapt across the team so they are not treating every frontline employee the same way?

That is the reason this matters beyond the assessment score. You are not just getting a profile. You are getting a more consistent way to make the hire, coach the behavior, and hold the same quality standard across the team.

For a team dealing with skilled frontline employees whose execution is uneven, this gives you a way to catch the risk earlier and coach the behavior more consistently when it shows up.`,
  recap: {
    currentState: [
      "Skilled frontline employees know the work, but execution is inconsistent and creates rework, over-inspection, and uneven output.",
      "Stronger employees have to clean up avoidable mistakes, and supervisors do not fully trust the output.",
      "Managers coach the issue as vague feedback like 'try harder' or 'pay more attention,' which does not change the behavior.",
    ],
    futureState: [
      "Identify candidates more likely to combine practical experience with the reliability and problem-solving the role actually requires.",
      "Give managers a more precise way to coach work-to-standard behavior: define done-right, one checkpoint, one escalation rule.",
      "Help managers flex inspection and structure across the team so the same quality standard lands consistently without over-managing strong performers.",
    ],
  },
  cautions: [
    "Do not say Riley is lazy or does not care.",
    "Do not say Riley cannot do the work.",
    "Do not position Develop as fixing cognitive ability. If learning ability is the real concern, that is a Select conversation.",
    "Do not say Select proves someone will fail in the role.",
    "Do not imply Select and Develop are one-to-one equivalents.",
    "Do not walk every score.",
    "Do not coach this as 'try harder' or 'pay more attention.'",
    "Do not make Team Dynamics about identifying one weak outlier.",
    "Do not over-demo Action Planner unless manager follow-through, goal tracking, or adoption is a known pain.",
  ],
};

export type RileyGuidance = typeof RILEY_GUIDANCE;
