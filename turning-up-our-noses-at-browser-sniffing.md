---
title: Turning up our noses at browser sniffing
authors:
- thebeebs
intro: Did you notice it? Well if you&rsquo;re an Opera u...
types:
- shorts
categories:
- article
published: 2012/02/06 12:00:00
updated: 2012/02/06 12:00:00
status: archived
---







Did you notice it? Well if you&rsquo;re an Opera user you might. As of last week, if you go to [Bing](http://www.bing.com/) using Opera, you&rsquo;ll get to see the HTML5 background video in all its glory.<p>Now, let&rsquo;s be clear, it&rsquo;s not as if Opera couldn&rsquo;t play the video before. It just never got the chance.

You see Bing used browser sniffing to determine what it thought visitors&rsquo; browsers could and could not deal with. Browser Sniffing is, to my mind, a relic that should have been put to rest years ago. But, like a bad smell, it&rsquo;s just hung around.

The problem with browser sniffing is &ndash; and I believe this is the technical term &ndash; it&rsquo;s just a bit pants. With so many browsers and so many user agent strings (not to mention browsers pretending to be other browsers) you simply can&rsquo;t guarantee the right result.

This means you&rsquo;ll tend to exclude at least a portion of your audience (probably unnecessarily as most browsers deal with most code just fine &ndash; as in the Bing example with Opera).

The solution to Browser Sniffing? Feature detection&hellip; Rather than guessing at what the browser is capable of, you use JavaScript to test the browser. In general this is far more accurate and delivers far better results.

To learn more about feature detection &ndash; and particularly how to write a feature detection tests in JavaScript &ndash; [check out my earlier post](http://blogs.msdn.com/b/thebeebs/archive/2012/01/25/how-to-write-a-feature-detection-script-in-javascript.aspx). And to see a demo in action, take a look at [the tutorial video I created](https://www.youtube.com/watch?v=wDRpFd7Ns_k) with [Ubelly](http://www.ubelly.com/) detailing how Sky News used feature detection in a proof of concept project I worked on last year.
</p>