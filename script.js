/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */

 var converse = {
 	name: "Converse Sneakers",
 	price: 45,
 	maker: "Converse",
 };

  var heels = {
 	name: "Red high heels",
	price: 422,
 	maker: "Christian Loboutin",
 };

  var flipflop = {
 	name: "Preety Flip Flops",
	price: 15,
 	maker: "Havaianas",
 };

var productList = []; //this is an array

//Your code here
//Hint: productList.push(newObject) will add the object you just created to the array

productList.push(converse,heels,flipflop);

console.table(productList);

/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */

for(var i = 0; i < productList.length; i++){

	if (productList[i].price < 50){
		console.log("The product" + " " + productList[i].name + " " + "costs" + " " + productList[i].price + ", and is a match.");
	}
    
}

/* Step 3
 * What is the average price of all the products?
 */

//3.1 first, calculate total price using the for loop again

	var sum = 0;

for(var i = 0; i < productList.length; i++){
	var result = productList[i].price;
	var sum = sum + result;   
}

	console.log("The sum of all shoe prices is " + sum + ".");


//3.2 then, divide total price by the number of products, using proudctList.length

var average = sum / productList.length;
console.log("The average price of the shoes is " + average + " " + "dollars.");

/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */

function comparePrice(p){

    var numOfMatchingProducts = 0;

    for(var i = 0; i < productList.length; i++){

		if (productList[i].price < p){
			numOfMatchingProducts = numOfMatchingProducts + 1;
		
		}
    
	}
	return (numOfMatchingProducts);

} 

//
console.log("The number of products below $10 is " + comparePrice(10) + ".");
console.log("The number of products below $50 is " + comparePrice(50) + ".");





