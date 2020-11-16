/**
 *This one gave me far more trouble than it should have. Must redo and refactor.
 *https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript
 */
function automorphic(n){

  const nString = n + ""
  const squaredNumber = `${n*n}`
  const numDigits = nString.length
  console.log(`squaredNumber:${squaredNumber}`)
  console.log(`numDigits:${numDigits}`)

  let squaredNumberArray = squaredNumber.split("");
  let finalDigits = [];

  for(var i = 0; i<numDigits; i++){
    let startingIndex = squaredNumberArray.length - (numDigits)
    let currentIndex = startingIndex + i;
    finalDigits.push(squaredNumberArray[currentIndex]);
    console.log(`startingIndex:${startingIndex}`)
    console.log(`currentIndex:${currentIndex}`)
    console.log(`squaredNumberArray:${squaredNumberArray}`)
    console.log(`finalDigits:${finalDigits}`)
  }

  let flattenedDigits = finalDigits.join("");
  console.log(`flattenedDigits:${flattenedDigits}`)

  if(flattenedDigits === nString){
    return "Automorphic"
  }else{
    return "Not!!"
  }
}