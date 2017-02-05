---
title: GitHub Permission to <<repository>> denied to <<username>>
authors:
- thebeebs
intro: 'I was trying to use terminal on my Mac to upload s...'
types:
- shorts
categories:
- article
published: 2014/08/21 12:00:00
updated: 2014/08/21 13:00:00
status: archived
---

I was trying to use terminal on my Mac to upload some code to GitHub using an account that was different to my usual one. I set the following three settings:

<pre>git config --global user.name "My Name"
git config --global user.email "myemail"
git config --global GitHub.user myusername
</pre>

Sadly I kept receiving a 403 error saying my usual username couldn't access the repository with my usual account details. Somehow my username and password were being cached. Now I don't recall setting this up but somewhere along the line I used KeyChain to save my password. I tried a number of things on the command line to resolve this (all I really wanted to get was a prompt for a username and password). In the end I found that I had to delete the Keychain entry for my old account and Magically the username and password prompt came back.

To delete a keychain entry on Mavericks. Pres cmd + space then type key chain. Select Keychain Access. In the new window that pops up search for GitHub. Then bring up the context menu for the GitHub entry and choose delete. Now when you try to push from command line, it will prompt you for your username and password.