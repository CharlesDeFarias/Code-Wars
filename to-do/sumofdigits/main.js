// In this kata, you must create a digital root function.
// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
// Here's how it works:
// digital_root(16)
// => 1 + 6
// => 7
// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6
// https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript

function digital_root(n) {
  let digit1 = n,
  root=0;

  for(let i=0;i<digit1.length;i++){
    root+=digit1[i]
    }
  if(digit1.length>1){
  }
  return root
  // add upthe digits of n
  // if length of the sum is greater than 1, add the digits of that
}
