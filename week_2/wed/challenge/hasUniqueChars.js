
let mond = "Monday"
let moond = "Moonday"
let tues = "tues"
let tuees = "tuIsi"

function isUnique(str){
    for(let i = 0; i<str.length-1;i++){
        for(let j = i+1; j<str.length;j++){
            if(str[i] === str[j]){
                
            console.log("There is an identical char" +str[i])
                return false;
            }
        }
    }
    return true;
}

console.log(Math.ceil(3.5))
