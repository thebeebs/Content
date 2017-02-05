---
title: PostMessage Popups and IE
authors:
- thebeebs
intro: 'If you have not used [postMessage](http://dev.w3.o...'
types:
- shorts
categories:
- html5
- web
- html5at5
published: 2011/12/21 12:00:00
updated: 2011/12/21 13:00:00
status: archived
---

If you have not used [postMessage](http://dev.w3.org/html5/postmsg/) (or Cross Document Messaging to use it&rsquo;s proper title) it&rsquo;s a way of securely sending messages between frames even when the documents passing messages are on different domains. To learn more about it you can read this introduction that [we wrote during the IE8 launch](http://msdn.microsoft.com/en-us/library/cc511311(v=VS.85).aspx).<p>It works in IE8, IE9 and IE9 for WP7&hellip; however in IE it only works for embedded frames. This can cause issues for some users that maybe using it to pass messages back from pop-up windows or other tabs as they receive the error message &ldquo;No Such Interface supported&rdquo;. 

An example of the issue can be seen on the following&nbsp; [test page](http://www.debugtheweb.com/test/xdm/origin/). Click the **Create Popup **button and then in the new window click the **Call postMessage directly** button.&nbsp; In IE, this demo will fail and the script will display the exception &ldquo;No Such Interface supported&rdquo;. The issue also exists if you want to use post Message across tabs as demonstrated in [the following test](http://www.debugtheweb.com/test/xdm/CrossTab.asp). 

There are some instances where you can workaround this problem. If the popup window instead calls a script function in its window.opener page (click the **Call opener's proxy function **button), _the _script function can call postMessage to send a message to the child frame. However the workaround isn&rsquo;t useful in cases where you are working cross domain, because same-origin-policy dictates that the popup window and the window.opener page must be from the same origin in order to call each other's script functions.
</p>