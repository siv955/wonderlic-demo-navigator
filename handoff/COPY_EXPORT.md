# COPY_EXPORT.md

Exported from live source (`src/data/*Guidance.ts`, `src/data/archetypes.json`, route files). This is the actual user-facing copy in the app.

## Navigation

- Start → `/`
- Business Pain Finder → `/pain`
- Attribute Finder → `/attributes`
- Archetype Library → `/archetypes`
- Profile Directory → `/profiles`
- Attribute Stories → `/attribute-stories`

## Start page (`src/routes/index.tsx`)

Headline: "Where do you want to start?"
Subcopy: "Three ways in. Pick the one that matches what you already know about the customer or the demo you want to run."
Cards: Start with Business Pain, Start with Attribute Combo, Browse Archetypes, Browse Profiles.

## Business Pain Finder (`src/routes/pain.tsx`)

Headline: "What did the customer just say?"
Subcopy: "Type the pain in the customer's own words, or pick a chip. The Story Finder returns the right archetype, demo profile, Team Dynamics path, and talk track."

### Pain categories and pains

**Sales / Revenue**

- Reps are likable but do not close → ethan
  - Rationale: Classic relationship-first seller, build the Enterprising Interest / Influence coaching story.
- Pipeline looks active but deals stall → ethan (backup derek)
  - Rationale: Positive conversations that never convert, Enterprising Interest gap.
- Reps do not follow up → derek
  - Rationale: Follow-through and disciplined next-step behavior lives in Diligence.
- Salesforce / CRM hygiene is poor → derek
  - Rationale: Documentation and CRM discipline maps to Diligence and Orderliness.
- Managers cannot trust the forecast → derek (backup ethan)
  - Rationale: Bad forecasts usually trace to weak CRM discipline (Derek) or soft commercial ask (Ethan).

**Customer Service / Call Center**

- Poor documentation → derek
  - Rationale: Case-note discipline is a Diligence / Orderliness story.
- Inconsistent follow-through → derek
  - Rationale: Follow-through under load is the coachable Diligence gap.
- Cases do not get closed out → derek
  - Rationale: Case closure is the customer-service equivalent of missed next steps.
- Customer handoffs are messy → derek (backup caleb)
  - Rationale: If the friction is process, lead Derek; if it's communication style, lead Caleb.

**Technical / Expert Roles**

- Smart but hard to work with → caleb
  - Rationale: High expertise, low interpersonal warmth, Compassion coaching (talk about communication impact, not morals).
- Knowledge bottlenecks → caleb
  - Rationale: Expertise is not accessible to teammates, Compassion / communication gap.
- Handoffs are painful → caleb
  - Rationale: Technical handoffs stall when the expert doesn't smooth the interaction.
- Teammates avoid the expert → caleb
  - Rationale: The team routes around the person, classic Compassion signal.

**Frontline / Operations**

- Inconsistent execution → riley
  - Rationale: Skilled but variable output, Results Focus coaching.
- Production errors → riley
  - Rationale: Errors from skilled workers point at Results Focus, not ability.
- Shipping / receiving mistakes → riley
  - Rationale: Standards-to-work behavior gap.
- Employees cannot connect the dots → riley
  - Rationale: Lead Select with Cognitive Ability, then bridge to Develop Results Focus for the coachable behavior.
- Rework for stronger employees → riley
  - Rationale: Strong performers absorbing rework signals a Results Focus gap in others.
- No-call / no-show, attendance issues → derek
  - Rationale: Dependability screen-out lives in Select; do not use Develop for basic termination stories.

**Managers / Leaders**

- Managers avoid hard conversations → isabelle
  - Rationale: Supportive manager who won't hold the line, Influence coaching.
- Managers only give positive feedback → isabelle
  - Rationale: Caring but non-directive feedback pattern.
- Managers do not hold accountability → isabelle
  - Rationale: Influence gap: comfort over commitment.
- Managers become bottlenecks → simon
  - Rationale: Promoted IC who won't let go, Stability under pressure.
- Promoted ICs struggle to delegate → simon
  - Rationale: Classic new-manager Stability story.
- Managers get reactive under pressure → simon
  - Rationale: Stability breaks down under load, coach the response pattern.

## Attribute Finder (`src/routes/attributes.tsx`)

Headline: "Attribute Finder". Pick up to 4 attribute conditions (attribute + high/low + level) to surface matching demo profiles with story angle and talk track.

## Archetype Library (`src/routes/archetypes.tsx`)

Lists the six canonical archetypes as cards. Each links to `/archetypes/{id}`.

## Profile Directory (`src/routes/profiles.tsx`)

Every demo profile, core and extras, searchable by name/role/attribute pattern.

## Attribute Stories (`src/routes/attribute-stories.tsx`)

Curated stories per attribute with meaning, low/high story, Team Dynamics path or proxy, related Select signals, 30-second talk track, Ask Wonderlic prompt, and "what not to say".

## Demo Principles (drawer in `src/routes/__root.tsx`)

See `PRODUCT_RULES.md`.

---

# Archetype pages

Each page rendered by `src/routes/archetypes.$id.tsx` via the archetype-specific detail component (`src/components/{id}-archetype-detail.tsx`) reading `{ID}_GUIDANCE` from `src/data/{id}Guidance.ts`.


## Ethan Miller (Enterprising Ethan)

Route: `/archetypes/ethan` · Data: `src/data/ethanGuidance.ts` · Component: `src/components/ethan-archetype-detail.tsx`

### Header

- Name: Ethan Miller
- Memory hook: Enterprising Ethan
- Primary gap: Low Enterprising Interest
- Story: Relationship-first rep who struggles to close
- Develop anchor: Enterprising Interest
- Team Dynamics path: What Drives Us → Enterprising Interest
- One sentence: Ethan is a relationship-first seller who builds trust and keeps prospects engaged, but struggles to create urgency, make the direct ask, and turn positive conversations into closed business.

**Use when:**
- Reps are likable but do not close.
- Prospects like the rep, but deals stall.
- Reps build trust but do not create urgency.
- Reps avoid the direct ask.
- Reps struggle to hold commercial tension.
- Pipeline looks active, but decisions do not happen.
- Conversations are positive, but next steps are soft.
- Managers say the rep has potential, but the rep does not push deals forward.

**Do not use when:**
- The real issue is follow-up after the call. Use Derek.
- The issue is managers avoiding hard accountability conversations. Use Isabelle.
- The issue is technical expertise creating team friction. Use Caleb.
- The issue is frontline employees missing steps or creating rework. Use Riley.

### Run This Demo

- **anchorOnThisPain**: Reps are building positive relationships, but deals stall, sales cycles stretch, forecast confidence drops, and the team misses revenue because reps do not create urgency or move buyers to decisions.
- **select**: Use Select to catch the candidate who may interview well because they are warm, likable, and relationship-oriented, but may not have the commercial drive needed to create urgency, ask directly for commitment, and turn good conversations into closed business.
- **develop**: Use Develop to help the manager coach the commercial behavior without asking Ethan to become pushy: connect the ask to helping the customer make a decision.
- **teamDynamics**: Use Team Dynamics to show how different sellers are motivated differently, so the manager can coach the same sales outcome through the motivation that actually works for each rep.
- **valueClose**: Wonderlic helps the customer avoid hiring into the same stalled-pipeline pattern, then gives managers a more practical way to coach urgency, direct asks, and decision movement so relationship-first reps do not turn into missed revenue, longer sales cycles, or weaker forecast confidence.

### Business Impact Ladder

- **observablePattern**: Relationship-first seller builds trust but avoids urgency and direct asks.
- **operationalConsequence**: Positive conversations do not convert into clear next steps, decisions, or closed business.
- **businessPain**: Pipeline looks active but revenue does not move, forecast confidence drops, sales cycles lengthen, quota attainment suffers.
- **wonderlicValue**: Wonderlic helps identify commercial-drive risk before hire and gives managers a clearer way to coach urgency, direct asks, and decision movement.

### Core Story

> Ethan is not a bad salesperson. That is why the story works.
>
> Ethan is the rep prospects like. He can build trust, create a positive conversation, and make the customer feel heard. Managers may see potential because the relationship side of selling is real.
>
> The problem is that liking the rep is not the same thing as moving the deal.
>
> When the moment requires urgency, directness, or a clear commercial ask, Ethan may soften the moment. He may leave the call with a positive feeling but no real commitment. The next step may be vague. The buyer may stay engaged but not move. Pipeline can look active, but actual decisions do not happen.
>
> That is the business pain.

### selectMoment

- **purpose**: Select helps hiring teams evaluate candidates against the requirements of a specific job. Candidates take Wonderlic, and the platform translates cognitive ability, personality, and motivation into a job-specific fit read. The key phrase is job-specific. We are not saying good person or bad person. For a sales role, we are asking whether they are likely to bring the motivation, work style, and capability needed to move buyers toward decisions.
- **whatToShow**:
  - Select homepage briefly, only enough to show active jobs and candidate pipeline.
  - Open the relevant sales role.
  - Candidate ranking or fit score.
  - Individual candidate result.
  - Key indicators tied to commercial drive, relationship-building, follow-through, and role fit.
  - Candidate Compare if showing tradeoffs between two sales profiles.
  - Interview Guide if you want to show how the insight becomes a better sales interview.
  - New Hire Success Tips if you want to show manager handoff after hire.
- **productBasics**: Every active job can live here, and each job has its own candidate pool. The important thing is that candidates are not being ranked against a generic benchmark. They are being evaluated against what success looks like in this specific role.
- **storyTranslation**: For Ethan, the hiring question is not can this person build rapport. The question is: would this person look good enough in the interview because they are warm, likable, and relationship-oriented, but still carry the same commercial-drive risk that is already creating stalled pipeline?
- **ownWords**:
  - The interview may overvalue Ethan's warmth and rapport.
  - Select helps pressure-test the parts of sales performance that are easier to miss in conversation.
  - For Ethan, inspect the relationship signals and the commercial motivation together.
  - The value is avoiding hiring reps who are easy to like but unlikely to create enough deal movement.
- **signalsToInspect**:
  - Enterprising Interest
  - Sociability
  - Cooperation
  - Dependability
  - Cognitive Ability
- **signalsNote**: Related Select signals are directional story inputs, not one-to-one equivalents.
- **fullScript**: On the Select side, this is where Wonderlic helps before a likable salesperson becomes a stalled-pipeline problem.

I would think about Ethan as the candidate who could absolutely make it through a normal sales interview process. He may be warm. He may be easy to talk to. The hiring manager may leave the interview thinking, "I like him. I can see customers liking him."

And that may be true.

But the pain you described is not whether prospects enjoy the conversation. The pain is whether the rep creates urgency, makes the direct ask, and moves the buyer toward a real decision.

So when I am looking at a candidate in Select, I am not using this as a replacement for the interview. I am using it to make the interview smarter.

The overall fit helps you prioritize where to spend time. But once I open the individual result, this is where I want to understand the tradeoffs. If someone has strong relationship signals, that may explain why they come across well in an interview or on a first call. But if this sales role requires commercial push, urgency, and ownership of the next step, I also want to inspect Enterprising Interest and the related signals that tell us whether the person is likely to be energized by that part of the work.

That is the hidden risk Ethan represents. He may look good enough live, but if the job requires moving a buyer to a decision, this gives the hiring team a way to pressure-test that before they make the hire.
- **interviewGuideReference**: Behavioral Interview Guides are where I would show how the assessment becomes a more consistent sales interview. If commercial urgency is the concern, the value is not that the hiring manager just asks whether someone is motivated or comfortable selling. The value is that Wonderlic gives them prebuilt, role-related behavioral questions tied to relevant competencies, so every candidate can be evaluated more consistently against the same success criteria.

For Ethan, that means the hiring team can probe commercial drive, decision movement, and direct asks instead of relying only on warmth, rapport, or interview presence.
- **newHireTipsReference**: New Hire Success Tips are where I would show the handoff from selection into onboarding. Once you decide to hire someone, Wonderlic can help the manager understand how to support that person earlier, so the first 30, 60, and 90 days are more intentional.

The value is faster ramping, more efficient onboarding, and fewer surprises after the person is already in seat.

For Ethan, that might mean setting expectations early around clear next steps, direct decision questions, and connecting the commercial ask back to customer value. The manager does not have to wait until the pipeline fills with positive conversations and soft commitments. They can build the behavior into onboarding.
- **midDemoQuestions**:
  - Does that mirror what happens today, where a candidate or rep can come across really well live, but the urgency gap does not show up until they are carrying pipeline?
  - Are your hiring managers currently probing for commercial drive and direct asks consistently, or does that depend on who is interviewing?
  - When deals stall today, is it more often because the rep did not build trust, or because they built trust but did not move the buyer to a decision?
  - Would this be more useful earlier in the funnel to prioritize candidates, or later when managers are comparing finalists?
- **valueTieBack**: This is where Wonderlic helps you avoid hiring into the same stalled-pipeline problem you are already trying to manage. It gives the hiring team objective, job-specific evidence before they spend interview time, ramp time, manager time, and pipeline opportunity on someone who may recreate the same commercial gap.
- **caution**: {"dontSay":"This person will not close.","doSay":"This is a risk area to understand and probe before moving forward."}

### developMoment

- **purpose**: Develop helps managers and employees focus on the behaviors most worth improving in the context of the person and the role. The assessment is the entrance into a development conversation, not the end of the conversation.
- **whatToShow**:
  - Develop homepage for Ethan.
  - Strengths first.
  - Critical attributes for the role.
  - Enterprising Interest as the primary harder-for-you attribute.
  - Attribute detail page.
  - Suggested actions or coaching guidance.
  - Ask Wonderlic.
  - Action Planner only if the customer cares about goal tracking, manager follow-through, or behavior adoption.
