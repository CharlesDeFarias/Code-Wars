// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
//
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//Have to loop through each string and pick out a letter
//that letter will be compared to the new string to check if there's a copy of it already there.
//If there is no copy of that letter in the string, the letter is added to the new string and put in alphabetical order.

//What I googled: how to remove individual letters in a string. Ended up on slice method even though it's ugly. str.slice(0, 3) + str.slice(4). Also googled how to sort letters in a string alphabetically. Ridiculously annoying, had to convert to array, sort, convert to string.

//if duplicate found, remove the duplicate located. I should delete the one further along the string so that the original index number that's looping doesn't get changed while looping.

//concatonate s1 and s2 into a new string.


//Loop through new string, compare each letter with the other letter in the string
// function(s1,s2){
//   let s3= s1+s2;
//   for(let i=0;i<s3.length;i++){
//     for(let j=0;j<s3.length;j++){
//       if(s3[i]===s3[j]){
//         //I wonder if slicing(0,j) and then adding the other will result in an error since the string's been sliced and the index numbers are different now? turns out no, slice makes a copy, doesn't alter original. Then again.. maybe j will change now that s3 has changed as a result of the reassignment :o added parenthesis for good measure
//       s3=(s3.slice(j+1))+s3.slice(0,j))
//       }
//     }
//   }
//   s3.sort();
// }
//I was close, but here's the finished version I did on the code wars console with mentor help:

function longest(s1,s2){
	let result = [],
      temp = s1.concat(s2).split("").sort();
	temp.reduce(function(previous,current){
		if (current !== previous) {
			result.push(current);
			return current;
		} else {
			return previous;
		}
	},0);
	return result.join("");
}
