// Given an integer as input, can you round it to the next (meaning, "higher") 5?
// Examples:
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).
// You can assume that all inputs are valid integers.
function roundToNext5(n){
//.ceil rounds up but only to the closest whole number.
//dividing n by 5 gives a decimal that when rounded up is how much you need to multiply n by to get the next highest factor of 5
//Multiply that rounded up number by 5 and the answer will always be the closest next multiple of 5
  return Math.ceil(n/5)*5
}
