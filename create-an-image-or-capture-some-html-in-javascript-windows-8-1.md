---
title: Create an Image or capture some HTML in JavaScript - Windows 8.1
authors:
- thebeebs
intro: 'I've been building some Windows 8 apps this week a...'
types:
- shorts
categories:
- article
published: 2014/07/25 12:00:00
updated: 2014/07/25 13:00:00
status: archived
---

I've been building some Windows 8 apps this week and stumbled across 3 ways in which you can create an image in Windows 8.1 HTML and JavaScript apps. One is to use a canvas element, construct the image as you want it and the use the BitMapEncoder to output a PNG. The second is to use the Windows 8 Webview Control and call the capturePreviewToBlobAsync() function. The third is to use the toBlob() function of the canvas element.

# # Method 1: BitMapEncoder

If you want to draw an image from scratch pixel by pixel in a bitmap sort of fashion, it's probably best to use the canvas element. Once you've drawn the content you want on your canvas you can create a bitMapEncoder and convert the stream you get from the canvas function getImageData(). The benefit of this approach is that you could switch out the PNG encoder for a JPEG, GIF, TIFF, BMP or JPEG-XR one. Here's is an extract from my SegoeSymbol project which take my canvas element and creates a PNG then saves that to disk. 

You can find the working project over on [GitHub](https://github.com/thebeebs/apphack6/blob/master/SegoeSymbol/SegoeSymbol.Shared/js/default.js)
  <pre>var canvas = //draw your canvas here
var ctx = canvas.getContext("2d");
var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
Windows.Graphics.Imaging.BitmapEncoder.createAsync(Windows.Graphics.Imaging.BitmapEncoder.pngEncoderId, stream)
    .done(function (encoder) {
        //Set the pixel data in the encoder
        encoder.setPixelData(Windows.Graphics.Imaging.BitmapPixelFormat.rgba8, Windows.Graphics.Imaging.BitmapAlphaMode.straight,
        width, height, 96, 96, new Uint8Array(imgData.data));
        //Go do the encoding
        encoder.flushAsync().done(function () {
            stream.close()
        });
     })})</pre>

# # Method 2: capturePreviewToBlobAsync 

On Windows 8.1 using the new WebView control, render some HTML or just navigate to a webpage. One the page has loaded you can then call the Webview.capturePreviewToBlobAsync() function. 

It captures everything that's displayed in the Webview and because it's a direct capture anything that can be displayed in IE11 can be captured including third party libraries like [http://raphaeljs.com/](http://raphaeljs.com/) or [http://www.mathjax.org/](http://www.mathjax.org/).

I wrote a simple sample app a moment ago and was able to capture a website to an Image using the following code, the full app can be found over on [GitHub](https://github.com/thebeebs/ASingleWebviewToImage)

<pre>function printeWebViewToDiskThenDisplay() {
    var wc = document.getElementById("webview");
    Windows.Storage.ApplicationData.current.localFolder.createFileAsync("webview.png", Windows.Storage.CreationCollisionOption.replaceExisting).then(function (file) {
        file.openAsync(Windows.Storage.FileAccessMode.readWrite).then(function (stream) {
            var capturePreview = wc.capturePreviewToBlobAsync();
            capturePreview.oncomplete = function (completeEvent) {
                var inputStream = completeEvent.target.result.msDetachStream();
                Windows.Storage.Streams.RandomAccessStream.copyAsync(inputStream, stream).then(function () {
                    stream.flushAsync().done(function () {
                        inputStream.close();
                        stream.close();
                        var image = new Image();
                        image.src = URL.createObjectURL(file);
                        result.innerHTML = "";
                        result.appendChild(image);
                    });
                });
            };
            capturePreview.start();
        });
    });
}</pre>

# # Method 3: toBlob

If you're working in the browser rather than in a Windows 8 app you can use blobs to achieve image saving. 

Once you have your canvas set up as you want it, call msToBlob (other browsers will obviously not use the ms vendor prefix)

<pre>var blob = canvas.msToBlob(); // This will work in Windows 8... You can then save this blob to disk</pre>

In a browser you can simply call the msSaveBlob function and the user will be prompted to download the blob as a PNG image.

<pre>window.navigator.msSaveBlob(blob, 'tile.png'); // this will only work in browser currently.</pre>

We have a great example of this working over here: [http://samples.msdn.microsoft.com/Workshop/samples/fileAPI/savingFiles/BlobBuilder/example4.html](http://samples.msdn.microsoft.com/Workshop/samples/fileAPI/savingFiles/BlobBuilder/example4.html)