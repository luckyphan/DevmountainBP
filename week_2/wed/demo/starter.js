// ////////////////////////
// ////// CALCULATOR //////
// ////////////////////////

// // CODE HERE
const add = (num1,num2) => num1 + num2
const subtract = (num1,num2) => num1 - num2
const multiply = (num1,num2) => num1 * num2
const divide = (num1,num2) => num1 / num2

const calculator = (num1,num2,cb) => {
//checking if the arguments are coercible to a number
    if(+num1 && +num2){
        num1 = +num1
        num2 = +num2
        return cb(num1,num2)
    }else{
        return console.log('Please only provide numbers')
    }
    
}

console.log(calculator(10,2,divide))
/* Make sure that the arguments passed in is a number
    get rid of redundancy by 
    + in front of num is shorthand for number 
    => {

    }

 */




///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
// pass the discount as a decimal
const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1-discount)
};

const applyFlatDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount
};

const applyDiscounts = (arr,cb,discount) => {
  for( let i = 0; i < arr.length; i++){
    cb(arr[i], discount)
  }
}

const applyDiscountByCategory = (arr,cb,discount,category) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].category === category){
      cb(arr[i],discount)
    }
  }
}

const applyDiscountByInventory = (arr,cb,discount,inventory) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].inventory < inventory){
      cb(arr[i],discount)
    }
  }
}

// applyDiscountByCategory(dogProducts,applyFlatDiscount,2,2)
// console.log(dogProducts)

applyDiscountByInventory(dogProducts,applyFlatDiscount,2,76)
console.log(dogProducts)
////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
