---
title: Overlaying data on a video
authors:
- thebeebs
intro: I got asked by [Gordon Rae](https://twitter.com/#!...
types:
- shorts
categories:
- web
- html5at5
published: 2012/02/21 12:00:00
updated: 2012/02/21 12:00:00
status: archived
---







I got asked by [Gordon Rae](https://twitter.com/#!/socialtechno) on twitter today:> <p>@[thebeebs](https://twitter.com/thebeebs) Martin, can you recommend a good tutorial for overlaying data on video in HTML5 ?
>  &mdash; Gordon Rae (@socialtechno) [February 21, 2012](https://twitter.com/socialtechno/status/171976267657256960)<script src="images/widgets.js" charset="utf-8"></script>

Firstly beware that just because a browser supports HTML5 video it might not be capable of overlays&hellip; this is true particularly on mobile devices. This is because to save battery many HTML5 capable mobile browsers pass the video playing over to the phones native player. These players are external to the web page and so can&rsquo;t display DOM elements over the video.

On most desktop browsers, tablets and a small selection of phones it is possible to place content over the top of the video element.

In general most people want to synchronise DOM elements to appear and disappear at certain points during the video. This can be achieved in JavaScript by creating a loop that polls the current position of the video. When the video reaches a certain position the developer fires events. These events could hide or show content or perhaps change a textual element on the screen.

If you don&rsquo;t fancy writing your own framework to handle this you could use [Popcorn.js](http://popcornjs.org/popcorn-101)&nbsp; there is a great tutorial on the framework over on [net tuts](http://net.tutsplus.com/articles/news/a-look-at-popcorn/) which shows how easy it is to synchronise video and your content.

If you are just looking to add subtitles to videos then a player like leanback supports the track element (by using a JavaScript Polyfil since no current browsers support the feature natively)&nbsp; [http://www.leanbackplayer.com/example_subtitles.html](http://www.leanbackplayer.com/example_subtitles.html "http://www.leanbackplayer.com/example_subtitles.html")
</p>