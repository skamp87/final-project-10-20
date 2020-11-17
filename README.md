#  Oct 2020 Cohort Final Project

# To Do App MVP Iteration #1
​
## Framing Session
​
- Who: Customers
- What: Showcase custom works/designs and provide order form for customers
- When: N/A
- Where: Anywhere; Computer, Mobile, or Tablet
- Why: I don't currently have a platform for customers to order, so instead of messaging me, they can put in an order themselves. 
​
## Features List
​
- Customer can read an "About" to know who I am and who is making their product. 
  - [T: 30 mins, S: C, P: M]
- Customer can visually see examples of products I make.  
  - [T: 2 hours, S: N, P: H]
- Customer can see price list on the page without having to ask for pricing. 
  - [T: 30 mins, S: C, P: M]
- Customer will have the ability to place an order. 
  - [T: 30 mins, S: C, P: M]
- When "Ready to Order?" button is pushed, customer will be taken to an order form page. 
  - [T: 2 hours, mins S: N, P: H]
- Customer will be able to pick "Item", "Size", and "Fabric" for their item.  
  - [T: 2 hour, S: N, P: M]
- A slideshow will be under drop-downs with available fabrics in stock. 
  - [T: 2 hours, S: N, P: H]
- Customer will have the ability to leave a comment/inquiry about order on order. 
  - [T: 1 hour, S: C, P: M]
- Submit button will give them the ability to return to the main landing page. 
  - [T: 1 hour, S: X, P: M]
​
​
## Consideration
​
- Mobile friendly or mobile only 
  - [T: 2 hours S: X]
​
## TCS
​
- TIME: 8 hours
​
- SCOPE: 
  - Scale: 
    - C - Comfortable
    - N - Need Assistance
    - X - No idea
​
- COST/PRIORITY: $0 
  - Scale: 
    - H - High
    - M - Medium
    - L - Low
​
## MVP
​
Create a business landing page with examples and information on products made, as well as the function/ability to submit an order through an order form. 
​
​
## POST-MVP

Add functionality to pay from order form. 

# Psuedocode

- Customer can read an "About" to know who I am and who is making their product. 

<p> This will just be text explaining who I am, etc. etc. Nothing too special. </p>

- Customer can visually see examples of products I make.  

function sliding image gallery #1
    // this will house photos of previous made orders/products
    // container, buttons, caption-- according to article of clothing

function sliding image gallery #2
    // this will be an additional gallery with photos 
        (as I want to ensure I show a wide range of products)
    // container, buttons, caption

- Customer can see price list on the page without having to ask for pricing. 

    // this will simply be in a table as a list

- Customer will have the ability to place an order. 
- When "Ready to Order?" button is pushed, customer will be taken to an order form page. (I placed these together because they are essentially the same.)

function orderForm(){
    // customer will click "Ready to Order?" button
        // placing the customer within the order form
        // button
        // button onclick="link to order form page"
}

- Customer will be able to pick "Item", "Size", and "Fabric" for their item.  

function detailSelection(){
    // customer will have drop-down options to select item, size, and fabric
        // <label for>
        // <select name> // <id> // <!--Item, Size, Fabric (numerical to slideshow below)-->
        // <option value>
}

- A slideshow will be under drop-downs with available fabrics in stock. 

function sliding image gallery 
    // this will house photos of available fabrics
        // container, buttons, caption-- numbers on each picture to specify within drop-down menu

- Customer will have the ability to leave a comment/inquiry about order on order. 

function textarea(){
    // this will be a comment/inquiry box on the customer's order
        // <div> <textarea name>
}

- Submit button will give them the ability to return to the main landing page. 

function submitLoop(){
    // this button will submit the customer's order to a designated spreadsheet/email (still unsure there)
        // <button> //<input>
        // if -- echo "Thank you for your order!" message
            // Pop-up message with button linking to landing page
                // button onclick= "link to landing page"
}
