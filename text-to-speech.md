---
title: Speech Synthesis API
authors:
- thebeebs
intro: 'A look into the Speech Synthesis API'
types:
- tutorials
categories:
- browsers
- web
published: 2017/03/11 12:00:00
updated: 2017/03/11 12:00:00
---

In the example above we have two elements on the page a button and a p element that I am using to display information to give some feedback.

<pre><code class="language-html">&lt;p id=&quot;information&quot;&gt;&lt;/p&gt;    <br/>&lt;button id=&quot;button&quot;&gt;Speak&lt;/button&gt;
</code></pre>

To test that the browser is capable of supporting notifications I check to see if Notification appears on the window object. I then
give the user a little feedback about support and I enable/disable the button.

<pre><code class="language-javascript">if (!('speechSynthesis' in window)) {
    document.getElementById('information').innerText = 'Speech Synthesis is not supported';
    document.getElementById('button').disabled = true;
}
else {
    document.getElementById('information').innerText = 'Good news Speech Synthesis is supported in your browser';
    document.getElementById('button').disabled = false;
}
</code></pre>

To start text to speech I first handle the button click.

<pre><code class="language-javascript">document.getElementById('button').addEventListener('click', function () {// code goes here})
</code></pre> 

Next I set up a new Utterance, I pass what I would like to say to the SpeechSynthesisUtterance when I create one.
<pre><code class="language-javascript">var utterance = new SpeechSynthesisUtterance("Hello and Welcome to thebeebs dot co dot uk");
</code></pre> 

To actually get the browser to speak the utterance, I call the speak method of the speechSynthesis object. I pass in the utterence I created
in the previous line.
<pre><code class="language-javascript">window.speechSynthesis.speak(utterance);
</code></pre> 

