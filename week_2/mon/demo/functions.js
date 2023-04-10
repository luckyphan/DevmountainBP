let donaldHealth= 100
console.log(typeof donaldHealth)
// change to string
/*
donaldHealth = `${donaldHealth}`
donaldHealth = String(donaldHealth)

*/
donaldHealth += ''
console.log(typeof donaldHealth)

//Boolean(donaldHealth) returns true bc its not 0 nor an empty string


let theWinnerIs = 'Mickey is the winner'
let newWinner = theWinnerIs.replace('Mickey', 'Donald')

if(newWinner.includes('Donald')){
    console.log('replaced successfully')
}
//theWinnerIs = 'Donald is the winner'



//string to kebab
let newWinnerLower = newWinner.toLowerCase()
//splits into array from the whitespace
let newWinnerSplit = newWinnerLower.split(' ')
//join array into string with -
let newWinnerKebab = newWinnerSplit.join('-')
console.log(newWinnerSplit)
console.log(newWinnerKebab)

function isDonaldAlive(){
    if(donaldHealth > 0){
        console.log('Donald is alive')
    }else{
        console.log('Donald is deceased')
    }
}

//check if string has donald and log it
if(theWinnerIs.includes('Donald')){
console.log('it does have Donald')
}
//calls the function 
isDonaldAlive();

function surpriseAttack(attack){
    donaldHealth -= attack;
    isDonaldAlive();
}
//calls function with argument of 20 for the attack parameter
surpriseAttack(20)
console.log(donaldHealth)
surpriseAttack(12)

console.log(donaldHealth)


function greeting(person1, person2){
    console.log(`${person1} and ${person2} greet one another.`)
}

greeting('Mickey Mouse', 'Minnie Mouse')

const rollDice = () => {
    let possibleRoles = [1,2,3,4,5,6];
    let randomNumber = Math.floor(Math.random() * possibleRoles.length);
    return possibleRoles[randomNumber]
}

let firstRoll = rollDice();
let secondRoll = rollDice();
console.log(`First roll is ${firstRoll} and the second roll is ${secondRoll}`)

const diceMultiplier = () =>{
    let firstRoll = rollDice();
    let secondRoll = rollDice();
    console.log(`Numbers to multiply are  ${firstRoll} and ${secondRoll}`)
    return firstRoll * secondRoll;
}

console.log(diceMultiplier())