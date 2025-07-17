---
title: Gradients in Internet Explorer
authors:
- thebeebs
intro: Last week at the [digital barn](http://thedigitalb...
types:
- shorts
categories:
- web
- html5at5
published: 2012/02/20 12:00:00
updated: 2012/02/20 12:00:00
status: archived
---







Last week at the [digital barn](http://thedigitalbarn.co.uk/) I gave a talk called &ldquo;The Way the web should be&rdquo; in it I talked about the importance of Web Standards in the development of IE. In a follow up blog post [Ian Parr](http://www.twitter.com/devolute) made an interesting point:> <p>One point that I think MS people sometimes miss is that it&rsquo;s one thing having comparable features in browsers, but it&rsquo;s another thing all-together ensuring that these features can be implemented consistently. I think a great example of this is implementing a linear gradient with opacity using CSS3. It&rsquo;s great that you can now do this in CSS but if you look at the difference between doing this in Firefox and Webkit (with a nice tidy rgba value) and IE9 (with a confusing 8-digit hex code&hellip; thing) then it shows there is still one way for IE and one way for everyone else.

I understand Ian&rsquo;s frustration on this one, and just wanted to share my own views on this.

It&rsquo;s worth saying straight out of the gate, our implementation of linear gradients in IE10 is experimental and does not necessarily reflect what will appear in the final version of the browser. This is indicated by the vendor prefix &ndash;ms that is applied to the attribute. We put the vendor prefix for one of 2 reasons, we recognise that our implementation is not complete or we think the specification is likely to change.

Secondly as far as I am aware you can happily use RGBA values for transparency of linear gradients [as this quick demo shows](http://lab.thebeebs.co.uk/gradients/) (works, in IE10 and latest versions of FF,Chrome, Opera and Safari). There has [been some discussion](http://lists.w3.org/Archives/Public/www-style/2011Jun/0639.html) around the specifics of over on the W3C mailing list but as far as we are aware platform preview 4 currently supports linear gradients in the same way WebKit, Opera and Mozilla does.

I completely&nbsp; agree with Ian with Ian's sentiment, however, and have said [many times before](http://ubelly.com/2011/03/twitter-qa-from-state-of-the-browser/) &ldquo;a bad implementation is worse than no implementation&rdquo; Implementing stuff which wasn&rsquo;t ready or properly thought out was the exact thing we did wrong with IE6&hellip;. And we are still paying for it 11 years later. 

If you want to play around with CSS3 Gradients the IE team have put together this rather nice [CSS3 gradient maker](http://ie.microsoft.com/testdrive/Graphics/CSSGradientBackgroundMaker/Default.html).
</p>