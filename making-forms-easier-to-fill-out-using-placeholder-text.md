---
title: Making forms easier to fill out using placeholder text
authors:
- thebeebs
intro: '[Placeholder](http://dev.w3.org/html5/spec/Overvie...'
types:
- shorts
categories:
- web
- html5at5
published: 2012/01/19 12:00:00
updated: 2012/01/19 12:00:00
status: archived
---







[Placeholder](http://dev.w3.org/html5/spec/Overview.html#the-placeholder-attribute) is a HTML5 attribute that you add to input elements, it makes it easier for users to fill out your forms.

[<span>Demo</span> view here ](http://lab.thebeebs.co.uk/placeholder/)[<span>Source</span> on GitHub ](https://github.com/amiel/html5support)

It works for on regular input fields but also works on on password types. Of course the [placeholder tag is not supported](http://www.caniuse.com/#search=placeholder) by every browser, but a [great polyfill](https://github.com/amiel/html5support) created by [Amiel Martin](https://github.com/amiel) exists which uses JavaScript to add support to unsupported browser.

[![Placeholder Example](images/1856.image_thumb_1.png "Placeholder Example")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/6330.image_4.png)

You just need to add the scripts to your document:
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:54486c60-9203-45c5-98b9-1d75855fcdcc" class="wlWriterEditableSmartContent"><pre class="brush: html;"><script src="images/jquery-1.5.1-vsdoc.js" type="text/javascript"></script>
<script src="images/html5support.js" type="text/javascript"></script></pre></div>

Add a some script to initialise the library

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:9e712f1b-c211-4448-bfee-242ffe27f44f" class="wlWriterEditableSmartContent"><pre class="brush: javascript;"> $(document).ready(function () {
            $.placeholder();
        });</pre></div>

Add some CSS to style the placeholder text 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:7a72a990-95e2-4c66-b57d-f98e1e8e9894" class="wlWriterEditableSmartContent"><pre class="brush: html;">.placeholder
        {
            color: #888;
        }</pre></div>