---
title: PlaybackRate
authors:
- thebeebs
intro: 'I was asked an interesting question on Thursday af...'
types:
- shorts
categories:
- ie9-beta
published: 2011/01/24 12:00:00
updated: 2011/01/24 13:00:00
status: archived
---

I was asked an interesting question on Thursday after I showed my HTML5 video demo. Q: If you use playbackrate to fast forward video does the property have a max value setting? Reading through the W3C [spec](http://dev.w3.org/html5/spec/video.html#video) I couldn&rsquo;t find anything specific.<p>Although the following paragraph seems to suggest that the rate can be set to whatever, but if it is too high then audio should be muted.

&ldquo;When the `[playbackRate](http://dev.w3.org/html5/spec/#dom-media-playbackrate)` is negative (playback is backwards), any corresponding audio must be muted. When the `[playbackRate](http://dev.w3.org/html5/spec/#dom-media-playbackrate)` is so low or so high that the user agent cannot play audio usefully, the corresponding audio must also be muted. If the `[playbackRate](http://dev.w3.org/html5/spec/#dom-media-playbackrate)` is not 1.0, the user agent may apply pitch adjustments to the audio as necessary to render it faithfully.&rdquo;

I tried this in IE9 and set the Playbackrate to 20000 (document.getElementById("mVideo").playbackRate = 20000)

IE9 seemed to fast-forward the video to a watchable but very fast speed, there was no notable difference between setting it at 20 and 20000. So I am assuming there is a max setting somewhere. 

So in answer to the question. Nothing bad will happen in the current IE9 beta but at this point I don&rsquo;t know for sure if their is a&nbsp; Max value setting somewhere (I will find out and update)
</p>