title: "Stumbling into mobile test automation"
tags:
id: 36
categories:
  - Uncategorized
---

Stumbling into mobile test automation

Automating iOS UI tests is hard. Why would anyone attempt it? (OMG, I just realized how many rhetorical questions I ask in my blogs!!!! Are they good or bad? I don't know!) It's practically impossible to test for all of the various interactions and situations in which a user might use a mobile application, much less try to automate them. Our - my testing partner and I - had a different agenda. We wanted to automate the basic functions of the app - the happy path - so we could spend our time exploring - the fun part.

Unfortunately, our path to automation was not easy. We work for an open-source shop, so we couldn't spend big bucks on a tool.

Neither one of us had any experience with mobile app test automation. We got a preview of some work being done by a Toronto Pivotal team, and they provided a sample project for us to use as a guideline. We also leaned on a book by one of Lisa's (my partner's) friends. The Introduction warns that the book is not for raw beginners, but we ignored that and forged ahead. Our first obstacle was in setting up our environment. We needed Xcode, Instruments, and the iOS simulator. We used the Instruments recorder to see what a simple script would look like.

{picture of instruments recorder here}

The script itself was simple and easy to record. Identifying objects was not so easy. The iOS UI Automation objects were new to both of us, so it took us a few attempts to figure out the hierarchy of objects and how Instruments drills into them. Eventually, we got around to implementing a recursive search method provided by {book author}, which made our tests more resilient since we were no longer dependent on the object hierarchy. We also followed the project structure in the sample project.

Here's an example of how we used the search by predicate function:

function elementByName(name, startElement){
return searchWithPredicate(predicateWithFormat("name contains %@", name), startElement);
}

We ended up with common elements in one place - a mix of direct element assignations and 'found' elements. Direct element assignments were typically for standard buttons, like this:

function done_button() {
return app.navigationBar().buttons()["Done"]
}

We also added static data to our test helper file, so if our test data changed, we could update it in one place.

Next we needed to be able to make assertions. Our sample project used the Tuneup.js library, which was written to work with the UIAutomation library. In addition to some basic assertions, it also provides a screen capture utility, so we added some screenshots to our tests for some visual validation.

https://github.com/alexvollmer/tuneup_js

So now we were getting some pass/fail messages (but not test pass/fail statuses - more on that later) and test artifacts. By this time, we were proficient in finding and addressing elements, and were finding Instruments cumbersome. In addition, our ultimate goal was to get UIAutomation UI tests running in CI, so we needed to break our dependence on Xcode and Instruments. We went is search of a command line test runner.

Tuneup.js includes a test runner, but the docs said it was deprecated in favor of Bwoken.

https://github.com/bendyworks/bwoken

After a quick look into bwoken, we kept looking. Why? Bwoken wanted our test code to be in the same Xcode workspace as our iOS app. We wanted our project to be separate until we had proven our concept.

We ended up with https://github.com/idStar/ui-automation-runner, which is a bare bones bash script that launches the ios simulator and runs tests. After a few iterations, we realized we also wanted to build our iOS and server apps locally, launch them, and run our tests, all on the same machine. UI Automation runner only did the last part, so we expanded that bash script to include a command line xcode build.

At this point we have several problems with our framework:

1\. The test runner did not return pass/fail statuses that could be interpreted by our CI tool. The test output an instruments .plist file, which is an XML file, so we needed to either parse the output for pass/fail statuses or find a different test runner.

2\. Our iOS simulator app wasn't talking to the local Tracker server. The Tracker API is robust and had everything we needed. We could load our test data, start and stop the server, and add ad hoc data as needed. Something went awry, and our server app wasn't connecting to the correct database, so our iOS tests failed.

3\. We borrowed rake tasks from an older iOS integration project, which did not take advantage of a new Tracker gem used in our CI that encapsulates bash commands in a process helper, which logs helpful feedback when things fail.

4\. Our Project Owner liked what we were doing, but noted that our current project was missing some standard functions that would make our lives easier, like an R-specy 'before all' and 'after all' method.

5\. Our project was not reliably transportable. We worked primarily on one development machine. When we tried to run our tests on a different machine, we had to spend time figuring out why they failed. The usual culprit was a missing or conflicting gem across our several code bases. We needed some gemfile help.

We decided to tackle #1 and #4 by moving to a jasmine test runner. We found this git repository - https://github.com/shaune/jasmine-ios-acceptance-tests. This repo uses