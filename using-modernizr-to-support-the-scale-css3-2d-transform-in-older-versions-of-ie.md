---
title: Using Modernizr to support the Scale CSS3 2d transform in older versions of IE
authors:
- thebeebs
intro: 'As of Platform preview 6, IE9 has support for CSS3...'
types:
- shorts
categories:
- css3
- ie9-beta
- jquery
published: 2010/12/07 12:00:00
updated: 2010/12/07 13:00:00
status: archived
---

As of Platform preview 6, IE9 has support for CSS3 2d transforms. The final version of IE9 will support CSS3 2d transforms.

However, the IE9 beta doesn&rsquo;t support CSS3 2d Transforms.

In the following demo I'll show you how to support the scale feature of CSS3 2d transforms using feature detection and progressive enhancement. 

&nbsp;[The finished demo can be found here](http://www.thebeebs.co.uk/demos/transforms)

To test if the browser is capable of supporting CSS3 2d Transforms I&rsquo;m going to use [Modernizr](http://www.modernizr.com/), Modernizr is a JavaScript Library that makes it easy to test if a browser supports a particular feature or not.

&nbsp;

## Step 1 &ndash; Setup Modernizr

To set up Modenizr download the script from [their website](http://www.modernizr.com/) and then add the following script reference to the page:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:a2851645-fc4d-4cba-8fce-f859fa914293" class="wlWriterEditableSmartContent">
<pre style="width: 500px; height: 58px; background-color: white; overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="Scripts/modernizr-1.6.min.js"</span><span style="color: #FF0000;"> type</span><span style="color: #0000FF;">="text/javascript"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span></!--

code></div></pre>
<!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

You then need to add the following class to the HTML element of the page:

&nbsp;

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:f0993198-9cf8-4ac5-90ed-242ec6310943" class="wlWriterEditableSmartContent">
<pre style="width: 341px; height: 39px; background-color: white; overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">html </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="no-js"</span><span style="color: #0000FF;">></span></!--

code></div></pre>
<!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

## Step 2 &ndash; Setup jQuery

To make things easy I&rsquo;m also going to add a reference to JQuery:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:12bfc867-45f8-48a0-ad1a-c32a0d5b2b84" class="wlWriterEditableSmartContent">
<pre style="width: 500px; height: 39px; background-color: white; overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="http://ajax.microsoft.com/ajax/jquery/jquery-1.4.4.min.js"</span><span style="color: #FF0000;"> type</span><span style="color: #0000FF;">="text/javascript"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span></!--

code></div></pre>
<!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

&nbsp;

## Step 3 &ndash; Test for CSS Transforms

When the document loads I'm going to test if the browser supports csstransforms. If it does I'm going to use jQuery to Apply a CSS Class that uses transforms. If the browser doesn't support Transforms I&rsquo;m going to attempt to use Filters by calling the function&nbsp; **resizeUsingFilters **(Bear in mind this will only work with IE 6/7/8/9 Beta. It won&rsquo;t work with other browsers that don&rsquo;t support CSS3 transforms&hellip; If you have a fix for other browsers you could apply it here too, testing before you apply a fix would be a good idea here, but for simplicity I have not added it to this demo).

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:f93c3ff0-b560-434e-bae5-d714148b163b" class="wlWriterEditableSmartContent">
<pre style="width: 500px; height: 265px; background-color: white; overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #000000;">$(document).ready(</span><span style="color: #0000FF;">function</span><span style="color: #000000;"> () {

    </span><span style="color: #0000FF;">if</span><span style="color: #000000;"> (Modernizr.csstransforms) {
        </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> obj </span><span style="color: #000000;">=</span><span style="color: #000000;"> $(</span><span style="color: #000000;">"</span><span style="color: #000000;">#sizedBox</span><span style="color: #000000;">"</span><span style="color: #000000;">).addClass(</span><span style="color: #000000;">"</span><span style="color: #000000;">sizedBox</span><span style="color: #000000;">"</span><span style="color: #000000;">);
        $(</span><span style="color: #000000;">"</span><span style="color: #000000;">#whoDoneIt</span><span style="color: #000000;">"</span><span style="color: #000000;">).html(</span><span style="color: #000000;">"</span><span style="color: #000000;">CSS3 Did this automagically using transforms</span><span style="color: #000000;">"</span><span style="color: #000000;">);

    }
    </span><span style="color: #0000FF;">else</span><span style="color: #000000;"> {
        </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> obj </span><span style="color: #000000;">=</span><span style="color: #000000;"> $(</span><span style="color: #000000;">"</span><span style="color: #000000;">#sizedBox</span><span style="color: #000000;">"</span><span style="color: #000000;">).get(</span><span style="color: #000000;">0</span><span style="color: #000000;">);
        resizeUsingFilters(obj, </span><span style="color: #000000;">0.5</span><span style="color: #000000;">);
        $(</span><span style="color: #000000;">"</span><span style="color: #000000;">#whoDoneIt</span><span style="color: #000000;">"</span><span style="color: #000000;">).html(</span><span style="color: #000000;">"</span><span style="color: #000000;">JavaScript did this because this browser dosen't support CSS3</span><span style="color: #000000;">"</span><span style="color: #000000;">);
    }
});</span></!--

code></div></pre>
<!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

&nbsp;

## Step 4 &ndash; Add Function to resize using Filters

This little function uses the proprietary MS filters which is supported by IE6, 7, 8, and IE9Beta

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:8a77db3f-2301-49a4-8e69-169498ac2feb" class="wlWriterEditableSmartContent">
<pre style="width: 500px; height: 201px; background-color: white; overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;">function</span><span style="color: #000000;"> resizeUsingFilters(obj, flMultiplier) {
    </span><span style="color: #008000;">//</span><span style="color: #008000;"> If you don't do this at least once then you will get an error</span><span style="color: #008000;">
</span><span style="color: #000000;">    obj.style.filter </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #000000;">"</span><span style="color: #000000;">progid:DXImageTransform.Microsoft.Matrix(M11='1.0', sizingmethod='auto expand')</span><span style="color: #000000;">"</span><span style="color: #000000;">;
    </span><span style="color: #008000;">//</span><span style="color: #008000;"> Resize</span><span style="color: #008000;">
</span><span style="color: #000000;">    obj.filters.item(</span><span style="color: #000000;">0</span><span style="color: #000000;">).M11 </span><span style="color: #000000;">*=</span><span style="color: #000000;"> flMultiplier;
    obj.filters.item(</span><span style="color: #000000;">0</span><span style="color: #000000;">).M12 </span><span style="color: #000000;">*=</span><span style="color: #000000;"> flMultiplier;
    obj.filters.item(</span><span style="color: #000000;">0</span><span style="color: #000000;">).M21 </span><span style="color: #000000;">*=</span><span style="color: #000000;"> flMultiplier;
    obj.filters.item(</span><span style="color: #000000;">0</span><span style="color: #000000;">).M22 </span><span style="color: #000000;">*=</span><span style="color: #000000;"> flMultiplier;
}    </span></!--

code></div></pre>
<!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

&nbsp;

## Step 5 &ndash; Add CSS Class to do CSS transform

In step 2 we applied a CSS class to the box&hellip; You want to make sure this is added to the style sheet.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:10127f8a-0d3b-4023-9272-c4711f4a69eb" class="wlWriterEditableSmartContent">
<pre style="width: 500px; height: 351px; background-color: white; overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #800000;">.sizedBox
</span><span style="color: #000000;">{</span><span style="color: #FF0000;">
    -ms-transform</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> scale(0.5)</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    -webkit-transform</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> scale(0.5)</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    -moz-transform</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> scale(0.5)</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    -o-transform</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> scale(0.5)</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    -ms-transform-origin</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> top left</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    -moz-transform-origin</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> top left</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    -webkit-transform-origin</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> top left</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    -o-transform-origin</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> top left</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    width</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 500px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    height</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 500px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    background-color</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> #000</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    padding</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 10px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    margin-right</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 10px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    float</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> left</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    position</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> relative</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
</span><span style="color: #000000;">}</span></!--

code></div></pre>
<!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

## Step 5 &ndash; Add the HTML

I&rsquo;ve just used to simple boxes to illustrate that the scaling is working

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:374a80e8-9ae1-488b-877d-96ef86b796ec" class="wlWriterEditableSmartContent">
<pre style="width: 500px; height: 166px; background-color: white; overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">id</span><span style="color: #0000FF;">="sizedBox"</span><span style="color: #FF0000;"> class</span><span style="color: #0000FF;">="basicBox"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
    I should be half the size of the box on the right.
    </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">id</span><span style="color: #0000FF;">="whoDoneIt"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        Something went wrong, probably Modernizr failed to load the object in time.</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="box"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
    The Box on the right should be half the size of me.
</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span></!--

code></div></pre>
<!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>