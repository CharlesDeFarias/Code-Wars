//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

function rot13(message){
  let abc= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  newMsg= ""
  //Create array for alphabet. Will loop through input string, find out what letter it correlates to
  for(let i=0;i<message.length;i++){
  //check if .lowerCase of original = letter in array
    for(let j=0;j<abc.length;j++){
      if(message[i].toLowerCase()===abc[j]){
         //if so return the index number of abc it matched, add 13 to that number (ensuring that if z is reached,
        //count is paused, index is turned to 0 and addition continues)
        //if original letter !=== .tolowercase original letter, add .toUpperCase new letter to new string
        let letNum=j+13, newLet=abc[letNum];
        if(letNum>=26){
          letNum-= 26;
          newLet=abc[letNum];
          }
        if(message[i]!==message[i].toLowerCase()){
          newLet= newLet.toUpperCase();
        }
        newMsg= newMsg+newLet
      }
    }
  }
  return newMsg
}
