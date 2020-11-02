/**
 *https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript
 *
 */
function race(v1, v2, g) {
  if(v1 >= v2){
    return null
  }
  let hoursPassed = g/(v2-v1);
  let secondsPassed = hoursPassed*60*60;

  let finalTime = [0,0,0];s
  if(secondsPassed >= 60){
    finalTime[2] = Math.floor(secondsPassed%60)
    finalTime[1] += Math.floor(secondsPassed/60)
  }else{
    finalTime[2] = secondsPassed
  }

  if(finalTime[1] >= 60){
    finalTime[0] += Math.floor(finalTime[1]/60);
    finalTime[1] = Math.floor(finalTime[1]%60);
  }

  return finalTime;
}