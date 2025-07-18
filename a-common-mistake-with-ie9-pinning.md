---
title: A Common mistake with IE9 Pinning
authors:
- thebeebs
intro: After my [last blog](http://blogs.msdn.com/b/thebe...
types:
- shorts
categories:
- ie9-beta
published: 2010/09/18 12:00:00
updated: 2010/09/18 12:00:00
status: archived
---
















After my [last blog](http://blogs.msdn.com/b/thebeebs/archive/2010/09/16/how-to-add-ie9-beta-pinning-to-you-website.aspx "my last blog post") on IE9 pinning a number of people contacted me to tell me that they couldn't get pinning to work. I asked a few people to send me code and kindly they did. What I noticed was a small transcoding error that people had made when copying the code from the image that I had posted. This error will stop the task items appearing on the Jump List menu.

The most common mistake was to put **icon** rather than **icon-uri** in the **content** attribute**.** This small error will stop the whole task appearing, not just the icon.

The below is wrong:

   <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:25bfd42c-1ba9-4411-8a8f-19f91e631b56" class="wlWriterEditableSmartContent"><pre style=" width: 506px; height: 40px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">meta </span><span style="color: #FF0000;">name</span><span style="color: #0000FF;">="msapplication-task"</span><span style="color: #FF0000;"> content</span><span style="color: #0000FF;">="name=Twitter;action-uri=https://twitter.com/thebeebs;icon=https://twitter.com/favicon.ico"</span><span style="color: #FF0000;"> </span><span style="color: #0000FF;">/></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

This one is right

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:4077ae54-e150-4196-aafb-f7ce67cfd8dc" class="wlWriterEditableSmartContent"><pre style=" width: 506px; height: 40px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">meta </span><span style="color: #FF0000;">name</span><span style="color: #0000FF;">="msapplication-task"</span><span style="color: #FF0000;"> content</span><span style="color: #0000FF;">="name=Twitter;action-uri=https://twitter.com/thebeebs;icon-uri=https://twitter.com/favicon.ico"</span><span style="color: #FF0000;"> </span><span style="color: #0000FF;">/></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

I haven't tried but I suspect that getting the **name** or **action-uri** incorrect would also stop the task appearing.

I hope this helps anyone that's having trouble with getting this working.