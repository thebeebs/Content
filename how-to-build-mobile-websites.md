---
title: How to build Mobile websites
authors:
- thebeebs
intro: With the explosion of [devices that access website...
types:
- shorts
categories:
- web
- html5at5
published: 2012/01/26 12:00:00
updated: 2012/01/26 12:00:00
status: archived
---







With the explosion of [devices that access websites](http://blogs.msdn.com/b/thebeebs/archive/2012/01/18/so-many-devices-so-little-time.aspx), it's becoming more important that your website works well on mobile devices. I found the process of learning how to create websites that worked on mobile devices confusing so I created the list below to help anyone that is new to this field of web development. As always if you have any good links to tutorials on any of the 5 topics below please comment and I'll update the post accordingly. 

# # The Viewport Meta Tag 

By using the viewport tag you can tell some mobile browsers how to scale and zoom your website. You can often improve the default reading experience of your website just by adding the following meta tag:
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:800ca68a-8487-4c47-851a-07e77bb1f92b" class="class">   <pre class="brush: html;"><meta name="viewport" content="width=device-width, initial-scale=1"></pre>
</div>

This article from Gil Think [explains the Tag](http://www.codeproject.com/Articles/230556/Using-The-Viewport-Meta-Tag) in a very straight forward way. 

# # Media Queries

Media Queries allow you to serve different CSS rules depending on the way your site is being viewed. For example if your site is being viewed on a mobile phone you can write CSS specifically for a screen with a 320px screen width. 

The great thing about Media Queries is that you can tailor your main site to look great across various screen resolutions and widths. This article from my [counter part in Belgium](https://twitter.com/katriendg) does a good job of explaining [Media Queries](http://msdn.microsoft.com/en-us/magazine/hh653584.aspx) and responsive design.

# # Touch Events

Touch is tricky as there are a number of different implementations, Ted Johnson shares a [technique for handling touch events across Android, iOS and IE10](http://blogs.msdn.com/b/ie/archive/2011/10/19/handling-multi-touch-and-mouse-input-in-all-browsers.aspx) over on the IEBlog. 

On the Clarity consulting's blog [they discuss touch more generally](http://blogs.claritycon.com/design/2011/07/25/building-a-touch-friendly-html5-site/) along with some sample code that I found really useful. 

# # Mobile Frameworks

There are a number of frameworks that can help you build web applications for mobile. Whilst many of these frameworks are commonly used to create standalone applications, rather than enhancing existing websites, familiarising yourself with how they deal with screen resolutions and touch can teach you how to build better websites that work well on mobile. 

*   jQuery Mobile - [http://jquerymobile.com](http://jquerymobile.com)
*   MooTools Mobile - [http://mootools.net/forge/p/mobile](http://mootools.net/forge/p/mobile)
*   M-Project - [http://www.the-m-project.org](http://www.the-m-project.org)
*   Sencha Touch - [http://www.sencha.com/products/touch](http://www.sencha.com/products/touch)
*   jQTouch - [http://jqtouch.com](http://jqtouch.com)
*   NimbleKit - [http://www.nimblekit.com/index.php](http://www.nimblekit.com/index.php)

# # Differences between IE for the desktop and IE for Mobile

If you want to know what the differences are between IE9 on the desktop and IE9 on mobile I wrote a [post a few months ago that lists them all out](http://www.ubelly.com/2011/11/the-differences-between-ie9-on-the-desktop-and-ie9-on-wp7/).