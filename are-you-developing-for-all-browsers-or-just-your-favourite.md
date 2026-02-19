---
title: Are you developing for all browsers or just your favourite?
authors:
- thebeebs
intro: The choice of browsers today is wider than ever be...
types:
- shorts
categories:
- article
published: 2012/02/20 12:00:00
updated: 2012/02/20 12:00:00
status: archived
---
















The choice of browsers today is wider than ever before. And, for the most part, if you develop for one modern browser, your site will pretty much work on all the others (albeit with a little tweaking here and there). It&rsquo;s pretty amazing, and this browser interoperability is down to the great work standards bodies and standards advocates have been doing since the beginning of the web.<p> However, there is one area that is causing some concern amongst standards advocates and that is &ndash; vendor prefixes.

If you want some background, Bruce Lawson has [a pretty comprehensive post](http://www.brucelawson.co.uk/2012/on-the-vendor-prefixes-problem/) on the subject as does [Peter Gasston over on Ubelly](http://www.ubelly.com/2012/02/vendor-prefixes-the-good-the-bad-and-the-ugly/). 

Essentially for more experimental features, each vendor uses its own version of the code and prefixes it with an identifier (e.g. -ms-linear-gradient, &ndash;moz-linear-gradient, &ndash;webkit-linear-gradient). This prefix demonstrates that it is an experimental interpretation of the specification (linear-gradient). As such, it&rsquo;ll be ignored by other browser vendors.

However, [as with browser sniffing](http://blogs.msdn.com/b/thebeebs/archive/2012/02/06/turning-our-noses-up-at-browser-sniffing.aspx), this can have unintended results. Developers often use the experimental code released by an individual browser, but because it&rsquo;s&nbsp; not implemented by all browsers at that point in time they only implement one browsers interpretation. 

WebKit is often first out of the gate with a specification, and so many developers find themselves implementing WebKit first. Due to release timings and pressure to put sites live, it&rsquo;s often the case that developers don&rsquo;t get the chance to enable the experimental features for other browsers.

This means that while the site may look perfect on one browser, it can look broken on another (even though that browser is perfectly capable of displaying the element as the developer intended).

The question is, what to do about it. There are two sides to that. 1. What can browser vendors do and 2, What can developers do

In the case of browser vendors there have been a number of suggestions:

*   It&rsquo;s been suggested that -webkit vendor prefixes could be adopted by the other browsers
*   Likewise, some have advocated a move to &ndash;beta or &ndash;experimental instead to create a single cross-browser prefix for experimental code
*   Or all browsers could accept any prefix which would achieve the same effect
*   Alternatively, the answer could simply lie in getting developers to fix or update their code as Daniel Glazman has suggested

What I&rsquo;m doing as a developer:

*   With production websites I try to avoid using vendor prefixes that have only been implemented by one browser vendor.
*   If I am going to pass my code over to someone else&hellip; I will try to avoid vendor prefixes, because as the implementations change I won&rsquo;t be able to go back and fix my code.
*   If I am using a vendor prefix I will, where possible, place it in a separate CSS file. I use a bundler that combines them at build into a single CSS file. This is helpful because it means all of my experimental code is in one single file, separate from the standard CSS.
*   I use all of the vendor prefixes, for each feature. Even if the particular vendor doesn't have an implementation of that feature.
*   I use the standard un-prefixed version of the feature, even if the feature hasn&rsquo;t been standardised yet.

The real answer, long term, is for us in the browser community to work together to solve the issue. It&rsquo;s not a quick fix, sure. But, we&rsquo;ve already taken the first steps and I&rsquo;m hopeful we&rsquo;ll deliver something that&rsquo;s fully in line with the open web.

Until then we all need to do whatever we can to ensure sites are coded for every browser, not just the developer&rsquo;s favourite.

## Further reading

There are a whole bunch of posts around vendor prefixes. In addition to those mentioned above, check out:

1.  [Now vendor prefixes have become a problem, want to help fix it?](http://christianheilmann.com/2012/02/09/now-vendor-prefixes-have-become-a-problem-want-to-help-fix-it/)
2.  [Alternatives to supporting -webkit prefixes in other engines](http://robert.ocallahan.org/2012/02/alternatives-to-supporting-webkit.html)
3.  [Call for action: the open web needs you *now*](http://www.glazman.org/weblog/dotclear/index.php?post/2012/02/09/CALL-FOR-ACTION%3A-THE-OPEN-WEB-NEEDS-YOU-NOW)
4.  [A proposal to drop browser vendor prefixes](http://felipe.wordpress.com/2012/02/02/a-proposal-to-drop-browser-vendor-prefixes/)
5.  [W3C co-chair: Apple, Google power causing Open Web crisis](http://news.cnet.com/8301-30685_3-57373764-264/w3c-co-chair-apple-google-power-causing-open-web-crisis/)
6.  [WebKit isn&rsquo;t breaking the web. You are](http://www.webmonkey.com/2012/02/webkit-isnt-breaking-the-web-you-are/)</p>