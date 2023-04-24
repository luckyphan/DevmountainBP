console.log("JS IS SUCCCESSFUL");

let count = 0;

// get HTML element, then use querySelector,
let plusBtn = document.querySelector('#plus-btn')
let minusBtn = document.querySelector('#minus-btn')
let resetBtn = document.querySelector('#reset-btn')
let counter = document.querySelector('#counter')


// then declare callback and connect it to HTML and callback
let increment = () => {
    count++;
    counter.textContent = count;
}
let decrement = () => {
    if(count-1 >= 0){
        count--;
    }
    counter.textContent = count;
}
let reset = () =>{
    count = 0;
    counter.textContent = count;
}

// with the event listener
plusBtn.addEventListener('click',increment)
minusBtn.addEventListener('click',decrement)
resetBtn.addEventListener('click',reset)





