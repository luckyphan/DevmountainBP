//In this file, we’ll be using variables, conditionals, 
//and loops to play out a fight between Mickey Mouse and Donald Duck.
let mickeyMouseAttk = 40
let donaldDuckAttk = 12
let binh_an = 44
//Using an if-else statement, console.log who has the greater attack strength.
if(mickeyMouseAttk > donaldDuckAttk){
    console.log("mickey the best")
} 
//What if we have a tie? 
//Our code would actually give the win to Jamie, which is no good. Add in an else if to resolve this.
else if(mickeyMouseAttk === donaldDuckAttk)
console.log("both great")
else{
    console.log("donald the sport")
}
// Mickey, knowing he is the superior, initiates a fight with Donald. 
//Let’s create some additional stats for Jon Snow so we can see how this plays out.
let mickeyMouseHealth = 100
let mickeyMouseDefense = 0
let donaldDuckHealth = 100
let donaldDuckDefense = 5
//Mickey attacks first - use an if/else to determine if Donald can survive the attack. 
//If he does not, console.log “Donald has been slain.” Otherwise, condole.log Donald's health.
if(donaldDuckHealth <= mickeyMouseAttk)
    console.log("Donald has died...")
else{
    donaldDuckHealth -= mickeyMouseAttk
    console.log("Donald\'s health is now: "+donaldDuckHealth) 
    //console.log(`Donald's health is down to ${donaldDuckHealth}`)
}
// Donald, adamant he does not want to fight Mickey (can you blame him?),
//picks up a shield to help defend himself. Increase Donald's defense by 25.
console.log("Donald has boosted 25 to his defense")
donaldDuckDefense +=25

//Mickey attacks again - use an if/else to determine if Donald can survive the attack. 
//Make sure to account for Donald's defense. 
//If he does not, console.log “Donald has been slain.” Otherwise, console.log Donald’s health.
if((donaldDuckHealth <= (mickeyMouseAttk-donaldDuckDefense))){
    console.log("Donald has died...")
}
else{
    donaldDuckHealth -= mickeyMouseAttk-donaldDuckDefense
    console.log("Donald\'s health is now: "+donaldDuckHealth) 
    //console.log(`Donald's health is down to ${donaldDuckHealth}`)
}
//One of the hotdog chars, obviously wanting Donald to win, throws Donald a health kit. 
//This health kit can raise Donald's health by 50pts. 
//However, Donald's health cannot exceed 100. Using an if else statement, raise Donald's health to the appropriate level.
let healthKit = 50
if(donaldDuckHealth +healthKit >= 100){
    donaldDuckHealth = 100
}
else
    donaldDuckHealth += healthKit

//Mickey, realizing this might take a while to beat Donald, decides to flip a coin, and if the coin lands on heads, 
//he will aim to take Donald head. If it lands on tails, Mickey will allow Donald to run away. 
//Create a variable called coinLandsHeads and set it equal to false. 
//Then, using an if-else statement and the equality operator, handle the value of the flipped coin 
//(handle for both true and false).
let coinLandsHeads = false
if(coinLandsHeads === false){
    console.log("Mickey allows Donald's waddling away") 
}else
console.log("Mickey and Donald's continue the battle") 

// Demonstrate how you can use != to accomplish the same thing.
if(coinLandsHeads != true){
    console.log("Mickey allows Donald's waddling away") 
}else
console.log("Mickey and Donald's continue the battle") 
// Let’s see how this battle will play out if it continues. Create a for loop that will have Donald attack Mickey 5 times.
//Console log Donalds’s health after each attack.
for (let i =0;i<5;i++){
    //Donald's health updates to the attack making damage but also allowing him to defend himself
    if((donaldDuckHealth <= (mickeyMouseAttk-donaldDuckDefense))){
        console.log("Donald has died...")
    }
    else{
        donaldDuckHealth -= mickeyMouseAttk-donaldDuckDefense
        console.log("Donald\'s health is now: "+donaldDuckHealth) 
        //console.log(`Donald's health is down to ${donaldDuckHealth}`)
    }
}
//Demonstrate a while loop that will have Mickey attack Donald until Donald is slain. 
//You will need to comment out the above for loops for these to run properly.
while(donaldDuckHealth >0){
    if((donaldDuckHealth <= (mickeyMouseAttk-donaldDuckDefense))){
        console.log("Donald has died...")
        break
    }
    else{
        donaldDuckHealth -= mickeyMouseAttk-donaldDuckDefense
        console.log("Donald\'s health is now: "+donaldDuckHealth) 
        //console.log(`Donald's health is down to ${donaldDuckHealth}`)
    }
}
/* */