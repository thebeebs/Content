---
title: I have a HTML5 video that’s over 30 minutes long, I want users to be able to skip to specific sections of the video without having to wait for the entire video to download, is it possible?
authors:
- thebeebs
intro: 'Yes but you must make sure you are serving the vid...'
types:
- shorts
categories:
- web
- html5at5
published: 2011/12/09 12:00:00
updated: 2011/12/09 13:00:00
status: archived
---

Yes but you must make sure you are serving the video from a HTTP 1.1-compatible web server. This means that the browser can request specific chunks of the video without downloading the whole video. If you don&rsquo;t have a HTTP 1.1 compliant web server then you need to encode your video with key index frames in the file and not at the end so that seek-ahead works. The "H.264 YouTube HD" profile in Expression Encoder 4 Pro does this.<p>It&rsquo;s also important to remember that if the video file is gzipped, seeking won't work. Since, with most codecs, the video/audio data is already compressed, gzip/deflate won't save you much bandwidth anyway so it&rsquo;s probably best to switch it off.
</p>