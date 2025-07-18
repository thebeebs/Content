---
title: How do you test the touch / on-screen keyboard inside the simulator?
authors:
- thebeebs
intro: I got asked this question on email last week. The ...
types:
- shorts
categories:
- win8at8
published: 2012/08/06 12:00:00
updated: 2012/08/06 12:00:00
status: archived
---
















I got asked this question on email last week. The simulator, for those that don't know, is a way to test your Windows 8 application on simulated hardware. You can, for example, simulate a higher resolution or Pixel density than your actual machine. Amongst other things it also allows you to simulate touch events.

To test touch you can simply click the hand icon, the simulator will then treat click events as if they were touch events. To test the touch keyboard simply click in any test field, because you are simulating touch the on screen keyboard will appear.

![A picture of the on screen keyboard inside the Windows8 simulator](images/5327.Keyboard_3.jpg "Touch Keyboard")