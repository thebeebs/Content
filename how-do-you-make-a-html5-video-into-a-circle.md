---
title: How do you make a HTML5 video into a circle
authors:
- thebeebs
intro: 'Following a visitors request last week I showed yo...'
types:
- shorts
categories:
- web
- html5at5
published: 2011/12/19 12:00:00
updated: 2011/12/19 13:00:00
status: archived
---

Following a visitors request last week I showed you how to [produce a triangle shaped HTML5 video](http://blogs.msdn.com/b/thebeebs/archive/2011/12/08/i-would-like-to-mask-a-html5-video-element-and-convert-it-into-a-triangle-i-want-a-solution-that-will-work-in-ie9-firefox-and-chrome-is-it-possible.aspx), pretty useless but interesting none the less. A number of people on twitter asked if it was possible to make a circle video. No problem I thought... Just apply border-radius to the element. If you add a border radius to an element with a size of 50% of the width and height. Then you will get a circle shape.

Now I thought that the [following code](http://jsfiddle.net/thebeebs/KWcDB/) would work every where but it only works in IE and FF. For some reason Chrome doesn't like it and Opera doesn't apply border-radius to the contained element as I expected it to.
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:5756ad81-8a48-42bb-a71d-42272883b193" class="wlWriterEditableSmartContent"><pre class="brush: html;">.container {
    width:240px;
    height:240px;
    overflow:hidden;
    border-radius: 120px 120px 120px 120px;
}</pre></div>

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:51f3bf80-f256-4a22-8d56-341926070d37" class="wlWriterEditableSmartContent"><pre class="brush: html;"><div class="container">
     <video width="416" controls autoplay >
         <source src="images/hawea_512kb.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
         <source src="images/hawea.ogv" type='video/ogg; codecs="theora, vorbis"' >
     </video>
</div></pre></div>

To get it working in Opera I needed to remove the nesting and apply the border-radius directly to the video element.

[http://jsfiddle.net/thebeebs/KWcDB/11/](http://jsfiddle.net/thebeebs/KWcDB/11/ "http://jsfiddle.net/thebeebs/KWcDB/11/")

Chrome seemed to just ignore the border-radius on the video element. If I'm doing something wrong please let me know and I will fix it, but it seems right to me.

In conclusion I was unable to get a circle video working in all major browsers.