function add(a, b) {
    //did some googling to understand why this is a question.
    //The need for this program arises because you cannot store more than 53 bits as a number in pure javascript.
    //Googling this, however, I ended up seeing the psuedocode and I can't unsee it, so I'm just going to work off from it and not read further.
    // two variables, 
    //ok this was the result after i didn't like the walkthrough and went to stack overflow, so this ended up being just a copy and paste that i wanted to go through and understand and apply psuedocode, but it's taking me down a rabbit hole so i'm pausing this for when i'm ready to research the math happening here.
     
    const AL = a.length
    const BL = b.length
    // check which number is smaller, keep longer one on top, swap if needed. 
    const ML = Math.max(AL, BL)

    let carry = 0, sum = ''
  for (let i = 1; i <= ML; i++) {
    //work backwords through each string number, getting rightmost digit/bit
    let a = +a.charAt(AL - i)
    let b = +b.charAt(BL - i)
    //
    let t = carry + a + b
    carry = t/10 |0
    t %= 10

    sum = (i === ML && carry)
      ? carry*10 + t + sum
      : t + sum
  }

  return sum
    // store the sum's right most bit in sum variable. 
    // store the carry (leftmost bit) in carry variable. 
    // Repeat for the entire length. 
    // for the last iteration, add the carry bit to sum bit only. 
    // return the value of sum variable
    return (Number(a) + Number(b)).toString(); // Fix me!
  }