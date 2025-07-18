---
title: Finding the closest Bar in Seattle using IE9 GeoLocation
authors:
- thebeebs
intro: A little look into Geolocation
types:
- shorts
categories:
- geolocation
- ie9
published: 2011/02/11 12:00:00
updated: 2011/02/11 12:00:00
status: archived
---
















![Beer](images/3060.image_02B88060.png "Beer")I just wrote a little sample application in jQuery using the new GeoLocation feature in [IE9 RC](http://www.beautyoftheweb.co.uk/).

It takes your current location and then sorts a list of bars with the closet one appearing on top. I wrote it after asking Andy Robb for a list of his favourite Bars in Seattle in preparation for my trip next week.

**You can see the **[Demo Here](http://demos.thebeebs.co.uk/bars-in-seattle/)

You can see how it works in the video below. I've also put the code below for the people that don't like videos.

<iframe title="YouTube video player" height="390" src="images/vwr2-v9v2UA?rel=0" frameborder="0" width="640" allowfullscreen="allowfullscreen"></iframe>

&#160;

Firstly I took all the bar locations and used Bing to Geo Locate them. I then added them to the following template:
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:22ab9ef0-f77a-4538-9efd-d80f9890c1a4" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 192px;background-color:White;overflow: auto;"><div><!--

Code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">ul</span><span style="color: #0000FF;">></span><span style="color: #000000;">
    </span><span style="color: #0000FF;"><</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="name"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            BARNAME HERE</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="long"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            LONGITUDE GOES HERE</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="lat"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            LATITUDE GOES HERE</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
    </span><span style="color: #0000FF;"></</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">    
</span><span style="color: #0000FF;"></</span><span style="color: #800000;">ul</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></div>

To get the longitude and Latitude for each location I used Bing Maps. I found the place I was looking for and then used the console in IE9 developer tools (Press F12) to execute the following JavaScript Snippet:

&#160;

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:89b40f0c-282e-464a-acce-a46a0ff6237b" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 40px;background-color:White;overflow: auto;"><div><!--

Code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #000000;">document.write(map.GetCenter());</span></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></div>

I ended up with a list of all the bar in a <UL> like this.:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:509e24e3-17ba-4919-a667-a3525ac0d8d3" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 250px;background-color:White;overflow: auto;"><div><!--

Code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">body</span><span style="color: #0000FF;">></span><span style="color: #000000;">
    </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">a </span><span style="color: #FF0000;">href</span><span style="color: #0000FF;">="#"</span><span style="color: #FF0000;"> onclick</span><span style="color: #0000FF;">="findMe()"</span><span style="color: #0000FF;">></span><span style="color: #000000;">Find Closest Pub</span><span style="color: #0000FF;"></</span><span style="color: #800000;">a</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">ul</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            </span><span style="color: #0000FF;"><</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="name"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    Moe Bar</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="long"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    47.60357999999998</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="lat"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    -122.329454</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            </span><span style="color: #0000FF;"></</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            </span><span style="color: #0000FF;"><</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="name"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    Frontier Room</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="long"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    47.61469022047056</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="lat"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    -122.34816509008769</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            </span><span style="color: #0000FF;"></</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            </span><span style="color: #0000FF;"><</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="name"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    See Sound</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="long"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    47.6156159656448</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="lat"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    -122.32593494177237</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            </span><span style="color: #0000FF;"></</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
             </span><span style="color: #0000FF;"><</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="name"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    War Room</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="long"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    47.61370665587537</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="lat"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    -122.34928138554072</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            </span><span style="color: #0000FF;"></</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
             </span><span style="color: #0000FF;"><</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="name"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    Barca</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="long"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    47.622789935049205</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="lat"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                   -122.33597713232413</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            </span><span style="color: #0000FF;"></</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
             </span><span style="color: #0000FF;"><</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="name"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    Havana </span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="long"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    47.61503737683162</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="lat"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    -122.32130008459457</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            </span><span style="color: #0000FF;"></</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
             </span><span style="color: #0000FF;"><</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="name"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    Lava Lounge </span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="long"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    47.61550024839427</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="lat"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    -122.35074001074194</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            </span><span style="color: #0000FF;"></</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
             </span><span style="color: #0000FF;"><</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="name"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    Triple Door </span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="long"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    47.61260723390516</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="lat"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    -122.34181361914046</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            </span><span style="color: #0000FF;"></</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
             </span><span style="color: #0000FF;"><</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="name"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    Linda's Tavern </span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="long"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    47.615853233734946</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="lat"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    -122.32331040740962</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            </span><span style="color: #0000FF;"></</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
             </span><span style="color: #0000FF;"><</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="name"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    Cowgirls </span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="long"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    47.59846589794225</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                </span><span style="color: #0000FF;"><</span><span style="color: #800000;">div </span><span style="color: #FF0000;">class</span><span style="color: #0000FF;">="lat"</span><span style="color: #0000FF;">></span><span style="color: #000000;">
                    -122.33439445495607</span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
            </span><span style="color: #0000FF;"></</span><span style="color: #800000;">li</span><span style="color: #0000FF;">></span><span style="color: #000000;">
        </span><span style="color: #0000FF;"></</span><span style="color: #800000;">ul</span><span style="color: #0000FF;">></span><span style="color: #000000;">
    </span><span style="color: #0000FF;"></</span><span style="color: #800000;">div</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"></</span><span style="color: #800000;">body</span><span style="color: #0000FF;">></span></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></div>

&#160;

At the top I added a link with an **onClick** event of **findme()**

I added a reference to the jQuery Library

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:d5e7daa6-9b6f-4786-a696-c458b47d9cf2" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 38px;background-color:White;overflow: auto;"><div><!--

Code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="http://ajax.microsoft.com/ajax/jquery/jquery-1.5.min.js"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></div>

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:ad88fdf9-e526-48b1-9ec9-bb69bd6b30d4" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 110px;background-color:White;overflow: auto;"><div><!--

Code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;">function</span><span style="color: #000000;"> findMe() {
    </span><span style="color: #0000FF;">if</span><span style="color: #000000;"> (navigator.geolocation </span><span style="color: #000000;">!=</span><span style="color: #000000;"> undefined) {
        navigator.geolocation.watchPosition(onFound, onError);
    }
}</span></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></div>

&#160;

The function **onFound** captures the** coords.latitude** and **coords.longitude** and saves them into variables. We then use the jQuery library to loop through each **<LI>** for each element I calculate the distance between the browsers current location and the bars location. I then save this distance Information into a data attribute called distance that's attached to the <**LI>** element.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:64a9ba7e-851f-4b62-b709-f96a09426ab6" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 222px;background-color:White;overflow: auto;"><div><!--

Code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;">function</span><span style="color: #000000;"> onFound(pos) {
    </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> userLat </span><span style="color: #000000;">=</span><span style="color: #000000;"> pos.coords.latitude;
    </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> userLong </span><span style="color: #000000;">=</span><span style="color: #000000;"> pos.coords.longitude;
    $(</span><span style="color: #000000;">'</span><span style="color: #000000;">ul li</span><span style="color: #000000;">'</span><span style="color: #000000;">).each(</span><span style="color: #0000FF;">function</span><span style="color: #000000;"> (index) {
        </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> locationLat </span><span style="color: #000000;">=</span><span style="color: #000000;"> $(</span><span style="color: #0000FF;">this</span><span style="color: #000000;">).find(</span><span style="color: #000000;">'</span><span style="color: #000000;">.lat</span><span style="color: #000000;">'</span><span style="color: #000000;">).html();
        </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> locationLong </span><span style="color: #000000;">=</span><span style="color: #000000;"> $(</span><span style="color: #0000FF;">this</span><span style="color: #000000;">).find(</span><span style="color: #000000;">'</span><span style="color: #000000;">.long</span><span style="color: #000000;">'</span><span style="color: #000000;">).html();
        </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> distance </span><span style="color: #000000;">=</span><span style="color: #000000;"> getDistance(userLat, locationLat, userLong, locationLong);
        $(</span><span style="color: #0000FF;">this</span><span style="color: #000000;">).data(</span><span style="color: #000000;">"</span><span style="color: #000000;">distance</span><span style="color: #000000;">"</span><span style="color: #000000;">, distance);
    })

    reOrder();
}
</span></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></div>

The getDistance function is really basic way to determine the distance between two locations:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:3f42a303-01cb-46c8-a00a-657b2b16fa6a" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 157px;background-color:White;overflow: auto;"><div><!--

Code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;">function</span><span style="color: #000000;"> getDistance(lat1, lat2, lon1, lon2) {
    </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> R </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #000000;">6371</span><span style="color: #000000;">; </span><span style="color: #008000;">//</span><span style="color: #008000;"> km</span><span style="color: #008000;">
</span><span style="color: #000000;">    </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> d </span><span style="color: #000000;">=</span><span style="color: #000000;"> Math.acos(Math.sin(lat1) </span><span style="color: #000000;">*</span><span style="color: #000000;"> Math.sin(lat2) </span><span style="color: #000000;">+</span><span style="color: #000000;">
          Math.cos(lat1) </span><span style="color: #000000;">*</span><span style="color: #000000;"> Math.cos(lat2) </span><span style="color: #000000;">*</span><span style="color: #000000;">
          Math.cos(lon2 </span><span style="color: #000000;">-</span><span style="color: #000000;"> lon1)) </span><span style="color: #000000;">*</span><span style="color: #000000;"> R;
    </span><span style="color: #0000FF;">return</span><span style="color: #000000;"> d;

}; </span></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></div>

