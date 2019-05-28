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
