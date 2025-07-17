---
title: Managing an Agile project
authors:
- thebeebs
intro: I have worked as a Developer Evangelist for around...
types:
- shorts
categories:
- article
- c#
published: 2013/01/10 12:00:00
updated: 2013/01/10 12:00:00
status: archived
---







I have worked as a Developer Evangelist for around 3 years now and whilst I still code, it&rsquo;s been quite some time since I have worked on a software project. Over Christmas this changed as I found myself building a service to help people with no coding skills build Windows 8 Applications. <p>Since I was the lead developer, Architect, Project Manger, Tester, Junior Developer and cleaner, I felt it was good opportunity to try the cloud version of [Microsoft's Team Foundation Server](http://tfs.visualstudio.com/). I figured, if I didn&rsquo;t get on with it, I was only going to upset myself.

Ordinarily I&rsquo;d use a mix of technologies depending on if it was me or someone else running the software project, but generally speaking these would range from Subversion, Git or TFS for the source control, MSTest, NUnit and QUnit for the tests and something like cruise control or Team City for continuous Integration.

I&rsquo;d then manage the project on BaseCamp or MSProject (I have tried loads of tools, all have pro&rsquo;s and cons &ndash; the biggest con of most is that I never remember their names). I&rsquo;d also likely resort to good old fashioned post-it notes to manage the backlog.

In summary, there are lots of moving parts and different systems that integrate with each other with varying degrees of success.

# # TFS in the Cloud is brilliant

There i said it. In my experience the software you use to manage your source control and build process is only as good as the guy that set the whole thing up. If they know what they are doing, you are living the dream, if they didn&rsquo;t, you are in software building hell. That's what makes [http://tfs.visualstudio.com](http://tfs.visualstudio.com) so good, all that crazy set up and configuration is completely taken away and you can have a system set up and running in about 10 minutes.

So far these are the things I really liked:

*   It&rsquo;s free for up to 5 users, so I could get started without having to raise a PO.
*   The beginners guide is really straight forward and explains all the basics very concisely.
*   Adding Backlog and work items is really easy.
*   It has a board view so I can see what is and isn&rsquo;t in progress
*   It integrates directly into Visual Studio to I can check-in my code changes directly against work items which in turn reflects in the systems so that others can see the projects progress.
*   You don&rsquo;t have to use TFS as your source control &ndash; You can use Git too which will make it easier for me as the UI developer I plan to use uses Git pretty much exclusively and I don&rsquo;t fancy paying him to learn TFS when I only can afford a few weeks of his time.
*   You can have the system run your tests on check-in so you don&rsquo;t need a separate continuous integration server.
*   Merging and code reviews are as easy to manage as they are with TFS

It&rsquo;s still early days, but so far&hellip; I bloody well love it.
</p>