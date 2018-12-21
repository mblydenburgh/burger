const mysql = require('promise-mysql');
require('dotenv').config();
require ('./keys');
const dbPass = process.env.DB_PASS;

const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password: '#SadieMombo1114',
    database:'burger_db'
})

module.exports = connection;