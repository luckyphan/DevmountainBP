let person = {
        firstName: 'Pooh',
        lastName: 'Bear',
        age: 100,

};

console.log(person.firstName)
//needs the quote because it interprets it as a variable
console.log(person['firstName'])

let meal = {
    appetizer: 'cheese sticks',
    entree: 'mushroom-spinich roti',
    dessert: 'apple pie',
    drink: 'Lemonade'
};

//destructure dessert
let {dessert} = meal
console.log(dessert)

//access and alter dessert
//assigns var pie to drink which is lemonade
const{drink:pie} = meal
console.log("PIE"+pie)

// restructure all varaibles

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal;

console.log(myEntree)

//loop through the values
for(assignment in meal){
    console.log(`The meal at ${assignment} is ${meal[assignment]}`)
}

person.job = 'web-developer'
console.log(person.job)


//apply the same concept to array
let umshik = {
    breakfast:['yogurt','mocha','berries'],
    lunch:['rice','cereal'],
    snack:['chips'],
    dinner:['rice','kimchi','seaweed']
};

console.log(umshik)
delete umshik.snack;
console.log(umshik)

// class Car {
//     constructor(make, model, year, color){
//         this.makeOfCar = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//         this.miles = 0;
//     }
//     drive(milesToDrive){
//         this.miles += milesToDrive;
//     }
// }

// let car1 = new Car('camry', 'toyota', 2024, 'red');
// console.log(car1)
// car1.drive(50);
// console.log(car1)


// class SUV extends Car{
//     constructor(make,model,year,color,type){
//         super(make,model,year,color)
//         this.passengerCount = 5
//         this.type = type;
//     }
// }
// let car2 = new SUV('camry', 'toyota', 2124, 'red','gas');
// console.log(car2)
// car2.drive(100)
// console.log(car2)