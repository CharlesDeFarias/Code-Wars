//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//Let's copy all of the odds out into a new array
//Sort the odds array
//loop through the original array, each time an odd is encountered, take the first odd from the array out and put it in the answer array
//refactor possibilities: i think there's a way to do this using JUST .sort on the incoming array.
function sortArray(array) {
    let isEven = (num)=> num%2 === 0
    let oddsArray = array.filter((num)=>!isEven(num))
    oddsArray.sort((a,b)=> a-b)
    let answer = []
    for(let i = 0; i<array.length;i++){
        if(!isEven(array[i])){
            answer.push(oddsArray.shift())
        }else{
            answer.push(array[i])
        }
    }
    return answer
}