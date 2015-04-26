title: "Mirror, Mirror"
date: 2015-03-22 18:47:34
tags:
	- sequacious
id: 94
featured_image: kitten.jpg
---

Agile is supposed to be all about transparency. That was its biggest appeal to me, and also the hardest principle for me to put into practice.

The appeal lay in having all the pieces to the puzzle. Understanding the motivation, the problem to be solved, the goals, seeing the design process unfold, having a deep understanding of the why helped me approach testing with a wide scope - scope that was wide in both process, in that it encompassed conceptualization, design, delivery, and support, and also wide in the testing methods I could use. I could 'test' designs by asking the 'what if' questions about prototypes; I could 'test' delivery by watching stats and seeing feature uptake. I could 'test' after delivery by looking at support requests.

> I finally felt as if I contributed to the creation of this thing with my team mates.

I finally felt as if I contributed to the creation of this thing with my team mates. However, I struggled with making my work transparent. While test pass/fail results are easily shared, the test planning, design and analysis part of testing does not have a prescribed place in the agile work flow. It took patience and persistence to let the team know what I was doing, why it was important, and to encourage their participation.

Elisabeth Hendrickson suggests multiple ways of making the really valuable stuff that testers do visible to the team in her book [ExploreIT](https://pragprog.com/book/ehxta/explore-it "ExploreIT"). Even so, presenting this work as part of the teams work can be difficult to integrate.

On my last team, we successfully implemented a practice of '3 amigos' before developers started work on a story. '3 amigos' became the accepted way to work. Product owners had an opportunity to clarify their expectations, developers had a chance to ask questions, and testers got a head start on preparing test environments, scenarios, and data. Of course, 3 amigos is not appropriate for every story, but having a place for it in the work flow means you at least ask the question - should we have a 3 amigos for this story?

Once the work is visible, the question of value comes up. Is this the most important thing I can be working on right now? The less tangible outcomes of test planning, design, and analysis don't fare very well when prioritized against regression testing for a quarterly release or getting a production bug fix out. This quandary reminds me of [Stephen Covey](http://en.wikipedia.org/wiki/Stephen_Covey "Stephen Covey")'s 4 quandrants (oooh, 2 q words in one sentence!) for time management, which make a distinction between important and urgent. Important activities are those that contribute to the achievement of a goal, while urgent activities are those that demand immediate resolution - the drama queens (another q!). Urgent activities are highly visible - everyone is aware of the crisis. The not-so-exciting daily activities tend to get disrupted, until they also become urgent. Covey's advice? Commit time to processes that enable you to do things more quickly or more easily, or ensure that they get done automatically before they become urgent.

One strategy to incorporate test planning, analysis, and design (new acronym -- PAD!) into your important daily workflow - and raise their visibility -  is to involve more team members. While scheduling is initially a challenge, once the team experiences the benefits, they are usually very accommodating.  Here are a few ways to nudge your team into collaborative test activities:

1.  Help your design team with user testing.  Starting a dialog with designers early in feature development will give you lots of test ideas that you can then validate with the design team.
2.  Join a developer pair when they're writing unit tests.  You'll learn a lot about how the code is structured and be able to skip manual tests that duplicate unit tests.  You'll also share some of the pain of writing unit tests.
3.  Continuously groom your test backlog the same way product owners groom the story backlog.  Add tests to stories, add stories about test activities, write exploratory charters as tests for epics or releases, add chores for test infrastructure and data enhancements.  If it makes sense, schedule a weekly test grooming session with your team to review your test backlog.
4.  Pitch in with your support team.  Set aside an hour a day to investigate potential bugs, offer workarounds for existing bugs, or notify customers of fixed bugs.  Having direct contact with customers will enrich your test scenarios with real life examples.
Again, the magic happens when these activities become habit and part of the accepted workflow and team conversations.
