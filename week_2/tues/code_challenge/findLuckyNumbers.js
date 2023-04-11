const dog = {
    name: 'Freida',
    color: 'brown/black',
    age: 9
  }
  
  const dog2 = {
    name: 'Buddy',
    color: 'gray',
    age: 1
  }
  
  const {age: TINA} = dog
  const {age: FIDO} = dog2
  
  console.log(TINA) // 9
  console.log(FIDO) // 1

//   for (let attribute in dog) {
//     console.log(`The dog's ${attribute} is ${dog[attribute]}.`);
//   }
//   for (let attribute in dog2) {
//     console.log(`The dog's ${attribute} is ${dog2[attribute]}.`);
//   }

//Class is the blueprint that helps create the object which can create difference instances which are variables
//So, while the terms 'object' and 'instance' are interchangeable, the term 'instance' refers to an object's relationship to its class.

// The Object is an actual thing that is built based on the 'blue print' (like the dog). 
//An instance is a virtual copy (but not a real copy) of the object.