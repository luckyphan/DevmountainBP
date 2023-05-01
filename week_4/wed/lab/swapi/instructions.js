// <!-- Part 3: Front End (Advanced)
// In this section, you’ll be making a front end that uses data from SWAPI. The goal is to be able to click a button and get all of the residents of the planet Alderaan listed out on the page.

// Setup
// Create a folder called “swapi” and three files inside - index.html, styles.css, and main.js

// Open the folder up in VS Code

// Run npm init -y which will create a package.json file

// Install axios using npm

// index.html
// Create a basic HTML layout (doctype, html, head, body)

// Connect the CSS file (using a link) and the JS file (script tag)

// Add another script tag, above the main.js script, to import axios (since axios is in our node modules folder, the src of the script can just use the file path to get to axios, which is “./node_modules/axios/dist/axios.min.js”)

// In the body tag create a button that says “get residents” on it

// main.js
// Select the button using querySelector and save it to a variable

// Write a function that just console logs a string like ‘button clicked’

// Use addEventListener to attach the function you just wrote to a click event on the button

// Open index.html in the browser (right click and copy path)

// Click the button and check the console, if it’s working, move on to the next section

// making a request
// As you complete this section, be sure to test along the way using Postman and console.logs

// Now you’ll modify the function to make an axios call to SWAPI

// Make an axios request that gets the information about the planet Alderaan (use the search query to request it, the how to on the search query is at the bottom of the Getting Started section of the documentation)

// Inside the callback passed to the .then, loop over the residents array returned on the results. It’s full of URLs.

// In the loop, make another get request for each URL in the array.

// You’ll have another .then that has its own callback, inside which you should create an h2 element whose content is the name of the resident that you just requested. Append the h2 to your HTML document.

// styles.css
// add any styles you’d like to your page -->