---
title: Building a shopping cart with knockout.js
authors:
- thebeebs
intro: Prior to joining Microsoft I worked for a large on...
types:
- shorts
categories:
- article
published: 2011/07/11 12:00:00
updated: 2011/07/11 12:00:00
status: archived
---
















Prior to joining Microsoft I worked for a large online retailer, so I know first-hand how difficult it is to produce a good shopping cart. As a user updates quantities, deletes items or changes delivery options it's important to update the sub total, tax and shipping instructions. It's critical that the experience reacts quickly and that nothing gets in the way of a user making the purchase.

Even when&#160; creating a simple shopping cart it is easy to end up with a bug ridden, mess of JavaScript onChange events. In the following article I'm going to let you into a little secret, a secret that removes all of the complication out of creating html that needs to respond to changes in the underlying data source. The secret is knockout.js a JavaScript Library that brings the MVVM pattern to your html applications.

For this article I'm going to be using the shopping cart example from the [knockoutjs.com website](http://knockoutjs.com/examples/cartEditor.html). The example shows a rather straight forward cart, however, despite it's apparent simplicity it actually performs a number of rather cool tricks that include:

1.  Declarative Binding - The HTML is attached to the model we create using the html attribute **data-bind**. This attribute was formally added to the HTML5 specification but will actually work across all browsers, even IE6.
2.  Automatic UI refresh - When the model changes all of the bound objects will update automagically. All of the Items that you have bound using the **data-bind** attribute will change in real time as other elements on the model are changed or recalculated. So when you change the QTY of an item the sub total will be updated.
3.  Dependency Tracking - It's easy to set up relationships between different properties on the model. So that the sub total can be a combination of each of the different items multiplied by the QTY.
4.  Templating - You can use templating so that UI is generated for each item in the shopping cart. The syntax is very much like a for loop. The added benefit is that items that are templated in this way are still able to be automatically refreshed when the model changes.  

