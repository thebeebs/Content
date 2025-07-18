---
title: '''Why Don''t you need to close tags in HTML5?'''
authors:
- thebeebs
intro: HTML5 is a much more forgiving when it comes to Ma...
types:
- shorts
categories:
- web
- html5at5
published: 2012/02/06 12:00:00
updated: 2012/02/06 12:00:00
status: archived
---
















HTML5 is a much more forgiving when it comes to Mark-up than XHTML. With XHTML you needed to make sure that each opening HTML tag had it's own closing tag. So you would always close an image tag like this:
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:cc03afa0-e864-48b3-accd-6fe95efc69a2" class="wlWriterEditableSmartContent"><pre class="brush: html;"><img alt="A pretty car" src="images/images/image.jpg" /></pre></div>

If you forgot to close the tag, like this:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:1ae70f72-413f-42bc-8abc-056fd9937927" class="wlWriterEditableSmartContent"><pre class="brush: html;"><img alt="A pretty car" src="image.jpg" ></pre></div>

And you tried to validate the document then you would end up with an error like this:

[![An error message from the W3C Validator](images/8637.image_thumb.png "An error message from the W3C Validator")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/0702.image_2.png)

However, try the same thing with the [W3C HTML5](http://validator.w3.org) validator and you will discover that it' doesn't have an issue with it.

The HTML5 specification has standardised the way that browsers deal with the problem of malformed HTML5 so you don't need to worry about it... unless of course you want to. You see, you can use XHTML5 which insists that every tag must be explicitly closed ([amongst other things](http://dev.w3.org/html5/spec/Overview.html#html-vs-xhtml)). In short the issue of people not correctly closing tags was so widespread that it was considered a better approach for all the browser manufacturers to agree on how they should deal with such issues rather than fighting an up hill battle to convince everyone to write XML based mark-up.

For what it is worth, I continue to close tags even though I don't need to... it makes makes the OCD side of my personality happy. 