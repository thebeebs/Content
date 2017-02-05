---
title: 4 Ways to test your website in old versions of IE
authors:
- thebeebs
intro: '## <span style="background-color: #ffff00;">This A...'
types:
- shorts
categories:
- article
- internet-explorer
- testing
published: 2011/11/03 12:00:00
updated: 2011/11/03 13:00:00
status: archived
---

## <span style="background-color: #ffff00;">This Article is out of date [please check out the latest version here.](http://www.ubelly.com/2013/08/5-ways-to-test-your-website-in-old-version-of-ie/)</span><span style="background-color: #ffff00;"></span>

&nbsp;

Twice this week I&rsquo;ve been asked how you can test older versions of Internet Explorer once whilst delivering a guest lecture at Stafford University and then just a few hours later via email. So I thought that it was probably worth while to write up the few methods I use to test sites in IE:
<h2>1. Developer tools

Firstly both IE8 and IE9 developer tools (just press F12 whilst in Internet Explorer) allow you to change your document and browser mode to go back to IE7 and IE8.

## 2. Expression Super Preview

You could also use [Expression Super Preview](http://www.microsoft.com/expression/products/SuperPreview_Overview.aspx) which allows you to test your site rendering in various IE browsers, Firefox, Chrome, Safari and Opera&nbsp; It even allows you to test Safari on a Mac from a windows machine by using a cloud service.

## 3. Application Compatibility VPC Images

For the most accurate results you could use the &ldquo;[Internet Explorer Application Compatibility VPC Images](http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=11575#overview)&rdquo; which are Windows Virtual PC VHDs that are free and licensed for the purposes of testing your websites in IE6, IE7, IE8, IE9 across XP, Vista and Windows 7 . The images are patched with the latest security updates and are otherwise clean installs of the operating system with very few modifications. These images are specifically designed to run on [Microsoft Virtual PC](http://www.microsoft.com/windows/virtual-pc/).

For those using Mac OS or Linux there is a project on GitHub to enable you to take these images and get the running on VirtualBox, I have no idea how well this works and have had mixed reviews but it may prove useful for you [https://github.com/xdissent/ievms](https://github.com/xdissent/ievms "https://github.com/xdissent/ievms")

## 4. Running Multiple Versions of IE Using Windows XP Mode

One way to run multiple versions of Internet Explorer on one PC is to run the older version(s) of Internet Explorer using [Windows XP Mode](http://windows.microsoft.com/en-US/windows7/products/features/windows-xp-mode) on a Windows PC running Windows 7 Professional, Enterprise, or Ultimate edition. ([Windows XP Mode](http://windows.microsoft.com/en-US/windows7/products/features/windows-xp-mode) is an optional downloaded feature of Windows 7 Professional, Enterprise, and Ultimate editions that provides you a pre-installed image of Windows XP SP3 that you run using Windows Virtual PC..)

It is even possible to set up and run multiple XP Modes on one Windows 7 machine, thereby allowing you to run Internet Explorer versions 6, 7, 8, and 9 simultaneously on a single machine.

This is quite an involved solution but&nbsp; [**This linked document**](http://ieblog.members.winisp.net/images/InstallingXPMode.htm) provides detailed instructions for setting up a Windows XP Mode virtual machine and then copying it to create two additional XP Mode virtual machines and configuring them to run IE7 and IE8.
</h2>