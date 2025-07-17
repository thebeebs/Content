---
title: Error.stack
authors:
- thebeebs
intro: In the statically typed code world I used to inhab...
types:
- shorts
categories:
- debugging
- web
- html5at5
published: 2012/06/28 12:00:00
updated: 2012/06/28 12:00:00
status: archived
---







In the statically typed code world I used to inhabit Call stacks were often used to diagnose the root cause of events. I wasn&rsquo;t aware that JavaScript had a similar (albeit non ECMA5) way of performing error stack interrogation. It&rsquo;s called Error.stack<p>It makes bugs -particularly those ones that are deep inside of anonymous functions - easier to research.

The IE blog has a rather good overview: [http://blogs.msdn.com/b/ie/archive/2012/05/10/diagnosing-javascript-errors-faster-with-error-stack.aspx](http://blogs.msdn.com/b/ie/archive/2012/05/10/diagnosing-javascript-errors-faster-with-error-stack.aspx "http://blogs.msdn.com/b/ie/archive/2012/05/10/diagnosing-javascript-errors-faster-with-error-stack.aspx")
</p>