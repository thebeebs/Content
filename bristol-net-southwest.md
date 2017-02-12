---
title: 'A man, the Roslyn compiler and an Azure VM. A peek into the .NET Compiler'
authors:
- thebeebs
intro: 'I am in Bristol to talk about the Microsoft C# compiler.'
types:
- speaking
categories:
- meetup
published: 2017/02/13 18:30:00
updated: 2017/02/13 19:30:00
---

I'm heading down to Bristol for a meetup at dot net southwest where I will be giving the talk "A man, the Roslyn compiler and an Azure VM.
 A peek into the .NET Compiler"
 
Stuff from the event can be found here:
* Slides [Roslyn](https://1drv.ms/p/s!AlEOpfeanUR1ru5ujxXJDFIjY2WlcA)

## Oh Roslyn. 

Such a cool name. Such promise. Alas the fun police at Microsoft decided that project Rosyln, the wonderfully awesomely name 
for the the new .net compiler would infact be converted to "The Microsoft .net Compiler Platform". 

During the talk. I make a joke about Roslyn and it's similarity to Roxanne by the police. This joke never works. I will 
increment the following number everytime this joke fall flat on it's face: 5

## What is the .net Compiler Platform?

The .NET Compiler Platform is a major update of the C# and VB compilers. But, “Roslyn” is not just about compilers but an open 
platform that provides an API that provides an object model on top of the C# and VB compilers and language services so anyone 
can extend the development experience enriching the IDE with refactoring, code analysis and custom diagnostics.  
It enables building code analysis tools with the same APIs that are used by Visual Studio.

Previously the .net compiler was a black box. Rosyln opens the black box. And inside there are some pretty interesting things.

The original compilers (csc.exe and vbc.exe) are written in Native code. Roslyn os written in managed code, 
The advantage of building them in managed code is that users can reference the real compilers as libraries 
from .NET applications (no wrappers needed).

## Why Bother
Building a compiler like Roslyn is a big job, it's taken years I estimate the repro contains 4.6 million 
lines of code and has over 191 contributors. Unless someone is a really ranty commenter, that's a lot of naughts and ones.

So it does beg the question, Why Bother. Well, as a company we have lots of people that use C# and in turn lots of people who would benefit
from a more open compiler.

For starters there are the 10s of developers that build the language features in Visual Studio, they now have a clean shared platform to build on 
top of, they can build new features faster. Then there are the thousands of developers that
are building developer productivity. Like the people at [DevExpress behind Code Rush](https://www.devexpress.com/Products/CodeRush/) which is
 built on top of Roslyn.

 Finally there are 100,000 of VB and C# developers that will benefit from better tooling inside of Visual Studio and the add ons that
 partners can now build. They may also wish to take advantage of the new SDK to create code fix and diagnostic tools that can now easily be built.

## The SDK

You can get the SDK from the following location: 
[.net compiler platform SDK](https://marketplace.visualstudio.com/items?itemName=VisualStudioProductTeam.NETCompilerPlatformSDK)

There are a couple of things that can trip you up with this. 

The first is that you will also need the Visual Studio SDK installed 
if you want to create code fixes and analysers. Some places give out of date instructions on how to install this. You now install it either
when installing VS (by selecting to add the SDK) or if you already have VS 2107 installed you will need to go to File New Project > Open the Installer
and select to install the SDK. (In 2015, I think you get to the installer in Program Features > Change).

When you have both SDK's you should now have an project option called "Analyzer with Code Fix" in Visual C# > Extensibility. If you don't you 
should check that the .net framework selected is above 4.6. If you still do not see the project type, toggle the extension on and off in 
Tools > Extensions and Updates > Disable. You will have to restart VS between disabling the extension and enabling it.

## What uses Roslyn

The first IDE to use Rosyln was Web Matrix (The lightweight editor that's now been super seeded by VS Code) and there was a 
preview for Visual Studio 2013. However Visual Studio 2015 is the main IDE that Roslyn is used and of course 2017 is also using Roslyn. Roslyn is also
on of the foundational building blocks that made Visual Studio for Mac possible. 

## .NET Compiler Platform Architecture

I've never built a compiler but I have been reliably informed that you can think of the .net compiler as being split into 5 parts.
Parser, Symbols, Metadata Import, Binder and IL Emitter. Each of those parts has an API associated with it: 
Syntax Tree API, Symbol API, Binding and Flow Analysis API, Emit API.

These API's are what Visual Studio will call to implement some of it's productivity capabilities. For example, the Syntax Tree API is used to
colourise the source code in the editor or provide collapsible outlining.

There are two sets of APIs. The Compiler APIs and the workspace APIs.



