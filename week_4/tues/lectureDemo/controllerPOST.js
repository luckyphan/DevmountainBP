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
 *      //the 'Dragon' username will be updated to 'Dragon2' FRONT END
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