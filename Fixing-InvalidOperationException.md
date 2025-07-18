---
title: Fixing InvalidOperationException No database provider has been configured for
  this DbContext.
authors:
- thebeebs
intro: I had an odd error popup on my when building a website recently.
types:
- fix
categories:
- web
published: 2017/01/09 12:00:00
updated: 2017/01/09 12:00:00
---















I had an odd error popup on my when building a website recently in ASP.Net Core 1.0 using EF core 1.0. It happened when I deleted an OnConfiguring method that I thought I no longer needed.

<pre><code class="language-csharp">protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
	// I had my connection string being set up here
	optionsBuilder.UseSqlServer("mycoonection string was here");
        }
</code></pre>

I got the error: InvalidOperationException: No database provider has been configured for this DbContext. Which confused me because I was inserting the connection string when I established the database in my startup.cs file.

<pre><code class="language-csharp">services.AddDbContext<PersonalSiteContext>(options => options.UseSqlServer(connection)); 
</code></pre>
Trying to dig into the issue further I also deleted a default constructor that I had because I reasoned, why should I have a default constructor when I only initialise the context with dependency injection which doesn't use the default constructor. I deleted it in case this was the issue. I then got this error:

<pre><code class="language-csharp">ArgumentException: Context does not have a default constructor.
</code></pre>
How weird. What the hell is constructing this method. I dug into the stack trace but it was full of system calls that I didn't recognise, but it looked like it was being initialized by something outside the code I'd written. 

After 20 or so minutes I found the error. For some reason a few commits previous I had mistakenly added the Context Object to the Signature of my Index controller. It shouldn't have been passed in In fact I should have been referencing the context object on the Controller class. 

<pre><code class="language-csharp">public IActionResult Index(PersonalSiteContext context)
{
        var overview = Services.Content.FetchOverview(context);
        return View(overview);           
}
</code></pre>
So I corrected it and my bug went away.

<pre><code class="language-csharp">public IActionResult Index()
{
        var overview = Services.Content.FetchOverview(this.context);
        return View(overview);           
}
</code></pre>
Lastly I added my dependency injection where it should have been, the class Constructor: 

<pre><code class="language-csharp">private IMemoryCache memoryCache;
private PersonalSiteContext context;

public HomeController(IMemoryCache memoryCache, PersonalSiteContext context) {
        this.memoryCache = memoryCache;
        this.context = context;
}
</code></pre>
Hope this ends up helping someone.