- **productBasics**: This is Ethan's Develop profile. The important shift is that we are not using this to decide whether to hire him. We are using it to help Ethan and his manager understand where he may naturally bring strengths, where parts of the role may take more intentional effort, and what behavior is most worth coaching next.
- **storyTranslation**: Ethan's development story is not that Ethan needs to become pushy. It is that Ethan may be strong at building trust, but the commercial ask takes more intentional effort. That matters in this role because the rep has to help the customer move from a positive conversation to a clear decision.
- **ownWords**:
  - Start with Ethan's strengths so this does not feel like a deficit report.
  - Enterprising Interest is the behavior anchor.
  - The manager should coach the commercial behavior, not the personality.
  - The output should be one clear ask, one next step, and one inspection point.
- **fullScript**: This is where I would start with Ethan's strengths, because that is what makes this believable.

Ethan may be really good with people. He may build trust quickly. He may make customers feel heard. That matters. We are not trying to coach that out of him.

But if I am his manager, the performance gap I care about is what happens when the conversation needs to become commercial.

So I would open Enterprising Interest here because it gives us a cleaner way to talk about the behavior. For Ethan, Enterprising Interest is not an abstract motivation label. It is the difference between a good conversation and a sales conversation that actually moves the buyer to a decision.

Does he create urgency? Does he make the direct ask? Does he hold the line when the buyer is positive but noncommittal? Does he help the customer understand why doing nothing has a cost?

That is what I would coach.

And I would be careful not to say, "Ethan, you need to be more aggressive." He has probably heard some version of that before, and it is too vague to change anything.

Instead, the coaching becomes very concrete. Before every sales conversation, decide the one direct question you need to ask. During the call, connect that ask back to the business pain the customer already gave you. Before the call ends, confirm the next step clearly enough that both sides know what happens next.

That is the value of Develop. It turns a vague frustration into a commercial behavior the manager can actually coach.
- **askWonderlicPrompt**: Help me coach Ethan, a relationship-first sales rep who builds strong rapport but struggles to create urgency and make the direct commercial ask. Give me three coaching questions, three specific pre-call or in-call routines he can use to move buyers toward decisions, and a simple one-on-one follow-up plan his manager can use to inspect progress without asking him to become pushy.
- **askWonderlicScript**: This is where Ask Wonderlic becomes useful because a lot of managers can identify the issue, but they do not always know how to turn it into a good coaching conversation.

So instead of the manager starting from scratch, I can ask for coaching questions, routines, and a one-on-one follow-up plan based on Ethan's actual profile and the behavior we are trying to improve.

That might give the manager questions like: "Where in the sales conversation do you usually avoid the direct ask?" "What customer value would make the ask feel more helpful and less pushy?" "What is the one decision or next step we need before the call ends?"

Now the manager is not just saying, "Close harder." They are helping Ethan build a repeatable commercial habit that fits how he already builds trust.
- **actionPlannerMention**: I would not necessarily spend a ton of time here unless manager follow-through and adoption are big issues for you. But once Ethan and his manager agree on the behavior, Action Planner gives them a place to track the habit and keep it alive after the first coaching conversation.

That matters because sales behavior usually does not change because of one good feedback conversation. It changes because the manager keeps coming back to the same behavior: what ask did you plan, did you make it, what happened, and what will you do next time?
- **midDemoQuestions**:
  - Is this how your managers typically coach urgency today, or does it stay more at the 'be more aggressive' level?
  - Where does this behavior matter most in your sales process: discovery, proposal, negotiation, renewal, expansion, or next-step confirmation?
  - When managers coach reps who are good with customers but soft commercially, do they have a repeatable routine, or does it depend on the manager?
  - Would this be more useful in one-on-ones, deal reviews, onboarding, or all of the above?
- **valueTieBack**: This is where Wonderlic helps managers get more consistent commercial behavior out of the people they already chose. The value is not just the insight. It is the manager action that becomes easier: one ask, one next step, one way to inspect whether positive conversations are turning into real movement.
- **caution**: {"dontSay":"Ethan needs to become a different kind of person.","doSay":"For this role, Ethan needs a more consistent commercial behavior around urgency, direct asks, and next-step ownership."}

### teamDynamicsMoment

- **purpose**: Team Dynamics helps managers see how the same behavior or motivation shows up across the team, so they can adapt coaching instead of managing everyone the same way.
- **whatToShow**:
  - Open the relevant revenue or sales team.
  - Go to What Drives Us.
  - Open Enterprising Interest.
  - Point to the spread across the team.
  - Show how high and low patterns require different manager behavior.
  - Explain that the same sales outcome may need to be coached through different motivations.
  - Do not make it about one outlier.
- **productBasics**: This is not an individual report anymore. This is helping the manager understand the team pattern. What motivates people to take action? Who is naturally energized by commercial goals, competition, and winning? Who may need the commercial action connected to customer impact, team contribution, or helping the buyer make progress?
- **storyTranslation**: At the individual level, Ethan is an Enterprising Interest story. At the team level, Enterprising Interest helps the manager think about motivation, commercial energy, and how different sellers may need different coaching to reach the same sales outcome.
- **ownWords**:
  - Ethan may need the ask connected to helping the customer move forward.
  - Another rep may naturally respond to competition, targets, or winning.
  - The same sales outcome can require different coaching paths.
  - The value is manager flexibility and more scalable sales coaching.
- **fullScript**: At the individual level, Ethan is a commercial-drive story. At the team level, I would use Enterprising Interest to help the manager think about what actually motivates different sellers to take action.

And I would not position this as, "Here is the bad rep on the team." That is not the point.

The point is that different sellers may need different coaching paths to reach the same commercial outcome.

One rep may be naturally energized by the scoreboard. They want the target, the competition, the win, the commission, the recognition. If the manager says, "Here is the number and here is where you stand," that may create movement.

Ethan may not respond the same way. He may care more about the relationship, the customer experience, or helping the buyer solve a real problem. So the manager may need to connect the commercial ask back to customer value: "You are not pushing them for our sake. You are helping them make the decision they told us matters."

The outcome is still the same. We need a real next step. We need urgency. We need a decision. But the way the manager gets there may differ by rep.

That is the value of Team Dynamics. It helps the manager stop coaching every seller with the same speech and start asking: what actually motivates this person to take the action the role requires?
- **midDemoQuestions**:
  - Do your managers currently know which reps are motivated by competition versus customer impact, or do they mostly learn that through trial and error?
  - When a rep is relationship-first but soft commercially, do managers know how to coach the ask without making the rep feel like they need to become pushy?
  - Where does this show up most clearly: discovery, proposal, renewal, expansion, negotiation, or next-step ownership?
  - Would this help managers coach more consistently across the team, especially when reps need different motivations to reach the same outcome?
- **valueTieBack**: This helps managers stop guessing. Wonderlic gives them a clearer view of what drives the team, so they can coach commercial action in a way that fits the person while still holding the same standard for sales outcomes.
- **proxyNote**: 
- **caution**: Do not say low Enterprising Interest means someone is not motivated. Say they may be motivated by different parts of the work, so the manager may need to connect the commercial action to the motivation that actually works for them. Do not make Team Dynamics about one outlier.

### fullClose

So if I pull this all the way back up, Ethan is the same human pattern across the platform, but the use case changes.

In Select, the question is: would this person look good in the hiring process but carry the commercial-drive risk that is already creating stalled pipeline?

In Develop, the question is: if this person is already on the team, how do we coach the behavior specifically enough that it can actually change?

And in Team Dynamics, the question is: how does the manager adapt across the team so they are not treating every seller like they are motivated the same way?

That is the reason this matters beyond the assessment score. You are not just getting a profile. You are getting a more consistent way to make the hire, coach the behavior, and manage the team around the business problem you actually described.

For a team dealing with likable reps, positive conversations, soft next steps, and stalled opportunities, this gives you a way to catch the risk earlier and manage the behavior more consistently when it shows up.

### cautions

- Do not say Ethan is weak or not a real seller.
- Do not say Select proves he will not close.
- Do not imply Select and Develop are one-to-one equivalents.
- Do not walk every score.
- Do not make Develop sound like generic self-improvement.
- Do not coach this as 'be more aggressive' or 'be pushy.'
- Do not imply low Enterprising Interest means low motivation overall.
- Do not make Team Dynamics about identifying one outlier.
- Do not over-demo Action Planner unless manager follow-through, goal tracking, or adoption is a known pain.


## Derek Brooks (Diligence Derek)

Route: `/archetypes/derek` · Data: `src/data/derekGuidance.ts` · Component: `src/components/derek-archetype-detail.tsx`

### Header

- Name: Derek Brooks
- Memory hook: Diligence Derek
- Primary gap: Low Diligence
- Story: Strong live, weak follow-through
- Develop anchor: Diligence
- Team Dynamics path: Getting Work Done Together → Orderliness
- One sentence: Derek is a customer-facing employee who may be strong in the live interaction, but loses momentum afterward through weak follow-up, thin notes, unclear next steps, or poor CRM hygiene.

**Use when:**
- Reps do not follow up.
- Notes are thin or missing.
- CRM hygiene is poor.
- Next steps are unclear.
- Cases or customer loops do not get closed.
- Managers chase basic updates.
- Live customer conversations are fine, but ownership breaks down after the interaction.

**Do not use when:**
- The real issue is creating urgency in the sales conversation. Use Ethan.
- The issue is managers avoiding accountability. Use Isabelle.
- The issue is technical expertise creating team friction. Use Caleb.

### Run This Demo

- **anchorOnThisPain**: Strong live conversations are not consistently turning into clean follow-up, documented next steps, or reliable pipeline or case visibility, which creates stalled deals, unreliable pipeline visibility, customer loop closure issues, and manager time spent chasing updates.
- **select**: Use Select to catch the candidate who may shine in live customer conversations, but lack the dependability and structure needed to protect the deal or customer relationship after the interaction.
- **develop**: Use Develop to help the manager coach the post-interaction routine: notes, follow-up, next step, and opportunity or case update before momentum is lost.
- **teamDynamics**: Use Team Dynamics to show who needs more structure and inspection, who already creates structure naturally, and how the manager should flex instead of treating everyone the same.
- **valueClose**: Wonderlic helps the customer avoid hiring into the same follow-through problem, then gives managers a practical way to coach the post-interaction routine so good customer conversations do not turn into stalled deals, missed next steps, unreliable pipeline, or customer loop closure issues.

### Business Impact Ladder

- **observablePattern**: Strong live conversations, weak follow-through.
- **operationalConsequence**: Notes are missing, next steps are unclear, CRM or case records do not reflect reality, managers chase updates.
- **businessPain**: Deals stall, customer loops stay open, pipeline confidence drops, service consistency suffers, manager time is wasted.
- **wonderlicValue**: Wonderlic helps identify follow-through risk before hire and gives managers a concrete post-interaction routine to coach after hire.

### Core Story

> Derek is not a bad rep. That is why the story works.
>
> Derek can be engaging live. Customers may like him. Managers may see potential because the conversation itself is not the problem.
>
> The problem is what happens after the interaction.
>
> The call goes well, but the recap is late. Notes are thin. The next step is unclear. The opportunity or case record does not reflect reality. The manager has to chase the update. The customer experience starts to depend on whether someone remembers to close the loop.
>
> That is the business pain.

### selectMoment

- **purpose**: Select helps hiring teams evaluate candidates against the requirements of a specific job. Candidates take Wonderlic, and the platform translates cognitive ability, personality, and motivation into a job-specific fit read. The key phrase is job-specific. We are not saying good person or bad person. We are asking: does this person look aligned to what this job actually requires?
- **whatToShow**:
  - Select homepage briefly, only enough to show active jobs and candidate pipeline.
  - Open the relevant role.
  - Candidate ranking or fit score.
  - Individual candidate result.
  - Key indicators tied to follow-through, reliability, structure, and customer-facing work.
  - Candidate Compare if showing tradeoffs.
  - Interview Guide if you want to show how the insight becomes an interview.
  - New Hire Success Tips if you want to show manager handoff after hire.
- **productBasics**: Every active job can live here, and each job has its own candidate pool. The important thing is that candidates are not being ranked against a generic benchmark. They are being evaluated against what success looks like in this specific role.
- **storyTranslation**: For Derek, the hiring question is not can this person talk to customers. The question is: would this person look good enough in the interview because they are engaging and comfortable live, but still carry the same follow-through risk that is already costing us time, momentum, or customer trust?
- **ownWords**:
  - The interview may overvalue Derek's live presence.
  - Select helps pressure-test the parts of the job that are easier to miss in conversation.
  - For Derek, inspect the live customer-facing strengths and the follow-through signals together.
  - The value is avoiding hiring into the same management problem.
- **signalsToInspect**:
  - Dependability
  - Structured Interest
  - Enterprising Interest
  - Sociability
  - Cognitive Ability
- **signalsNote**: Related Select signals are directional story inputs, not one-to-one equivalents.
- **fullScript**: On the Select side, this is where Wonderlic helps before follow-through becomes a management problem.

I would think about Derek as the candidate who could absolutely make it through a normal interview process. He may be engaging. He may be comfortable with customers. The hiring manager may leave the interview thinking, "I like this person. I can see customers liking this person."

And that may all be true.

But the pain you described is not just whether customers like the person. The pain is what happens after the customer interaction. Does the follow-up go out? Are the notes clear? Is the next step documented? Does the system reflect what actually happened? Does the manager trust the pipeline or the case status without chasing?

So when I am looking at a candidate in Select, I am not using this as a replacement for the interview. I am using it to make the interview smarter.

The overall fit helps you prioritize where to spend time. But once I open the individual result, this is where I want to understand the tradeoffs. If someone has strong customer-facing signals, that may explain why they come across well live. But if the role requires consistent follow-through, documentation, and loop closure, I also want to inspect Dependability and Structured Interest.

