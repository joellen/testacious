title: "Lazy panda"
date: 2015-03-05 00:00:15
tags:
	- efficacious
id: 33
comment: false
featured_image: panda.jpg
---

New Year's resolutions are too easy.  Break them once and you're off the hook.  I prefer intentions - yoga-speak for practicing with focus on a particular principle or ideal. Intentions don't go away like New Year's resolutions when you break them.  You get to keep trying.

My intention for 2015 -- well, actually, for all time -- is to be a lazy tester.  That doesn't mean literally being lazy and not doing my job - just that I'll be using tools that will do the grunt work for me so I'm free to do the interesting stuff.  Here are a few tools I already use on a daily basis.

## [Postman REST client](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en-US "Postman Rest client")

I use this guy to create test data quickly.  I can save a set of POSTs to create data as a collection and quickly add data to any build. Take a look.

[![Postman screen shot](postman.png)](postman.png)

I can also run a quick API query to validate what I see on the screen, which is particularly helpful with reports.

Here's a handy [intro](http://www.slideshare.net/postmanclient/40-tips-to-use-postman-more-efficiently-42672890 "intro") to Postman.  I'll write a longer article soon on more extensive use of Postman and also the command line runner for Postman, [Newman](https://github.com/a85/Newman) (Newman...postman...SEINFELD...Get it??)

## [CloudApp](https://www.getcloudapp.com/) for animated gifs

CloudApp is a cloud storage tool that lets you upload screen shots and screen recordings and get a URL that you can add to a story or defect.  The neat thing about it is a shortcut (Cmd+Shift+6) that brings up a video capture frame. Once you record your screen actions, CloudApp automatically converts the recording into an Animated GIF.  For whatever reason, GIFs are so much more fun to play than mpgs.

## [SpeedLimit](http://mac.softpedia.com/get/Network-Admin/SpeedLimit.shtml)

SpeedLimit is a handy little system tool on Mac that will slow your connection speed.  Since I do most of my testing on local machines, I don't get the same response times as in-the-wild testing. Slower connection speeds can uncover problems with slow javascript execution or access of remotely stored objects. SpeedLimit lets me show things down so that I can experience my customer's pain.

[![SpeedLimit screenshot](speedlimit.png)](speedlimit.png)

## [Chrome Developer tools](https://developer.chrome.com/devtools)

Browsers are like a bad neighborhood.  Don't go into yours without Chrome Developer tools.  Better yet, learn to use them by checking out the videos [here](https://developer.chrome.com/devtools/docs/videos "how to videos").  I like the javascript console, where I can trigger events, change values, and see what happens.  Advanced users (maybe someday I'll be one) like the timeline for performance profiling.  These developer tools are kind of like shopping at a discount store - once you walk in the door, you may forget what you originally wanted and spend hours exploring.

## [Bug Magnet]((https://chrome.google.com/webstore/detail/efhedldbjahpgjcneebmbolkalbhckfi)

New kid on the block, Bug Magnet, was just released.  It's a Chrome extension (say what you like about Google...but Chrome is where it's at for testers) that's like having a testing pair to remind you of standard test cases while you're exploring web pages.

Here's some JS injection Bug Magnet generated for an Amazon search field:

[![BugMagnet screenshot](bugmagnet.png)](bugmagnet.png)

I know you can do this on your own, but why?  Be lazy - let BugMagnet do it for you.

## Maybe baby

Being lazy on mundane, rote tasks gives me more time to explore, which is my primary role on my team right now.   Plus, I get to use cool tools.  Here are a few more that look promising that I hope to have time to look into soon:

[Any.Do](http://www.any.do/) or [Wunderlist](https://www.wunderlist.com/) - being organized will let me take care of essentials so that when the fun stuff comes along, I can say YES.

[Aha.io](http://www.aha.io/) - I'm looking into higher level planning for personal projects - this might do the trick.

[Mindmup](https://www.mindmup.com/#m:new) - I love mindmapping, and would love to find a way to translate mindmaps into test charters in my tool of choice.

That's all for now!  Thanks for reading!
