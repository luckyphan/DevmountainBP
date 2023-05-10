
function toRoman(number){
    let arr = []
	let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
	let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    //what is i: the counter that loops back t
	let i=12;
	while(number>0){
	let div = Math.floor(number/num[i]);
    console.log("div",div)
	number = number%num[i];
    console.log("num",number)
    //implied div > 0 and will be >0 when decrement
	while(div--){
		arr.push(sym[i]);
	}
	i--;
	}
    console.log(arr.join(""))
}


toRoman(149)
// 'V'

// toRoman(267)
// 'CCLXVII'



// while(num > 0){
//     if(num >=1 || num < 10) {
//         if(num < 5){
//             arr.push('I')
//             num--;
//         }
//         else if(num >= 5 && num < 10){
//             arr.push('V')
//             num-=5;
//         }
//     }
//     else if(num >= 10 || num <= 50) {
//         // console.log('10-50')
//         if(num < 50){
//             arr.push('X')
//             num-=10;
//         }
//         else if(num === 50){
//             arr.push('L')
//             num-=50;
//         }
//     }
//     else if(num >= 100 || num < 1000) {
//         if(num < 500){
//             arr.push('C')
//             num-=100;
//         }
//         else if(num < 1000){
//             arr.push('D')
//             num-=500;
//         }
//     }
//     else if(num <=1000){

//             arr.push('M')
//             num-=1000;
//     }
//     else{
//         console.log('something went wrong')
//     }
//     }
//     console.log(arr)