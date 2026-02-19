---
title: 5 things you should know about developing Windows 8 Apps with HTML5
authors:
- thebeebs
intro: Now that the [Windows 8 release](http://preview.wi...
types:
- shorts
categories:
- article
- controls
- html5
- search
- share
- views
- windows8
- web
- winjs
published: 2012/06/07 12:00:00
updated: 2012/06/07 12:00:00
status: archived
---
















Now that the [Windows 8 release](http://preview.windows.com) preview is out, a lot of developers are beginning to experiment with what they can do with Windows 8. <p>Unsurprisingly the focus for many is on Metro-style apps that can run across everything from desktop to slate. There are a number of ways to develop these apps but HTML5 is a good place to start if your background is Web Development.&nbsp; While Metro offers fantastic flexibility, it does require that we get our heads around some new concepts. So for this post I thought I&rsquo;d cover some of the areas I talk about at events and point you towards some useful resources to get you started.

I&rsquo;ve selected 5 things that I think you should start exploring:

## Views 

When you&rsquo;re producing an operating system without a specific device in mind, you need to make sure it&rsquo;s flexible. After all you don&rsquo;t know whether the user will be viewing the app on a PC with a large 27inch screen or a tablet with a 11.6 inch screen and a high pixel density. This can be a challenge for developers as they need to consider how there application will look across multiple devices in various orientations and in specific states (like when your app is snapped alongside another application).

The basic approach to solving this is by using adaptive controls, CSS3 Media Quires and CSS Grids. The following articles will help you understand how to make sure your app looks great whatever device it&rsquo;s used on:

*   [Designing flexible layouts](http://msdn.microsoft.com/en-us/library/windows/apps/hh465386.aspx)
*   [Defining layouts and views](http://msdn.microsoft.com/en-us/library/windows/apps/hh465343.aspx)

## Search Contract

There&rsquo;s lots of common functionality built into Windows 8 that you can take advantage of as a developer. You take advantage of this functionality by using Contracts. If you use the Search contract then a user will be able to search your app by swiping their finger over the right hand side of the screen and bringing up the search charm (the charms are a set of buttons that are always available to the user regardless of what app they have open that provide common functionality) As you&rsquo;d expect, this allows users to search within your app. However, it doesn&rsquo;t end there. Because of the way contracts glue everything together, it will also allow people to search within other apps too &ndash; or across the web for that matter.

Users can search from one single place, regardless of the app they are using or where they are in the system.

*   [Adding search to a Metro style app](http://msdn.microsoft.com/en-us/library/windows/apps/hh465238.aspx)

## Share Contract

Traditionally, when you&rsquo;re looking to add sharing functionality to an app, you need to choose up front which other services you want to use. So you might decide that you really need to let users share with Facebook and Twitter and then code that in. Of course things change over time &ndash; who knows what kinds of sharing will be popular in future? (An obvious example right now is [Pinterest](http://blogs.msdn.com/b/thebeebs/archive/2012/02/21/is-pinterest-s-html5-app-short-changing-users.aspx).)

The **share contract** is a pretty cool way round this issue. If your app in a **Share Source** then it will be able to share specific content types with any app on the system that supports accepting those content Types. Apps that accept specific content are called **Share Targets**.

So you could share an image from your app with any app that is capable of accepting image files. As a developer you don&rsquo;t need to know what app you are sharing with, you just code to a contract and Windows 8 becomes the middle man that manages the sharing.

You can share specific content types, however it is also extensible so you can define your own content types to.

*   [Adding share](http://msdn.microsoft.com/en-us/library/windows/apps/hh758314.aspx)

## Default controls

A lot of research has gone into Windows 8. Specifically, how people like to interact with an operating system on various devices. So the team has looked at desktops, laptops and tablets, and how people work with a mouse or pen or touch. In fact every which way someone might use any individual element.

All this learning has then been bundled up into the default set of controls that are included in the SDK. It means that developers don&rsquo;t have to face the complexity of re-learning everything to make their apps more user-friendly. They simply get best practice elements right from the start.

*   [Adding controls and content](http://msdn.microsoft.com/en-us/library/windows/apps/hh465393.aspx) shows a whole bunch of resources around controls.
*   [Some of the research and guidance around Windows 8 and Touch](http://bit.ly/win8touchguidance)

## WinJS

I&rsquo;ve talked before about where HTML5 excels and where it can struggle. As good as it is, there are still [some things HTML5 can&rsquo;t do yet](http://blogs.msdn.com/b/thebeebs/archive/2011/12/04/five-things-you-can-t-do-with-html5-yet.aspx). But when it comes to Windows 8, the answer is the Windows JavaScript Library. 

WinJS provides a bridge between HTML and Windows APIs. It means you don&rsquo;t have to limit what your apps can do to just what HTML5 can do.

*   [Writing code using the WinJS library](http://msdn.microsoft.com/en-us/library/windows/apps/hh967792.aspx)

So that&rsquo;s it. My starters for beginning to develop for Windows 8. I hope you find the resources useful and I&rsquo;d love to hear from you if you are currently planning or developing a Windows 8 Metro app.
</p>