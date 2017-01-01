---
title: '5 things To Get Compatible With Microsoft Edge'
authors:
- thebeebs
- martinkearn
intro: 'Here are 5 ways in which you can make sure your site rock on Edge.'
types:
- opinion
categories:
- web
- browsers
---

I was taking a look at a an ASP.net web app using YSlow and it mentioned that I wasn't adding an expires header to static 
files to enable browser caching.

I older versions of ASP.net it was easier enough to fix this 
by changing the webconfig.

In ASP.NET the simplest way I have found to do this is to pass into UseStaticFiles a new StsticFilesOPtions class where you impliment a handler for OnPrepareResponse. 

		app.UseStaticFiles(new StaticFileOptions()
            {
                OnPrepareResponse = r => r.Context.Response.Headers.Append("Expires", DateTime.Now.AddDays(7).ToUniversalTime().ToString("r"))
            });
Basically when a static file is requested this code will add a header to all objects , In the example above I sent an expires date 7 days in the future.

I use the ToUniverToUniversalTime withcva "r" format as this provides a Http-time formatted date.

Now when you request static files such as .jpg or .css then this header will be added to all files, ensuring browsers can cache you content and you can get a high score on YSlow.