---
title: Why is Canvas so slow for Text?
authors:
- thebeebs
intro: 'During the launch of IE9 I was asked to produce a ...'
types:
- shorts
categories:
- web
- html5at5
published: 2012/01/09 12:00:00
updated: 2012/01/09 13:00:00
status: archived
---

During the launch of IE9 I was asked to produce a HTML5 application that animated stitching tweets on to a canvas. During testing the application I had some really complex animations and they performed just fine, but when I added test using Text API the canvas performance was awful. I tested all the major browsers and in each one it was equally awful. That's when I learnt an important lesson about Canvas&hellip; the text API is rubbish. <p>Not only is it slow, but by adding text to Canvas you rasterize it and so if a user zooms in the text will appear pixelated. Also anything that's added to the canvas is no longer accessible, so screen readers and alike won&rsquo;t recognise it.

The reason that canvas isn&rsquo;t good for text is because it was never really designed for the purpose of displaying text. The solution is to use something that was designed for text&hellip; the regular DOM.

By adding regular DOM elements like the P tag, you can write text and then layer it over your canvas. 

Grant Skinner talked about this approach in his [talk at the NewGameConference](https://youtu.be/xdKWSjQ8bsQ?t=15m50s). He also shows how you can use the library [easelJS](http://easeljs.com/) to synchronise the movement of elements on canvas and the textual DOM elements. If you like to learn more about this technique check [out this video.](https://youtu.be/xdKWSjQ8bsQ?t=15m50s)
</p>