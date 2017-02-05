---
title: Responsive web design in 3 minutes 42 seconds
authors:
- thebeebs
intro: 'How many screens do you create your sites for? <p>...'
types:
- shorts
categories:
- article
published: 2012/02/28 12:00:00
updated: 2012/02/28 13:00:00
status: archived
---

How many screens do you create your sites for? <p>For many designers and developers the answer is one, perhaps two &ndash; a traditional desktop/laptop and, maybe, a smartphone. Chances are these will be two separate sites &ndash; the www.main-site-that-most-effort-goes-into.co.uk and m.mobile-version-with-bigger-buttons-and-some-stuff-taken-out.co.uk. But, just between you and me, the real world isn&rsquo;t nearly so simple. 

Today, there is a huge range of devices to think about. Some users will be basking in a state of the art 30&rdquo; LED screen, others on a 15&rdquo; laptop, some will be on netbooks, a bunch will be on tablets (in various sizes) and a load more will be on differently spec&rsquo;d smartphones. So whatever your site was originally designed for (eg the ubiquitous 960px grid), every other format will be, to a greater or lesser extent, a compromise.

The thing is, it really doesn&rsquo;t have to be this way.

The answer is responsive web design. It&rsquo;s not new &ndash; and wasn&rsquo;t when [Ethan Marcotte](http://ethanmarcotte.com/) came up with the name in 2010 (as he&rsquo;d be the first to admit). But there has never been a better time for designers and developers to get their heads round it. 

Last week I hosted the [Responsive Summit](http://responsivesummit.com/) in London. It was set up by [Josh Brewer](https://twitter.com/#!/jbrewer) at Twitter, [Alex Morris](https://twitter.com/#!/aexmo) of Mark Boulton Design and [Chris Armstrong](https://twitter.com/#!/armstrong) of Front and got a number of leading designers round a table to discuss the state of responsive web design and what they want to see in future. It was fantastic to see so much passion so well articulated. I came away truly inspired. I have tons of content that I will publish later on in the week, you can <u>[check out the coverage over on Lanyrd](http://lanyrd.com/2012/responsive-summit/writeups/)</u>

In this post, however, I simply want to give a short primer on responsive web design for the uninitiated together with some links for those who want to know more.

## What is responsive web design?

There are a range of definitions available, but for the purposes of this primer I&rsquo;m going to define responsive web design as:

_The creation of a site that is able to adapt to the context        
in which it is being viewed. _

To flesh this out a little, it means creating a site that will dynamically adapt to different screen sizes by resizing and reformatting its constituent elements. So it might be a 3-column site with large images and detailed navigation on a big screen and a 1-column scrolling site with simple navigation and smaller, lighter images on a smartphone.

Importantly, it can be all these things employing a single set of code and will use CSS3 to achieve the right effects.

## The three core elements to responsive web design

In Ethan Marcotte&rsquo;s book, [Responsive Web Design](http://www.abookapart.com/products/responsive-web-design) (which you simply must go and buy right now) he sets out the three elements you need to play with to create a responsive design:

1.  A flexible, grid-based layout,
2.  Flexible images and media
3.  Media queries

Fundamental to the first two is to stop thinking in terms of fixed pixel widths. At best fixed widths will simply cause a small device to scale everything, making it unreadable and un-navigable. At worst, your site will simply look broken.

Instead, in responsive web design, all elements become proportional to the whole. So rather than a column being 331px within a 960px site, it becomes a percentage of the overall width of an individual display (no matter what that is). The same applies to padding and images. Ultimately, this allows the design to adapt to different screen sizes.

Now, as Ethan points out, at a certain point, when you scale down really small, everything breaks. That&rsquo;s where media queries come in.

Media queries allow you to determine the type of media the viewer has access to and the physical characteristics of their device and browser. It means you can set parameters for what gets shown, how and under what circumstances. So you can serve up the 3-column extravaganza on a big screen and the 1-column mobile version on a smartphone.

I am, of course, massively over-simplifying the topic here. Do check out Ethan&rsquo;s book, it&rsquo;s a great read. And take a look at the sample site he set up at [http:// responsivewebdesign.com/robot/](http://responsivewebdesign.com/robot/) &ndash; resize to your heart&rsquo;s content to see what he means. Finally, further reading can be found at the links below.

## Further reading

*   [Responsive web design](http://www.alistapart.com/articles/responsive-web-design/) (the original A List Apart article by Ethan Marcotte himself)
*   [Fluid grids, orientation and resolution independence](http://blog.responsivenews.co.uk/post/13925578846/fluid-grids-orientation-resolution-independence)
*   [Beginner&rsquo;s guide to responsive web design](http://thinkvitamin.com/design/beginners-guide-to-responsive-web-design/)
*   [Responsive web design techniques, tools and design strategies](http://www.smashingmagazine.com/2011/07/22/responsive-web-design-techniques-tools-and-design-strategies/)
*   [Responsive web design: 50 examples and best practices](http://designmodo.com/responsive-design-examples/)
*   [21 top tools for responsive web design](http://www.netmagazine.com/features/21-top-tools-responsive-web-design)</p>