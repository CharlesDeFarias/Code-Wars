    //case insensitive
    // Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words
    // HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.
    // Extra spaces before or after the code have no meaning and should be ignored.
    // there are also service codes like ···−−−··· = SOS These special codes are treated as single special characters, and usually are transmitted as separate words.
    //coding purposes you have to use ASCII characters . and -, not Unicode characters.
    //MORSE_CODE['.--']
    // Going through wiki, I realized there won't be any easy way to convert letters in morse code. There isn't some pattern/converting math that can be used as the code wasn't built like that. E is the shortest, for example, because its the most common character in the english alphabet.
    // take in morse code as input and output a string in english
    // todo: Figure out how to ee object and array structure in codewars console log
    //this took way longer than i feel it should have. would like to try again once its left my memory.
    decodeMorse = function(morseCode){
        //split up the morseCode into characters. A single space for a character and 3 spaces for words
        let morseCodeWords = morseCode.split('   ')
        let morseCodeCharacters = morseCodeWords.map((word)=>{
            return word.split(' ')
        });

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
        return words.join(" ").trim()
        //output cleaned up sentence.

    }