////////// PROBLEM 1 //////////

// ***** Do not edit the code below *****
function findGrape (arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i].color === "purple") {
            return console.log(`The fruit with index ${arr.indexOf(arr[i])} is a grape`)
        } 
    }
}
// ***** Do not edit the code above *****

/*
The code above is an example of 'function declaration.' Please re-write the function in 'function expression' and 'arrow function' syntaxes. 
*/

// RE-WRITE THE ABOVE FUNCTION IN 'FUNCTION EXPRESSION' SYNTAX HERE.

const findGrapeExpress  = function () {
    for(let i=0; i<arr.length; i++) {
        if(arr[i].color === "purple") {
            return console.log(`The fruit with index ${arr.indexOf(arr[i])} is a grape`)
        } 
    }
}


// RE-WRITE THE ABOVE FUNCTION IN 'ARROW FUNCTION' SYNTAX HERE.

const findGrapeArray  = () => {
    for(let i=0; i<arr.length; i++) {
        if(arr[i].color === "purple") {
            return console.log(`The fruit with index ${arr.indexOf(arr[i])} is a grape`)
        } 
    }
}

////////// PROBLEM 2 //////////
/*
Write a one line function (give a name of your choice) with an implicit return that when the function is invoked, it will print:
 'The first parameter is [parameter1]. The second parameter is [parameter2]'.
*/

// CODE HERE
const coolOnes = (par1,par2) => `The first parameter is ${par1}. The second parameter is ${par2}`


// INVOKE THE FUNCTION HERE. THE PARAMETERS TAKE ANY DATATYPE.
console.log(coolOnes("apple", "orange"))

////////// PROBLEM 3 //////////
/*
Write a function called 'greeting' that takes 3 parameters: firstName, lastName, and a callback function. In the function, invoke the callback, 
passing in a concatenation of firstName and lastName. 
Then, outside of the greeting function, invoke the greeting function, passing in the value firstName and lastName of your choice, and a callback 
function that takes a parameter of fullName. The callback function will print 'Hello, my full name is [fullName]'. 
*/

// CODE 'GREETING FUNCTION' HERE
const greeting = (firstName,lastName,cb) => {
cb(firstName+' '+lastName)
}
const cb=(fullName) => {
    console.log(`Hello, my full name is ${fullName} `)
}
// INVOKE 'GREETING FUNCTION' HERE
greeting('Mister','Rogers',cb)

////////// PROBLEM 4 //////////

// ***** Do not edit the code below *****
let prices = [50, 33, 78, 100, 25]

let totalCost = []
// ***** Do not edit the code above *****

/* 
Write a function called 'pricesPlusTax' that takes 2 params: an array ('prices' array) and a callback function. Inside the function, loop over the 'prices' array.
 For every iteration, calculate a new total cost (original price plus 20% tax), then push it to the 'totalCost' array.
  After the loop, invoke the callback function, passing in the 'totalCost' array.
*/

// CODE HERE
function pricesPlusTax (arr,cb){
    for(let i =0; i<arr.length; i++){
        totalCost.push(arr[i]+(arr[i]*.20))
    }
    cb(totalCost)
}

function itza(arr){
    console.log(`The new array plus tax = ${totalCost}`)
}
/* 
Invoke the 'pricesPlusTax' function, passing in the 'prices' array and a callback function (passing in 'totalCost' as a param) that will print "The new array plus tax = [totalCost]"
*/

// CODE HERE

pricesPlusTax(prices,itza)
////////// PROBLEM 5 //////////

/* 
A function can return another function. Let's create one!

Create a function called 'multiplyingFactory' that takes a number as a param. The function returns another function that takes another number as a param. 

The inner function should run this logic: if the first number passing in is greater than and equal to 5, print the multiplication of the first and second numbers. 
If not, print "Cannot multiply: the first number is smaller than 5." 
*/

// CODE HERE
// const createAdder = one => (two) => one + two
// the createAdder has the parameter one that will return the function two that being called returns the sum of one and two


// const addFive = createAdder(5)
// const addTen = createAdder(10)

//parameter being the num that will call the inner function that returns the inner function 
const multiplyingFactory = num => (inner) => {
    if(num >= 5){
        console.log(inner*num)
    }else{
        console.log("Cannot multiply: the first number is smaller than 5." )
    }
}


/* 
Let's invoke the 'multiplyingFactory' function that will return another function, and save it into a variable called 'timesFour.' Let's pass in number 3 as a param.
*/

// CODE HERE
const timesFour = multiplyingFactory(5)


timesFour(3)
/* 
Now, timesFour is the new function (the inner function that was being returned when we invoked 'multiplyingFactory' function). 
The number 3 that we passed in as a first number is now saved in the 'timesFour' function. 

Let's invoke 'timesFour' and pass in number 4 as a param. Number 4 here is the second number that will multiply the first number (number 3).

Run the code in node to see the printed result. You should see "Cannot multiply: the first number is smaller than 5."
*/

// INVOKE 'timesFour' HERE
timesFour(4)

/* 
Change the param for 'multiplyingFactory' invocation to number 5. Then invoke 'timesFour' again, passing in number 4. Run the code in node, and you should see 20.
*/
timesFour(4)

//this step requires changing line 134 to  multiplyingFactory(4) to  multiplyingFactory(5) that will pass the 5 into the function and now the if statement condition becomes true 