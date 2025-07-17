---
title: How do I get the users current location in a Windows 8 app?
authors:
- thebeebs
intro: There are instances whilst developing Windows 8 ap...
types:
- shorts
categories:
- win8at8
published: 2012/08/07 12:00:00
updated: 2012/08/07 12:00:00
status: archived
---







There are instances whilst developing Windows 8 applications in HTML5 when you discover there are two ways to do the same thing. Geolocation is one of those examples. You can either do it the same way you would in a browser like IE9 or Chrome or you could do it the WinJS way. 

By providing both methods it ensures that we retain all of the browser APIs from Internet Explorer so that code ported from a website will just work, whilst also ensuring JavaScript maintains the same WinRT features and namespaces that are available across C# and C++.

So the question arises... which should you use? The standard API or the WinJS version? My answer is: Use whichever you prefer.

# # The standards based way:
  <div id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:7ca218fa-c172-452e-a903-8eed8729bbcb" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px"><pre class="brush: javascript;">function getLocationBrowser() {
   if (navigator.geolocation != undefined) {
       navigator.geolocation.watchPosition(getPositionHandlerBrowser, errorHandler);
   }
}

function getPositionHandlerBrowser(pos) {
    document.getElementById('latitude').innerHTML = pos.coords.latitude;
    document.getElementById('longitude').innerHTML = pos.coords.longitude;
    document.getElementById('accuracy').innerHTML = pos.coords.accuracy;        
}</pre></div>

# # The WinJS way

The main difference is that we use the promise pattern which enables us to more easily chain asynchronous calls. Also the **pos** object that gets passed to the **getPositionHandler** has different property names, specifically **coords** is called **coordinate**.

  <div id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:a3cd1818-8048-4a7b-9ccc-9f6b5a535f81" class="wlWriterEditableSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px"><pre class="brush: javascript;">var loc = Windows.Devices.Geolocation.Geolocator();

function getLocation() {
    try {
        loc.getGeopositionAsync().then(getPositionHandler, errorHandler);
    } catch (e) {
        // Catch Errors
    }        
}

function getPositionHandler(pos) {
    document.getElementById('latitude').innerHTML = pos.coordinate.latitude;
    document.getElementById('longitude').innerHTML = pos.coordinate.longitude;
    document.getElementById('accuracy').innerHTML = pos.coordinate.accuracy;
}</pre></div>