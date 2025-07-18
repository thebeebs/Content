---
title: I want to use HTML5 forms for validation but what about older browsers?
authors:
- thebeebs
intro: The HTML5 forms specification introduces a feature...
types:
- shorts
categories:
- web
- html5at5
published: 2011/12/05 12:00:00
updated: 2011/12/05 12:00:00
status: archived
---
















The HTML5 forms specification introduces a feature that enables you to let the browser handle validation. However, if you use this feature on your website only browsers that support HTML5 validation will validate the form fields; all the other browsers will just ignore the mark-up and allow invalid forms to be submitted.<p>Microsoft have created a jQuery Plugin called unobtrusive validation which allows you to use standards HTML5 Forms syntax but will then use JavaScript to make the form validation work in browsers that don&rsquo;t support HTML5 Form validation. An example of how you would use the library can be found here: [http://jsfiddle.net/qxsS8/](http://jsfiddle.net/qxsS8/)
</p>