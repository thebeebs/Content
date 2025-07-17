---
title: Using CSS3 to make your web pages better when they are printed.
authors:
- thebeebs
intro: I recently walked past someone in the office who w...
types:
- shorts
categories:
- web
- html5at5
published: 2012/01/18 12:00:00
updated: 2012/01/18 12:00:00
status: archived
---







I recently walked past someone in the office who was reading a web article that they'd printed off. Now putting to one-side the environmental impact of printing the internet there is also another disadvantage to reading printed webpages... the hyperlinks don't work. Wouldn't it be nice if you could somehow add the textual link next to a hyperlink but only when a document was printed, well you can using CSS [:after](http://www.w3schools.com/cssref/sel_after.asp) selector.

[<span>Demo</span> view here ](http://lab.thebeebs.co.uk/printingLinks/)

Firstly you will need to add a print style sheet. This is just a regular stylesheet which is only applied when the document is being printed. This requires a regular style sheet link with the attribute media="print".
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:ec71355a-ad6e-4c86-87fd-fa5b2a579257" class="wlWriterEditableSmartContent"><pre class="brush: html;"><link href="print.css" rel="stylesheet" type="text/css" media="print" /></pre></div>

Inside this style you just need to the following CSS. I tend to switch text decoration (the underlining) off of printed hyperlinks because it's easier to see URL when they are printed without the underlining (but this is entirely optional and there are reasons why you might not want to do this)

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:b89b1906-cbef-4f86-ac71-c4a97992d9a5" class="wlWriterEditableSmartContent"><pre class="brush: html;">a:after
{
    content: " (" attr(href) ")";
}
a
{
    text-decoration: none;
}
</pre></div>

The [demo page](http://lab.thebeebs.co.uk/printingLinks/) will then look like the below image when it is printed:

[![An image of the printed webpage](images/0361.image_thumb.png "The resultant web page")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/5483.image_2.png)

If you would rather use [inline style](http://lab.thebeebs.co.uk/printingLinks/inline.html) then you could write it like this:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:b9ed7354-abd8-4672-8c87-f76ff504d54d" class="wlWriterEditableSmartContent"><pre class="brush: html;"><style>
        @media print
        {
            a:after
            {
                content: " (" attr(href) ")";
            }
            a
            {
                text-decoration: none;
            }        
        }
</style></pre></div>