---
title: Fonts on the web, typekit, and now CSS3
authors:
- thebeebs
intro: '[![TypeKit](images/1323.fonts_thumb_26D84113.png "...'
types:
- shorts
categories:
- css
published: 2010/11/13 12:00:00
updated: 2010/11/13 13:00:00
status: archived
---

[![TypeKit](images/1323.fonts_thumb_26D84113.png "TypeKit")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/3718.fonts_557E6FC2.png)A common request from clients is to use their corporate font on their website, sadly the font isn't a [websafe](http://en.wikipedia.org/wiki/Web-safe_fonts) one so inevitably you have to use an image for the headings and revert to a safe font for body content.

However, there has been a solution for a long time to this issue. By using @font-face in CSS developers have been able to embed fonts into their websites since Internet Explorer 5. The problem with this approach is that the fonts you can embed are few and far between because of licencing issues. 

That's where companies Like [TypeKit](http://typekit.com/) come in. They provide a service that hosts fonts they have licenced so to use any of their fonts in your website all you need to do is added one line of JavaScript.

The future looks allot brighter, with CSS most modern browsers now support WOFF which means you will be able to use any font as long as it's in WOFF. I used WOFF in this simple project [http://www.thewayithink.co.uk/canvas/](http://www.thewayithink.co.uk/canvas/ "http://www.thewayithink.co.uk/canvas/") basically all you need to do is add a little CSS magic:
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:bd8d638a-5c3d-49fe-91d2-6b87af0a0795" class="wlWriterEditableSmartContent"><pre style=" width: 400px; height: 108px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #800000;">@font-face </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
        font-family</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> HomeSweetHome</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
        src</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> url('Fonts/homeswee-webfont.woff')</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
    </span><span style="color: #000000;">}</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

You can then use the font in your style sheet like this:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:bc5190db-07a6-4adf-badb-0efa90d9db2a" class="wlWriterEditableSmartContent"><pre style=" width: 400px; height: 104px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #800000;">#result 
</span><span style="color: #000000;">{</span><span style="color: #FF0000;">
 font</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 35pt HomeSweetHome, sans-serif</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
</span><span style="color: #000000;">}</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>