That is the hidden risk Derek represents. He may look good enough live, but if the job requires repeatable ownership after the interaction, this gives the hiring team a way to pressure-test that before they make the hire.
- **interviewGuideReference**: Behavioral Interview Guides are where I would show how the assessment becomes a more consistent interview process. If follow-through is the concern, the value is not that the hiring manager invents a better question on the fly. The value is that Wonderlic gives them prebuilt, role-related behavioral questions tied to relevant competencies, so every candidate can be evaluated more consistently against the same success criteria.

For Derek, that means the hiring team can probe the follow-through and structure required for the role instead of relying only on whether the candidate came across well live.
- **newHireTipsReference**: New Hire Success Tips are where I would show the handoff from selection into onboarding. Once you decide to hire someone, Wonderlic can help the manager understand how to support that person earlier, so the first 30, 60, and 90 days are more intentional.

The value is faster ramping, more efficient onboarding, and fewer surprises after the person is already in seat.

For Derek, that might mean setting expectations early around post-call notes, follow-up timing, documented next steps, and CRM or case updates. The manager does not have to wait until follow-through breaks down. They can build the routine into onboarding.
- **midDemoQuestions**:
  - Does that mirror what happens today, where the person can present well in the process but the follow-through issue does not show up until they are already in seat?
  - Are your hiring managers currently probing for follow-up and documentation in a consistent way, or does that depend on who is interviewing?
  - Would this be more useful earlier in the funnel to prioritize candidates, or later when managers are making tradeoff decisions?
- **valueTieBack**: This is where Wonderlic helps you avoid hiring into the same problem you are already trying to manage. It gives the hiring team objective, job-specific evidence before they spend interview time, training time, manager time, and customer trust on someone who may recreate the same follow-through gap.
- **caution**: {"dontSay":"This person will not follow up.","doSay":"This is a risk area to understand and probe before moving forward."}

### developMoment

- **purpose**: Develop helps managers and employees focus on the behaviors most worth improving in the context of the person and the role. The assessment is the entrance into a development conversation, not the end of the conversation.
- **whatToShow**:
  - Develop homepage for Derek.
  - Strengths first.
  - Critical attributes for the role.
  - Diligence as the primary harder-for-you attribute.
  - Attribute detail page.
  - Suggested actions or coaching guidance.
  - Ask Wonderlic.
  - Action Planner only if the customer cares about follow-through, goals, or manager adoption.
- **productBasics**: This is Derek's Develop profile. The important shift is that we are not using this to decide whether to hire him. We are using it to help Derek and his manager understand where he may naturally bring strengths, where parts of the role may take more intentional effort, and what behavior is most worth coaching next.
- **storyTranslation**: Derek's development story is not that Derek is lazy. It is that Derek may be strong live, but the post-interaction routine takes more intentional effort. That routine matters in this role because it protects deal momentum, customer trust, and manager visibility.
- **ownWords**:
  - Start with Derek's strengths so this does not feel like a deficit report.
  - Diligence is the behavior anchor.
  - The manager should coach the routine, not the personality.
  - The output should be one observable behavior and one inspection point.
- **fullScript**: This is where I would start with Derek's strengths, because that is what makes this believable.

Derek may be good in the moment. He may connect well with customers. He may create a positive interaction. That matters. We are not trying to coach that out of him.

But if I am his manager, the performance gap I care about is what happens after that interaction.

So I would open Diligence here because it gives us a cleaner way to talk about the behavior. For Derek, Diligence is not an abstract trait. It is the difference between a good conversation and a deal or customer issue that actually keeps moving.

Does the follow-up go out? Are the notes captured? Is the next step clear? Is the record updated while the context is still fresh?

That is what I would coach.

And I would be careful not to say, "Derek, you need to be more organized." He has probably heard that before, and it is too vague to change anything.

Instead, the coaching becomes very concrete. After every customer conversation, block 15 minutes. In that 15 minutes, log the notes, send the follow-up, confirm the next step, and update the opportunity or case. Then the manager can inspect that routine in the next one-on-one.

That is the value of Develop. It turns a vague frustration into a behavior the manager can actually coach.
- **askWonderlicPrompt**: Help me coach Derek, a customer-facing employee who builds strong rapport live but struggles with post-interaction follow-through. Give me three coaching questions, three specific routines he can use after customer conversations, and a simple one-on-one follow-up plan his manager can use to inspect progress without micromanaging.
- **askWonderlicScript**: This is where Ask Wonderlic becomes useful because a lot of managers can identify the issue, but they do not always know how to turn it into a good coaching conversation.

So instead of the manager starting from scratch, I can ask for coaching questions, routines, and a one-on-one follow-up plan based on Derek's actual profile and the behavior we are trying to improve.

That might give the manager questions like: "What is your current process after a customer conversation?" "Where does follow-up usually break down?" "What part of the routine would be easiest to standardize first?"

Now the manager is not just saying, "Do better." They are helping Derek build the repeatable habit that protects the customer relationship.
- **actionPlannerMention**: I would not necessarily spend a ton of time here unless follow-through and adoption are big issues for you. But once Derek and his manager agree on the routine, Action Planner gives them a place to track the behavior and keep it alive after the first conversation.

That matters because behavior change usually does not happen because of one good feedback conversation. It happens because the manager and employee come back to the same behavior consistently.
- **midDemoQuestions**:
  - Is this how your managers typically coach follow-up today, or does it stay more at the 'be more organized' level?
  - Where would this routine matter most for your team: after sales calls, after customer cases, after service interactions, or after internal handoffs?
  - If a manager had this kind of guidance today, would they use it in one-on-ones, onboarding, performance conversations, or all of the above?
- **valueTieBack**: This is where Wonderlic helps managers get more consistent behavior out of the people they already chose. The value is not just the insight. It is the manager action that becomes easier: one behavior, one routine, one way to inspect progress.
- **caution**: {"dontSay":"Derek needs to become a more diligent person.","doSay":"For this role, Derek needs a more consistent post-interaction routine."}

### teamDynamicsMoment

- **purpose**: Team Dynamics helps managers see how the same behavior or motivation shows up across the team, so they can adapt coaching instead of managing everyone the same way.
- **whatToShow**:
  - Open the relevant team.
  - Go to Getting Work Done Together.
  - Open Orderliness.
  - Explain that Orderliness is the team-level proxy for Derek's Diligence story.
  - Point to the spread across the team.
  - Show how high and low patterns require different manager behavior.
  - Do not make it about one outlier.
- **productBasics**: This is not an individual report anymore. This is helping the manager understand the team pattern. Where do people naturally create structure? Where might people need more clarity, routine, or inspection? And how should the manager flex instead of using the same approach for everyone?
- **storyTranslation**: At the individual level, Derek is a Diligence story. At the team level, Orderliness helps the manager think about structure, routine, checklists, and process consistency.
- **ownWords**:
  - Derek may need more structure until the habit is built.
  - Another person may already create structure naturally.
  - The same management style will not land the same way with both people.
  - The value is manager flexibility.
- **fullScript**: At the individual level, Derek is a follow-through story. At the team level, I would use Orderliness to help the manager think about structure and routine across the group.

And I would not position this as, "Here is the bad person on the team." That is not the point.

The point is that different people need different levels of structure from their manager.

Derek may need a checklist after every customer conversation. He may need more inspection for a period of time. His manager may need to say, "For the next month, every active deal or case needs a documented next step, and we are going to review that in our one-on-one."

But another person on the same team may already create structure naturally. They may have clean notes, clean follow-up, clean next steps, and if the manager treats them exactly like Derek, they may experience that as micromanagement.

So the value of Team Dynamics is not just seeing the scores. It is helping the manager decide how to manage.

Who needs more structure? Who needs more autonomy? Who needs a checklist? Who needs outcome-based coaching? Who needs inspection until the habit is built?

That is a much better management conversation than treating the whole team the same and hoping the same coaching lands for everyone.
- **midDemoQuestions**:
  - Do your managers currently know who needs more structure versus who needs more room to run, or do they mostly learn that through trial and error?
  - Where does this show up most clearly: pipeline hygiene, customer follow-up, case closure, handoffs, or internal documentation?
  - If managers had this view, would it help them coach more consistently, or would the bigger value be helping newer managers know where to start?
- **valueTieBack**: This helps managers stop guessing. Wonderlic gives them a clearer view of how the team gets work done, so they can protect follow-through without under-managing one person or micromanaging another.
- **proxyNote**: Diligence does not have a Team Dynamics deep-dive page, so I would use Orderliness as the team-level proxy.
- **caution**: State the Orderliness proxy once and move on. Do not turn the proxy into the story.

### fullClose

So if I pull this all the way back up, Derek is the same human pattern across the platform, but the use case changes.

In Select, the question is: would this person look good in the hiring process but carry the follow-through risk that is already creating pain for the business?

In Develop, the question is: if this person is already on the team, how do we coach the behavior specifically enough that it can actually change?

And in Team Dynamics, the question is: how does the manager adapt across the team so they are not treating every person like they need the same level of structure?

That is the reason this matters beyond the assessment score. You are not just getting a profile. You are getting a more consistent way to make the hire, coach the behavior, and manage the team around the business problem you actually described.

For a team dealing with missed follow-up, messy documentation, unclear next steps, or managers chasing basic updates, this gives you a way to catch the risk earlier and manage the behavior more consistently when it shows up.

### cautions

- Do not say Derek is lazy.
- Do not say Select proves he will not follow up.
- Do not imply Select and Develop are one-to-one equivalents.
- Do not walk every score.
- Do not make Develop sound like generic self-improvement.
- Do not over-demo Action Planner unless follow-through, goal tracking, or manager adoption is a known pain.
- Do not make Team Dynamics about identifying one outlier.
- Do not over-explain the Orderliness proxy. Say it once, then return to the story.


## Caleb Turner (Compassion Caleb)

Route: `/archetypes/caleb` · Data: `src/data/calebGuidance.ts` · Component: `src/components/caleb-archetype-detail.tsx`

### Header

- Name: Caleb Turner
- Memory hook: Compassion Caleb
- Primary gap: Low Compassion
- Story: Technical expert who creates team friction
- Develop anchor: Compassion
- Team Dynamics path: Communication & Interaction → Compassion
- One sentence: Caleb is a technical expert who solves hard problems and brings valuable knowledge, but his communication style can make that expertise harder for teammates to access.

**Use when:**
- Someone is smart but hard to work with.
- Technical people are capable but create friction.
- Expertise is hard for teammates to access.
- Handoffs are painful.
- Teammates avoid the expert.
- Knowledge is stuck in one person.
- Technical standards are high, but collaboration is slow.
- The person solves problems, but creates drag around them.
- The team depends on one expert, but that expertise does not scale.

**Do not use when:**
- The issue is poor follow-up, documentation, or loop closure. Use Derek.
- The issue is inconsistent frontline execution or rework. Use Riley.
- The issue is managers avoiding accountability. Use Isabelle.
- The issue is a manager becoming reactive or controlling under pressure. Use Simon.

### Run This Demo

- **anchorOnThisPain**: The organization has people with strong technical ability, but expertise is hard for others to access, which slows handoffs, limits team capacity, creates quality risk, and makes execution too dependent on one person.
- **select**: Use Select to catch the candidate whose technical capability may look strong, but whose collaboration or communication style could make that expertise harder for the team to access.
- **develop**: Use Develop to help the manager coach the communication impact without making it personal: explain reasoning, check for understanding, and make expertise easier for others to use.
- **teamDynamics**: Use Team Dynamics to show how communication style varies across the team, so the manager can coach collaboration without lowering technical standards.
- **valueClose**: Wonderlic helps the customer avoid hiring technical talent that adds capability on paper but slows the team down in practice, then gives managers a practical way to coach how expertise moves through the team so production does not slow, quality issues do not repeat, onboarding does not stretch, and one expert does not become a bottleneck.

### Business Impact Ladder

- **observablePattern**: Technical expert solves hard problems but creates communication friction.
- **operationalConsequence**: Handoffs slow down, teammates avoid asking for help, knowledge stays trapped with one person.
- **businessPain**: Production slows, quality issues repeat, onboarding takes longer, team capacity is constrained by one expert, execution depends too heavily on a bottleneck.
- **wonderlicValue**: Wonderlic helps identify collaboration risk before hire and gives managers a way to coach communication impact without lowering technical standards.

### Core Story

> Caleb is not a bad employee. That is why the story works.
>
> Caleb may be one of the most technically capable people on the team. He solves hard problems, spots issues others miss, and knows the work deeply. Managers may rely on him because his expertise is real.
>
> The problem is that expertise only creates full value when other people can access it.
>
> If Caleb is blunt, impatient, dismissive, or hard to approach, teammates may avoid him. Handoffs may slow down. Junior employees may hesitate to ask questions. Knowledge can get trapped in one person. The team may still need Caleb, but Caleb also becomes part of why the team cannot move faster.
>
> That is the business pain.

### selectMoment

- **purpose**: Select helps hiring teams evaluate candidates against the requirements of a specific job. Candidates take Wonderlic, and the platform translates cognitive ability, personality, and motivation into a job-specific fit read. The key phrase is job-specific. We are not saying good person or bad person. For a technical or expert role, we are asking whether the person can apply that expertise in the way the team and role require.
- **whatToShow**:
  - Select homepage briefly, only enough to show active jobs and candidate pipeline.
  - Open the relevant technical, expert, specialist, engineering, operations, or skilled role.
  - Candidate ranking or fit score.
  - Individual candidate result.
  - Key indicators tied to technical problem-solving, collaboration, communication style, and role fit.
  - Candidate Compare if showing tradeoffs between two technically strong profiles.
  - Interview Guide if you want to show how the insight becomes a better technical interview.
  - New Hire Success Tips if you want to show manager handoff after hire.
