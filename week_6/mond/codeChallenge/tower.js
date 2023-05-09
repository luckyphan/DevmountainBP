function buildTower(num){
    let arr = []
    
    for(let i = num; i >=1; i--){
        arr.push("'")
        for(let j = 1; j<= i -1; j++){
            arr.push(" ")
        }
        //1 < 10-2*5
        for(let k=1; k <= (num *2+1-2 * i); k++){
            arr.push('*')
        }
        for(let j = 1; j<= (i -1); j++){
            arr.push(" ")
        }
        arr.push("'")
        console.log(arr.join(""))
        arr = []
    }
}

buildTower(5);
