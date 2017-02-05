---
title: Using HTML5 to Jump to the search box using autofocus
authors:
- thebeebs
intro: '[Autofocus](http://dev.w3.org/html5/spec/Overview....'
types:
- shorts
categories:
- web
- html5at5
published: 2012/01/23 12:00:00
updated: 2012/01/23 13:00:00
status: archived
---

[Autofocus](http://dev.w3.org/html5/spec/Overview.html#autofocusing-a-form-control) is a HTML5 attribute that you add to input elements, which cause the browser to automatically focus on the input element when the page loads. Google and every other search engine have been doing this since the dawn of time (slight exaggeration) with JavaScript but now you can do it with some simple markup.

[<span>Demo</span> view here ](http://lab.thebeebs.co.uk/placeholder/autofocus.html)[<span>Source</span> on GitHub ](https://github.com/amiel/html5support)

Of course the autofocus attribute tag is not supported by every browser, but a [great polyfill](https://github.com/amiel/html5support) created by [Amiel Martin](https://github.com/amiel) exists which uses JavaScript to add support to unsupported browsers.

You just need to add the scripts to your document:

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:1d90cd03-9625-476d-9df4-35c366cf0fa7" class="wlWriterSmartContent">
<pre class="brush: html;"><script src="images/jquery-1.5.1-vsdoc.js" type="text/javascript"></script>
<script src="images/html5support.js" type="text/javascript"></script></pre>
</div>

Add a some script to initialise the library

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:22792cf9-5f0e-4608-a70a-98fd83492692" class="wlWriterSmartContent">
<pre class="brush: javascript;">$(document).ready(function () {           
	$.autofocus();       
});</pre>
</div>

You will then autofocus on elements with the attribute, such as:

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:eb84c7ed-da0a-49d2-8cff-257e83a51910" class="wlWriterSmartContent">
<pre class="brush: html;"> <input autofocus type="text" name="search" /></pre>
</div>