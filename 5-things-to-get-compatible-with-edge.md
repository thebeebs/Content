---
title: 'The 5 things you need to do to make your website rock on Microsoft Edge'
authors:
- thebeebs
- mkearn
intro: 'How to make your site work with Edge.'
tags:
- web
- edge
---


## Update your JavaScript Libraries
Common frameworks or libraries like jQuery are often updated to address compatibility 
problems when new browser versions are released. You should ensure you update frameworks & libraries to prevent or 
fix compatibility problems with how your webpage renders in Edge.

## CSS Prefixes
CSS prefixes are used by browser vendors to impement new, emerging CSS features before it has been fully ratified by W3C. If a vendor implements a CSS prefix, it will look something like the example below (this is an IE-specific implementation of the 'hypens' feature to hyphenate text accross multiplelines):

`-ms-hyphens: auto;`

It's really common for sites to have missing vendor-specific prefixes or 
have implemented vendor-specific prefixes when they are not required in common CSS properties. This may a webpage to render incorrectly in Microsoft Edge or other modern browsers. 

Browser vendors are using prefixes much less now because of the management problems associated with them, some browsers such as Microsoft Edge do not use prefixes at all. 

Where possible, avoid the use of vendor-specific prefixes, however if you absolutley have to use vendors prefixes, use [Autoprefixer](https://github.com/postcss/autoprefixer) to automate the management of prefixes within your CSS.

##Browser Detection
Some webpages use browser detection techniques to determine how the webpage should render across many different 
versions of browsers. We recommend using feature detection; a practice that first determines if a browser 
or device supports a specific feature and then chooses the best experience to render based on this information. 

Feature detection is a great alternative to browser detection and is commonly used via popular JavaScript libraries like [Modernizr](http://modernizr.com/) or through feature detection code. Feature detection is often used with Polyfills to implemented modern features in older browsers that do not support them natively.

For more details on how to use Modernizr, Polyfills and other compatibility techniques, see [Martin Kearn's article on 'Tune, modernise and optimise your website'](http://blogs.msdn.com/b/martinkearn/archive/2015/01/29/tune-modernise-and-optimise-your-website.aspx) 

##Get plugin free
Because more and more browsing takes place on an ever wider variety of devices, and browsers on them, 
more and more consumers are browsing without plug-ins. Delivering a great site experience to consumers 
who browse the Web plug-in free is important work that sites must do to reach the widest audience. 
With HTML5, modern browsers and sites can deliver a great consumer experience even without plug-ins.

“Plug-in” refers broadly to browser extensions that run native client code using low-level browser interfaces.  
For example, here is a basic description of Webkit’s approach; the IE equivalents are ActiveX controls and 
Browser Helper Objects. Web sites use a wide variety of plug-ins; Adobe Flash is one of the most common.

##Rendering Mode

If the <!DOCTYPE> directive is missing or doesn't specify a standards-based document type, 
Edge may incorrectly display the page in quirks mode.




