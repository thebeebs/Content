---
title: CSS3 border-radius in the real world
authors:
- thebeebs
intro: I was walking through the high street yesterday an...
types:
- shorts
categories:
- css3
published: 2011/01/17 12:00:00
updated: 2011/01/17 12:00:00
status: archived
---
















I was walking through the high street yesterday and noticed a poster outside of M&S that was advertising a dine in for two, £10 promotion. The way that they had used a picture as the infill for the 0 in £10 made me think about how you could achieve that effect using CSS3.

![M&S Advert](images/0257.WP_000138_1DB02C57.jpg "M&S Advert")![M&S Advert 2](images/2804.WP_000137_4BDA0244.jpg "M&S Advert 2")

So when I got home I booted up my editor and had a fiddle with the border-radius property that's supported in IE9, Chrome, Safari, FireFox and Opera.

From the picture I'd say they were using Helvetica as the font, but to keep things simple I've just used Arial.

Firstly I added the HTML I'll need which consists of some text wrapped in a span and on the right a 200px by 200px image of some food:
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:53b6ccf4-b7e1-4112-8033-cb424d67662f" class="wlWriterEditableSmartContent"><pre style=" width: 600px; height: 36px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">span</span><span style="color: #0000FF;">></span><span style="color: #000000;">&#163;1</span><span style="color: #0000FF;"></</span><span style="color: #800000;">span</span><span style="color: #0000FF;">><</span><span style="color: #800000;">img </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="food.png"</span><span style="color: #FF0000;"> style</span><span style="color: #0000FF;">="width:200px; height:200px"</span><span style="color: #FF0000;"> </span><span style="color: #0000FF;">/></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

Then I added the CSS for the page:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:775fd86a-69bb-4432-9f5e-374eebb1eff3" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 329px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #800000;"><style>
    body</span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        background-color</span><span style="color: #000000;">:</span><span style="color: #0000FF;">#000</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
         font-family</span><span style="color: #000000;">:</span><span style="color: #0000FF;">arial</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span><span style="color: #800000;">
    span
    </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        color</span><span style="color: #000000;">:</span><span style="color: #0000FF;">#fff</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        vertical-align</span><span style="color: #000000;">:</span><span style="color: #0000FF;">middle</span><span style="color: #000000;">;</span><span style="color: #FF0000;">    
        font-size</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 280px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span><span style="color: #800000;">

    img </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        border-radius</span><span style="color: #000000;">:</span><span style="color: #0000FF;">105px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        border</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 10px solid #fff</span><span style="color: #000000;">;</span><span style="color: #FF0000;">        
        vertical-align</span><span style="color: #000000;">:</span><span style="color: #0000FF;">middle</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span><span style="color: #800000;">    
</style></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

To create the round image shape I added the CSS3 attribute border-radius and set it's value to 105 which is half the size of the width + border.

I also added a 10px white border so that it looks more like the original image.

I started up the browser and IE9 displayed roughly what I was expecting. However a number of the other browser failed to correctly apply the border.

![Internet Explorer 9](images/7510.image_7F35C5A0.png "Internet Explorer 9")

&#160;

## Google Chrome 

rounded the corners but did not display the white border that I specified.

![Chrome Failed to render the border](images/2728.image_564AB097.png "Chrome Failed to render the border")

## Safari 

pulled the same trick.

![Safari failed to render the border](images/3225.image_1463CB49.png "Safari failed to render the border")

## Firefox 

Did not apply the rounded corners at all. This is because Firefox currently applies border radius with a vendor prefix.

&#160;![FireFox](images/8182.image_04748685.png "FireFox")

To fix this you simply have to add the vendor specific code to the image in CSS:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:105a336f-067e-4021-9b78-affea79c6712" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 38px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #800000;">-moz-border-radius : 105px;</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

However, Firefox still didn't apply the border as I was expecting.

![Firefox](images/4401.image_5B89717B.png "Firefox")

## Opera

The rendering in opera was similar:

![Opera](images/4807.image_2E940EA0.png "Opera")

&#160;

It seemed that only IE9 Beta was rendering border-radius correctly, so I thought I'd change approach. This time I created a DIV and set it's background-image property to the food image and rounded the corners of the DIV.

&#160;

This time all the browsers displayed the border-radius correctly, however I had now broken the vertical-alignment by using&#160; a left floated div&#160; rather than an image.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:f25dfe46-d48e-482f-8898-e0c6bd86c14a" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 428px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #800000;"><style>
    body</span><span style="color: #000000;">{</span><span style="color: #FF0000;">
    background-color</span><span style="color: #000000;">:</span><span style="color: #0000FF;">#000</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
         font-family</span><span style="color: #000000;">:</span><span style="color: #0000FF;">arial</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span><span style="color: #800000;">
    span
    </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        color</span><span style="color: #000000;">:</span><span style="color: #0000FF;">#fff</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        vertical-align</span><span style="color: #000000;">:</span><span style="color: #0000FF;">middle</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        font-size</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 280px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        float</span><span style="color: #000000;">:</span><span style="color: #0000FF;">left</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span><span style="color: #800000;">

    div </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        background-image</span><span style="color: #000000;">:</span><span style="color: #0000FF;">url("food.png")</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        border-radius</span><span style="color: #000000;">:</span><span style="color: #0000FF;">105px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        border</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 10px solid #fff</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        -moz-border-radius </span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 105px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        vertical-align</span><span style="color: #000000;">:</span><span style="color: #0000FF;">middle</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        float</span><span style="color: #000000;">:</span><span style="color: #0000FF;">left</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span><span style="color: #800000;">

</style></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:8b7b1483-7c77-43f5-a7ad-000d16fcd32b" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 49px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">span</span><span style="color: #0000FF;">></span><span style="color: #000000;">&#163;1</span><span style="color: #0000FF;"></</span><span style="color: #800000;">span</span><span style="color: #0000FF;">><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">style</span><span style="color: #0000FF;">="width:200px; height:200px"</span><span style="color: #FF0000;"> </span><span style="color: #0000FF;">/></span><span style="color: #000000;">   </span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

## IE9

![Internet Explorer 9](images/7140.image_4C921C94.png "Internet Explorer 9")

## Opera

![opera](images/3252.image_23A7078B.png "opera")

&#160;

## Safari

![Safari](images/1682.image_53EDDC41.png "Safari")

## Chrome

![Chrome](images/2350.image_600F5668.png "Chrome")

## FireFox

![FireFox](images/1108.image_2547AD92.png "Firefox")

&#160;

I guess the lesson here is: Don't use CSS3 border-radius on elements other than DIV's if you want consistent rendering across all browsers.