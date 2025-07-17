---
title: Razor Syntax
authors:
- thebeebs
intro: Razor is a syntax that you can use to create webpa...
types:
- shorts
categories:
- razor
published: 2011/01/12 12:00:00
updated: 2011/01/12 12:00:00
status: archived
---







Razor is a syntax that you can use to create webpages in ASP.NET. The syntax makes it possible to create templates that generate well structured and clean HTML output.

Razor is easy to learn and there is a great [reference here](http://www.asp.net/webmatrix/tutorials/2-introduction-to-asp-net-web-programming-using-the-razor-syntax) if you are planning on Using WebMatrix .

For those developing in ASP.NET MVC then this&#160; [Scott Hanselmanns blog](http://weblogs.asp.net/scottgu/archive/2010/07/27/introducing-asp-net-mvc-3-preview-1.aspx) is a good introduction to razor, you might also want to check out this [video](http://channel9vip.orcsweb.com/shows/Going+Deep/Andrew-Nurse-Inside-Razor/)

Over on [Phil Haack](http://haacked.com/articles/AboutHaacked.aspx)[s blog](http://haacked.com/archive/2011/01/06/razor-syntax-quick-reference.aspx) he produced this handy razor reference chart, which I have duplicated below:
  <table class="matrix" width="630"><tbody>     <tr>       <th valign="top" width="305">Syntax/Sample</th>        <th valign="top" width="10">Razor</th>        <th valign="top" width="313">Web Forms Equivalent (or remarks)</th>     </tr>      <tr>       <td valign="top" width="305">Code Block</td>        <td valign="top" width="10">         <pre class="csharpcode"><span class="asp">@{</span> 
  <span class="rzr"><span class="kwrd">int</span> x = 123;</span> 
  <span class="rzr"><span class="kwrd">string</span> y = <span class="str">"because."</span>;</span>
<span class="asp">}</span></pre>
      </td>

      <td valign="top" width="313">
        <pre class="csharpcode"><span class="asp"><%</span>
  <span class="kwrd">int</span> x = 123; 
  <span class="kwrd">string</span> y = <span class="str">"because."</span>; 
<span class="asp">%></span></pre>
      </td>
    </tr>

    <tr>
      <td valign="top" width="305">Expression (Html Encoded)</td>

      <td valign="top" width="10">
        <pre class="csharpcode"><span class="kwrd"><</span><span class="html">span</span><span class="kwrd">></span><span class="asp">@</span><span class="rzr">model.Message</span><span class="kwrd"></</span><span class="html">span</span><span class="kwrd">></span></pre>
      </td>

      <td valign="top" width="313">
        <pre class="csharpcode"><span class="kwrd"><</span><span class="html">span</span><span class="kwrd">></span><span class="asp"><%</span>: model.Message <span class="asp">%></span><span class="kwrd"></</span><span class="html">span</span><span class="kwrd">></span></pre>
      </td>
    </tr>

    <tr>
      <td valign="top" width="305">Expression (Unencoded)</td>

      <td valign="top" width="10">
        <pre class="csharpcode"><span class="kwrd"><</span><span class="html">span</span><span class="kwrd">>  
</span><span class="asp">@</span><span class="rzr">Html.Raw(model.Message)  
</span><span class="kwrd"></</span><span class="html">span</span><span class="kwrd">></span></pre>
      </td>

      <td valign="top" width="313">
        <pre class="csharpcode"><span class="kwrd"><</span><span class="html">span</span><span class="kwrd">></span><span class="asp"><%</span>= model.Message <span class="asp">%></span><span class="kwrd"></</span><span class="html">span</span><span class="kwrd">></span></pre>
      </td>
    </tr>

    <tr>
      <td valign="top" width="305">Combining Text and markup</td>

      <td valign="top" width="10">
        <pre class="csharpcode"><span class="asp">@</span><span class="rzr"><span class="kwrd">foreach</span>(var item <span class="kwrd">in</span> items) {</span>
  <span class="kwrd"><</span><span class="html">span</span><span class="kwrd">></span><span class="asp">@</span><span class="rzr">item.Prop</span><span class="kwrd"></</span><span class="html">span</span><span class="kwrd">></span> 
<span class="rzr">}</span></pre>
      </td>

      <td valign="top" width="313">
        <pre class="csharpcode"><span class="asp"><%</span> <span class="kwrd">foreach</span>(var item <span class="kwrd">in</span> items) { <span class="asp">%></span>
  <span class="kwrd"><</span><span class="html">span</span><span class="kwrd">></span><%: item.Prop %><span class="kwrd"></</span><span class="html">span</span><span class="kwrd">></span>
<span class="asp"><%</span> } <span class="asp">%></span></pre>
      </td>
    </tr>

    <tr>
      <td valign="top" width="305">Mixing code and Plain text</td>

      <td valign="top" width="10">
        <pre class="csharpcode"><span class="asp">@</span><span class="rzr"><span class="kwrd">if</span> (foo) {</span>
  <span class="kwrd"><</span><span class="html">text</span><span class="kwrd">></span>Plain Text<span class="kwrd"></</span><span class="html">text</span><span class="kwrd">></span> 
<span class="rzr">}</span></pre>
      </td>

      <td valign="top" width="313">
        <pre class="csharpcode"><span class="asp"><%</span> <span class="kwrd">if</span> (foo) { <span class="asp">%></span> 
  Plain Text 
<span class="asp"><%</span> } <span class="asp">%></span></pre>
      </td>
    </tr>

    <tr>
      <td valign="top" width="305">Mixing code and plain text (alternate)</td>

      <td valign="top" width="10">
        <pre class="csharpcode"><span class="asp">@</span><span class="rzr"><span class="kwrd">if</span> (foo) {</span>
  <span class="asp">@:</span>Plain Text is <span class="asp">@</span><span class="rzr">bar</span>
<span class="rzr">}</span></pre>
      </td>

      <td valign="top" width="313">Same as above</td>
    </tr>

    <tr>
      <td valign="top" width="305">Email Addresses</td>

      <td valign="top" width="10">
        <pre class="csharpcode">Hi philha@example.com</pre>
      </td>

      <td valign="top" width="313">Razor recognizes basic email format and is smart enough not to treat the @ as a code delimiter</td>
    </tr>

    <tr>
      <td valign="top" width="305">Explicit Expression</td>

      <td valign="top" width="10">
        <pre class="csharpcode"><span class="kwrd"><</span><span class="html">span</span><span class="kwrd">></span>ISBN<span class="asp">@(</span><span class="rzr">isbnNumber</span><span class="asp">)</span><span class="kwrd"></</span><span class="html">span</span><span class="kwrd">></span></pre>
      </td>

      <td valign="top" width="313">In this case, we need to be explicit about the expression by using parentheses.</td>
    </tr>

    <tr>
      <td valign="top" width="305">Escaping the @ sign</td>

      <td valign="top" width="10">
        <pre class="csharpcode"><span class="kwrd"><</span><span class="html">span</span><span class="kwrd">></span>In Razor, you use the 
@@foo to display the value 
of foo<span class="kwrd"></</span><span class="html">span</span><span class="kwrd">></span></pre>
      </td>

      <td valign="top" width="313">@@ renders a single @ in the response.</td>
    </tr>

    <tr>
      <td valign="top" width="305">Server side Comment</td>

      <td valign="top" width="10">
        <pre class="csharpcode"><span class="asp">@*</span>
<span class="rem">This is a server side 
multiline comment </span>
<span class="asp">*@</span></pre>
      </td>

      <td valign="top" width="313">
        <pre class="csharpcode"><span class="asp"><%</span><span class="rem">--
This is a server side 
multiline comment
--</span><span class="asp">%></span></pre>
      </td>
    </tr>

    <tr>
      <td valign="top" width="305">Mixing expressions and text</td>

      <td valign="top" width="10">
        <pre class="csharpcode">Hello <span class="asp">@</span>title. <span class="asp">@</span>name.</pre>
      </td>

      <td valign="top" width="313">
        <pre class="csharpcode">Hello <span class="asp"><%</span>: title <span class="asp">%></span>. <span class="asp"><%</span>: name <span class="asp">%></span>.</pre>
      </td>
    </tr>
  </tbody></table>