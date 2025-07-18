---
title: Reasons your demos will fail at a conference
authors:
- thebeebs
intro: I often tell people that I pray to the demo gods before a talk, but the reality
  is, most, of the reasons demos fail can be avoided without the resorting to ritual
  sacrifice.
types:
- shorts
- secondheadline
categories:
- personal
- popular
published: 2016/01/01 12:00:00
updated: 2017/02/07 12:00:00
---
















I often tell people that I pray to the demo gods before a talk, but the reality is, most, of the reasons demos fail can be avoided without the resorting to ritual sacrifice. I&#39;ve documented below a few issues that have tripped me up in the past in the hope that you can avoid them in the future. 

# # Man in the Middle  
**Situation:**  During a demo often half way through a session you get a network hang and exception saying your app got an unexpected input. Weird you think, this worked before. I just called my API and it never returns anything other than my data. Why would my app crash and burn?

**Cause:**  Your data code for the wireless has just expired, you used all your data on your 4G dongle or you got unauthenticated from the network. Either way your app is currently parsing the html of the wireless login page rather than the JSON response that it expected from the API End point.

**Lesson:**  You can&#39;t guarantee that your APIs will be reachable or that DNS will be normal or point to the place you expect it too. If you are making calls to API, always test what is returned is what you&#39;re expecting, specifically if you are going to parse it. Make sure you are not just testing that a response is present but also that it&#39;s in the expected format. If you are using a Pay as you go dongle, make sure you have enough credit on it before you start your talk.  

# # Closed ports  
**Situation** : You quickly remote into a Virtual Machine you have prepared for a demo and it won&#39;t connect.

**Cause:** It&#39;s easy to forget that part of your demo relies on ports other than port 80. Hotels, conference facilities and companies love to close everything but port 80 for security reasons.

**Lesson:**  Don&#39; trust the network. If you have anything peculiar in your demo, test it in the place you are speaking on the wireless or wired network that you will be using. Never trust event staff to know about closed ports on the firewall.  

# # Hotel Internet  
Never trust a hotels word about their Wi-Fi or wired network. They will lie. Here is a quick translation guide regarding hotel Wi-Fi.   

<table><thead>
<tr>
<th>What they say</th>
<th>What they mean</th>
</tr>
</thead><tbody>
<tr>
<td>The Wi-Fi always stays online even when we hold large conferences.</td>
<td>We have large conferences here, but not developer conferences… we don't usually have every delegate here with 4 devices each, streaming and downloading projects and SDKs.</td>
</tr>
<tr>
<td>The Wi-Fi is rock solid.</td>
<td>The Wi-Fi is crap.</td>
</tr>
<tr>
<td>The Wi-Fi is really fast.</td>
<td>The Wi-Fi I is powered by ISDN.</td>
</tr>
<tr>
<td>I'll give you a code for premium Wi-Fi.</td>
<td>I'll charge you more for crap ISDN powered Wi-Fi.</td>
</tr>
<tr>
<td>Our premium Wi-Fi is much faster than our regular Wi-Fi.</td>
<td>We throttle the standard Wi-Fi and you can share the rest of the 10mbs capacity with our other 90 people that paid for premium Wi-Fi today.</td>
</tr>
<tr>
<td>Just use this code.</td>
<td>We have employed a company to stick in some horrible web based authentication for our Wi-Fi and wired networks. All the ports will be locked down, the speed will be throttled</td>
</tr>
</tbody></table>

# # Graphics drivers  
**Situation:**  You load your demo and buttons are off the screen. It&#39;s animated intro is jittery and then your computer (Beach Balls for 20 minutes - Mac, or Blue Screens - Windows)

**Cause:**  Some projectors are weird. I&#39;ve know some that only work at weird refresh rates and obscure resolutions. The challenge this presents is that your app doesn&#39;t work well in the specific resolution… Or worse, the new resolution is buggy with your graphics card and all of a sudden graphic glitches start occurring, like hardware accelerated animations break down. The weirdest issue that happened to me recently is that when my surface has Hyper-V switched on and I project to certain projectors videos lose audio and start playing at 1/4 speed.  

**Lesson:**  Conference projectors will stress your graphic card, try and test your demos on the projector that is going to be used. If that is not possible ask the organiser what the resolution of the projector is going to be so that you can ensure that your demos work well at that resolution. Also download any utilities that your graphic card manufacturer makes. These extended utilises often have more granular control of the graphics cards so you can fine tune it for the weirdest of projectors.  
 If you want to ensure that you are always going to be able to project buy a [decimator][1]: It will convert whatever you&#39;re output is to whatever the screens can take. It&#39;s a full proof way of dealing with odd HDMI requirements at venues.   
P.S.… Always bring a HDMI/DisplayPort to VGA adapter just in case the venue still rocks the analogue.  

# # Different types of traffic  
**Situation:**  Certain parts of the demo are fast other parts are really painfully slow. Which is odd because the internet in the venue is rock solid.

**Cause:** [Net Neutrality][2] isn&#39;t a thing when it comes to conference internet. It&#39;s very common for AV companies to prioritise certain types of traffic. I have been to venues where social media traffic is prioritised. So the internet can appear to be fast but as soon as you want to download something or make a WebRTC call all of a sudden the network throttles you.   

**Lesson:**  Just because some sites load fast of conference Wi-Fi doesn&#39;t mean all sites will load fast, so also check your demos rather than just using a speed test that pings google.com.  

# # Air Traffic  
**Situation:**  You are struggling to connect to your own personal WiFi hot spot.  

**Cause** : To overcome problems with wireless speakers often use their own Wi-Fi , it might be a dongle, a phone or it might be a little router that plugs into a hard wired network port and then creates a personal Wi-Fi hotspot. [This is the one I][3] have. In busy areas like Central London problems often arise because your little Wi-Fi hub is competing with 100s of other wireless hubs some of them hot sports in your audience some of the them industrial strength Wi-Fi installations. Bigger veues will object to you using your own WiFi hubs ( I believe there is some law in the UK on how many wireless devices can be used at one time in conference venues without obtaining special licences)  
The sheer number of networks leads to saturation and it can be very difficult to get a solid wireless connection even if the hub is very close. The good thing about the device I have above is that I can use the wireless of devices that only support Wi-Fi (Pis and IOT boards) whilst simultaneously connecting my Surface to a wired connection.   

**Lesson** : Always request a hard wired connection wherever you are speaking.  

# # Have Back Up Videos  
My Final recommendation is that you have video backups of all your demos. I tend to include them in my slide decks as hidden Slides and then If I have an issue did demo: I pinch to zoom in PowerPoint (If you don&#39;t have a touch screen then right click the deck and choose: &quot;See All Slides&quot;) so that it goes to the Slide View and then You can select any slide to show (even hidden slides). This also has the added benefit of videos of your demos being available for delegates if they wish to view your slides later.  

[1]: http://decimator.com/Products/MiniConverters/MD-HX/MD-HX.html
[2]: https://en.wikipedia.org/wiki/Net_neutrality
[3]: http://www.maplin.co.uk/p/tp-link-tl-wr710n-pocket-150mbps-wi-fi-universal-routeraccess-pointrepeater-n34ql
