console.log("JS IS FULL");


/**
 * Steps
 *  1. make sure the js file is properly added in the HTML file
 *  2. access the elements that we are going to add
 *  3. create appropriate callbacks that will do as asked
 *  4. add the eventListeners that will connect the element and callback
 * 
 */
//access the HTML elements
let themeBtn = document.querySelectorAll('.theme-buttons')
let main = document.querySelector('main')
let body =  document.querySelector('body')
let btns = document.querySelectorAll('button')

//create callback functions

/* themeSelecter passes the event which is passed by the eventListener
and access the element the element is being called on then
accesss the textContent because thats what the themes.css file
has on file as the class name, then set the body and btns to change 
according to the css file
*/
let themeSelector = (event) => {
    let theme = event.target.textContent;
    //the textContent is equivalent to the class in the themes 
    //in the css file for the element
    //instead of using classList and assign theme
    //change alter the name directly and reassigns the name
    body.className = theme;
    main.className = theme;
    for(let i = 0; i < btns.length; i++){
        btns[i].className = theme;
    }
}

//eventListener to connect the callback to the HTML element
console.log(themeBtn)

//for loop enables a event listener to be called for each button
//if clicked it will have a callback
for(let i = 0; i < themeBtn.length; i++){
    
        themeBtn[i].addEventListener('click',themeSelector)
}