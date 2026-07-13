// Gold-standard, Derek-only demo guidance. Other archetypes still use the
// shared archetypeGuidance / productMoments data. This object is intentionally
// verbose so a rep can read straight from it to run a 10 to 15 minute demo
// section. No em dashes anywhere in user-facing copy.

export const DEREK_GUIDANCE = {
  header: {
    name: "Derek Brooks",
    memoryHook: "Diligence Derek",
    primaryGap: "Low Diligence",
    story: "Strong live, weak follow-through",
    developAnchor: "Diligence",
    teamDynamicsPath: "Getting Work Done Together → Orderliness",
    oneSentence:
      "Derek is a customer-facing employee who may be strong in the live interaction, but loses momentum afterward through weak follow-up, thin notes, unclear next steps, or poor CRM hygiene.",
    useWhen: [
      "Reps do not follow up.",
      "Notes are thin or missing.",
      "CRM hygiene is poor.",
      "Next steps are unclear.",
      "Cases or customer loops do not get closed.",
      "Managers chase basic updates.",
      "Live customer conversations are fine, but ownership breaks down after the interaction.",
    ],
    doNotUseWhen: [
      "The real issue is creating urgency in the sales conversation. Use Ethan.",
      "The issue is managers avoiding accountability. Use Isabelle.",
      "The issue is technical expertise creating team friction. Use Caleb.",
    ],
  },
  runThisDemo: {
    anchorOnThisPain:
      "Strong live conversations are not consistently turning into clean follow-up, documented next steps, or reliable pipeline or case visibility.",
    select:
      "Use Select to catch the candidate who may shine in live customer conversations, but lack the dependability and structure needed to protect the deal or customer relationship after the interaction.",
    develop:
      "Use Develop to help the manager coach the post-interaction routine: notes, follow-up, next step, and opportunity or case update before momentum is lost.",
    teamDynamics:
      "Use Team Dynamics to show who needs more structure and inspection, who already creates structure naturally, and how the manager should flex instead of treating everyone the same.",
    valueClose:
      "Wonderlic helps the customer avoid hiring into the same follow-through problem, then gives managers a practical way to coach and manage the behavior when it shows up on the team.",
  },
  coreStory: [
    "Derek is not a bad rep. That is why the story works.",
    "Derek can be engaging live. Customers may like him. Managers may see potential because the conversation itself is not the problem.",
    "The problem is what happens after the interaction.",
    "The call goes well, but the recap is late. Notes are thin. The next step is unclear. The opportunity or case record does not reflect reality. The manager has to chase the update. The customer experience starts to depend on whether someone remembers to close the loop.",
    "That is the business pain.",
  ],
  coreStoryHelps: [
    {
      label: "Select",
      body: "Catch the person who might interview well but carry hidden follow-through risk for the role.",
    },
    {
      label: "Develop",
      body: "If Derek is already here, give the manager precise language to coach the post-interaction routine.",
    },
    {
      label: "Team Dynamics",
      body: "Help the manager see who needs structure, inspection, and checklists, and who already creates structure naturally.",
    },
  ],
  selectMoment: {
    purpose:
      "Select helps hiring teams evaluate candidates against the requirements of a specific job. Candidates take Wonderlic, and the platform translates cognitive ability, personality, and motivation into a job-specific fit read. The key phrase is job-specific. We are not saying good person or bad person. We are asking: does this person look aligned to what this job actually requires?",
    whatToShow: [
      "Select homepage briefly, only enough to show active jobs and candidate pipeline.",
      "Open the relevant role.",
      "Candidate ranking or fit score.",
      "Individual candidate result.",
      "Key indicators tied to follow-through, reliability, structure, and customer-facing work.",
      "Candidate Compare if showing tradeoffs.",
      "Interview Guide if you want to show how the insight becomes an interview.",
      "New Hire Success Tips if you want to show manager handoff after hire.",
    ],
    productBasics:
      "Every active job can live here, and each job has its own candidate pool. The important thing is that candidates are not being ranked against a generic benchmark. They are being evaluated against what success looks like in this specific role.",
    storyTranslation:
      "For Derek, the hiring question is not can this person talk to customers. The question is: would this person look good enough in the interview because they are engaging and comfortable live, but still carry the same follow-through risk that is already costing us time, momentum, or customer trust?",
    ownWords: [
      "The interview may overvalue Derek's live presence.",
      "Select helps pressure-test the parts of the job that are easier to miss in conversation.",
      "For Derek, inspect the live customer-facing strengths and the follow-through signals together.",
      "The value is avoiding hiring into the same management problem.",
    ],
    signalsToInspect: [
      "Dependability",
      "Structured Interest",
      "Enterprising Interest",
      "Sociability",
      "Cognitive Ability",
    ],
    signalsNote:
      "Related Select signals are directional story inputs, not one-to-one equivalents.",
    fullScript: `On the Select side, this is where Wonderlic helps before follow-through becomes a management problem.

I would think about Derek as the candidate who could absolutely make it through a normal interview process. He may be engaging. He may be comfortable with customers. The hiring manager may leave the interview thinking, "I like this person. I can see customers liking this person."

And that may all be true.

But the pain you described is not just whether customers like the person. The pain is what happens after the customer interaction. Does the follow-up go out? Are the notes clear? Is the next step documented? Does the system reflect what actually happened? Does the manager trust the pipeline or the case status without chasing?

So when I am looking at a candidate in Select, I am not using this as a replacement for the interview. I am using it to make the interview smarter.

The overall fit helps you prioritize where to spend time. But once I open the individual result, this is where I want to understand the tradeoffs. If someone has strong customer-facing signals, that may explain why they come across well live. But if the role requires consistent follow-through, documentation, and loop closure, I also want to inspect Dependability and Structured Interest.

That is the hidden risk Derek represents. He may look good enough live, but if the job requires repeatable ownership after the interaction, this gives the hiring team a way to pressure-test that before they make the hire.`,
    interviewGuideReference: `I would also use this to shape the interview. If follow-through is the business pain, I do not want the hiring manager asking generic questions like, "Are you organized?" Everyone knows how to answer that.

I would want the interview guide to help them ask for evidence.

Something like: "Walk me through what you do in the 30 minutes after an important customer call." Or: "Tell me about a time a deal or customer issue stalled because the next step was not clear. What did you do?"

That is a much better use of the assessment. It does not make the decision for the manager. It shows the manager what to probe.`,
    newHireTipsReference: `And if you do hire someone where there is a follow-through risk, the value does not stop at the hiring decision. The manager can use the new hire guidance to onboard more intentionally.

For Derek, that might mean setting the expectation early: after every call, notes are logged, follow-up is sent, and the next step is confirmed before moving to the next thing. You do not wait 60 days to discover that the pattern is there. You manage to it from the beginning.`,
    midDemoQuestions: [
      "Does that mirror what happens today, where the person can present well in the process but the follow-through issue does not show up until they are already in seat?",
      "Are your hiring managers currently probing for follow-up and documentation in a consistent way, or does that depend on who is interviewing?",
      "Would this be more useful earlier in the funnel to prioritize candidates, or later when managers are making tradeoff decisions?",
    ],
    valueTieBack:
      "This is where Wonderlic helps you avoid hiring into the same problem you are already trying to manage. It gives the hiring team objective, job-specific evidence before they spend interview time, training time, manager time, and customer trust on someone who may recreate the same follow-through gap.",
    caution: {
      dontSay: "This person will not follow up.",
      doSay: "This is a risk area to understand and probe before moving forward.",
    },
  },
  selectToDevelopTransition: `So that is the pre-hire version of Derek.

But a lot of organizations already have Derek on the team. And that is where the conversation changes.

We are no longer asking, "Should we hire Derek?" We already did. Now the question is, "How do we help him perform more consistently in the role?"

And this is where I think Develop is really useful, because managers often know the behavior they are frustrated by, but they do not always know how to coach it specifically. They say things like, "be more organized," "stay on top of your deals," or "you need to follow up better."

That may be true, but it is not very coachable.

Develop helps turn that into a more precise conversation: what is the specific behavior, why does it matter in this role, and what routine should the manager inspect?`,
  developMoment: {
    purpose:
      "Develop helps managers and employees focus on the behaviors most worth improving in the context of the person and the role. The assessment is the entrance into a development conversation, not the end of the conversation.",
    whatToShow: [
      "Develop homepage for Derek.",
      "Strengths first.",
      "Critical attributes for the role.",
      "Diligence as the primary harder-for-you attribute.",
      "Attribute detail page.",
      "Suggested actions or coaching guidance.",
      "Ask Wonderlic.",
      "Action Planner only if the customer cares about follow-through, goals, or manager adoption.",
    ],
    productBasics:
      "This is Derek's Develop profile. The important shift is that we are not using this to decide whether to hire him. We are using it to help Derek and his manager understand where he may naturally bring strengths, where parts of the role may take more intentional effort, and what behavior is most worth coaching next.",
    storyTranslation:
      "Derek's development story is not that Derek is lazy. It is that Derek may be strong live, but the post-interaction routine takes more intentional effort. That routine matters in this role because it protects deal momentum, customer trust, and manager visibility.",
    ownWords: [
      "Start with Derek's strengths so this does not feel like a deficit report.",
      "Diligence is the behavior anchor.",
      "The manager should coach the routine, not the personality.",
      "The output should be one observable behavior and one inspection point.",
    ],
    fullScript: `This is where I would start with Derek's strengths, because that is what makes this believable.

Derek may be good in the moment. He may connect well with customers. He may create a positive interaction. That matters. We are not trying to coach that out of him.

But if I am his manager, the performance gap I care about is what happens after that interaction.

So I would open Diligence here because it gives us a cleaner way to talk about the behavior. For Derek, Diligence is not an abstract trait. It is the difference between a good conversation and a deal or customer issue that actually keeps moving.

Does the follow-up go out? Are the notes captured? Is the next step clear? Is the record updated while the context is still fresh?

That is what I would coach.

And I would be careful not to say, "Derek, you need to be more organized." He has probably heard that before, and it is too vague to change anything.

Instead, the coaching becomes very concrete. After every customer conversation, block 15 minutes. In that 15 minutes, log the notes, send the follow-up, confirm the next step, and update the opportunity or case. Then the manager can inspect that routine in the next one-on-one.

That is the value of Develop. It turns a vague frustration into a behavior the manager can actually coach.`,
    askWonderlicPrompt:
      "Help me coach Derek, a customer-facing employee who builds strong rapport live but struggles with post-interaction follow-through. Give me three coaching questions, three specific routines he can use after customer conversations, and a simple one-on-one follow-up plan his manager can use to inspect progress without micromanaging.",
    askWonderlicScript: `This is where Ask Wonderlic becomes useful because a lot of managers can identify the issue, but they do not always know how to turn it into a good coaching conversation.

So instead of the manager starting from scratch, I can ask for coaching questions, routines, and a one-on-one follow-up plan based on Derek's actual profile and the behavior we are trying to improve.

That might give the manager questions like: "What is your current process after a customer conversation?" "Where does follow-up usually break down?" "What part of the routine would be easiest to standardize first?"

Now the manager is not just saying, "Do better." They are helping Derek build the repeatable habit that protects the customer relationship.`,
    actionPlannerMention: `I would not necessarily spend a ton of time here unless follow-through and adoption are big issues for you. But once Derek and his manager agree on the routine, Action Planner gives them a place to track the behavior and keep it alive after the first conversation.

That matters because behavior change usually does not happen because of one good feedback conversation. It happens because the manager and employee come back to the same behavior consistently.`,
    midDemoQuestions: [
      "Is this how your managers typically coach follow-up today, or does it stay more at the 'be more organized' level?",
      "Where would this routine matter most for your team: after sales calls, after customer cases, after service interactions, or after internal handoffs?",
      "If a manager had this kind of guidance today, would they use it in one-on-ones, onboarding, performance conversations, or all of the above?",
    ],
    valueTieBack:
      "This is where Wonderlic helps managers get more consistent behavior out of the people they already chose. The value is not just the insight. It is the manager action that becomes easier: one behavior, one routine, one way to inspect progress.",
    caution: {
      dontSay: "Derek needs to become a more diligent person.",
      doSay: "For this role, Derek needs a more consistent post-interaction routine.",
    },
  },
  developToTeamTransition: `So that is Derek as one individual.

But managers do not manage one profile in isolation. They manage a team of people who may need different levels of structure, autonomy, and inspection.

That is where Team Dynamics becomes helpful. It takes the same type of insight and gives the manager a way to understand how the broader team gets work done together.`,
  teamDynamicsMoment: {
    purpose:
      "Team Dynamics helps managers see how the same behavior or motivation shows up across the team, so they can adapt coaching instead of managing everyone the same way.",
    whatToShow: [
      "Open the relevant team.",
      "Go to Getting Work Done Together.",
      "Open Orderliness.",
      "Explain that Orderliness is the team-level proxy for Derek's Diligence story.",
      "Point to the spread across the team.",
      "Show how high and low patterns require different manager behavior.",
      "Do not make it about one outlier.",
    ],
    productBasics:
      "This is not an individual report anymore. This is helping the manager understand the team pattern. Where do people naturally create structure? Where might people need more clarity, routine, or inspection? And how should the manager flex instead of using the same approach for everyone?",
    storyTranslation:
      "At the individual level, Derek is a Diligence story. At the team level, Orderliness helps the manager think about structure, routine, checklists, and process consistency.",
    ownWords: [
      "Derek may need more structure until the habit is built.",
      "Another person may already create structure naturally.",
      "The same management style will not land the same way with both people.",
      "The value is manager flexibility.",
    ],
    fullScript: `At the individual level, Derek is a follow-through story. At the team level, I would use Orderliness to help the manager think about structure and routine across the group.

And I would not position this as, "Here is the bad person on the team." That is not the point.

The point is that different people need different levels of structure from their manager.

Derek may need a checklist after every customer conversation. He may need more inspection for a period of time. His manager may need to say, "For the next month, every active deal or case needs a documented next step, and we are going to review that in our one-on-one."

But another person on the same team may already create structure naturally. They may have clean notes, clean follow-up, clean next steps, and if the manager treats them exactly like Derek, they may experience that as micromanagement.

So the value of Team Dynamics is not just seeing the scores. It is helping the manager decide how to manage.

Who needs more structure? Who needs more autonomy? Who needs a checklist? Who needs outcome-based coaching? Who needs inspection until the habit is built?

That is a much better management conversation than treating the whole team the same and hoping the same coaching lands for everyone.`,
    midDemoQuestions: [
      "Do your managers currently know who needs more structure versus who needs more room to run, or do they mostly learn that through trial and error?",
      "Where does this show up most clearly: pipeline hygiene, customer follow-up, case closure, handoffs, or internal documentation?",
      "If managers had this view, would it help them coach more consistently, or would the bigger value be helping newer managers know where to start?",
    ],
    valueTieBack:
      "This helps managers stop guessing. Wonderlic gives them a clearer view of how the team gets work done, so they can protect follow-through without under-managing one person or micromanaging another.",
    proxyNote:
      "Diligence does not have a Team Dynamics deep-dive page, so I would use Orderliness as the team-level proxy.",
    caution:
      "State the Orderliness proxy once and move on. Do not turn the proxy into the story.",
  },
  fullClose: `So if I pull this all the way back up, Derek is the same human pattern across the platform, but the use case changes.

In Select, the question is: would this person look good in the hiring process but carry the follow-through risk that is already creating pain for the business?

In Develop, the question is: if this person is already on the team, how do we coach the behavior specifically enough that it can actually change?

And in Team Dynamics, the question is: how does the manager adapt across the team so they are not treating every person like they need the same level of structure?

That is the reason this matters beyond the assessment score. You are not just getting a profile. You are getting a more consistent way to make the hire, coach the behavior, and manage the team around the business problem you actually described.

For a team dealing with missed follow-up, messy documentation, unclear next steps, or managers chasing basic updates, this gives you a way to catch the risk earlier and manage the behavior more consistently when it shows up.`,
  recap: {
    currentState: [
      "Strong live conversations are not consistently turning into clean follow-up, documented next steps, or reliable pipeline visibility.",
      "Managers are spending time chasing notes, updates, and basic follow-through instead of coaching the real customer or deal strategy.",
      "Inconsistent post-interaction routines create stalled opportunities, weaker customer loop closure, and lower confidence in what the system says is happening.",
    ],
    futureState: [
      "Identify candidates more likely to combine customer-facing strengths with the follow-through and structure the role requires.",
      "Give managers a more precise way to coach post-interaction routines instead of relying on vague feedback like 'be more organized.'",
      "Help managers flex across the team so the people who need structure get it, while stronger self-managers are not over-managed.",
    ],
  },
  cautions: [
    "Do not say Derek is lazy.",
    "Do not say Select proves he will not follow up.",
    "Do not imply Select and Develop are one-to-one equivalents.",
    "Do not walk every score.",
    "Do not make Develop sound like generic self-improvement.",
    "Do not over-demo Action Planner unless follow-through, goal tracking, or manager adoption is a known pain.",
    "Do not make Team Dynamics about identifying one outlier.",
    "Do not over-explain the Orderliness proxy. Say it once, then return to the story.",
  ],
};

export type DerekGuidance = typeof DEREK_GUIDANCE;