- **productBasics**: Every active job can live here, and each job has its own candidate pool. The important thing is that candidates are not being ranked against a generic benchmark. They are being evaluated against what success looks like in this specific role.
- **storyTranslation**: For Caleb, the hiring question is not can this person solve technical problems. The question is: would this person look strong enough in the technical interview, but still carry the same collaboration risk that is already slowing down handoffs, knowledge sharing, or team execution?
- **ownWords**:
  - The interview may overvalue Caleb's technical expertise.
  - Select helps pressure-test the parts of the role that are easier to miss in a technical conversation.
  - For Caleb, inspect technical capability and collaboration signals together.
  - The value is avoiding hiring expertise that becomes difficult for the team to access.
- **signalsToInspect**:
  - Cooperation
  - Sociability
  - Open-Mindedness
  - Investigative Interest
  - Applied Interest
  - Cognitive Ability
- **signalsNote**: Related Select signals are directional story inputs, not one-to-one equivalents.
- **fullScript**: On the Select side, this is where Wonderlic helps before technical expertise becomes a collaboration problem.

I would think about Caleb as the candidate who could absolutely impress in a technical interview. He may know the work. He may solve hard problems quickly. He may give answers that make the hiring manager think, "This person is sharp. We need someone like this."

And that may all be true.

But the pain you described is not only whether someone has the technical skill. The pain is whether the team can actually access that skill. Will handoffs work? Will teammates ask questions early? Will this person explain decisions in a way others can use? Will they raise the standard without making everyone avoid them?

So when I am looking at a candidate in Select, I am not using this as a replacement for the technical interview. I am using it to make the technical interview smarter.

The overall fit helps you prioritize where to spend time. But once I open the individual result, this is where I want to understand the tradeoffs. If someone has strong technical or problem-solving indicators, that may explain why they look good on paper or in the interview. But if this role requires collaboration, coaching others, cross-functional handoffs, or knowledge sharing, I also want to inspect the signals related to cooperation, communication, and openness.

That is the hidden risk Caleb represents. He may look strong enough technically, but if the job requires the team to use his expertise, this gives the hiring team a way to pressure-test that before they make the hire.
- **interviewGuideReference**: Behavioral Interview Guides are where I would show how the assessment becomes a more consistent technical interview. If collaboration around expertise is the concern, the value is not that the hiring manager only asks technical questions or invents a teamwork question on the fly. The value is that Wonderlic gives them prebuilt, role-related behavioral questions tied to relevant competencies, so every candidate can be evaluated more consistently against the same success criteria.

For Caleb, that means the hiring team can probe how technical expertise shows up in handoffs, collaboration, and communication, not just whether the candidate knows the work.
- **newHireTipsReference**: New Hire Success Tips are where I would show the handoff from selection into onboarding. Once you decide to hire someone, Wonderlic can help the manager understand how to support that person earlier, so the first 30, 60, and 90 days are more intentional.

The value is faster ramping, more efficient onboarding, and fewer surprises after the person is already in seat.

For Caleb, that might mean setting expectations early around handoffs, documentation, explaining reasoning, and checking for understanding. The manager does not have to wait until teammates start avoiding the expert. They can build the collaboration routine into onboarding.
- **midDemoQuestions**:
  - Does that mirror what happens today, where someone can look technically strong but the collaboration issue only shows up once they are working with the team?
  - Are your hiring managers currently probing how technical candidates communicate and hand off work, or does the interview mostly focus on whether they know the work?
  - When these people struggle, is the bigger issue that they do not know the work, or that others cannot easily access what they know?
  - Would this be more useful earlier in the funnel to pressure-test fit, or later when managers are comparing technically strong finalists?
- **valueTieBack**: This is where Wonderlic helps you avoid hiring into the same collaboration problem you are already trying to manage. It gives the hiring team objective, job-specific evidence before they spend interview time, ramp time, manager time, and team trust on someone whose expertise may not scale through the group.
- **caution**: {"dontSay":"This person will be difficult to work with.","doSay":"For this role, communication impact and approachability are meaningful areas to inspect because the job requires expertise to move through the team."}

### developMoment

- **purpose**: Develop helps managers and employees focus on the behaviors most worth improving in the context of the person and the role. The assessment is the entrance into a development conversation, not the end of the conversation.
- **whatToShow**:
  - Develop homepage for Caleb.
  - Strengths first.
  - Critical attributes for the role.
  - Compassion as the primary harder-for-you attribute.
  - Attribute detail page.
  - Suggested actions or coaching guidance.
  - Ask Wonderlic.
  - Action Planner only if the customer cares about goal tracking, manager follow-through, or behavior adoption.
- **productBasics**: This is Caleb's Develop profile. The important shift is that we are not using this to decide whether to hire him. We are using it to help Caleb and his manager understand where he may naturally bring strengths, where parts of the role may take more intentional effort, and what behavior is most worth coaching next.
- **storyTranslation**: Caleb's development story is not that Caleb lacks empathy. It is that Caleb may bring real technical strength, but the way that expertise lands with others may take more intentional effort. That matters in this role because the team needs to access his knowledge, not work around it.
- **ownWords**:
  - Start with Caleb's strengths so this does not feel like a deficit report.
  - Compassion is the behavior anchor, but do not moralize it.
  - The manager should coach the communication impact, not the person's character.
  - The output should be one observable collaboration behavior and one inspection point.
- **fullScript**: This is where I would start with Caleb's strengths, because that is what makes this believable.

Caleb may be very strong technically. He may solve hard problems. He may spot issues that other people miss. That matters. We are not trying to coach that out of him.

But if I am his manager, the performance gap I care about is whether that expertise is usable by the team.

So I would open Compassion here because it gives us a cleaner way to talk about the behavior. And I would be careful with the language. I would not say, "Caleb lacks empathy" or "Caleb does not care." That is not the point.

For Caleb, Compassion is about communication impact. Does he check how his message lands? Does he slow down enough to bring others with him? Does he explain the reasoning before the conclusion? Do teammates feel like they can ask questions early, or do they avoid him until the issue is already bigger?

That is what I would coach.

And I would be careful not to say, "Caleb, you need to be nicer." He has probably heard some version of that before, and it is too personal to change much.

Instead, the coaching becomes very concrete. Before handing off a decision, explain the reasoning. After giving direction, ask the teammate to repeat the next step. When someone asks a basic question, treat it as a chance to make the team stronger, not as a distraction from the work.

That is the value of Develop. It turns a vague interpersonal frustration into a communication behavior the manager can actually coach.
- **askWonderlicPrompt**: Help me coach Caleb, a technical expert who solves hard problems but whose communication style can make his expertise harder for teammates to access. Give me three coaching questions, three specific behaviors he can practice during handoffs or technical explanations, and a simple one-on-one follow-up plan his manager can use to inspect progress without making the feedback feel personal.
- **askWonderlicScript**: This is where Ask Wonderlic becomes useful because a lot of managers can identify the issue, but they do not always know how to turn it into a good coaching conversation.

So instead of the manager starting from scratch, I can ask for coaching questions, behaviors, and a one-on-one follow-up plan based on Caleb's actual profile and the behavior we are trying to improve.

That might give the manager questions like: "Where do teammates most often get stuck when they need your help?" "How do you know whether your explanation landed?" "What is one handoff this week where you can slow down and make the next step clearer?"

Now the manager is not just saying, "Be nicer." They are helping Caleb make his expertise easier for the team to use.
- **actionPlannerMention**: I would not necessarily spend a ton of time here unless manager follow-through and adoption are big issues for you. But once Caleb and his manager agree on the behavior, Action Planner gives them a place to track the habit and keep it alive after the first coaching conversation.

That matters because collaboration behavior usually does not change because of one good feedback conversation. It changes because the manager keeps coming back to the same behavior: how did the handoff go, did the teammate understand, and what will you do differently next time?
- **midDemoQuestions**:
  - Is this how your managers typically coach technical friction today, or does it stay more at the 'be nicer' or 'be more patient' level?
  - Where does this behavior matter most for your team: handoffs, onboarding junior people, cross-functional work, quality issues, or escalation?
  - When managers coach high-expertise employees, do they have a repeatable way to talk about communication impact without making it personal?
  - Would this be more useful in one-on-ones, onboarding, team collaboration conversations, or all of the above?
- **valueTieBack**: This is where Wonderlic helps managers get more team value out of the technical talent they already have. The value is not just the insight. It is the manager action that becomes easier: a specific communication behavior, a clear inspection point, and a way to keep coaching it without making it personal.
- **caution**: {"dontSay":"Caleb lacks empathy or does not care about people.","doSay":"For this role, Caleb needs a more consistent communication behavior so his expertise is easier for the team to access."}

### teamDynamicsMoment

- **purpose**: Team Dynamics helps managers see how the same behavior shows up across the team, so they can adapt coaching and collaboration instead of managing everyone the same way.
- **whatToShow**:
  - Open the relevant technical, engineering, operations, or specialist team.
  - Go to Communication & Interaction.
  - Open Compassion.
  - Point to the spread across the team.
  - Show how high and low patterns require different manager behavior.
  - Explain that the same technical standard may need to be coached through different communication styles.
  - Do not make it about one outlier.
- **productBasics**: This is not an individual report anymore. This is helping the manager understand the team pattern. How do people on this team tend to communicate? Who naturally checks how their message lands and invites others in? Who may need more intentional coaching around how expertise is shared, explained, or handed off?
- **storyTranslation**: At the individual level, Caleb is a Compassion story. At the team level, Compassion helps the manager think about how communication style affects collaboration, handoffs, and how expertise moves through the team.
- **ownWords**:
  - Caleb may need coaching around how his message lands and how he brings others in.
  - Another teammate may naturally invite questions and slow down to explain.
  - The same technical standard can be coached through different communication styles.
  - The value is manager flexibility and more scalable knowledge sharing.
- **fullScript**: At the individual level, Caleb is a communication-impact story. At the team level, I would use Compassion to help the manager think about how communication styles vary across the group and how that shapes collaboration.

And I would not position this as, "Here is the difficult person on the team." That is not the point.

The point is that different team members bring different communication styles, and the manager can coach the same technical standard through those different styles.

One person may naturally check for understanding, invite questions, and slow down for a less experienced teammate. That may be why handoffs to them feel easier. Caleb may not do that on his own. He may go straight to the answer. So the manager may need to coach specific communication moves: explain the reasoning first, ask the teammate to repeat the next step, and treat basic questions as a chance to strengthen the team.

The outcome is still the same. The technical standard does not drop. But the way expertise moves through the team gets healthier.

That is the value of Team Dynamics. It helps the manager stop coaching every technical person the same way and start asking: how does this person's communication style affect the team, and what specifically should I coach so their expertise creates more value for everyone else?
- **midDemoQuestions**:
  - Do your managers currently know which technical people on the team naturally bring others along versus which ones need more intentional coaching there?
  - When collaboration breaks down around a technical expert, do managers know how to coach the communication impact without making it about personality?
  - Where does this show up most clearly for you: handoffs, cross-functional work, onboarding, incident response, or knowledge sharing?
  - Would this help managers coach more consistently across the team, especially where technical strength and communication style do not always come together?
- **valueTieBack**: This helps managers stop guessing. Wonderlic gives them a clearer view of how communication and collaboration vary across the team, so they can hold the same technical standard while coaching each person through the communication style that actually works.
- **proxyNote**: 
- **caution**: Do not say low Compassion means someone does not care. Say communication impact varies across the team, and the manager can coach how expertise moves through the group. Do not make Team Dynamics about identifying one difficult person.

### fullClose

So if I pull this all the way back up, Caleb is the same human pattern across the platform, but the use case changes.

In Select, the question is: would this person look strong in the hiring process but carry the collaboration risk that is already slowing your team down?

In Develop, the question is: if this person is already on the team, how do we coach the communication behavior specifically enough that it can actually change, without lowering the technical standard?

And in Team Dynamics, the question is: how does the manager adapt across the team so they are not treating every technical person the same way?

That is the reason this matters beyond the assessment score. You are not just getting a profile. You are getting a more consistent way to make the hire, coach the behavior, and help expertise move through the team.

For a team dealing with strong technical talent whose expertise is hard for others to access, this gives you a way to catch the risk earlier and coach the behavior more consistently when it shows up.

### cautions

- Do not say Caleb is a bad teammate or a bad person.
- Do not say low Compassion means he does not care about people.
- Do not say Select proves he will be difficult to work with.
- Do not imply Select and Develop are one-to-one equivalents.
- Do not walk every score.
- Do not make Develop sound like a personality fix.
- Do not coach this as 'be nicer' or 'be more patient.'
- Do not make Team Dynamics about identifying one difficult outlier.
- Do not over-demo Action Planner unless manager follow-through, goal tracking, or adoption is a known pain.


## Riley Parker (Results Riley)

Route: `/archetypes/riley` · Data: `src/data/rileyGuidance.ts` · Component: `src/components/riley-archetype-detail.tsx`

### Header

- Name: Riley Parker
- Memory hook: Results Riley
- Primary gap: Low Results Focus
- Story: Skilled frontline worker with inconsistent execution
- Develop anchor: Results Focus
- Team Dynamics path: Getting Work Done Together → Results Focus
- One sentence: Riley is a skilled frontline employee who can do the work, but does not consistently drive execution to standard, creating rework, extra inspection, or uneven output.

**Use when:**
- Employees know the work but do not consistently do it to standard.
- Production, shipping, service, or frontline mistakes create rework.
- Output is inconsistent across shifts, teams, or supervisors.
- Managers have to over-inspect the work.
- Stronger employees have to clean up avoidable mistakes.
- People miss downstream impact.
- Employees complete the task, but do not own the result.
- Someone has tenure or skill, but execution is uneven.
- Supervisors struggle to create consistent standards.
- Quality, safety, documentation, or handoff issues keep recurring.

**Do not use when:**
- The real issue is poor follow-up, CRM hygiene, or customer loop closure. Use Derek.
- The issue is technical expertise creating team friction. Use Caleb.
- The issue is commercial urgency or direct asks. Use Ethan.
- The issue is managers avoiding accountability. Use Isabelle.
- The issue is a manager becoming reactive or controlling under pressure. Use Simon.
- The issue is truly low learning ability. That is a Select and Cognitive Ability hiring conversation, not a Develop coaching story.

