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

## The SDK

You can get the SDK from the following location: [.net compiler platform SDK](https://marketplace.visualstudio.com/items?itemName=VisualStudioProductTeam.NETCompilerPlatformSDK)

