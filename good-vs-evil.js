/**
 * https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript
 *
 */
function goodVsEvil(good, evil){
  let goodTotal = 0;
  const goodArray = good.split(" ");
  const evilArray = evil.split(" ");

  for(let i = 0; i<=good.length;i++){
    switch(i) {
      case 0:
        goodTotal += goodArray[i]*1;
        break
      case 1:
        goodTotal += goodArray[i]*2;
        break
      case 2:
        goodTotal += goodArray[i]*3;
        break
      case 3:
        goodTotal += goodArray[i]*3;
        break
      case 4:
        goodTotal += goodArray[i]*4;
        break
      case 5:
        goodTotal += goodArray[i]*10;
        break
    }
  }
  let evilTotal = 0;
  for(let j = 0; j <= evil.length ; j++){
    switch(j) {
      case 0:
        evilTotal += evilArray[j]*1;
        break
      case 1:
        evilTotal += evilArray[j]*2;
        break
      case 2:
        evilTotal += evilArray[j]*2;
        break
      case 3:
        evilTotal += evilArray[j]*2;
        break
      case 4:
        evilTotal += evilArray[j]*3;
        break
      case 5:
        evilTotal += evilArray[j]*5;
        break
      case 6:
        evilTotal += evilArray[j]*10;
        break
    }
  }

  if(goodTotal > evilTotal) {
    return "Battle Result: Good triumphs over Evil";
  } else if(goodTotal < evilTotal) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else if(goodTotal === evilTotal){
    return "Battle Result: No victor on this battle field";
  }
}