### Run This Demo

- **anchorOnThisPain**: Execution is inconsistent, which creates rework, slower production, quality misses, supervisor over-inspection, and stronger employees cleaning up avoidable mistakes.
- **select**: Use Select to catch the candidate who may look viable based on experience, availability, or familiarity with similar work, but may not have the reliability, role interest, or problem-solving capacity to execute this role consistently to standard.
- **develop**: Use Develop to help the manager coach work-to-standard behavior: what done-right looks like, where to check quality, and when to escalate instead of guessing or passing problems downstream.
- **teamDynamics**: Use Team Dynamics to show who naturally drives work to completion, who may need clearer checkpoints, and how the manager should flex inspection and support across the team.
- **valueClose**: Wonderlic helps the customer avoid hiring into the same rework and inconsistency problem, then gives managers a more practical way to coach quality, ownership, and execution so inconsistent frontline work does not turn into slower production, higher costs, quality misses, or preventable turnover.

### Business Impact Ladder

- **observablePattern**: Skilled frontline employee can do the work but does not consistently execute to standard.
- **operationalConsequence**: Steps are missed, rework increases, stronger employees clean up mistakes, managers over-inspect.
- **businessPain**: Production slows, quality drops, costs increase, output is inconsistent, supervisor capacity gets consumed, turnover risk rises.
- **wonderlicValue**: Wonderlic helps identify consistency and role-fit risk before hire and gives managers a practical way to coach work-to-standard behavior.

### Core Story

> Riley is not someone who cannot do anything. That is why the story works.
>
> Riley may know the job. They may have tenure, practical experience, or moments where the work is done well. A manager may see enough skill to keep relying on them.
>
> The problem is that the work does not consistently land at the required standard.
>
> Steps get missed. Quality checks are uneven. Handoffs create rework. Stronger employees have to clean things up. Managers start inspecting everything because they do not trust the output. The team loses time not because nobody knows the work, but because execution is inconsistent.
>
> That is the business pain.

### selectMoment

- **purpose**: Select helps hiring teams evaluate candidates against the requirements of a specific job. Candidates take Wonderlic, and the platform translates cognitive ability, personality, and motivation into a job-specific fit read. The key phrase is job-specific. We are not saying good person or bad person. For a frontline, manufacturing, operations, warehouse, shipping, service, or production role, we are asking whether the person has the reliability, motivation, and problem-solving capacity to do this work consistently to standard.
- **whatToShow**:
  - Select homepage briefly, only enough to show active jobs and candidate pipeline.
  - Open the relevant frontline, production, shipping, warehouse, service, or operations role.
  - Candidate ranking or fit score.
  - Individual candidate result.
  - Key indicators tied to reliability, routine, hands-on work, problem-solving, and role fit.
  - Candidate Compare if showing tradeoffs between two frontline candidates.
  - Interview Guide if you want to show how the insight becomes a better interview.
  - New Hire Success Tips if you want to show manager handoff after hire.
- **productBasics**: Every active job can live here, and each job has its own candidate pool. The important thing is that candidates are not being ranked against a generic benchmark. They are being evaluated against what success looks like in this specific role.
- **storyTranslation**: For Riley, the hiring question is not has this person done something similar before. The question is: would this person look workable because they have availability, experience, or enough familiarity with the work, but still carry the same consistency risk that is already creating rework, inspection, or quality issues?
- **ownWords**:
  - The interview may overvalue experience, availability, or willingness to do the job.
  - Select helps pressure-test the parts of frontline work that are easier to miss in a casual interview.
  - For Riley, inspect reliability, hands-on role interest, routine tolerance, and problem-solving together.
  - The value is avoiding hires who look workable but create rework, over-inspection, or inconsistent output once they are in seat.
- **signalsToInspect**:
  - Dependability
  - Structured Interest
  - Applied Interest
  - Cooperation
  - Cognitive Ability
- **signalsNote**: Related Select signals are directional story inputs, not one-to-one equivalents.
- **fullScript**: On the Select side, this is where Wonderlic helps before inconsistent execution becomes a supervisor problem.

I would think about Riley as the candidate who may look workable in the hiring process. Maybe they have done similar work. Maybe they are available for the shift. Maybe they say the right things in the interview. And in a tight labor market, I understand why that starts to feel like enough.

But the pain you described is not just filling the seat. The pain is what happens after the person is trained and on the floor. Do they follow the process? Do they check their work? Do they understand when a mistake creates rework downstream? Do they ask for help before passing a problem to the next person? Does the supervisor trust the output without inspecting everything?

So when I am looking at a candidate in Select, I am not using this as a replacement for the interview. I am using it to make the interview smarter.

The overall fit helps you prioritize where to spend time. But once I open the individual result, this is where I want to understand the tradeoffs. If someone has experience or availability, that may explain why they look like a practical option. But if this role requires consistent execution, hands-on work, routine, quality checks, and problem-solving, I also want to inspect Dependability, Structured Interest, Applied Interest, and Cognitive Ability.

That is the hidden risk Riley represents. They may look workable enough to hire, but if the job requires driving the work to standard every day, this gives the hiring team a way to pressure-test that before they invest the training time, supervisor time, and team capacity.
- **interviewGuideReference**: Behavioral Interview Guides are where I would show how the assessment becomes a more consistent frontline interview. If inconsistent execution is the concern, the value is not that the hiring manager only asks whether someone has done similar work before. The value is that Wonderlic gives them prebuilt, role-related behavioral questions tied to relevant competencies, so every candidate can be evaluated more consistently against the same success criteria.

For Riley, that means the hiring team can probe reliability, work-to-standard behavior, routine, quality checks, and escalation judgment instead of relying only on availability or experience.
- **newHireTipsReference**: New Hire Success Tips are where I would show the handoff from selection into onboarding. Once you decide to hire someone, Wonderlic can help the manager understand how to support that person earlier, so the first 30, 60, and 90 days are more intentional.

The value is faster ramping, more efficient onboarding, and fewer surprises after the person is already in seat.

For Riley, that might mean setting expectations early around what done-right looks like, where to check quality, when to escalate, and how to prevent rework before it moves downstream. The manager does not have to wait until supervisors or stronger employees are cleaning up avoidable mistakes. They can build the standard into onboarding.
- **midDemoQuestions**:
  - Does that mirror what happens today, where someone looks workable during hiring but the consistency issue shows up after they are trained?
  - Are your hiring managers currently probing for quality checks, routine tolerance, and escalation judgment, or does that depend on who is interviewing?
  - When mistakes happen, is the bigger issue that people cannot learn the work, or that they do not consistently drive the work to standard?
  - Would this be more useful earlier in the funnel to prioritize candidates, or later when managers are comparing finalists?
  - Where does inconsistent execution cost you most: rework, supervisor time, stronger employees cleaning up mistakes, safety, quality, or turnover?
- **valueTieBack**: This is where Wonderlic helps you avoid hiring into the same inconsistency problem you are already trying to manage. It gives the hiring team objective, job-specific evidence before they spend interview time, training time, supervisor time, and team capacity on someone who may recreate the same rework or quality gap.
- **caution**: {"dontSay":"This person cannot do the work. Or: Develop can fix low cognitive ability.","doSay":"This is a risk area to understand and probe before moving forward. If the concern is truly learning ability or connecting the dots, that is a Select and Cognitive Ability hiring conversation. Develop is for coaching the observable execution behavior once someone is already in the role."}

### developMoment

- **purpose**: Develop helps managers and employees focus on the behaviors most worth improving in the context of the person and the role. The assessment is the entrance into a development conversation, not the end of the conversation.
- **whatToShow**:
  - Develop homepage for Riley.
  - Strengths first.
  - Critical attributes for the role.
  - Results Focus as the primary harder-for-you attribute.
  - Attribute detail page.
  - Suggested actions or coaching guidance.
  - Ask Wonderlic.
  - Action Planner only if the customer cares about goal tracking, manager follow-through, or behavior adoption.
- **productBasics**: This is Riley's Develop profile. The important shift is that we are not using this to decide whether to hire them. We are using it to help Riley and their manager understand where they may naturally bring strengths, where parts of the role may take more intentional effort, and what behavior is most worth coaching next.
- **storyTranslation**: Riley's development story is not that Riley cannot do the job. It is that Riley may be capable of the work, but consistently driving the work to the required standard takes more intentional effort. That matters in this role because missed steps, uneven quality, and unclear escalation create rework for the team.
- **ownWords**:
  - Start with Riley's strengths so this does not feel like a deficit report.
  - Results Focus is the behavior anchor.
  - The manager should coach the work-to-standard behavior, not the person's character.
  - The output should be a clear definition of done-right, one checkpoint, and one escalation rule.
- **fullScript**: This is where I would start with Riley's strengths, because that is what makes this believable.

Riley may know the work. They may have experience. They may have moments where they execute well. That matters. We are not trying to coach from a place of "this person can't do anything."

But if I am their manager, the performance gap I care about is whether the work consistently lands at the required standard.

So I would open Results Focus here because it gives us a cleaner way to talk about the behavior. For Riley, Results Focus is not about ambition or quota. It is about whether the person drives the work all the way to the required outcome.

Did they check quality before passing it downstream? Did they notice when something was off? Did they escalate when they were unsure? Did they understand the result the team needed, not just the task in front of them?

That is what I would coach.

And I would be careful not to say, "Riley, you need to try harder." They have probably heard some version of that before, and it is too vague to change anything.

Instead, the coaching becomes very concrete. Define what done-right looks like. Identify one quality checkpoint before the work moves on. Agree on the exact moment Riley should escalate instead of guessing. Then inspect that behavior in the next few shifts or one-on-ones.

That is the value of Develop. It turns a vague frustration into a work-to-standard behavior the manager can actually coach.
- **askWonderlicPrompt**: Help me coach Riley, a frontline employee who can do the work but does not consistently drive execution to standard. Give me three coaching questions, three specific work-to-standard routines they can use during a shift, and a simple follow-up plan the manager can use to inspect quality and escalation behavior without micromanaging.
- **askWonderlicScript**: This is where Ask Wonderlic becomes useful because a lot of managers can identify the issue, but they do not always know how to turn it into a good coaching conversation.

So instead of the manager starting from scratch, I can ask for coaching questions, routines, and a follow-up plan based on Riley's actual profile and the behavior we are trying to improve.

That might give the manager questions like: "What does done-right look like for this task?" "Where do mistakes usually get missed before the work moves downstream?" "At what point should you stop and ask for help instead of guessing?"

Now the manager is not just saying, "Pay more attention." They are helping Riley build the repeatable habit that protects quality and reduces rework.
- **actionPlannerMention**: I would not necessarily spend a ton of time here unless manager follow-through and adoption are big issues for you. But once Riley and their manager agree on the behavior, Action Planner gives them a place to track the habit and keep it alive after the first coaching conversation.

That matters because execution behavior usually does not change from one good conversation. It changes because the manager keeps inspecting the same checkpoint: was the quality check done, was the escalation made on time, and what will you do differently on the next shift?
- **midDemoQuestions**:
  - Is this how your managers typically coach execution issues today, or does it stay at the 'try harder' or 'pay more attention' level?
  - Where does inconsistent execution show up most for you: quality, safety, documentation, handoffs, or downstream rework?
  - When supervisors coach frontline employees, do they have a repeatable way to define done-right and inspect it without micromanaging?
  - Would this be more useful in onboarding, shift huddles, one-on-ones, or performance conversations?
- **valueTieBack**: This is where Wonderlic helps managers turn vague frustration into a coachable execution behavior. The value is not just the insight. It is a specific work-to-standard routine, a clear inspection point, and a way to keep coaching it without micromanaging or resorting to 'try harder.'
- **caution**: {"dontSay":"Riley is lazy or does not care. Or: Develop will fix cognitive ability.","doSay":"For this role, Riley needs a clearer definition of done-right and a repeatable work-to-standard routine so execution becomes more consistent. If the concern is truly learning ability, that is a Select conversation."}

### teamDynamicsMoment

- **purpose**: Team Dynamics helps managers see how the same behavior shows up across the team, so they can adapt inspection, coaching, and support instead of managing everyone the same way.
- **whatToShow**:
  - Open the relevant frontline, production, operations, or service team.
  - Go to Getting Work Done Together.
  - Open Results Focus.
  - Point to the spread across the team.
  - Show how high and low patterns require different manager behavior.
  - Explain that the same quality standard may need to be coached through different levels of structure and inspection.
  - Do not make it about one outlier.
- **productBasics**: This is not an individual report anymore. This is helping the manager understand the team pattern. Who on this team naturally drives work all the way to the required outcome? Who may need clearer checkpoints, more explicit expectations, or more intentional inspection to consistently execute to standard?
- **storyTranslation**: At the individual level, Riley is a Results Focus story. At the team level, Results Focus helps the manager think about how ownership and drive to standard vary across the team, and how to flex inspection and support so the same quality expectation lands consistently.
- **ownWords**:
  - Riley may need clearer checkpoints and more explicit expectations to execute to standard.
  - Another teammate may naturally drive work all the way through without much inspection.
  - The same quality standard can be coached through different levels of structure.
  - The value is manager flexibility, less over-inspection of strong performers, and more targeted coaching for the people who need it.
- **fullScript**: At the individual level, Riley is a work-to-standard story. At the team level, I would use Results Focus to help the manager think about how ownership and drive to the required outcome vary across the group.

And I would not position this as, "Here is the weak person on the team." That is not the point.

The point is that different team members bring different levels of natural ownership, and the manager can coach the same quality standard through different amounts of structure and inspection.

