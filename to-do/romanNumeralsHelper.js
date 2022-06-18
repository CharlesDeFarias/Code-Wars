// TODO: create a RomanNumerals helper object
// It seems I started this a long time ago and don't remember a single second of it. I've comitted what i've got when i started, so now we'll see how I do with picking up on something half completed.
//I ended up doing a lot of debugging here and fixing based on problems. I know there's a cleaner, smarter way to do this and I hope to find it the next time I try this problem.
const RomanNumerals = {
    numerals: {
         thousand: "M",
         fiveHundred: "D",
         hundred: "C",
         fifty: "L",
         ten: "X",
         five: "V",
         four: "IV",
         one: "I"
       },
    toRoman: (int) => {
       const digitsObject = getDigitsObjectFromInteger(int);

       let rawNumeral = ""
       
       Object.keys(digitsObject).forEach((key)=>{
         let value = digitsObject[key]
         let nonZeroValue = value > 0;
         if(key === "thousands" && nonZeroValue){
           rawNumeral += RomanNumerals.numerals.thousand.repeat(value)
         }else if(key === "hundreds" && nonZeroValue){
           let subtractor = 0
           if(value===9){
             rawNumeral += RomanNumerals.numerals.hundred
             rawNumeral += RomanNumerals.numerals.thousand
             subtractor += 9
           }else if(value >= 5){
            rawNumeral += RomanNumerals.numerals.fiveHundred
            subtractor += 5
           }else if(value === 4){
             rawNumeral += RomanNumerals.numerals.hundred
             rawNumeral += RomanNumerals.numerals.fiveHundred
             subtractor += 4
           }
          rawNumeral += RomanNumerals.numerals.hundred.repeat(value - subtractor)
          console.log(`value: ${value}, ${rawNumeral}`)
        }else if(key === "tens" && nonZeroValue){
          let subtractor = 0
          if(value===9){
            rawNumeral += RomanNumerals.numerals.ten
            rawNumeral += RomanNumerals.numerals.hundred
            subtractor += 9
          }else if(value >= 5){
            rawNumeral += RomanNumerals.numerals.fifty
            subtractor += 5
           }else if(value === 4){
            rawNumeral += RomanNumerals.numerals.ten
            rawNumeral += RomanNumerals.numerals.fifty
            subtractor += 4
           }
          rawNumeral += RomanNumerals.numerals.ten.repeat(value - subtractor)
          console.log(`value: ${value}, ${rawNumeral}`)
        }else if(key === "ones" && nonZeroValue){
          let subtractor = 0
          if(value===9){
            rawNumeral += RomanNumerals.numerals.one
            rawNumeral += RomanNumerals.numerals.ten
            subtractor += 9
          }else if(value >= 5){
            rawNumeral += RomanNumerals.numerals.five
            subtractor += 5
          }else if(value === 4){
            rawNumeral+= RomanNumerals.numerals.one
            rawNumeral += RomanNumerals.numerals.five
            subtractor += 4
          }
          rawNumeral += RomanNumerals.numerals.one.repeat(value - subtractor)
          console.log(`value: ${value}, ${rawNumeral}`)
        }
       });
            return rawNumeral
     },
    fromRoman: (numeral) => {
        let letterArray = numeral.split("");
        let finalNum = 0;
        letterArray.forEach((letter, index)=>{
          let prevLetter = letterArray[index-1];
          let nextLetter = letterArray[index+1]
          if(letter==="M"){
            if(prevLetter === "C"){
              finalNum += 900
            }else{
              finalNum += 1000
            }
          }else if(letter==="D"){
            if(prevLetter === "C"){
              finalNum +=400
            }else{
              finalNum += 500
            }
          }else if(letter==="C"){
            if(prevLetter === "X"){
              finalNum += 90
            }else if(nextLetter !== "M" && nextLetter !== "D"){
              finalNum += 100
            }
          }else if(letter==="L"){
            if(prevLetter === "X"){
              finalNum += 40
            }else{
              finalNum += 50
            }
          }else if(letter==="X"){
            if(prevLetter==="I"){
              finalNum += 9
            }else if(nextLetter !== "L" && nextLetter !== "C"){
              finalNum += 10
            }
          }else if(letter==="V"){
            if(prevLetter==="I"){
              finalNum += 4
            }else{
              finalNum += 5
            }
          }else if(letter==="I"){
            if(nextLetter !== "V" && nextLetter !=="X" ){
              finalNum += 1
            }
          }
        })
        return finalNum
  },
   }
  //Take an int and break it up into its digits
  function getDigitsObjectFromInteger(number){
    let numberArray = number.toString().split("");
    let isThousands = numberArray.length === 4;
    let isHundreds = numberArray.length >= 3;
    let isTens = numberArray.length >= 2;
    
    let digitsObject = {
        thousands: 
          isThousands ? numberArray.splice(0,1) : 0,
        hundreds: 
        isHundreds ? numberArray.splice(0,1) : 0,
        tens: 
        isTens ? numberArray.splice(0,1) : 0,
        ones: numberArray.splice(0,1)
    }
    //Convert all to ints since currently strings
    Object.keys(digitsObject).forEach((key)=> {
      console.log(`${key}:${digitsObject[key]}`)
      return digitsObject[key] = parseInt(digitsObject[key][0], 10)
    });  
    
    return digitsObject;
  }