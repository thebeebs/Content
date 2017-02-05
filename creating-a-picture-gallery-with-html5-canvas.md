---
title: Creating a picture gallery with HTML5 canvas
authors:
- thebeebs
intro: '<iframe class="youtube-player" title="YouTube vide...'
types:
- shorts
categories:
- html5
- jquery
published: 2011/01/26 12:00:00
updated: 2011/01/26 13:00:00
status: archived
---

<iframe class="youtube-player" title="YouTube video player" height="345" src="images/KhJz2LmvWEg?rel=0" frameborder="0" width="560" type="text/html" allowfullscreen="allowfullscreen"></iframe>

&#160;

Displaying pictures in a gallery is something that so easy to do with one of the many jQuery Plugins, but what if you want to use the HTML5 canvas tag?

Capital FM recently created a HTML5 showcase page called [Be A Star](http://promo.musicradio.com/jingle-bell-ball-2010/audition-videos/behind-the-scenes/) and at the bottom they show off a rather fancy image gallery. The gallery uses HTML5 canvas and below I'm going to show how you can create something like this yourself.

![The gallery that we are going to create](images/7573.image_305D80AD.png "The gallery that we are going to create")

The canvas tag is like a bitmap, once we draw an image on the canvas we can't go back and query that image to obtain it's properties. Unlike DOM objects we can not simply animate them by altering their x and y coordinates. To animate using the canvas tag you create a loop and then 24 times per second (actually how often you like) you redraw the entire canvas.

If you want to animate an image it's up to you to hold a reference to that image and then redraw the image by placing it in a different position on the canvas on every tick of the loop.

Because this is so complicated I'm going to use a nice little library called [Easel.js](http://easeljs.com/).&#160; The Easel JavaScript library provides a full, hierarchical display list, a core interaction model, and helper classes to make working with Canvas much easier.

To use [Easel.js](http://easeljs.com/). in a page you will need to download the library from [easeljs.com](http://easeljs.com/) and then add the following scripts to the header of the document. 
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:abfb28e3-3d39-41ce-bb31-4875c61b8271" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 190px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="../easeljs/utils/UID.js"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="../easeljs/utils/SpriteSheetUtils.js"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="../easeljs/display/SpriteSheet.js"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="../easeljs/display/Shadow.js"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="../easeljs/display/DisplayObject.js"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="../easeljs/display/Container.js"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="../easeljs/display/Stage.js"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="../easeljs/display/Bitmap.js"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="../easeljs/display/BitmapSequence.js"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"><</span><span style="color: #800000;">script </span><span style="color: #FF0000;">src</span><span style="color: #0000FF;">="../easeljs/utils/Tick.js"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">script</span><span style="color: #0000FF;">></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

Next you will need to add a canvas element to the document

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:6c84846b-8a74-4ddc-be49-227f4033f052" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 73px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;"><</span><span style="color: #800000;">body </span><span style="color: #FF0000;">onload</span><span style="color: #0000FF;">="init()"</span><span style="color: #0000FF;">></span><span style="color: #000000;">  
        </span><span style="color: #0000FF;"><</span><span style="color: #800000;">canvas </span><span style="color: #FF0000;">id</span><span style="color: #0000FF;">="testCanvas"</span><span style="color: #FF0000;"> width</span><span style="color: #0000FF;">="980"</span><span style="color: #FF0000;"> height</span><span style="color: #0000FF;">="580"</span><span style="color: #0000FF;">></</span><span style="color: #800000;">canvas</span><span style="color: #0000FF;">></span><span style="color: #000000;">
</span><span style="color: #0000FF;"></</span><span style="color: #800000;">body</span><span style="color: #0000FF;">></span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

You will also need to set the **onload** property of the body tag so that it will call a JavaScript function called **init** when the page loads.

Next we add the **init** function to the page.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:ff96c2f9-2693-4c1e-887a-20e1015529a7" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 309px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;">var</span><span style="color: #000000;"> canvas;
</span><span style="color: #0000FF;">var</span><span style="color: #000000;"> stage;
</span><span style="color: #0000FF;">var</span><span style="color: #000000;"> pictures </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #0000FF;">new</span><span style="color: #000000;"> Array(</span><span style="color: #000000;">5</span><span style="color: #000000;">);
</span><span style="color: #0000FF;">var</span><span style="color: #000000;"> imageCount </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #000000;">0</span><span style="color: #000000;">;

</span><span style="color: #0000FF;">function</span><span style="color: #000000;"> init() {
    canvas </span><span style="color: #000000;">=</span><span style="color: #000000;"> document.getElementById(</span><span style="color: #000000;">"</span><span style="color: #000000;">testCanvas</span><span style="color: #000000;">"</span><span style="color: #000000;">);
    canvas.onmousemove </span><span style="color: #000000;">=</span><span style="color: #000000;"> onMouseMove;
    stage </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #0000FF;">new</span><span style="color: #000000;"> Stage(canvas);

    </span><span style="color: #0000FF;">for</span><span style="color: #000000;"> (i </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #000000;">0</span><span style="color: #000000;">; i </span><span style="color: #000000;"><=</span><span style="color: #000000;"> pictures.length </span><span style="color: #000000;">-</span><span style="color: #000000;"> </span><span style="color: #000000;">1</span><span style="color: #000000;">; i</span><span style="color: #000000;">++</span><span style="color: #000000;">) {
        pictures[i] </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #0000FF;">new</span><span style="color: #000000;"> Image();
        pictures[i].src </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #000000;">"</span><span style="color: #000000;">img/2.jpg</span><span style="color: #000000;">"</span><span style="color: #000000;">;
        pictures[i].onload </span><span style="color: #000000;">=</span><span style="color: #000000;"> imageLoaded;
    }
    Tick.addListener(window);
}</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

Firstly in the function we will set a global variable called canvas and populate it with the the canvas element that's on the page. We have declared the canvas variable just outside and above the **init** function.

Next we will attach the canvas elements **onmousemove** event to a new function called **onMouseMove** . We will create this function later and it will enable us to determine where the mouse is on the canvas and animate the picture gallery accordingly.

Next we populate the stage variable with a new **Stage** object. The stage object is part of the [Easel.js](http://easeljs.com/) library and is used to keep track of all of the objects that will be drawn on the canvas.

Next I have added a for loop that adds a number of images to an array called **pictures**. If you were doing this for real you would add your pictures here rather than adding a number of dummy images.

Finally I've added a listener to the **Tick** object. The tick object is part of the Easel library and provides a heartbeat to the project. On every beat of this heartbeat the library will&#160; fire the function on the page called Tick.

Now you may have noticed that every time I have added a picture to the array I set the **onload** event of the image to a function called **imageLoaded**. When the image has successfully loaded this function is called. This is a mechanism to preload the images before attempting to add them to the canvas. 

The function **imageLoaded** is called by each image. When a new image loads it increments the **imageCount** variable. When the **imageCount** variable is equal to the number of pictures we then call the function **createBitMaps**. The **imageLoaded** function ensures that all of our images are preloaded before we go to the **createBitMaps** function

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:b2655982-3c03-4502-b216-22ca95f8e874" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 124px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;">function</span><span style="color: #000000;"> imageLoaded() {
    imageCount</span><span style="color: #000000;">++</span><span style="color: #000000;">;
    </span><span style="color: #0000FF;">if</span><span style="color: #000000;"> (imageCount </span><span style="color: #000000;">>=</span><span style="color: #000000;"> pictures.length) {
        createBitMaps();
    }
}</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

In the **createBitMaps** function we loop through each image and create a new bitmap. This bitmap is then added to to the **stage** object.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:61d08c7e-7a01-4b63-9f20-6fb2384a39e6" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 214px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;">function</span><span style="color: #000000;"> createBitMaps() {
    </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> bitmap;
    </span><span style="color: #0000FF;">for</span><span style="color: #000000;"> (i </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #000000;">0</span><span style="color: #000000;">; i </span><span style="color: #000000;"><=</span><span style="color: #000000;"> pictures.length </span><span style="color: #000000;">-</span><span style="color: #000000;"> </span><span style="color: #000000;">1</span><span style="color: #000000;">; i</span><span style="color: #000000;">++</span><span style="color: #000000;">) {
        bitmap </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #0000FF;">new</span><span style="color: #000000;"> Bitmap(pictures[i]);
        bitmap.x </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #000000;">250</span><span style="color: #000000;"> </span><span style="color: #000000;">*</span><span style="color: #000000;"> i;
        bitmap.y </span><span style="color: #000000;">=</span><span style="color: #000000;"> canvas.height </span><span style="color: #000000;">/</span><span style="color: #000000;"> </span><span style="color: #000000;">2</span><span style="color: #000000;">;
        bitmap.rotation </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #000000;">45</span><span style="color: #000000;"> </span><span style="color: #000000;">*</span><span style="color: #000000;"> Math.random() </span><span style="color: #000000;">'</span><span style="color: #000000;"> </span><span style="color: #000000;">0</span><span style="color: #000000;">;
        stage.addChild(bitmap);
    }

}</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

First we create a new **BitMap** object then we set the x property of the bitmap. This is the horizontal co-ordinate that the image will have on the canvas.

For simplicity I have, in this loop, multiplied 250 by the loop counter and used this to set the **x** property, which will in-effect, lay the images out horizontally with a 250 pixel space between each image.

Next I have set the **y** property which is the vertical position of the image on the canvas and set it to be half the height of the canvas. This will put all of the images in the middle of the canvas.

I have then set the **rotation** property to a number between 0 and 45. This will insure that the images are randomly rotated between 0 and 45 degrees when the are drawn on the canvas.

Lastly I add the bitmap objet as a child of the stage object.

Now if we run the project nothing will happen and we will end up with a white screen. You see to get the **stage** object to draw its objects to the canvas we will need to add a function called **tick**. This function is called by the **Tick** object that we set up earlier.

It's important at the end of the this function to fire the **stage.tick** function.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:220c7ac0-a1db-42be-8f38-f9c055424943" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 70px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;">function</span><span style="color: #000000;"> tick() {
   stage.tick();
}</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

We should now see the images have appeared as expected on the canvas. However, when we move our mouse from left to right nothing happens as we haven't told the **onMouseMoveEvent**&#160; to do anything. 

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:9D7513F9-C04C-4721-824A-2B34F0212519:d0eef142-09d8-4bf4-af90-1e7dd0e5b2b8" class="wlWriterEditableSmartContent"><pre style=" width: 460px; height: 250px;background-color:White;overflow: auto;"><div><!--

code highlighting produced by Actipro CodeHighlighter (freeware)
http://www.CodeHighlighter.com/

--><span style="color: #0000FF;">function</span><span style="color: #000000;"> tick() {
    </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> direction </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #000000;">-</span><span style="color: #000000;">(stage.mouseX </span><span style="color: #000000;">-</span><span style="color: #000000;"> (canvas.width </span><span style="color: #000000;">/</span><span style="color: #000000;">2)) </span><span style="color: #000000;">/</span><span style="color: #000000;"> ((canvas.width </span><span style="color: #000000;">/</span><span style="color: #000000;"> </span><span style="color: #000000;">2</span><span style="color: #000000;">)</span><span style="color: #000000;">/</span><span style="color: #000000;"> </span><span style="color: #000000;">10</span><span style="color: #000000;">)
    </span><span style="color: #0000FF;">for</span><span style="color: #000000;"> (i </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #000000;">0</span><span style="color: #000000;">; i </span><span style="color: #000000;"><=</span><span style="color: #000000;"> pictures.length </span><span style="color: #000000;">-</span><span style="color: #000000;"> </span><span style="color: #000000;">1</span><span style="color: #000000;">; i</span><span style="color: #000000;">++</span><span style="color: #000000;">) {
        stage.children[i].x </span><span style="color: #000000;">=</span><span style="color: #000000;"> stage.children[i].x </span><span style="color: #000000;">+</span><span style="color: #000000;"> direction;
    }
    stage.tick();
}

</span><span style="color: #0000FF;">function</span><span style="color: #000000;"> onMouseMove(e) {
    </span><span style="color: #0000FF;">if</span><span style="color: #000000;"> (</span><span style="color: #000000;">!</span><span style="color: #000000;">e) { </span><span style="color: #0000FF;">var</span><span style="color: #000000;"> e </span><span style="color: #000000;">=</span><span style="color: #000000;"> window.event; }
    stage.mouseX </span><span style="color: #000000;">=</span><span style="color: #000000;"> e.pageX </span><span style="color: #000000;">-</span><span style="color: #000000;"> canvas.offsetLeft;
    stage.mouseY </span><span style="color: #000000;">=</span><span style="color: #000000;"> e.pageY </span><span style="color: #000000;">-</span><span style="color: #000000;"> canvas.offsetTop;
}</span></!--

code></div></pre><!-- Code inserted with Steve Dunn's Windows Live Writer Code Formatter Plugin.  http://dunnhq.com --></!--></div>

Basically what I'm doing&#160; above is determining a direction based upon how far left or how far right the mouse is positioned on the screen (Feel free to show me a better way to do this in the comments). This direction number will be either positive or negative.

In the **onMouseMove** function I am determining the **mouseX** and **mouseY** co-ordinates which I use in the tick function.

Once I have a direction setting I update the x position of all the images that are children of the stage. As I am doing this inside the tick loop this will give the effect of the images moving.

When we start the browser we should see that now as we move the mouse left and right the images move along with the mouse. 

That's as far as am going to go with this this demo for now, I might revisit it at a later stage to clean up the JavaScript and add some of the the other effects that are used by capitalFM. 