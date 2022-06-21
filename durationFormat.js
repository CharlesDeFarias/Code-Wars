// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
// 4 kyu
// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
//     For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
function formatDuration (seconds) {
    if(seconds===0){
        return "now"
    }
    const initialMinutes= Math.floor(seconds/60)
    const initialHours= Math.floor(initialMinutes/60)
    const initialDays= Math.floor(initialHours/24)
    const totalYears= Math.floor(initialDays/365)
    const totalDays = initialDays - totalYears*365
    const totalHours = initialHours - totalDays*24
    const totalMinutes = initialMinutes - totalHours*60
    const totalSeconds = seconds-(totalMinutes*60)

    const secondStr= "second"
    const minuteStr= "minute"
    const hourStr= "hour"
    const dayStr= "day"
    const yearStr= "year"

    const stringAndMakePlural = (str, num) => {
       let string= num > 1 ? str + "s" : str;
       return `${num} ${string}`
    }

    let answer= []
    if(totalYears>0){
        answer.push(stringAndMakePlural(yearStr, totalYears))
    }
    if(totalDays>0){
        answer.push(stringAndMakePlural(dayStr, totalDays))
    }
    if(totalHours>0){
        answer.push(stringAndMakePlural(hourStr, totalHours))
    }
    if(totalMinutes>0){
        answer.push(stringAndMakePlural(minuteStr, totalMinutes))
    }
    if(totalSeconds>0){
        let text=stringAndMakePlural(secondStr, totalSeconds)
        if(answer.length===0){
            answer.push(text)
        }else{
            answer.push("and " + text)
        }
    }

    
    answer.forEach((el, ind) => {
       let accountForSeconds= totalSeconds > 0 ? 2 : 1
        if(ind === answer.length-accountForSeconds){
            el = el + " "
        }else{
            el= el + ", "
        }
    }) 
    return answer.join("")
}
  
