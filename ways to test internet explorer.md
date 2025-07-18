---
title: How To Test Your Website In Internet Explorer
authors:
- thebeebs
intro: Here are 5 ways in which you can make sure your site rock on Edge.
types:
- opinion
categories:
- web
- browsers
published: 2016/01/01 12:00:00
updated: 2017/05/01 12:00:00
---
















The first version of this article was written over 4 years ago, but it still receives a great deal of traffic so as we approach the end of 2015 I thought it would be useful to revisit this topic.

# # Developer Tools

Firstly IE8, IE9, IE10 and IE11 all have developer tools (just press F12 whilst in Internet Explorer) these allow you to change your document and browser mode to go back to older rendering engines. You can find these tools on the emulation tab in the tools. If you are using Microsoft Edge, you will notice that it dosent have different browser mdoes that you can use, this feature is only avalible in IE9-IE11 . It should be noted that these tools are not the same as the rendering engines used in the original browsers. So whilst they are useful if you are trying to reproduce a reported bug, they should not be used to confirm that your site is working correctly or looking pixel perfect in an older browser. To learn more about the devleoper tools head over to [MSDN](https://msdn.microsoft.com/en-us/library/dn255001(v=vs.85).aspx).

# # Virtual Machines

For the most accurate results you will  want to use Virtual Machines so that you can run the browsers in a real world environment. This is by far and away the most popular way to do browser testing in my experience. The good folk at Modern.ie have produced VM's for all the various browsers and operating system combinations (IE6-IE11 and Edge on Windows 10). These VM's run on Windows, Linux and Mac and in numerous Virtualisation flavours including Parallels, VMWare, HyperV and VirtualBox. The can download the Virtual Machines from [modern.ie](http://dev.modern.ie/tools/vms/). 

# # Hosted Virtual Machines

[BrowserStack](https://www.browserstack.com/) is a paid services which allows you to test IE6-11 and Edge (and every other major browser like Chrome, Opera, Safari, Firefox as well as iOS and Android emulators) inside of your browser. There are also browser plugins available for Chrome and Firefox which make launching BrowserStack even easier. 

With [BrowserStack](https://www.browserstack.com/) you can simply start up a new Virtual machine in the cloud running practically any OS and then test your website in that environment.

# # Modern.ie Scanner

The Modern.ie scanner allows you to enter a web address. The scanner then uses a node.js service (which is available on GitHub) to go fetch the website and interrogate it to locate common problems, it then provides a report which details what you may need to do to fix you website so that it works well in IE and also other standards based browsers. 
