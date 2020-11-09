/**
 * rot13
 * 5 kyu https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
 *
 */
function rot13(message){
  const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const messageArray = message.split("");
  let newMsg = messageArray.map((letter) => {
    let lowerCaseLetter = letter.toLowerCase();
    let letterIndex = abc.indexOf(lowerCaseLetter);
    let isUpperCase = letter !== lowerCaseLetter;
    if(abc.includes(lowerCaseLetter)){
      let newLetterIndex = letterIndex + 13;
      if(newLetterIndex > abc.length-1){
        newLetterIndex -=  26
      }
      return isUpperCase ?
        abc[newLetterIndex].toUpperCase() : abc[newLetterIndex];
    }else{
      return letter;
    }
  })

  return newMsg.join("")
}
