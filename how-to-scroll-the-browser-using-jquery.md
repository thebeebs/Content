---
title: How to scroll the browser using JQuery
authors:
- thebeebs
intro: I was looking at the website [http://forrst.com/](...
types:
- shorts
categories:
- javascript
published: 2010/11/03 12:00:00
updated: 2010/11/03 12:00:00
status: archived
---
















I was looking at the website [http://forrst.com/](http://forrst.com/ "http://forrst.com/") and loved the way that they hide the registration screen just below the fold of the front page. When you click on the apply now button the screen scrolls.

I quickly whipped up the following guide to show how easy it is to implement. You can see the demo in action here [http://bit.ly/cRKnm4](http://bit.ly/cRKnm4 "http://bit.ly/cRKnm4")

&#160;

# # Step 1

Add the JQuery Library to your webpage. In the demo I have used the Microsoft Hosted version of the Library, you just need to add the following code to the head section of your website:
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:ad1dc3eb-a921-4e6c-9c8a-9fe2e05cf8c4" class="wlWriterEditableSmartContent"><pre style=" width: 478px; height: 39px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="http://ajax.microsoft.com/ajax/jquery/jquery-1.4.2.min.js"</span><span style="color: #FF0000;"> language</span><span style="color: #0000FF;">="javascript"</span><span style="color: #FF0000;"> type</span><span style="color: #0000FF;">="text/javascript"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

# # Step 2

Add the page HTML.

I added two **DIV** layers to my page and gave them the ID mainContent and regSection. In the Main content **DIV** I have added an **A** tag that has an **onClick** event called scrollScreen, scrollScreen has one argument; the object that is making the request.

The **A** tag should have a **HREF** attribute which contain the **ID** of the registration element preceded by the **#** symbol. This will be used later to figure out where the registration **DIV** is on the page and&#160; then scroll the browser to that point.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:923d4546-5546-4b4c-9c6f-74a1e4ce4752" class="wlWriterEditableSmartContent"><pre style=" width: 485px; height: 92px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">id</span><span style="color: #0000FF;">="mainContent"</span><span style="color: #0000FF;">></span><span style="color: #000000;">Content Section</span><span style="color: #FF0000;">&nbsp;</span><span style="color: #000000;"> - 
    </span><span style="color: #0000FF;"><</span><span style="color: #800000;">a </span><span style="color: #FF0000;">href</span><span style="color: #0000FF;">="#regSection"</span><span style="color: #FF0000;"> onclick</span><span style="color: #0000FF;">="scrollScreen(this)"</span><span style="color: #0000FF;">></span><span style="color: #000000;">Click Me to Scroll the Page</span><span style="color: #0000FF;"></</span><span style="color: #800000;">a</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">id</span><span style="color: #0000FF;">="regSection"</span><span style="color: #0000FF;">></span><span style="color: #000000;">Registration Section</span><span style="color: #FF0000;">&nbsp;</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

&#160;

# # Step 3

Add some CSS to style your page. In my example I used really simple colours to illustrate the different sections of the webpage.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:e9f985a0-eeae-4967-a16b-5c2c1ca0b01a" class="wlWriterEditableSmartContent"><pre style=" width: 426px; height: 547px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #800000;"><style>
    body, a
    </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        color</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> #fff</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        font-size</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 20pt</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        font-family</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> Arial</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        margin</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 0px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        padding</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 0px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span><span style="color: #800000;">
    #mainContent
    </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        position</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> relative</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        display</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> block</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        width</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 100%</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        height</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 1000px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        background-color</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> #336699</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span><span style="color: #800000;">
    #regSection
    </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        position</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> relative</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        display</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> block</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        width</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 100%</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        height</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 1000px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        background-color</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> #FFF000</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        color</span><span style="color: #000000;">:</span><span style="color: #0000FF;">000</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span><span style="color: #800000;">
</style></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

&#160;

# # Step 4

When the user click the link they will fire the scrollScreen event so it is probably a good idea to add the function to the page.

The scrollScreen event takes the element that was passed to it and looks at it **HREF** attribute.

This attribute is then used to determine the target position or in other words the position of the registration section.

Then with a little JQuery animation magic we scroll the browser to the target position.

  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:a3a558e9-b564-425b-812a-d2ae570ea0f7" class="wlWriterEditableSmartContent"><pre style=" width: 444px; height: 279px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #000000;"><</span><span style="color: #000000;">script</span><span style="color: #000000;">></span><span style="color: #000000;">
    </span><span style="color: #0000FF;">function</span><span style="color: #000000;"> scrollScreen(element) {
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> It neater if we get the target from the href of the link</span><span style="color: #008000;">
</span><span style="color: #000000;">        </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> targetHref </span><span style="color: #000000;">=</span><span style="color: #000000;"> $(element).attr(</span><span style="color: #000000;">"</span><span style="color: #000000;">href</span><span style="color: #000000;">"</span><span style="color: #000000;">);
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> The location of the target div layer in relation to the browser window</span><span style="color: #008000;">
</span><span style="color: #000000;">        </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> targetPostion </span><span style="color: #000000;">=</span><span style="color: #000000;"> $(targetHref).offset().top;
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> The speed of the animation in millisenconds</span><span style="color: #008000;">
</span><span style="color: #000000;">        </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> speed </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #000000;">250</span><span style="color: #000000;">;
        </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> selector </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #000000;">"</span><span style="color: #000000;">html:not(:animated),body:not(:animated)</span><span style="color: #000000;">"</span><span style="color: #000000;">; 
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> We then use the animation function to scroll the main window</span><span style="color: #008000;">
</span><span style="color: #000000;">        $(selector).animate({ scrollTop: targetPostion }, speed);                
    }        
</span><span style="color: #000000;"><</span><span style="color: #000000;">/</span><span style="color: #000000;">script></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

&#160;

That's it. It really couldn't be any easier.