---
title: Web Audio
authors:
- thebeebs
intro: A look at the Web Audio API
types:
- tutorials
categories:
- web
published: 2017/02/25 12:00:00
updated: 2017/02/25 12:00:00
---






<pre><code class="language-javascript">var context=  new (window.AudioContext || window.webkitAudioContext)();
var oscillator = context.createOscillator();
oscillator.frequency.value = 5000;
oscillator.start();
oscillator.connect(context.destination);
</code>
</pre>

This starts with a tone with a frequency of 5000 which most people with hearing should be able to notice it.

If you create a tone with a frequency greater than 15000 only those under 40 will be able to hear it and a frequency above 17500 can be heard by only by those 18 and younger.

<pre><code class="language-javascript">oscillator.frequency.value = 15000;
oscillator.frequency.value = 17500;
</code>
</pre>

This festive season why not turn your speakers up high and use this method (starting at 17500 and then reducing by 1000 at a time) to figure out who is the youngest in your office. 

If you want the sound to stop simple run this:

<pre><code class="language-javascript">oscillator.stop();
</code>
</pre>

The following demo shows how you could record and visualise audio coming from a Microphone:

[Test Drive Recoder](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/microphone/)

The following demo shows how you can build a simple tuner: 

[A simple tuner example with code talk through](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/webaudiotuner/)

