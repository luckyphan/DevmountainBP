//////////////////////////// PROBLEM 1 ////////////////////////////
/*
  Create an object called me.
  Give it a key of name with the value being your name, and another key of age with the value being your age.
*/

//Code here
const me = {
  myName:'Lucky Phan',
  age: 23
};


//////////////////////////// PROBLEM 2 ////////////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color (a string), age (a number),
//and goodBoy/goodGirl (a boolean).

//Code here
  const dog = {
    name: 'Banana',
    color: 'yellow',
    age: 2,
    goodGirl: true
  };


//////////////////////////// PROBLEM 3 ////////////////////////////
/* Print out the name of the dog you created in problem 2 using dot-notation. */

//Code here
  console.log(dog.name)


//////////////////////////// PROBLEM 4 ////////////////////////////
/* Print out the color of the dog you created in problem 2 using bracket-notation. */

//Code here
  console.log(dog.color)


//////////////////////////// PROBLEM 5 ////////////////////////////
/*
  Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
  Have the values to those keys be strings that are equal to your favorite thing in that category.
*/

//Code here
  const favoriteThings ={
    band: 'Nickleback',
    food: 'pizza',
    person: 'Momofuku Ando, the ramen inventor',
    book:  'When breath becomes air',
    movie: 'Spririted Away',
    holiday: 'Tet'
  };

/*
  After you've made your object, use bracket or dot notation to add another key named 'car' with the value being your favorite car and then another key named 'show' with the value being your favorite show.
*/

//Code here
  favoriteThings.car = 'Maserati'
  favoriteThings.show = 'Raising Hope'

/*
  Now use bracket or dot notation to change the value of the food key in your favoriteThings object to be 'Chicken Nuggets'
  and change the value of the book key in your favoriteThings object to be 'Harry Potter'. (If they were either of those things already, change them to something else.)
*/

//Code here
favoriteThings.food = 'Chicken Nuggets'
favoriteThings.book = 'Harry Potter'

//////////////////////////// PROBLEM 6 ////////////////////////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/
const {color: myCarColor, make: myCarMake, model: myCarModel, year: myYear} = carDetails;
//Code Here

console.log(`The new make is myCarMake: ${myCarMake} and the new color is myCarCalor: ${myCarColor} + the new model is myCarModel: ${myCarModel} and
the new year is myYear: ${myYear}`)
//////////////////////////// PROBLEM 7 ////////////////////////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/


//takes the  object of me
function greeting( obj ) {
  //Code Here
  let {title, firstName, lastName} = obj
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}

const objExample = {
  title: 'Ms.',
  firstName:'Georgia',
  lastName:'White'
}

console.log(greeting(objExample))

//////////////////////////// PROBLEM 8 ////////////////////////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

//Code Here
var objEx ={
  utah:5000,
  california:10000,
  texas:3000,
  arizona:1500
}

function totalPopulation (obj){
  const {utah:state1, california:state2, texas:state3, arizona:state4} = obj;
  let sum = state1+state2+state3+state4
  console.log(state1)
  return sum;
}
console.log("The total is "+totalPopulation(objEx))

//////////////////////////// PROBLEM 9 ////////////////////////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

//Code Here
const anotherOne ={
  carb:'bread',
  fat:'oil',
  protein:'tofu'
}

function ingredients(obj){
  let arr = []
  const {carb:its, fat:all, protein:good } = obj;
  arr.push(its) 
  arr.push(all) 
  arr.push(good)
  //HOW TO LOOP WITH NEW VARIABLE NAMES being listed
  //const carrot = {carb:its, fat:all, protein:good } = obj;
  // for (let attribute in carrot) {
  // console.log(`The ${attribute} is ${obj[attribute]}.`);
  // }

  return arr;
};

console.log(ingredients(anotherOne))
//////////////////////////// PROBLEM 10 ////////////////////////////
// Do not edit the code below.
var user = {
  name: 'Bryan',
  age: 24,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'BryanSmith33@gmail.com',
  birthday: '05/02/1990',
  username: 'bryansmith33'
};
// Do not edit the code above.

/*
  Let's say I, the user, decided to change my name and email address to the following:
  name -> 'Bryan G. Smith' and email -> 'bryan.smith@devmounta.in'.
  Make that change without modifying the original object code above.
*/

//Code Here
//created a new object that is a copy of the user
const noop = {name, age, pwd, pwHash,email,birthday,username } = user;
//modified the name and email of the new object
noop.name= 'Bryan G. Smith'
noop.email = 'BryanSmith33@gmail.com'
console.log(noop)

