---
title: Umbraco Basics - Learning from the Master Part 2
authors:
- thebeebs
intro: Earlier in the week [I wrote about](http://blogs.m...
types:
- shorts
categories:
- jquery
- umbraco
published: 2011/01/07 12:00:00
updated: 2011/01/07 12:00:00
status: archived
---







Earlier in the week [I wrote about](http://blogs.msdn.com/b/thebeebs/archive/2011/01/05/umbraco-basics-learning-from-the-master.aspx) the great talk given by Niels Hartvig (the founder of Umbraco) at TechEd.<p>As always you can watch the full [talk here](http://www.msteched.com/2010/Europe/WEB204) but below are my highlights of the 2nd part.

&nbsp;

# # Using parameters and macros

If you have a reusable control you probably will want to pass parameters too it. This snippet shows you how you can bind data from Umbraco to your controls.

&nbsp;
<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:5737277B-5D6D-4f48-ABFC-DD9C333F4C5D:a40f926a-5c65-43fe-8525-19ffefed87a9" class="wlWriterEditableSmartContent"><div><object width="560" height="340"><param name="movie" value="images/fYJ_tCarnps?hl=en&hd=1"><embed src="https://www.youtube.com/v/fYJ_tCarnps?hl=en&hd=1" type="application/x-shockwave-flash" width="560" height="340"></embed></object></div></div>

# # Creating a Gallery Part 1

I found the following demo really useful when I was getting to grips with the flexibility of Umbraco. Niels creates a document type called photo, he then creates a collection of these photos by creating a Gallery Document type which contains these photos.

By the end of the 7 minutes demo he has a list of photographs, in part 2 he shows you how to customise the look of the gallery using jQuery.
<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:5737277B-5D6D-4f48-ABFC-DD9C333F4C5D:01e4b7c2-980a-4ff2-a669-b0de8e5a503c" class="wlWriterEditableSmartContent"><div><object width="560" height="340"><param name="movie" value="images/_J7TiN0QiAY?hl=en&hd=1"><embed src="https://www.youtube.com/v/_J7TiN0QiAY?hl=en&hd=1" type="application/x-shockwave-flash" width="560" height="340"></embed></object></div></div>

&nbsp;

# # Creating a Gallery Part 2

Using the gallery created in Part one, Neils uses a jQuery plugin called [pikachoose](http://pikachoose.com/ "pikachoose") to take his rather boring list of images and convert it into an interactive gallery.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:5737277B-5D6D-4f48-ABFC-DD9C333F4C5D:4bae9cc5-dc4f-4767-b525-b5336b8dacd0" class="wlWriterEditableSmartContent"><div><object width="560" height="340"><param name="movie" value="images/_UbiUdBM0zo?hl=en&hd=1"><embed src="https://www.youtube.com/v/_UbiUdBM0zo?hl=en&hd=1" type="application/x-shockwave-flash" width="560" height="340"></embed></object></div></div>

# # Creating a Gallery Part 3

In the previous parts Niels used xlst to produce the gallery markup. In this part Niels uses a razor control that he created the previous day to show how you could use razor syntax to achieve the same result. The control that Niels demonstrates is now part of the full Umbraco 4.6 release.

If you haven&rsquo;t looked at razor before [take a look at this for an overview](http://blog.andrewnurse.net/2010/07/03/IntroducingRazorNdashANewViewEngineForASPNet.aspx): 
<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:5737277B-5D6D-4f48-ABFC-DD9C333F4C5D:eae2e7e1-6860-4148-b5f9-4cfeb7211bdc" class="wlWriterEditableSmartContent"><div><object width="560" height="340"><param name="movie" value="images/5rmfNSbt7rI?hl=en&hd=1"><embed src="https://www.youtube.com/v/5rmfNSbt7rI?hl=en&hd=1" type="application/x-shockwave-flash" width="560" height="340"></embed></object></div></div></p>