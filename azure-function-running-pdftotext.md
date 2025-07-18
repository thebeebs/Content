---
title: Azure Function Running PDFtoText
authors:
- thebeebs
intro: PDFtotext is a command line utility that extracts text from a PDF. In this
  tutorial I explain how I used it in a Azure Function
types:
- tutorials
categories:
- bots
published: 2017/08/21 12:00:00
updated: 2017/08/21 12:00:00
---
















The first part of a bot I am working required the extraction of questions and answers from a set of 1200 PDFs. After about 3 hours of trying to find the perfect solution in either node, C# or Python I realised that I was searching for a silver-lining in a bin bag: there are no perfect solutions. There was, however, a good command line utility called pdftotext.

It didn’t take long for me to get it working on the command line, so I suspected that it would be 10 minutes away from getting it working in a function. I was in fact 5 hours, 3 coffees, 2 teas, 2 meals, 1 game of football and 1 solid nights sleep away from a solution. I got there though.

If you are interested in the code you can find [it here]( https://github.com/smich73/QnA-Maker-Uber-Search.git), the functions are in, uncreatively, the function folder.

I thought I would start with a node project. Initially, I used a wrapper for pdftotext before I realised it would be easier to just work with the command line directly.
<pre><code class="language-javascript">const { spawn } = require('child_process');
var cp = spawn(process.env.comspec, ['/c', 'pdftotext.exe -nodiag file.pdf output.txt']);</code></pre>

If you run that in node, you are effectively shelling out to the command line. You can listen on callbacks using the following code:

<pre><code class="language-javascript">// This event fires when you have an error(I’m not sure how reliable this is)
cp.stderr.on("data", function(data) {
            var str = "Error: " + data.toString();
            context.log(str);
});

// This event lets you capture the different outputs from the command line line by line as I is out put.
cp.stdout.on("data", function(data) {
            var str = "Out: " + data.toString();
            context.log(str);       
});
// Executes when the processs ends
cp.on('close', (code) => {
            context.log(`child process exited with code ${code}`);
});</code></pre>

I wanted to run this in a function and so I wrapped this in the function boilerplate. 

<pre><code class="language-javascript">module.exports = function (context, myBlob) {
	// Function code will go here.
}</code></pre>
The ```myBlob``` variable contains the PDF file that will be passed to the function from storage. It seemed that the quickest way to solve the problem would be to save the file locally and then execute the pdftotext.exe file against it. As part of the function package I uploaded the x64 windows version of pdftotext.
To save the blob to disk at fist I simply used this:
<pre><code class="language-javascript">var fs = require('fs');
fs.writeFile('file.pdf', myBlob, function (err) {
	// The file should be written
}</code></pre>
When I tried to use the file with pdftotext I was getting an error “Syntax Error: Couldn't read xref table” and “Syntax Warning: PDF file is damaged - attempting to reconstruct xref”
I found that even if I went to the folder using the command utility (http://YOURSERVICENAME.scm.azurewebsites.net/DebugConsole) the PDF files were blank.
I was able to get the PDFS to save correctly by converting the blob into base64 using this code:

<pre><code class="language-javascript">var buf = new Buffer(myBlob, 'base64'); 
fs.writeFile(`${workingDirectory}${tempFileName}`, buf, function (err) {
}</code></pre>
The last issue I faced was to do with the location of the exe and the files that I uploaded. I expected that the function would be executing in the folder **D:\home\site\wwwroot** but it turns out that functions execute in “D:\Windows\system32” you can see for yourself by creating a httptrigger and executing: 

<pre><code class="language-javascript">context.log(process.cwd())</code></pre>
You could change the working directory but for speed I hardcoded the locations of all my files and exe’s