One person may naturally check their work, notice when something is off, and escalate before passing a problem downstream. That may be why the manager barely has to inspect their output. Riley may not do that on their own. So the manager may need to coach specific execution moves: define done-right, agree on one quality checkpoint, and set a clear escalation rule.

The outcome is still the same. The quality standard does not drop. But the way the manager gets there flexes to the person, so strong performers are not over-inspected and Riley is not left to guess.

That is the value of Team Dynamics. It helps the manager stop coaching every frontline employee the same way and start asking: how does this person naturally drive work to standard, and how much structure and inspection does this person specifically need to consistently hit it?
- **midDemoQuestions**:
  - Do your supervisors currently know which employees on the team naturally drive work to standard versus which ones need clearer checkpoints?
  - When quality slips, do managers know how to coach the execution behavior specifically, or does it stay at 'be more careful'?
  - Where does this show up most clearly for you: production, quality, safety, handoffs, documentation, or shift-to-shift consistency?
  - Would this help supervisors flex inspection across the team, so strong performers are not over-managed and inconsistent performers get the structure they actually need?
- **valueTieBack**: This helps managers stop coaching every frontline employee the same way. Wonderlic gives them a clearer view of how ownership and drive to standard vary across the team, so they can hold the same quality expectation while flexing inspection and structure to the person.
- **proxyNote**: 
- **caution**: Do not say low Results Focus means someone is lazy or does not care. Say ownership and drive to standard vary across the team, and the manager can flex inspection and structure to hit the same quality expectation. Do not make Team Dynamics about identifying one weak outlier.

### fullClose

So if I pull this all the way back up, Riley is the same human pattern across the platform, but the use case changes.

In Select, the question is: would this person look workable in the hiring process but carry the same consistency risk that is already creating rework and over-inspection on the team?

In Develop, the question is: if this person is already on the team, how do we coach the work-to-standard behavior specifically enough that it can actually change, without resorting to "try harder"?

And in Team Dynamics, the question is: how does the manager adapt across the team so they are not treating every frontline employee the same way?

That is the reason this matters beyond the assessment score. You are not just getting a profile. You are getting a more consistent way to make the hire, coach the behavior, and hold the same quality standard across the team.

For a team dealing with skilled frontline employees whose execution is uneven, this gives you a way to catch the risk earlier and coach the behavior more consistently when it shows up.

### cautions

- Do not say Riley is lazy or does not care.
- Do not say Riley cannot do the work.
- Do not position Develop as fixing cognitive ability. If learning ability is the real concern, that is a Select conversation.
- Do not say Select proves someone will fail in the role.
- Do not imply Select and Develop are one-to-one equivalents.
- Do not walk every score.
- Do not coach this as 'try harder' or 'pay more attention.'
- Do not make Team Dynamics about identifying one weak outlier.
- Do not over-demo Action Planner unless manager follow-through, goal tracking, or adoption is a known pain.


## Isabelle Martin (Influence Isabelle)

Route: `/archetypes/isabelle` · Data: `src/data/isabelleGuidance.ts` · Component: `src/components/isabelle-archetype-detail.tsx`

### Header

- Name: Isabelle Martin
- Memory hook: Influence Isabelle
- Primary gap: Low Influence
- Story: Supportive manager who avoids accountability
- Develop anchor: Influence
- Team Dynamics path: Communication & Interaction → Influence
- One sentence: Isabelle is a supportive manager who builds trust and cares about her team, but struggles to use that trust to set clear expectations, give direct feedback, and hold people accountable.

**Use when:**
- Managers avoid hard conversations.
- Managers are liked but do not hold people accountable.
- Managers only give positive feedback.
- Performance issues linger too long.
- Expectations are unclear.
- HR gets pulled in after the issue has grown.
- Strong employees get frustrated because underperformance is tolerated.
- Managers soften the message so much that the employee does not understand what needs to change.
- One-on-ones are friendly but not performance-driving.
- Leaders say managers need to have more direct conversations.
- Managers care about their people, but struggle to turn care into accountability.

**Do not use when:**
- The issue is poor follow-up, CRM hygiene, or customer loop closure. Use Derek.
- The issue is commercial urgency or direct asks from a seller. Use Ethan.
- The issue is technical expertise creating team friction. Use Caleb.
- The issue is inconsistent frontline execution or rework. Use Riley.
- The issue is a manager becoming reactive, controlling, or a bottleneck under pressure. Use Simon.

### Run This Demo

- **anchorOnThisPain**: Managers care about their people and may be well-liked, but they avoid direct feedback, soften accountability conversations, or allow performance issues to linger until numbers are missed, production or service standards slip, strong employees get frustrated, or HR and senior leaders have to step in.
- **select**: Use Select to catch the external manager candidate who may present as supportive and people-oriented, but may not naturally bring the directness and influence needed to set expectations, address performance, and move difficult conversations forward.
- **develop**: Use Develop to help the manager coach the accountability behavior without asking Isabelle to become harsh: name the gap clearly, connect it to impact, and agree on the next observable behavior.
- **teamDynamics**: Use Team Dynamics to show how influence and directness vary across the team, so leaders can coach managers and employees differently instead of assuming everyone will speak up, challenge, or hold the line the same way.
- **valueClose**: Wonderlic helps avoid hiring external manager candidates who build trust but may not create enough accountability, and helps leaders coach the managers they already have so trust turns into clearer expectations and follow-through before lingering performance issues become missed numbers, production drag, HR escalations, or preventable turnover.

### Business Impact Ladder

- **observablePattern**: Supportive managers build trust but avoid direct feedback, soften expectations, or delay accountability conversations.
- **operationalConsequence**: Performance issues linger, employees leave conversations unclear about what needs to change, strong employees carry more of the burden, and HR or senior leaders get pulled in late.
- **businessPain**: Teams miss numbers, production or service standards slip, underperformance becomes normalized, strong employees get frustrated, and preventable turnover risk increases.
- **wonderlicValue**: Wonderlic helps identify accountability risk before hiring external manager candidates, and helps leaders coach the managers they already have on direct feedback, expectation-setting, and follow-through.

### Core Story

> Isabelle is not a bad manager. That is why the story works.
>
> Isabelle may care deeply about her people. Her team may like her. Employees may feel safe with her, and leaders may see her as steady, supportive, and good for morale.
>
> The problem is that support does not automatically create accountability.
>
> When someone is missing expectations, Isabelle may soften the message. She may delay the conversation. She may give too much context and not enough clarity. She may hope the employee picks up on the issue without having to say it directly. The one-on-one feels positive, but the behavior does not change.
>
> Over time, underperformance lingers. Strong employees get frustrated. HR gets pulled in late. Senior leaders wonder why the manager did not address the issue sooner. The team can miss numbers, production or service standards can slip, and preventable turnover risk can increase because performance issues were not addressed early enough.
>
> That is the business pain.

### selectMoment

- **purpose**: Select helps hiring teams evaluate candidates against the requirements of a specific job. Candidates take Wonderlic, and the platform translates cognitive ability, personality, and motivation into a job-specific fit read. The key phrase is job-specific. We are not saying good person or bad person. For a manager role, that means we are not only asking whether the person is liked, supportive, or experienced. We are asking whether they can set expectations, address performance, stay steady in difficult conversations, and move people toward behavior change.
- **whatToShow**:
  - Select homepage briefly, only enough to show active jobs and candidate pipeline.
  - Open the relevant manager, supervisor, team lead, or leadership role.
  - Candidate ranking or fit score.
  - Individual candidate result.
  - Key indicators tied to people leadership, accountability, directness, resilience, and role fit.
  - Candidate Compare if showing tradeoffs between two manager candidates.
  - Interview Guide if you want to show how the insight becomes a better manager interview.
  - New Hire Success Tips if you want to show leader handoff after the hiring decision.
- **productBasics**: Every active job can live here, and each job has its own candidate pool. The important thing is that candidates are not being ranked against a generic benchmark. They are being evaluated against what success looks like in this specific role.
- **storyTranslation**: For Isabelle, the external hiring question is not will people like this manager. The question is: would this candidate look strong because they are supportive and trusted, but still carry the same accountability risk that is already allowing performance issues to linger, standards to slip, or strong employees to carry the cost?
- **ownWords**:
  - The interview may overvalue Isabelle's warmth, supportiveness, or team-first style.
  - Select helps pressure-test the parts of management that are easier to miss in conversation.
  - For Isabelle, inspect the people orientation and the accountability signals together.
  - The value is avoiding an external manager hire where trust exists, but direct performance leadership is missing.
  - The business reason this matters is that delayed accountability can become missed numbers, production drag, HR escalation, or preventable turnover.
- **signalsToInspect**:
  - Enterprising Interest
  - Stress Tolerance
  - Sociability
  - Cooperation
  - Supportive Interest
  - Dependability
- **signalsNote**: Related Select signals are directional story inputs, not one-to-one equivalents.
- **fullScript**: On the Select side, this is where Wonderlic helps before a supportive manager becomes an accountability problem.

I would think about Isabelle as the candidate who could absolutely look strong in a manager interview. She may be thoughtful. She may be supportive. She may talk about caring for the team and building trust. The hiring manager may leave the conversation thinking, "People will like working for her."

And that may be true.

But the pain you described is not only whether employees like the manager. The pain is whether the manager can set expectations, name the gap, and move the employee toward a behavior change when performance is not where it needs to be.

Because when that does not happen, the issue does not stay isolated to one awkward conversation. Performance issues linger. Strong employees get frustrated. HR gets pulled in late. Production, service, or team numbers can suffer because the manager did not address the issue early enough.

So when I am looking at a candidate in Select, I am not using this as a replacement for the interview. I am using it to make the interview smarter.

The overall fit helps you prioritize where to spend time. But once I open the individual result, this is where I want to understand the tradeoffs. If someone has strong people-oriented signals, that may explain why they come across well and build trust. But if this manager role requires direct feedback, accountability, and difficult conversations, I also want to inspect the signals related to influence, stress tolerance, and follow-through.

That is the hidden risk Isabelle represents. She may look strong because she is supportive, but if the job requires turning trust into clear accountability, this gives the hiring team a way to pressure-test that before they make the hiring decision.
- **interviewGuideReference**: Behavioral Interview Guides are where I would show how the assessment becomes a more consistent manager interview. If accountability is the concern, the value is not that the hiring manager only asks about leadership style or whether people like working for the candidate. The value is that Wonderlic gives them prebuilt, role-related behavioral questions tied to relevant competencies, so every candidate can be evaluated more consistently against the same success criteria.

For Isabelle, that means the hiring team can probe direct feedback, expectation-setting, and accountability behavior instead of relying only on warmth, trust, or manager presence.
- **newHireTipsReference**: New Hire Success Tips are where I would show the handoff from selection into onboarding. Once you decide to hire someone, Wonderlic can help the manager understand how to support that person earlier, so the first 30, 60, and 90 days are more intentional.

The value is faster ramping, more efficient onboarding, and fewer surprises after the person is already in seat.

For Isabelle, that might mean setting expectations early around one-on-ones, direct feedback, documentation, and how to make expectations clear before performance issues linger. The leader does not have to wait until HR is pulled in late. They can build accountability routines into onboarding.
- **midDemoQuestions**:
  - Does that mirror what happens today, where someone is liked as a manager but the accountability issue only shows up after they have a team?
  - Are your hiring managers currently probing for direct feedback and difficult conversation skills, or does the interview mostly focus on leadership style?
  - When performance issues linger today, is the bigger issue that managers do not care, or that they struggle to say the hard thing clearly?
  - What does delayed accountability usually turn into for you: missed numbers, slowed production, HR escalation, stronger employees getting frustrated, or turnover?
  - Would this be more useful for external manager hiring, or would your current-manager use case be better served through Develop and Team Dynamics?
- **valueTieBack**: This is where Wonderlic helps the hiring team pressure-test role fit before investing interview time, ramp time, leader time, and team trust in an external manager candidate who builds trust but may not create enough accountability, and who could recreate the same performance issues that turn into missed numbers, production drag, HR escalation, or preventable turnover.
- **caution**: {"dontSay":"This person cannot manage. Or: Low Influence means they are weak.","doSay":"This is a risk area to understand and probe before moving forward. For this role, direct feedback and accountability are meaningful areas to inspect because the job requires moving people toward behavior change."}

### developMoment

- **purpose**: Develop helps managers and employees focus on the behaviors most worth improving in the context of the person and the role. The assessment is the entrance into a development conversation, not the end of the conversation.
- **whatToShow**:
  - Develop homepage for Isabelle.
  - Strengths first.
  - Critical attributes for the role.
  - Influence as the primary harder-for-you attribute.
  - Attribute detail page.
  - Suggested actions or coaching guidance.
  - Ask Wonderlic.
  - Action Planner only if the customer cares about goal tracking, manager follow-through, or behavior adoption.
- **productBasics**: This is Isabelle's Develop profile. The important shift is that we are not using this to decide whether to hire or promote her. We are using it to help Isabelle and her leader understand where she may naturally bring strengths, where parts of the role may take more intentional effort, and what behavior is most worth coaching next.
- **storyTranslation**: Isabelle's development story is not that Isabelle needs to become harsh. It is that Isabelle may build trust naturally, but direct feedback and accountability conversations take more intentional effort. That matters in this role because her team needs clarity, not just support.
- **ownWords**:
  - Start with Isabelle's strengths so this does not feel like a deficit report.
  - Influence is the behavior anchor.
  - The leader should coach the accountability behavior, not the person's character.
  - The output should be one clear expectation, one impact statement, one behavior change, and one inspection point.
  - The business reason this matters is that unclear accountability allows performance issues to linger until they affect team results.
- **fullScript**: This is where I would start with Isabelle's strengths, because that is what makes this believable.

Isabelle may care deeply about her team. She may build trust. People may feel safe with her. That matters. We are not trying to coach that out of her.

But if I'm her leader, the performance gap I care about is what happens when support needs to become accountability.

