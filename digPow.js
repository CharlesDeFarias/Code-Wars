// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
//Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
//This is a lil difficult because the math is... mathy. going to give this a 30 minute try, if i don't get it by then, leaving it for some other day.
//wow i'm proud of this one. I mixed up prev/curr initially which really confused me, but otherwise this was a one-shot attempt.
function digPow(n, p){
  let digString = n + ""
  let intArray = digString.split("");
  let totalSum = intArray.reduce((prev, curr, i) => (parseInt(curr) ** (p+i)) + prev, 0)
  let k = totalSum/n;
  return  totalSum%n===0 ? k : -1
}