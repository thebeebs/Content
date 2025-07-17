---
title: Launch.json and node application settings
authors:
- thebeebs
intro: The launch.json file is a great way to add application settings to a node application
  when you are debugging locally
types:
- tutorials
categories:
- web
- bots
published: 2017/07/26 12:00:00
updated: 2017/07/26 12:00:00
---






When hosting a node application in Azure I will often set application settings and keys in the portal using the application settings UI. 

In my app I retrieve a variables using the env object e.g. <pre><code class="language-javascript">env.MICROSOFT_APP_ID</code></pre> 

It's then a question on how to add these application settings to your app when debugging locally. My current favourite way to do this is to use the <pre>launch.json</pre> file in VS Code. You can configure your debugging experience  [in many ways](https://code.visualstudio.com/Docs/editor/debugging#_launchjson-attributes) using this file and easily add env settings as you can see below:  

<pre><code class="language-javascript">
{    
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Beebs Bot",
            "program": "${workspaceRoot}/src/app.js",
            "env": {
                "NODE_ENV": "development",
                "MICROSOFT_APP_ID": "obs-fake-3543-543-4353",
                "MICROSOFT_APP_PASSWORD": "6765jjhjh",
                
                "KNOWLEDGE_BASE_ID": "665756-78678-876867-76876",
                "KNOWLEDGE_BASE_SUBSCRIPTION_KEY": "fake2342342342",
                "LUIS_MODEL_URL": "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/43243224-56546?subscription-key=65456-76575670&staging=true&verbose=true&timezoneOffset=0&spellCheck=true&q="
           }
        }
    ]
}</code></pre>
        