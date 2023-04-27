/****************   API     *********************/
/**
 *  Application Programming Interface
 *      interacts with the application no user interface 
 *      enables information and capabilities 
 * 
 *  Use
 *      HTML, JS, URL
 */

/****************   RESTful API    *********************/
/**
 *  Representational State Transfer
 *      request/response requires/includes all data that doesnt rely on any other
 * 
 *  URLs 
 *      uniform and meaningful
 *      HTTP(s) protocol
 *      client/server independent and can be in different languages
 * 
 *  Endpoints
 *      GET     /EP         get list of db  
 *      POST    /EP         create new object in db
 *      GET     /EP/<ID>    get one object in db 
 *      PUT     /EP<ID>     update one object in db
 *      DELETE  /EP<ID>     delete one object in db
 * 
 */   

/****************    How to begin    *********************/
/**
 *  1. Documentation    
 *      list of available endpoints     
 *      format request params
 *      tell you what you'll get back
 *      explain rate limits, authorization, requirements
 *  2. User auth
 *      to track requests, generate analytics, require permissions
 *      application is allowed to speak to API
 *      OAuth
 *  3. understanding    
 *      start small, send special char/ even spaces
 *      https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding
 */

/****************    Postman   *********************/
/**
 *  tool to interact with API (front end)
 *  TOP: request 
 *      can change request and specify URL and add body
 *  BOTTOM: response
 *      see data returned and cookies/headers
 */