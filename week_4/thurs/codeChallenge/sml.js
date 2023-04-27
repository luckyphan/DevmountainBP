/**
 * Write a function that will take in a string containing only s, m, and l 
 * characters. Ex: slsmmsllsmsmlmsls

This string essentially represents a bunch of t-shirts in an unsorted pile.
 Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

The given string will never include characters outside of the lowercase s, m, 
and l. The string will also never contain any spaces.

sort : small medium large
 */

// function charReturn(count, ltr){
//     let str = '';
    
//     for(let i = 0; i < count ; i++){
//         str+=ltr;
//     }
//     return str;
// }

// function tshirtSorter(str){
// let arr = str.toLowerCase().split('');
// let countS = 0;
// let countM = 0;
// let countL = 0;
// arr.forEach(element => {
//     if(element === 's'){
//         countS++;
//     }else if(element === 'm'){
//         countM++;
//     }else if(element === 'l'){
//         countL++;
//     }else{
//         return "error"
//     }
// });
// console.log(charReturn(countS,'s')+charReturn(countM,'m')+charReturn(countL,'l'))

// }

function tshirtSorter (str){
let ss = '';
let ms = '';
let ls = '';
for(let i = 0;i<str.length; i++){
    if(str[i] === 's'){
        ss +='s';
    }
    else if(str[i] === 'm'){
        ms += 'm';
    }
    else if(str[i] === 'l'){
        ls += 'l'
    }
    else{
        console.log('error')
    }
}
console.log(ss.concat(ms).concat(ls))
}
tshirtSorter('lm')