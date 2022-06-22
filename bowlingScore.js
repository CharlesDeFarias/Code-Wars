//4 kyu
//https://www.codewars.com/kata/5531abe4855bcc8d1f00004c/train/javascript
//Given a string, give the bowling score
//X X 9/ 80 X X 90 8/ 7/ 44  each space is a new frame, x = strike / = spare
//First 9 frames, you get 2 rolls
//10th/last frame, extra roll for each strike with max of 3, no bonuses for strikes or spares going forward
//frame score of 54, example, means 9 points. 5+4
//strike = 10 points, + the points of the 2 rolls after it. X 54 = total of 28. (10+9)+9
//perfect score = X X X X X X X X X XXX = 300
// / = spare = knocked down 10 pins in 2 rolls
// in first 9 frames spare = 10 points + next roll. Ex: 9/ 54 = 24 = (10+5) + (5+4)
// question i'm running into: What happens if it's X 9/ ? Would it be 10 + 10 or 10 + 9 + 10? 
    //Google tells me x 9/ would mean: frame 1 = 20 points, frame 2 = 20 points
//lordy lordy, I finished it. This was excellent practice in conditionals and debugging. I had a good idea down from the start, but i had to spend a lot of time console logging to find edge cases and where my code wasn't working. Because of that, this did not come out dry. I can definitely go over it and make it dryer and more readable.

function bowlingScore(frames) {
    console.log("frames input" + frames)
   const splitFrames = frames.split(" ");
   console.log("splitFrames" + splitFrames)
   // Convert string into array of arrays. Each array = frame.
   let framesArray = []
   splitFrames.forEach((frame, i) => {
    if(i === 9){
        let splitFrame = frame.split("");
        let ele = []
        splitFrame.forEach((roll)=> {
            if(roll === "X"){
                ele.push(10)
            }else if(roll === "/"){
                ele.push(10)
            }else{
                ele.push(parseInt(roll))
            }
        })
        //handle last frame later
        framesArray.push(ele)  
    }else if(frame === "X"){
        // Convert strikes. Each x becomes 10
        framesArray.push([10])
    }else{
        // Convert spares. Each / becomes 10. If an array looks like [someInt, 10], then we know that means spare
        // otherwise convert normal frame into array with 2 elements
        let frameElement = [];
        frameElement.push(parseInt(frame[0]))
        if(frame[1]==="/"){
            frameElement.push(10)
        }else{
            frameElement.push(parseInt(frame[1]))
        }
        framesArray.push(frameElement)
    }
   })
   console.log("framesArray" + framesArray)

   // handle non-last frame scores
   //Create framescores array
   let frameScores = [];
    //Loop through framesArray and push scores into frameScores array
    framesArray.forEach((frameArray, i) => {
        //When there's a single element 10 in the array, that's 10 + next 2 rolls
        const isStrike = (target) => target[0] === 10;
        //When there's a double element 10 in the array, that's 10 + next 1 roll
        const isSpare = (target) => target[1] === 10; 
        const isStrikeOrSpare = (target) => isStrike(target) || isSpare(target)
        const nextFrame = framesArray[i+1]
        const twoFramesOver = framesArray[i+2]
        let score = 0
        if(i!==9){
            if(isStrike(frameArray)){
            score += 10
            //add next 2 rolls
                if(i === 7){
                    //add score of next frame
                    if(isStrike(nextFrame)){
                        score += 10
                        //add first roll of last frame
                        score += twoFramesOver[0]
                    }else if(isSpare(nextFrame)){
                        score += 10
                    }else{
                        score += nextFrame[0] + nextFrame[1]
                    }
                }else if(i === 8){
                    score += nextFrame[0]
                    //account for spare in final frame
                    if(nextFrame[1]===10 && nextFrame[0]!==10){
                        score-=nextFrame[0]
                    }
                    score += nextFrame[1]
                }else if(isStrike(nextFrame)){
                    score += 10
                    //add second next roll
                    if(isStrike(twoFramesOver)){
                        score +=10
                    }else{
                        score += twoFramesOver[0]
                    }
                }else if(isSpare(nextFrame)){
                    score+=10
                }else{
                    //add next 2 rolls
                    score += nextFrame[0] + nextFrame[1]
                }
            }else if(isSpare(frameArray)){
                score += 10
                //add next roll
                console.log("isSparetop, frameArray=" + frameArray)
                if(i === 8){
                    score += nextFrame[0]
                    console.log("tier1 score" + score)
                }else{
                    score += nextFrame[0]
                    console.log("tier3 score" + score)
                }
            }else{
                score += frameArray[0] + frameArray[1]
            }
        }else{
            frameArray.forEach((roll, i) => {
                if(roll===10){
                    if(i > 0 && frameArray[i-1]!==10){
                        score += 10
                        score -= frameArray[i-1]
                    }else{
                        score += 10
                    }
                }else{
                    score+=roll
                }
            })
        }
        frameScores.push(score)
    })
    console.log("FrameScores" + frameScores)
//add up all the scores
    let finalScore = frameScores.reduce((prev, curr) => prev + curr, 0)
    console.log("finalScore"+finalScore)
    return finalScore
}