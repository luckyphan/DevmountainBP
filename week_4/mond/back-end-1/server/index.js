//imports and packages needed to create/run server
const express = require ('express')
const cors = require('cors')

//initializing express, minimizes code
const app = express()

//middleware that enables client/server communication send/receive json
app.use(express.json())
app.use(cors()) //cross origin region sharing share across different ports

// endpoint send friends array to client
app.get('/api/users',(req,res)=> {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

//endpoint that tells the weather today : indicate that temp is param
//runs with http://localhost:4000/weather/
app.get('/weather/:temperature',(req,res)=> {
    const {temperature} = req.params;
    const phrase = `<h3>It was ${temperature}</h3>`;
    res.status(200).send(phrase);
});



//runs server
app.listen(4000,() => console.log('i came from the year 4000'))

