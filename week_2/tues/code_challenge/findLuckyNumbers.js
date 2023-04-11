/*
Given a number, n, return an array containing n unique random numbers between 1-10, 
inclusive. (That is, do not repeat any numbers in the returned list.)
You can trust that this function will never be called with n < 0 or n > 10.
*/

// function luckyNumbers(){
//     let unique = []
// }

/*
function luckyNumbers (num = number that will be the limit)
unique is array containing random numbers generated
for(limit = num){
    randomNumber 
    if it doesnt contain the randomNumber {
        unique i
        push into unique
    }
}

random digits are generated from 1-10


luckyNumbers(4)
[5,9,3,6]
*/
const luckyNumbers = (num) => {
    //unique contain the unique numbers up to the num limit
    let unique = []
    //indexing unique array
    //unique[0-num-1]

    //make sure unique has size of num
    while(num > unique.length){
        //Math.random() * (max - min) + min;
        let randomNumber =Math.floor(Math.random() * (10 - 1) + 1);
        if(!unique.includes(randomNumber)){
            unique.push(randomNumber)
        }
    }
    return unique;
}


console.log(luckyNumbers(9))