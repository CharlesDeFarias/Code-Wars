// Given: an array containing hashes of names
//
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
//
// Example:
//
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
//
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
//
// list([ {name: 'Bart'} ])
// // returns 'Bart'
//
// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
//https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript
function list(names){
  let newStr= ""
  for(let i=0;i<names.length;i++){
   if(names.length===1){
     newStr += names[i].name
    }else if(i===names.length-2){
   newStr += names[i].name+ " & "
    }else if(i===names.length-1){
    newStr += names[i].name
    }else{
    newStr += names[i].name+", "
    }
  }
  return newStr
}
