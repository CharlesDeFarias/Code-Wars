/**
 *
 https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript
 */
function pyramid(n) {
  // your code here
  let pyramid=[];
  if(n !== 0){
    for(let i=0; i<=n;i++){
      let element = [];
      for(let j=0; j<i;j++){
        element.push(1)
      }
      if(element.length > 0){
        pyramid.push(element)
      }
    }
  }
  return pyramid
}