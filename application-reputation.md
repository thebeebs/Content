---
title: Application Reputation
authors:
- thebeebs
intro: 'On Thursday during my IE9 online talk I was asked ...'
types:
- shorts
categories:
- ie9-beta
published: 2011/01/24 12:00:00
updated: 2011/01/24 13:00:00
status: archived
---

On Thursday during my IE9 online talk I was asked to give more information about the inner workings of how Application Reputation works I promised I&rsquo;d update my blog with further information&hellip; So here it is.<p>When I was a kid my mum would warn me, don&rsquo;t cross the road at the end of the street. She'd tell me that so often that by the age of about six I just ignored it, by Six and a half I&rsquo;d managed to get myself run over. If people continually repeat their advice, regardless of how good the advice maybe, it loses it&rsquo;s effect.

This is the same issue many Internet Explorer users have when downloading files. Every time they download a file they are warned that the file may damage their machine, the advice is repeated so often that it loses it&rsquo;s effect. Users repeatedly ignore the message and install regardless. Sooner or later malicious files find their way on to machines.

IE9&rsquo;s application reputation is an attempt to fix this by only warning&nbsp; the user when a file poses a high risk.

By using Application Reputation the average user will see a warning message 2-3 times a year rather than currently seeing one every time a file is downloaded.

When you download an application IE9 passes two pieces of Information to the Application Reputation service:&nbsp; A file Identifier and if available, the the publisher information. On receiving this information the service checks these pieces of data against a database to see if the file has an established reputation.

Downloads are assigned a reputation rating based on many criteria, such as download traffic, download history, past antivirus results and URL reputation.&nbsp; Reputation is generated and assigned to digital certificates as well as specific files. 

If you plan to distribute a file on the internet and want to establish a reputation for the file, it&rsquo;s recommend that you take the following steps:

**Digitally sign your programs with an Authenticode signature**

Reputation is generated and assigned to digital certificates as well as specific files. Digital certificates allow data to be aggregated and assigned to a single certificate rather than many individual programs. 

**Ensure downloads are not detected as **[**malware**](http://www.microsoft.com/protect/learnabout/IEmalware.aspx)

Downloaded programs that are detected and confirmed as malware will affect both the download&rsquo;s reputation and the reputation of the digital certificate.

**Apply for a Windows Logo **

To learn more about the Windows Logo visit the [Windows 7 Logo Program ](http://msdn.microsoft.com/en-us/windows/dd203105.aspx)page on MSDN. This is a free process for signed programs that can help establish reputation for your download. 
</p>