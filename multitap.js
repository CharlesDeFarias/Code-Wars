//https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript
//Figure out how many keypad presses it takes to type out a phrase. ignore punctuation and case sensitivity.

function presses(phrase) {
  let keypad = [
    [" ", "0"],["1"],["A", "B", "C", "2"], ["D","E","F", "3"], ["G","H","I", "4"],
    ["J","K","L", "5"], ["M","N","O", "6"], ["P","Q","R","S", "7"], ["T","U","V", "8"],
    ["W","X","Y","Z", "9"]
  ]

  let splitPhrase = phrase.toUpperCase().split("");

  return splitPhrase.reduce((acc, curr)=> {
    let key = keypad.find((arr)=> arr.includes(curr));
    if(!key){
      return false
    }
    let presses = key.findIndex((char)=> char == curr) + 1;
    return acc + presses;
  }, 0)
}