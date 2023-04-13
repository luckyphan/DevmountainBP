/*
    Higher order array methods using callbacks
    forEach map filter has up to 3 callbacks
    element: each item in the array
    index: the place in the array
    a

// ******************   .forEach    ****************** 

forEach has a callback with an anonymous function that passes the parameters (element and index)
    forEach(element, index) for each element at index ....
    forEach(element) for each element in the array...
 */

let arr = [0, 1, 2, 3, 4]

// *** without arrow function
arr.forEach(function(element, index){
    console.log(`${element} is at index ${index}`)
})

// *** with arrow function
// arr.forEach((elem, i) => console.log(`${elem} is at index ${i}`))

/*
// ******************   .map    ****************** 

map returns a copy of the original array that doesnt modify the original
    map(array) -> a copy of the array so you can store it or modify the copy 
(element, index, array)

// *** without arrow function
    store in mappedArr where the array is copied with the map function with the callback of each element
    incremented by 2
 */
const mappedArr = arr.map(num => num+2);


// *** with arrow function
const mappedArr2 = arr.map(num => num += 2)

console.log("Mapped array is "+mappedArr ) // [2, 3, 4, 5, 6]

/*
// ******************   .filter    ****************** 

creates a copy of the original with some values filtered out with the callback returns true/false (conditional statement)
and will return the true valuees
    filter(array)-> copy array and will return filtered 'true' results

// without arrow function
    store in filteredArr where the array is copied with the filter function with the callback of condition
    of even numbers in the array
*/
const filteredArr = arr.filter(function(element){
    return element % 2 === 0
})

// with arrow function
const filteredArr2 = arr.filter(element => element % 2 === 0)

console.log(filteredArr)

/*
// ******************   .reduce    ****************** 

reduces a callback function invoked with the parameters (accumulator,current value,(index),(array))
and returns a single value. Set the initial value of the accumulator or it will use the first value
in the array

// without arrow function
    reduce((accumulatedValue,currentValue) =>cb ,(initial value) that has the accumulatedValue updated according to the 
    current value with the optional initial value
*/
const array1 = [1, 2, 3, 4];
console.log(arr)
const initialValue = 0;
const sumWithInitial = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
const newReduced = arr.reduce((a, c) => a + c , 10)

console.log(sumWithInitial);
// Expected output: 10
console.log(newReduced) // 20

// ******************   Chaining Methods    ****************** 

const myNum = arr.filter(num => num > 2).map(num => num * 3).reduce((acc, curr) => acc - curr)
// arr where all the elements that are greater than two will be copied and multiplied by 3 and 
// [3,4] -> [9,12] -> there is no current value so it takes the first value which is 9 as the acc
// and curr is 12
console.log("This is chained "+myNum)


// ******************   Having an array or object    ****************** 

const arrayOfObjects = [
    {
        'neopet': 'Yurble',
        'price': 500,
        'owner' : 'George'
    },
    {
        'neopet': 'Flotsam',
        'price': 1000,
        'owner' : 'Keechie'
    },
    {
        'neopet': 'Kacheek',
        'price': 1500,
        'owner' : 'Bob'
    },
    {
        'neopet': 'Aisha',
        'price': 9000,
        'owner' : 'Keechie'
    },
    {
        'neopet': 'Quiggle',
        'price': 340,
        'owner' : 'Nancy'
    },
    {
        'neopet': 'Lenny',
        'price': 5000,
        'owner' : 'Keechie'
    }
]
//find the total price that Keechie has spent on her neopets
// filter out from the elements in the array where the owner is Keechie then use reduce starting from 0 to find the total she spent
const keechieNeopetsTotal = arrayOfObjects.filter(element => element.owner === 'Keechie').reduce((acc,cv) => acc + cv.price,0);
console.log(keechieNeopetsTotal)