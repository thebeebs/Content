---
title: The Curse of Quirks
authors:
- thebeebs
intro: '<rant><p>At the danger of causing my [Klout](http:...'
types:
- shorts
categories:
- article
published: 2012/01/31 12:00:00
updated: 2012/01/31 13:00:00
status: archived
---

<rant><p>At the danger of causing my [Klout](http://www.klout.com/) score irreparable damage, I want to spend this post using their site to highlight a mistake I&rsquo;ve seen three times in the last week. 

The problem? In a word: [Quirks](http://en.wikipedia.org/wiki/Quirks_mode).

I [went to Klout.com](http://dl.dropbox.com/u/10303465/pics/klout.png) in IE and rather than seeing the nice, clean, well-structured design they intend, you&rsquo;ll see a hodgepodge of mangled DIVS and misaligned blocks of colours. Not pretty.

The cause? The developer has placed something before the DOCTYPE of the page. This makes IE assume there is no DOCTYPE and switch to Quirks mode. 

You can check to see if a website has had this particular variant of fresh hell heaped upon it by pressing F12 and checking the document mode. If it has been set to Quirks then something is wrong.

**Beating quirks is simple**

There&rsquo;s no real rocket surgery here. The 3 most common causes behind the Quirks I see on a regular basis are:

*   The developer has placed a verification comment above the DOCTYPE. (Services often ask developers to place a comment with a particular code in their web page so that the site can verify that they are the owner of the site before allowing access to the service. **Remember if you are doing this add the verification inside the head tag.)**
*   The developer added comments about the source code before the DOCTYPE. The solution is to simply move the comments below the DOCTYPE.
*   Or, as Klout did, the developer added a body tag before the DOCTYPE. Weirdly, if you change the user agent string to Chrome it serves up content that&rsquo;s not malformed (ie the body tag doesn&rsquo;t appear before the DOCTYPE). This leads me to think they&rsquo;re doing some form of browser sniffing. ([Browser Sniffing](http://www.sitepoint.com/why-browser-sniffing-stinks/) is another pet hate of mine as it makes problems like these even harder to pin down.)

**3 simple rules**

1.  Always use a DOCTYPE
2.  **Never** place any content before the DOCTYPE declaration
3.  Check you sites regularly in the [W3C validator](http://validator.w3.org/). Even if you are not looking to get valid HTML, at least you&rsquo;ll know the issues and can then make an informed decision as to whether you want to fix them

</rant>
</p>