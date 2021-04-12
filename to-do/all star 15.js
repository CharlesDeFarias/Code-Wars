//https://www.codewars.com/kata/586560a639c5ab3a260000f3/train/javascript
function rotate(str){
  let strArray = str.split("");

  let answer = strArray.reduce((acc, curr, index)=>{
    let element = []
    element.push(strArray.slice(index).join(""))
    element.push(strArray.slice(0, index-strArray.length).join(""))
    acc.push(element.join(""));
    return acc
  }, []);

  return answer
}