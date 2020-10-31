/**
 *https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
 *
 * @author Charles De Farias <cd632m@wayfair.com>
 * @copyright 2020 Wayfair LLC - All rights reserved
 */

snail = function(array) {
  let answer=[];
  let isRow = true;
  let isReverse = false;
  let goingDown = true;

  const numberOfElements = array.length*array.length;

  while (answer.length < numberOfElements){
    if(isRow){
      const wholeRow = array.splice(0,1);
      if(!isReverse){
        answer.push(wholeRow);
      }else{
        answer.push(wholeRow.reverse())
      }
      isRow = false;
      isReverse = true;
    }else{
      let column = [];
      for (let j=array.length-1; j>=0; j--) {
        const row = array[j];
        const index = goingDown ? (row.length - 1) : 0;
        column.push(row.splice(index,1));
      }
      if(goingDown){
        answer.push(column.reverse());
        goingDown = false;
      }else{
        answer.push(column)
        goingDown = true;
      }
      isRow = true;
    }
  }
  return answer
}