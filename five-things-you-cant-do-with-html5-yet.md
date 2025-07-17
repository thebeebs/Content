---
title: "Five Things You Can\u2019t Do With HTML5 (yet)"
authors:
- thebeebs
intro: As much as I&rsquo;m fascinated with where HTML5 i...
types:
- shorts
categories:
- article
- flash
- html5
- ie9
published: 2011/12/04 12:00:00
updated: 2011/12/04 12:00:00
status: archived
---







As much as I&rsquo;m fascinated with where HTML5 is going, most of my day to day work is all about what you can do right now (or at the very least, ways to hack something together that works until a more elegant solution comes along). But today, I want to briefly focus on a few things HTML5 **can&rsquo;t** do just yet (but which I think it&rsquo;ll be able to do pretty soon).<p>**1: HTML5 can&rsquo;t do DRM**

So, if you&rsquo;re a media company, you want to have some way to control or limit the use of your content &ndash; typically by applying some form of digital rights management (DRM) to it. Sadly, at the moment, you can&rsquo;t do this with HTML5. The problem is that within HTML5, it&rsquo;s pretty easy to see the specification and from there, it&rsquo;s a short step to being able to get round it (the full technical and political discussion is visible over on the [W3C bug system](https://www.w3.org/Bugs/Public/show_bug.cgi?id=10902)). Personally I think this is something that needs to be cracked. Regardless of the political arguments for and against DRM, for many businesses this is a real problem &ndash; you can check out [Lovefilm&rsquo;s blog](http://blog.lovefilm.com/uncategorized/why-were-switching-from-flash-to-silverlight.html) to see the issues they face.

**2: HTML5 can&rsquo;t stream live video**

While HTML5 is absolutely fine for static video files, it can&rsquo;t stream live video. So while it&rsquo;s usable for catch-up services and video on demand, it&rsquo;s not so hot for watching a live football match. Apple has a solution with its [HTTP Live Streaming](http://developer.apple.com/library/ios/#documentation/networkinginternet/conceptual/streamingmediaguide/Introduction/Introduction.html). This delivers H.264 files chunked over HTTP but it currently only works in Safari. (BTW, one thing that does get misrepresented is the belief that you can&rsquo;t jump to a specific point in an HTML5 video. You can.) A good round up of HTML5 video resources can be found on [Streaming Media magazine&rsquo;s site](http://www.streamingmedia.com/Articles/Editorial/Featured-Articles/25-HTML5-Video-Resources-You-Might-Have-Missed-74010.aspx).

**3: Audio in HTML5 is flaky**

You&rsquo;d think that if HTML5 can deal with video then audio wouldn&rsquo;t be a big deal. The issue is really down to latency. This can become a real problem when you&rsquo;re building an application or game that requires audio to be synchronised with events taking place on screen. Part of the problem here is that each browser tends to work with audio in slightly different ways. There are ways around the issue but they really come down to pre-loading and are more at the hack end of things. If you want to know more, check out [this post on the IE blog](http://blogs.msdn.com/b/ie/archive/2011/05/13/unlocking-the-power-of-html5-lt-audio-gt.aspx) and for a solution, you can use Grant Skinner&rsquo;s [SoundJS JavaScript library](http://soundjs.com/).

**4: You can&rsquo;t interact with a webcam using HTML5**

Unlike Flash, HTML5 doesn&rsquo;t allow you to interact with a webcam (or your PC&rsquo;s microphone). This makes any kind of web-based conferencing tricky to say the least. All is not lost however. On [HTML5Labs](http://html5labs.interoperabilitybridges.com/prototypes/media-capture-api/media-capture-api/info), you can find a Prototype of the [Media Capture API](http://www.w3.org/TR/media-capture-api/) that implements the audio portion of this W3C specification. HTML5 Labs is the site where Microsoft prototypes early and unstable specifications from web standards bodies such as W3C. So it&rsquo;s not perfect and not final yet. Once audio is cracked, the next step will be video. You can [see more and download the prototype on the HTML5Labs site](http://html5labs.interoperabilitybridges.com/prototypes/media-capture-api/media-capture-api/info).

**5: You can&rsquo;t watch videos in full screen with HTML5**

Using plugins, watching full screen video is not a problem. But, with HTML5 this hasn&rsquo;t been possible (so far). However, there is already a specification allowing it to happen. Chris Pearce on the [Thundering Herd](http://blog.pearce.org.nz/2011/11/firefoxs-html-full-screen-api-enabled.html) blog recently described how he&rsquo;s enabled the HTML full-screen API in Firefox&rsquo;s nightly builds (with a view to a full release in Firefox 10 at the end of January). This API allows for an arbitrary &ldquo;full-screen&rdquo; HTML element. Chrome also has an implementation.

So that&rsquo;s it, 5 things you can&rsquo;t do quite yet but which will all be possible soon (fingers crossed).
</p>