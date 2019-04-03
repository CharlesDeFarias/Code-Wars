//annoying loch ness monster question
//need to search through input string and find "tree fiddy" or "three fifty" or "3.50"

function isLochNessMonster(str){
  let words = str.split(' ');
  console.log(words)
  for(let i=0;i<=str.length;i++){
    if((words[i]==="tree" &&words[(i+1)]==="fiddy")){
      return true
    }else if(i=str.length){
      return false
    }
  }
}
  isLochNessMonster('your girl scout cookies come out to tree fiddy')
  // ||words[i]==="3.50"||(words[i]==="three"&&words[(i+1)]==="fifty")
  isLochNessMonster('your total 3.50 is')
  isLochNessMonster('you at three fifty')
  //can't really split everything at the spaces because then it'd be hard to see tree and fiddy together... unless..
  //create an array out of the split words, splitting at spaces
  //loop through array searching for tree, three or 3.50.
  //if tree found, look at next index for fiddy
  //if three found, look at next index for fifthy
  //if true, return true
