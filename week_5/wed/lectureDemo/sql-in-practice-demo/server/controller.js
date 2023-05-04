require('dotenv').config;
const {CONNECTION_STRING} = process.env;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})


const user_id = 4
const client_id = 3

module.exports = {
    getUserInfo: (req,res) => {
        sequelize.query(
            `SELECT * 
            FROM cc_clients AS c 
            JOIN cc_users AS u 
            ON c.user_id = u.user_id
            WHERE u.user_id = ${user_id}`
            ).then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    updateUserInfo: (req,res) => {
        let {firstName,lastName,phoneNumber,email,address,city,state,zipCode} = req.body;
        sequelize.query(
            `SELECT * 
            FROM cc_clients AS c 
            JOIN cc_users AS u 
            ON c.user_id = u.user_id
            WHERE u.user_id = ${user_id}`
            ).then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    getUserAppt: (req,res) => {
       
        let query = `
            SELECT *
            FROM cc_appointments
            WHERE client_id = ${client_id}
            ORDER BY date desc;
            `
        sequelize.query(query)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    requestAppointment: (req,res) => {
        let {date, service} = req.body;
        const query = `
        INSERT INTO cc_appointments (
            client_id,
            date,
            service_type,
            notes,
            approved,
            completed
        )
        VALUES (
            ${client_id},'${date}','${service}','',false,false)
            returning *;
        
        `
        sequelize.query(query)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }
}