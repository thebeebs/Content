---
title: 'The 5 things you need to do to make your website rock on Microsoft Edge'
authors:
- thebeebs
- mkearn
intro: 'Edge is Microsoft's new web browser and will be the default browser in Windows 10. Since Upgrades from Windows 8 and 7 will be free to most users, you can expect there will be a huge influx of Edge users hitting UK sites when it's released on July 29th. So here are 5 ways in which you can make sure your site rock on Edge.'
tags:
- web
- edge
---

Edge is Microsoft's new web browser and will be the default browser in Windows 10. Since Upgrades from Windows 8 and 7 will be free to most users, you can expect there will be a huge influx of Edge users hitting UK sites when it's released on July 29th. So here are 5 ways in which you can make sure your site rock on Edge.

## Update your JavaScript Libraries
Common libraries like jQuery are often updated to address bugs when new browser versions are released. So by simply updating your JS frameworks you can avoid many compatibility bugs with Edge. In our internal research we found that 57% of the top 20,000 sites are using JavaScript frameworks that have isssues that have been fixed in newer versions of the same library. You can use the [SiteScanner here ](http://dev.modern.ie/tools/staticscan/) to determine if you are using out of date JavaScript Frameworks on your sites.

## CSS Prefixes
CSS prefixes are used by browser vendors to impement new, emerging CSS features before it has been fully ratified by the W3C. If a vendor implements a CSS prefix, it will look something like the example below (this is an IE-specific implementation of the 'hypens' feature to hyphenate text accross multiplelines):

`-ms-hyphens: auto;`

It's really common for sites to have missing vendor-specific prefixes or 
have implemented vendor-specific prefixes when they are not required in common CSS properties. This may cause a webpage to render incorrectly in Microsoft Edge or other modern browsers. 

Browser vendors are using prefixes much less now because of the management problems associated with them, some browsers such as Microsoft Edge do not use prefixes at all. 

Where possible, avoid the use of vendor-specific prefixes, however, if you absolutley have to use vendors prefixes, use [Grunt PostCSS](https://github.com/nDmitry/grunt-postcss) to automate the management of prefixes within your CSS.

##Browser Detection
Some webpages use browser detection techniques to determine how the webpage should render across many different 
versions of browsers. We recommend using feature detection; a practice that first determines if a browser 
or device supports a specific feature and then chooses the best experience to render based on this information. 

Feature detection is a great alternative to browser detection and is commonly used via popular JavaScript libraries like [Modernizr](http://modernizr.com/) or through feature detection code. Feature detection is often used with Polyfills to implemented modern features in older browsers that do not support them natively.

For more details on how to use Modernizr, Polyfills and other compatibility techniques, see [Martin Kearn's article on 'Tune, modernise and optimise your website'](http://blogs.msdn.com/b/martinkearn/archive/2015/01/29/tune-modernise-and-optimise-your-website.aspx) 

##Get plugin free
Edge dosen't support plugins and so it's a good time to consider how to move away from propriotry plugins like flash and Silverlight. Edge does support Flash, but rather than using a plugin arcitecture Flash is delivered with the browser and is updated and patched centrally by the Edge Team in collaboration with Adobe. For some site's, moving away from plugins is pretty straight forward. However, many sites will find this difficult, particularly those that are delivering media content. The Edge team have provided guidence on how to Move to HTML for premium content [over on the IE Blog](http://blogs.windows.com/msedgedev/2015/07/02/moving-to-html5-premium-media/).

##Edge Rendering Mode

If the <!DOCTYPE> directive is missing or doesn't specify a standards-based document type, 
Edge may incorrectly display your page. The modern.ie scanner runs a simple test to determine that your site is set up correctly, [just to enter your site url](http://dev.modern.ie/tools/staticscan/)  into our scanner to find out quickly if it passes, if you want to see what the actual test looks for then the code for the scanner is [over on GitHub](https://github.com/MicrosoftEdge/static-code-scan/blob/master/lib/checks/check-doctype.js) 




