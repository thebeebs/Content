---
title: Geocoding using Silverlight
authors:
- thebeebs
intro: '&#160;[![geocode](images/8371.geocode_thumb_626FC0...'
types:
- shorts
categories:
- geocoding
- silverlight-3
- silverlight-4
- mobile
published: 2010/06/28 12:00:00
updated: 2010/06/28 13:00:00
status: archived
---

&#160;[![geocode](images/8371.geocode_thumb_626FC03D.png "geocode")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/5732.geocode_1FC09AD2.png) Last night I was reading through the Vision and Scope document for a project that we are involved in with the British Library, one of the requirements was to geocode a search term. If you are not familiar with the term geocoding then congratulations; you're getting out of the house enough. Geocoding is when you take a string of text like "Leaning Tower of Pisa" and convert it into Latitude and Longitude coordinates.

&#160;

The British Library would like users who enter a search term into their Silverlight Application to be presented with Documents and Photographs that relate to the search term entered. If the search term is of geographical significance such as "The Baltic Sea" then relevant documents and photos, which have matching Latitude and longitude information in the metadata, should be displayed.

&#160;

When I saw the requirement it made me think immediately of the an EasyJet accelerator that I had been working on the previous month. In that project I used the Bing web service to Geocode a search term so that we could figure out what the closest airports were to the search term entered. Geocoding using Bing is straight forward and will work on all most any platform as it only requires a post to a RESTful service and then to consume the JSON response.

&#160;

The method below will work in Silverlight 3, Silverlight 4 and Windows Phone 7, I used a third party JSON library called JSON.net, this is because some JSON libraries are not present in the Windows Phone version of Silverlight and I thought as this would be a common requirement on the Phone I should make this sample compatible.

&#160;

Firstly you will need to obtain an App Id which will give you permission to use the service. Go to [https://www.bingmapsportal.com/](https://www.bingmapsportal.com/) sign in and Create an App Id by clicking the "Create App ID" link and following the instructions.

&#160;

By default the bing&#160; service returns JSON, to consume JSON easily (especially in windows phone) we need to download [http://json.codeplex.com/releases/view/43775 and add the Newtonsoft.Json.Silverlight.dll](http://json.codeplex.com/releases/view/43775%20and%20add%20the%20Newtonsoft.Json.Silverlight.dll) which you will find in the zip folder Json35r7\Bin\Silverlight.

&#160;

In my sample application a user enters a search term into a text box and clicks a button. In my button click event logic I save the search term into a local variable and then using string.format I create a URL which is the RESTfull endpoint for the Bing webservice. Using a new Web Client object I make a request to the Bing service URL and delegate the result to the event handler client_DownloadStringCompleted.

The format of the URL is below you just need to replace <<searchQuery>> and <<AppId>> with your own: 

[http://dev.virtualearth.net/REST/v1/Locations?query=<<searchQuery>>&key=<<appId](http://dev.virtualearth.net/REST/v1/Locations?query=%3c%3csearchQuery%3e%3e&key=%3c%3cappId)>

&#160;

[![clip_image001](images/0268.clip_image001_thumb_13A55DF4.png "clip_image001")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/1258.clip_image001_397B8457.png)

Inside the method client_DownloadStringCompleted I create a new JObject to parse the returned string and then use the SelectToken method to take the pieces from the JSON that I require and save them to 2 local variables. I then string format these two values into a readable string and then send the result to the text property of a text block.

&#160;

[![clip_image002](images/6076.clip_image002_thumb_02054D5C.png "clip_image002")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/0184.clip_image002_75E3D334.png)

That's it... Happy Hacking.