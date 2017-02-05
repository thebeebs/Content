---
title: Getting Started with WebDriver
authors:
- thebeebs
intro: 'I'm pretty new to WebDriver and thought whilst I h...'
types:
- shorts
categories:
- edge
- testing
- web
published: 2015/12/24 12:00:00
updated: 2015/12/24 13:00:00
status: archived
---

I'm pretty new to WebDriver and thought whilst I had a bit of downtime it look into it a little bit more. WebDriver is a way of automating browsers, it's a standard that's supported by many browsers including Microsoft Edge. If you ever have wanted to automate a user interaction (go to the 1st text box on website x and enter some text press a button and then see if text box now contains some text) then WebDriver may very well be the solution you have been looking for.

For security reasons, WebDriver is disabled by default in Microsoft Edge. To enable it, you need to install the MicrosoftWebDriver server. You can install the server rom here:

*   For Windows 10 Build 10240, install this version of [Microsoft WebDriver](http://go.microsoft.com/fwlink/p/?LinkID=716880).
*   For Windows 10 Fall 2015 Update, install [Microsoft WebDriver Fall 2015 Update](http://go.microsoft.com/fwlink/p/?LinkID=716879).
*   For the latest preview build from the Windows Insider Program, install this version of [Microsoft WebDriver](http://go.microsoft.com/fwlink/p/?LinkId=716882).
You then need to write a test. Currently the Edge server supports C# and Java language bindings.

In C# the Simplest way to get started and give the tyres a kick is create a console app. File New > Visual C# > Console Application. Once you have that you can then add the following Nuget Packages to the app :
<pre>Install-Package Selenium.RC 
Install-Package Selenium.WebDriver 
Install-Package Selenium.WebDriverBackedSelenium 
Install-Package Selenium.Support
</pre>
For simplicity I've added GitHub repository with a basic console app that you can find here: [https://github.com/thebeebs/Simple-Webdriver](https://github.com/thebeebs/Simple-Webdriver)

Inside of Program CS I have a function called GetText. Firstly this function determines where the WebDriver is located. In this instance I am running the test locally on my machine. I have Edge Installed and the required Microsoft WebDriver. When I create the Driver I need to point it at my local program files folder. I'm using Edge in this instance but of course there are Drivers for Chrome, Firefox and Internet Explorer. Also I'm running these tests locally but in a real world scenario you might run the test on a remote machine (that's a topic for another day).

To create the driver I use new EdgeDriver and pass in the location of the WebDriver Exe on my system and an options object that configures how the edge driver will work. In this example all I am setting is the page Load strategy as Eager. This just means that my test will wait for the page to be loaded and the readyState of the DOM to be interactive or complete. 'Eager' is different from 'Normal' in that Eager will start when the DOM readyState moves to interactive, meaning when users can start to interact with the page. As the name suggests, Eager will in some cases start faster than if the load strategy is set to normal, but it should be remembered that the page isn't completely loaded and this may effect some of the tests you are running.

On line 35 I've added the line
<pre>driver.Manage().Timeouts().SetPageLoadTimeout(TimeSpan.FromSeconds(5));
</pre>
This is the amount of time the program will wait for a URL to load before giving up.

I then give the driver a URL and I can then start doing WebDriver magic. In the GitHub example above all I am doing is Finding and Element and Extracting some text but I could code a far more complicated interaction, sending Keystrokes, filling out forms navigating between pages. WebDriver can accomplish many of the common scenarios you will want to test for and could help reduce dramatically the requirements for Manual Testing.
<pre>// Navigate to my blog
driver.Url = "https://blogs.msdn.microsoft.com/thebeebs/";

// Find the first element on my screen with CSS class entry-title and return the text
IWebElement myBlogPost = driver.FindElement(By.ClassName("entry-title"));
return myBlogPost.Text;
</pre>
If you are using WebDriver or thinking about it, let me know in the comments. How are things going with it for you?

&nbsp;

&nbsp;

&nbsp;

&nbsp;