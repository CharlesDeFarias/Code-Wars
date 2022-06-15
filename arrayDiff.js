//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
//remove all values from list a, which are present in list b keeping their order.
//If a value is present in b, all of its occurrences must be removed from the other:
//arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    //Go through each element in array 1
        //check if that element exists in array 2
            //if it exists in array 2, do nothing
            //if it doesn't exist in array 2 AND doesn't already exist in the answer, push to answer array
    //let's do this the old fashion way first, using loop even though i'm pretty sure this can be done with reduce
    let answer = []
    a.forEach((el)=>{
        if(!b.includes(el)){
            answer.push(el)
        }
    })
    return answer
}