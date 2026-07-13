// Gold-standard, Simon-only demo guidance. Same shape as ISABELLE_GUIDANCE
// so the gold-standard detail component pattern can render it. No em dashes.

export const SIMON_GUIDANCE = {
  header: {
    name: "Simon Grant",
    firstName: "Simon",
    memoryHook: "Stability Simon",
    primaryGap: "Low Stability",
    story: "Capable manager who becomes the bottleneck under pressure",
    developAnchor: "Stability",
    teamDynamicsPath: "Getting Work Done Together → Your Team Approach",
    oneSentence:
      "Simon is a capable manager with high standards, but under pressure he can pull work back to himself, over-check decisions, and slow the team down.",
    useWhen: [
      "Managers become bottlenecks.",
      "Promoted individual contributors struggle to delegate.",
      "Managers get reactive under pressure.",
      "Managers pull work back to themselves.",
      "Managers over-check the work.",
      "Teams wait for approval.",
      "High standards slow execution.",
      "Decisions pile up with one person.",
      "Employees do not feel empowered to act.",
      "Managers are capable, but the team does not scale through them.",
      "Work slows when pressure rises.",
      "Strong employees get frustrated because they are not trusted.",
      "Leaders say managers need to stop doing the work and start leading the work.",
    ],
    doNotUseWhen: [
      "The issue is managers avoiding accountability conversations. Use Isabelle.",
      "The issue is poor follow-up, CRM hygiene, or customer loop closure. Use Derek.",
      "The issue is commercial urgency or direct asks from a seller. Use Ethan.",
      "The issue is technical expertise creating team friction. Use Caleb.",
      "The issue is inconsistent frontline execution or rework. Use Riley.",
    ],
  },
  runThisDemo: {
    anchorOnThisPain:
      "Managers may know the work and have high standards, but under pressure they become the bottleneck: decisions slow down, work routes back through them, the team waits for approval, and production, service, or execution targets suffer.",
    select:
      "Use Select to catch the manager candidate or promotion candidate who may look strong because they know the work, solve problems quickly, and hold a high standard, but may not naturally bring the steadiness, flexibility, and delegation behavior needed to lead through pressure.",
    develop:
      "Use Develop to help the manager coach the pressure response: define decision rights, delegate before pressure spikes, stay steady when work gets messy, and inspect without pulling everything back.",
    teamDynamics:
      "Use Team Dynamics to show how the manager's approach affects different people on the team, so leaders can reduce dependency, increase ownership, and keep work moving without managing everyone with the same level of control.",
    valueClose:
      "Wonderlic helps the customer avoid putting capable operators into manager roles where the team becomes dependent on them, then gives leaders a practical way to coach steadier delegation, clearer decision rights, and better execution under pressure.",
  },
  businessImpactLadder: {
    observablePattern:
      "Capable managers become reactive under pressure, over-check work, pull decisions back to themselves, or struggle to delegate.",
    operationalConsequence:
      "Work slows down, employees wait for approval, team members become dependent, and the manager's time becomes the constraint.",
    businessPain:
      "Production slows, numbers are missed, decisions are delayed, strong employees get frustrated, manager leverage drops, and preventable turnover risk increases.",
    wonderlicValue:
      "Wonderlic helps identify pressure-response and delegation risk before manager hire or promotion and gives leaders a practical way to coach steadier execution, clearer decision rights, and better team ownership.",
  },
  coreStory: [
    "Simon is not an incapable manager. That is why the story works.",
    "Simon may know the work extremely well. He may have been promoted because he was dependable, technically strong, fast at solving problems, and trusted to get things done. Leaders may see him as someone who can step in when things are messy.",
    "The problem is that management is a different job than being the best individual contributor.",
    "When pressure rises, Simon may tighten control. He may pull work back to himself. He may over-check decisions. He may jump in too quickly because he knows how he would do it. The team starts waiting for approval, and work begins routing through one capable person.",
    "Over time, the manager becomes the constraint. Strong employees get frustrated. Newer employees do not build confidence. Decisions slow down. Production, service, or execution targets can suffer because the team has not learned to operate without the manager in the middle of everything.",
    "That is the business pain.",
  ],
  coreStoryHelps: [
    {
      label: "Select",
      body: "Catch the person who may look strong for a manager role because they know the work, but carry hidden risk around pressure response, flexibility, or delegation.",
    },
    {
      label: "Develop",
      body: "If Simon is already here, give the leader specific language to coach steadiness, decision rights, and delegation behavior.",
    },
    {
      label: "Team Dynamics",
      body: "Help leaders understand how the manager's approach affects different people on the team, so they can reduce dependency and keep execution moving.",
    },
  ],
  selectMoment: {
    purpose:
      "Select helps hiring teams evaluate candidates against the requirements of a specific job. Candidates take Wonderlic, and the platform translates cognitive ability, personality, and motivation into a job-specific fit read. The key phrase is job-specific. We are not saying good person or bad person. For a manager role, that means we are not only asking whether the person knows the work. We are asking whether they can stay steady, delegate, adapt, and keep the team moving when pressure rises.",
    whatToShow: [
      "Select homepage briefly, only enough to show active jobs and candidate pipeline.",
      "Open the relevant manager, supervisor, team lead, operations, or leadership role.",
      "Candidate ranking or fit score.",
      "Individual candidate result.",
      "Key indicators tied to stress tolerance, adaptability, delegation, structure, and role fit.",
      "Candidate Compare if showing tradeoffs between two manager candidates.",
      "Interview Guide if you want to show how the insight becomes a better manager interview.",
      "New Hire Success Tips if you want to show leader handoff after hire or promotion.",
    ],
    productBasics:
      "Every active job can live here, and each job has its own candidate pool. The important thing is that candidates are not being ranked against a generic benchmark. They are being evaluated against what success looks like in this specific role.",
    storyTranslation:
      "For Simon, the hiring or promotion question is not does this person know the work. The question is: would this person look strong because they are capable, high-standard, and technically trusted, but still carry the same pressure-response or delegation risk that is already slowing execution?",
    ownWords: [
      "The interview may overvalue Simon's technical credibility, history as a strong individual contributor, or ability to jump in and solve problems.",
      "Select helps pressure-test the parts of management that are easier to miss when someone already knows the work.",
      "For Simon, inspect capability and pressure-response signals together.",
      "The value is avoiding a manager hire or promotion where the person can do the work, but the team does not scale through them.",
      "The business reason this matters is that manager bottlenecks create slowed production, delayed decisions, missed targets, and team dependency.",
    ],
    signalsToInspect: [
      "Stress Tolerance",
      "Open-Mindedness",
      "Dependability",
      "Structured Interest",
      "Cognitive Ability",
    ],
    signalsNote:
      "Related Select signals are directional story inputs, not one-to-one equivalents.",
    fullScript: `On the Select side, this is where Wonderlic helps before a capable operator becomes a manager bottleneck.

I would think about Simon as the person who could absolutely look strong in a manager interview or promotion conversation. He may know the work. He may have high standards. He may be the person leaders already trust when something needs to get fixed. The hiring manager or senior leader may think, "He understands the operation. People will respect him."

And that may be true.

But the pain you described is not only whether the manager understands the work. The pain is whether the manager can keep the team moving when the work gets messy.

Because when that does not happen, the issue does not stay isolated to one manager preference. Decisions slow down. Employees wait for approval. Strong employees get frustrated because they are not trusted. Newer employees do not build confidence. Production, service, or execution numbers can suffer because too much work routes through one person.

So when I am looking at a candidate in Select, I am not using this as a replacement for the interview. I am using it to make the interview smarter.

The overall fit helps you prioritize where to spend time. But once I open the individual result, this is where I want to understand the tradeoffs. If someone has strong capability signals, that may explain why they look credible for the role. But if this manager role requires staying steady under pressure, delegating work, adapting when things change, and keeping decisions moving, I also want to inspect the signals related to stress tolerance, openness, structure, and problem-solving.

That is the hidden risk Simon represents. He may look strong because he can do the work, but if the job requires leading the work through other people, this gives the hiring team a way to pressure-test that before they make the hire or promotion decision.`,
    interviewGuideReference: `I would also use this to shape the interview. If manager bottlenecks are the business pain, I do not want the hiring manager asking only, "Do you know the operation?" or "How would you handle a busy shift?" Those questions matter, but they do not fully get at the risk.

I would want the interview guide to help them ask for evidence.

Something like: "Tell me about a time you had to let someone else own a decision even though you could have done it faster yourself."

Or: "Walk me through a time your team was under pressure and you had to decide what to delegate versus what to handle personally."

Or: "Tell me about a time you realized you were becoming the bottleneck. What did you change?"

That is a much better use of the assessment. It does not make the decision for the manager. It shows the manager what to probe.`,
    newHireTipsReference: `And if you do hire or promote someone where delegation and pressure response may need more structure, the value does not stop at the decision. The leader can use the new hire guidance to onboard the manager more intentionally.

For Simon, that might mean setting expectations early around decision rights, escalation rules, delegation routines, and how to inspect work without taking it back. You do not wait until every decision routes through the manager and production slows. You manage to the behavior from the beginning.`,
    midDemoQuestions: [
      "Does that mirror what happens today, where someone is promoted because they know the work, but the bottleneck issue only shows up once they are leading a team?",
      "Are your hiring managers currently probing delegation and pressure response, or does the interview mostly focus on experience and operational knowledge?",
      "When work slows down today, is the bigger issue that managers do not care, or that they jump in too quickly and keep decisions too close?",
      "What does manager bottlenecking usually turn into for you: missed numbers, slowed production, delayed decisions, strong employees getting frustrated, or turnover?",
      "Would this be more useful for external manager hiring, internal promotions, or both?",
    ],
    valueTieBack:
      "This is where Wonderlic helps you avoid putting someone into a manager role who can do the work but may unintentionally slow the team down. It gives the hiring team objective, job-specific evidence before they spend interview time, ramp time, leader time, and team trust on someone who may recreate the same bottleneck pattern and allow pressure-response issues to turn into missed numbers, production drag, delayed decisions, or preventable turnover.",
    caution: {
      dontSay:
        "This person cannot manage. Or: Low Stability means they are unstable.",
      doSay:
        "This is a risk area to understand and probe before moving forward. For this role, pressure response and steadiness are meaningful areas to inspect because the job requires keeping the team moving when work gets messy.",
    },
  },
  selectToDevelopTransition: `So that is the pre-hire or promotion version of Simon.

But a lot of organizations already have Simon on the team. And that is where the conversation changes.

We are no longer asking, "Should we put Simon into the manager role?" We already did. Now the question is, "How do we help him stay steady, delegate clearly, and keep work moving through the team instead of back through himself?"

And this is where I think Develop is really useful, because leaders often know the behavior they are frustrated by, but they do not always know how to coach it specifically. They say things like, "you need to delegate more," "stop micromanaging," or "you need to trust your team."

That may be directionally true, but it is not very coachable.

Develop helps turn that into a more precise conversation: what decisions should stay with the team, what should escalate, what should the manager inspect, and how does Simon stay steady enough under pressure to lead the work instead of taking it back?`,
  developMoment: {
    purpose:
      "Develop helps managers and employees focus on the behaviors most worth improving in the context of the person and the role. The assessment is the entrance into a development conversation, not the end of the conversation.",
    whatToShow: [
      "Develop homepage for Simon.",
      "Strengths first.",
      "Critical attributes for the role.",
      "Stability as the primary harder-for-you attribute.",
      "Attribute detail page.",
      "Suggested actions or coaching guidance.",
      "Ask Wonderlic.",
      "Action Planner only if the customer cares about goal tracking, manager follow-through, or behavior adoption.",
    ],
    productBasics:
      "This is Simon's Develop profile. The important shift is that we are not using this to decide whether to hire or promote him. We are using it to help Simon and his leader understand where he may naturally bring strengths, where parts of the role may take more intentional effort, and what behavior is most worth coaching next.",
    storyTranslation:
      "Simon's development story is not that Simon cannot handle pressure. It is that Simon may be capable and high-standard, but staying steady and leading through others takes more intentional effort when pressure rises. That matters in this role because the team needs decisions, ownership, and execution to keep moving without everything routing back through the manager.",
    ownWords: [
      "Start with Simon's strengths so this does not feel like a deficit report.",
      "Stability is the behavior anchor.",
      "The leader should coach the pressure response and delegation behavior, not the person's character.",
      "The output should be clear decision rights, one delegation routine, one escalation rule, and one inspection point.",
      "The business reason this matters is that manager bottlenecks slow execution and reduce team ownership.",
    ],
    fullScript: `This is where I would start with Simon's strengths, because that is what makes this believable.

Simon may know the work. He may have high standards. He may be the person people trust when something needs to get fixed. That matters. We are not trying to coach that out of him.

But if I'm his leader, the performance gap I care about is what happens when the work gets messy and pressure rises.

So I would open Stability here because it gives us a cleaner way to talk about the behavior. For Simon, Stability is not about being calm all the time. It is about whether he can stay steady enough under pressure to keep leading the work through the team instead of pulling it back to himself.

Does he stay steady when things get busy? Does he trust the team with decisions he could make faster himself? Does he inspect the work without taking it over? Or does he tighten control, over-check, and become the bottleneck?

That is what I would coach.

And I would be careful not to say, "Simon, you need to delegate more." He has probably heard some version of that before, and it is too vague to change anything.

Instead, the coaching becomes very concrete. Define the decisions that stay with the team. Define what escalates. Agree on one delegation routine before pressure spikes. Agree on one inspection point that is not a takeover. Then hold Simon accountable to that routine when the next busy stretch hits.

That matters because bottlenecks are not just a manager style issue. If the manager keeps pulling work back, the team can miss numbers, production or service standards can slip, decisions can stall, and stronger employees can start looking elsewhere because they do not feel trusted.

That is the value of Develop. It turns a vague frustration into a delegation and pressure-response behavior the leader can actually coach.`,
    askWonderlicPrompt:
      "Help me coach Simon, a capable manager with high standards who becomes reactive under pressure, over-checks decisions, and struggles to delegate. Give me three coaching questions, three specific routines he can use before pressure spikes and during busy stretches, and a simple one-on-one follow-up plan his leader can use to inspect progress without asking him to lower his standards.",
    askWonderlicScript: `This is where Ask Wonderlic becomes useful because a lot of leaders can identify the issue, but they do not always know how to turn it into a good coaching conversation.

So instead of the leader starting from scratch, I can ask for coaching questions, routines, and a one-on-one follow-up plan based on Simon's actual profile and the behavior we are trying to improve.

That might give the leader questions like: "Which decisions did you take back this week that could have stayed with the team?" "What routine will you use before the next busy stretch so you are not making calls in the moment?" "How will you inspect the work without taking it over?"

Now the leader is not just saying, "Delegate more." They are helping Simon protect his high standards while building the team's ownership before the pattern turns into missed numbers, delayed decisions, or preventable turnover.`,
    actionPlannerMention: `I would not necessarily spend a ton of time here unless manager follow-through and adoption are big issues for you. But once Simon and his leader agree on the behavior, Action Planner gives them a place to track the habit and keep it alive after the first coaching conversation.

That matters because delegation behavior usually does not change because of one good conversation. It changes because the leader keeps coming back to the same routine: what did you delegate, what did you take back, what will you do differently next time, and how did the team respond?`,
    midDemoQuestions: [
      "Is this how your leaders typically coach delegation today, or does it stay at the 'trust your team more' level?",
      "Where does this behavior matter most for your team: shift changes, peak periods, escalations, project kickoffs, or day-to-day operations?",
      "When managers become bottlenecks, do leaders have a repeatable way to help them define decision rights before the next busy stretch?",
      "What happens when the manager keeps pulling work back: missed numbers, slower production, delayed decisions, strong employees leaving, or manager burnout?",
      "Would this be more useful in manager onboarding, leadership development, or day-to-day performance management?",
    ],
    valueTieBack:
      "This is where Wonderlic helps leaders get more team leverage out of the managers they already have. The value is not just the insight. It is the leader action that becomes easier: define the decisions, agree on the routine, inspect without taking over, and reduce the number of moments where the manager becomes the constraint on production, service quality, or team growth.",
    caution: {
      dontSay:
        "Simon needs to care less about quality. Or: Low Stability means he cannot handle the job.",
      doSay:
        "For this role, Simon needs a more consistent delegation and pressure-response routine. This part of management may take more intentional effort for Simon, so his leader needs to coach the behavior more specifically.",
    },
  },
  developToTeamTransition: `So that is Simon as one individual manager.

But leaders do not manage one profile in isolation. They manage a team that may include people who need more direction, people who want more autonomy, people who want to be checked on, and people who feel controlled the moment the manager steps in.

That is where Team Dynamics becomes helpful. It takes the same type of insight and gives the leader a way to understand how the manager's approach affects different people on the team.`,
  teamDynamicsMoment: {
    purpose:
      "Team Dynamics helps leaders see how the manager's approach lands across different people on the team, so they can adapt instead of managing everyone with the same level of control.",
    whatToShow: [
      "Open the relevant manager, leadership, operations, or supervisor team.",
      "Go to Getting Work Done Together.",
      "Open Your Team Approach.",
      "Point to how different team members prefer to be led.",
      "Show how a high-control manager style lands differently on different people.",
      "Explain that the leader is coaching flexibility and team ownership, not personality style.",
      "Do not make it about one outlier.",
    ],
    productBasics:
      "This is not an individual report anymore. This is helping the leader understand how Simon's approach affects the team. Who needs more structure? Who wants more autonomy? Who reads over-checking as lack of trust? The leader is not trying to make Simon manage everyone the same way. The leader is trying to help Simon adapt so the team can keep moving without the manager in the middle of every decision.",
    storyTranslation:
      "At the individual level, Simon is a Stability and delegation story. At the team level, Your Team Approach helps the leader think about how the manager's control style affects ownership, decision speed, and how much the team can operate without the manager in the middle.",
    ownWords: [
      "Simon may default to more control when pressure rises.",
      "Some employees will accept that. Others will disengage or leave.",
      "The same management approach will not land the same way with everyone.",
      "The value is leader flexibility and less team dependency on one person.",
      "The business reason this matters is that team dependency on one manager caps how fast the operation can move.",
    ],
    fullScript: `At the individual level, Simon is a delegation and pressure-response story. At the team level, I would use Your Team Approach to help the leader understand how Simon's default style lands across the group.

And I would not position this as, "Here is the problem manager on the team." That is not the point.

The point is that different people respond to a high-control management style very differently.

One employee may want more structure and clear direction. Simon jumping in may feel supportive to that person. Another employee may want more room to own the work. Simon over-checking may feel like distrust to that person, and over time they may disengage or leave.

For Simon, the coaching might be: know which people need more structure and which people need more room. Agree on decision rights up front so people know what is theirs. Inspect the work in a way that is predictable, not reactive.

That is not just a management style preference. It is a team performance issue. If the manager over-controls, decisions slow, the team stops making calls without checking in, and the operation depends too heavily on one person. Production, service, or execution suffers when the manager is not there.

That is the value of Team Dynamics. It helps the leader stop treating delegation as a personality issue and start managing it as a team performance issue.`,
    midDemoQuestions: [
      "Do your leaders currently know how each manager's default style lands with the different people on the team?",
      "Where does this show up most clearly: peak periods, escalations, cross-team projects, new hire ramp, or day-to-day decisions?",
      "When a manager over-controls, does the organization treat it as a personality issue or as a coachable management behavior?",
      "What is the business cost when the team depends too heavily on one manager: missed numbers, delayed decisions, slower ramp, strong employees leaving, or manager burnout?",
      "Would this help leaders coach managers to flex without asking them to lower their standards?",
    ],
    valueTieBack:
      "This helps leaders reduce team dependency on one capable manager without asking that manager to lower their standards. Wonderlic gives them a clearer way to coach delegation, decision rights, and steady inspection before manager bottlenecks turn into missed numbers, production drag, delayed decisions, or preventable turnover.",
    proxyNote: "",
    caution:
      "Do not say low Stability means someone cannot handle the job. Say this person may need more intentional coaching around pressure response, delegation, and letting the team own decisions. Do not make Team Dynamics about one outlier. Use it to show how the manager adapts across the team.",
  },
  fullClose: `So if I pull this all the way back up, Simon is the same human pattern across the platform, but the use case changes.

In Select, the question is: would this person look strong in the hiring or promotion process because they know the work and hold a high standard, but carry the pressure-response and delegation risk that is already slowing execution?

In Develop, the question is: if this person is already managing people, how do we coach the delegation and pressure-response behavior specifically enough that it can actually change?

And in Team Dynamics, the question is: how does the manager adapt across the team so decisions, ownership, and execution keep moving without everything routing back through one person?

That is the reason this matters beyond the assessment score. You are not just getting a profile. You are getting a more consistent way to make the hire or promotion decision, coach the behavior, and manage the team around the business problem you actually described.

For a team dealing with capable managers becoming bottlenecks, slowed production, delayed decisions, missed numbers, or strong employees getting frustrated because they are not trusted, this gives you a way to catch the risk earlier and manage the behavior more consistently when it shows up.`,
  recap: {
    currentState: [
      "Capable managers may hold a high standard and know the work, but under pressure they pull decisions back, over-check, and become the bottleneck.",
      "Team members wait for approval, decisions slow, and execution depends too heavily on one person.",
      "Bottlenecked management creates business drag: slowed production, missed numbers, delayed decisions, strong employees getting frustrated, and preventable turnover risk.",
    ],
    futureState: [
      "Identify manager candidates or promotion candidates who bring both capability and the steadiness required to lead through pressure.",
      "Give leaders a more precise way to coach decision rights, delegation routines, and steady inspection.",
      "Help leaders flex across the team so capable managers can protect standards while building team ownership and reducing dependency.",
    ],
  },
  cautions: [
    "Do not say Simon is a bad manager.",
    "Do not say Simon cannot handle pressure.",
    "Do not say Select proves he cannot manage.",
    "Do not imply Select and Develop are one-to-one equivalents.",
    "Do not walk every score.",
    "Do not make Develop sound like generic self-improvement.",
    "Do not coach this as 'just delegate more.'",
    "Do not imply low Stability means low leadership potential.",
    "Do not make Team Dynamics about identifying one outlier.",
    "Do not position delegation as lowering the bar. Position it as protecting standards through the team.",
    "Do not stop at 'manager becomes a bottleneck' as the business pain. Connect it to slowed production, missed numbers, delayed decisions, strong employees leaving, or manager burnout.",
  ],
};

export type SimonGuidance = typeof SIMON_GUIDANCE;
