---
title: How do I add video elements to a WinJS.UI.ListView
authors:
- thebeebs
intro: 'If you create a [WinJS.UI.ListView](http://msdn.mi...'
types:
- shorts
categories:
- win8at8
published: 2012/08/01 12:00:00
updated: 2012/08/01 13:00:00
status: archived
---

If you create a [WinJS.UI.ListView](http://msdn.microsoft.com/en-us/library/windows/apps/hh465496.aspx) and add interactive content to it, by default you will not be be able to interact with it. So with a video element you will not be able to press the play button or change the volume.

If you want to enable this behaviour all you have to do is add the class name **win-interactive** to the root element of the WinJS.Binding.Template that you use for the template of the WinJS.UI.ListView
  <div id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:76d234bf-4364-4a5d-ad9a-82d842872291" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px"><pre class="brush: html;"><div id="videoTemplate" data-win-control="WinJS.Binding.Template">
        <div class="win-interactive">
            <h2 data-win-bind="innerText: title"></h2>
            <video width="300" src="images/video.mp4" controls="controls" />
        </div>
</div></pre></div>