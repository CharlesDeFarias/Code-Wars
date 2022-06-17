//https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
//loop through each element
    //check the sum of the elements to the left and compare to the sum of the elements to the right
//refactor opportunity: the logic that has to be done in each loop could be turned into a(maybe more) function(s).
    function findEvenIndex(arr){
        let answer=-1
          arr.forEach((el, i)=>{
            let left=arr.slice(0,i);
            let right=arr.slice(i+1);
            let leftSum= left.reduce((prev,curr)=>prev + curr, 0)
            let rightSum= right.reduce((prev,curr)=>prev + curr, 0)
            if(leftSum === rightSum){
                answer=i
            }
          })
          return answer
        }