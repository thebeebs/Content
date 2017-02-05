---
title: Google Drops H.264 codec support
authors:
- thebeebs
intro: 'Video suport in the worlds most popular browser'
types:
- shorts
categories:
- html5
published: 2011/01/11 12:00:00
updated: 2011/01/11 13:00:00
status: archived
---

![Google Chrome Logo](images/0383.image_1D3F089E.png "Google Chrome Logo")Now I will be honest, I wasn't expecting this.

Google have today decided that they will [remove support for the video codec](http://blog.chromium.org/2011/01/html-video-codec-support-in-chrome.html) H.264 from their Chrome browser in the next couple of months. H.264 is the codec that's used currently in Flash, PS3, Xbox and even my trusty little flip cam.

More importantly for HTML5 it's also the codec that's used by Safari, that means iPads and iPhones. 

Going forward Chrome will only support WebM(V8) and Theora.

IE9 Beta currently [supports V8](http://windowsteamblog.com/windows/b/bloggingwindows/archive/2010/05/19/another-follow-up-on-html5-video-in-ie9.aspx) and H.264 but not Theora .

Safari currently only supports H.264

There are currently 3 main codecs used with HTML 5 video:

*   H.264 - is patent-encumbered meaning that people that build encoders or decoders need to pay a licence fee to MPEG LA.
*   VP8 - is open source and was released by Google although the [licence situation is a little murky](http://blog.internetnews.com/skerner/2010/05/is-vp8-open-source.html)
*   Theora - is distributed without licensing fees freely available, but is seen by many as having inferior playback quality.  

&#160;

The current state of browser support looks something like this:

   <table border="0" cellspacing="0" cellpadding="2" width="486"><tbody>       <tr>         <td valign="top" width="99">&#160;</td>          <td valign="top" width="111">H.264</td>          <td valign="top" width="156">VP8</td>          <td valign="top" width="118">Theora</td>       </tr>        <tr>         <td valign="top" width="99">IE9 Beta</td>          <td valign="top" width="111">Yes</td>          <td valign="top" width="156">Yes (if codec installed)</td>          <td valign="top" width="118">No</td>       </tr>        <tr>         <td valign="top" width="99">Chrome</td>          <td valign="top" width="111">No</td>          <td valign="top" width="156">Yes</td>          <td valign="top" width="118">Yes</td>       </tr>        <tr>         <td valign="top" width="99">Safari</td>          <td valign="top" width="111">Yes</td>          <td valign="top" width="156">No</td>          <td valign="top" width="118">No</td>       </tr>        <tr>         <td valign="top" width="99">FireFox</td>          <td valign="top" width="111">No</td>          <td valign="top" width="156">Yes</td>          <td valign="top" width="118">Yes</td>       </tr>        <tr>         <td valign="top" width="99">Opera</td>          <td valign="top" width="111">Depends on OS</td>          <td valign="top" width="156">Yes</td>          <td valign="top" width="118">Yes</td>       </tr>     </tbody></table> 

&#160;

## How can you tell if a browser supports a particular codec?

This position switch by Google is a great example of why feature detection is so important when coding HTML5. You can't rely on browser sniffing as browser vendors can change the HTML5 features they implement at any time.

Modernizer is a great JavaScript library which will tell you if a visitors browser supports a particular codec. I talked about it earlier in the [month here](http://ubelly.com/2010/12/what-are-you-waiting-for-use-html5-and-css3-today/).

## How do you encode VP8?

![thebeebs and Robert Reinhard after his talk at FOTB](images/8371.DSC_0179_7A9ACA22.jpg "thebeebs and Robert Reinhard after his talk at FOTB")

I had a quick look on my machine and the net to find software to encode WebM and didn't find much, after asking [Robert Reinhard](https://twitter.com/flashfreaker) for a good tool (In regard to video encoding: if he doesn't know about it, it's not worth knowing) he recommended his video encoding service [videoRx.com](http://videorx.com/) (of course he would)&#160; so If you need to&#160; encode alot of video to support Chrome, it might be worth paying him a visit.