---
title: Speech Synthesis API
authors:
- thebeebs
intro: A look into the Speech Synthesis API
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

# # Finding Your Voice

Each browser will have a different set of voices to choose from to get a list all we do is call the 
getVoices method of the speechSynthesis object.
<pre><code class="language-javascript">var voices = window.speechSynthesis.getVoices();
</code></pre> 

You will get an array of speechSynthesisVoiceobjects from the this Method. Each one of the 
objects has the following properties:

- name : A human-readable name that describes the voice.
- voiceURI : A URI specifying the location of the speech synthesis service for this voice.
- lang : The language code for this voice.
- default : Will be true for the default voice used by the browser.
- localService – The API can use a local or remote services to handle speech synthesis. It is true if the voice is local.

# # Further Customisation

The lang attribute gives you the ability to specify the language of the text. 
This will default to the language of the HTML document.

<pre><code class="language-javascript">utterance.lang = 'en-GB';
</code></pre> 

The volume property allows you to adjust the volume of the speech. A float value between 0 and 1 should be specified here. The default is 1.

<pre><code class="language-javascript">utterance.volume = 1;
</code></pre> 

The rate attribute defines the speed at which the text should be spoken. This should be a float value between 0 and 10, the default being 1.

<pre><code class="language-javascript">utterance.rate = 1;
</code></pre> 

The pitch attribute controls how high or low the text is spoken. This should be a float value between 0 and 2, with a value of 1 being the default.

<pre><code class="language-javascript">utterance.pitch = 1;
</code></pre> 