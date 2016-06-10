# Reasons your demos will fail at a conference  

We often joke that we must prey to the demo gods before talks at conferences but the reality is that there are good reasons why demos fail at conferences and they are not always obvious. I&#39;ve documented a few that have happened to me so that you can test your code and demos to ensure resilience.  

## Man in the Middle  
So you test your network and all is well , you use a network speed test and all is well. Pretty good you think. Then half way through your demo weird stuff happens. A network hang, a spinning beach ball or a circle of death. Your app just got an unexpected input. Weird you think. I just called my API and it never returns anything other than my data. Why would my app crash and burn?   
Your data code for the wireless has just expired, you used all your data on your 4G dongle or you got unauthenticated from the network. Instead of your wonderfully pristine demo JSON response. Your app is currently parsing the html of the wireless login page and because you were writing a demo you didn&#39;t test your app with unexpected input, why would you. Your only ever calling your API.  
Lesson #1 You can&#39;t guarantee that your APIs will be reachable or that DNS will be normal or point to the place you expect it too. If you are making calls to API, always test what is returned is what you&#39;re expecting, specifically if you are going to parse it. Make sure you are not just testing that a response is present but also that it&#39;s in the expected format.  

## Closed ports  
It&#39;s easy to forget that part of your demo relies on a port that isn&#39;t 80 and hotels, conference facilities and companies love to close them for security reasons.  
Lesson #2: Don&#39; trust the network. If you have anything peculier in your demo, test it in the place you are speakking on the wirless or wired network that yiou will be using.   
&nbsp;  
## Hotel Internet  
Never trust a hotels word about their wifi or wired network. They will lie. Here is a quick translation guide regarding hotel wifi.   

| What they say| What they mean  |  
|---|---|  
| The wifi always stays online even when we hold large conferences.| We have large conferences here but not developer conferences… Why don&#39;t usually have every delegate with 4 devices each, streaming and downlaoding projects and downloads.   |  
| The wifi is rock solid| The wifi is crap  |  
| The wifi is really fast| The wife is powered by isdn  |  
| I&#39;ll give you a code for premium wifi| I&#39;ll charge you more for crap isdn powered wifi  |  
| Our premium wifi is much faster than our regular wifi| We throttle the standard wifi and you can share the rest of the 10mbs capacity with our other 90 people that paid for premium wifi tonight.  |  
| Just use this code| We have employed a company to stick in some horrible web based authenticaton for our wifi and wired networks. All the ports will be loceked down, the speed will be throttled  |  

## Graphics drivers  
Some projectors are weird I&#39;ve know some that only work a 50mz and weird resolutions. The challenge this presents is that your app dosen&#39;t work well in the specific reolution… Or worse, the new reolution is buggy with your graphics card and all of a sudden weird graphic glitches start occuring, like hardware acelerated animations break down. The weirdedst issue that happened to me recently is that when my surface has hyper v switched on and I project to certain projectors videos lose audio and start play at 1/4 speed.  
&nbsp;  
Lesson 3# Conference projectors will stress your graphic card, try and test your demos on the projector that is going to be used. If that is not possible ask the organiser what the resoultion of the projector is going to be so that you can ensure that your demos work well at the resolution… Also downalod any utilities that your graphic card manafacturere makes. These extended utilies often have more granualr control of the graphics cards so you can fine tune it for the weirdest of projectors… If you want to ensure that you are always going to be able to project by a decimator. It will convert what ever your out oput to whatever the sceens can take. It&#39;s a full proof way of dealing with odd hdmi requirements at venues. [http://decimator.com/Products/MiniConverters/MD-HX/MD-HX.html][1]  

## Different types of traffic  
Net Neutrality [https://en.wikipedia.org/wiki/Net_neutrality][2] isn&#39;t a thing when it comes to conference Wifi. It&#39;s very common for WiFI companies to proritise cetrain types of traffic. If been to venues where social media traffic is proritiesd. So the interent can apear to be fast but as soon as you want to download something or make a WEbRTC call all of a suddent the network throttles you.   
Lesson 4# Just because some sites load fast of conference wifi dosen&#39;t mean all sites will load fast, so also check your demos rather than just using a speed test that pings google.com.  

## Air Traffic  
To over come prolems with wireless I often see speakers use their own WIFI, it might be a dongle, a phone or it might be a little router that plugs into a network port and then creates a persoanl wifi hotspot. This is the one I have: [http://www.maplin.co.uk/p/tp-link-tl-wr710n-pocket-150mbps-wi-fi-universal-routeraccess-pointrepeater-n34ql][3]   
This is often a great solution but in busy areas problems often arsie. I fond this particaully in central london. The thing is, your little wifi hub is competing with 100s of other wirelsss hubs some of them hot sports in your audience some of the them industral stregth wifi installations. The sheer number of networks leeds to saturation and it can be very difficult to get a solid wireless connection even if the hub is very close. The good thing about the device I have above is that I can use the wireless of devices that only support wifi (Pis and IOT boards) whilst simltatiously connecting my Surface to a wired connection.   

## Hard Wired Networks  
If ever I&#39;m speaking at an event one of my first 5 questions is: Can I have a hard wired connection. Whilst this solves many of the common issues with Wifi, be warned that venues often set there networks up so that you are not able to add a hub. So if you need to connect more than one device you may run into issues and have to connect one to the wifi, even if you&#39;ve had the forsight to bring your own hub.  

[1]: http://decimator.com/Products/MiniConverters/MD-HX/MD-HX.html
[2]: https://en.wikipedia.org/wiki/Net_neutrality
[3]: http://www.maplin.co.uk/p/tp-link-tl-wr710n-pocket-150mbps-wi-fi-universal-routeraccess-pointrepeater-n34ql