/**
 *https://www.codewars.com/kata/57829376a1b8d576640000d6/train/javascript
 *
 **/
function trumpDetector(trumpySpeech){
  let dupeCounter = 0;
  let vowelCounter = 0;
  let vowels = ["a","e","i","o","u"];
  let trumpyArray = trumpySpeech.split("");

  trumpyArray.forEach((char, index) => {
    let lowerCase = char.toLowerCase();
    let upperCase = char.toUpperCase();
    let prevChar = trumpyArray[index-1];
    let isDupe = prevChar === lowerCase || prevChar === upperCase;
    let isVowel = vowels.includes(lowerCase);
    if(isDupe && isVowel){
      dupeCounter += 1;
    }else if(isVowel){
      vowelCounter += 1
    }
  })
  let trumpScore = dupeCounter/vowelCounter;
  return Math.round(trumpScore*100)/100
}