---
title: Snippets
authors:
- thebeebs
intro: I demo quite a bit in Visual Studio and use snippe...
types:
- shorts
categories:
- web
published: 2015/12/11 12:00:00
updated: 2015/12/11 12:00:00
status: archived
---







I demo quite a bit in Visual Studio and use snippets where possible to make my code demos less tedious. I thought I'd document here what tools I use and a few gotchas.

Sadly Visual Studio doesn't have a great snippet editor (which seems ridiculous to me) however, the fantastic Matthew Manela has created [Snippet Designer](https://github.com/mmanela/snippetdesigner "Snippet Designer on Github") which is a Visual Studio add-in that allows you to easily create and edit your snippets.

Once installed you can go to **File > New > File...** (or press CTRL + N) then on the left select Snippet Designer then choose Code Snippet.

This will popup an editor that allows you to add your code. You Need to give your snippet a name and also a shortcut. The shortcut is what you will type inside visual studio to bring up the snippet.

GOTCHA: When creating snippets never use a hyphen "-" in the name. In fact it's possibly best not to use any symbols, that's because it breaks the auto insert feature. If you find yourself typing the name e.g. "mywonderfulsnipper-v1" and then press tab twice to insert it in to the document it will fail. Well I say "fail" but what it will actually do is add the name of your snippet and give you no clue as to why the snippet hasn't worked. I spent 2 hours figuring out that one, so you don't have to.

I save my snippets into a OneDrive folder called Snippets, so they get to all of my machines (Perhaps a GitHub repo would be better so I could track changes and share them). If I am working on a demo (this week I am working on Widows Hand On Labs) I will choose a unique, short descriptor such as: **whol** (windows Hands on labs) in the Snippets folder I add that folder. I then name any snippet in that folder **whol{{SnippetNumber}}{{DescriptiveName}}** so I might have **whol1AddButton **Snippet shortcuts are not case sensitive and so I find camel casing them makes it easier to scan and read, but when I actually type the shortcut into VS it's all in lower case.

Finally I add the Snippet Folder to My Snippets: **"Tools > Code Snippet Manger..." **if you click add and select the OneDrive Folder it will add all of the snippets in the sub folders too. Also every time VS restarts it will reload the snippets from this folder.

If you make changes to your snippets, or add new snippets you will need to restart Visual Studio before the changes are reflected.

And now I can happily sit in Visual studio and type my shortcuts and get my code snippets. In my demo scripts I just add a reminder of the snippet name like this:

**SNIPPET**: whol1AddButton

And that's it. My snippet management.

&nbsp;