function binaryAdd(num1,num2){
  //Simple addition of the two parameters/arguments
  let sum= num1+num2;
  //.toString'ing a number and then putting in 2 after toString turns that number into binary. Putting in a 10 instead of a 2 returns the number we expect, as we use a 10-digit number system. Using 16 would result in a hash number system answer.
  console.log((sum).toString(2))
}
