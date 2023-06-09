/*****************  Whats is a url *****************/
/*
        protocol - https://
        domain - website.com
        endpoints - page requested
*/

/*****************  HTTP(S) *****************/
/*
        Hyper Text Transfer Protocol
*/

/*****************  Query  *****************/
/*
        start with ? then key=value 
        starts after endpoint
        ?name=lucky
        & to add more queries
        handler function app.get('/api/users')

*/

/*****************  Params  *****************/
/*
        endpoint comes after domain
        params is after the endpoint with no questionmark
        denote with colon and when "hit" endpoint, "send" value we want param to have
            // server code
            app.get('/api/users/:id')

            // front end code
            axios.get('/api/users/3')
            .then(...)
*/
/*****************  Parts of Request  *****************/
/*  request object is passed in by express as argument to handler functions
    Header:
        part of request that holds information of the request being made
        -status codes, ocntent type, when quest made...

    Body:
        optional, where daya is stores that want to be sent thorugh the request
        -form where on submit, performs request, sends the information through the body
        -in JS, send object for body

    Access
        app.put('/api/users/:id', (req, res) => {
        console.log(req.params)
        console.log(req.query)
        console.log(req.body)
        })
*/

/*****************  Parts of Response  *****************/
/*
    response object is the information the server will send back to the client 
    comes with status codes
        app.get('/api/users', (req, res) => {
        res.status(200).send(users)
        })
 */


/*****************  JSON  *****************/
/*
        JSON
            format used to structure daya being sent in the request
        -key-value pairs are wrapped in double-quotes besides numbers
        -every request sent will be parsed into JSON
*/

/*****************  Code runs  *****************/
/*
    Synchronous
        can only have one thing occur at a time
    -imposes problems when takes too long to receive response, because by the time it 
    makes the request, JS thinks it's done. So code needs to be asynchronous

    Asynchronous
        make request then execute the rest of the code, and once reeive response from request it 
        will be handled

    Promise
        special object in JS holds a response object from http request and can be used to 
        handle asynchronous actions
*/

// anything coming from JS v8 is executed by the stack, webAPI is push to callback queue

/*****************  Axios  *****************/
/*
    *  enables HTTP request using URL and communicate with the server using JSON, works async then return promises
    *  the requests connect teh front and back end and uses DOM manipulation to change the page accordingly
    returns a promise in JS, where can then be used to handle data that comes back from the response
        SUCCESSFUL 
            .then() accpets callback function as argument, and the response param in cb is wehre we access the object
             returned from response
        UNSUCCESSFUL 
            .catch()

    METHODS

        GET
            receives URL as argument to where the request will return some data
                    axios.get('http://website.com/api/')
                    .then(response => {
                    //code that does something with response.data
                    })
                    .catch(error => {
                    console.log(error)
                    })

        POST
            uses two arguments, the URL to hit and object for the body of the request. it creates data in the
            backend and returns a response
                    axios.post('http://website.com/api/', { name: 'eric' })
                    .then(response => {
                        //code that does something with response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })

        PUT
            uses two arguments, the URL to hit and teh object for the body of the request. it edits data in the
            backend and returns a response
                    axios.put('http://website.com/api/3', { name: 'nitin' })
                    .then(response => {
                        //code that does something with response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })

        DELETE
            receives URL to hit as an argument and deletes data in the backend and returns the response
                    axios.delete('http://website.com/people/2')
                    .then(response => {
                    //code that does something with response.data
                    })
                    .catch(error => {
                    console.log(error)
  })
 */

  /*****************  Client Server Overview  *****************/
  /**
   * web servers wait for client request messages and reply to the web browser with the http response message
   *    -200 OK
   *    -404 Not FOund
   *    -403 Forbidden
   * 
   * GET requests in search engine: 
   *    header, that includes useful info for hte request
   *        -host cookie, cache, accept, connection
   *    
   *    GET /en-US/search?q=client+server+overview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev HTTP/1.1
   *        -request is GET
   *        -rarget resource URL is /en-US/search
   *        -params are search?q=client+server+overview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev
   *        -target/host: developer.mozilla.org
   *        -protocol version: HTTP/1.1
   * 
   *    Response
   *        200 OK
   *        text/html
   * 
   *    NPM
   *        go to the file, then in the terminal use npm i
   *        then access the server file we want to use and run using node, in this case node server/index.js
   * 
   * 
   *    Server setup
   *        lines below need to be imported to top of file
   *            const express = require('express')
                const app = express()
                app.use(express.json())  // When we want to be able to accept JSON.
                app.listen(4040, () => console.log('Server running on 4040'))

            Endpoints
                define how server/API can be interacted with
                specify type of request server can receive and endpoint URL for request and handler functions
                    app.get('/api/users', handlerFunction)

            Handler Functions   
                functionality that should occur when request made to endpoint
                has request and response param
                    app.get('/api/users', (req, res) => {
                    // functionality goes here
                    })
   */
