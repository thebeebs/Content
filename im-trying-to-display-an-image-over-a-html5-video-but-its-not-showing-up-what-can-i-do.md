---
title: "'I'm trying to display an image over a HTML5 video but it\u2019s not showing\
  \ up, what can I do?'"
authors:
- thebeebs
intro: I was asked this recently asked this by a develope...
types:
- shorts
categories:
- html5
- web
- html5at5
- ie9
published: 2011/12/06 12:00:00
updated: 2011/12/06 12:00:00
status: archived
---







I was asked this recently asked this by a developer attempting to place a picture over a HTML5 element. His problem was that when the image was pressed it would hide and the video would start playing. The issue that the developer was having was related to not getting his z-index incorrect. However, rather than using an image overlay on top of a video a better approach would be to use the poster attribute of the HTML5 video element. The poster element can be set to an image file and will be displayed until the video is played by the user e.g:<p><video src="images/video.mp4 " poster="videoPoster.jpg" controls></video>
</p>