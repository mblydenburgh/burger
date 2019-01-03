const Connection = require('./connection.js');

const orm = {
    selectAll: async function(tableName){
        console.log(`in selectAll`);
        const connection = await Connection;
        const sql = `SELECT * FROM burgers`;
        const data = await connection.query(sql,tableName);
        return data;
        // console.log(data);
    },

    insertOne: function(){
        console.log(`in insert one`);
    },

    updateOne: function(){
        console.log(`in updateOne`);
    }
}

module.exports = orm;