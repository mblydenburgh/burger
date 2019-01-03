const Connection = require('./connection.js');

const orm = {
    selectAll: async function(tableName){
        console.log(`in selectAll`);
        const connection = await Connection;
        const data = await connection.query(`SELECT * FROM burgers`);
        console.log(data);
        // console.log(`selecting all from ${tableName}`);
        // const sql = `SELECT * FROM burgers`;
        // const data = await connection.connectDB();
        // console.log(`in select all`);
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