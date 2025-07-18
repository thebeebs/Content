---
title: How to write a feature detection script in JavaScript
authors:
- thebeebs
intro: When I use a HTML5 feature in my website I will of...
types:
- shorts
categories:
- web
- html5at5
published: 2012/01/25 12:00:00
updated: 2012/01/25 12:00:00
status: archived
---
















When I use a HTML5 feature in my website I will often test the browser that is visiting to see if it is capable of using the feature. If it is not capable I will Fall-back to something that the browser is a capable of supporting. In practice, I use [modernizr](http://www.modernizr.com/) for this purpose, however, there maybe instances where you want to write your own tests.

In most instances writing these feature detection tests is quite straight forward.

The example below tests to see if a browser is capable of supporting HTML5 Audio. 
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:e57cbf75-1201-4844-b714-06fd1605ac81" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">return !!document.createElement('audio').canPlayType;</pre></div>

If the browser is able to create the audio element and the canPlayType property is true, this test will return true. If the browser is unable to create the audio element the test will fail.

Mark Pilgrim has a great resource that shows you how to test almost any&#160; [HTML5 feature](http://diveintohtml5.info/everything.html).

To use the code above I might create my own little library and call it myTests. I add the property audio and assign a self executing function (this basically means that the function runs as soon as it is created) and then the returned value is saved into the variable audio. 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:f96478ce-1a92-482c-a752-0bb4001e8acf" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">  var myTests = {
            audio: (function () {
                return !!document.createElement('audio').canPlayType;
            }())
        }</pre></div>

To test audio I can then just call

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:94894d18-0cd2-4f70-9c6c-f9c21b80f0b8" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">myTests.audio</pre></div>

So for example the following code would use my test when the browser loads:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:3fa0add9-61aa-4a06-8ecb-a36119b52c75" class="wlWriterEditableSmartContent"><pre class="brush: javascript;"> window.onload = function () {
            if (myTests.audio) {
                alert("Your browser supports Audio")
            }
            else {
                alert("Your browser dosen't support Audio")
            }
        }</pre></div>

[<span>Demo</span> view here ](http://lab.thebeebs.co.uk/featuredetection/audio.html)

# # What if I want to use Modernizr and my own custom tests?

Modernizr has a rather nice feature that allows you to add custom tests to the library.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:973f4678-6e77-47a2-a78f-12b2fdaa0000" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">Modernizr.addTest("myAudioTest", function(){  
	 return !!document.createElement('audio').canPlayType;
});
</pre></div>

You can then just call it like this (note that even though we added the test name in capitals Modernizr lowercases the property name) :

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:4efd64e2-3808-4eee-b974-6c82098e37bf" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">Modernizr.myaudiotest</pre></div>

So the demo above would look like this:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:957ca45b-81d8-4722-a755-26ca05b62881" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">window.onload = function () {
            if (Modernizr.myaudiotest) {
                alert("Your browser supports Audio")
            }
            else {
                alert("Your browser dosen't support Audio")
            }
        }</pre></div>

[<span>Demo</span> view here ](http://lab.thebeebs.co.uk/featuredetection/audioTest.html)