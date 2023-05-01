//requires the express and cors 
const express = require("express");
//cors package enables client/server uncomplicated communication
const cors = require("cors")
//reuses express commands
const app = express();

/*                      ***MIDDLEWARE***                    */
//enables express server to use JSON objects
app.use(express.json());
//enables express server to use cors functionality
app.use(cors());

app.get("/api/users" , (req,res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

/*                      ***REQUESTS***                    */
//check the weather
//sends in the temperature as params
//runs on http://localhost:4000/weather/{temperature}
app.get("/weather/:temperature", (req,res) => {
    //destructure temperature
    const {temperature} = req.params
    const phrase = `<h3>It was ${temperature} degrees outside!</h3>`;
    res.status(200).send(phrase);
});

//server listen on port
app.listen(4000,() => console.log("Server runs on port 4000"));