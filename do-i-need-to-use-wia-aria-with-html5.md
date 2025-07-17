---
title: Do I need to use WIA-ARIA with HTML5?
authors:
- thebeebs
intro: Accessibility for Rich Intranet Applications ([WIA...
types:
- shorts
categories:
- web
- html5at5
published: 2012/01/20 12:00:00
updated: 2012/01/20 12:00:00
status: archived
---







Accessibility for Rich Intranet Applications ([WIA-ARIA](http://www.w3.org/TR/wai-aria-primer/)) is a specification that makes it easier for people using screen readers to navigate and use web applications. Many of the new HTML5 elements like section and article have been added to the specification along with more controls so the obvious question is&hellip; Do I need to use WIA-ARIA at all?<p>If you want a one word answer: I&rsquo;d say yes. Use HTML5 semantic elements and the built in controls but you should use WIA-ARIA where appropriate as it will improve accessibility. Combining HTML5 and and WIA-ARIA can cause issues, many of which [this blog](http://www.accessibleculture.org/articles/2011/04/html5-aria-2011/) discusses however in most situations you are going to be improving accessibility by spending a little time applying ARIA support.

If your doctype is HTML5 then ARIA will validate using the [W3C validation service](http://validator.w3.org/)&nbsp; as [this example shows](http://validator.w3.org/check?uri=http%3A%2F%2Flab.thebeebs.co.uk%2Faria%2F&charset=%28detect+automatically%29&doctype=Inline&group=0). 

To dive deeper into the subject I&rsquo;d suggest reading the following articles on the subject:

1.  [Are you confused by HTML5 and WAI-ARIA Yet?](http://zufelt.ca/blog/are-you-confused-html5-and-wai-aria-yet)
2.  [HTML5 and Accessibility](http://msdn.microsoft.com/en-us/scriptjunkie/hh204741.aspx)
3.  [Confusion over HTML5 and WAI-ARIA](http://www.karlgroves.com/2011/12/24/confusion-over-html5-wai-aria/)
4.  [Wikipedia on WAI-ARIA](http://en.wikipedia.org/wiki/WAI-ARIA)</p>