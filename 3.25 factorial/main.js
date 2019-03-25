//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript).

function factorial(n){
if(n===0){
  console.log("the factorial for 0 is 1")
  return 1
}else if(n<0||n>12){
  throw "RangeError"
}else if(n>0&&n<=12){
//I need to loop through every number up to n.
//I need to multiply each number by the previous numbers
//I could probably loop through and add each number to an array and then multiply all array elements together
  let nums = []
  for(let i=1;i<=n;i++){
  //Add each number to the array
  nums.push(i);
 }
 //Use reduce to multiply all. anon function applied to every element in array. a = accumulated value (running product) b = each number in the array
 return nums.reduce((a,b) => a * b)
}
}
