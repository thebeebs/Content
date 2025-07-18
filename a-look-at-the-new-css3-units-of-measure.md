---
title: A look at the new CSS3 units of measure
authors:
- thebeebs
intro: So if you have been developing for any length of t...
types:
- shorts
categories:
- web
- html5at5
published: 2012/02/13 12:00:00
updated: 2012/02/13 12:00:00
status: archived
---
















So if you have been developing for any length of time then you are probably familiar with &lsquo;em&rsquo;, &lsquo;%&rsquo;and &lsquo;px&rsquo; as units of measurements in CSS. As part of the CSS3 specification there are a few new&nbsp; units of measurement that I think are worth casting an eye over.

*   &lsquo;[`ex`](http://www.w3.org/TR/css3-values/#ex-unit)&rsquo; This represents the height of a lowercase character in the elements font, it&rsquo;s sometimes referred to as the x-height because in many cases it is equal to the height of the lower case x, it resents about half size of a font&rsquo;s height. The usefulness of this measurement is questioned in this [blog post](http://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&frm=1&source=web&cd=1&ved=0CCYQFjAA&url=http%3A%2F%2Fsbpoley.home.xs4all.nl%2Fwebmatters%2Femex.html&ei=UrBCT778BMiy0QWOv_GPDw&usg=AFQjCNEuGBG-7Mm0rCXVHvborgVw4Xd3mA&sig2=KhwXT6abySoXf4XX8T8V7A).
*   &lsquo;[`ch`](http://www.w3.org/TR/css3-values/#ch-unit)&rsquo; width of the "0" glyph in the element's font. At first this might not appear to be that useful, but in monospace fonts it can be used to accurately measure text. Here is a real world use [for this measurement](http://lea.verou.me/2012/02/simpler-css-typing-animation-with-the-ch-unit/).
*   &lsquo;[`rem`](http://www.w3.org/TR/css3-values/#rem-unit)&rsquo; font size of the root element. In practical terms the root element is the HTML element. This way you can set a font size on the HTML element and then use a rem to size a font relative to that element anywhere in the document. There is a nice [blog post here](http://snook.ca/archives/html_and_css/font-size-with-rem) detailing it&rsquo;s real world use.
*   &lsquo;[`vw`](http://www.w3.org/TR/css3-values/#vw-unit)&rsquo; viewport's width &ndash; You can resize elements based upon the width of the viewport (the rectangular viewing region of the browser) that is currently viewing the website.&nbsp; It&rsquo;s use is [discussed here](http://snook.ca/archives/html_and_css/vm-vh-units).
*   &lsquo;[`vh`](http://www.w3.org/TR/css3-values/#vh-unit)&rsquo; viewport's height&nbsp; - You can resize elements based upon the height of the viewport that is currently viewing the website. It&rsquo;s use is [discussed here](http://snook.ca/archives/html_and_css/vm-vh-units).
*   &lsquo;[`vm`](http://www.w3.org/TR/css3-values/#vm-unit)&rsquo; minimum of the viewport's height and width &ndash; This tells you what is smaller out of either vw or vh. In the specification there is currently an issue which asks if this is still required. Since a developer could simply use the new [min function](http://www.w3.org/TR/css3-values/#calc) instead. e.g min(1vh, 1vw);