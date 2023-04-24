/**
 * ***************  How to access internet    ***************
 *  request is sent
 *      method  path    protocol version
 *      GET /some/path HTTP/1.1
 *  server receives request
 *  server produces HTML in response
 *  HTML response arrives
 *  browser renders HTML
 *
 */

// * *************** Types of Requests   ***************
/**
 * GET  asks for data
 * POST change the world because some database is likely to be modified
 * PUT  create new resourse at specified place
 * DELETE remove specified resource
 */

// * *************** Idempotency   ***************
/**
 *  stateless   each request is independent
 *  if request is repeated, server is left in same state as if only one was made
 *  contains everything the browser/server would need to know
 *  doesnt need the previous step to work as intended
 *  GET, PUT, DELETE
 */

// * *************** Types of Reponses   ***************
/**
 * HTML
 * JS
 * CSS
 * PNG
 * JSON
 * XML
 */

// * *************** HTTP Theory   ***************
/**
 *  URL(Uniform Resourse Locator)
 *      protocol
 *      hostname
 *      resource
 *      query arguments
 * 
 *  DNS(Domain Name System)
 *      hostnames for humans are first converted to IP address before request is made
 *      IP address: address of web server
 * 
 *  HTTP(Hyper Text Transfer Protocol)
 *      request/response pattern
 *      (S)-secure, where browsers encrypt request for server to decrypt
 *      
 */

// * *************** Browsers  ***************
/**
 *  read and render HTML
 *  send web requests
 *  receive web response
 *  runs JS code
 * 
 *     Multiple responses
 *          request can contain HTML and JS
 *          can be assembled to create one page
 *          one page usually involves >5 req/res HTML CSS JS,IMG
 *      Semantic Web
 *          use of common data format and exchange protocol with meaning across 
 *          applications, communities, and enterprises
 *          <article> <nav> not just <div>
 *      Accessibility
 *          screen readers, to navigate page content using keyboard, audio or braile
 *          needs proper HTML elements and attributes for assistive tech
 */