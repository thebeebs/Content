---
title: How to do a Count in IndexedDB
authors:
- thebeebs
intro: I had a question from a customer today where he as...
types:
- shorts
categories:
- indexeddb
- internet-explorer
published: 2011/11/08 12:00:00
updated: 2011/11/08 12:00:00
status: archived
---







I had a question from a customer today where he asked How can I count the records in an IndexedDb database.

The current [IndexedDB prototype](http://html5labs.interoperabilitybridges.com/prototypes/indexeddb/indexeddb/info) for IE8 and IE9 and the IE10 platform preview 3 do not include a count() implementation

The latest Version (from April) of the [IndexedDb working draft](http://www.w3.org/TR/IndexedDB/) over at the W3C doesn't include a count property on the objectStore object. 

However the he latest version of the [editors draft](http://dvcs.w3.org/hg/IndexedDB/raw-file/tip/Overview.html) does. After a little bit of reading it appears that the proposed method for performing a count with the new count would be along the lines of:
 <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:25ea92ea-a9c7-40f2-bc07-33eba1f8e5cc" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">  var keyRange = IDBKeyRange.lowerBound(0);
  var theCount = store.count(keyRange);</pre></div>

As far as I know no browser vendor yet supports this and so you'd need to do something along the lines of:
<pre><div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:133bf8c0-0d22-4699-89b0-b4f6a9b90ab7" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">var keyRange = IDBKeyRange.lowerBound(0);
var cursorRequest = store.openCursor(keyRange);
var count = 0;

cursorRequest.onsuccess = function(e) {        
	var result = e.target.result;
	result ? ++count && result.continue() : console.log(count);
 };
</pre></div></pre><pre></pre>