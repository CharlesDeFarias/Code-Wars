/**
 *https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
 *
 */

snail = function(array) {
  let answer= [];
  let isRow = true;
  let isReverse = false;
  let goingDown = true;
  let lastIndex = 0;
  let lastRow= 0;
  let nextDirection = "forward";

  const numberOfElements = array.length*array.length;
  const replacementRow = ["x", "x", "x"];
  const replacementElement = "x";
  const changeNextDirection = () => {
    switch (nextDirection) {
      case "forward":
        nextDirection = "down"
        break
      case "down":
        nextDirection = "backward"
        break
      case "backward":
        nextDirection = "up"
        break
      case "up":
        nextDirection = "forward"
        break
    }
    isRow = !isRow;
  };

  for(let i=0; i<numberOfElements; i++) {
    let goingForward = nextDirection === "forward"
    array.map((row, index) => {
      let isEmptyRow = row === replacementRow;
      if(isRow && !isEmptyRow) {
        let wholeRow =
          array.splice(0, 1, ...replacementRow);
        if(goingForward) {
          answer.push(wholeRow);
          lastIndex = row.length-1;
        }else{
          answer.push(wholeRow.reverse())
          lastIndex = 0;
          lastRow = index;
        }
        changeNextDirection();
      }else if(!isRow){
          let targetElement =
            row.splice(lastIndex,1,"x");
          if(targetElement !== replacementElement){
            answer.push(targetElement);
          }
          if(index === array.length-1){
            changeNextDirection();
          }
      }
    });
  }
  return answer

}