[<span style="background-color: #ffff00">You can see a demo of the cart in action here.</span>](http://knockoutjs.com/examples/cartEditor.html)

# # Installation

To install Knockout you will need to download the files from the [installation page here](http://knockoutjs.com/documentation/installation.html) and add the script to the top of your page. If you have NuGet you can simply install the knockoutjs package. To do some of the more advanced templating in this example you will also require the templating [plugin for jQuery](https://github.com/jquery/jquery-tmpl) and [jQuery](http://docs.jquery.com/Downloading_jQuery). If you used NuGet to download then knockout it will have already installed these dependencies (because NuGet is that cool).

Once you have either downloaded the JavaScript files or used NuGet you can then add the script references to the top of your page. The order is important as these files have dependencies.
  <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:009d9b32-e8dc-4ae8-a3f2-35939f1068a8" class="wlWriterEditableSmartContent"><pre class="brush: javascript;"><script src="images/images/images/@Url.Content("~/Scripts/jquery-1.5.1.min.js")" type="text/javascript"></script>
<script src="@Url.Content("~/Scripts/jquery.tmpl.js")" type="text/javascript"></script> 
<script src="@Url.Content("~/Scripts/knockout-1.2.1.js")" type="text/javascript"></script></pre></div>

Next up we are going to pump in some fake data. Ordinarily this data would be posted down from the server in JSON format. The JSON format is a good choice over XML since it has a smaller footprint, this is particularly important if you are building an application that will be consumed on mobile platforms. It is also really easy to work with in JavaScript. The data sent back to the server will also be posted as JSON, again this is because it is smaller in size than most other message formats also MVC is capable of parsing JSON into a real object on the server automatically.

Below is the fake data that will be used by our drop downs it contains category and product data:

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:44ae301f-7896-46f9-b8a2-e919f0739426" class="wlWriterEditableSmartContent"><pre class="brush: javascript;"><script> // Some of the Knockout examples use this data var sampleProductCategories = [ { "products": [ { "name": "1948 Porsche 356-A Roadster", "price": 53.9 }, { "name": "1948 Porsche Type 356 Roadster", "price": 62.16 }, { "name": "1949 Jaguar XK 120", "price": 47.25 }, { "name": "1952 Alpine Renault 1300", "price": 98.58 }, { "name": "1952 Citroen-15CV", "price": 72.82 }, { "name": "1956 Porsche 356A Coupe", "price": 98.3 }, { "name": "1957 Corvette Convertible", "price": 69.93 }, { "name": "1957 Ford Thunderbird", "price": 34.21 }, { "name": "1958 Chevy Corvette Limited Edition", "price": 15.91 }, { "name": "1961 Chevrolet Impala", "price": 32.33 }, { "name": "1962 LanciaA Delta 16V", "price": 103.42 }, { "name": "1965 Aston Martin DB5", "price": 65.96 }, { "name": "1966 Shelby Cobra 427 S/C", "price": 29.18 }, { "name": "1968 Dodge Charger", "price": 75.16 }, { "name": "1968 Ford Mustang", "price": 95.34 }, { "name": "1969 Chevrolet Camaro Z28", "price": 50.51 }, { "name": "1969 Corvair Monza", "price": 89.14 }, { "name": "1969 Dodge Charger", "price": 58.73 }, { "name": "1969 Dodge Super Bee", "price": 49.05 }, { "name": "1969 Ford Falcon", "price": 83.05 }, { "name": "1970 Chevy Chevelle SS 454", "price": 49.24 }, { "name": "1970 Dodge Coronet", "price": 32.37 }, { "name": "1970 Plymouth Hemi Cuda", "price": 31.92 }, { "name": "1970 Triumph Spitfire", "price": 91.92 }, { "name": "1971 Alpine Renault 1600s", "price": 38.58 }, { "name": "1972 Alfa Romeo GTA", "price": 85.68 }, { "name": "1976 Ford Gran Torino", "price": 73.49 }, { "name": "1982 Camaro Z28", "price": 46.53 }, { "name": "1982 Lamborghini Diablo", "price": 16.24 }, { "name": "1985 Toyota Supra", "price": 57.01 }, { "name": "1992 Ferrari 360 Spider red", "price": 77.9 }, { "name": "1992 Porsche Cayenne Turbo Silver", "price": 69.78 }, { "name": "1993 Mazda RX-7", "price": 83.51 }, { "name": "1995 Honda Civic", "price": 93.89 }, { "name": "1998 Chrysler Plymouth Prowler", "price": 101.51 }, { "name": "1999 Indy 500 Monte Carlo SS", "price": 56.76 }, { "name": "2001 Ferrari Enzo", "price": 95.59 }, { "name": "2002 Chevy Corvette", "price": 62.11 } ], "name": "Classic Cars" }, { "products": [ { "name": "1936 Harley Davidson El Knucklehead", "price": 24.23 }, { "name": "1957 Vespa GS150", "price": 32.95 }, { "name": "1960 BSA Gold Star DBD34", "price": 37.32 }, { "name": "1969 Harley Davidson Ultimate Chopper", "price": 48.81 }, { "name": "1974 Ducati 350 Mk3 Desmo", "price": 56.13 }, { "name": "1982 Ducati 900 Monster", "price": 47.1 }, { "name": "1982 Ducati 996 R", "price": 24.14 }, { "name": "1996 Moto Guzzi 1100i", "price": 68.99 }, { "name": "1997 BMW F650 ST", "price": 66.92 }, { "name": "1997 BMW R 1100 S", "price": 60.86 }, { "name": "2002 Suzuki XREO", "price": 66.27 }, { "name": "2002 Yamaha YZR M1", "price": 34.17 }, { "name": "2003 Harley-Davidson Eagle Drag Bike", "price": 91.02 } ], "name": "Motorcycles" }, { "products": [ { "name": "1900s Vintage Bi-Plane", "price": 34.25 }, { "name": "1900s Vintage Tri-Plane", "price": 36.23 }, { "name": "1928 British Royal Navy Airplane", "price": 66.74 }, { "name": "1980s Black Hawk Helicopter", "price": 77.27 }, { "name": "ATA: B757-300", "price": 59.33 }, { "name": "America West Airlines B757-200", "price": 68.8 }, { "name": "American Airlines: B767-300", "price": 51.15 }, { "name": "American Airlines: MD-11S", "price": 36.27 }, { "name": "Boeing X-32A JSF", "price": 32.77 }, { "name": "Corsair F4U ( Bird Cage)", "price": 29.34 }, { "name": "F/A 18 Hornet 1/72", "price": 54.4 }, { "name": "P-51-D Mustang", "price": 49.0 } ], "name": "Planes" }, { "products": [ { "name": "18th century schooner", "price": 82.34 }, { "name": "1999 Yamaha Speed Boat", "price": 51.61 }, { "name": "HMS Bounty", "price": 39.83 }, { "name": "Pont Yacht", "price": 33.3 }, { "name": "The Mayflower", "price": 43.3 }, { "name": "The Queen Mary", "price": 53.63 }, { "name": "The Schooner Bluenose", "price": 34.0 }, { "name": "The Titanic", "price": 51.09 }, { "name": "The USS Constitution Ship", "price": 33.97 } ], "name": "Ships" }, { "products": [ { "name": "1950's Chicago Surface Lines Streetcar", "price": 26.72 }, { "name": "1962 City of Detroit Streetcar", "price": 37.49 }, { "name": "Collectable Wooden Train", "price": 67.56 } ], "name": "Trains" }, { "products": [ { "name": "1926 Ford Fire Engine", "price": 24.92 }, { "name": "1940 Ford Pickup Truck", "price": 58.33 }, { "name": "1940s Ford truck", "price": 84.76 }, { "name": "1954 Greyhound Scenicruiser", "price": 25.98 }, { "name": "1957 Chevy Pickup", "price": 55.7 }, { "name": "1958 Setra Bus", "price": 77.9 }, { "name": "1962 Volkswagen Microbus", "price": 61.34 }, { "name": "1964 Mercedes Tour Bus", "price": 74.86 }, { "name": "1980's GM Manhattan Express", "price": 53.93 }, { "name": "1996 Peterbilt 379 Stake Bed with Outrigger", "price": 33.61 }, { "name": "Diamond T620 Semi-Skirted Tanker", "price": 68.29 } ], "name": "Trucks and Buses" }, { "products": [ { "name": "18th Century Vintage Horse Carriage", "price": 60.74 }, { "name": "1903 Ford Model A", "price": 68.3 }, { "name": "1904 Buick Runabout", "price": 52.66 }, { "name": "1911 Ford Town Car", "price": 33.3 }, { "name": "1912 Ford Model T Delivery Wagon", "price": 46.91 }, { "name": "1913 Ford Model T Speedster", "price": 60.78 }, { "name": "1917 Grand Touring Sedan", "price": 86.7 }, { "name": "1917 Maxwell Touring Car", "price": 57.54 }, { "name": "1928 Ford Phaeton Deluxe", "price": 33.02 }, { "name": "1928 Mercedes-Benz SSK", "price": 72.56 }, { "name": "1930 Buick Marquette Phaeton", "price": 27.06 }, { "name": "1932 Alfa Romeo 8C2300 Spider Sport", "price": 43.26 }, { "name": "1932 Model A Ford J-Coupe", "price": 58.48 }, { "name": "1934 Ford V8 Coupe", "price": 34.35 }, { "name": "1936 Chrysler Airflow", "price": 57.46 }, { "name": "1936 Mercedes Benz 500k Roadster", "price": 21.75 }, { "name": "1936 Mercedes-Benz 500K Special Roadster", "price": 24.26 }, { "name": "1937 Horch 930V Limousine", "price": 26.3 }, { "name": "1937 Lincoln Berline", "price": 60.62 }, { "name": "1938 Cadillac V-16 Presidential Limousine", "price": 20.61 }, { "name": "1939 Cadillac Limousine", "price": 23.14 }, { "name": "1939 Chevrolet Deluxe Coupe", "price": 22.57 }, { "name": "1940 Ford Delivery Sedan", "price": 48.64 }, { "name": "1941 Chevrolet Special Deluxe Cabriolet", "price": 64.58 } ], "name": "Vintage Cars" } ]; </script></pre></div>

# # The HTML

Next up we will add our base HTML utilising the **data-bind** feature. There are a few things to note. Firstly the grand total is bound to the model using the data-bind attribute. The syntax for this attribute is "PropertyNameWeWantToBind : PropertyOftheModel" .

In this example we also pass the property to a function called formatCurrency. This function is a simple piece of logic that appends the currency symbol. You will also notice that there are brackets after grandTotal() this is because the grandTotal property is actually a function that relies on other dependent values. We therefore add the brackets to let JavaScript know that it must call the function and calculate the dependencies. You will see this logic when we look at the JavaScript later on.

Secondly, at the bottom of the file we have two buttons, we use data-bind syntax to attach the click events to the **addLine** and **Save** functions respectively. These functions are part of the JavaScript model that we will look at later.

The third and final important feature is the template syntax attached to the data-bind attribute of the tbody tag. This is telling the jQuery templating engine that it should add in a template called "cartRowTemplate" for each of the objects in the lines property. The lines property of the model contains all of the different lines or items that have been added to the model.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:1b322c14-331c-42a9-8148-6594709307d9" class="wlWriterEditableSmartContent"><pre class="brush: javascript;"><div id='cartEditor'> 
<table width='100%'> 
<thead> 
<tr> 
<th width='25%'>Category</th> 
<th width='25%'>Product</th> 
<th class='price' width='15%'>Price</th> 
<th class='quantity' width='10%'>Quantity</th> 
<th class='price' width='15%'>Subtotal</th> 
<th width='10%'> </th> </tr> </thead> 
<tbody data-bind='template: {name: "cartRowTemplate", foreach: lines}'> </tbody> 
</table> 
<p class='grandTotal'> Total value: <span data-bind='text: formatCurrency(grandTotal())'></span> 
</p> 
	<button data-bind='click: addLine'>Add product</button> 
	<button data-bind='click: save'>Submit order</button> 
</div></pre></div>

# # The Template

The template in this example is defined using JavaScript. The HTML that represents what we want to be repeated for each line of the model is written between some script tags. The syntax for binding the model to the template is identical to the way that we would bind to regular HTML... we use the **data-bind** attribute. This template binds the price, quantity and line price (the price * the quantity). You will also note that we bind the visibility of the price, quantity and line price to the product. This means that if a product is not selected then these elements will not be visible.

The category drop down is bound to the sample data that we set up in the installation section by using the syntax **data-bind='options: sampleProductCategories, '** the rest of the settings determine what should be in the value field and what should be in the name field.

The product selection drop down is bound to the category drop down using the following syntax **data-bind='visible: category, options: category() ? category().products'**. Basically the dropdown will only be visible if a category is selected and if it is then it will populate it's data with the products from that category.

This results in a very simple chained dropdown list that will update and refresh depending on the underlying datamodel. The visibility and data reflects the model, it does not check the other DOM elements. This is a great example of the separation that you get between HTML and your data using this MVVM pattern.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:88b0ac3f-36cf-438b-bf02-5555eba95648" class="wlWriterEditableSmartContent"><pre class="brush: javascript;"><script id='cartRowTemplate' type='text/html'> 
<tr> 
<td><select data-bind='options: sampleProductCategories, optionsText: "name", optionsCaption: "Select...", value: category' /></td> 
<td><select data-bind='visible: category, options: category() ? category().products : null, optionsText: "name", optionsCaption: "Select...", value: product' /></td> 
<td class='price'><span data-bind='text: product() ? formatCurrency(product().price) : ""' /></td> 
<td class='quantity'><input data-bind='visible: product, value: quantity, valueUpdate: "afterkeydown"' /></td> 
<td class='price'><span data-bind='visible: product, text: formatCurrency(subtotal())' /></td> <td><a href='#' data-bind='click: function() { cartViewModel.removeLine($data) }'>Remove</a></td> 
</tr> 
</script></pre></div>

# # The Model

The model in Knockout is created using JavaScript. You create a selection of JavaScript objects to represent your model. In our example we have a cart that has the following properties and functions:

*   grandTotal -&#160; this property checks all of the lines in the cart, loops through them and calculates the grand total of the cart.
*   lines - this is an array of cartLine objects. Cart lines contain the following properties:

        *   category - this is the category of the product, and is bound to the category dropdown in our UI.
    *   product - this is the product name and price of the product and is bound to the product dropdown in the UI and the sample JSON.
    *   quantity - this is the number of products to be ordered in the line.
    *   subtotal - this is an object the depends of other properties and so uses the dependentObservable function. It multiples the product().Price by the quantity to get a subtotal.
    *   Lastly the lines object subscribes to any change of category. This will ensure that when the category is changed in the UI the product element will be set to undefined and so the UI elements that rely on product for visibility will hide.
*   addLine - this is a function that adds a new cartline object to the lines model.
*   removeLine - this function removes a particular object from the lines model.
*   save - this function creates the JSON that could then be sent to the server.

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:305999f8-48dc-4ef5-939e-63107a79c062" class="wlWriterEditableSmartContent"><pre class="brush: javascript;"><script type='text/javascript'> /*<![CDATA[*/
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}
var cartLine = function () {
        this.category = ko.observable();
        this.product = ko.observable();
        this.quantity = ko.observable(1);
        this.subtotal = ko.dependentObservable(function () {
            return this.product() ? this.product().price * parseInt("0" + this.quantity(), 10) : 0;
        }.bind(this));
        // Whenever the category changes, reset the product selection 
        this.category.subscribe(function () {
            this.product(undefined);
        }.bind(this));
    };
var cart = function () {
        // Stores an array of lines, and from these, can work out the grandTotal 
        this.lines = ko.observableArray([new cartLine()]);
        // Put one line in by default 
        this.grandTotal = ko.dependentObservable(function () {
            var total = 0;
            for (var i = 0; i < this.lines().length; i++) total += this.lines()[i].subtotal();
            return total;
        }.bind(this));
        // Operations 
        this.addLine = function () {
            this.lines.push(new cartLine())
        };
        this.removeLine = function (line) {
            this.lines.remove(line)
        };
        this.save = function () {
            var dataToSave = $.map(this.lines(), function (line) {
                return line.product() ? {
                    productName: line.product().name,
                    quantity: line.quantity()
                } : undefined
            });
            alert("Could now send this to server: " + JSON.stringify(dataToSave));
        };
    };
var cartViewModel = new cart();
ko.applyBindings(cartViewModel, document.getElementById("cartEditor")); /*]]>*/
< /script></pre></div>

To understand the concepts introduced by his model take a look at this 25 minute video from the founder of Knockout.js Steve Sanderson:

<object data="data:application/x-oleobject;base64,QfXq3+HzJEysrJnDBxUISgAJAAAlQgAAEiEAAAAAAAAAAAAAAAAAAAAAAABoAAAAaAB0AHQAcAA6AC8ALwBjAGgAYQBuAG4AZQBsADkALgBtAHMAZABuAC4AYwBvAG0ALwBzAGMAcgBpAHAAdABzAC8AQwBoAGEAbgBuAGUAbAA5AC4AeABhAHAAPwB2AD0AMQAuADUAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AEAAG0AZQBkAGkAYQB1AHIAbAA9AGgAdAB0AHAAOgAvAC8AcwBtAG8AbwB0AGgALgBjAGgAOQAuAG0AcwAvAGMAaAA5AC8ANwBiAGMAOAAvADEAMwAzAGIAMwBiADkAOQAtADEAOQA0ADkALQA0AGUAZgA0AC0AYQAyADcAYwAtADkAZQBjADYAMAAxADAAYwA3AGIAYwA4AC8ATQBJAFgAMQAxAEYAUgBNADAAOAAuAGkAcwBtAC8AbQBhAG4AaQBmAGUAcwB0ACwAdABoAHUAbQBiAG4AYQBpAGwAPQBoAHQAdABwADoALwAvAGYAaQBsAGUAcwAuAGMAaAA5AC4AbQBzAC8AbQBpAHgALwAyADAAMQAxAC8AdABoAHUAbQBiAHMALwBGAFIATQAwADgAXwBsAGcALgBqAHAAZwAsAGQAZQBsAGkAdgBlAHIAeQBtAGUAdABoAG8AZAA9AGEAZABhAHAAdABpAHYAZQBzAHQAcgBlAGEAbQBpAG4AZwAsAGEAdQB0AG8AcABsAGEAeQA9AGYAYQBsAHMAZQAsAGUAbgB0AHIAeQBpAGQAPQA4ADkAYwA1ADkAYQBiADUANQBlADgANgA0AGMANgBiAGEAMgBlAGUAOQBlAGEAZgAwADAAOQAyAGYAOABmADMAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAGAAAADQALgAwAC4ANQAwADQAMAAxAC4AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==" width="640" type="application/x-silverlight-2" height="320"><param name="minRuntimeVersion" value="4.0.50401.0" /><param name="source" value="https://channel9.msdn.com/scripts/Channel9.xap?v=1.5" /><param name="initParams" value="mediaurl=http://smooth.ch9.ms/ch9/7bc8/133b3b99-1949-4ef4-a27c-9ec6010c7bc8/MIX11FRM08.ism/manifest,thumbnail=http://files.ch9.ms/mix/2011/thumbs/FRM08_lg.jpg,deliverymethod=adaptivestreaming,autoplay=false,entryid=89c59ab55e864c6ba2ee9eaf0092f8f3" /></object>