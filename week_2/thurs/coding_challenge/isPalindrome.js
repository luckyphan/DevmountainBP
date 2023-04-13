/*logic behind this 
    Stacks store from first in is the last out FILO
    Queues store from first in is the first out FIFO
    so when storing the string in the data structure, 
        create an array for each struture
            the array would push according to the stucture:
                stack would 
*/
function isItPalindrome(str) {
    let stack = [];
    let queue = [];
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    for (let j = str.length-1; j >= 0; j--) {
        queue.push(str[j]);
    }
    if(stack.toString() === queue.toString()){
        return true;
    }
    else{
        return false;
    }

}

//driver 
console.log(`This uses stack and queue methods ${isItPalindrome('racecar')}`)
console.log(`This uses stack and queue methods ${isItPalindrome('Racecar')}`)


function usingReverse(s){
    let reversedString = s.split("").reverse().join("");
    return s === s.split("").reverse().join("");
}


//driver
console.log(`This uses reverse method ${usingReverse('racecar')}`)
console.log(`This uses reverse method ${usingReverse('Racecar')}`)

//logic behind this

/*  f                       b
    r   o   t   a   t   o   r
    
    the front pointer would keep pushing forward until it reaches the middle
    and the back pointer would keep pushing backward
        f               b
    r   o   t   a   t   o   r
            f       b
    r   o   t   a   t   o   r
                fb
    r   o   t   a   t   o   r
    it compares each iteration and increments/decrements according to what ptr it is

    */
function palindromePointers(str){
    let ptrFront = 0;
    let ptrBack = str.length-1;

    while(ptrFront <= ptrBack){
        if(str[ptrFront] !== str[ptrBack]){
            return false;
        }
        ptrBack--
        ptrFront++
    }
    return true;

}



console.log(`This uses pointers ${palindromePointers('racecar')}`)
console.log(`This uses pointers ${palindromePointers('Racecar')}`)