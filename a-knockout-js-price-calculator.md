---
title: A Knockout.js price calculator
authors:
- thebeebs
intro: A pricing calculator is usually a very difficult p...
types:
- shorts
categories:
- article
published: 2011/12/01 12:00:00
updated: 2011/12/01 12:00:00
status: archived
---
















A pricing calculator is usually a very difficult piece of front end engineering to produce. In this blog I&rsquo;m going to let you into a little secret, a secret that removes all of the complication out of creating html that needs to change and respond to changes in the underlying data. The secret is [knockout.js](http://knockoutjs.com/) a JavaScript Library that can be used with any platform but I&rsquo;m going to show you how to use it in ASP.NET MVC.

[<span>Download</span> Source Code](http://lab.thebeebs.co.uk/stagulator/Stagulator.zip) [<span>Demo</span> View Demo](http://lab.thebeebs.co.uk/stagulator/)

I&rsquo;m currently organizing a stag party for my Best friend James Konarczak, we&rsquo;ve been friends for over 25 years so It&rsquo;s pretty important that I don&rsquo;t mess things up when I&rsquo;m planning his party. There are hundreds of stag websites on the market but many of the one&rsquo;s I have visited make it really difficult to calculate the total cost of a stag party. What I wanted was a simple calculator that would enable me to roughly calculate the cost so that I could start asking people if they were interested in coming and start taking deposits.

I decided to crack open Visual Studio and start putting together the kind of pricing calculator that I wish existed.

Although I have used the example of a stag party pricing calculator the methods I&rsquo;m using could be applied to solve all sorts of problems from shopping carts to editable data grids. The [knockout.js](http://knockoutjs.com/) website also has an [interactive tutorial](http://learn.knockoutjs.com/) that enables you to play with the library and work through a number of examples.

## Step 1

To get started you will need to download a few things, firstly you&rsquo;ll need [Microsoft Visual Web Developer 2010 Express](http://www.microsoft.com/visualstudio/express) which you can get for free from&nbsp; you&rsquo;ll also need [knockout.js](http://knockoutjs.com/) which you can download from and is licensed under the open source MIT License.

## Step 2

Start Web Developer Express and go to File > New > Project. Select Visual C# on the right hand side and from the list select **ASP.NET MVC 3 Web Application**. Enter a project name then press OK. When you&rsquo;re asked to select a template choose **empty **and tick the **use HTML5 semantic **markup check box.

## Step 3

You add knockout to your project the same way would add jQuery: by adding the script tags to the head of the document and putting the JavaScript files in the scripts folder. Add the script tags to the default layout page which can be found in **Views/Shared/_Layout.cshtml**

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:66edecc4-677d-413a-bb94-bafc84b62267" class="wlWriterEditableSmartContent">
<pre class="brush: html;"><link href="images/images/images/images/@Url.Content("~/Content/Site.css")" rel="stylesheet" type="text/css" />
<script src="@Url.Content("~/Scripts/jquery-1.5.1.min.js")" type="text/javascript"></script>
<script src="@Url.Content("~/Scripts/modernizr-1.7.min.js")" type="text/javascript"></script>
<script src="@Url.Content("~/Scripts/jquery.tmpl.js")" type="text/javascript"></script>
<script src="@Url.Content("~/Scripts/knockout-1.2.1.js")" type="text/javascript"></script></pre>
</div>

## Step 4

Firstly we are going to create a model. A model is a collection of objects that represent your system. Our system comprises of a few objects: A shopping cart, products and categories. We just need to create each of these objects with simple properties to capture the data that the user will enter.

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:3cbe952e-2a39-40f3-8b29-16033afdeb2e" class="wlWriterEditableSmartContent">
<pre class="brush: javascript;">using System.Collections.Generic;

namespace KnockoutExample.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Product> Products { get; set; }
    }
}</pre>
</div>

## Step 5

With ASP.NET MVC you can generate a database from your objects. All you need to do is create a class that inherits from DbContext. For each object in you system, you create a property and give it a name. When the application starts the database will be created automatically including any relationships between objects.

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:5c26cbf1-e5cf-4a9a-869c-0f5a09742355" class="wlWriterEditableSmartContent">
<pre class="brush: javascript;">using System.Data.Entity;

namespace KnockoutExample.Models
{
    public class StagParty  : DbContext
    {
        public DbSet<Product> product { get; set; }
        public DbSet<Category> category { get; set; }
    }
}</pre>
</div>

## Step 6

The C in MVC stands for Controller. In our application we will add a controller called CartController. To add a controller, right click on the controller folder and select Controller > Add. Add an ActionResult onto this controller and call it index. When you go to the URL http://mysite.com/cart/ this controller will be executed.

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:c7fc1c98-1929-42c7-a51d-918fd3c56953" class="wlWriterEditableSmartContent">
<pre class="brush: javascript;">namespace Stagulator.Controllers
{
    public class CartController : Controller
    {
        // GET: /Cart/
        public ActionResult Index()
        {
            var service = new CartService();
            ViewBag.ProductInfo = service.FetchCatogries();
            return View();
        }

        [HttpPost]
        public ActionResult Save(CartViewModel cart)
        {
            // Save logic would go here.
            var notice = string.Format("The {0} products for {1} guests has now been booked", cart.CartLines.Count, cart.GuestNumber);
            return Json(notice, JsonRequestBehavior.AllowGet);
        }
    }
}
</pre>
</div>

## Step 7

As it stands the Action Result we have just added will return a view. A view is just a document that contains the HTML. The view can also run code; the syntax used on the page is called Razor. To add view create the folder Views/Cart then right click and choose add View.

## Step 8

In the view add a div called cart, this will be where the cart will appear. In a script block add a variable called productCategories. Populate this with the ViewBag.productInfo property that was passed down by the server. By using @Json.Encode and @Html.Raw the C# property will be converted by Razor into JSON.

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:4f8573f8-695c-4958-b3e8-c31a6cd61e7b" class="wlWriterEditableSmartContent">
<pre class="brush: javascript;">// Apply the data from the server to the variable
var productCategories = @Html.Raw(@Json.Encode(ViewBag.productInfo));
var viewModel = new Cart();
ko.applyBindings(viewModel, document.getElementById("cart"));</pre>
</div>

## Step 9

We now need to use JavaScript to create an object that represents a sales line in the cart, we do this by adding the properties, category, product, quantity and subtotal. Setting them as ko.observable ensures that when these variables change it will inform the rest of the model that changes have been made.

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:90c99fdc-02b5-49ff-aa9c-d908930c0a1b" class="wlWriterEditableSmartContent">
<pre class="brush: javascript;">var CartLine = function() {
        this.category = ko.observable();
        this.product = ko.observable();
        this.quantity = ko.observable(1);        		
        this.subtotal = ko.dependentObservable(function() {
            return this.product() ? this.product().Price * parseInt("0"+this.quantity(), 10) : 0;
        }.bind(this));

        // Whenever the category changes, reset the product selection
        this.category.subscribe(function() { this.product(undefined); }.bind(this));
    };</pre>
</div>

## Step 10

With the subtotal property we use the ko.dependentObservable function. This lets the knockout library know that this property is reliant on other properties in the model. When changes happen with the price or quantity properties this dependent property will also recalculate any UI that is bound to these properties will also update.

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:f97a1648-a3d0-4b14-bf9f-4906f0858920" class="wlWriterEditableSmartContent">
<pre class="brush: javascript;">this.subtotal = ko.dependentObservable(function() {
            return this.product() ? this.product().Price * parseInt("0"+this.quantity(), 10) : 0;
        }.bind(this));</pre>
</div>

## Step 11

Next we will add the cart model to the JavaScript. You&rsquo;ll notice that we add the property lines and add an array of cartLines to that property. With the guest property I have added a default value of 10 to the property by passing it in via the constructor.

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:1c6b701a-751d-44cc-a543-45f0f20a762a" class="wlWriterEditableSmartContent">
<pre class="brush: javascript;">// This is an object that represents the Cart
    var Cart = function () {
        // Stores an array of lines, and from these, can work out the grandTotal
        this.lines = ko.observableArray([new CartLine()]);   // Put one line in by default  
        this.guests = ko.observable(10);
        this.costPerPerson = ko.dependentObservable(function () {
            var totals = 0;
            for (var i = 0; i < this.lines().length; i++)
                totals += this.lines()[i].subtotal();
            return totals;
        } .bind(this));

        this.grandTotal = ko.dependentObservable(function () {
            return this.costPerPerson() * parseInt("0" + this.guests(), 10);
        } .bind(this));

        // Operations
        this.addLine = function () { this.lines.push(new CartLine()); };
        this.removeLine = function (line) { this.lines.remove(line); };
        this.save = function () {

            // Creates a Javascript object object with the same property names as the C# object
            var dataToSave = $.map(this.lines(), function (line) { return line.product() ? line.product() : undefined; });
            var guest = this.guests();

            var JsonObject = new function () {
                this.GuestNumber = guest;
                this.CartLines = dataToSave;
            };

            // Convert the object to JSON
            var json = JSON.stringify(JsonObject);

            // Post the object to the server using jQuery
            $.ajax({
                url: '@Url.Action("save","cart")',
                type: 'POST',
                dataType: 'json',
                data: json,
                error: function (data) { alert('Something Went Wrong'); },
                contentType: 'application/json; charset=utf-8',
                success: function (data) {
                    alert(data);
                }
            });
        };
    };</pre>
</div>

## Step 12

I would like the user to be able to change the number of guests that are attending the stag party. To do this I create an input field and use the data-bind attribute to bind the guest&rsquo;s property of my model to the input field.

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:691f68ba-5eba-4d69-80ee-16e7d99a332a" class="wlWriterEditableSmartContent">
<pre class="brush: html;"><p>Total Guests:</p>
<input data-bind='value: guests,valueUpdate: "afterkeydown"'> </input></pre>
</div>

## Step 13

Some of the properties like Cost Per Person do not need to be editable, so we bind them to a span. In the data-bind attribute we can call any functions we like. The formatCurrency function formats the number by adding a &pound; to the front.

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:0c2854e5-6417-4e51-aaf7-226e4f271f8b" class="wlWriterEditableSmartContent">
<pre class="brush: html;"><span data-bind='text: formatCurrency(costPerPerson())'></span></pre>
</div>

## Step 14

Binding single properties is straight forward but more complex properties like the collection of CartLines requires a different approach. For this we will need to use the knockout template engine. In the data-bind we specify a template name: cartRowTemplate and we pass in the lines property.

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:4e3a3ceb-5b6a-4d24-bfc8-02bb21dee50e" class="wlWriterEditableSmartContent">
<pre class="brush: html;"><tbody data-bind='template: {name: "cartRowTemplate", foreach: lines, templateOptions: { guests: guests}}'></pre>
</div>

## Step 15

The cartRowTemplate is defined using a script tag with the id set as the name of the template. In this case the template is called cartRowTemplate. It&rsquo;s simply html that will be repeated for each of the items in the lines collection. As before, we bind the properties using the data-bind attribute.

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:ed011f57-2f7d-46da-8326-579fd44fcd20" class="wlWriterEditableSmartContent">
<pre class="brush: html;"><script id='cartRowTemplate' type='text/html'>
        <tr>
            <td><select  data-bind='options: productCategories, optionsText: "Name", optionsCaption: "Select...", value: category' /></td>
            <td><select data-bind='visible: category, options: category() ? category().Products : null, optionsText: "Name", optionsCaption: "Select...", value: product' /></td>
            <td><span data-bind='text: product() ? formatCurrency(product().Price) : ""' /></td>
            <td><span data-bind='visible: product, text: product() ? formatCurrencyMultiply(product().Price, $item.guests()) : ""' /></td>
            <td><button data-bind='click: function() { viewModel.removeLine($data) }'>Remove</button></td>
        </tr>
    </script></pre>
</div>

## Step 16

We can also use the data-bind syntax to bind buttons to events. There are two buttons that need to be wired up, &ldquo;Add Product&rdquo;, which adds a new item to the lines collection and &ldquo;Submit Order&rdquo;, which will send the cart data to the server.

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:43733b86-04f0-4be6-9cfa-917ad4c4ad3c" class="wlWriterEditableSmartContent">
<pre class="brush: html;"><button data-bind='click: addLine'>
        Add product
</button>
<button data-bind='click: save'>
        Submit order
</button></pre>
</div>

## Step 17

The &ldquo;Submit Order&rdquo; button is wired to the save function on the model. This function converts the data into a JSON object and posts it to the save action of the cart controller. The @Url.Action helper creates the URL of the save action for us.

## Step 18

Over on the server side we add a method called save to the Cart Controller. The JSON object will be converted to a c# cart object by ASP.NET Automagically. We could save that data, however we just send back a message to the user.

<div style="margin: 0px; display: inline; float: none; padding: 0px;" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:3847e894-0978-4a26-aa7f-6ff235dfeb2b" class="wlWriterEditableSmartContent">
<pre class="brush: javascript;"> [HttpPost]
 public ActionResult Save(CartViewModel cart)
        {
            // Save logic would go here.
            var notice = string.Format("The {0} products for {1} guests has now been booked", cart.CartLines.Count, cart.GuestNumber);
            return Json(notice, JsonRequestBehavior.AllowGet);
        }
       </pre>
</div>

## Step 19

To finish the demo I edited the default CSS and added same dummy data to the application by editing the Global.asax file and creating a database initializer. I also changed the default controller to Cart so that it would be the first page that loaded if you visited the root of the website.