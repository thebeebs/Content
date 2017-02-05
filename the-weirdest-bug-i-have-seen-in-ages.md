---
title: The Weirdest Bug I Have Seen In Ages
authors:
- thebeebs
intro: 'One of my colleagues came to me last week with an ...'
types:
- shorts
categories:
- web
published: 2015/12/14 12:00:00
updated: 2015/12/14 13:00:00
status: archived
---

One of my colleagues came to me last week with an issue they were having with the Costa website inside of Microsoft Edge. When they attempted to checkout and pay for a gift card (they had 20 or so they needed to create) they would press a Checkout button, Microsoft Edge appeared to open an iframe then immediately close it and push the user back to their basket.

Weird I thought... I began my diagnostic ritual, one that I have become so familiar with over the past few years. F12 tools, consoles, view source,  changing agent strings and then finally opening it in another browser to see if that "fixes it". However, the site was completely broken.

Weirdly the site worked on my Machine in Chrome and Edge. I checked our version of Windows (they were different) maybe it's that... but it wasn't that.

Weirdly, and for reasons I can't explain, if you sit in the middle of our office in Reading the wireless system assigns you an external IP address that appears to be in Germany. This leads to all sorts of havoc. German Adverts on YouTube, sites serving German new stories. It's like a mini Germany bang smack in the middle of sleepy Reading.

It looks like costa have some sort of international IP filter. So when it saw someone coming from Germany it immediately rejected them. Sadly it did this all silently.

Simple fix in the end. Move to the portion of the office with the UK wireless and problem is solved.

&nbsp;