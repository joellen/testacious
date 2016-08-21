title: Tooling around
tags:
  - gracious
  - sequacious
featured_image: tools.jpg
date: 2016-08-21 16:17:28
---

My current team embraces API first, which is exciting to experience first-hand.  That means we have plenty of time to write some tests that will run continuously, thus alerting us to an unexpected changes.  Note I'm not calling 'unexpected changes' breakage - code is not broken while it is still a work in progress!  Our automated tests serve as a safety net so that we can make sure any changes are intentional rather than accidental

To that end, I have taken advantage of three different testing tools for testing several different api's.  Why three?  Well, no single tool does everything I need it to do.

The good news is that it is easy to jump around and re-use requests and supporting scripts, regardless of the origin.  Of course, I prefer to keep everything in one place, so that it is discoverable and traceable, so next step is to figure out a way to make things fully transportable across tools.  

## Postman

I love Postman and I've written about [Postman](http://www.testacious.com/2015/03/05/singing-the-lazy-song/ ) before.  Postman is my go-to http request tool under the following conditions:

 1. Exploring a new endpoint
When I'm hitting an endpoint with various values to explore how it handles them, I turn to Postman.  I can easily edit the value of a url parameter or send a new json body, and try different methods.  The Postman history shows me exactly what I've done.
 2. Script debugging
Script debugging in Postman is faster than in Runscope.  I like being able to open the chrome debugger and inspect requests and write to the console (Yes, I know I can log to the console in Runscope - I just feel closer to the action in Postman).
 3. External sharing of static collections
The Dispatch API and the Olo API are public.  Especially with Dispatch, we have folks who want to integrate using our client API.  The best way we've found to do this is provide a url to a Postman collection containing sample requests.
 4. Searching across collections and history
The search functionality in Postman searches all collections, so I can search for a particular endpoint and find all the tests that use that endpoint.  Better still would be searching my scripts or assertions, but I can do that if I download collections.
 5. Re-using test steps across collections.
 When I have a request that I want to use in multiple collections, I can copy the request and drag it to a new collection.  In runscope, re-using a request across buckets is more involved.



## Runscope

I also love Runscope (and the t-shirt I got from my trial with them).  I use runscope when I want to:

1. Run tests in different environments
Yes, I can do this in Postman, too, but I like the 'inherit from' environment functionality in Runscope.  I use 'inherit from' when I'm working with a new test, and I'm not quite sure what parameters I need. I create a test environment specific to my test, have the test environment inherit from my 'stable' environment, and can then change parameter names and values while building the test.
2. Inspect traffic from my tests
I use runscoped urls in my tests, so that all traffic from my tests is logged in the bucket for my api.  This is helpful because I can search the stream for particular endpoints, rather than having to drill into individual tests.
3. Share results
When I'm debugging a test, or get results that I have questions about, I can share a link to the test results with a developer.  Even better would be being able to share a failing test step, as it is awkward sometimes to try to direct a developer to a failing test (....Scroll down until you see the step with description "This step is failing") #Runscope wish list.
4. Get a test production-ready fast
Once I have some basic tests, it is super-simple to duplicate a test and tweak it for whatever new functionality is added.  Once I have the newer test running, I can replace the original test with the updated one.  
5. Integrate with CI
We trigger runscope tests from our CI (TeamCity), and get notified of failures via slack.  Yes, also possible with Postman and jmeter, but 'feels' easier with runscope.

## Jmeter

We have some basic smoke tests in jmeter running against production.  These tests are awesome because:
1. The view is compact
When my tests are in Jmeter, I can easily view most of my steps and get a sense of the major assertions.  This information is hidden behind UI-friendliness in Postman and Runscope.
2. Re-use for load tests
We use Blazemeter for load testing.  Running a new load test on Blazemeter is as simple as uploading your jmeter script to their site.  There is some easy configuration - I think we had to add a plug in for json extraction, but other than that, our jmeter tests worked out of the box with Blazemeter.
3. Source Control-friendly
Jmeter files are stored locally, so a git flow is possible.  Both Runscope and Postman require exporting your collection, over-writing your existing collections, and then committing the new files.  
4.  Static
These tests are backbone tests - we do not change or update them very often.  They represent the 'must-have' functionality of our API, and help us distinguish between a catastrophic failure vs. a minor change in a response.

## IM(H)O

I don't use all of the features of any of these tools.  Perhaps if I did, then I wouldn't need three.  However, I find the easy pickings from each tool sufficient for my different needs, and the change in tooling helps me compartmentalize the scope of my tests.

That said, there are a few changes that might help me make the leap to a single tool:

1.  Source Control integration
Like most cloud-based tools, runscope and postman are not source-control-friendly.  We have some basic source control in place, which involves exporting buckets (or collections) to a json file, and then overwriting the previous json file.  Under these conditions, source control is simply acting as a multi-step backup in case my tests are accidentally deleted from the cloud.   Runscope has a revision history, which is nice, but no comments or reasons are captured, so the change history is not complete.    If there's a better way, please PM me and let me know!
2.  Postman to Runscope transmogrifier, and vice versa.  
Developers work primarily with Postman, because it's a bit more difficult to point runscope towards localhost (It's possible - see [this link|https://www.runscope.com/docs/api-testing/agent]).  However, I like Runscope, because then I can share results from a particular test.  Developers usually like to reproduce locally, which means they have to rebuild the requests in Postman or set up a local runscope agent.
3.  Easier access to environments
Runscope and Postman have similar concepts of environments.  However, editing values in an environment is clunky in both.  Postman does this a little better than runscope, but both require a contextual shift to edit environment variables.  Also, I'd like environments to have one more level of hierarchy.  I see a need for a base environment, then a collection-specific environment, then a test-specific environment. 

We currently have an action item to review our API test inventory across teams and evaluate whether it's worth the effort to standardize on one platform going forward.  I'll keep you informed on our progress.
