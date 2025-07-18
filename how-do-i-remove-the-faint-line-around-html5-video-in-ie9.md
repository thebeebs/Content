---
title: How do I remove the faint Line around HTML5 Video in IE9?
authors:
- thebeebs
intro: When you select a video by clicking, stop, pause o...
types:
- shorts
categories:
- web
- html5at5
published: 2011/12/07 12:00:00
updated: 2011/12/07 12:00:00
status: archived
---
















When you select a video by clicking, stop, pause or play you will see a faint line appear around the video element. This line is intentional so that people navigating your site with a keyboard can see which element them have selected. It&rsquo;s possible to remove the outline by using the following CSS:

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:0e220f89-c487-4c87-8ae5-f2a1d7a6efe9" class="wlWriterEditableSmartContent">
<pre class="brush: javascript;">video {outline: 0;} </pre>
</div>

However, it probably isn&rsquo;t a good idea since you will be making your site less accessible and more complicated for keyboard users. Here is a sample of the code in action [http://jsfiddle.net/thebeebs/yRHgW/1/](http://jsfiddle.net/thebeebs/yRHgW/1/)