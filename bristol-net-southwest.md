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

There are two layers of APIs. The Compiler, and the workspace. At a compiler level you can take a.net file and figure stuff out about it. Compile
a Syntax tree and query the code. However, code if often spead about over a solution and contains multiple projects. To reason over that 
you will need to use the workspace API's this will ensure that you can think about your code holistically and have more capability
since Rosyln will have a better understanding of how your code interconnects.

## Syntax Trees
If you think about your C# code as files then the first step of compiling it is to convert all those strings of text into a Syntax tree that
represents the .net code. In Roslyn a Syntax tree is immutable (it can't be changed). To make modifications you will need to copy it and 
generate a brand new tree.

### Resilient
It's resilient in that even if your c# is a total uncompilable mess, Rosyln isn't going to fail. It will construct a tree and show the errors 
where is finds them. This is important since Rosyln is running with every keypress you take in Visual Studio. During editing a C# file 
there will be many times that a C# file is without braces or just plain wrong. Since Rosyln is used to show you where the code is wrong it 
needs to be able to construct a tree in any situation.

### Complete
If you ToString a Syntax tree the C# code generated will be an exact replica of the code that went into creating it. Including the line spaces,
tabs and all the other Triva that isn't code, but is crucial to reconstruct the originating file.

### Efficient
It might seem like a huge task to construct a new Syntax tree for each and every change you make to any file in your project. However, in the near
decade that Roslyn has been under development the team have tuned performance to ensure it is very efficient. I'm not a good enough C# developer
to fully understand, however, I have been told that the Roslyn code base is a bit of a master class in managed language performance. I guess this 
makes sense since the folk writing the C# also understand intimately how it's being compiled to Intermediate Language.

## Syntax Nodes
When the C# file is parsed and converted into a tree each element is converted into objects. The bit that make up the important blocks of code are 
called nodes. When you query a node it contains lots of stuff but at it's core it's the basic structure of the code.

## Syntax Tokens
The next type of objects are Syntax Tokens these are nested if you like inside of the nodes and represent all of the C# grammer and information.

## Syntax Triva
All the other stuff that isn't actaully important for compilation but is important to maintain consistency with the original file is 
called Syntax Triva. This is all the white space, tabs and other elements.

## Compilation
When a project is compiled. There maybe multiple references and Syntax trees, ultimately these will all be brought together 
and IL will be emitted.

## Understanding Syntax trees
It's hard to construct a mental model of a Syntax Tree just by looking at C# but to query things you will need to understand how 
it is structured. 

Luckily the Roslyn team built a Syntax Tree Viewer so you could get a visualisation at any time. View > Other Windows > Syntax Visualiser.

## Working with Code Analysis
First up I am going to create a very simple console application. I will need to install the Nuget Package Microsoft.CodeAnalysis. I open up 
the Package Manager Windows and Type:

<pre><code class="language-csharp">
Install-Package Microsoft.CodeAnalysis
</code>
</pre>

It can take some time for the code package to install and it's important to remember your console app will need to be 
targeting .net framework 4.6 and greater.

In the void main I write

<pre><code class="language-csharp">
var tree = CSharpSyntaxTree.ParseText(@"
                class bb {
                    void b(){
                    }
                }
            ");

            Console.Write(tree);
            Console.ReadLine();
</code>
</pre>

You can check to see if the code contains any errors by checking the diagnostics:

<pre><code class="language-csharp">
var error = tree.GetDiagnostics().Where(n => n.Severity == Microsoft.CodeAnalysis.DiagnosticSeverity.Error).FirstOrDefault();
            Console.Write(error);
</code>
</pre>

If I remove a brace and then run the code again. It should now log an error.

To query the tree a little further I use a combination of Linq and the API:

<pre><code class="language-csharp">
var root = tree.GetRoot();
            var method = root.DescendantNodes().OfType<MethodDeclarationSyntax>().First();
            Console.Write(method);
</code>
<pre>

I could also find some code in the method. Fist I will add the following to the Method:
<pre><code class="language-csharp">
try{
}
catch(Exception ex){
}
</code>
</pre>

I then need to search for the Try Catch instead using TryStatmentSyntax
<pre><code class="language-csharp">
var trystatement = root.DescendantNodes().OfType<TryStatementSyntax>().First();
</code>
<pre>

Each block type has different properties, a try has a black for example.
<pre><code class="language-csharp">
var block = trystatement.Block;
            Console.WriteLine(block);
</code>
</pre>

In the try if I add something like a comment, then this will be printed:
<pre><code class="language-csharp">
try{
    // Whats up Bristol
}
</code>
</pre>

We can modify the code and add a return type to the code for example:

<pre><code class="language-csharp">
 var method = root.DescendantNodes().OfType<MethodDeclarationSyntax>().First();
            var trivia = SyntaxFactory.ParseTrailingTrivia(" ");
            var returnType = SyntaxFactory.ParseTypeName("string").WithTrailingTrivia(trivia);            
            var newmethod = method.WithReturnType(returnType);
            Console.Write("New: " + newmethod);

            </code>
</pre>