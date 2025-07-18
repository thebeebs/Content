---
title: jQuery 1.4.4 Released with new fadeToggle feature
authors:
- thebeebs
intro: '[![jQuery](images/0257.jQuery_thumb_29056C86.jpg "...'
types:
- shorts
categories:
- javascript
- jquery
published: 2010/11/13 12:00:00
updated: 2010/11/13 12:00:00
status: archived
---
















[![jQuery](images/0257.jQuery_thumb_29056C86.jpg "jQuery")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/8171.jQuery_7494C00A.jpg)

Last week jQuery 1.4.4 was released and I'm glad to tell you that the Microsoft CDN version of jQuery is now available at: 

[http://ajax.microsoft.com/ajax/jquery/jquery-1.4.4.min.js](images/jquery-1.4.4.min.js)&#160;

JQuery also host their own CDN at [http://code.jquery.com/jquery-1.4.4.min.js](http://code.jquery.com/jquery-1.4.4.min.js) 

At the point of writing Google haven't yet updated their CDN but when they do it's info will be [here](http://code.google.com/apis/ajaxlibs/documentation/index.html#jquery "index.html#jquery").

1.4.4 is&#160; is the fourth minor release of jQuery 1.4 and fixes a number of bug and adds a few improvements, they have also added the new fadeToggle method. All the fixes can be found [here](http://blog.jquery.com/2010/11/11/jquery-1-4-4-release-notes/) in the jQuery release notes.

# # So what is fadeToggle?

For a long time we have been able to toggleSlide and toggleClass so I guess it makes sense to add this feature to fading as well. Basically you can use it to fade in or out a elements opacity without having to check it's current visibility.

As with all jQuery effects you can disable the effect globally by using the following code: 
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:8d9c9ede-84d5-4aef-8b1f-f2c782674e21" class="wlWriterEditableSmartContent"><pre style=" width: 400px; height: 42px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #000000;">jQuery.fx.off </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #0000FF;">true</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

Under the covers this sets the duration property to 0.

# # Using fadeToggle

It's pretty simple to use. In the example below I added a reference to jQuery 1.4.4 then added a link and an Image with the ID of Teddy. In the onclick event of the link I added some jQuery to select the image object and then call the fadeToggle function.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:124c71af-47ae-468e-bd71-4c7b79f3212d" class="wlWriterEditableSmartContent"><pre style=" width: 400px; height: 260px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><!</span><span style="color: #FF00FF;">DOCTYPE html</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">head</span><span style="color: #0000FF;">></span><span style="color: #000000;">
    </span><span style="color: #0000FF;"><</span><span style="color: #800000;">title</span><span style="color: #0000FF;">></span><span style="color: #000000;">fadeToggle</span><span style="color: #0000FF;"></</span><span style="color: #800000;">title</span><span style="color: #0000FF;">></span><span style="color: #000000;">
    </span><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="http://ajax.microsoft.com/ajax/jquery/jquery-1.4.4.min.js"</span><span style="color: #FF0000;"> language</span><span style="color: #0000FF;">="javascript"</span><span style="color: #FF0000;">
        type</span><span style="color: #0000FF;">="text/javascript"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"></</span><span style="color: #800000;">head</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">body</span><span style="color: #0000FF;">></span><span style="color: #000000;">
    </span><span style="color: #0000FF;"><</span><span style="color: #800000;">a </span><span style="color: #FF0000;">href</span><span style="color: #0000FF;">="#"</span><span style="color: #FF0000;"> onclick</span><span style="color: #0000FF;">="$('#teddy').fadeToggle()"</span><span style="color: #0000FF;">></span><span style="color: #000000;">Show or Hide the teddy </span><span style="color: #0000FF;"></</span><span style="color: #800000;">a</span><span style="color: #0000FF;">></span><span style="color: #000000;">
    </span><span style="color: #0000FF;"><</span><span style="color: #800000;">br </span><span style="color: #0000FF;">/></span><span style="color: #000000;">
    </span><span style="color: #0000FF;"><</span><span style="color: #800000;">img </span><span style="color: #FF0000;">id</span><span style="color: #0000FF;">="teddy"</span><span style="color: #FF0000;"> src</span><span style="color: #0000FF;">="images/teddy.jpg"</span><span style="color: #FF0000;"> </span><span style="color: #0000FF;">/></span><span style="color: #000000;">
</span><span style="color: #0000FF;"></</span><span style="color: #800000;">body</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"></</span><span style="color: #800000;">html</span><span style="color: #0000FF;">></span><span style="color: #000000;"> </span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

<script src="http://ajax.microsoft.com/ajax/jquery/jquery-1.4.4.min.js" language="javascript" type="text/javascript"></script>

<div style="color: blue; cursor: pointer; text-decoration: underline" onclick="$(&#39;#teddy&#39;).fadeToggle()">Show or Hide the teddy</div>

![](images/teddy.jpg)