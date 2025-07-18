---
title: Blogging and documentation
authors:
- thebeebs
intro: One of the problems with blogging is that as soon ...
types:
- shorts
categories:
- web
published: 2011/07/12 12:00:00
updated: 2011/07/12 12:00:00
status: archived
---
















One of the problems with blogging is that as soon as you post something it&rsquo;s out of date. This problem is especially acute when you are a tech blogger, particularly one that writes code examples.<p>I stumbled across an example of this problem when I searched for an Entity Framework Code First Example. I arrived at Scott Guthrie&rsquo;s blog where he gave a great [example](http://weblogs.asp.net/scottgu/archive/2010/07/16/code-first-development-with-entity-framework-4.aspx) of EF code first, problem being that it was based upon the CTP version of EF. I followed the example so that I could generate some test data for my application. One of the classes tripped me up: RecreateDatabaseIfModelChanges wouldn&rsquo;t resolve. I messed around with it for about 5 minutes attempting to guess what the new class name would be in the final version&hellip; I failed. I finally bit the bullet and took a look at the documentation it&rsquo;s now called DropCreateDatabaseIfModelChanges

So there you go: RecreateDatabaseIfModelChanges&nbsp; is now called DropCreateDatabaseIfModelChanges

Here&rsquo;s hoping anyone with this same problem will find this post.
</p>