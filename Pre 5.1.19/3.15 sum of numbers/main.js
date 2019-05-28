//prompt: Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
function GetSum( a,b ){
   let j = 0;
   if (a === b) {
   return a;
   }else if(a < b){
    for (a; a <= b; a++){
         j += a;
       }
   }else if (b < a){
     for (b; b <= a; b++){
         j += b;
       }
   }
   return j;
   console.log(j)
}

//if a<b set variable to a, else set variable to b
//if the numbers are equal to each other, return a
//also create variable for sum
//loop through numbers, i starts at a, ends at b
  //for every number, add to sum
  //return sum
   //Good luck!
//look-up: arrow notation, array.sort, complexity of n
