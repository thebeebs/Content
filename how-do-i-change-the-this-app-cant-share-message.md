---
title: How do I change the “This app can’t share” message?
authors:
- thebeebs
intro: 'If you build a windows 8 application and don't imp...'
types:
- shorts
categories:
- win8at8
published: 2012/08/02 12:00:00
updated: 2012/08/02 13:00:00
status: archived
---

If you build a windows 8 application and don't implement sharing on a specific page, when a user presses the Windows 8 share charm the default text that is displayed says "This app can't share" it maybe the case that other pages can share or that you plan to add sharing into a future version so changing this text is useful to give the user more information. For example you might want to say "You can't share right now, select a news story and then try again".

To do this we [wire up the share contract as we normal would](http://msdn.microsoft.com/en-us/library/windows/apps/hh758313.aspx), but rather than providing a dataTransfer object we set the failWithDisplayText.
  <div id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:72c8e7c4-48ca-4ad6-9651-4e4ad2be58bf" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px"><pre class="brush: javascript;">var dataTransferManager = Windows.ApplicationModel.DataTransfer.DataTransferManager.getForCurrentView();
dataTransferManager.addEventListener("datarequested", dataRequested);

function dataRequested(e) {
    var request = e.request;
    request.failWithDisplayText("Select a news story and then try again");
}</pre></div>