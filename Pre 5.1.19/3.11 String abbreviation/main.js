function abbrevName(name){
//I will need to split the name at the space using, I believe, splice? Seperate?
//I will then target the first index of each new word and concatonate them with a period between.
splitName= name.split(" ");
let answer=`${splitName[0][0]}`+"."+`${splitName[1][0]}`;
return answer.toUpperCase();
}
console.log("leon noel");
console.log("david Delmar")
