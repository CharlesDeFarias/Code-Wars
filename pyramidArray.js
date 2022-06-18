// https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript
// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
// Note: the subarrays should be filled with 1s
function pyramid(n) {
    let pyramid =[]
    //loop n times to determine push right number of subarrays to pyramid. 0 should return an empty array
    for(let i=1; i<=n; i++){
        let subArray=[]
        //Each loop, push a subarray that has i # of elements (1). 
        for(let j=1;j<=i;j++){
            subArray.push(1)
        }
        pyramid.push(subArray)
    }
    return pyramid
  }