const express = require('express');
const cors = require('cors');
const app = express()

//middleware
app.use(express.json());
app.use(cors()); //allow two different ports commicate and send data back/forth

const userController = require('./controller')
const {getHouses, createHouse, deleteHouse, updateHouse} = userController;


//routes
app.get('/api/houses', getHouses)
//needs body, insert and into db
app.post('/api/houses', createHouse)
app.delete('/api/houses/:house_id', deleteHouse)
app.put('/api/houses/:house_id', updateHouse)

app.listen(4004, () => console.log('We are on 4004!'));