---
title: A Simple Azure Gotcha
authors:
- thebeebs
intro: '[![cloud](images/4544.cloud_thumb_5702C448.png "cl...'
types:
- shorts
categories:
- azure
published: 2010/08/03 12:00:00
updated: 2010/08/03 12:00:00
status: archived
---
















[![cloud](images/4544.cloud_thumb_5702C448.png "cloud")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/38/93/metablogapi/2541.cloud_68834AED.png) I deployed an Azure application today and was so annoyed because when I went to the application I was getting an "Internet Explorer cannot display the webpage" error message.

I tried various configurations, I even downgraded and upgraded the OS.

In the end the problem was simply that I'd set a 8080 port number on the project so when I appended the port number e.g.&#160; [http://theappname.cloudapp.net:8080/](http://theappname.cloudapp.net:8080/) it worked fine.