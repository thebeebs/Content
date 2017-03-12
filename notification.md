---
title: Notification API
authors:
- thebeebs
intro: 'A look into the Notification API'
types:
- tutorials
categories:
- browsers
- web
published: 2017/02/14 12:00:00
updated: 2017/02/14 12:00:00
---

In the example above we have two elements on the page a button and a p element that I am using to display information to give some feedback.

<pre><code class="language-html">&lt;p id=&quot;information&quot;&gt;&lt;/p&gt;    <br/>&lt;button id=&quot;button&quot;&gt;Speak&lt;/button&gt;
</code></pre>

To test that the browser is capable of supporting notifications I check to see if Notification appears on the window object. I then
give the user a little feedback about support and I enable/disable the button.

<pre><code class="language-javascript">if (!('Notification' in window)) {
    document.getElementById('information').innerText = 'Web Notification is not supported';
    document.getElementById('button').disabled = true;
}
else { 
    document.getElementById('information').innerText = 'Good news Web Notification is supported in your browser';
    document.getElementById('button').disabled = false;
}
</code></pre>

To send a notification I first handle the button click.

<pre><code class="language-javascript">document.getElementById('button').addEventListener('click', function () {// code goes here})
</code></pre> 

Next I call the function requestPermission on the Notification object.
<pre><code class="language-javascript">Notification.requestPermission(function (permission) {// code goes here})  
</code></pre> 

The permission parameter can be in one of three states, granted, denied or default. Default means that they user hasn't been asked yet. As far as I know
default won't be returned by this API since the user will have needed to choose one way or the other. But I will need to check the spec to confirm this.

Therefore we need to handle two states. Grated or Denied. On granted I need to create a notification. There are a number of 
properties that are possible, however, I have provided a Title, Body and and Icon. The Icon can't be SVG. I have provided a 113px by 113px png with
an alpha channel. 

You can also set an onclick function for when the user presses the notification. When the user clicks the notification it will execute 
any code and will also bring the page into focus. In this instance I am just setting the information p tag's innerText to give some 
feedback to the user that something happened.

<pre><code class="language-javascript">switch (permission) {                    
case "granted":
    var icon = 'http://thebeebs.co.uk/images/beebs.png';
    var notification = new Notification('Hiya', { body: 'Hello from Web Hack Wednesday', icon: icon });
    notification.onclick = function () {
        document.getElementById('information').innerText = 'You clicked the notification';
    }
    break;
}
</code></pre> 

In the instance of permission not being grated I also added a case that sets the information p tag to warn the user that they have
not given notification permissions for my domain.

<pre><code class="language-javascript">case "denied":
    document.getElementById('information').innerText = 'Spoil Sport, You have not allowed Notifications';
    break; 
</code></pre> 

Here is all the code. This will need to be the last thing on the page or you will need to 
wrap it in a function that waits until the document has loaded

<pre><code class="language-javascript">if (!('Notification' in window)) {
    document.getElementById('information').innerText = 'Web Notification is not supported';
    document.getElementById('button').disabled = true;
}
else { 
    document.getElementById('information').innerText = 'Good news Web Notification is supported in your browser';
    document.getElementById('button').disabled = false;
}

document.getElementById('button').addEventListener('click', function () {       

    Notification.requestPermission(function (permission) {
        switch (permission) {                    
            case "granted":
                var icon = 'http://thebeebs.co.uk/images/beebs.png';
                var notification = new Notification('Hiya', { body: 'Hello from Web Hack Wednesday', icon: icon });
                notification.onclick = function () {
                    document.getElementById('information').innerText = 'You clicked the notification';
                }
                break;
            case "denied":
                document.getElementById('information').innerText = 'Spoil Sport, You have not allowed Notifications';
                break;
        }  
    });
});
</code></pre> 

## Push Notification

To perform push notifications the browser must support the [Push](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/pushapi/) API and service workers, 
since Edge dosen't currently support this I will revisit this when it does. If you want more info, [check this out](https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web).