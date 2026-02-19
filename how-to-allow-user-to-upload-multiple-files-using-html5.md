---
title: How to allow user to upload multiple files using HTML5
authors:
- thebeebs
intro: HTML5 contains the a new feature (I say new, Opera...
types:
- shorts
categories:
- web
- html5at5
published: 2012/01/04 12:00:00
updated: 2012/01/04 12:00:00
status: archived
---
















HTML5 contains the a new feature (I say new, Opera has had it since 2006) that allows you to upload multiple files.
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:72c1d286-2547-44b8-a9d9-f6d7da7db3c4" class="wlWriterEditableSmartContent"><pre class="brush: html;"> <input type="file" multiple /></pre></div>

By default this allows the user to select more than one file. The file choosing is handled by the operating system and so the exact experience varies considerably depending on the underlying operating system.

Once the files are selected the browser then renders various UI to signify the files that have been selected. 

For browsers that don't support the multiple attribute it's simply ignored and the user can just select one image.

## Other related technologies

[File API](http://msdn.microsoft.com/library/hh673546.aspx#File_API), [Drag and Drop](http://msdn.microsoft.com/library/hh673546.aspx#Drag_and_Drop_APIs) and the [Progress control](http://www.w3.org/TR/html5/the-button-element.html#the-progress-element) can all be combined to make it possible to write applications that accept files dragged in from the desktop which have customised UI and even enable you to modify the image size before you upload the file to the server. Using [Cross-Site Upload](http://msdn.microsoft.com/en-us/library/hh673569(v=vs.85).aspx#cors_xhr) you could even write an application that uploads to another website, as [this IE10 demo shows](http://ie.microsoft.com/testdrive/HTML5/CORSUpload/).

## How to implement

Of course you can write your own code to handle multiple file upload, drag and drop etc but if you are looking for a quick solution then you could do far worse than using [http://plupload.com/](http://plupload.com/ "http://plupload.com/") This library allows you to have an uploader that will use what ever technology the browser supports from HTML5, HTML4, Flash, Silverlight, BrowserPlus or the now defunct Google Gears.

I've tested in IE10 (which now supports multiple upload, drag drop and the file upload) and the library worked without any modifications. 

<legend></legend>