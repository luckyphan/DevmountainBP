//the following runs on repl but not allowed locally
//the user inputs the array they wish to find the min and max of
let inputStr = prompt("Enter elements of a list separated by space");
let userStr = inputStr.split(' ');
let min = Math.min(...userStr)    // 1
let max = Math.max(...userStr) 
console.log(max + ' ' + min)

//using hardcoded array
let arr = [1, 4, 11, 2, 37, -4]
let min1 = Math.min(...arr)    // 1
let max1 = Math.max(...arr) 
console.log(max1 + ' ' + min1)