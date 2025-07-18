---
title: Request Animation Frame is your friend
authors:
- thebeebs
intro: If you are writing anything in JavaScript that ani...
types:
- shorts
categories:
- web
- html5at5
published: 2012/06/25 12:00:00
updated: 2012/06/25 12:00:00
status: archived
---
















If you are writing anything in JavaScript that animate then you are probably more than familiar with [setInterval](http://www.w3schools.com/js/js_timing.asp) and [setTimeout](http://www.w3schools.com/js/js_timing.asp). These are both useful tools to create timing loops. However, when it comes to creating animations they are both pretty inefficient. <p>I you use a timer period of less than 16.7ms to draw animations then you are probably asking the computer to draw more often than it can actually draw. Most monitors can only display at 60Hz frequency or 16.7ms periods. So if you used setTimeout to call a draw method every 10ms, every third callback would not be drawn to screen. So all the processing power used in that 3rd draw would have been wasted and animations will look choppy because your missing every third draw.

RequestAnimationFrame However is different. Rather than Setting up a timeout with a 16.7ms delay this will fire an event every time the system is actually capable of drawing a frame. In terms of syntax it is more similar to setTimeout, in that you need to call it over and over rather than setInterval which will make repeated calls.

Go here for a demo of [RequestAnimationFrame](http://ie.microsoft.com/testdrive/Graphics/RequestAnimationFrame/Default.html#)
</p>