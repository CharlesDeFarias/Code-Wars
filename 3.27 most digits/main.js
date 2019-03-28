// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
let biggest=0;
    for(let i=0;i<array.length;i++){
      if(array[i]>biggest){
      biggest=array[i];
      }else if(array[i].length===biggest){
      return biggest
      }
    }
  return biggest
}
