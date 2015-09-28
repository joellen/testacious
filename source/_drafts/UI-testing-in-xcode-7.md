## Fancy pants Xcode 7

I've been hearing about the fancy new UI testing functionality in XCode 7.  Since Lisa Crisping and I have made automated UI integration tests our mission (Lisa blogged about it [here](http://lisacrispin.com/2014/10/12/mission-pair/) and [here](http://lisacrispin.com/2014/11/06/continuing-mission-continually-improving/)).  Naturally we were excited to try out Xcode 7.

Unfortunately, we were stymied from the start because our Tracker app was not quite ready for iOS9. Knowing that these new features would be available as soon as some of our dependencies were upgraded, we lowered the priority of writing new tests using the Tuneup library, We were overly optimistic, both in the time it would take to migrate to iOS9, and the time we would have available, given several new initiatives on our team.

So here we are, almost October, and just now dipping back into iOS automation.

###Spells and incantations

One of the first obstacles we faced was XCode itself.  Xcode is a typical developer IDE - innumerable shortcuts and hidden panels that are revealed only after you invoke the secret incantation.

In my personal time, I have been working through the [Hacking with Swift](https://www.hackingwithswift.com/) tutorial, using both the website and youtube videos.  The tutorials are fabulous, by the way, and watching the videos has been extremely helpful in learning to navigate around Xcode.

As I finished the 6th project, I realized I could be adding tests to these projects.  The projects are quite simple, usually focusing on one technique or principle, so adding tests would be an ideal way to learn to write tests at the same time.  

###And off we go!

I decided to add tests to Project 6b of the tutorial series. It's a simple little application that hand-codes a view rather than using the Storyboard. The app displays 5 labels with text, and adjusts the layout for both portrait and landscape views.  I figured I could at least write some tests that checked the label count and text, and maybe the background color.  Yes, I am setting the bar quite low.

You can find the xcode 6 files for Project 6B on [github](https://github.com/twostraws/HackingWithSwift). Xcode 7 will convert the project to the new Swift syntax for you. The project should run after conversion.  
> Don't forget to make a donation while you're waiting for your files to download!

Once I had my project running, I had to find the test functionality.  I stumbled around quite a bit but eventually found it with the help of the introductory transcript from [WWDC 2015](http://asciiwwdc.com/2015/sessions/406).  Here's a step-by-step:

####Enable testability for your app
1. Go to the Project Navigator (leftmost icon that looks like a folder).
1. Choose the topmost item, which is your project.  The center panel should open with a horizontal list of headings.
1. Choose Build Settings from the headings.
1. Use the search box to search for the 'testability' setting.
2. Enable testability for both Debug and Release builds. 

![enable testability](/users/pivotal/desktop/testability-setting.png)

Whew - that's just the first step.  See what I mean? Xcode is hard!

####Create your test template

1. Open the Test Navigator by clicking the diamand-shaped icon in the navigation bar. 
![test navigator](/users/pivotal/desktop/test-navigator.png)
1. Click the + pluss at the **bottom** of the panel to add a test target.
![test target](/users/pivotal/desktop/test-target.png)
1. Choose New UI Test Target.
![UI test target](/users/pivotal/desktop/UI-test-target.png)
1. Choose the iOS UI Testing Bundle template.
![template](/users/pivotal/desktop/template.png)
1. Almost there! Add options for your template - product name, organization name, and bundle identifier. Most of these should default from your project settings. 
![options](/users/pivotal/desktop/options.png)

Now we're in test territory.  Doesn't it feel good?

####Recording some stuff

Xcode7 has built-in recording, similar to Instruments in previous versions but now integrated into XCode.  The easiest way to see how it works is to use it.
2.  Place your cursor in the body of the testExample function.
2.  Click the round red button on the bottom bar below your example test code.  Your app should build automatically and launch the simulator.  Depending on how your windows are arranged, the simulator may not be visible.
3.  Navigate to the simulator and click some labels.
![record](/users/pivotal/desktop/record.png)

![staticTexts](/users/pivotal/desktop/staticTexts.png)

![first assert](/users/pivotal/desktop/first-assert.png)

![first test](/users/pivotal/desktop/complete-test.png)

![second test](/users/pivotal/desktop/second-test.png)

[session transcript](http://asciiwwdc.com/2015/sessions/406)