const express = require('express');
const cors = require('cors');
const app = express()

//middleware

app.use(express.json());
app.use(cors()); //allow two different ports communicate and send data back/forth

//requires the controller file, everything in require is js if it doesnt display
const userController = require('./controller')
const {getHouses, createHouse, deleteHouse, updateHouse} = userController;


//const baseURL = `http://localhost:4004/api/houses`
//endpoints and requests
app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.delete('/api/houses/:house_id', deleteHouse)
app.put('/api/houses/:house_id', updateHouse)

app.listen(4004, () => console.log('We are on 4004!'));