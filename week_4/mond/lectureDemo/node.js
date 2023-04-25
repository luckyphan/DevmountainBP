/*********************  Node    **********************/
/**
 *  allows JS to run outside the browser
 *  
 *  Run
 *      node index.js
 *  
 */

/*********************  Nodemon    **********************/
/**
 *  watches JS files and restarts node
 *  
 *  Install 
 *      npm install -g nodemon
 *  Run
 *      nodemon index.js
 */

/*********************  NPM    **********************/
/**
 * Node Package Manager
 *      access to packages and libraries
 * 
 *  Set up project (yes to default settings)
 *      npm init -y
 */

/*********************  Express    **********************/
/**
 * minimal flexible Node.js framework to build servers
 *      -server receives request and returns response
 * 
 *  Install
 *      npm install express
 * 
 *     Cors
 *            package that enables client/server communication
 */


/*********************  Server setup    **********************/
/*
 *   const express = require('express') (bring in)
     const app = express() (new var)
     const cors = requre('cors') (new var)
     app.use(express.json())  // When we want to be able to accept JSON. (app has access to functions and methods)
     app.use(cors())
     app.listen(4040, () => console.log('Server running on 4040')) (makes server run)
*/

/*********************  Endpoints   **********************/
/**
 *  Create
 *      how server/API interacted with
 *      listens for get from api/users then run handlerFunction
 *      app.get('/api/users', handlerFunction)
 *   
 *  Handler Functions
 *      determines the function when a certain request is made to an endpoint
 *      app.get('/api/users', (req, res) => {
        functionality goes here
})
 */

/*********************  Params   **********************/
/**
 * Denote param with : and when hit endpoint, send in value the param would have
 *      // server code
        app.get('/api/users/:id')

        // front end code
        axios.get('/api/users/3')
        .then(...)
 */

/*********************  Queries   **********************/
/**
 *  ?key=value
 *      https://www.mywebsite.com?user=john
 *  ?key=value&key=value
 *      https://www.mywebsite.com?user=john&color=blue
 *  query object can be handled in hanlder function
 *      app.get('/api/users')
 */

/*********************  Request Object   **********************/
/**
 * passed in (from express) as argument to handler functions
 *  contians params, query, body objects that are sent in request
 *  
 *  Params, query, body access
 *      app.put('/api/users/:id', (req, res) => {
        console.log(req.params)
        console.log(req.query)
        console.log(req.body)
        })
 */

/*********************  Response Object   **********************/
/**
 *  information server sends back to client that makes the request
 *  important to include status codes(short-hand syntax relay info about req)
 *      app.get('/api/users', (req, res) => {
        res.status(200).send(users)
})

 *  
 */

