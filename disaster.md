---
title: Disaster
authors:
- thebeebs
intro: 'The worst day I had at work was when I was 23'
types:
- shorts
categories:
- personal
- popular
published: 2015/12/10 12:00:00
updated: 2015/12/10 13:00:00
status: archived
---

The worst day I had at work was when I was 23.

The guy that ran operations in my small company had left and I was put in charge of the IIS servers that ran the websites for about 40 or so clients. I was responsible for backups and replication of those sites from our London server over to our Amsterdam server. Around 2 weeks into this new responsibility, our primary server was damaged after a flood in the datacentre and the server died.

The moment I realised our backups hadn't been working -and that was my fault - I was physically sick. I was young, it was a big deal and I felt like an idiot.

From that moment on, I've always been obsessed by backups and disaster recovery. I've never lost data since, I've experienced lots of outages and disasters... but last week I came stupidly close.

2 years ago I built an internal website, I built it over a few months. There were lots of late nights and frankly it was a huge rush job. To get the project in on time I cut lots of corners. One of the them was a disaster recovery plan or even basic backups.

That stupid decision came back to bite me last week. I was cleaning up my demo azure account (the one I use for events and talks I give) I noticed I had 10 or so database servers, so I started deleting them. The deletion procedure in SQL Azure requires you to delete the database server and then confirm the deletion by listing all of the databases on the server and asking you to type the name of database server to confirm you want to delete it.

There are huge warnings all over the page saying, "This deletion is irreversible are you sure" like an idiot, I typed in the database server name to confirm the deletion and after pressing enter to confirm deletion, one of the database names I'd seen listed registered with my tiny little brain and it hit me like a slow bullet. "Wait a second, was that my production database? Oh crap, that was my production database. Oh ^"%))@*8*8** That was ***&^&"ing production database, why is my production database on my demo account?"

I then realised - nothing in the Azure portal allowed me to undo that database server deletion. It was gone! And ten minutes later I realised I hadn't created a backup job. Idiot, Idiot, Idiot.

I did say earlier "Last week I came stupidly close" in the end, I didn't lose the database. I went to bed thinking I'd destroyed the website. I'd lost every last bit of data, I couldn't believe my stupidity. When I woke up in the morning I wondered if Azure Support could help me. So I took out a [developer support subscription ](http://azure.microsoft.com/en-us/support/plans/?WT.mc_id=Support_Plan_510979)(6 months minimum term) at £17.72 per month and created a support ticket saying:

"I deleted am SQL server as soon as I had I realized I had an important database on the server. The site says that its irreversible... is it? any way to recover?"

I had an 8 hour SLA to tickets, but they were back in a few minutes asking me the name of the server and databases. Within a few hours they'd managed to recover the entire server with all my databases on it. Luckily, they were able to reach into their own disaster recovery backups and were able to restore the server back to its condition a few seconds before I destroyed it.

If I could have kissed that support engineer I would have.

Long story short. Always arrange backups. On something like Azure this is ridiculously easy. And with the new Azure SQL Offerings (not the SQL database server I had) [Backups are built in](https://msdn.microsoft.com/en-us/library/azure/jj650016.aspx).

For me that support engineer made me one happy Azure customer, by saving me from myself. I'm so glad I don't manage my own servers anymore.