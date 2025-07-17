---
title: How to create a jQuery rollover like the one on Dribbble.com
authors:
- thebeebs
intro: '[![owlScrollOver](images/0652.owlScrollOver_6E08A7...'
types:
- shorts
categories:
- javascript
- jquery
published: 2010/11/14 12:00:00
updated: 2010/11/14 12:00:00
status: archived
---







[![owlScrollOver](images/0652.owlScrollOver_6E08A702.png "owlScrollOver")](http://dribbble.com/ "http://dribbble.com/")

I took a look at [http://dribbble.com/](http://dribbble.com/) last night and noticed a simple yet effective treatment that they put on their pictures. If you scroll the mouse over them you get a subtle overlay fade in over the image to give you more information.

&#160;

[Click here for a demo](http://www.thebeebs.co.uk/demos/dribbble/dribbble.htm)

&#160;

# # Step 1

First we need to add a reference to jQuery 1.4.4.
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:ff35dcb4-8459-48d2-a087-de071faf6b66" class="wlWriterEditableSmartContent"><pre style=" width: 400px; height: 68px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="http://ajax.microsoft.com/ajax/jquery/jquery-1.4.4.min.js"</span><span style="color: #FF0000;"> language</span><span style="color: #0000FF;">="javascript"</span><span style="color: #FF0000;">
        type</span><span style="color: #0000FF;">="text/javascript"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

# # Step 2

Add the HTML mark-up for the pictures. I have added a DIV with a class called poloroid (I've just realised that should have been spelt polaroid, whoops), this contains the Image, and a DIV with the class name overlay. This overlay contain 3 tags a **H2**, **H3** and a **H4** which will hold the title, information and date respectively.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:82456926-1759-49d5-a431-c6f7bc25f310" class="wlWriterEditableSmartContent"><pre style=" width: 400px; height: 344px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #000000;">    </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="poloroid"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">img </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="image"</span><span style="color: #FF0000;"> src</span><span style="color: #0000FF;">="images/ballon.png"</span><span style="color: #FF0000;"> </span><span style="color: #0000FF;">/></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="overlay"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">h2</span><span style="color: #0000FF;">></span><span style="color: #000000;">Ballon Girl</span><span style="color: #0000FF;"></</span><span style="color: #800000;">h2</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">h3</span><span style="color: #0000FF;">><</span><span style="color: #800000;">b</span><span style="color: #0000FF;">></span><span style="color: #000000;">400 x 300 </span><span style="color: #0000FF;"></</span><span style="color: #800000;">b</span><span style="color: #0000FF;">></span><span style="color: #000000;">(1200000 pixels)</span><span style="color: #0000FF;"></</span><span style="color: #800000;">h3</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">h4</span><span style="color: #0000FF;">></span><span style="color: #000000;">November 2010</span><span style="color: #0000FF;"></</span><span style="color: #800000;">h4</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
    </span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
    </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="poloroid"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">img </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="image"</span><span style="color: #FF0000;"> src</span><span style="color: #0000FF;">="images/ballon2.png"</span><span style="color: #FF0000;"> </span><span style="color: #0000FF;">/></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="overlay"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">h2</span><span style="color: #0000FF;">></span><span style="color: #000000;">Ballon Girl 2</span><span style="color: #0000FF;"></</span><span style="color: #800000;">h2</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">h3</span><span style="color: #0000FF;">><</span><span style="color: #800000;">b</span><span style="color: #0000FF;">></span><span style="color: #000000;">400 x 300 </span><span style="color: #0000FF;"></</span><span style="color: #800000;">b</span><span style="color: #0000FF;">></span><span style="color: #000000;">(1200000 pixels)</span><span style="color: #0000FF;"></</span><span style="color: #800000;">h3</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">h4</span><span style="color: #0000FF;">></span><span style="color: #000000;">November 2010</span><span style="color: #0000FF;"></</span><span style="color: #800000;">h4</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
    </span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

# # Step 3

Next up add the CSS to style the content and make it look like a polaroid. There is nothing worth mentioning here other than the fact that I gave the overlay class a z-index of 1 so that it is higher than the image.

  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:101d650a-5f97-40f4-9202-f8bfeba9d20e" class="wlWriterEditableSmartContent"><pre style=" width: 400px; height: 604px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #800000;"><style>
    .poloroid
    </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        position</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> relative</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        border</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 1px solid #E5E5E5</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        width</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 220px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        height</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 190px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        display</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> block</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        float</span><span style="color: #000000;">:</span><span style="color: #0000FF;">left</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        margin-right</span><span style="color: #000000;">:</span><span style="color: #0000FF;">10px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        background-color</span><span style="color: #000000;">:</span><span style="color: #0000FF;">#fff</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span><span style="color: #800000;">
    .image
    </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        position</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> absolute</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        top</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 10px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        left</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 10px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span><span style="color: #800000;">
    .overlay
    </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        position</span><span style="color: #000000;">:</span><span style="color: #0000FF;">absolute</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        top</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 10px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        left</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 10px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        width</span><span style="color: #000000;">:</span><span style="color: #0000FF;">200px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        height</span><span style="color: #000000;">:</span><span style="color: #0000FF;">150px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        background-color</span><span style="color: #000000;">:</span><span style="color: #0000FF;">#E5E5E5</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        z-index</span><span style="color: #000000;">:</span><span style="color: #0000FF;">1</span><span style="color: #000000;">;</span><span style="color: #FF0000;">      

    </span><span style="color: #000000;">}</span><span style="color: #800000;">
    .overlay h2
    </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        color</span><span style="color: #000000;">:</span><span style="color: #0000FF;">#ea4c88</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        font-size</span><span style="color: #000000;">:</span><span style="color: #0000FF;">16px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        font-weight</span><span style="color: #000000;">:</span><span style="color: #0000FF;">bold</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        font-family</span><span style="color: #000000;">:</span><span style="color: #0000FF;">Arial</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        margin</span><span style="color: #000000;">:</span><span style="color: #0000FF;">0px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        margin-left</span><span style="color: #000000;">:</span><span style="color: #0000FF;">10px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        margin-top</span><span style="color: #000000;">:</span><span style="color: #0000FF;">10px</span><span style="color: #000000;">;</span><span style="color: #FF0000;"> 
        margin-bottom</span><span style="color: #000000;">:</span><span style="color: #0000FF;">5px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">       
        line-height</span><span style="color: #000000;">:</span><span style="color: #0000FF;">17px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span><span style="color: #800000;">
    .overlay h3
    </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        color</span><span style="color: #000000;">:</span><span style="color: #0000FF;">#898989</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        font-size</span><span style="color: #000000;">:</span><span style="color: #0000FF;">10px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        font-family</span><span style="color: #000000;">:</span><span style="color: #0000FF;">Arial</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        margin</span><span style="color: #000000;">:</span><span style="color: #0000FF;">0px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        margin-left</span><span style="color: #000000;">:</span><span style="color: #0000FF;">10px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span><span style="color: #800000;">
    .overlay h4
    </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        position</span><span style="color: #000000;">:</span><span style="color: #0000FF;">absolute</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        bottom</span><span style="color: #000000;">:</span><span style="color: #0000FF;">10px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        color</span><span style="color: #000000;">:</span><span style="color: #0000FF;">#898989</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        font-size</span><span style="color: #000000;">:</span><span style="color: #0000FF;">10px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        font-family</span><span style="color: #000000;">:</span><span style="color: #0000FF;">Arial</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        margin</span><span style="color: #000000;">:</span><span style="color: #0000FF;">0px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        margin-left</span><span style="color: #000000;">:</span><span style="color: #0000FF;">10px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span><span style="color: #800000;">
</style></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

# # Step 4

Firstly add a&#160; jQuery ready function that will fire when the document is ready, this should call the **setUp** function.

&#160;

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:21bbb486-8080-409e-90c9-5e8395a4a820" class="wlWriterEditableSmartContent"><pre style=" width: 400px; height: 83px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #000000;">$(document).ready(</span><span style="color: #0000FF;">function</span><span style="color: #000000;"> () {
    setUp();
});        
</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

# # Step 5

Add the setup function, the first line of this function hides all of the objects with an overlay class. If for some reason JavaScript isn't working then the overlay will be visible over the image by default so the website will still be operational.

Next add a **mouseenter** event to all objects with the image class. We use an anonymous function which will be fired when&#160; the mouse enters the boundary of the image object. The **mouseenter** function passes over a parameter named **e**. If you check **e.srcElement** it will provide a reference to the the image object that fired the event. This is useful as we can now find the overlay object that relates to that image specifically. We do this by referencing the parent object by calling **.parent()** (which should be the DIV with the polaroid class) and then using the **.find()** method on that element to find the the child object with the **.overlay** class.

Next add a **mouseleave** event to the **.overlay** object. This will be called when the mouse leaves the boundary of the overlay object. We use the same parent trick on this element to find the overlay object (this might seem incorrect as we should have a reference to the overlay object from the e.srcElement. However, I found this buggy and this approach worked much more reliably) 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:8bac2f64-625d-474b-969b-f69be74d0e5e" class="wlWriterEditableSmartContent"><pre style=" width: 400px; height: 265px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;">function</span><span style="color: #000000;"> setUp() 
{
    $(</span><span style="color: #000000;">'</span><span style="color: #000000;">.overlay</span><span style="color: #000000;">'</span><span style="color: #000000;">).hide();

    $(</span><span style="color: #000000;">'</span><span style="color: #000000;">.image</span><span style="color: #000000;">'</span><span style="color: #000000;">).mouseenter(</span><span style="color: #0000FF;">function</span><span style="color: #000000;"> (e) {
        $(e.srcElement).parent().find(</span><span style="color: #000000;">'</span><span style="color: #000000;">.overlay</span><span style="color: #000000;">'</span><span style="color: #000000;">).fadeTo(</span><span style="color: #000000;">300</span><span style="color: #000000;">, </span><span style="color: #000000;">0.95</span><span style="color: #000000;">);
    });

    $(</span><span style="color: #000000;">'</span><span style="color: #000000;">.overlay</span><span style="color: #000000;">'</span><span style="color: #000000;">).mouseleave(</span><span style="color: #0000FF;">function</span><span style="color: #000000;"> (e) {
        $(e.srcElement).parent().find(</span><span style="color: #000000;">'</span><span style="color: #000000;">.overlay</span><span style="color: #000000;">'</span><span style="color: #000000;">).fadeOut();
    });
}</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

In a nut shell that's it.