function perfectSquare(num){
    if(num < 0){
        console.log(-1) 
    }
    else if (Number.isInteger(Math.sqrt(num))){
        num =Math.sqrt(num) +1
        console.log(Math.pow((num),2))
    }else{
        console.log(-1) 
    }
}

perfectSquare(9) // should return 16 (3x3=9, 4x4=16)

perfectSquare(289) // should return 324 (17x17=289 18x18=324)

perfectSquare(3000)