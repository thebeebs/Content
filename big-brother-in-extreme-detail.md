---
title: Big brother in Extreme detail
authors:
- thebeebs
intro: DeepZoom and Big Brother
types:
- shorts
categories:
- silverlight
published: 2010/06/24 12:00:00
updated: 2010/06/24 12:00:00
status: archived
---
















[![bigbrother](images/4846.bigbrother_thumb_13F2484B.jpg "bigbrother")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/7484.bigbrother_22113748.jpg) The final series of Big brother has kicked off and whilst the latest group of 13 wannabes - including a Beyonce lookalike, a squatter who lives on discarded food, and a double amputee - enter the house, [Shoothill](http://www.shoothill.com/) have been busy producing a Deep Zoom of all the [Big brother contestants](http://tv.uk.msn.com/reality-tv/big-brother/big-brother-house-deep-zoom.aspx).

&#160;

Shoothill's latest project allows you to zoom into a giant image of the Big Brother eye to reveal hundreds of pictures of housemates and sets from the reality TV series. The Deep Zoom contains all of the housemates from all of the series, excluding the First. In my opinion Excluding the first series is a good thing because, Nasty Nick and the the winner of the first series Craig both have faces and personalities that were born to be ignored. If you look closely you should be able to spot the late great, princes Diana of the heat Magazine generation, Jade Goody.

&#160;[![Jade Goody](images/6825.jadegoody_thumb_40D78559.png "Jade Goody")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/5023.jadegoody_520B62FC.png) 

Since the First Darwin Deep Zoom produced by Shoothill I've been watching the evolution (excuse the pun) of Shoothill's Deep Zoom's with interest. In my time at Microsoft I've seen Shoothill produce the world largest Deep Zoom for [Fauna and Flora International](http://www.fauna-flora.org/tiger_mosaic.php), a stunning history of [Winston Churchill](http://1940.iwm.org.uk/?page_id=527) and now the latest [big brother Deep Zoom](http://tv.uk.msn.com/reality-tv/big-brother/big-brother-house-deep-zoom.aspx).

&#160;

With every new Zoom comes an advancement each with it's own subtle twist. Shoothill don't use the standard [Deep Zoom composer](http://www.microsoft.com/downloads/details.aspx?FamilyID=457B17B7-52BF-4BDA-87A3-FA8A4673F8BF&displaylang=en) instead they use a custom process to create the DZI file used by the Silverlight control. They stitch together the various images subtly changing the hue and opacity of each image to create a mosaic of the larger image. Using their customised process they are able to create much larger Deep Zooms than is possible with the [Deep Zoom Composer](http://www.microsoft.com/downloads/details.aspx?FamilyID=457B17B7-52BF-4BDA-87A3-FA8A4673F8BF&displaylang=en). They are also able to have much more granular control over the Deep Zoom and through the numerous projects have delivered a number of rather interesting features.

&#160;

## Masking

The Big Brother logo contains a lot of black, this creates a problem because if you darken an image to achieve a black spot on the mosaic then when you Zoom into the image it will be too dark to distinguish what's in the image . To solve the problem Shoothill masked sections of the base image and modified their software to avoid placement of images in these masked areas.

&#160;

[![Masking](images/6740.masking_thumb_13B272BE.png "Masking")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/2146.masking_7DAC072B.png) 

&#160;

## Offsetting

In both the the [Fauna and Flora International](http://www.fauna-flora.org/tiger_mosaic.php) project and the Big Brother Project they offset the images slightly so that they do not line up perfectly, this allows a small section of the base image to shine through the mosaic and produces a clearer image at higher zoom levels it also gives the impression that the pictures are random or being loaded on demand.

&#160;

The being loaded on demand effect is subtle but if you Zoom in and out you will see that the images move ever so slightly, this is intended to give an impression that the images are being stitched together on the fly - which of course they aren't -&#160; all of the Shoothill's Zooms are precompiled and that's purely because of the size of the some of the Images; which brings me to my next observation. 

&#160;[![Offseting](images/3247.offseting_thumb_6D4069A5.png "Offseting")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/6763.offseting_717A6737.png) 

## Large Images

The big brother image in total is around 1/2gb of imagery but&#160; the [Fauna and Flora International](http://www.fauna-flora.org/) Zoom contains around 18 gigabytes of imagery, in fact it remains the largest Deep Zoom ever produced. Support for extremely large images is important with these Mosaics as the clarity of the image improves with the more images you add; when I first Saw the Zoomed out version of the [Tiger](http://www.fauna-flora.org/tiger_mosaic.php) I Had no idea it was made up of other images.

&#160;

## Tag Clouds

The Churchill is my personal favourite of all of the Shoothill projects. The software they have used to generate the Deep Zoom rather cleverly tags each Photograph. As the user gains focus on an image a tag cloud appears on the top left hand corner which enables the user to explore other similar images which have the same tag.

&#160;

[![An image showing a Tag cloud on the the top right of an image](images/0458.churchhill_thumb_3BA4D643.png "An image showing a Tag cloud on the the top right of an image")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/1425.churchhill_69DED1FD.png) 

I was also intrigued to discover that this application now lives inside the Churchill War Rooms in London's Whitehall as an exhibit which I think makes it the first Silverlight museum exhibit anywhere in the world. The exhibit can be controlled by visitors using a roller ball that's provided in front of a huge projector screen.

&#160;

[![War Rooms](images/1524.warrroms_thumb_369272C7.jpg "War Rooms")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/5722.warrroms_513F0EE0.jpg) 

&#160;[![Silverlight in the War Rooms](images/6712.inaction_thumb_1B0D70C4.jpg "Silverlight in the War Rooms")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/8461.inaction_4796A0AA.jpg) 

Apparently to convert the web project into an exhibit required only minor changes to ensure the project was only ever made full screen and to remove right click and the tag cloud operations.

&#160;

I'm looking forward to see what the Shoothill team get up to next, I have it on rather good authority that they have something rather big on the horizon that I'll hopefully be able to cover in the next few weeks.

&#160;

Happy Hacking

Martin