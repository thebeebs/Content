---
title: 'Expires Headers ASP.net Core'
authors:
- thebeebs
intro: 'How to add expires headers to static content in ASP.Net core'
types:
- shorts
categories:
- web
published: 2016/01/01 12:00:00
updated: 2017/05/01 12:00:00
---

I was taking a look at a an ASP.net web app using YSlow and it mentioned that I wasn't adding an expires header to static 
files to enable browser caching.

I older versions of ASP.net it was easier enough to fix this 
by changing the webconfig.

In ASP.NET the simplest way I have found to do this is to pass into UseStaticFiles a new StsticFilesOPtions class where you impliment a handler for OnPrepareResponse. 
<pre><code class="language-csharp">app.UseStaticFiles(new StaticFileOptions()
{
     OnPrepareResponse = r => r.Context.Response.Headers.Append("Expires", DateTime.Now.AddDays(7).ToUniversalTime().ToString("r"))
});
</code></pre>
Basically when a static file is requested this code will add a header to all objects , In the example above I sent an expires date 7 days in the future.

I use the ToUniverToUniversalTime with a "r" format as this provides a Http-time formatted date.

Now when you request static files such as .jpg or .css then this header will be added to all files, ensuring browsers can cache you content and you can get a high score on YSlow.