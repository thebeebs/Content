---
title: FIXED: Ghost Node.JS MODULE_NOT_FOUND in Visual Studio on Windows
authors:
- thebeebs
intro: 'This afternoon I met up with Hannah Wolfe the lead...'
types:
- shorts
categories:
- ghost
published: 2014/07/15 12:00:00
updated: 2014/07/15 13:00:00
status: archived
---

This afternoon I met up with Hannah Wolfe the lead dev on the Ghost.org project._&nbsp;_I wanted to show her an Application (think plug-in) I&rsquo;d written for Ghost. Imagine my embarrassment when I tried to build the project in Visual Studio and got some odd Vertx MODULE_NOT_FOUND error. I tried the obvious: &ldquo;NPM Install&rdquo; I even checked to ensure there wasn&rsquo;t some kind of security issue stopping folder access&hellip; The fix was to update the [Node tools for Visual Studio](https://nodejstools.codeplex.com/).<p>I have become accustomed to Visual Studio plug-in&rsquo;s and SDK notifying me in the notification hub when new versions are available, so this one caught me out.

Moral of the story: Before you investigate odd behaviour in beta development tools, make sure you are running the latest version.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
</p>