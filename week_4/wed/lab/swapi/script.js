 axios.get(`https://swapi.dev/api/people/?search=darth`).then((res) => {
            console.log(res.data.results[0].height)   
        })
        .catch(err => console.log(err))

axios.get(`https://swapi.dev/api/planets/?search=alderaan`).then((res) => {
        console.log(res.data.results[0].population)   
    })
    .catch(err => console.log(err))

axios.get(`https://swapi.dev/api/starships/?search=falcon`).then((res) => {
    console.log(res.data.results[0].population)   
})
.catch(err => console.log(err))

axios.get(`https://swapi.dev/api/people/?search=c-3po`).then((res) => {
    console.log(res.data.results[0].population)   
})
.catch(err => console.log(err))

axios.get(`https://swapi.dev/api/people/?search=Obi-Wan`).then((res) => {
    let link = res.data.results[0].films
    link.forEach(element => {
        // console.log(element)
        getMovies(element)
    });
})
    .catch(err => console.log(err))

function getMovies(element){
axios.get(`${element}`).then((res) => {
    console.log(res.data.title)  
})
    .catch(err => console.log(err))
}

// https://practiceapi.devmountain.com/api
/**
 * 
Check if the POST request accept params, queries, and/or a body. Which one(s) and what information is it expecting to be sent?
accepts a body

What data type does the GET request return?
Array of objects {id, text, date}

What would the URL look like for deleting the post with the id 555? 
(This post does not exist anymore, but the syntax is the same for existing posts, )
https://practiceapi.devmountain.com/api/posts?id=500

List the possible response codes from the GET request at ‘/posts/filter’
    200 - return array of filtered posts
    400 - request query is missing required text property

Create a post whose text is your name, record the URL and body here:
https://practiceapi.devmountain.com/api/posts?id=1695


What would the URL and body object be to update the post you just made 
to contain your faovrite color instead of your name?
https://practiceapi.devmountain.com/api/posts?id=1695 PUT request

What is the URL to get posts that contain the text “blue”?
https://practiceapi.devmountain.com/api/posts/filter?text=blue

Make a request to GET all the posts. What are the content type and charset of the 
response? (Hint: look on the Headers)
Content type: application/json 
charset: utf-8

What would cause a PUT request to return a 409 status?
not having req.query.id or req.body.text, so not having the id in the query or not having the 
updated text to update the id with

What happens if you try to send a query in the GET request URL? Why do you get that 
response?

*/