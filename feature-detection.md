---
title: Feature Detection
authors:
- thebeebs
intro: I was in a bar tonight talking to a developer abou...
types:
- shorts
categories:
- javascript
published: 2010/11/16 12:00:00
updated: 2010/11/16 12:00:00
status: archived
---
















I was in a bar tonight talking to a developer about JavaScript/HTML5 and IE9. I mentioned that feature detection is the best way to implement HTML5 on production sites and he&rsquo;d never heard of it, I&rsquo;ll write a little more about it in the morning but I promised I'd throw up a link for him to take a look at tonight.<p>Feature Detection in a nut shell: Basically when it come to HTML5, CSS3 you should detect if a browser is capable of doing something before you attempt to do it and fall back to something else if it is not possible. You should never use an If statement against a browser vendor prefix or version number&hellip; because browser vendors can and will change the capabilities of browsers over time.

There are a number of tools to achieve this, you could even write your own test quite simply. I use modernizer frequently and its great to test CSS3 and HTML5 capabilities, you can learn more here: [http://www.modernizr.com/](http://www.modernizr.com/).
</p>