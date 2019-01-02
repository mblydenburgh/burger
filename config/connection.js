const mysql = require('promise-mysql');
require('dotenv').config();
require ('./keys');
const dbPass = process.env.DB_PASS;

// for local dev:
// user:'root'
// password:'#SadieMombo1114'
// database:'burger_db'
//
// for c9 dev:
// user:'mblydenburgh'
// password:''
// database:'c9'
//

const connection = mysql.createConnection({
    host:'127.0.0.1',
    user: 'mblydenburgh',
    password: '',
    database:'c9'
});

module.exports = connection;