So I would open Influence here because it gives us a cleaner way to talk about the behavior. For Isabelle, Influence is not about being loud or dominant. It is about whether she can move a conversation toward clarity and behavior change.

Does she name the issue clearly? Does she explain the impact? Does the employee leave knowing what needs to change? Does she inspect the follow-through? Or does she soften the message so much that the employee leaves thinking the conversation went fine?

That is what I would coach.

And I would be careful not to say, "Isabelle, you need to be tougher." She has probably heard some version of that before, and it is too vague to change anything.

Instead, the coaching becomes very concrete. Before the conversation, write down the one expectation that is not being met. Name the impact of that gap. Ask the employee to confirm what they heard. Agree on the next observable behavior. Then inspect that behavior in the next one-on-one.

That matters because accountability is not just an HR issue. If the manager does not name the expectation early, the team can miss numbers, production or service standards can slip, and stronger employees can start carrying the cost.

That is the value of Develop. It turns a vague frustration into an accountability behavior the leader can actually coach.
- **askWonderlicPrompt**: Help me coach Isabelle, a supportive manager who builds trust but struggles to give direct feedback and hold people accountable. Give me three coaching questions, three specific routines she can use before and during performance conversations, and a simple one-on-one follow-up plan her leader can use to inspect progress without asking her to become harsh.
- **askWonderlicScript**: This is where Ask Wonderlic becomes useful because a lot of leaders can identify the issue, but they do not always know how to turn it into a good coaching conversation.

So instead of the leader starting from scratch, I can ask for coaching questions, routines, and a one-on-one follow-up plan based on Isabelle's actual profile and the behavior we are trying to improve.

That might give the leader questions like: "What part of the message are you most likely to soften?" "What does the employee need to understand by the end of the conversation?" "How will you know whether the behavior actually changed?"

Now the leader is not just saying, "Hold people accountable." They are helping Isabelle use the trust she already has to create clearer expectations and follow-through before the issue turns into missed numbers, HR escalation, or preventable turnover.
- **actionPlannerMention**: I would not necessarily spend a ton of time here unless manager follow-through and adoption are big issues for you. But once Isabelle and her leader agree on the behavior, Action Planner gives them a place to track the habit and keep it alive after the first coaching conversation.

That matters because accountability behavior usually does not change because of one good feedback conversation. It changes because the leader keeps coming back to the same behavior: what expectation did you name, did the employee understand it, what changed, and what needs to happen next?
- **midDemoQuestions**:
  - Is this how your leaders typically coach accountability today, or does it stay more at the 'be more direct' level?
  - Where does this behavior matter most for your team: one-on-ones, performance conversations, attendance issues, quality issues, coaching plans, or documentation?
  - When managers avoid hard conversations, do leaders have a repeatable way to help them prepare the message?
  - What happens when the manager waits too long: missed numbers, slower production, service issues, HR escalation, stronger employees getting frustrated, or turnover?
  - Would this be more useful in manager onboarding, leadership development, performance management, or all of the above?
- **valueTieBack**: This is where Wonderlic helps leaders get more consistent accountability from the managers they already have. The value is not just the insight. It is the leader action that becomes easier: name the expectation, connect it to impact, inspect the behavior, and reduce the number of issues that linger until they affect team performance, production, service quality, HR workload, or retention.
- **caution**: {"dontSay":"Isabelle needs to become more forceful as a person. Or: Low Influence means she cannot manage.","doSay":"For this role, Isabelle needs a more consistent accountability routine. This part of management may take more intentional effort for Isabelle, so her leader needs to coach the behavior more specifically."}

### teamDynamicsMoment

- **purpose**: Team Dynamics helps leaders see how the same behavior or communication pattern shows up across the team, so they can adapt coaching instead of managing everyone the same way.
- **whatToShow**:
  - Open the relevant manager, leadership, HR, sales, operations, or supervisor team.
  - Go to Communication & Interaction.
  - Open Influence.
  - Point to the spread across the team.
  - Show how high and low patterns require different leader behavior.
  - Explain that the leader is coaching clarity and behavior movement, not personality style.
  - Do not make it about one outlier.
- **productBasics**: This is not an individual report anymore. This is helping the leader understand the team pattern. Who naturally speaks up, challenges, persuades, and moves conversations forward? Who may need more structure to say the hard thing clearly? And how should the leader coach communication instead of assuming everyone handles accountability conversations the same way?
- **storyTranslation**: At the individual level, Isabelle is an Influence story. At the team level, Influence helps the leader think about directness, persuasion, expectation-setting, and whether people move conversations toward action.
- **ownWords**:
  - Isabelle may need a clearer structure for direct feedback.
  - Another person may naturally challenge, persuade, or push.
  - The same communication coaching will not land the same way with both people.
  - The value is leader flexibility and more consistent accountability across the team.
  - The business reason this matters is that inconsistent manager accountability creates inconsistent team performance.
- **fullScript**: At the individual level, Isabelle is an accountability conversation story. At the team level, I would use Influence to help the leader understand how directness and behavior movement show up across the group.

And I would not position this as, "Here is the weak manager on the team." That is not the point.

The point is that different people move conversations forward differently.

One manager may naturally challenge, push, and name the issue quickly. That can be useful, but they may need coaching around tone or listening. Another manager may build trust and create safety, but need more structure to make the message clear enough that the employee knows what has to change.

For Isabelle, the coaching might be: before the conversation, write the expectation in one sentence. During the conversation, say it plainly. Ask the employee to repeat the next step. After the conversation, inspect the behavior.

That is not just a communication preference. It is a team performance issue. If managers do not create clarity, issues linger, strong employees get frustrated, and leaders end up managing problems that should have been addressed closer to the work.

That is the value of Team Dynamics. It helps the leader stop treating accountability as a personality issue and start managing it as a team performance issue.
- **midDemoQuestions**:
  - Do your leaders currently know which managers naturally push and which managers need more structure to say the hard thing?
  - Where does this show up most clearly: one-on-ones, performance management, attendance, quality, documentation, or escalation?
  - When accountability breaks down, does the organization treat it as a personality issue or as a coachable management behavior?
  - What is the business cost when accountability is inconsistent across managers: missed numbers, production drag, HR escalation, uneven standards, or turnover?
  - Would this help leaders coach managers more consistently without making every manager sound the same?
- **valueTieBack**: This helps leaders create more consistent accountability without losing the trust that supportive managers already bring. Wonderlic gives them a clearer way to coach direct feedback, expectation-setting, and follow-through before inconsistent manager behavior turns into missed numbers, production drag, uneven standards, HR escalation, or preventable turnover.
- **proxyNote**: 
- **caution**: Do not say low Influence means someone is weak. Say this person may need more intentional coaching around direct feedback, expectation-setting, and moving conversations toward action. Do not make Team Dynamics about one outlier. Use it to show how the leader adapts across the team.

### fullClose

So if I pull this all the way back up, Isabelle is the same human pattern across the platform, but the use case changes.

In Select, the question is: would this external candidate look strong in the hiring process because they are supportive and trusted, but carry the accountability risk that is already allowing performance issues to linger?

In Develop, the question is: if this person is already managing people, how do we coach the accountability behavior specifically enough that it can actually change?

And in Team Dynamics, the question is: how does the leader adapt across the team so direct feedback, expectation-setting, and follow-through become more consistent?

That is the reason this matters beyond the assessment score. You are not just getting a profile. You are getting a more consistent way to make the external hiring decision, coach the managers you already have, and manage the team around the business problem you actually described.

For a team dealing with supportive managers, soft feedback, lingering performance issues, missed numbers, production drag, HR escalation, or strong employees getting frustrated, this gives you a way to catch the risk earlier and manage the behavior more consistently when it shows up.

### cautions

- Do not say Isabelle is weak.
- Do not say Isabelle is too nice.
- Do not say Select proves she cannot manage.
- Do not imply Select and Develop are one-to-one equivalents.
- Do not walk every score.
- Do not make Develop sound like generic self-improvement.
- Do not coach this as 'be tougher.'
- Do not imply low Influence means low leadership potential.
- Do not make Team Dynamics about identifying one outlier.
- Do not position accountability as being harsh. Position it as clarity, expectation-setting, and follow-through.
- Do not stop at 'manager avoids accountability' as the business pain. Connect it to missed numbers, slowed production, quality issues, HR escalation, turnover, or manager time.


## Simon Grant (Stability Simon)

Route: `/archetypes/simon` · Data: `src/data/simonGuidance.ts` · Component: `src/components/simon-archetype-detail.tsx`

### Header

- Name: Simon Grant
- Memory hook: Stability Simon
- Primary gap: Low Stability
- Story: Capable manager who becomes the bottleneck under pressure
- Develop anchor: Stability
- Team Dynamics path: Getting Work Done Together → Your Team Approach
- One sentence: Simon is a capable manager with high standards, but under pressure he can pull work back to himself, over-check decisions, and slow the team down.

**Use when:**
- Managers become bottlenecks.
- Promoted individual contributors struggle to delegate.
- Managers get reactive under pressure.
- Managers pull work back to themselves.
- Managers over-check the work.
- Teams wait for approval.
- High standards slow execution.
- Decisions pile up with one person.
- Employees do not feel empowered to act.
- Managers are capable, but the team does not scale through them.
- Work slows when pressure rises.
- Strong employees get frustrated because they are not trusted.
- Leaders say managers need to stop doing the work and start leading the work.

**Do not use when:**
- The issue is managers avoiding accountability conversations. Use Isabelle.
- The issue is poor follow-up, CRM hygiene, or customer loop closure. Use Derek.
- The issue is commercial urgency or direct asks from a seller. Use Ethan.
- The issue is technical expertise creating team friction. Use Caleb.
- The issue is inconsistent frontline execution or rework. Use Riley.

### Run This Demo

- **anchorOnThisPain**: Managers may know the work and have high standards, but under pressure they become the bottleneck: decisions slow down, work routes back through them, the team waits for approval, and production, service, or execution targets suffer.
- **select**: Use Select to catch the external manager candidate who may look strong because they know the work, solve problems quickly, and hold a high standard, but may not naturally bring the steadiness, flexibility, and delegation behavior needed to lead through pressure.
- **develop**: Use Develop to help the manager coach the pressure response: define decision rights, delegate before pressure spikes, stay steady when work gets messy, and inspect without pulling everything back.
- **teamDynamics**: Use Team Dynamics to show how the manager's approach affects different people on the team, so leaders can reduce dependency, increase ownership, and keep work moving without managing everyone with the same level of control.
- **valueClose**: Wonderlic helps avoid hiring external manager candidates whose teams could become dependent on them, and helps leaders coach the managers they already have on steadier delegation, clearer decision rights, and better execution under pressure.

### Business Impact Ladder

- **observablePattern**: Capable managers become reactive under pressure, over-check work, pull decisions back to themselves, or struggle to delegate.
- **operationalConsequence**: Work slows down, employees wait for approval, team members become dependent, and the manager's time becomes the constraint.
- **businessPain**: Production slows, numbers are missed, decisions are delayed, strong employees get frustrated, manager leverage drops, and preventable turnover risk increases.
- **wonderlicValue**: Wonderlic helps identify pressure-response and delegation risk before hiring external manager candidates, and helps leaders coach the managers they already have on steadier execution, clearer decision rights, and better team ownership.

### Core Story

> Simon is not an incapable manager. That is why the story works.
>
> Simon may know the work extremely well. He may have been promoted because he was dependable, technically strong, fast at solving problems, and trusted to get things done. Leaders may see him as someone who can step in when things are messy.
>
> The problem is that management is a different job than being the best individual contributor.
>
> When pressure rises, Simon may tighten control. He may pull work back to himself. He may over-check decisions. He may jump in too quickly because he knows how he would do it. The team starts waiting for approval, and work begins routing through one capable person.
>
> Over time, the manager becomes the constraint. Strong employees get frustrated. Newer employees do not build confidence. Decisions slow down. Production, service, or execution targets can suffer because the team has not learned to operate without the manager in the middle of everything.
>
> That is the business pain.

### selectMoment

- **purpose**: Select helps hiring teams evaluate candidates against the requirements of a specific job. Candidates take Wonderlic, and the platform translates cognitive ability, personality, and motivation into a job-specific fit read. The key phrase is job-specific. We are not saying good person or bad person. For a manager role, that means we are not only asking whether the person knows the work. We are asking whether they can stay steady, delegate, adapt, and keep the team moving when pressure rises.
- **whatToShow**:
  - Select homepage briefly, only enough to show active jobs and candidate pipeline.
  - Open the relevant manager, supervisor, team lead, operations, or leadership role.
  - Candidate ranking or fit score.
  - Individual candidate result.
  - Key indicators tied to stress tolerance, adaptability, delegation, structure, and role fit.
  - Candidate Compare if showing tradeoffs between two manager candidates.
  - Interview Guide if you want to show how the insight becomes a better manager interview.
  - New Hire Success Tips if you want to show leader handoff after the hiring decision.
- **productBasics**: Every active job can live here, and each job has its own candidate pool. The important thing is that candidates are not being ranked against a generic benchmark. They are being evaluated against what success looks like in this specific role.
- **storyTranslation**: For Simon, the external hiring question is not does this person know the work. The question is: would this candidate look strong because they are capable, high-standard, and technically trusted, but still carry the same pressure-response or delegation risk that is already slowing execution?
- **ownWords**:
  - The interview may overvalue Simon's technical credibility, history as a strong individual contributor, or ability to jump in and solve problems.
  - Select helps pressure-test the parts of management that are easier to miss when someone already knows the work.
  - For Simon, inspect capability and pressure-response signals together.
  - The value is avoiding an external manager hire where the person can do the work, but the team does not scale through them.
  - The business reason this matters is that manager bottlenecks create slowed production, delayed decisions, missed targets, and team dependency.
- **signalsToInspect**:
  - Stress Tolerance
  - Open-Mindedness
  - Dependability
  - Structured Interest
  - Cognitive Ability
