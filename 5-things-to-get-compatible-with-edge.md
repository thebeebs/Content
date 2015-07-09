---
title: 'The 5 things you need to do to make your website rock on Microsoft Edge'
authors:
- thebeebs
- -mkearn
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
It's really common for sites to have missing vendor-specific prefixes or 
have implemented vendor-specific prefixes when they are not required in common CSS properties. 
This may cause compatibility problems with how a webpage renders in Edge or other modern browsers.

##Browser Detection
Some webpages use browser detection techniques to determine how the webpage should render across many different 
versions of browsers. We recommend using feature detection – a practice that first determines if a browser 
or device supports a specific feature and then chooses the best experience to render based on this information.
 Feature detection is a great alternative to browser detection and is commonly used via popular JavaScript libraries 
 like Modernizr or through feature detection code.

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




