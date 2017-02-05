---
title: Media Queries and Bandwidth
authors:
- thebeebs
intro: 'I just read a [blog post](http://www.benjaminhowar...'
types:
- shorts
categories:
- web
- html5at5
published: 2012/02/29 12:00:00
updated: 2012/02/29 13:00:00
status: archived
---

I just read a [blog post](http://www.benjaminhowarth.com/blog/2012/02/29/responsive-web-design-a-response) that stated that media Queries were not a good idea because:
  > **your entire stylesheet**, with resources, images, the works - for **all** viewports - is loaded, before the @media stuff is parsed by the browser.  

This isn't entirely true. Although all of the CSS will be downloaded, background-images will not be.

Browsers are smart enough to only load the required assets. To show this I created a [very simple sample](http://lab.thebeebs.co.uk/responsive/).
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:48ce5709-4a98-4cf4-a97d-d853f56dc8f1" class="wlWriterEditableSmartContent"><pre class="brush: html;">    <style>
        div
        {
            width: 800px;
            height: 400px;
        }

        @media screen and (min-width: 0px) and (max-width: 750px)
        {
            div
            {
                width: 400px;
                height: 600px;
                background-image: url('smaller.png');
            }
        }

        @media screen and (min-width: 751px)
        {
            div
            {               
                width: 800px;
                height: 400px;
                background-image: url('big.png');
            }
        }
    </style></pre></div>

If the view port is bigger than 751px then the big image is shown. If the view port is smaller than 750 the smaller image is shown.

I then open up IE9 press F12 to open the developer tools and switch to the network tab. In the network tab I hit the button "Start Capturing" I then navigate to the page. This is what I see:

[![image](images/5684.image_thumb.png "image")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/6354.image_2.png)

You will notice that only the big.png file is loaded. As I make the window smaller than 750px the other image switches in and is loaded.

[![image](images/8877.image_thumb_1.png "image")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/6724.image_4.png)

You can read more about what is and isn't downloaded by [Media Queries in this article](http://blog.assortedgarbage.com/2010/12/css3-media-queries-download-answers/), which also covers the issue display:none not stopping images downloading. 