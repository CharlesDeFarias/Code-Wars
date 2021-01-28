//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
//Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
function firstNonRepeatingLetter(s) {
  // return first character that is non-repeating
  // upper and lower case are the same letter
  // the answer should be the correct case of the original letter, though
  // if there are no non-repeating letters, return empty string or None

  //copy input and split into array of lowercased characters
  let sArray = s.toLowerCase().split("");
  let answerIndex;
  //Loop through each, splice from the array so it's no longer in there check if array includes letter
  for(let i=0; i<sArray.length; i++){
    let char = sArray.splice(i, 1);
    if(sArray.includes(char[0])){
      //If it's repeating, put it back where it was
      sArray.splice(i, 0, char[0])
    } else {
      //if it's non-repeating, return the index
      //if it's non-repeating, use the index to find the original case in input
      return s.charAt(i);
    }
  }
  return "";

}
