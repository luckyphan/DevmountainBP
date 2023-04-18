// //find a way to find min before max
// function maxProfit(arr){


//     //holds the index of the curr min and max values
//     let mnptr=0;
//     let mxptr=arr.length-1;

//     count = 0;

//     let profit =0;
//     while(mnptr <= mxptr && count<arr.length){

//         let curr = arr[mxptr] - arr[mnptr] 

//         console.log(mxptr, mnptr)

//         if(curr > profit){
//             profit = curr;
            
//         }
//         //update ptr values
//         mxptr--;
//         mnptr++;
//     }

//     return profit;
// }




function maxProfit2(arr){
    let min =  Math.min(...arr);
    let minIndex = arr.indexOf(min) 
    let max = Math.max(...arr);
    let maxIndex = arr.indexOf(max) 
    while(maxIndex > minIndex){
    if(minIndex < maxIndex){
        console.log(max-min)
        return;
    }else{
    arr.splice(minIndex,1)
    min =  Math.min(...arr);
    minIndex = arr.indexOf(min) 
    max = Math.max(...arr);
    maxIndex = arr.indexOf(max) 
    }
}
}


let arr = [7, 9, 5, 6, 3, 2]
// let arr = [1, 2, 3, 4, 5]
// let arr = [2, 3, 10, 6, 4, 8, 1]
// let arr = [0, 100]

maxProfit2(arr)