const connection = require('./connection.js');

const orm = {
    selectAll: async function(tableName){
        const sql = `SELECT * FROM ??`;
        const data = await connection.query(sql,tableName);
        console.log(`in select all`);
        console.log(data);
    },

    insertOne: function(){
        console.log(`in insert one`);
    },

    updateOne: function(){
        console.log(`in updateOne`);
    }
}

module.exports = orm;