- **signalsNote**: Related Select signals are directional story inputs, not one-to-one equivalents.
- **fullScript**: On the Select side, this is where Wonderlic helps before a capable operator becomes a manager bottleneck.

I would think about Simon as the candidate who could absolutely look strong in a manager interview. He may know the work. He may have high standards. He may be the person leaders already trust when something needs to get fixed. The hiring manager or senior leader may think, "He understands the operation. People will respect him."

And that may be true.

But the pain you described is not only whether the manager understands the work. The pain is whether the manager can keep the team moving when the work gets messy.

Because when that does not happen, the issue does not stay isolated to one manager preference. Decisions slow down. Employees wait for approval. Strong employees get frustrated because they are not trusted. Newer employees do not build confidence. Production, service, or execution numbers can suffer because too much work routes through one person.

So when I am looking at a candidate in Select, I am not using this as a replacement for the interview. I am using it to make the interview smarter.

The overall fit helps you prioritize where to spend time. But once I open the individual result, this is where I want to understand the tradeoffs. If someone has strong capability signals, that may explain why they look credible for the role. But if this manager role requires staying steady under pressure, delegating work, adapting when things change, and keeping decisions moving, I also want to inspect the signals related to stress tolerance, openness, structure, and problem-solving.

That is the hidden risk Simon represents. He may look strong because he can do the work, but if the job requires leading the work through other people, this gives the hiring team a way to pressure-test that before they make the hiring decision.
- **interviewGuideReference**: Behavioral Interview Guides are where I would show how the assessment becomes a more consistent manager interview. If manager bottlenecks are the concern, the value is not that the hiring manager only asks whether the candidate knows the operation. The value is that Wonderlic gives them prebuilt, role-related behavioral questions tied to relevant competencies, so every candidate can be evaluated more consistently against the same success criteria.

For Simon, that means the hiring team can probe pressure response, delegation, decision rights, and leading through others instead of relying only on technical credibility or operational experience.
- **newHireTipsReference**: New Hire Success Tips are where I would show the handoff from selection into onboarding. Once you decide to hire someone, Wonderlic can help the manager understand how to support that person earlier, so the first 30, 60, and 90 days are more intentional.

The value is faster ramping, more efficient onboarding, and fewer surprises after the person is already in seat.

For Simon, that might mean setting expectations early around decision rights, escalation rules, delegation routines, and how to inspect work without taking it back. The leader does not have to wait until every decision routes through the manager. They can build delegation and pressure-response routines into onboarding.
- **midDemoQuestions**:
  - Does that mirror what happens today, where someone is promoted because they know the work, but the bottleneck issue only shows up once they are leading a team?
  - Are your hiring managers currently probing delegation and pressure response, or does the interview mostly focus on experience and operational knowledge?
  - When work slows down today, is the bigger issue that managers do not care, or that they jump in too quickly and keep decisions too close?
  - What does manager bottlenecking usually turn into for you: missed numbers, slowed production, delayed decisions, strong employees getting frustrated, or turnover?
  - Would this be more useful for external manager hiring, or would your current-manager use case be better served through Develop and Team Dynamics?
- **valueTieBack**: This is where Wonderlic helps the hiring team pressure-test role fit before investing interview time, ramp time, leader time, and team trust in an external manager candidate who can do the work but may unintentionally slow the team down and recreate the same bottleneck pattern that turns into missed numbers, production drag, delayed decisions, or preventable turnover.
- **caution**: {"dontSay":"This person cannot manage. Or: Low Stability means they are unstable.","doSay":"This is a risk area to understand and probe before moving forward. For this role, pressure response and steadiness are meaningful areas to inspect because the job requires keeping the team moving when work gets messy."}

### developMoment

- **purpose**: Develop helps managers and employees focus on the behaviors most worth improving in the context of the person and the role. The assessment is the entrance into a development conversation, not the end of the conversation.
- **whatToShow**:
  - Develop homepage for Simon.
  - Strengths first.
  - Critical attributes for the role.
  - Stability as the primary harder-for-you attribute.
  - Attribute detail page.
  - Suggested actions or coaching guidance.
  - Ask Wonderlic.
  - Action Planner only if the customer cares about goal tracking, manager follow-through, or behavior adoption.
- **productBasics**: This is Simon's Develop profile. The important shift is that we are not using this to decide whether to hire or promote him. We are using it to help Simon and his leader understand where he may naturally bring strengths, where parts of the role may take more intentional effort, and what behavior is most worth coaching next.
- **storyTranslation**: Simon's development story is not that Simon cannot handle pressure. It is that Simon may be capable and high-standard, but staying steady and leading through others takes more intentional effort when pressure rises. That matters in this role because the team needs decisions, ownership, and execution to keep moving without everything routing back through the manager.
- **ownWords**:
  - Start with Simon's strengths so this does not feel like a deficit report.
  - Stability is the behavior anchor.
  - The leader should coach the pressure response and delegation behavior, not the person's character.
  - The output should be clear decision rights, one delegation routine, one escalation rule, and one inspection point.
  - The business reason this matters is that manager bottlenecks slow execution and reduce team ownership.
- **fullScript**: This is where I would start with Simon's strengths, because that is what makes this believable.

Simon may know the work. He may have high standards. He may be the person people trust when something needs to get fixed. That matters. We are not trying to coach that out of him.

But if I'm his leader, the performance gap I care about is what happens when the work gets messy and pressure rises.

So I would open Stability here because it gives us a cleaner way to talk about the behavior. For Simon, Stability is not about being calm all the time. It is about whether he can stay steady enough under pressure to keep leading the work through the team instead of pulling it back to himself.

Does he stay steady when things get busy? Does he trust the team with decisions he could make faster himself? Does he inspect the work without taking it over? Or does he tighten control, over-check, and become the bottleneck?

That is what I would coach.

And I would be careful not to say, "Simon, you need to delegate more." He has probably heard some version of that before, and it is too vague to change anything.

Instead, the coaching becomes very concrete. Define the decisions that stay with the team. Define what escalates. Agree on one delegation routine before pressure spikes. Agree on one inspection point that is not a takeover. Then hold Simon accountable to that routine when the next busy stretch hits.

That matters because bottlenecks are not just a manager style issue. If the manager keeps pulling work back, the team can miss numbers, production or service standards can slip, decisions can stall, and stronger employees can start looking elsewhere because they do not feel trusted.

That is the value of Develop. It turns a vague frustration into a delegation and pressure-response behavior the leader can actually coach.
- **askWonderlicPrompt**: Help me coach Simon, a capable manager with high standards who becomes reactive under pressure, over-checks decisions, and struggles to delegate. Give me three coaching questions, three specific routines he can use before pressure spikes and during busy stretches, and a simple one-on-one follow-up plan his leader can use to inspect progress without asking him to lower his standards.
- **askWonderlicScript**: This is where Ask Wonderlic becomes useful because a lot of leaders can identify the issue, but they do not always know how to turn it into a good coaching conversation.

So instead of the leader starting from scratch, I can ask for coaching questions, routines, and a one-on-one follow-up plan based on Simon's actual profile and the behavior we are trying to improve.

That might give the leader questions like: "Which decisions did you take back this week that could have stayed with the team?" "What routine will you use before the next busy stretch so you are not making calls in the moment?" "How will you inspect the work without taking it over?"

Now the leader is not just saying, "Delegate more." They are helping Simon protect his high standards while building the team's ownership before the pattern turns into missed numbers, delayed decisions, or preventable turnover.
- **actionPlannerMention**: I would not necessarily spend a ton of time here unless manager follow-through and adoption are big issues for you. But once Simon and his leader agree on the behavior, Action Planner gives them a place to track the habit and keep it alive after the first coaching conversation.

That matters because delegation behavior usually does not change because of one good conversation. It changes because the leader keeps coming back to the same routine: what did you delegate, what did you take back, what will you do differently next time, and how did the team respond?
- **midDemoQuestions**:
  - Is this how your leaders typically coach delegation today, or does it stay at the 'trust your team more' level?
  - Where does this behavior matter most for your team: shift changes, peak periods, escalations, project kickoffs, or day-to-day operations?
  - When managers become bottlenecks, do leaders have a repeatable way to help them define decision rights before the next busy stretch?
  - What happens when the manager keeps pulling work back: missed numbers, slower production, delayed decisions, strong employees leaving, or manager burnout?
  - Would this be more useful in manager onboarding, leadership development, or day-to-day performance management?
- **valueTieBack**: This is where Wonderlic helps leaders get more team leverage out of the managers they already have. The value is not just the insight. It is the leader action that becomes easier: define the decisions, agree on the routine, inspect without taking over, and reduce the number of moments where the manager becomes the constraint on production, service quality, or team growth.
- **caution**: {"dontSay":"Simon needs to care less about quality. Or: Low Stability means he cannot handle the job.","doSay":"For this role, Simon needs a more consistent delegation and pressure-response routine. This part of management may take more intentional effort for Simon, so his leader needs to coach the behavior more specifically."}

### teamDynamicsMoment

- **purpose**: Team Dynamics helps leaders see how the manager's approach lands across different people on the team, so they can adapt instead of managing everyone with the same level of control.
- **whatToShow**:
  - Open the relevant manager, leadership, operations, or supervisor team.
  - Go to Getting Work Done Together.
  - Open Your Team Approach.
  - Point to how different team members prefer to be led.
  - Show how a high-control manager style lands differently on different people.
  - Explain that the leader is coaching flexibility and team ownership, not personality style.
  - Do not make it about one outlier.
- **productBasics**: This is not an individual report anymore. This is helping the leader understand how Simon's approach affects the team. Who needs more structure? Who wants more autonomy? Who reads over-checking as lack of trust? The leader is not trying to make Simon manage everyone the same way. The leader is trying to help Simon adapt so the team can keep moving without the manager in the middle of every decision.
- **storyTranslation**: At the individual level, Simon is a Stability and delegation story. At the team level, Your Team Approach helps the leader think about how the manager's control style affects ownership, decision speed, and how much the team can operate without the manager in the middle.
- **ownWords**:
  - Simon may default to more control when pressure rises.
  - Some employees will accept that. Others will disengage or leave.
  - The same management approach will not land the same way with everyone.
  - The value is leader flexibility and less team dependency on one person.
  - The business reason this matters is that team dependency on one manager caps how fast the operation can move.
- **fullScript**: At the individual level, Simon is a delegation and pressure-response story. At the team level, I would use Your Team Approach to help the leader understand how Simon's default style lands across the group.

And I would not position this as, "Here is the problem manager on the team." That is not the point.

The point is that different people respond to a high-control management style very differently.

One employee may want more structure and clear direction. Simon jumping in may feel supportive to that person. Another employee may want more room to own the work. Simon over-checking may feel like distrust to that person, and over time they may disengage or leave.

For Simon, the coaching might be: know which people need more structure and which people need more room. Agree on decision rights up front so people know what is theirs. Inspect the work in a way that is predictable, not reactive.

That is not just a management style preference. It is a team performance issue. If the manager over-controls, decisions slow, the team stops making calls without checking in, and the operation depends too heavily on one person. Production, service, or execution suffers when the manager is not there.

That is the value of Team Dynamics. It helps the leader stop treating delegation as a personality issue and start managing it as a team performance issue.
- **midDemoQuestions**:
  - Do your leaders currently know how each manager's default style lands with the different people on the team?
  - Where does this show up most clearly: peak periods, escalations, cross-team projects, new hire ramp, or day-to-day decisions?
  - When a manager over-controls, does the organization treat it as a personality issue or as a coachable management behavior?
  - What is the business cost when the team depends too heavily on one manager: missed numbers, delayed decisions, slower ramp, strong employees leaving, or manager burnout?
  - Would this help leaders coach managers to flex without asking them to lower their standards?
- **valueTieBack**: This helps leaders reduce team dependency on one capable manager without asking that manager to lower their standards. Wonderlic gives them a clearer way to coach delegation, decision rights, and steady inspection before manager bottlenecks turn into missed numbers, production drag, delayed decisions, or preventable turnover.
- **proxyNote**: 
- **caution**: Do not say low Stability means someone cannot handle the job. Say this person may need more intentional coaching around pressure response, delegation, and letting the team own decisions. Do not make Team Dynamics about one outlier. Use it to show how the manager adapts across the team.

### fullClose

So if I pull this all the way back up, Simon is the same human pattern across the platform, but the use case changes.

In Select, the question is: would this external candidate look strong in the hiring process because they know the work and hold a high standard, but carry the pressure-response and delegation risk that is already slowing execution?

In Develop, the question is: if this person is already managing people, how do we coach the delegation and pressure-response behavior specifically enough that it can actually change?

And in Team Dynamics, the question is: how does the manager adapt across the team so decisions, ownership, and execution keep moving without everything routing back through one person?

That is the reason this matters beyond the assessment score. You are not just getting a profile. You are getting a more consistent way to make the external hiring decision, coach the managers you already have, and manage the team around the business problem you actually described.

For a team dealing with capable managers becoming bottlenecks, slowed production, delayed decisions, missed numbers, or strong employees getting frustrated because they are not trusted, this gives you a way to catch the risk earlier and manage the behavior more consistently when it shows up.

### cautions

- Do not say Simon is a bad manager.
- Do not say Simon cannot handle pressure.
- Do not say Select proves he cannot manage.
- Do not imply Select and Develop are one-to-one equivalents.
- Do not walk every score.
- Do not make Develop sound like generic self-improvement.
- Do not coach this as 'just delegate more.'
- Do not imply low Stability means low leadership potential.
- Do not make Team Dynamics about identifying one outlier.
- Do not position delegation as lowering the bar. Position it as protecting standards through the team.
- Do not stop at 'manager becomes a bottleneck' as the business pain. Connect it to slowed production, missed numbers, delayed decisions, strong employees leaving, or manager burnout.

