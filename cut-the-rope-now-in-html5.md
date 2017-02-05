---
title: Cut the Rope now in HTML5
authors:
- thebeebs
intro: 'Cut the rope was a game originally built for iPhon...'
types:
- shorts
categories:
- article
published: 2012/01/09 12:00:00
updated: 2012/01/09 13:00:00
status: archived
---

Cut the rope was a game originally built for iPhone and Android by [ZeptoLab](http://zeptolab.com/) and it's gone on to sell 70 million copies, the good news is that it has been ported to HTML5 by PixelLabs, ZentoLab and the Internet Explorer team. It works in Chrome, Safari, Internet Explorer 9 and Opera.

[<span>Play</span> Cut the rope](http://www.cuttherope.ie/) [<span>Read</span> the developers guide](http://www.cuttherope.ie/dev) 

The game was ported from Objective-C to JavaScript, which must have been a huge challenge given the fact Objective-C and JavaScript are very different beasts.

Objective-C is an object-oriented programming language and as such has inheritance and classes where as JavaScript is a dynamic scripting language. You can create 'class like' objects in JavaScript using prototypes but, It's harder to get native like performance out of JavaScript. The game is proof, however, that with a little bit of creative thinking, modern JavaScript engines can deliver the goods.

In the [article](http://www.cuttherope.ie/dev/) that accompanies the game, the developers talk about the mind-set switch required to move from Objective-C to JavaScript and pointed out two areas where a different approach had to be taken to get the game running smoothly. 

## Recursion

In the Objective-C application there were numerous instances where a procedure would call itself again and again passing a new object into each successively deeper call. This didn't work well for JavaScript and so they changed the code to be iterative, for those not familiar with the differences, I've written a little example of a recursive and an iterative function that performs the same task. Notice that the top function calls itself repeatedly until it has the answer.
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:23ef3cab-ddb0-46fd-b4e9-bc28e4323279" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">document.write('<p>Recurvive:' + recursive(5) + '</p>');
document.write('<p>Iterative:' + iterative(5) + '</p>')

function recursive(x) {
    if (x >= 10) return x;
    return recursive(x + 1);
}

function iterative(y)
{
    if (y >=10) return y;
    while (y < 10)
    {
        y++;
    }
    return y;
}
</pre></div>

Using the IE9 Developer tools you can see that the recursive function (on the left) is called 6 times where as the iterative version (on the right) is called just once. The the case of cut the rope the iterative approach performed better.

[![Recursive](images/7462.image_thumb.png "Recursive")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/7043.image_2.png)

[![Iterative](images/5808.image_thumb_1.png "Iterative")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/7450.image_4.png)

## Memory Allocation

As JavaScript doesn't have structs or classes it's common to use prototypes as an alternative. The game developers soon realised that taking this approach used more memory as creating an object in JavaScript is much more expensive. Rather than creating copies of objects&#160; whenever possible the developers tried to copy individual properties and avoided creating entirely new object instances.

## The Tools

As well as giving some insight into the development process the team also talk about the tools they used to build the application. I've listed them all below, I'm particularly interested in giving the sound manager a spin:

*   [Simple JavaScript Inheritance](http://ejohn.org/blog/simple-javascript-inheritance/) a pattern from [John Resig](http://ejohn.org/about/)
*   [Visual Web Developer 2010 Express](http://www.microsoft.com/visualstudio/en-us/products/2010-editions/visual-web-developer-express) this is a free version of the my tool of preference [Visual Studio 2010 Ultimate](http://www.microsoft.com/visualstudio/en-gb/try)
*   [pxLoader](http://thinkpixellab.com/pxloader/) - A nice HTML5 image preloader
*   [Sound Manager](http://www.schillmania.com/projects/soundmanager2/) - Used to make HTML5 audio easier to deal with and helps get past some bugs in [Chrome Audio implementation](http://code.google.com/p/chromium/issues/detail?id=107933) by falling back to Flash
*   [IE9 Developer tools](http://www.beautyoftheweb.co.uk/) (press F12 in IE9) - I gave a [talk about the tools in Las Vegas](https://channel9.msdn.com/events/MIX/MIX11/HTM18) last year if you haven't used them before.