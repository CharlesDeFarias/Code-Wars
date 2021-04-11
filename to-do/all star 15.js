//https://www.codewars.com/kata/586560a639c5ab3a260000f3/train/javascript
function rotate(str){
  //code here
  let strArray = str.split("");

  let answer = strArray.reduce((acc, curr, index)=>{
    if(index === 0){
      let element = []
      element.push(curr)
      element.unshift(curr);
      for(let i=1; i<=index+1;i++){
        element.push(strArray[i])
      }

      acc.push(element.join(""));
    }else{
    }
    return acc
  }, []);
  console.log(answer)

}