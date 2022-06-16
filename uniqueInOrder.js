//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
//refactor opportunities: check if it's encessary to account for strings or if the behavio
var uniqueInOrder=function(iterable){
    let answer=[];
    let lastLetter = ""
    for(let i=0;i<iterable.length;i++){
        if(iterable[i]!==arr[i+1] || iterable[i]!==iterable[i-1]){
            if(iterable[i]!==lastLetter){
                answer.push(iterable[i])
                lastLetter=iterable[i]
            }
        }
    }
    return answer
  }