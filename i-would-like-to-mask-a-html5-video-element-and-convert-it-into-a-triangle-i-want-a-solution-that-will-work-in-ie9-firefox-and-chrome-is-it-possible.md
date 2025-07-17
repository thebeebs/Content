---
title: I would like to mask a HTML5 video element and convert it into a triangle.
  I want a solution that will work in IE9, Firefox and Chrome. Is it possible?
authors:
- thebeebs
intro: I got asked this question during a workshop last m...
types:
- shorts
categories:
- web
- html5at5
published: 2011/12/08 12:00:00
updated: 2011/12/08 12:00:00
status: archived
---







I got asked this question during a workshop last month and so thought I'd answer it here during the time I put aside at 5 everyday to answer HTML5 questions.
 [<span>Demo</span> View Demo](http://jsfiddle.net/thebeebs/NKtGM/1/)   

You can mask videos using SVG in Firefox, but that won't work for IE9 or Chrome. You could copy the video frame by frame to a canvas element and then manipulate the video there to create a Mask effect using a similar technique to the [one I describe here](http://blogs.msdn.com/b/thebeebs/archive/2010/11/08/how-to-rotate-html5-video.aspx). <strike>It's not possible using just CSS alone</strike> and on Mobile devices HTML5 video usually plays full screen and so any effect you add will not be visible. 

**UPDATE:**

On the train home I had a thought... what about 2d transforms. Couldn't you rotate a video container by 45 degrees and the rotate the video by -45 degrees then hide the overflow. Well it turns out you can.

It's now working in Chrome, Firefox, Opera and IE9&#160; and should work anywhere that 2d-transforms are supported. You can see the code here:

[http://jsfiddle.net/thebeebs/NKtGM/1/](http://jsfiddle.net/thebeebs/NKtGM/1/ "http://jsfiddle.net/thebeebs/NKtGM/1/")

**UPDATE 2**:

A user of Chrome ([@runtyrobot](mailto:r@untyrobot)) reported that the effect wasn't working. Turns out that if Chrome is using software rendering rather than hardware rendering then it displays the video as a box. Chrome will use software rending on systems where the GPU is unsupported. You can switch off hardware rendering in Chrome using the following switch (thanks [@agileguy](http://www.twitter.com/agileguy) for the pointer): 
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:6ae5760b-2143-4104-9a8b-2c7960a5661e" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">chrome.exe --disable-accelerated-compositing </pre></div>

I tested in IE9 using the software renderer (Internet Options > Advanced > Accelerated Graphics) and it works the same as our hardware renderer.

I tested other CSS3 properties and applied them to the video element whilst Chrome is in Software mode... It seems to have the same issue ([http://jsfiddle.net/thebeebs/yRHgW/1/](http://jsfiddle.net/thebeebs/yRHgW/1/))

I don't think there is an easy way to detect from JavaScript if Chrome is in software rendering mode, if you know of one please let me know in the comments so that I can write a feature detection test to code around this bug.

Here is the CSS:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:b1bfad5d-3104-4886-b091-497b78af4043" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">video { 
    width:300px;    
    -ms-transform: rotate(-45deg);
    -ms-transform-origin: center center;
    -o-transform: rotate(-45deg);
    -o-transform-origin: center center;
    -webkit-transform: rotate(-45deg);
    -webkit-transform-origin: center center;
    -moz-transform: rotate(-45deg);
    -moz-transform-origin: center center;
    -transform: rotate(-45deg);
    -transform-origin: center center;
    position:relative;
    left:-100px;
    top:-50px;
}
.rotate{
    position:relative;
    left:100px;
    top:45px;
    overflow:hidden;
    width:200px;
    height:200px;
    background-color:#336699;    
    -ms-transform: rotate(45deg);
    -ms-transform-origin: center center;
    -webkit-transform: rotate(45deg);
    -webkit-transform-origin: center center;
    -o-transform: rotate(45deg);
    -o-transform-origin: center center;
    -moz-transform: rotate(45deg);
    -moz-transform-origin: center center;
    -transform: rotate(45deg);
    -transform-origin: center center;
}

.container{
    overflow:hidden;
    height:145px;
    background-color:transparent;
}
</pre></div>

And here is the HTML:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:169394bb-9611-4619-a308-e0ed1ab34857" class="wlWriterEditableSmartContent"><pre class="brush: html;"><div class="container">
	<div class="rotate">
    		<video width="416" controls autoplay >
		<source src="images/hawea_512kb.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
		<source src="images/hawea.ogv" type='video/ogg; codecs="theora, vorbis"' >
		</video>
	</div>
 </div>
</pre></div>