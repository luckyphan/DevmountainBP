const db = require('../db.json')
//store count for id
let id = db.length

module.exports = {
    getAllMovies : (req,res) => {
        let allMovies = db;
        res.status(200).send(allMovies);
    },
    createMovie : (req,res) => {
        id++;
        let newMovie = {...req.body, id : id};
        db.push(newMovie);
        res.status(200).send(db);
    },
    deleteMovie : (req,res) => {
        const {movie_id} = req.params;
        for (let i = 0; i < db.length; i++) {
            if (db[i].id === Number(movie_id)) {
            db.splice(i, 1)
            }
        }
        res.status(200).send(db)    
    },
    updateMovie : (req,res) => {
        const {movie_id} = req.params;
        const {type} = req.body;
        for (let i = 0; i < db.length; i++) {
            //+movie+id
            if (db[i].id === Number(movie_id)) {
                if(type === 'plus' && db[i].rating < 5){
                    db[i].rating++;
                }
                if(type === 'minus' && db[i].rating > 1){
                    db[i].rating--;
                }
            }
        }
        res.status(200).send(db)  
    }
}



   
