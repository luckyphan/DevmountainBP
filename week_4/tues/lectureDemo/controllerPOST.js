/******************     FORM    ************************/
/**
 *  data collected is usually in object form
 */

/******************     POST    ************************/
/**
 * From front end pov (gives user object, then is handled by backend)
 *      let user = {
        username: 'Dragon',
        firstName: 'Joey',
        lastName: 'Tribiani'
        }
        axios.post('/api/users', user).then(...)

   From back end pov (handles data passed in and dictates what info front end should send)
        app.post('/api/users', (req, res) => {
        console.log(req.body) // { username: 'Dragon", firstName: 'Joey', lastName: 'Tribiani' }
        let username = req.body.username
        let firstName = req.body.firstName
        let lastName = req.body.lastName
        //DESTRUCTURE let {username,firstName,lastName} = req.body
        res.status(200).send(`Welcome, ${username}! It is nice to meet you ${firstName} ${lastName}.`)
        })
 */

/******************     ERROR HANDLING    ************************/
/**
 * 
        app.post('/api/users', (req, res) => {
        userDatabase.push(req.body) // Adds the user that was sent from the front-end to our database.
        res.status(200).send('User successfully added.')
        })
        //MISSING DATA DEALING
        app.post('/api/users', (req, res) => {
        let { username, firstName, lastName } = req.body

        if (!username || !firstName || !lastName) {
            res.status(400).send('Uh oh, it looks like you are missing some data.')
        } else {
            userDatabase.push(req.body) // Adds the user that was sent from the front-end to our database.
            res.status(200).send('User successfully added.')
        }
        })
 */

/******************     PUT    ************************/
/**
 *  is used to update existing info and doesnt need all properties of object
 * 
 *      //FRONT END the 'Dragon' username will be updated to 'Dragon2' 
        let userUpdated = {
        username: 'Dragon2'
        }
        axios.put('/api/users/Dragon', userUpdated).then(...)
 *          
        //BACK END users array of user objects that searches for matching user's username object then updates
        let users = [user1, user2, user3...]
        app.put('/api/users/:username', (req, res) => {
        let existingUsername  = req.params.username
        let newUsername = req.body.username
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === existingUsername) {
            user[i].username = newUsername
            res.status(200).send("User updated.")
            return
            }
        }
        res.status(400).send("User not found.")
        })
 */

/******************     DELETE    ************************/
/**
 *       axios.delete('/api/users/Dragon').then(...)
 * 
        let users = [user1, user2, user3...]
        app.delete('/api/users/:username', (req, res) => {
        let existingUsername  = req.params.username
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === existingUsername) {
            users.splice(i, 1)
            res.status(200).send("User deleted.")
            return
            }
        }
        res.status(400).send("User not found.")
        })
 */

/******************     REFACTOR CODE CONTROLLER FILE    ************************/
/**
        controller files are useful to navigate server 
        const userController = require('./controllers/userController')
        app.get('/api/users', userController.getAllUsers)
        app.post('/api/users', userController.createUser)
        app.put('/api/users/:username', userController.updateUser)
        app.delete('/api/users/:username', userController.deleteUser)
        //using destructuring
        const userController = require('./controllers/userController')
        const {getAllUsers, createUser, updateUser, deleteUser} = userController
        app.get('/api/users', getAllUsers)
        app.post('/api/users', createUser)
        app.put('/api/users/:username', updateUser)
        app.delete('/api/users/:username', deleteUser)

    Controller file w/ express
        module.exports = {
        someFunctionName: (req, res) => {
            // function body here
        },
        someOtherFunctionName: (req, res) => {
            // function body here
        }
        }

        let users = [user1, user2, user3...]
        module.exports = {
        createUser: (req, res) => {
            userDatabase.push(req.body)
            res.status(200).send('User successfully added.')
        },
        updateUser: (req, res) => {
            let existingUsername  = req.params.username
            let newUsername = req.body.username
            for (let i = 0; i < users.length; i++) {
            if (users[i].username === existingUsername) {
                user[i].username = newUsername
                res.status(200).send("User updated.")
                return
            }
            }
            res.status(400).send("User not found.")
        }
        }
 */

// script.js
// const pokedex = document.querySelector('.pokedex')

// for(let i=1; i< 151; i++){
//     let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     console.log(pokeImg);

//     let imgTag = document.createElement('img')
//     imgTag.src = pokeImg
//     pokedex.appendChild(imgTag)
// }

// let query = document.querySelector('input')
// let searchBtn = document.querySelector('button')

// const submitHandler = (event) => {
//     event.preventDefault();
//     console.log(query.value);

//     let pokemon = query.value

//     axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//         .then((res) => {
//             let img = document.querySelector('#pokeImg')
//             img.src = res.data.sprites.front_default
//             console.log(res.data.sprites.front_default);
            
//             // let imgs = document.querySelectorAll('.pokeImgs');
//             // imgs.forEach(el => el.src = res.data.sprites.front_default)
//         })
//         .catch(err => console.log(err))
// }
// searchBtn.addEventListener('click', submitHandler);
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <div class="container">
//         <h1>Welcome to the Pokemon Demo</h1>

//         <input type="text">
//         <button>Search</button>
//         <img id="pokeImg" src="" alt="">
//         <div class="pokedex"></div>       
//     </div>
//     <script src="./node_modules/axios/dist/axios.min.js"></script>
//     <script src="script.js"></script>
// </body>
// </html>
/**const bcrypt = require("bcryptjs");
let chats = [
  //this is what it should look like
  // {
  //     message:['hakuna matata','hakuyta'],
  //     pin:1234
  // },
  // {
  //     message:['lets go','vamos'],
  //     pin:1235
  // }
];

module.exports = {
  createMessage: (req, res) => {
    // console.log(req.body);
    //destructuring the body
    const { pin, message } = req.body;
    //check if the pin already exists
    for (let i = 0; i < chats.length; i++) {
      //if it does then we can just append to the array
      //comparySync will return true if pin matches and false otherwise
      const existing = bcrypt.compareSync(pin,chats[i].pinHash)
        if(existing){
            chats[i].messages.push(message)
            //creating a new object to send to the front-end so we can remove the pinhash
            let messagesToReturn = {...chats[i]}
            delete messagesToReturn.pinHash
            res.status(200).send(messagesToReturn)
            return
        }
    }
    
    //if it does not we will create a new object and push it to the array

    //encrypt our pin before we send it to the database/array
    const salt = bcrypt.genSaltSync(10)
    // console.log(salt)
    //creating pinHash from pin using the hashSync method 
    const pinHash = bcrypt.hashSync(pin,salt)
    const newObj = {
      pinHash,
      messages: [message],
    };
    
    //pushing it to db/array
    chats.push(newObj);
    //creating a new object to send to the front-end so we can remove the pinhash
    let messagesToReturn = {...newObj}
    delete messagesToReturn.pinHash
    console.log(chats);
    res.status(200).send(messagesToReturn);
  },
}; */