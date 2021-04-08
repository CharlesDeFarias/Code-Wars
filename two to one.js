//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
//7 kyu

function longest(s1, s2) {
  let splitStrings = s1.split("").concat(s2.split(""));
  let answerArray = [];
  splitStrings.forEach((char)=>{
    if(!answerArray.includes(char)){
      answerArray.push(char);
    }
  })

  return answerArray.sort().join("")
}