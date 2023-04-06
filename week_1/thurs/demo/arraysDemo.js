//Donald is allowed to flee the fight with Mickey
let backpack = [];
let belt = [];
backpack.push('sword');
backpack.push('torch');
backpack.push('sheild');
backpack.push('food');

let sword = backpack.splice(0,1);
belt.push(sword[0]);

backpack.push('furcoat')



console.log("Backpack: "+backpack )
console.log( " Belt: "+belt)

backpack.pop();
console.log("Backpack: "+backpack );

let itemCount= backpack.length;
console.log(`Item count: ${itemCount}`)

backpack.push('flint', 'canteen','knife','toothbrush');
console.log("Backpack: "+backpack );
itemCount= backpack.length;
console.log(`Item count: ${itemCount}`)

let backpack2 = backpack.splice(3,3)
console.log("Backpack 2: "+backpack2 );
console.log("Backpack: "+backpack );