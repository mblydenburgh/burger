const Connection = require('./connection.js');

const orm = {
    selectAll: async function(tableName){
        console.log(`in selectAll`);
        const connection = await Connection;
        const sql = `SELECT * FROM ??`;
        const data = await connection.query(sql,tableName);
        return data;
    },

    insertOne: async function(tableName,colName,value){
        console.log(`in insert one`);
        const connection = await Connection;
        const sql = `INSERT INTO ?? (??,??) VALUES (?,?)`;
        const values = [tableName,colName,'eaten',value,false];
        console.log(`values: ${values}`);
        const data = await connection.query(sql,values);
        return data;
    },

    updateOne: function(){
        console.log(`in updateOne`);
    }
};

module.exports = orm;