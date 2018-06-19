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

function sumArray(arr){
	let sum = 0;
	for(let i = 0; i < arr.length; i++)
		sum += arr[i];
	
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));
//  **Commit your work.** 

//"Commit 5 - Sum Array".


