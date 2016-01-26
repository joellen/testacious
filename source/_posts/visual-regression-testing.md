date: 2015-09-27 13:43:33
title: Continuous Release
featured_image: release.jpg
tags:
 - contagious
---

Rapid releases are the new normal.  On my current team, we release several times a week.  We're not quite to the holy grail of continuous release(CR), but that's our goal. There are a few blockers to CR, including circular dependencies in the code base and a resulting dependence on manual regression testing.  But we are experimenting to try to get faster without sacrificing quality.

Our team has a long-standing practice of manual regression testing before a release, with a set of regression check lists to be completed before we pull the trigger on a release. Pretty standard, right?  Lots of teams do this.  However, there's very little room for manual regression testing in a continuous release cycle.  It's a challenge to replace the manual steps with something else that provides the same confidence that comes from the 'eyes on the app' step.

## Enter visual diffing tools

I know, I know...these guys have been around for awhile and never amounted to anything.  Writing an algorithm that compares pixels between two html pages is CS 101.  Not rocket-science.  Combining visual diffing with other tools into a useful workflow is a harder problem, but several folks have been dabbling in this area.  

You can get consistent and complete information about visual changes and regressions, beyond what your manual testers can discern, by combining a "differ" with these elements:

- CI pipeline
- automated screenshots
- visual differ (which I like to call a **Comparatator**)
- some kind of approval process

## In the flow

One possible workflow involves comparing a release candidate to the current production system.  The flow might look something like this:

1.  When your app is stable, you create a set of screenshots from your production environment which become your approved set of screenshots, sometimes called your **baseline**.  There are also tools that take the screenshots for you - I'll get into that in a bit, but for now, let's just assume that screenshots get magically created.
2.  You make changes to your app, and deploy your release candidate to a staging environment.
3.  You create a new set of screenshots on your staging environment, and run the comparatator, aka visual diffing tool, to compare the new set of screenshots against your baseline.
4.  If the new set of screenshots match the baseline screenshots, or if the only differences are expected, acceptable differences, then your release candidate can be approved for release.
5.  If the new set of screenshots do not match the baseline screenshots, then the release candidate is rejected and the team prepares a new release candidate for comparison.
6.  Once your release candidate is deployed to production, you can run a new set of production screenshots and compare them to the release candidate screenshots, to make sure the release is as expected.  The new production screenshots become your new baseline.

Other flows are possible. For example, a simple daily run of key production screenshots that is independent of your release cycle may also catch subtle regressions.  

## Change happens

If you're working in a release cycle, you **expect** differences. The secret sauce is in knowing what changes are expected and then find a balance between these two efforts:

1.  Automatically approve differences so that approving differences is not your new drudge work
2.  Block the diffing for certain elements to avoid false positives

Most diffing tools have some mechanism for hiding volatile elements or excluding them from the diff.  Judicious use of these mechanisms can keep data-sensitive elements from providing false positives and reduce the number of differences found.

## Tools

Chris Rebert published an annotated list of the current tools in this space on [github](https://gist.github.com/cvrebert/adf91e429906a4d746cd).  As part of a spring Hack Week, I played with a subset of these, including:

* [Percy](http://percy.io)
* [Wraith](https://github.com/BBC-News/wraith)
* [Applitools Eyes](https://applitools.com/)
* [Depicted](https://github.com/bslatkin/dpxdt)


### Percy
At the time I was looking (May 2015), Percy.io was not quite ready for prime time in that time period, so I did not actually use Percy.  Like most of the SAAS versions of visual diffing tools, Percy takes screenshots for you. If the screenshots match your baseline, then you can 'approve' the set of screenshots to create a new baseline.  Percy has a pretty UI, and integrates with multiple CI systems.  It also has Github pull request integration. I plan to re-visit Percy soon, since pricing has been announced.

### Wraith
Wraith is bare bones and runs from the command line. Wraith does not include an approval framework, so while it's easy to set up and run, managing the flow is very manual.  Wraith is best-suited for static sites that do not change frequently.

### Applitools Eyes
Applitools Eyes is a full-featured platform that does everything it advertises.  You write tests using their SDK in your current automation environment, and Applitools Eyes will run your tests across a multitude of browsers and resolutions, and diff them accordingly.  You can even run a diff of a web page against a mockup to make sure your implementation matches the design. Applitools Eyes was easy to setup and run, but does not provide integration with CI tools.

### Depicted
Depicted is an open-source diffing tool that you install and run on your own server.   Depicted has a release approval workflow that, while basic, provides some structure for consecutive runs. The README in the github repo (see link above) links to a video that describes how the Google Consumer Surveys team uses Depicted in their continuous release process.

## Wrapping up

Depicted runs on Google App Engine, and a developer on our team kindly set up an instance for us.  We are currently trying two approaches:

1. Selenium scripts on Sauce labs to capture screenshots in multple browsers, and then uploading the screenshots to our Depicted instance for comparison, using the DiffMyImages tool.
2. Comparing selected pages from the release candidate on a proxied instance against the same page from our production system, using the DiffMyUrls tool.

The whole team is excited about the possibilities of visual diffing, but we are cautious about introducing more manual steps.  I'll write more about our approach in a follow up post. 



 
