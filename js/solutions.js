//1. file made

//2. parameter: type of variable
//argument: value of the parameter

//3.return: gives a function it's value and stops a function--we can use the return value
//of a function to pass as data
//console.log(): prints to the cosole--no affect on data



//Palindrome (Ryan went over this in class with us)
// const checkPalindrome = (word) => {
// 	let reverseString = word.split("").reverse().join("");
// 		if(word.toLowerCase() == reverseString.toLowerCase()){
// 			return true;
// 		}else{
// 			return false;
// 			}
// }
// 	console.log(checkPalindrome("Radar"));
// 	console.log(checkPalindrome("Borscht"));


//Digit Sum
// Write a function `sumDigits` that accepts a number and returns 		the sum of its digits.
// 
// console.log(sumDigits(42));
// => 6;
//**********************

// const sumDigits = (a, b) =>{
// 	console.log(a + b);
// };

// sumDigits(2, 2);

//Pythagoras
// Write a function `calculateSide` that takes two arguments: `sideA` and `sideB`, and returns the solution for sideC using the Pythagorean theorem.

// _hint:_ discover the Pythagorean Theorem on a website called google.com  
// _hint:_ checkout the [Math methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) in javascript

// console.log(calculateSide(8, 6));
// => 10

// function calculateSide(sideA, sideB){
// 	return Math.pow(sideA, 2) + Math.pow(sideB, 2);
// }
 
// console.log(calculateSide(10, 5));

// Sum Array
// Write a function `sumArray` that takes an **array** as an argument.
// The array should contain numbers. The function should return the sum of the numbers in the array.
// Use a _for loop_ within the function to iterate over the array and sum the contents.
// Use a variable such as
// javascript
// let sum = 0;

// that will **accumulate** value within the loop.
// Expected result:
// javascript
// console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21

// function sumArray(arr){
// 	let sum = 0;
// 	for(let i = 0; i <= arr.length; i++)
// 		sum += arr[i];
	
// }

// console.log(sumArray([1, 2, 3, 4, 5, 6]));

//this keeps coming back undefined--i'm moving on

//Prime Numbers
// ### Step One

// function checkPrime(num) {
//     for(let i = 2; i < Math.sqrt(num); i++){
//     	if (i % 2 === 0).......
//     	}
// console.log(checkPrime(num));

//there are a lot of solutions out on the web, I've yet to find one that I understand even though I understand the definition of a prime number.  I can't in good conscience copy code when I don't understand it's logic.  What I have written is as far as I got with what I understand.

// ### Step Two
// Write another function called `printPrimes` 

// function printPrimes(num){
// 	for (i = 0; i > checkPrime(num); i++){
// 		console.log(printPrimes(num));
// 	}
// }

// ## Insert Dash
// Write a function `insertDash` that accepts a number as a parameter and returns a string with a dash inserted between any consecutive **odd numbers**. There should not be a dash at the end, it goes only between numbers.
// ```javascript
// console.log(insertDash(454793));
// ```
// > => 4547-9-3

// function insertDash(num){
// 	let arr = [];
// 	for(i < 0; i < arr.length){
// 		arr[i++];
// 		if (num % 2 !== 0){
// 			arr.push('-');
// 		}
// 	}
// }

// return 