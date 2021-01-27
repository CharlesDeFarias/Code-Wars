// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

//  Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
// Matches should be case-insensitive, and the words in the result should be lowercased.
//  Ties may be broken arbitrarily.
//  If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
//https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

function topThreeWords(text) {
  let textArray = text.toLowerCase().split(" ");

  let wordCounts = [];
  let wordsSoFar = [];

  textArray.forEach((word, index) => {
    if(!wordsSoFar.includes(word) && word !== ''){
      let wordCounter = 0;
      for(let i=0; i<textArray.length;i++){
        if(textArray[i] === word){
          wordCounter += 1
        }
      }
      wordCounts.push([word, wordCounter]);
      wordsSoFar.push(word)
    }
  })

  wordCounts.sort(function(a, b) {
    return b[1] - a[1];
  });
  
}
