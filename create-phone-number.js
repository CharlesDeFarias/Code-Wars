/**
 *https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
 * 6 kyu
 * Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
 */

function createPhoneNumber(numbers){
  if(numbers.length !== 10) {
    return null
  }

  let phoneNumber = numbers;

  let firstThree = phoneNumber.splice(0,3).join("");
  phoneNumber.splice(3,0,"-").join("");


  return `(${firstThree}) ${phoneNumber.join("")}`;
}