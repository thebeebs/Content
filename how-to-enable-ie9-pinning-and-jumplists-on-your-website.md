---
title: How to enable IE9 pinning and JumpLists on your website
authors:
- thebeebs
intro: Enabling pinning on Jumplists
types:
- shorts
categories:
- ie9-beta
published: 2010/09/15 12:00:00
updated: 2010/09/15 12:00:00
status: archived
---
















[![image](images/6457.image_thumb_69150AAC.png "image")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/4861.image_6084D7ED.png) 

Wow the [Internet Explorer 9 beta](http://bit.ly/dAVoR8) launch was a whirlwind, I knew that we were working with the [Gorillaz](http://bit.ly/agEavO) and the [BBC](http://www.beautyoftheweb.co.uk/topgear/) but I had no idea about [Facebook](http://www.beautyoftheweb.com/#/experience/facebook), [the killers](http://www.beautyoftheweb.com/#/experience/killers), [LinkedIn](http://www.beautyoftheweb.com/#/experience/linkedin), [twitter](http://www.beautyoftheweb.com/#/experience/twitter), [MySpace](http://www.beautyoftheweb.com/#/experience/myspace) or any of the other [launch partners](http://www.beautyoftheweb.com/#/experience).

The Gorillaz partnership has resulted in a [web experience](http://bit.ly/bdeGeN) that highlights a number of IE9 and HTML5 features and it was great to be involved in the project and watch the Gorilaz team put the site together. I didn't have a great deal of input but I like to think that it was my presence at one of the meetings that inspired the little Joke about Evangelists at 6:05 seconds into the [demo video](http://bit.ly/agEavO).

During the next 5 days I'm going to write blogs on Pinning and JumpLists, HTML5 Canvas, IE9 peek with button support and HTML5 video, inspired by the work that the Gorillaz have done.

First things first though, I'm going to show you how you can add pinning and JumpLists to your blog or website just like the Gorillaz have. 

[![image](images/7450.image_thumb_4396995D.png "image")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/1106.image_3D133F9A.png) 

I managed to add JumpLists and pinning to my blog [thewayithink.co.uk](http://www.thewayithink.co.uk) and I've detailed below how I did it.

**Enabling Pinning**

To enable pinning you don't need to do anything. Anyone can use IE9 to pin your website to their task bar. All they do is drag the favicon from the browser address bar onto the taskbar. However, the default experience can be improved by making a few simple changes to your site.

**Create a High Definition Favicon**

Standard favicon files are usually 32x32 or 16x16 pixels in size. These look great in the browser but when you pin it to the taskbar it can be a little small and pixilated. 

To give the best pinning experience you should use a 64x64 favicon. I used [http://www.favicon.co.uk/](http://www.favicon.co.uk/) to create a 64 x 64 icon file and then uploaded it to my site.

You then need to make sure you are using the new favicon by checking the&#160; <link rel="Shortcut Icon"> tag is pointing at the new 64x64 fav.ico file, an example of the tag you should look for is below:
  <pre class="csharpcode">[![image](images/8105.image_thumb_1619D1AE.png "image")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/5875.image_3E98B3C2.png) </pre>

Favicons are often cached so you might need to clear out your browser cache, however, once the icon is correctly linked you will now see a better looking icon when you drag the icon from the address bar onto the taskbar.

[![image](images/8117.image_thumb_51A9BAA1.png "image")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/2766.image_5F5C76A9.png) [![image](images/5811.image_thumb_4C2B2430.png "image")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/6557.image_414E42E8.png) 

**JumpLists**

In windows 7 a JumpList is a list of actions that are displayed when you right click an Icon on your taskbar. These JumpLists have been available to native application developers for a long time but IE9 beta is the first browser that exposes them for use by web developers.

Now if we want to add Jump list commands we need to add a few meta Tags:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:2cb7936b-d956-4e6b-898d-4d3bf181641e" class="wlWriterEditableSmartContent"><pre style=" width: 554px; height: 111px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">meta </span><span style="color: #FF0000;">name</span><span style="color: #0000FF;">="application-name"</span><span style="color: #FF0000;"> content</span><span style="color: #0000FF;">="Martin Beeby's Blog"</span><span style="color: #FF0000;"> </span><span style="color: #0000FF;">/></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">meta </span><span style="color: #FF0000;">name</span><span style="color: #0000FF;">="msapplication-task"</span><span style="color: #FF0000;"> content</span><span style="color: #0000FF;">="name=Archive;action-uri=http://www.thewayithink.co.uk/archive.aspx;icon-uri=http://www.thewayithink.co.uk//themes/arthemia/images/favicon.ico"</span><span style="color: #FF0000;"> </span><span style="color: #0000FF;">/></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">meta </span><span style="color: #FF0000;">name</span><span style="color: #0000FF;">="msapplication-task"</span><span style="color: #FF0000;"> content</span><span style="color: #0000FF;">="name=LinkedIn;action-uri=http://www.linkedin.com/in/thebeebs;icon-uri=http://www.linkedin.com/favicon.ico"</span><span style="color: #FF0000;"> </span><span style="color: #0000FF;">/></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">meta </span><span style="color: #FF0000;">name</span><span style="color: #0000FF;">="msapplication-task"</span><span style="color: #FF0000;"> content</span><span style="color: #0000FF;">="name=Twitter;action-uri=https://twitter.com/thebeebs;icon-uri=https://twitter.com/favicon.ico"</span><span style="color: #FF0000;"> </span><span style="color: #0000FF;">/></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">meta </span><span style="color: #FF0000;">name</span><span style="color: #0000FF;">="msapplication-task"</span><span style="color: #FF0000;"> content</span><span style="color: #0000FF;">="name=MSDN Blog;action-uri=http://blogs.msdn.com/b/thebeebs/;icon-uri=http://www.thewayithink.co.uk//themes/arthemia/images/favicon.ico"</span><span style="color: #FF0000;"> </span><span style="color: #0000FF;">/></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

The first meta tag has 2 attributes, **name** and **content**. The **name** attribute should have the value** "application-name" **the content attribute should contain the name of the website as you want it to appear on the JumpList.

For each task you would like on the JumpList you need to add a meta tag. I have added 3 tasks: Archive, LinkedIn and Twitter.

Each meta tag will need 2 attributes. The **name** attribute and the **content** attribute. 

The name attribute needs to contain the value "**msapplication-task**".

In the content attribute you need to add a string value in the following format: "name={NAMEVALUEHERE};action-uri={ACTIONURLVALUE};icon-uri={ICONURLVALUE}"

Below is a list of the three values that the content string will need to contain:

*   name&#160; - Which is the name of the link that will be shown on the JumpList
*   action-uri - Is the url that the user will be sent to when they click on the JumpLIst task
*   icon-url - Is a link to a fav icon that will appear on the left hand side of the JumpList Name.

Once you create your meta tags and put them in between the <head></head> tags in your document you have successfully implemented JumpLists.

You can test it by dragging the Icon from the address bar to the taskbar and then right clicking the Icon. A JumpList should appear that will look something like this:

[![clip_image001](images/2768.clip_image001_thumb_12786479.png "clip_image001")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/4747.clip_image001_3BCFAC77.png)

&#160;

That's it... add pinning and JumpLists to your site with just a few lines of HTML. If you have [Internet Explorer 9 beta](http://bit.ly/dAVoR8) you can test out the pinning and JumpList feature at my website [http://www.thewayithink.co.uk](http://www.thewayithink.co.uk), [http://gorillaz.com](http://gorillaz.com) or even [http://www.facebook.com](http://www.facebook.com)