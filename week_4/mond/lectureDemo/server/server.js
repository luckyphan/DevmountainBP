//imports and packages needed to create/run server
const express = require ('express')
const cors = require('cors')

//initializing epxress
const app = express()

//middleware
app.use(express.json())
app.use(cors()) //cross origin region sharing share across different ports

//dummy-data
const inventory = ['soap','milk','cookies','wine','cheese','bread',
'shampoo','markers','diapers','allergy meds']

//endpoints
app.get('/api/inventory',(req,res)=> {
    console.log(req.query)
    //check for a query
    if(req.query.item){
        const filteredItems = inventory.filter
        ((invItem) =>
        invItem.toLowerCase().includes(req.query.item.toLowerCase())
        );
        res.status(200).send(filteredItems)
    }else{
        //nothing passed in req, send is res.data
        res.status(200).send(inventory)
    }
    });
//endpoint with param
app.get('/api/inventory/:id',(req,res)=> {
    //req.params returns {id:'2'}
    //console.log(req.params.id)

    //destructure 
    const {id} = req.params
    res.status(200).send(inventory[id])
})



//runs server
app.listen(5050,() => console.log('jammin on 5050'))