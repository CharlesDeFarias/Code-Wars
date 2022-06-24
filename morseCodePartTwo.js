// 4 kyu
// https://www.codewars.com/kata/54b72c16cd7f5154e9000457/train/javascript
//"Dot" – is 1 time unit long.
// "Dash" – is 3 time units long.
// Pause between dots and dashes in a character – is 1 time unit long.
// Pause between characters inside a word – is 3 time units long.
// Pause between words – is 7 time units long.
// if the line is connected (the key at the remote station is down), 1 is recorded
// if the line is not connected (remote key is up), 0 is recorded
// HEY JUDE
// ···· · −·−−   ·−−− ··− −·· · 
// 1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011
// Break up string into sequences of 1's and 0's
// somehow figure out what length of digits is = to 1 time interval
// this is another case of me getting instanceof, but a great deal of debugging had to be done to figure out edge case. I'd like a repeat of this solution that's more elegant from the onset and doesn't reuqire so many specific cases
 
var decodeBits = function(bits){
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
       //Map through bits array into array of arrays of sequences in order
       let sequences = []
       let currSequence = []
       let bitsArray = bits.split("");
       bitsArray.forEach((bit,i)=>{
        if(i===0 || i === bitsArray.length-1){
            if(bit === "0"){
                bitsArray.splice(bitsArray[i], 1)
            }
        }
       })
       console.log(`bitsArray:${bitsArray}`)
       bitsArray.forEach((bit, i)=>{
        let sameAsPrev = (b) => bitsArray[i-1]===b
        let sameAsNext = (b) => bitsArray[i+1]===b
        if(i===0 || i===bitsArray.length-1){
            if(i===0){
                currSequence.push(bit)
                if(!bitsArray[i+1] || !sameAsNext(bit)){
                sequences.push(currSequence)
                currSequence=[]
                }
            }else{
                currSequence.push(bit)
                sequences.push(currSequence)
                currSequence=[]
            }
            // console.log(`currSequence:${currSequence}`)
            // console.log(`sequences:${sequences}`)
        }else if(sameAsPrev(bit) && sameAsNext(bit)){
            currSequence.push(bit)
            // console.log(`currSequence:${currSequence}`)
            // console.log(`sequences:${sequences}`)
        }else if(sameAsNext(bit) && !sameAsPrev(bit)){
            currSequence.push(bit)
            // console.log(`currSequence:${currSequence}`)
            // console.log(`sequences:${sequences}`)
        }else if(sameAsPrev(bit) && !sameAsNext(bit)){
            currSequence.push(bit)
            sequences.push(currSequence)
            currSequence=[]
            // console.log(`currSequence:${currSequence}`)
            // console.log(`sequences:${sequences}`)
        }else if(!sameAsNext(bit) && !sameAsPrev(bit)){
            currSequence.push(bit)
            sequences.push(currSequence)
            currSequence=[]
        }
       })
    // decypher bit lengths
        //loop through array of arrays and find the most common length of sequences
        //assign a variable to pause length and make it equal to the most common 0 sequence length
        //assign variables for dash and pauses
        let zeroSequences = sequences.filter((seq) => seq.includes("0"))
        let zeroSequenceLengths = zeroSequences.map((seq)=> seq.length)
        let nonZeroSequences = sequences.filter((seq) => seq.includes("1"))
        let nonZeroSequenceLengths = nonZeroSequences.map((seq)=> seq.length)
        let zeroSeqMode = getMode(zeroSequenceLengths)
        let nonZeroSeqMode = getMode(nonZeroSequenceLengths)
        let dotAndPauseLength = zeroSeqMode <= nonZeroSeqMode ? zeroSeqMode : nonZeroSeqMode
        let timeUnit = dotAndPauseLength
        let dashAndPauseLength = timeUnit*3
        let wordPauseLength = timeUnit*7
        // console.log(`timeUnit:${timeUnit}`)
    // translate
        //map through array of arrays
        translatedArray = sequences.map((seq, i)=>{
            //if element is 0 sequence
            if(seq[0]==="0"){
                //find the length of the sequence
                //push " " {sequence length/pause length} times
                if(seq.length === dotAndPauseLength){
                    //single pause = separating 2 units of a character within a word, so no space
                    return ""
                }else if(seq.length === dashAndPauseLength){
                    //triple pause = separating 2 characters within a word, one space
                    return " "
                }else{
                    //otherwise it's a word separator, 3 spaces
                    return "   "
                }
                
            }else{
                if(seq.length === dashAndPauseLength){
                    console.log(`seq: ${seq}}`)
                    return "-"
                }else{
                    console.log(`seq: ${seq}}`)
                    return "."
                }
            }
        })
        console.log(`translatedArray:${translatedArray}`)
        let answer = translatedArray.join("").trim()
        console.log(`answer:${answer}`)
        //map new array 
    return answer
}

var decodeMorse = function(morseCode){
    //taken from my solution to part 1 of this problem
    //split up the morseCode into characters. A single space for a character and 3 spaces for words
    let morseCodeWords = morseCode.split('   ')
    let morseCodeCharacters = morseCodeWords.map((word)=>{
        return word.split(' ')
    });
    console.log(`morseCodeWords: ${morseCodeWords}`)
    console.log(`morseCodeCharacters: ${morseCodeCharacters}`)
    //for each character, return the translated character
    let translatedCharactersArray=  morseCodeCharacters.map((charArray) => {
        let newArray = []
    charArray.map((char)=> newArray.push(MORSE_CODE[char]))
    
    console.log(`charArray: ${newArray}`)
    let wordArray= newArray.map((el, index)=>{
        if(el===" "){
            if(index!==0 && index!==newArray.length-1){
                return el
            }
        }else{
            return el
        }
    })
        console.log(wordArray)
        return wordArray
    });
    console.log(`translatedCharactersArray: ${translatedCharactersArray}`)

    //smush characters within a word together, add words into sentence
    let words =[]
    translatedCharactersArray.forEach((wordArray) =>{
        let word = wordArray.join("")
        words.push(word)
        console.log("wordArray" + wordArray)
        console.log("word" + word)
    })


    console.log(`words: ${words}`)

    return words.join(" ").trim()
    //output cleaned up sentence.
    // // ToDo: Accept dots, dashes and spaces, return human-readable message
    // let morseArray = morseCode.split("")
    // let characterArray = morseArray.map((char, i) =>{
    //     if(){

    //     }
    // })
    // // if(char === " "){
    // //     if(morseArray[i + 1] !== " "){
    // //         morseArray.splice(i,1)
    // //         return ""
    // //     }else if(morseArray[i + 2] === " " && morseArray[i + 3] !== " "){
    // //         morseArray.splice(i, 3)
    // //         return 
    // //     }else{

    // //     }
    // // }else{
        
    // // }
    // let arrayWithSpaces = morseArray.map((el)=>{
    //     //handle pauses.
    //     if
    // })
}

function getMode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}