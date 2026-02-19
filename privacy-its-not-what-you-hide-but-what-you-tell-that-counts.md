---
title: "Privacy \u2013 it\u2019s not what you hide but what you tell that counts"
authors:
- thebeebs
intro: Online privacy is one of those polarising topics. ...
types:
- shorts
categories:
- article
- html5
- privacy
published: 2012/04/30 12:00:00
updated: 2012/04/30 12:00:00
status: archived
---
















Online privacy is one of those polarising topics. For many people it&rsquo;s the hot button that triggers all their feelings of mistrust against what companies do online. For others, it&rsquo;s no big deal &ndash; they just don&rsquo;t care. Me? I&rsquo;m somewhere in the middle.

## Exclusive: Online Privacy Breach Shocker!
<p>One thing is guaranteed: privacy issues make for good headlines &ndash; whether it&rsquo;s the seamlessly never-ending speculation about [what Facebook actually knows about you](http://nakedsecurity.sophos.com/2011/10/20/law-student-triggers-22-legal-complaints-and-likely-audit-of-facebook/), [Twitter &lsquo;outings&rsquo; to circumvent legal injunctions](http://www.bbc.co.uk/news/uk-13680979), [Google&rsquo;s new privacy policy](http://www.webmonkey.com/2012/03/googles-new-privacy-policy-what-has-changed-and-what-you-can-do-about-it/) or [Path uploading users&rsquo; address books](http://www.guardian.co.uk/technology/appsblog/2012/feb/09/path-privacy-apps). 

## Too much information?

One way or another, most major sites collect information about us when we visit. As developers working on these sites, we need to make judgments about what information to collect, why we&rsquo;re collecting it and what we&rsquo;re going to do with it when we&rsquo;ve got it.

It&rsquo;s all too easy to think of this data as just another set of 1&rsquo;s and 0&rsquo;s &ndash; abstract information that&rsquo;s somehow divorced from the real world of actual people. It&rsquo;s not the case of course (as any of the stories mentioned above clearly shows). And, considering the fallout from any breach of user privacy, it&rsquo;s a pretty fundamental thing to get right.

## Out of control

To be clear, for many people, it&rsquo;s not so much that a site collects information about them that matters, it&rsquo;s the loss of control that really counts. If they&rsquo;re asked for their details and it&rsquo;s explained why the site needs them, people tend to understand the trade-off they&rsquo;re making.

So, if I go to a site where, in return for them knowing a bit more about me, I&rsquo;ll get a tangibly better experience as a result, I&rsquo;m utterly cool with that. However, if I go to a site that harvests every last bit of information it can about me just because it can (and because it might come in &lsquo;useful&rsquo; later on) then that&rsquo;s just not on.

## Don&rsquo;t stalk, it&rsquo;s just creepy

Even in terms of personalisation, sites can go too far. There&rsquo;s a difference between helpful time-saving and creepy stalking. So when a site like Google+ makes it clear that it knows where I&rsquo;ve been and shares where others I know have been, it simply highlights how much they know about everybody&rsquo;s day-to-day lives. Now, of course, the argument is that because we all want to be social these days, this simply enhances the social nature of the experience. Well, not for me.

We may see changes in how sites and developers need to look at privacy with the incoming [EU cookie directive](http://www.seoptimise.com/blog/2012/03/eu-cookie-directive-what-why-who-when-and-how.html). This lays down far stricter rules for informing site visitors about exactly what information you are collecting and why. So unless the information is crucial to the operation of the site (eg to enable a transaction) users will need to give explicit consent to a cookie being set.

## Privacy questions for developers

Beyond the legal constraints, the question remains: what should we, as developers, do to ensure privacy is given its proper place in the sites we build. Here are my starters for 10 (let me know yours in the comments):

*   **Collect as little data as you need **&ndash; too often developers simply grab everything they can (just in case).
*   **Only share what is required &ndash;** If you are writing an API that shares user data, only share the data that is required. If a service needs to know First Name and Last name don&rsquo;t expose a user object that contains more than those fields. This idea is based upon the [Principle of Least Authority](http://en.wikipedia.org/wiki/Principle_of_least_privilege). Fundamentally never give more than is needed.
*   **Make sure you comply with the EU Cookie Directive** &ndash; it&rsquo;s only a matter of time until we see governments enforce the new rules. And &pound;500k is a lot of money to pay for getting it wrong.
*   **Build your terms and conditions into the UX** &ndash; don&rsquo;t bury your information gathering policy on page 86 of a never-ending form (these days someone **will** go through it and happily tweet the result).
*   **Be explicit about what you&rsquo;re collecting and why** &ndash; if you can&rsquo;t do this without blushing, chances are you&rsquo;ve stepped across the privacy line that users will accept.

Ultimately, this is all about developing sites in the interests of the user. Yes, sites often have to make money. But sites make money from **people** and those same people will happily go elsewhere if you give them an excuse. 

As in every part of life, trust takes time to build but it can be squandered in a moment.

**Further reading**

*   [Me and my data: how much do the internet giants really know?](http://www.guardian.co.uk/technology/2012/apr/22/me-and-my-data-internet-giants) by James Ball in the Guardian
*   [Tim Berners-Lee: deep packet inspection a &lsquo;really serious&rsquo; privacy breach](http://www.wired.co.uk/news/archive/2012-04/18/tim-berners-lee-dpi) by Olivia Solon on Wired.co.uk
*   [Is online privacy worth paying for?](http://www.msnbc.msn.com/id/46896394/ns/technology_and_science-security/#.T5gnXu3wn6A) by Jesse Emspak, TechNewsDaily
*   [Why you should care about and defend your privacy](http://lifehacker.com/5904966/why-you-should-care-about-and-defend-your-privacy) by Rainey Reitman on Lifehacker
*   [Apple, Google and others in agreement on app privacy](http://bits.blogs.nytimes.com/2012/02/22/california-attorney-general-reaches-deal-on-app-privacy/) By Nicole Perlroth and Nick Bilton on the New York Times&rsquo; Bits blog</p>