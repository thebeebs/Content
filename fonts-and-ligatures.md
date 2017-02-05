---
title: Fonts and Ligatures
authors:
- thebeebs
intro: 'I just noticed that the [IE test drive website](ht...'
types:
- shorts
categories:
- web
- html5at5
published: 2012/03/02 12:00:00
updated: 2012/03/02 13:00:00
status: archived
---

I just noticed that the [IE test drive website](http://ie.microsoft.com/testdrive/Graphics/OpenType/) has some new demos that show the use of [OpenType font features](http://www.w3.org/TR/css3-fonts/#propdef-font-variant-ligatures) . Over the next few weeks I thought I'd take a look at each of the different features in turn.

OpenType is a technology that is supported by IE10 and Firefox 4+ allows you to use some of the features that are stored in font files to make fonts on webpages look better, you can read more [about it here](http://blogs.msdn.com/b/ie/archive/2012/01/09/css-corner-using-the-whole-font.aspx). So on to todays topic:

## Ligatures

Sometimes letters look awkward when they are positioned next to each other. The type designer may fix this by welding two letters together, e.g:

[![liga](images/8360.liga_thumb.png "liga")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/6116.liga_2.png)

To enable ligatures in a supported browser you use the CSS below:
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:5714241e-8a97-42f1-a948-9e7256e6d874" class="wlWriterEditableSmartContent"><pre class="brush: html;">-moz-font-feature-settings: "liga=1";
-ms-font-feature-settings: "liga" 1;</pre></div>

You will notice that there is currently a slight difference between the syntax between Firefox and IE, this is because the draft has changed. Don't worry by the time the feature is standardised we will likely use the same syntax, this is the whole reason we use vendor prefixes ([if you don't know what vendor prefixes are check out this post](http://blogs.msdn.com/b/thebeebs/archive/2012/02/20/are-you-developing-for-all-browsers-or-just-your-favourite.aspx)). 