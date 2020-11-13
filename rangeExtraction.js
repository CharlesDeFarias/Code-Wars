/**
 * 4 kyu https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
 */
function solution(list){
//list is an array of integers, can be negative or positive
//List is already in the correct order, increasing.
//When elements form a sequence of numbers increasing by 1, add the range of that sequence instead of each individual number
//final return should be a string list of integers & rangers separated by commas.


  let firstIntString;
  let secondIntString;
  let listWithRanges= list.map((int, index) => {
    let prevInt = list[index-1];
    let nextInt = list[index+1];
    let oneMoreThanPrev = int - prevInt === 1;
    let oneLessThanNext = nextInt - int === 1;

    if(oneMoreThanPrev || oneLessThanNext){
      if(oneLessThanNext && !oneMoreThanPrev){
        firstIntString = int.toString();
      }else if(oneMoreThanPrev){
        secondIntString = int.toString();
      }

      if(oneMoreThanPrev && !oneLessThanNext){
        if(secondIntString - firstIntString === 1){
          return `${firstIntString},${secondIntString}`
        }else{
          return firstIntString + "-" + secondIntString;
        }
      }
    }else{
      return int.toString()
    }
  })
  let finalList= listWithRanges.filter(element => element)

  return finalList.join();
}