//////////////////////////// PROBLEM 11 ////////////////////////////
/*
  Using the user object above, delete the users age off of the object.
*/

//Code Here

delete user.age
//////////////////////////// PROBLEM 12 ////////////////////////////
/*
  Create a class called 'Cat'. Make sure to call your constructor, and require these 3 parameters: name, age, color.
  Outside of your class, create an instance of your cat, passing in whatever values you would like.
  Print the name of your cat instance using dot notation.
*/

//Code here
class Cat{
  constructor(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
  }
}
// tabbyCat is an instance from the class cat
// Class >> Object >> Instance
let tabbyCat = new Cat('Sassy',2,'Orange')
let chershire = new Cat('dunno', 1000, 'purple')
let snowball = new Cat('Snowball', 2, 'Black')
console.log("The cat's name is " +tabbyCat.name+" and it is "+tabbyCat.age+" years old and is the color "+tabbyCat.color)
console.log(snowball.age)

//////////////////////////// PROBLEM 13 ////////////////////////////
/*
  Create a class called 'Wizard'. Make sure to call your constructor, and require these 3 parameters: name, age, favoriteSpell.
  Add a function to your Wizard class called castSpell. This function should print "{name} has cast {favoriteSpell}"
  Outside of your class, create an instance of your Wizard, passing in whatever values you would like.
  Call the castSpell function on the instance of your wizard.
*/

//Code here
class Wizard{
  constructor(name, age, favoriteSpell){
    this.name = name
    this.age = age
    this.favoriteSpell = favoriteSpell
  }
  //functions in classes do not need the keyword function
  castSpell({name, favoriteSpell}) {
    console.log(`${name} has cast ${favoriteSpell}`)
  }
}

let gandolf = new Wizard('Gandolf', 8000, 'Wingardium Leviosa');
gandolf.castSpell(gandolf)

//////////////////////////// PROBLEM 14 ////////////////////////////
/*
    Write a class called Phone. We'll use it as if we were creating
    phone objects to keep track of inventory using an app.

    Phone will build phone objects with brand, model, storage, color, price, and sold properties.

    Write a constructor that sets those values -- all of the values 
    should come from the constructors parameters except sold, which
    should always be set to false. We want that to be false since 
    when we create a new phone, we're putting it in our inventory
    and it won't be sold yet. 

    Create a method called 'sell'.
    sell should be a function that changes the value of sold to true and prints the string: '{brand} {model} has been sold.'
    
    Create another method called 'changePrice'. We can use this 
    to change the price in case a phone isn't selling.
    changePrice should take in one argument, 'newPrice'. 
    Inside the function, reassign the value of the object's price
    to be newPrice.
*/

//Code Here
class Phone {
 constructor (brand, model, storage, color, price){
  this.brand = brand
  this.model = model
  this.storage = storage
  this.color = color
  this.price = price
  this.sold = false

 }sell({brand,model}){
    this.sold=true;
    console.log(`${brand} ${model} has been sold.`)
  }
  changePrice(newPrice){
    this.price = newPrice;
  }
}

const iphone = new Phone('apple','iphone',165, 'red',1000)
//before sell
console.log(iphone)
iphone.sell(iphone)
//after sell
console.log(iphone)

iphone.changePrice(1300)
//after changing the price
console.log(iphone)
/*
    Next make three new phone instances using your class.
    Send in values of your choice. They should match these data types:
    - brand: string
    - model: string
    - storage: number
    - color: string
    - price: number
*/

//Code Here
const nokia = new Phone('Nokia','nokia',30,'silver',100)
const google = new Phone('Google','Google plus', 'white',1000)
const newPhone1 = new Phone('Brandy','bambooze',140,'Pink',1200)
/* 
  Call the changePrice function on one of your phones, 
  don't forget to pass in a new price 

  Then console.log that object to see the price change
*/ 

//Code Here 
console.log(newPhone1)
newPhone1.changePrice(1400)
console.log(newPhone1)

/*
  Now call the sell method on one of your other phone objects

  Print the value of that phone's sell property to make sure it's been changed to true
*/

//Code Here 
console.log(nokia)
nokia.sell(nokia)
console.log(nokia)


//phone.function(arguments)


//////////////////////////// PROBLEM 15 ////////////////////////////

/*
  Use the spread operator to create a copy of the colors object below.
  Store the copy in a variable called colorsCopy.
  Note: We did not cover the spread operator in class. We do not expect you to know how to use it. Challenge yourself by going online and researching what the spread operator is and how to use it.
*/

