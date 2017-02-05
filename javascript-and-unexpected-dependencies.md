---
title: JavaScript and Unexpected Dependencies
authors:
- thebeebs
intro: 'I have recently been helping a few people debug is...'
types:
- shorts
categories:
- web
published: 2016/01/04 12:00:00
updated: 2016/01/04 13:00:00
status: archived
---

I have recently been helping a few people debug issues they have with Microsoft Edge. It's quite common that I get sent code snippets of things that don't work and it's then up to me to put together a Workable project that displays the bug so that I can try and fix it.

It's quite common that I get sent a code snippet with a dependency that the developer has forgotten to mention (or perhaps assumed I will know about) .  I get this one quite a bit:
<pre>_.defaults(options, {blah: 'foo'});</pre>
The first time I saw it I got a "SCRIPT5009: '_' is undefined" error in my console and I suspected the developer hadn't sent me all of his code. You see, I'm not an Underscore.js user and so it took me about 10 minutes of searching before I realised that this code had a dependency on Underscore . I've heard about underscore. I've seen underscore before... But I just didn't recognise it.

I added Underscore.js to the project, My code now runs and I feel a little bit stupid.

Assumptions... Can be really annoying.