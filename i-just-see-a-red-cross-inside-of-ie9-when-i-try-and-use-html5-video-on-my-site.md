---
title: I just see a red cross inside of IE9 when I try and use HTML5 video on my site.
authors:
- thebeebs
intro: In most instances this issue is caused by your web...
types:
- shorts
categories:
- web
- html5at5
published: 2011/12/13 12:00:00
updated: 2011/12/13 12:00:00
status: archived
---
















In most instances this issue is caused by your web server not severing the correct MIME type with the video file. The MIME type is used by the browser to determine what type of content is being sent to the browser, by default most web servers send the wrong MIME type for .mp4 file. The correct MIME type should be &ldquo;video/mp4&rdquo; if it&rsquo;s anything else IE9 will refuse to play it.<p>If after checking the MIME type you are still having issues then [check out this blog post](http://blogs.msdn.com/b/thebeebs/archive/2011/07/20/html5-video-not-working-in-ie9-some-tips-to-debug.aspx) that gives you a method to diagnose the issues you maybe facing.
</p>