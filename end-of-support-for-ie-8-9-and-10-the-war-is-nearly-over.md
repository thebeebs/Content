---
title: End of Support for IE 8, 9 and 10: the war is nearly over
authors:
- thebeebs
intro: 'Legacy and backwards compatibility cause lots of p...'
types:
- shorts
categories:
- web
published: 2016/01/12 12:00:00
updated: 2016/01/12 13:00:00
status: archived
---

Legacy and backwards compatibility cause lots of problems in Software Development and Internet Explorer is an example of a product that has more problems than most in this regard. In my 6 years at Microsoft not a year has gone by where, at least a portion of my job, hasn't been about getting companies off of IE(x) and on to IE(x). January 12th 2015 will go down in my memory as the second final battle in this horrible war, a war which has caused so much pain, sleepless nights and lost productivity.

You see on the 12th of January 2016 [Microsoft](https://www.microsoft.com/en-gb/WindowsForBusiness/End-of-IE-support) ended support for IE8,9 and 10 and nothing in my experience gets IT departments more focused on upgrading browsers than running critical line of business apps on software that is out of support. After 12 January 2016, only the most current version of Internet Explorer available for a supported operating system will continue to receive security updates, in short this will mean IE8, 9 and 10 will no longer be patched against known malware, virus or security issues since IE11 is the most current version of IE on Windows 7, Windows 8.1 and Windows 10.

IE upgrades are a headache for IT departments, many companies rely on web based line of business (LOB) apps that were either, developed a long time ago or by 3rd parties (some of which may no longer be in business) if you're upgrading a browser than you need to make sure you have a plan to keep those legacy apps running. Many of these apps haven't been built too web standards or worse still take dependencies on IE specific features (or bugs). I have seen companies that have over a thousand of these web based systems. To your average IT guy upgrading a browser is about as an enjoyable experience as passing a kidney stone.

The history of IE and backwards compatibility is a warning to anyone that builds web systems: Always bet on standards, never on browser specific functionality. That still rings true today, if the new company expenses system that you are developing is taking a dependency on some awesome new feature in Chrome on Android that isn't a standard yet - but it's ok because everyone in your company uses Chrome on Android - just think for the poor guy in 2020 who might have to pick that apart when the company moves to the new Myspace phone (the Myspace phone is going to be huge in 2020 by the way). The sobbing wreck of a man working weekends, having to cancel his hoverboard vacation so that he can get expenses working right on the 3D holographic display.

If you are currently developing a site and your test matrix includes IE8, 9 or 10 because of a customer or internal business unit running one of these browsers, now is a great time to raise this with your boss or the customer. Is it still required to support those browsers are the customers aware that those browser no longer have support? Have they seen the [Microsoft announcement](https://www.microsoft.com/en-gb/WindowsForBusiness/End-of-IE-support).

In the future these problems won't exist. Microsoft Edge has moved to an [evergreen browser](http://eisenbergeffect.bluespire.com/evergreen-browsers/) model and so it will always be up to date (much like the underlying Windows 10 operating system).

I said at the top of this post that this is the second final battle, there is still one more battle to go before we reach the nirvana of the evergreen browser in the enterprise. IE11 > Microsoft Edge, but of course that's going to require companies moving to Windows 10 first and is a battle for another day.

If you want to see if your website might have issues with Microsoft Edge we have developed a free tool than scans your site for common compatibility issues, you can find the tool [over here](https://dev.windows.com/en-us/microsoft-edge/tools/staticscan/).