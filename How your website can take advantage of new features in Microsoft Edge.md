---
title: 'How your website can take advantage of new features in Microsoft Edge'
authors:
- thebeebs
intro: 'There are hundreds of new standards, specifications and features that are now in Microsoft Edge. Here are 5 that I am currently exploring.'
types:
- overview
categories:
- web
- browsers
---

There are hundreds of new standards, specifications and features that are now in Microsoft Edge. Here are 5 that I'm currently exploring.

#Web Audio API

Web audio processing has been in browsers for some time with Firefox leading the charge with an implementation nearly 3 years ago, the specification is now stable and Edge very recently added support for the latest standard meaning that you have a JavaScript API that allows you to perform audio processing. 

It should allow you to interrogate a music file so you can draw the wave length or perhaps base some animation on the music that is currently playing. It also opens up the possibility for applying effects and even generating music files from scratch.

To learn more you can take a look at the [Microphone demo over on our test drive site](http://dev.modern.ie/testdrive/demos/microphone/). It allows you to record audio, playback recordings, apply effects and ultimately download your recordings. 

#Get User Media

That last demo also used getUserMedia which allowed it to capture the microphone input from your PC. Using this feature we are able to capture data from a range of devices such as the Webcam and Microphone. 

Over on the [testdrive](http://dev.modern.ie/testdrive/demos/photocapture/) site we have a simple demo and tutorial that shows you how to capture images from your webcam and draw them to a canvas element. Obviously once you have that image on a canvas element you are free to manipulate it any way you please.


#CSS3 Filters
Once you have an image from your webcam (or any other source) maybe you'd like to get all "instagrammy" and add some filters to it. The new CSS3 filters feature allows you to apply CSS filters onto any element, you could even couple it with CSS animation to create some really interesting effects. CSS3 filters is still experimental in Edge and so, at time of writing, you will need to enable the feature by going to about:flags and checking the box called:  Enable CSS filter property.

We have an [interactive demo of the CSS3 filter over on the test drive website](http://dev.modern.ie/testdrive/demos/css3filters ), but remeber if you are using Microsoft Edge you will need to switch the feature on in about:flags 


#A sort of Modernizr for CSS

You might be aware of a JavaScript library called Modernizr that allows you to test Browser features with a simple API. Well now browsers such as Edge have a new way of determining browser CSS capabilities with a simple syntax called @supports.

Fundamentally, we can surround CSS elements with support blocks. Browsers that don't support @supports will ignore the block as per the CSS spec and browsers that do support @support will test to see if the browser supports a particular feature (in the example below linear-gradient) and if it does it will use it…. So in Microsoft Edge the following rule will result in green linear-gradient rather than a background-color of red.

    b {
      background-color: red;
    }
    @supports ( background: linear-gradient(0deg,red,red) ) {
      b {
        background: linear-gradient( 0deg, rgb(65, 150, 44), rgb(26, 219, 73) );
      }
    }

You can see a full explanation over on the (test drive site)[http://dev.modern.ie/testdrive/demos/@supports/]. 


#The next version of JavaScript
Microsoft Edge has great support for the next version of JavaScript (ES2015 aka ES6) infact it has the most complete implementation of any modern browser with current [support at around 80%](https://kangax.github.io/compat-table/es6/) of the specification. ES6 It brings a whole new set of language features to JavaScript. Here are 3 examples of features that are already in Edge. For a complete overview including current browser support take a look at [this compatibility table](https://kangax.github.io/compat-table/es6/). 

##Classes

ES6 introduces a syntax for declaring classes. A class allows you to create new objects using prototype-based inheritance, constructors, instance methods, and static methods. For more information about classes, see [Classes in JavaScript: Exploring the Implementation in Chakra](http://blogs.msdn.com/b/ie/archive/2014/12/15/classes-in-javascript-exploring-the-implementation-in-chakra.aspx).

    /* ES6 code, with classes */
    class Civilian {
        constructor(name) {
            this.name = name;
        }
        danger() {
            console.log("Run away!");
        }
    };
    
    class SuperHero extends Civilian {
        constructor(name, ability) {
        super(name); // Call the super class constructor
            this.ability = ability;
        }
        danger() { // Override the super class method
            console.log("Never fear, " + this.name + " is here!");
            console.log(this.name + " uses " + this.ability + ". It's super effective.");
        }
    };

##Promises

Promises provide you with a mechanism to schedule work to be done on a value that has not yet been computed. It is an abstraction for managing interactions with asynchronous APIs. Promises allow easier and cleaner asynchronous coding. If you've done any WinJS promises won't be new to you. But now we have complete support directly in the browser without the need for 3rd party libraries. [Check out Mozilla for a detailed overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise): 

    function timeout(duration = 0) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, duration);
        })
    }
    
    var p = timeout(1000).then(() => {
        return timeout(2000);
    }).then(() => {
        throw new Error("hmm");
    }).catch(err => {
        return Promise.all([timeout(100), timeout(200)]);
    })

##Arrow Function

The arrow (=>) function provides you with a shorthand for the function keyword with lexical "this" binding. So basically writing an anonymous function is easier and an issue like the one below will now be a thing of the past: There is some very detailed coverage over on [Mozillas documentation] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

    // Lexical this
    var bob = {
    _name: "Bob",
    _friends: [],
    printFriends() {
        this._friends.forEach(f =>
        console.log(this._name + " knows " + f));
    }
    }
