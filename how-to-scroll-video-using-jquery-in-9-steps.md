---
title: How to Scroll Video using JQuery in 9 steps
authors:
- thebeebs
intro: 'In the following post I'm going to show you how yo...'
types:
- shorts
categories:
- javascript
published: 2010/11/02 12:00:00
updated: 2010/11/02 13:00:00
status: archived
---

In the following post I'm going to show you how you can use the YouTube API and a little JQuery to recreate the scrolling video effect seen on [http://www.agirlstory.org](http://www.agirlstory.org)

You can see the demo I have created here: [http://bit.ly/9hYU0N](http://bit.ly/9hYU0N "http://bit.ly/9hYU0N")

For this demo I'm going to set up 2 videos and scroll between to two of them, but you can use this concept to scroll as many videos as you like.

# Step 1

Add the reference to the YouTube API code that's hosted by our good friends at Google.
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:c9013f30-e57a-43a3-a3be-5a71b51c6037" class="wlWriterEditableSmartContent"><pre style=" width: 841px; height: 106px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #008080;">1</span> <span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="http://www.google.com/jsapi"</span><span style="color: #FF0000;"> type</span><span style="color: #0000FF;">="text/javascript"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #008080;">2</span> <span style="color: #000000;"></span><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">type</span><span style="color: #0000FF;">="text/javascript"</span><span style="color: #0000FF;">></span><span style="background-color: #F5F5F5; color: #000000;">
</span><span style="color: #008080;">3</span> <span style="background-color: #F5F5F5; color: #000000;">    google.load(</span><span style="background-color: #F5F5F5; color: #000000;">"</span><span style="background-color: #F5F5F5; color: #000000;">swfobject</span><span style="background-color: #F5F5F5; color: #000000;">"</span><span style="background-color: #F5F5F5; color: #000000;">, </span><span style="background-color: #F5F5F5; color: #000000;">"</span><span style="background-color: #F5F5F5; color: #000000;">2.1</span><span style="background-color: #F5F5F5; color: #000000;">"</span><span style="background-color: #F5F5F5; color: #000000;">);
</span><span style="color: #008080;">4</span> <span style="background-color: #F5F5F5; color: #000000;"></span><span style="color: #0000FF;"></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

# Step 2

Add a reference to the JQuery Library, I've added the version hosted by Microsoft

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:0649dbcd-9699-4214-933d-206a40718a67" class="wlWriterEditableSmartContent"><pre style=" width: 919px; height: 69px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #008080;">1</span> <span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="http://ajax.microsoft.com/ajax/jquery/jquery-1.4.2.min.js"</span><span style="color: #FF0000;"> 
</span><span style="color: #008080;">2</span> <span style="color: #FF0000;">language</span><span style="color: #0000FF;">="javascript"</span><span style="color: #FF0000;"> type</span><span style="color: #0000FF;">="text/javascript"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

# Step 3

Create some HTML layers where we can load the videos into later. I have named the video elements uniquely so that I can reference them later. I have also wrapped them in a containing Div layer so that I can scroll them them easily and using the JQuery animation function.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:2b09fd88-cbd6-42b2-8eb7-b5c3b3da43db" class="wlWriterEditableSmartContent"><pre style=" width: 391px; height: 107px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #008080;">1</span> <span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">id</span><span style="color: #0000FF;">="videoContainer"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #008080;">2</span> <span style="color: #000000;">    </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">id</span><span style="color: #0000FF;">="video1"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #008080;">3</span> <span style="color: #000000;">    </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">id</span><span style="color: #0000FF;">="video2"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #008080;">4</span> <span style="color: #000000;"></span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

# Step 4

Create a function called loadVideoPlayers that will Load the video files into objects in HTML objects that we created in Step 3

  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:547048da-f9d2-44db-9410-f0ef95446c4c" class="wlWriterEditableSmartContent"><pre style=" width: 652px; height: 509px;background-color:White;overflow: scroll;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #008080;"> 1</span> <span style="color: #0000FF;">function</span><span style="color: #000000;"> loadVideoPlayers() {
</span><span style="color: #008080;"> 2</span> <span style="color: #000000;">        </span><span style="color: #008000;">//</span><span style="color: #008000;"> The videoID of the video to load from youtube. You can generally find this in the URL</span><span style="color: #008000;">
</span><span style="color: #008080;"> 3</span> <span style="color: #008000;"></span><span style="color: #000000;">        </span><span style="color: #008000;">//</span><span style="color: #008000;"> when you are watching a video on youtube</span><span style="color: #008000;">
</span><span style="color: #008080;"> 4</span> <span style="color: #008000;"></span><span style="color: #000000;">        </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> videoID </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #000000;">"</span><span style="color: #000000;">UO5v38cZ9cw</span><span style="color: #000000;">"</span><span style="color: #000000;">
</span><span style="color: #008080;"> 5</span> <span style="color: #000000;">        </span><span style="color: #008000;">//</span><span style="color: #008000;"> Because the SWF is calling JavaScript Cross Domain you will need to set this</span><span style="color: #008000;">
</span><span style="color: #008080;"> 6</span> <span style="color: #008000;"></span><span style="color: #000000;">        </span><span style="color: #008000;">//</span><span style="color: #008000;"> otherwise it won't have permission to raise events like onYouTubePlayerReady</span><span style="color: #008000;">
</span><span style="color: #008080;"> 7</span> <span style="color: #008000;"></span><span style="color: #000000;">        </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> params </span><span style="color: #000000;">=</span><span style="color: #000000;"> { allowScriptAccess: </span><span style="color: #000000;">"</span><span style="color: #000000;">always</span><span style="color: #000000;">"</span><span style="color: #000000;"> };
</span><span style="color: #008080;"> 8</span> <span style="color: #000000;">        </span><span style="color: #008000;">//</span><span style="color: #008000;"> This is the Id that the Object will have when created in the DOM</span><span style="color: #008000;">
</span><span style="color: #008080;"> 9</span> <span style="color: #008000;"></span><span style="color: #000000;">        </span><span style="color: #008000;">//</span><span style="color: #008000;"> we will use this to obtain a reference to the object later using $("#player1").get(0);</span><span style="color: #008000;">
</span><span style="color: #008080;">10</span> <span style="color: #008000;"></span><span style="color: #000000;">        </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> atts </span><span style="color: #000000;">=</span><span style="color: #000000;"> { id: </span><span style="color: #000000;">"</span><span style="color: #000000;">player1</span><span style="color: #000000;">"</span><span style="color: #000000;"> };
</span><span style="color: #008080;">11</span> <span style="color: #000000;">        </span><span style="color: #008000;">//</span><span style="color: #008000;"> We can then Embed using googles swfobject</span><span style="color: #008000;">
</span><span style="color: #008080;">12</span> <span style="color: #008000;"></span><span style="color: #000000;">        swfobject.embedSWF(</span><span style="color: #000000;">"</span><span style="color: #000000;">https://www.youtube.com/v/</span><span style="color: #000000;">"</span><span style="color: #000000;"> </span><span style="color: #000000;">+</span><span style="color: #000000;"> videoID </span><span style="color: #000000;">+</span><span style="color: #000000;">
</span><span style="color: #008080;">13</span> <span style="color: #000000;">                    </span><span style="color: #000000;">"</span><span style="color: #000000;">&enablejsapi=1&playerapiid=player1</span><span style="color: #000000;">"</span><span style="color: #000000;">,
</span><span style="color: #008080;">14</span> <span style="color: #000000;">                    </span><span style="color: #000000;">"</span><span style="color: #000000;">video1</span><span style="color: #000000;">"</span><span style="color: #000000;">, </span><span style="color: #000000;">"</span><span style="color: #000000;">480</span><span style="color: #000000;">"</span><span style="color: #000000;">, </span><span style="color: #000000;">"</span><span style="color: #000000;">295</span><span style="color: #000000;">"</span><span style="color: #000000;">, </span><span style="color: #000000;">"</span><span style="color: #000000;">8</span><span style="color: #000000;">"</span><span style="color: #000000;">, </span><span style="color: #0000FF;">null</span><span style="color: #000000;">, </span><span style="color: #0000FF;">null</span><span style="color: #000000;">, params, atts);
</span><span style="color: #008080;">15</span> <span style="color: #000000;">
</span><span style="color: #008080;">16</span> <span style="color: #000000;">        </span><span style="color: #008000;">//</span><span style="color: #008000;"> Now do it all again with a different player</span><span style="color: #008000;">
</span><span style="color: #008080;">17</span> <span style="color: #008000;"></span><span style="color: #000000;">        </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> videoID2 </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #000000;">"</span><span style="color: #000000;">g3kHe8wlGh4</span><span style="color: #000000;">"</span><span style="color: #000000;">
</span><span style="color: #008080;">18</span> <span style="color: #000000;">        </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> params </span><span style="color: #000000;">=</span><span style="color: #000000;"> { allowScriptAccess: </span><span style="color: #000000;">"</span><span style="color: #000000;">always</span><span style="color: #000000;">"</span><span style="color: #000000;"> };
</span><span style="color: #008080;">19</span> <span style="color: #000000;">        </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> atts </span><span style="color: #000000;">=</span><span style="color: #000000;"> { id: </span><span style="color: #000000;">"</span><span style="color: #000000;">player2</span><span style="color: #000000;">"</span><span style="color: #000000;"> };
</span><span style="color: #008080;">20</span> <span style="color: #000000;">        swfobject.embedSWF(</span><span style="color: #000000;">"</span><span style="color: #000000;">https://www.youtube.com/v/</span><span style="color: #000000;">"</span><span style="color: #000000;"> </span><span style="color: #000000;">+</span><span style="color: #000000;"> videoID2 </span><span style="color: #000000;">+</span><span style="color: #000000;">
</span><span style="color: #008080;">21</span> <span style="color: #000000;">                    </span><span style="color: #000000;">"</span><span style="color: #000000;">&enablejsapi=1&playerapiid=player2</span><span style="color: #000000;">"</span><span style="color: #000000;">,
</span><span style="color: #008080;">22</span> <span style="color: #000000;">                    </span><span style="color: #000000;">"</span><span style="color: #000000;">video2</span><span style="color: #000000;">"</span><span style="color: #000000;">, </span><span style="color: #000000;">"</span><span style="color: #000000;">480</span><span style="color: #000000;">"</span><span style="color: #000000;">, </span><span style="color: #000000;">"</span><span style="color: #000000;">295</span><span style="color: #000000;">"</span><span style="color: #000000;">, </span><span style="color: #000000;">"</span><span style="color: #000000;">8</span><span style="color: #000000;">"</span><span style="color: #000000;">, </span><span style="color: #0000FF;">null</span><span style="color: #000000;">, </span><span style="color: #0000FF;">null</span><span style="color: #000000;">, params, atts);
</span><span style="color: #008080;">23</span> <span style="color: #000000;">    }</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

# Step 5

When the page loads we will need to call loadVideoPlayers you can use JQuery to do this easily:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:f284b709-c536-481a-9b7d-899c323ff78d" class="wlWriterEditableSmartContent"><pre style=" width: 419px; height: 87px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #008080;">1</span> <span style="color: #000000;">$(document).ready(</span><span style="color: #0000FF;">function</span><span style="color: #000000;"> () {
</span><span style="color: #008080;">2</span> <span style="color: #000000;">            loadVideoPlayers();
</span><span style="color: #008080;">3</span> <span style="color: #000000;">        });</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

# Step 6

When the video player is loaded and ready to roll the SWF object will call a specific function on your page that must be called onYouTubePlayerReady. I use this function to create an object reference and then call either UpdatePlayerInfo or UpdatePlayerInfo2.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:eb3aaf43-4edf-490e-8181-67ff63f18b73" class="wlWriterEditableSmartContent"><pre style=" width: 834px; height: 279px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #008080;"> 1</span> <span style="color: #008000;">//</span><span style="color: #008000;"> This function is automatically called by the player once it loads</span><span style="color: #008000;">
</span><span style="color: #008080;"> 2</span> <span style="color: #008000;"></span><span style="color: #0000FF;">function</span><span style="color: #000000;"> onYouTubePlayerReady(playerId) {
</span><span style="color: #008080;"> 3</span> <span style="color: #000000;">    </span><span style="color: #008000;">//</span><span style="color: #008000;"> The player ID comes from the "playerapiid" parameter that was set</span><span style="color: #008000;">
</span><span style="color: #008080;"> 4</span> <span style="color: #008000;"></span><span style="color: #000000;">    </span><span style="color: #008000;">//</span><span style="color: #008000;"> when the embedded player was loaded</span><span style="color: #008000;">
</span><span style="color: #008080;"> 5</span> <span style="color: #008000;"></span><span style="color: #000000;">    </span><span style="color: #0000FF;">if</span><span style="color: #000000;"> (playerId </span><span style="color: #000000;">==</span><span style="color: #000000;"> </span><span style="color: #000000;">"</span><span style="color: #000000;">player1</span><span style="color: #000000;">"</span><span style="color: #000000;">) {
</span><span style="color: #008080;"> 6</span> <span style="color: #000000;">        objVideo1 </span><span style="color: #000000;">=</span><span style="color: #000000;"> $(</span><span style="color: #000000;">"</span><span style="color: #000000;">#player1</span><span style="color: #000000;">"</span><span style="color: #000000;">).get(</span><span style="color: #000000;">0</span><span style="color: #000000;">);                
</span><span style="color: #008080;"> 7</span> <span style="color: #000000;">        updatePlayerInfo();
</span><span style="color: #008080;"> 8</span> <span style="color: #000000;">    }
</span><span style="color: #008080;"> 9</span> <span style="color: #000000;">    </span><span style="color: #0000FF;">else</span><span style="color: #000000;"> </span><span style="color: #0000FF;">if</span><span style="color: #000000;"> (playerId </span><span style="color: #000000;">==</span><span style="color: #000000;"> </span><span style="color: #000000;">"</span><span style="color: #000000;">player2</span><span style="color: #000000;">"</span><span style="color: #000000;">) {
</span><span style="color: #008080;">10</span> <span style="color: #000000;">        objVideo2 </span><span style="color: #000000;">=</span><span style="color: #000000;"> $(</span><span style="color: #000000;">"</span><span style="color: #000000;">#player2</span><span style="color: #000000;">"</span><span style="color: #000000;">).get(</span><span style="color: #000000;">0</span><span style="color: #000000;">);                
</span><span style="color: #008080;">11</span> <span style="color: #000000;">        updatePlayerInfo2();
</span><span style="color: #008080;">12</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">13</span> <span style="color: #000000;">}</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

# Step 7

The two updatePlayer nfo functions are called when the Video is ready to play and then every 250 milliseconds. These functions are where all your logic for controlling the video should go. In my simple example I have said that if the Players current position is greater than x seconds pause the current video and move on to the next one. I then scroll the Video using either the scrollToVideo1 or scrollToVideo2 functions.

&#160;

  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:afb7fa96-26cd-4ade-8c55-959df06d92a3" class="wlWriterEditableSmartContent"><pre style=" width: 631px; height: 580px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #008080;"> 1</span> <span style="color: #008000;">//</span><span style="color: #008000;"> Display information about the current state of the player</span><span style="color: #008000;">
</span><span style="color: #008080;"> 2</span> <span style="color: #008000;"></span><span style="color: #0000FF;">function</span><span style="color: #000000;"> updatePlayerInfo() {
</span><span style="color: #008080;"> 3</span> <span style="color: #000000;">    </span><span style="color: #0000FF;">if</span><span style="color: #000000;"> (objVideo1 </span><span style="color: #000000;">&&</span><span style="color: #000000;"> objVideo1.getPlayerState() </span><span style="color: #000000;">==</span><span style="color: #000000;"> </span><span style="color: #000000;">1</span><span style="color: #000000;"> </span><span style="color: #000000;">&&</span><span style="color: #000000;"> objVideo1.getDuration) {
</span><span style="color: #008080;"> 4</span> <span style="color: #000000;">        </span><span style="color: #0000FF;">if</span><span style="color: #000000;"> (objVideo1.getCurrentTime() </span><span style="color: #000000;">></span><span style="color: #000000;"> </span><span style="color: #000000;">5</span><span style="color: #000000;">) {
</span><span style="color: #008080;"> 5</span> <span style="color: #000000;">            objVideo1.pauseVideo();
</span><span style="color: #008080;"> 6</span> <span style="color: #000000;">            objVideo1.seekTo(</span><span style="color: #000000;">0</span><span style="color: #000000;">, </span><span style="color: #0000FF;">true</span><span style="color: #000000;">);
</span><span style="color: #008080;"> 7</span> <span style="color: #000000;">            objVideo2.seekTo(</span><span style="color: #000000;">6</span><span style="color: #000000;">, </span><span style="color: #0000FF;">true</span><span style="color: #000000;">);
</span><span style="color: #008080;"> 8</span> <span style="color: #000000;">            objVideo2.playVideo();
</span><span style="color: #008080;"> 9</span> <span style="color: #000000;">            scrollToVideo2()
</span><span style="color: #008080;">10</span> <span style="color: #000000;">        }
</span><span style="color: #008080;">11</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">12</span> <span style="color: #000000;">    setTimeout(updatePlayerInfo, </span><span style="color: #000000;">250</span><span style="color: #000000;">);
</span><span style="color: #008080;">13</span> <span style="color: #000000;">}             
</span><span style="color: #008080;">14</span> <span style="color: #000000;">
</span><span style="color: #008080;">15</span> <span style="color: #000000;"></span><span style="color: #008000;">//</span><span style="color: #008000;"> Display information about the current state of the player</span><span style="color: #008000;">
</span><span style="color: #008080;">16</span> <span style="color: #008000;"></span><span style="color: #0000FF;">function</span><span style="color: #000000;"> updatePlayerInfo2() {
</span><span style="color: #008080;">17</span> <span style="color: #000000;">    </span><span style="color: #0000FF;">if</span><span style="color: #000000;"> (objVideo2 </span><span style="color: #000000;">&&</span><span style="color: #000000;"> objVideo2.getPlayerState() </span><span style="color: #000000;">==</span><span style="color: #000000;"> </span><span style="color: #000000;">1</span><span style="color: #000000;"> </span><span style="color: #000000;">&&</span><span style="color: #000000;"> objVideo2.getDuration) {
</span><span style="color: #008080;">18</span> <span style="color: #000000;">        </span><span style="color: #0000FF;">if</span><span style="color: #000000;"> (objVideo2.getCurrentTime() </span><span style="color: #000000;">>=</span><span style="color: #000000;"> </span><span style="color: #000000;">13</span><span style="color: #000000;">) {
</span><span style="color: #008080;">19</span> <span style="color: #000000;">            objVideo2.seekTo(</span><span style="color: #000000;">6</span><span style="color: #000000;">, </span><span style="color: #0000FF;">true</span><span style="color: #000000;">);
</span><span style="color: #008080;">20</span> <span style="color: #000000;">            objVideo2.pauseVideo();
</span><span style="color: #008080;">21</span> <span style="color: #000000;">            objVideo1.playVideo();
</span><span style="color: #008080;">22</span> <span style="color: #000000;">            scrollToVideo1()
</span><span style="color: #008080;">23</span> <span style="color: #000000;">        }
</span><span style="color: #008080;">24</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">25</span> <span style="color: #000000;">    setTimeout(updatePlayerInfo2, </span><span style="color: #000000;">250</span><span style="color: #000000;">);
</span><span style="color: #008080;">26</span> <span style="color: #000000;">}</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

&#160;

# Step 8

Set up some CSS. I set up some base CSS just to give the body a little margin and to set up the video container so that it can be animated using the JQuery animate library.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:3bf3a1f2-8c2c-408f-a142-75d5861d9aeb" class="wlWriterEditableSmartContent"><pre style=" width: 377px; height: 329px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #008080;"> 1</span> <span style="color: #800000;"><style>
</span><span style="color: #008080;"> 2</span> <span style="color: #800000;">    body
</span><span style="color: #008080;"> 3</span> <span style="color: #800000;">    </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
</span><span style="color: #008080;"> 4</span> <span style="color: #FF0000;">        padding</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 40px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
</span><span style="color: #008080;"> 5</span> <span style="color: #FF0000;">    </span><span style="color: #000000;">}</span><span style="color: #800000;">
</span><span style="color: #008080;"> 6</span> <span style="color: #800000;">    #videoContainer
</span><span style="color: #008080;"> 7</span> <span style="color: #800000;">    </span><span style="color: #000000;">{</span><span style="color: #FF0000;">
</span><span style="color: #008080;"> 8</span> <span style="color: #FF0000;">        position</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> relative</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
</span><span style="color: #008080;"> 9</span> <span style="color: #FF0000;">        left</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 0px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
</span><span style="color: #008080;">10</span> <span style="color: #FF0000;">        top</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 0px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
</span><span style="color: #008080;">11</span> <span style="color: #FF0000;">        width</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 1000px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
</span><span style="color: #008080;">12</span> <span style="color: #FF0000;">        height</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> 295px</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
</span><span style="color: #008080;">13</span> <span style="color: #FF0000;">        overflow</span><span style="color: #000000;">:</span><span style="color: #0000FF;"> hidden</span><span style="color: #000000;">;</span><span style="color: #FF0000;">
</span><span style="color: #008080;">14</span> <span style="color: #FF0000;">    </span><span style="color: #000000;">}</span><span style="color: #800000;">
</span><span style="color: #008080;">15</span> <span style="color: #800000;"></style></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

# Step 9

Add the two scroll method. These were referenced earlier and are used o to animate the Video Container. I've used the JQuery animation because it's so simple to use. You can find out more about it here: [http://api.jquery.com/animate/](http://api.jquery.com/animate/ "http://api.jquery.com/animate/")&#160;

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:f007bcd7-f97c-4ad2-95b3-acf9515a78fc" class="wlWriterEditableSmartContent"><pre style=" width: 467px; height: 248px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #008080;"> 1</span> <span style="color: #0000FF;">function</span><span style="color: #000000;"> scrollToVideo1() {
</span><span style="color: #008080;"> 2</span> <span style="color: #000000;">    $(</span><span style="color: #000000;">"</span><span style="color: #000000;">#videoContainer</span><span style="color: #000000;">"</span><span style="color: #000000;">).animate({
</span><span style="color: #008080;"> 3</span> <span style="color: #000000;">        left: </span><span style="color: #000000;">'</span><span style="color: #000000;">0</span><span style="color: #000000;">'</span><span style="color: #000000;">
</span><span style="color: #008080;"> 4</span> <span style="color: #000000;">    }, </span><span style="color: #000000;">1000</span><span style="color: #000000;">);
</span><span style="color: #008080;"> 5</span> <span style="color: #000000;">}
</span><span style="color: #008080;"> 6</span> <span style="color: #000000;">
</span><span style="color: #008080;"> 7</span> <span style="color: #000000;"></span><span style="color: #0000FF;">function</span><span style="color: #000000;"> scrollToVideo2() {
</span><span style="color: #008080;"> 8</span> <span style="color: #000000;">    $(</span><span style="color: #000000;">"</span><span style="color: #000000;">#videoContainer</span><span style="color: #000000;">"</span><span style="color: #000000;">).animate({
</span><span style="color: #008080;"> 9</span> <span style="color: #000000;">        left: </span><span style="color: #000000;">'</span><span style="color: #000000;">-480</span><span style="color: #000000;">'</span><span style="color: #000000;">
</span><span style="color: #008080;">10</span> <span style="color: #000000;">    }, </span><span style="color: #000000;">1000</span><span style="color: #000000;">);
</span><span style="color: #008080;">11</span> <span style="color: #000000;">}</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

I hope these steps explain how to combine YouTube and JQuery to create a really interesting effect. If you try this out for yourself let me know how you get on.