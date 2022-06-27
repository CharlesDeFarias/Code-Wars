//4 kyu
//Catching Car Mileage Numbers
//https://www.codewars.com/kata/52c4dd683bfd3b434c000292/solutions/javascript
//This one took me many attempts and a lot of debugging. There must be a more elegant solution than the one I achieved. Must redo

function isInteresting(num, awesomePhrases) {

    // return 0, 1, 2
    // 0 = not interesting, 1= no, but interesting number in next 2 miles 2= interesting number
    const numIsInteresting = interestingNumber(num)
    const nextNumIsInteresting = interestingNumber(num+1)
    const lastNumIsInteresting = interestingNumber(num+2)

    if(numIsInteresting){
        return 2
    }else if(nextNumIsInteresting){
        return 1
    }else if(lastNumIsInteresting){
        return 1
    }else{
        return 0
    }

    function interestingNumber(number) {
    // create variables for each interesting condition
    let numArray = number.toString().split('')

    // Any digit followed by all zeros: 100, 90000
    let newArray = numArray.slice(1)
    let digitsSum = newArray.reduce((prev, curr) => prev + parseInt(curr), 0)
    let isZeroes = digitsSum === 0 ? true : false

    // Every digit is the same number: 1111
    let sameDigits = true;
    numArray.forEach((digit, i) => {
        if(( i > 0 && numArray[i-1] !== digit) || (i<digit.length-1 && numArray[i+1]!==digit)){
            sameDigits = false
        }
    })
    // The digits are sequential, incementing†: 1234
    let isSequentialInc = true
    // The digits are sequential, decrementing‡: 4321
    let isSequentialDec = true
    numArray.forEach((int, i) => {
        let lessThanPrev = parseInt(numArray[i-1]) - parseInt(int) === 1
        let moreThanNext = parseInt(int) - parseInt(numArray[i+1]) === 1

        let moreThanPrev =  parseInt(int) - parseInt(numArray[i-1]) === 1
        let lessThanNext =  parseInt(numArray[i+1]) - parseInt(int) === 1
        if( (i > 0 && !lessThanPrev ) || (i < int.length-1 && !moreThanNext)){
                isSequentialDec = false           
        }
        if( (i > 0 && !moreThanPrev) || (i < int.length-1 && !lessThanNext) ){
            if((parseInt(numArray[i-1]) === 9 && parseInt(int)=== 0) && (lessThanNext || parseInt(numArray[i-2]) === 8)){
                isSequentialInc = true
            }else{
                isSequentialInc = false
            }
        }
    })
  
    // The digits are a palindrome: 1221 or 73837
    let isPalindrome = true
    // console.log(number)
    for (let i = 0; i < numArray.length/ 2; i++) {
        if (numArray[i] !== numArray[numArray.length - 1 - i]) {
            // console.log(numArray, numArray[i], numArray[numArray.length - 1 - i])
            isPalindrome = false
        }
    }

    // The digits match one of the values in the awesomePhrases array
    let isAwesome = awesomePhrases.includes(number)
    let isNotSingle = number > 99
    let isInteresting = isZeroes || isAwesome || isPalindrome || isSequentialDec || isSequentialInc || sameDigits
    console.log(`number: ${number}, isZeroes: ${isZeroes} isAwesome: ${isAwesome} isPalindrome: ${isPalindrome} isSequentialDec: ${isSequentialDec} isSequentialInc: ${isSequentialInc} sameDigits: ${sameDigits}, isInteresting: ${isInteresting}`)
    return isInteresting && isNotSingle
    }

}