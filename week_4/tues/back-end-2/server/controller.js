const db = require('./db.json')
//store count for id
let id = db.length

module.exports = {
    getHouses : (req,res) => {
        let allHouses = db;
        res.status(200).send(allHouses);
    },
    createHouse : (req,res) => {
        id++;
        //spread operator to destructure
        let newHouse = {...req.body, id : id};
        db.push(newHouse);
        res.status(200).send(db);
    },
    deleteHouse : (req,res) => {
        const {house_id} = req.params;
        for (let i = 0; i < db.length; i++) {
            if (db[i].id === Number(house_id)) {
            db.splice(i, 1)
            }
        }
        res.status(200).send(db)    
    },
    updateHouse : (req,res) => {
        const {house_id} = req.params;
        const {type} = req.body;
        for (let i = 0; i < db.length; i++) {
            //+movie+id
            if (db[i].id === Number(house_id)) {
                if(type === 'plus'){
                    db[i].price+=10000;
                    // console.log('plus')
                }
                if(type === 'minus' && db[i].price > 0){
                    db[i].price-=10000;
                    // console.log('minus')
                }
            }
        }
        res.status(200).send(db)  
    }
}



   
