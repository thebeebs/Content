---
title: How can I show a graph using HTML5?
authors:
- thebeebs
intro: There are a number of ways to create graphs in HTM...
types:
- shorts
categories:
- html5
- web
- html5at5
published: 2011/12/23 12:00:00
updated: 2011/12/23 12:00:00
status: archived
---







There are a number of ways to create graphs in HTML5, you could use canvas for example, but one of my favourite ways is to go outside of the HTML5 spec and use an associated technology called Scalable Vector Graphics (SVG).<p align="left">Using SVG you can create really nice data visualisations that don&rsquo;t degrade when scaled. There are a number of libraries that can get you up and running quickly. [Rapha&euml;l](http://raphaeljs.com) is one of them.

The graphing portion of [Rapha&euml;l](http://raphaeljs.com) is called [gRapha&euml;l](http://g.raphaeljs.com/) it uses SVG when support is available but when it isn&rsquo;t it falls back to VML. VML is a technology similar to SVG supported by Internet Explorer 6, 7 and 8. This means that any graphs created using this library will work in Firefox 3.0+, Safari 3.0+, Opera 9.5+ and Internet Explorer 6.0+. Which means there is nothing holding you back implementing these today on your website.

Rapha&euml;l has some incredible examples: 

Pie Chart: [http://raphaeljs.com/pie.html](http://raphaeljs.com/pie.html "http://raphaeljs.com/pie.html")

Line Chart: [http://raphaeljs.com/pie.html](http://raphaeljs.com/pie.html "http://raphaeljs.com/pie.html")

Bar Charts: [http://g.raphaeljs.com/barchart2.html](http://g.raphaeljs.com/barchart2.html "http://g.raphaeljs.com/barchart2.html")

If you are looking for an easy to use library with great documentation&nbsp; there is also [Kendo UI](http://demos.kendoui.com/dataviz/overview/index.html) DataViz. It&rsquo;s free for open source projects but also comes with a commercial licence with 1 year subscription & support. It makes a great choice if you are building a Line of business application or if you want something that works straight out of the box with very little configuration.
</p>