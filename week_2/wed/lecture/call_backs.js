/*
Callback: function passed to another, 
    function(){
        anotherFunction()
    }

    
Parameters in an arrow function 
    -unless there is only one parameter, use ()
*/
const innerFn = () => 'I am a callback!'

const anotherInner = () => 'Hello there'

const outerFn = callback => console.log(callback())

//outFn call passes the argument innerFn 'I am a callback' which will log the argument
outerFn(innerFn)
//outerFn call passes 'Hello there' to be logged
outerFn(anotherInner)

function callMeThird(msg){
    console.log(msg+", I am last to be logged")
}

function callMeSecond(msg){
    console.log(msg+", I will log second")
    callMeThird(msg)
}

function callMeFirst(msg){
    console.log(msg+", I will log first")
    callMeSecond(msg)
}


callMeFirst('HI')
/* callMeFirst will pass the argument 'HI' and log first then calls the callMeSecond function with the argument
    then will log second then calls the callMeThird with the argument and logs last to be logged */

function callMeThird(msg){
    console.log(msg+", I am last to be logged")
}

function callMeSecond(msg){
    console.log(msg+", I will log second")
    callMeThird(msg)
}

function callMeFirst(msg){
    console.log(msg+", I will log first")
    callMeSecond(msg)
}


callMeFirst('HI')
console.log('--------------------------')


function confuseThird(msg){
    console.log(msg+", mooo")
}

function confuseSecond(msg){
    console.log(msg+", whoooo")
    
}

function confuseFirst(msg){
    confuseThird(msg);
    console.log(msg+", sueeeeeee")
    confuseSecond(msg)
    
}

/* calls the confuse first function with the argument 'HI' where confuseThird will be called first so that moo will be logged, then
    sueeee is logged then confuseSecond is called with whoooo
    HIEARCHY:
        confuseFirst()
            1. confuseThird()
                log moooo
            2. log (sueeee)
            3. confuseSecond()
                log whooooo */
confuseFirst('HI')




//invoking outer function with callbacks
const outed = function(callback) {
    console.log(callback())
}

//anonymous function NO NAMEEE
outed(function() {
    return 'This isnt supposed to happen'
})


/* Higher order functions takes a 1+function as argument or returns a function */

const createAdder = x => (y) => x + y

// here's the same function written as a declaration
// function createAdder(x) {
//    return function(y) {
//        return x + y
//    }
//}
/*The traditional declared anonymous function would look like  
    (function (something){
        return something +100;
    });

    arrow function would look like
    (something) => {
        return something + 100;
    };

    (something) => something +100;
*/
const addFive = createAdder(5)
const addTen = createAdder(10)

addFive(12) // output: 17
addFive(40) // output: 45
addTen(3) // output: 13