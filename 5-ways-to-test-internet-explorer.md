Twice this week I've been asked how you can test older versions of Internet Explorer once whilst delivering a guest lecture at Stafford University and then just a few hours later via email. So I thought that it was probably worth while to write up the few methods I use to test sites in IE:

#Developer Tools

Firstly IE8, IE9, IE10 and IE11 all have developer tools (just press F12 whilst in Internet Explorer) these allow you to change your document and browser mode to go back to older rendering engines such as IE6. I delivered a session on IE9 developer tools and most of this is valid for IE10 too. 

With IE11 comes a new set of greatly improved tools which I will be talking about in the coming weeks, but there is a good introduction talk over at Build 

#Modern.ie Scanner

The Modern.ie scanner allows you to enter a web address. The scanner then uses a node.js services (which is available on GitHub) to go fetch the website and interrogate it to locate common problems, it then provides a report which details what you may need to do to fix you website so that it works well in IE and also other stands based browsers. 

#Virtual Machines

For the most accurate results you will probably want to use Virtual Machines so that you can run the browsers in a real world environment. This is by far and away the most popular way to do browser testing in my experience. The good folk at Modern.ie have produced VM's for all the various browsers and operating system combinations (IE6-IE11). These VM's run on Windows, Linux and Mac and in numerous Virtualisation flavours including Parallels, VMWare and VirtualBox.

#Hosted Virtual Machines

Modern.ie provides a 3 month free trial for BrowserStack which allows you to test IE6-10 (and every other major browser like Chrome, Opera, Safari, Firefox as well as iOS and Android emulators) inside of your browser. There are also browser plugins available for Chrome and Firefox which make launching BrowserStack even easier. 

With BrowserStack you can simply start up a new Virtual machine in the cloud running practically any OS and then test your website in that environment.

#Running multiple versions using Windows XP Mode

One way to run multiple versions of Internet Explorer on one PC is to run the older version(s) of Internet Explorer using Windows XP Mode on a Windows PC running Windows 7 Professional, Enterprise, or Ultimate edition. (Windows XP Mode is an optional downloaded feature of Windows 7 Professional, Enterprise, and Ultimate editions that provides you a pre-installed image of Windows XP SP3 that you run using Windows Virtual PC..) 

It is even possible to set up and run multiple XP Modes on one Windows 7 machine, thereby allowing you to run Internet Explorer versions 6, 7, 8, and 9 simultaneously on a single machine.

This is quite an involved solution but This linked document provides detailed instructions for setting up a Windows XP Mode virtual machine and then copying it to create two additional XP Mode virtual machines and configuring them to run IE7 and IE8. 
