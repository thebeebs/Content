---
title: HTML5 advertising breaks free of the banner
authors:
- thebeebs
intro: 'Love them or hate them, it seems online ads have b...'
types:
- shorts
categories:
- article
- html5
published: 2012/01/04 12:00:00
updated: 2012/01/04 13:00:00
status: archived
---

Love them or hate them, it seems online ads have been around almost as long as the web itself. Traditionally, the range of options has been pretty limited however. You get the letterbox one, the tall thin one and the bog-standard 3:4 ratio box one. <p>Of course, over the last five years or so, the advent of the [alpha channel](http://www.adobe.com/devnet/flash/articles/concept_alpha_channel.html) has livened things up a bit in that you can now get Flash ads that can appear to break out of the traditional space and &lsquo;interact&rsquo; with the page around them. These can vary from the vaguely annoying &lsquo;take a survey&rsquo; floating boxes to the more engaging page takeovers. For an example, take a look at this effort by Nokia to create an on-page snake game:
<iframe height="315" src="images/hFoQVx8ZcHo" frameborder="0" width="560" allowfullscreen="allowfullscreen"></iframe>

The thing is, while this can all look pretty impressive, the truth is that the ad is not really interacting with the page in any meaningful way. At most, it&rsquo;s interacting with an image of the site. It&rsquo;s simply smoke and mirrors.

Now, if we used HTML5 for this, we could write a Snake game that actually interacted with DOM elements on the page. The result could be something more captivating and truly interactive for people to play with.

Before we all get carried away, however, there are a couple of issues we&rsquo;ll need to overcome:

1. As ad content is untrusted, sites may confine adverts to iframes that are sandboxed. This could mean that we may not have the trust to do interesting takeovers. I suspect this may be open to negotiation however.

2. Modern web development is increasingly based upon responsive web design (the design changes to support phone and tablet form factors). It&rsquo;s unclear how you can incorporate adverts which have fixed widths into pages that don&rsquo;t.

While many people find existing banner advertising pretty annoying, with HTML5 there&rsquo;s a real opportunity to finally create something more engaging. Until then, Snake anyone?

**Further reading**

The Internet Advertising Bureau in the UK has published guidelines for HTML5 and Flash. Sadly, it doesn&rsquo;t say a great deal on HTML5 at the moment:

**_HTML5 and Flash&trade;_**

_Prior to the wide adoption of devices like the iPhone&trade; and iPad&trade;, Flash&trade; formatted creative was widely accepted and easily displayed across the industry. In today&rsquo;s market, adjustments have to be made to accommodate ads across multiple display devices. HTML5 has provided one solution, but is not yet widely adopted and requires different creative specifications than Flash formatted creative. Requests were made to call out a separate category of creative specs to accommodate HTML5 ads, but for this release of creative guidelines, it was decided to keep the specs &ldquo;technology neutral.&rdquo; An addendum for HTML5 for display advertising best practices is currently being pursued._

_You can read the full guidelines at: _[_http://www.iab.net/iab_products_and_industry_services/508676/508767/Rich_Media_](http://www.iab.net/iab_products_and_industry_services/508676/508767/Rich_Media)
</p>