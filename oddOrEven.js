/**
 *https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
 **/
function oddOrEven(array) {
  if(array.length === 0){
    return "even"
  }else{
    let total = array.reduce((acc, curr)=>acc + curr);
    let oddOrEven = total%2 === 0 || total === 0 ? "even" : "odd";
    return oddOrEven
  }
}