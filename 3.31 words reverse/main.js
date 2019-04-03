//reverse words
//complete the function that accepts a string parameter, and reverses each word in the string. ALL spaces in the string should be retained.
function reverseWords(str){
  let sentence=''
  for(let i=0;i<str.length;i++){
   sentence = sentence + str[(str.length-1)-i]
  }
  return sentence
}

reverseWords('reverse me bitch!')
