function printDigits(num){
    let revNum = [];
    //get the rightmost digit
    while(num>0){
        revNum.push(num%10)
        num = Math.floor(num/10)
    }
    console.log(revNum.join());
}

printDigits(1)
printDigits(314)
printDigits(12)

let reversedNum =[];
function printDigits2(num){
    //get the rightmost digit
    if(num <= 0){
        console.log(reversedNum.join());
    }else{
        reversedNum.push(num%10);
        num = Math.floor(num/10);
        printDigits2(num);
    } 
    
}
    

printDigits2(683)