//do not edit this object
const colors = {
  background: 'red',
  highlight: 'blue',
  text: 'yellow'
}
//do not edit this object

const colorsCopy = {...colors}


/*
 Now use the spread operator to combine the following 2 objects into one. 
 Call the new variable helensInfo. 
 When they combine, none of the properties should be repeated.
*/

//do not edit the objects below
const contactInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  phoneNumber: 1234445555,
  email: 'helen@mymail.com',
}

const shippingInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  street: '100 E. Main Street',
  city: 'Anytown',
  state: 'AZ',
  zipCode: 85004,
}
//do not edit the objects above

//Code Here
const helensInfo = {...contactInfo,...shippingInfo};


//Print helensInfo to see what it looks like, there should be no repeating properties.

console.log(helensInfo)
//////////////////////////// PROBLEM 16 ////////////////////////////

/*
  Create a class called Vehicle. Make sure to call your constructor, 
  and require these 3 parameters: capacity (how many passengers), color, and mileage.

  Write a method inside your class called 'move'.
  The move function should take in one parameter, miles.
  Inside the function, add the number of miles to the object's mileage.
  And finally, print the value of the mileage.
*/

//Code Here 
class Vehicle{
  constructor(capacity,color,mileage){
    this.capacity = capacity
    this.color = color
    this.mileage = mileage
  }
  move(miles){
    this.mileage +=miles
    console.log(this.mileage)
  }
}

/*
  Create a vehicle using your new class and save it to a variable called myFirstVehicle
*/

//Code Here
const myFirstVehicle = new Vehicle(5,'purple',10000)
console.log(myFirstVehicle)
myFirstVehicle.move(43)
console.log(myFirstVehicle)
/* 
  Now we'll create a class that's based off of the vehicle class. 

  Write a class called Motorcycle that *extends* the Vehicle class. In the constructor, 
  make sure you require all of the parameters from the Vehicle class as well as 2 
  new ones: make and isCool. (Hint: don't forget to call the super function)
*/

//Code Here
class Vehicle1 extends Vehicle{
  constructor(capacity, color, mileage, make, isCool){
    super(capacity,color,mileage)
    this.make = make
    this.isCool = isCool
}
}

/*
  Create a Motorcycle using your new class and save it to a variable called myFirstMotorcycle
*/

//Code Here 
let myFirstMotorcycle = new Vehicle1 (2,'black',12000,'honda','very')
/*
  Call the move function on myFirstMotorcycle (don't forget the parameter)
*/
myFirstMotorcycle.move(1000)

/*
  Let's make another class based off of Vehicle. 

  Write a class called Boat that *extends* the Vehicle class. The constructor should take in
  all the same arguments as Vehicle plus 3 new ones: 
  name (boats gotta have cool names), type (ski boat, yacht, etc), and isSeaworthy.

  Create a method inside of the Boat class called checkSeaworthiness 
  Inside the method, check to see if the boat is seaworthy
  If it is, console.log a string: 'The {color} {type} {name} is seaworthy!'
  If it isn't, console.log a string: 'You need to get your {type} in shape!'

  Write a second function in this class called performMaintenance 
  This function should set isSeaworthy to be true
*/

//Code Here
class Boat extends Vehicle{
  constructor(capacity, color, mileage, name, type, isSeaworthy){
    super(capacity,color,mileage)
    this.name= name
    this.type = type ;
    this.isSeaworthy = isSeaworthy
  }
  checkSeaWorthiness(isSeaworthy, type, color,name){
    if(isSeaworthy){
      console.log(`The ${color} ${type} ${name} is seaworthy!`)
    }else
      console.log(`You need to get your ${type} in shape!`)
  }
  performMaintenance(){
    this.isSeaworthy = true
  }
}

/*
  Create a new boat using your class. You can choose whatever values you like for all the 
  properties except isSeaworthy -- make that one false. Call your variable myFirstBoat.
*/

//Code Here
let myFirstBoat = new Boat(25,'white',15000,"bessy",'cruise',false)

/*
  Call the checkSeaworthiness method on your new boat
*/

//Code Here
myFirstBoat.checkSeaWorthiness(myFirstBoat.isSeaworthy,myFirstBoat.type)

/*
  Now run the performMaintenance method on your boat
*/

//Code Here 
myFirstBoat.performMaintenance()

/*
  Check the seaworthiness once more (you should be ready for the water!)
*/

//Code Here
myFirstBoat.checkSeaWorthiness(myFirstBoat.isSeaworthy,myFirstBoat.type,myFirstBoat.color,myFirstBoat.name)