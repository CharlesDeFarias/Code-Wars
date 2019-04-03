// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
//
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
  let newstr= ""
  for(let i=0;i<word.length;i++){
    let counter= 0;
    for(let j=0;j<word.length;j++){
     if(word[i].toLowerCase()===word[j].toLowerCase()){
     counter += 1
     }
   }
   if(counter > 1){
    newstr = newstr + ")"
  }else if(counter = 1){
  newstr = newstr + "("
  }
  counter = 1
  }
  return newstr
}
