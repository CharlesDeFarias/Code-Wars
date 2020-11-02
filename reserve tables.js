/**
 * https://www.codewars.com/kata/5aba8546379d20b9970001e4/train/javascript
 *
 * @author Charles De Farias <cd632m@wayfair.com>
 * @copyright 2020 Wayfair LLC - All rights reserved
 */

///NOTE, this can be refactored a lot

function reserve(bookings) {
  var forTwo = { name: "table for two", seats : 2, num: 4};
  var forThree = { name: "table for three", seats : 3, num: 2};
  var forFour = { name: "table for four", seats : 4, num: 2};
  var forSix = { name: "table for six", seats : 6, num: 1};
  var forEight = { name: "table for eight", seats : 8, num: 1};
///start coding here:
  //deny all bookings with over 8 people
  //if bigger tables are available, smaller group can be seated if only one seat's extra
  //return array of names of table to reserve. and indices of rejected bookings
  //first come first serve
  let rejectedIndexes = [];
  let tableList=[];

  bookings.forEach((booking, index) => {
    if(booking>8){
      rejectedIndexes.push(index);
    }else if((booking === 8 || booking === 7)  && forEight.num !== 0) {
      tableList.push(forEight.name);
      forEight.num -= 1
    }else if((booking === 6 || booking === 5)  && forSix.num !== 0) {
      tableList.push(forSix.name);
      forSix.num -= 1
    }else if(booking === 4  && forFour.num !== 0) {
      tableList.push(forFour.name);
      forFour.num -= 1
    }else if(booking === 3 ) {
      if(forThree.num !== 0){
        tableList.push(forThree.name);
        forThree.num -= 1
      }else if(forFour.num !== 0){
        tableList.push(forFour.name);
        forFour.num -= 1
      }else{
        rejectedIndexes.push(index);
      }
    }else if(booking === 2 || booking === 1) {
      if(forTwo.num !== 0){
        tableList.push(forTwo.name);
        forTwo.num -= 1
      }else if(forThree.num !== 0 && booking === 2){
        tableList.push(forThree.name);
        forThree.num -= 1
      }else{
        rejectedIndexes.push(index);
      }
    }else{
      rejectedIndexes.push(index);
    }
  })

  const rejectedMessage =
    rejectedIndexes.length > 0 ?
      `Bookings at the following indexes were not accepted: ${rejectedIndexes.join(", ")}`
      : ""

  return [tableList, rejectedMessage];
}