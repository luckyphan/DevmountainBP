function timeWord(str){
    let timing = ''
    let after = false;
    let inTens = true;
    let inTeens = true;
    let hour = Number(str.substring(0,2))
    let minutes = Number(str.substring(3,5))
    let nums= ['twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven']
    let teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    let tens = ['twenty','thirty','forty','fifty']
    // console.log(minutes)
    if((hour === 12 || hour === 00) && (minutes === 0)){
        if(minutes === 0 && hour === 12){
            timing = 'midnight'
        }else{
            timing = 'noon'
        }
    }else{
        if(hour > 12){
            hour %= 12
            after = true;
        }
        timing += nums[hour] + ' '
        if(minutes<10){
            timing += nums[minutes]
        }else if (minutes >=10 && minutes < 20){
            minutes %=10
            timing += teens[minutes]
            inTeens = false
        }else if (minutes === 20 || minutes === 30 || minutes === 40 || minutes === 50){
            switch(minutes){
                case 20:
                    timing += tens[0]
                    inTens = false
                break;
                case 30:
                    timing += tens[1]
                    inTens = false
                break;
                case 40:
                    timing += tens[2]
                    inTens = false
                break;
                case 50:
                    timing += tens[3]
                    inTens = false
                break;
            }
        }else{
            switch(true){
                case minutes<30:
                    timing += tens[0]+ ' '
                    inTens = false
                break;
                case minutes<40:
                    timing += tens[1]+ ' '
                    inTens = false
                break;
                case minutes<50:
                    timing += tens[2]+ ' '
                    inTens = false
                break;
                default:
                    timing += tens[3] + ' '
                    inTens = false
            }
        }
        //need if statement checking if minutes %10 = 0
        if(minutes %10 !== 0 && inTeens){
            minutes %=10;
            timing += nums[minutes]
        }
    }
    if(after){
        timing += ' pm'
    }else{
        timing += ' am'
    }
    console.log(timing)
}

// timeWord("01:00")
// "one o'clock am"
// timeWord("06:01")
// // 'six oh one am'
timeWord("06:10")
// // 'six ten am'
timeWord("06:18")
// // 'six eighteen am'
// timeWord("06:30")
// // 'six thirty am'
// timeWord("10:34")
// // 'ten thirty four am'

// timeWord("00:12")
// // 'twelve twelve am'


// timeWord("24:19")
// // 'twelve oh nine pm'

// timeWord("23:23")
// // 'eleven twenty three pm'