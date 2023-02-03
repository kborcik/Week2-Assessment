///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

 const summedPrice = cart.reduce((acc, curr, arr) => {
    return acc + curr.price
 },0)

 console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice (cartTotal,couponValue,tax){
    return ((cartTotal*(tax+1)) - couponValue)
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    In the cart page, it feels like it means 'checkout' page. it's not quite clear.
    Name: 'string'  name needs characters
    Phone Number: 'number' while a hyphen could go in a string we just the 10 digit number input
    Address: 'string' this will have a combo of characters and numbers
    Email Address: 'string' email address is going to have @ and a '.' so that will break the code if it's not a string.

    I picked name for a way to address each customer
    I picked phone number to contact customer for emergency delays, instructions, and as the easiest way 
    to avoid duplicate acconts. customers rarely have more than 1 or 2 phones numbers. email addresses.
    A customer might have many of those.
    Address is for the delivery and also physical marketing
    and email for coupons, email marketing, and receipts and record keeping.

    **WHOOPS. Why i chose those 'data types.' hahah. In a hurry. let the above in case I was right in explaining that too. hah
... 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customerObject = {
    name: 'Dev Mountain',
    phoneNumber: 8444338686,
    address: '500 South Ervay St #101 Dallas, TX 75201',
    emailAddress: 'support@devmountain.com',

}