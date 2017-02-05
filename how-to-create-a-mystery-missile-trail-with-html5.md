---
title: How to create a mystery missile trail with HTML5
authors:
- thebeebs
intro: 'On Monday the 8th of November a large [condensatio...'
types:
- shorts
categories:
- html5
published: 2010/11/13 12:00:00
updated: 2010/11/13 13:00:00
status: archived
---

On Monday the 8th of November a large [condensation trail](http://www.bbc.co.uk/news/world-us-canada-11731014) was visible in the skies of California. It was rumoured that the trail was caused by a missile, however the pentagon have since stated they believe it to have been created by an aircraft.

I thought that it would be interesting to see if I could recreate the effect of a vapour trail using a HTML5 canvas.

In the demo below press and then drag the mouse over the canvas and a vapour trail will be drawn. One problem... it's not very realistic. I'd love you guys to rework this example and provide a more realistic effect. If you do come up with anything better be sure to post it in the comments.

[Click here to view the demo](http://bit.ly/aujmoB)

Below are the steps I took to create this demo:

## Step 1

As with all my demos, firstly add a reference to Jquery
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:2bdf8ecc-5b80-48a4-860b-86bcff180025" class="wlWriterEditableSmartContent"><pre class="brush: javascript;"><script src="images/jquery-1.4.2.min.js" language="javascript"
type="text/javascript"></script></pre></div>

## Step 2

Next add a function that will be called when the page is ready. Also add in a few global variables which we will use to save objects into later. In the example below I have used the jQuery ready function to fire a JavaScript function called **setUpVapour()**

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:bb28fd4a-38cc-412c-bf7f-92a1486612bf" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">var canvas;
var ctx;
var paint;
var images;

$(document).ready(function () {
    setUpVapour();
});</pre></div>

## Step 3

The **setUpVapour** function firstly gets a reference to the canvas element and saves it into the canvas variable we set up in step 1. We then call the **getContext** function and save the result into the variable **ctx** that we created in step 1. This **ctx** gives us a reference to the canvas which we will be able to use to draw.

We then call **drawBackground() **this function draws the sky image on the background of the canvas.

Attach **mousedown**, **mouseup** and **mouseleave** functions to the canvas. All these functions do is keep track of whether we should be painting or not. We keep track by setting the paint variable to true when the mouse goes down and false when the mouse comes up or leaves the canvas. This will give us the effect of painting only when the mouse button is held down.

Next we add added the **mousemove** event to the canvas. As the mouse moves we determine if we should be painting by checking if paint is true. If it is we capture the **x** and **y** coordinates of the mouse and pass them to the **generateRandomParticles(mouseX, mouseY)** function.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:14384ce8-d7f9-432c-a2c7-c9e5cfd5b994" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">function setUpVapour() {

    canvas = $("#canvas").get(0);
    ctx = canvas.getContext('2d');

    drawBackground();

    $('#canvas').mousedown(function (e) {
        paint = true;
    });

    $('#canvas').mouseup(function (e) {
        paint = false;
    });

    $('#canvas').mouseleave(function (e) {
        paint = false;
    });

    $('#canvas').mousemove(function (e) {

        if (paint) {
            var mouseX = e.pageX - this.offsetLeft;
            var mouseY = e.pageY - this.offsetTop;
            generateRandomParticles(mouseX, mouseY);
        }
    });            
}</pre></div>

## &#160;

## Step 4 

Add the **drawBackground** function. This function loads a JavaScript Image object. It sets the **onload** function to a new anonymous function which will in turn draw the image to canvas only when the image is loaded.

This is important because otherwise the image may not be fully loaded by the time we call **drawImage** this would result in a white canvas.

Lastly we set the **src** of the image object.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:fe28ab29-859c-4b7c-bd0f-d956562d9c28" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">function drawBackground() {
    images = new Image();
    images.onload = function () {
        ctx.drawImage(images, 0, 0);
    };

    images.src = "images/vapour.jpg";
} </pre></div>

## Step 5

Add the **generateRandomPartcle** function. This function takes the x and y coordinates and randomly draws 50 1x1 rectangles around the mouse point. It also changes the colour of 20% of the rectangles to grey.

This is the function that needs work to make the trail look more realistic... It's a good starting point, but needs alot of work ![Smile](images/4251.wlEmoticon-smile_212C422F.png)&#160;

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:04f651e2-a875-4d32-aa78-cf983c12cc04" class="wlWriterEditableSmartContent"><pre class="brush: javascript;">function generateRandomParticles(mouseX, mouseY) {
    for (i = 0; i <= 50; i++) {
        var randomnumber = Math.floor(Math.random() * 11);
        var randomcolor = Math.floor(Math.random() * 11);
        var randomdegree = Math.floor(Math.random() * 361);
        var randomTrans = Math.floor(Math.random() * 256);
        var newX = mouseX + Math.floor(Math.cos(randomdegree * Math.PI / 180) * randomnumber);
        var newY = mouseY + Math.floor(Math.sin(randomdegree * Math.PI / 180) * randomnumber);
        if (randomnumber > 7) {
            ctx.fillStyle = "rgba(255,255,255," + randomTrans + ")";
        } else {
            ctx.fillStyle = "rgba(222,222,222," + randomTrans + ")";
        }
        ctx.fillRect(newX, newY, 1, 1);
    }
}</pre></div>