// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.
// future: could use regex and could use charCode
function alphabetPosition(text) {
    let alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
    let alphArray = alphabet.split(",");
    let textArray = text.toLowerCase().split("");
    let solutionArray= [];
    textArray.forEach((char)=>{
      if(alphArray.includes(char)){
        let alphIndex = alphArray.findIndex((element) => char === element);
        solutionArray.push(alphIndex + 1)
      }
    })
    return solutionArray.join(" ");
  }