title: API test tool roundup
tags:
---
I've been testing several API's, and I have utilitzed three different testing tools.  There is not one tool that does everything I want it to do, so I jump around from one to another.

The good news is that it is easy to jump around and re-use requests and supporting scripts, regardless of the origin.  Of course, I prefer to keep everything in one place, so that it is discoverable and traceable, so next step is to figure out a way to make things fully transportable across tools.  I have a few ideas that I'll discuss at the end of this post.

## Postman

I love Postman and I've written about Postman before [insert link here].  Postman is my go-to http request tool under the following conditions:

 1. Exploration
 2. Script debugging
Script debugging in Postman is faster than in Runscope.  I like being able to open the chrome debugger and inspect requests and write to the console (Yes, I know I can log to the console in Runscope - I just feel closer to the action in Postman).
 3. External sharing of static collections
The Dispatch API and the Olo API are public.  Especially with Dispatch, we have folks who want to integrate using our client API.  The best way we've found to do this is provide a url to a Postman collection containing sample requests.
 4. Searching across collections and history
The search functionality in Postman searches all collections, so I can search for a particular endpoint and find all the tests that use that endpoint.  Better still would be searching my scripts or assertions, but I can do that if I download collections.


## Runscope

I also love Runscope (and the t-shirt I got from my trial with them).  I use runscope when I want to:

 1. Run tests in different environments

Yes, I can do this in Postman, too, but I like the 'inherit from' environment functionality in Runscope.  I use 'inherit from' when I'm working with a new test, and I'm not quite sure what parameters I need. In this case, I create a test environment specific to my test, have the test environment inherit from my 'stable' environment, and can then change parameter names and values while staying local to my test.

2.  Inspect traffic from my tests.  I use runscoped urls in my tests, so that all traffic from my tests is logged in my bucket for my api.  This is helpful because I can search the stream for particular endpoints, rather than having to drill into individual tests.
3. Share results - When I'm debugging a test, or get results that I have questions about, I can share a link to the test results with a developer.  Even better would be being able to share a failing test step, as it is awkward sometimes to try to direct a developer to a failing test (....Scroll down until you see the step with description "This step is failing") #Runscope wish list.
4. Quick development of a test
Once I have some basic tests, I find it super-simple to duplicate a test and tweak it for whatever new functionality is added.  Once I have the newer test running, I can replace the original test with the updated one.  

## Jmeter

 1. Compact view
When my tests are in Jmeter, I can easily view most of my steps and get a sense of the major assertions.  This information is hidden behind UI-friendliness in Postman and Runscope.
(picture of jmeter project here)
 2. Load test portability  
We use Blazemeter for load testing.  Running a new load test on Blazemeter is as simple as uploading your jmeter script to their site.  There is some easy configuration - I think we had to add a plug in for json extraction, but other than that, our jmeter tests worked out of the box with Blazemeter.
 3. Source Control
Jmeter files are stored locally, so a git flow is possible.  Both Runscope and Postman require exporting your collection, over-writing your existing collections, and then commiting the new files, which is a bastardization of normal source control.  

## Wishlist

1.  Source Control integration

Runscope and postman are not source-control-friendly.  I have some basic source control in place, which involves exporting buckets (or collections) to a json file, which replaces the previous json file.  Github does not detect changed steps - the entire file is removed and added.

Under these conditions, source control is basically acting as a multi-step backup in case my tests are accidentally deleted.

Runscope has a revision history, which is nice, but no comments or reasons or captured, so the change history is not complete.

2.  Postman to Runscope transmogrifier, and vice versa.  I'd love to be able to export runscope tests to postman, which 
> Written with [StackEdit](https://stackedit.io/).
