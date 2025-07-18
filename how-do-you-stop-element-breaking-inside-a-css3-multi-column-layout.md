---
title: How do you stop element breaking inside a CSS3 multi column layout
authors:
- thebeebs
intro: I came across a rather annoying feature today when...
types:
- shorts
categories:
- article
- web
- html5at5
published: 2013/02/28 12:00:00
updated: 2013/02/28 12:00:00
status: archived
---
















I came across a rather annoying feature today when I was trying to create a layout with [CSS3 multi column](http://www.w3.org/TR/css3-multicol/). I wanted to stack some divs on top of each other in columns.

My first attempt lead to this, which was not what I wanted:

![Shows a CSS test](images/1663.image_15665A6A.png "First Attempt")

I wanted the tile's to break to the next column&#160; if they didn't fit into the column in their entirety. It took me a while to find out what I need to do was add the following code to each div:
  <div id="scid:812469c5-0cb0-4c63-8c15-c81123a09de7:271f4aed-0637-4365-9592-7096c1d817b1" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px"><pre name="code" class="js">break-inside:avoid;</pre></div>

This tell the browser to avoid breaking an element in half or as the spec puts it:&#160; "Avoid a page/column break before inside the generated box."

![My CSS layout experiment, this one now works.](images/3223.image_6D53AB4A.png "Second Attempt")

Code can be found here: [http://jsfiddle.net/zR2FY/](http://jsfiddle.net/zR2FY/ "http://jsfiddle.net/zR2FY/")

**Please Note: All the code is standards based (i.e. Doesn't include any vendor prefixes) At the time of writing only IE10 and Opera 12 support this unprefixed syntax, if you are using Chrome then they use a slightly different syntax and -webkit- prefixes.**