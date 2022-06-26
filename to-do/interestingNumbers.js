function isInteresting(num, awesomePhrases) {
    let interestingNumber = (number) => {
    // create variables for each interesting condition
    // create variable function for if number is interesting
    // check if next two numbers are interesting
    // return 0, 1, 2
    // 0 = not interesting, 1= no, but interesting number in next 2 miles 2= interesting number
    let numArray = number.toString().split('')
    // Any digit followed by all zeros: 100, 90000
    let newArray = numArray.slice(1)
    let digitsSum = newArray.reduce((prev, curr) => prev + parseInt(curr), 0)
    let isZeroes = digitsSum === 0 ? true : false
    // Every digit is the same number: 1111
    let sameDigits = true;
    numArray.forEach((num, i) => {
        if(( i > 0 && numArray[i-1] !== num) || (i<num.length-1 && numArray[i+1]!==num)){
            sameDigits = false
        }
    })
    // The digits are sequential, incementing†: 1234
    let isSequentialInc = true
    numArray.forEach((num, i) => {
        if(( i > 0 && numArray[i-1] !== num-1) || (i<num.length-1 && numArray[i+1]!==num+1)){
            isSequentialInc = false
        }
    })
    // The digits are sequential, decrementing‡: 4321
    let isSequentialDec = true
    numArray.forEach((num, i) => {
        if(( i > 0 && numArray[i-1] !== num+1) || (i<num.length-1 && numArray[i+1]!==num-1)){
            isSequentialDec = false
        }
    })
    const string = number.toString()
    const length = string.length;
    // The digits are a palindrome: 1221 or 73837
    let isPalindrome = true
    for (let i = 0; i < length/ 2; i++) {
        if (string[i] !== string[length - 1 - i]) {
            isPalindrome = false
        }
    }

    // The digits match one of the values in the awesomePhrases array
    let isAwesome = awesomePhrases.includes(number)
    let isInteresting = isZeroes || isAwesome || isPalindrome || isSequentialDec || isSequentialInc || sameDigits
    return isInteresting
    }
    
    if(interestingNumber(num)){
        return 2
    }else if(interestingNumber(num + 1) || interestingNumber(num + 2)){
        return 1
    }else{
        return 0
    }
}