date: 2015-10-03 17:52:31
title: Xcoding
featured_image: second-test.png
tags:
 - edacious
 - sagacious
 - iosacious
---

## Fancy pants Xcode 7

I've been hearing about the fancy new UI testing functionality in XCode 7.  Since Lisa Crispin and I have made automated UI integration tests our mission (Lisa blogged about it [here](http://lisacrispin.com/2014/10/12/mission-pair/) and [here](http://lisacrispin.com/2014/11/06/continuing-mission-continually-improving/)), we were excited to try out Xcode 7.

Unfortunately, we were stymied from the start because our Tracker app was not quite ready for iOS 9. Knowing that these new features would be available as soon as some of our dependencies were upgraded, we lowered the priority of writing new tests using the Tuneup library, We were overly optimistic, both in the time it would take to migrate to iOS9, and the time we would have available, given several new initiatives on our team.

So here we are, almost October, and just now dipping back into iOS automation.

### Spells and incantations

One of the first obstacles we faced was XCode itself.  Xcode is a typical developer IDE - innumerable shortcuts and hidden panels that are revealed only after you invoke the secret spell and incantation.

In my personal time, I have been working through the [Hacking with Swift](https://www.hackingwithswift.com/) tutorial, using both the website and youtube videos.  The tutorials are fabulous, by the way, and watching the videos has been extremely helpful in learning to navigate around Xcode.

As I finished the 6th project, I realized I could be adding tests to these projects.  The projects are quite simple, usually focusing on one technique or principle, so adding tests would be an ideal way to learn to write tests at the same time.

### And off we go!

I decided to add tests to Project 6b of the tutorial series. It's a simple little application that hand-codes a view rather than using the Storyboard. The app displays 5 labels with text, and adjusts the layout for both portrait and landscape views.  I figured I could at least write some tests that checked the label count and text, and maybe the background color.  Yes, I am setting the bar quite low.

You can find the xcode 6 files for Project 6B on [github](https://github.com/twostraws/HackingWithSwift). Xcode 7 will convert the project to the new Swift syntax for you. The project should run after conversion.  Click  cmd-B to build, and hopefully you'll see the **Build Succeeded** message like I did.

> Don't forget to make a donation while you're waiting for your files to download!

Once I had my project running, I had to find the test functionality.  I stumbled around quite a bit but eventually found it with the help of the introductory transcript from [WWDC 2015](http://asciiwwdc.com/2015/sessions/406).  Here's a step-by-step:

#### Enable testability for your app
1. Go to the Project Navigator (leftmost icon that looks like a folder).
1. Choose the topmost item, which is your project.  The center panel should open with a horizontal list of headings.
1. Choose Build Settings from the headings.
1. Use the search box to search for the 'testability' setting.
2. Enable testability for both Debug and Release builds.

  ![enable testability](testability-setting.png)

Whew - that's just the first step.  See what I mean? Xcode is complicated!

#### Create your test template

1. Open the Test Navigator by clicking the diamand-shaped icon in the navigation bar.

  ![test navigator](test-navigator.png)
1. Click the +  at the **bottom** of the panel to add a test target.

  ![test target](test-target.png)
1. Choose New UI Test Target.

  ![UI test target](UI-test-target.png)
1. Choose the iOS UI Testing Bundle template.

  ![template](template.png)
1. Almost there! Add options for your template - product name, organization name, and bundle identifier. Don't forget to choose Swift as your language!  Most of these should default from your project settings.

  ![options](options.png)

Now we're in test territory.  Doesn't it feel good?

#### Recording some stuff

Xcode7 has built-in recording, similar to Instruments in previous versions but now integrated into XCode.  The easiest way to see how it works is to use it.

1.  Place your cursor in the body of the testExample function.
2.  Click the round red button on the bottom bar below your example test code.  Your app should build automatically and launch the simulator.  Depending on how your windows are arranged, the simulator may not be visible.
3.  Navigate to the simulator and click some labels.
	![record](record.png)
4. Click the red button again to stop recording.

Check out your awesome codes!  You did that!

#### Adding some real codes

Your recording instantly shows you how XCUITesting references elements. In my recording, you can see that our labels are StaticTexts elements, identified as unique by their text.
![staticTexts](staticTexts.png)

For our first test, let's make sure we have 5 labels. We can edit our recorded code to find all of the labels as a collection, and then use the assert class XCTAssert to see if the actual number of elements in the collection matches our expected number of labels.

![first assert](first-assert.png)
> Shortcut alert! Press cmd-U to run tests.

Run the test.  Xcode tells you when your test passes, and also conveniently puts a small green checkmark next to your test in the test navigator.

To test the test, change your expected value to 10 and re-run the test. Watch it fail, so you know what it looks like, and then change the value back to 5.  Do a little bit more cleanup, and voila! Our first passing test!

![first test](complete-test.png)

Our second test will verify that the label text is correct. Our expected values go into an array, and we can use a for loop to iterate over the elements and make our assertion.
> Did I mention that I chose Swift as my test language?

Notice that when we index our collection of elements, we have a slightly different construct than a simple array index.  We first have to convert our index into a *UInt*, and then use *elementBoundByIndex* to get the element, and then get the *label* property of that element.

Cmd-U to run that.  Now change the expected values to fail the test.  And back again for passing.  WooHoo!
![second test](second-test.png)
#### Success
Two Xcode UI tests!!! I considered writing a third test to verify the background color for each label.  However, background color is not supported as an element property...yet. The lack of basic color properties on elements may limit the types of tests you can write.  I'll do a bit more research and follow up on supported properties soon.

