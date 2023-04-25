const express = require('express');
const cors = require('cors');
const app = express()

//middleware
app.use(express.json());
app.use(cors()); //allow two different ports commicate and send data back/forth

const userController = require('./controllers/userController')
const {getAllMovies, createMovie, deleteMovie, updateMovie} = userController;


//routes
app.get('/api/movies', getAllMovies)
//needs body, insert and into db (title, rating, image, url)
app.post('/api/movies', createMovie)
app.delete('/api/movies/:movie_id', deleteMovie)
app.put('/api/movies/:movie_id', updateMovie)

app.listen(4004, () => console.log('Listening on port 4004 ...'));