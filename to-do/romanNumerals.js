/**
 * https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript
 *
 */
// TODO: create a RomanNumerals helper object
const RomanNumerals = {

  numerals: {
    thousand: "M",
    fiveHundred: "D",
    hundred: "C",
    fifty: "L",
    ten: "X",
    five: "V",
    one: "I"
  },
  getDigitsObjectFromInteger: (number) => {
    let numberArray = number.toString().split("");
    let isThousands = numberArray.length === 4;
    let isHundreds = numberArray.length >= 3;
    let isTens = numberArray.length >= 2;

    let digitsObject = {
      thousands:
        isThousands ? numberArray.splice(0,1) : 0,
      hundreds:
        isHundreds ? numberArray.splice(0,1) : numberArray [0],
      tens:
        isTens ? numberArray.splice(0,1) : numberArray[0],
      singles: numberArray.splice(0,1)
    }

    Object.keys(digitsObject).forEach((key, index)=>{
      digitsObject[key] = parseInt(digitsObject[key][0], 10)
    });

    return digitsObject;
  },
  toRoman: (int) => {
    const digitsObject = RomanNumerals.getDigitsObjectFromInteger(int);

    let currentLetter = ""
    let nextFiveLetter = ""
    let nextTenLetter = ""
    let finalNumeral = '';

    let getLetters = (digit) => {
      if(digit >= 1 && digit <= 3){
        return currentLetter.repeat(digit);
      }else if(digit === 4){
        return currentLetter + nextFiveLetter
      }else if(digit === 5){
        return nextFiveLetter
      }else if(digit >= 6 && digit <=8){
        return nextFiveLetter + currentLetter.repeat(digit-5);
      }else if(digit === 9){
        return currentLetter + nextTenLetter
      }
    }

    Object.keys(digitsObject).forEach((key, index)=>{
      let value = digitsObject[key]
      let nonZeroValue = value > 0;
      if(key === "thousands" && nonZeroValue){
        finalNumeral += RomanNumerals.numerals.thousand.repeat(value)
      }else{
        if(key === "hundreds" && nonZeroValue){
          currentLetter = RomanNumerals.numerals.hundred
          nextFiveLetter = RomanNumerals.numerals.fiveHundred
          nextTenLetter = RomanNumerals.numerals.thousand
        }else if(key === "tens" && nonZeroValue){
          currentLetter = RomanNumerals.numerals.hundred
          nextFiveLetter = RomanNumerals.numerals.fiveHundred
          nextTenLetter = RomanNumerals.numerals.thousand
        }else if(key === "ones" && nonZeroValue){
          currentLetter = RomanNumerals.numerals.hundred
          nextFiveLetter = RomanNumerals.numerals.fiveHundred
          nextTenLetter = RomanNumerals.numerals.thousand
        }
        getLetters(value);
      }
    });
    return finalNumeral
  }

}