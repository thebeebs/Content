---
title: Windows Phone 7 to Windows 8 Camp
authors:
- thebeebs
intro: Today in London we ran our first Windows Phone 7 a...
types:
- shorts
categories:
- article
- mobile
- windows8
- mobile
published: 2012/06/16 12:00:00
updated: 2012/06/16 12:00:00
status: archived
---







Today in London we ran our first Windows Phone 7 app to Windows 8 porting event. The idea was for people to come along and take their existing Windows Phone 7 applications and turn them into Windows 8 applications. I thought I'd keep a record of the things that we have helped resolve throughout the day in the hope that we would end up with a list of common issues.

# # Async

One of the big Differences between WP7 and Windows 8 is the new Async feature of Windows 8. In windows 8 If the API is likely to take longer than around 50ms to execute, it is asynchronous. In some instances Synchronous methods have been replaced with asynchronous ones and this trips up a number of WP7 developers when they try and port their code.

Two really good blog posts on the subject can be found here:

*   [Keeping apps fast and fluid with asynchrony in the Windows Runtime](http://blogs.msdn.com/b/windowsappdev/archive/2012/03/20/keeping-apps-fast-and-fluid-with-asynchrony-in-the-windows-runtime.aspx)
*   [Diving deep with WinRT and await](http://blogs.msdn.com/b/windowsappdev/archive/2012/04/24/diving-deep-with-winrt-and-await.aspx)  

# # Does the device have an internet connection?

A couple of Windows Phone 7 apps used a very simple mechanism to determine if the device had an internet connection on Windows Phone 7. The common code was:
  <div id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:5f2e2366-6c7c-41ed-9cdc-68e6609cf726" class="wlWriterSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">   <pre class="brush: javascript;">Microsoft.Phone.Net.NetworkInformation.NetworkInterface.NetworkInterfaceType == NetworkInterfaceType.Ethernet</pre>
</div>

The equivalent namespace in windows 8 is Windows.Networking.Connectivity. A simple test to see if you have a network of any kind is to use the code below. If InternetConnectionProfile is null there is no connection.

<div id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:aca44dee-8b56-4d67-8f4a-65ee86b74a90" class="wlWriterSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre class="brush: javascript;">ConnectionProfile InternetConnectionProfile = NetworkIntormation.GetInternetConnectionProfile();</pre>
</div>

If it it not null you can ascertain all sorts of information about the connection. For example if the user is roaming or if the user is approaching their data limit.

<div id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:bee0d306-e031-4ec6-8094-338472092a21" class="wlWriterSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre class="brush: javascript;">var cost = InternetConnectionProfile.GetConnectionCost();
var isApproachingDataLimit = cost.ApproachingDataLimit;
var isRoaming = cost.Roaming;</pre>
</div>

# # Performing a post to receive an image

This was kind of a strange issue. One of the apps needed to post to a URL in order to receive an image from a server. Otherwise the image would return with a "You are not allowed to Embed this image warning" after trying a number of things we finally got the following code to work.

<div id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:e30eab11-7098-4f09-a6e8-82cb4b5f03a9" class="wlWriterSmartContent" style="float: none; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px">
  <pre class="brush: javascript;">HttpClient client = new HttpClient();
HttpContent test2 = null;
 var url = "http://www.theimage";
HttpResponseMessage response = await client.PostAsync(url, test2);
byte[] bytes = await response.Content.ReadAsByteArrayAsync();

InMemoryRandomAccessStream randomAccessStream = new InMemoryRandomAccessStream();
DataWriter writer = new DataWriter(randomAccessStream.GetOutputStreamAt(0));
writer.WriteBytes(bytes);
await writer.StoreAsync();

BitmapImage img = new BitmapImage();
img.SetSource(randomAccessStream);
return (img);</pre>
</div>