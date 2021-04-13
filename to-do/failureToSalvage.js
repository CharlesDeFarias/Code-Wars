//Ok, so this is kind of an embarassing tale and a classic example of a problem I constantly have during coding. I dug really really deep into this problem and spent A LOT of time on it. I was having fun and i got obsessed. Once I finally got to a point where I could test my answer, I realized I had completely misunderstood the question.
//What I thought the question was asking:
//given an array with numbers ranging from

function sortByName(ary) {
  const integerStr = ary.join("");
  const integerNum = parseInt(integerStr);
  // Convert array of integers to array of words
  //save list of words in form of array of objects
  const numbers = [{
    integer: 1,
    word: "one",
    base10: "ten",
  },{
    integer: 2,
    word: "two",
    base10: "twenty"
  },{
    integer: 3,
    word: "three",
    base10:"thirty"
  },{
    integer: 4,
    word: "four",
    base10: "forty"
  },{
    integer: 5,
    word: "five",
    base10: "fifty"
  },{
    integer: 6,
    word: "six",
    base10: "sixty"
  },{
    integer: 7,
    word: "seven",
    base10: "seventy"
  },{
    integer: 8,
    word: "eight",
    base10: "eighty"
  },{
    integer: 9,
    word: "nine",
    base10: "ninety"
  },{
    integer: 11,
    word: "eleven"
  },{
    integer: 12,
    word: "twelve"
  },{
    integer: 13,
    word: "thirteen"
  },{
    integer: 0,
    word: ''
  }
  ]

  // loop through elements
  // create integer name, applying special rules along the way

  let wordsArray = ary.reduce((words, currInt)=> {
    let base;

    if(currInt>99){
      base = 100;
    }else if(currInt>9){
      base = 10
    }else if(currInt>0){
      base = 1
    }else if(currInt===0){
      base = 0
      words.push({integer: 0, word: "zero"})
      return words
    }

    let currArray = currInt.toString().split("");
    let currWord =
      currArray.reduce((word, currDigitStr, index)=>{
      let currDigit = parseInt(currDigitStr);
      let digitObject = numbers.find((num) => num.integer === currDigit);
      let doubleDigitNum = parseInt(currArray.slice(-2).join(""));
      const specialNumbers = [11, 12, 13]
      let isSpecialNumber = (specialNumbers.includes(currInt)) || (base === 100 && specialNumbers.includes(doubleDigitNum))
      let isOrContainsTeen = doubleDigitNum > 10 && doubleDigitNum < 20
      let isTeen = currInt === doubleDigitNum && isOrContainsTeen

      if(isTeen) {
        if(isSpecialNumber) {
          //if the number is part of 11, 12, 13
          digitObject = numbers.find((num) => num.integer === doubleDigitNum);
        }
      }

      let digitWord = digitObject.word;

          //solve for hundreds
      if(base===100 && index === 0){
        let ending = '';
        //solve for round hundreds
        if(currArray.slice(1).join("") !== "00"){
          ending = ' and '
        }
        return word + digitWord + ' ' + "hundred" + ending;
      }else if((base===10 && index===0) || (base===100 && index ===1)){
        //solve for tens
        if(isOrContainsTeen || currDigit === 0){
          //leave -teens to be solved in ones
          return word + ""
        }else{
          let suffix = ary[index+1] === 0 ? '' : ' '
          //handle 0 in tens place

          return word + digitObject.base10 + suffix
        }
      }else if(base===1 || (base > 1 && index >=1)){

        if(isOrContainsTeen){
          if(isSpecialNumber){
            //if the number is part of 11, 12, 13
            return word + digitWord
          }else{
            return word + digitWord + "teen"
          }
        }else{
          return word + digitWord
        }
      }
    }, "");

    words.push({
      integer: currInt,
      word: currWord
    })
    console.log(words)
    return words
  }, [])

  wordsArray.sort((a, b) => a.word > b.word)

  return wordsArray.map((el) => el.integer)
}