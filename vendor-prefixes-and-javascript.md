---
title: Vendor Prefixes and JavaScript
authors:
- thebeebs
intro: 'I got asked a question recently [on twitter](https...'
types:
- shorts
categories:
- web
- html5at5
published: 2012/01/11 12:00:00
updated: 2012/01/11 13:00:00
status: archived
---

I got asked a question recently [on twitter](https://twitter.com/#!/seb_ly/status/156333741504069632) from Seb Lee-Delisle about vendor Prefixes and JavaScript. He asked:
  > is the JS equivalent of -ms-transform MSTransform? or msTransform?  

The answer to the question is msTransform. However, the question opens up an important note about the way that different browser vendor have approached Capitalisation with vendor prefixed JavaScript.

Now before I go any further, if you don't know what Vendor Prefixes are then take a look at [this primer](http://reference.sitepoint.com/css/vendorspecific).

All CSS properties have a JavaScript Equivalent. However, in JavaScript you can't use a dash (-ms-TransitionDuration) and so browser vendors have simply prefixed the JavaScript property with the vendor name e.g:
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:ebe05575-5160-4acd-bb4a-cc2142847e8e" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">var element = document.getElementById("myDiv");
element.style.msTransitionDuration = "3s";
</pre></div>

## CSS case-sensitivity

Generally CSS is case-insensitive (except with XHTML in some browsers). However, it's best practice with vendor prefixes to have them lowercase, the spec that covers this can be [found here](http://www.w3.org/TR/CSS2/syndata.html#vendor-keywords). Therefore CSS vendor prefixes look like this:

*   -moz-transform (FireFox)
*   -ms-transform (Internet Explorer)
*   -o-transform (Opera)
*   -webkit-transform (Safari, Chrome)
<!--EndFragment-->

## JavaScript case-sensitivity

JavaScript, however, is a case-sensitive language and it's important to note that different browser vendors have taken slightly different approaches to casing Vendor Prefixes. Now before you get to worried, it is very simple to deal with this issue and this article shows a very easy way to deal with it:&#160; [A best practice for programming with vendor prefixes](http://blogs.msdn.com/b/ie/archive/2011/10/28/a-best-practice-for-programming-with-vendor-prefixes.aspx).

In Internet Explorer, Microsoft Lowercase the first Letter, which makes it consistent with the CSS capitalisation:

*   msTransform

With FireFox, Mozilla uppercases the first letter - (Capitalising the first Letter seems to be the convention, however, I couldn't find a reference to any standard that states a capital, if you know of one please point me to it in the comments and I will update)

*   MozTransform

Opera also uppercases the first letter:

*   OTransform

And in Chrome and Safari you can use either Lower case or uppercase

*   webkitTransform or WebkitTransform

Of course when a property is not vendor prefixed (the property has been fully standardised and browsers no longer needs the vendor prefix) then you simply drop the prefix:

*   transform