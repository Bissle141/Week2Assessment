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


const summedPrice = cart.reduce((acc, curr) => acc + curr['price'], 0)

// console.log(summedPrice)


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
const calcFinalPrice = (cartTotal, couponValue, tax) => (cartTotal * (1 + tax)) - couponValue
// console.log(calcFinalPrice(20.99, 5, .09))


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
NOTE I am unclear as to if this is general customer info we are talking about or specifically info we would need from a customer when they are checking out in the cart. 
I am going to assume its the cart one, but if im wrong pls forgive me.

name -string- genereal info which can easily be used to identify the user
email-string-  for order summary and receipt
phone -num- to get in contact with them should the need arrise
birthday -string- for birthday promos/discounts (this could just be tired to their account and the system could just do a check if it is that day at check out, if it is display 
    the option for a birthday coupon or gift)
card info -array-
    card type -string- like visa or mastercard
    number -num- for checkout
    card exp date -num? or array with two indexes for month and year- for check out again
    card special pin -num-  again for checkout
address - if food is being delivered
car brand -string- if its parking lot pick up curbside pick up
car color - string - ^^^^


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: "Alyssa",
    email: "alyssa.black141@gmail.com",
    phone: 8009117222, //not a real number.... obviously
    DOB: "January 13th", //year isn't nes because this is just for promo, you could take it tho (i suppose...)
    cardInfo: ['VISA', 4024007175655140, [8,2026], 815], //all fake. pls dont try to use this stuff
    address: "1200 Mason St, San Francisco, CA, 94108",
    carBrand: 'subaru',
    carColor: 'white'
}

// console.log(customer.cardInfo[1])