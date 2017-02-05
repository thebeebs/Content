---
title: How to Rotate a video using CSS3
authors:
- thebeebs
intro: 'Earlier I showed you how to [rotate a video using ...'
types:
- shorts
categories:
- css3
published: 2010/11/08 12:00:00
updated: 2010/11/08 13:00:00
status: archived
---

Earlier I showed you how to [rotate a video using HTML5](http://blogs.msdn.com/b/thebeebs/archive/2010/11/08/how-to-rotate-html5-video.aspx). It is a little complicated so luckily you can achieve the same effect using a CSS3 2d transform.

You will be able to see the effect in IE9 Platform Preview (but not the beta), chrome, safari and firefox.

[You can see a demo here](http://www.thewayithink.co.uk/html5/rotate.html).

&nbsp;

## Step 1

Add the style tag to the head section of your browser. You will need to add the proprietary syntax for each of the browser vendors.

You can find out more about the [transform](http://www.w3.org/TR/css3-2d-transforms/#effects) and [transform-origin](http://www.w3.org/TR/css3-2d-transforms/#transform-origin) property over at W3C

&nbsp;

<div class="wlWriterEditableSmartContent" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:521d7f76-0663-4e6c-a610-0bc9ec83553d" style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px">
<pre style="width: 400px; height: 235px; background-color: white; overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #800000;"><style>
    #mVideo
    </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        -webkit-transform</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> rotate(5deg)</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        -moz-transform</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> rotate(5deg)</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        -ms-transform</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> rotate(5deg)</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        -webkit-transform-origin</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> bottom left</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        -moz-transform-origin</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> bottom left</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        -ms-transform-origin</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> bottom left</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span><span style="color: #800000;">
</style></span></!--

code></div></pre>
<!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

&nbsp;

&nbsp;

## Step 2

Add the video element making sure to use the same id as we declared in the CSS which was #mVideo.

&nbsp;

<div class="wlWriterEditableSmartContent" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:aab7882c-3661-48d2-ac84-1f3666f62963" style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px">
<pre style="width: 400px; height: 128px; background-color: white; overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">video </span><span style="color: #FF0000;">autobuffer</span><span style="color: #0000FF;">="true"</span><span style="color: #FF0000;"> id</span><span style="color: #0000FF;">="mVideo"</span><span style="color: #FF0000;"> width</span><span style="color: #0000FF;">="640"</span><span style="color: #FF0000;"> height</span><span style="color: #0000FF;">="360"</span><span style="color: #FF0000;"> controls</span><span style="color: #0000FF;">="controls"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
    </span><span style="color: #0000FF;"><</span><span style="color: #800000;">source </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="http://www.thewayithink.co.uk/html5/yoyo.ogv"</span><span style="color: #FF0000;"> type</span><span style="color: #0000FF;">="video/ogg"</span><span style="color: #FF0000;"> </span><span style="color: #0000FF;">/></span><span style="color: #000000;">
    </span><span style="color: #0000FF;"><</span><span style="color: #800000;">source </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="http://www.thewayithink.co.uk/html5/yoyo.mp4"</span><span style="color: #FF0000;"> type</span><span style="color: #0000FF;">="video/mp4"</span><span style="color: #FF0000;"> </span><span style="color: #0000FF;">/></span><span style="color: #000000;">
    This is fallback text to display if the browser does not support the video element.
</span><span style="color: #0000FF;"></</span><span style="color: #800000;">video</span><span style="color: #0000FF;">></span></!--

code></div></pre>
<!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

&nbsp;