&#160;

Finally we call the reOrder() function.

ReOrder Loops through each <li> and sorts them putting the closest bar to the top of the list:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:53ee988e-7065-43d9-8fe5-7a0109e91f59" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 157px;background-color:White;overflow: auto;"><div><!--

Code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;">function</span><span style="color: #000000;"> reOrder() {
    $(</span><span style="color: #000000;">'</span><span style="color: #000000;">ul li</span><span style="color: #000000;">'</span><span style="color: #000000;">).sort(sortAlpha).appendTo(</span><span style="color: #000000;">'</span><span style="color: #000000;">ul</span><span style="color: #000000;">'</span><span style="color: #000000;">);
}

</span><span style="color: #0000FF;">function</span><span style="color: #000000;"> sortAlpha(a, b) {
   </span><span style="color: #0000FF;">return</span><span style="color: #000000;"> $(a).data(</span><span style="color: #000000;">'</span><span style="color: #000000;">distance</span><span style="color: #000000;">'</span><span style="color: #000000;">) </span><span style="color: #000000;">></span><span style="color: #000000;"> $(b).data(</span><span style="color: #000000;">'</span><span style="color: #000000;">distance</span><span style="color: #000000;">'</span><span style="color: #000000;">) </span><span style="color: #000000;">?</span><span style="color: #000000;"> </span><span style="color: #000000;">1</span><span style="color: #000000;"> : </span><span style="color: #000000;">-</span><span style="color: #000000;">1</span><span style="color: #000000;">;
};</span></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></div>

That's it. We now have a simple list that sorts based upon your current browsers location.