---
title: Saving user preferences with HTML5
authors:
- thebeebs
intro: If you have played with the HTML5 version of the c...
types:
- shorts
categories:
- web
- html5at5
published: 2012/01/12 12:00:00
updated: 2012/01/12 12:00:00
status: archived
---







If you have played with the HTML5 version of the cut the rope, you will notice that it remembers your scores for each game when you return to the site. To achieve this in your own applications you can use [localStorage](http://www.w3.org/TR/webstorage/#storage) which is part of the [Web Storage Specification](http://www.w3.org/TR/webstorage/#storage). Local Storage gives developers a way to to store data in the web browser, which will be available even if the browser is closed and returned to later.<p>The information stored in local storage is only visible to the domain that saved it, and so you can happily place information in the store knowing other, potentially malicious, websites will not be able to access it. 

# # Browser Support

LocalStorage was one of the first HTML5 features to be implemented by the Internet Explorer team in IE8 so unlike some HTML5 features localStorage has very broad browser support caniuse.com say that [87% of of global internet users](http://www.caniuse.com/#search=localStorage) are on a browser that supports it.

Using storage is very straight forward, I&rsquo;ve written a simple example below on JS Fiddle that allows a user to change the background colour based upon a dropdown list. The user selection will be remembered across browser sessions.
<iframe style="width: 100%; height: 300px" src="images/" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>