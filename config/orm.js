const Connection = require('./connection.js');

const orm = {
    selectAll: async function(tableName){
        console.log(`in selectAll`);
        const connection = await Connection;
        const sql = `SELECT * FROM ??`;
        const data = await connection.query(sql,tableName);
        return data;
    },

    insertOne: async function(tableName,colName,col2Name,value,value2){
        console.log(`in insert one`);
        const connection = await Connection;
        const sql = `INSERT INTO ?? (??,??) VALUES (?,?)`;
        const values = [tableName,colName,col2Name,value,value2];
        console.log(`values: ${values}`);
        const data = await connection.query(sql,values);
        return data;
    },

    updateOne: async function(tableName,colName,updatedValue,param,location){
        console.log(`in updateOne`);
        const connection = await Connection;
        const sql = `UPDATE ?? SET ?? = ? WHERE ?? = ?`
        const values = [tableName,colName,updatedValue,param,location];
        console.log(`values: ${values}`);
        const data = await connection.query(sql,values);
        return data;
    },

    deleteOne: async function(tableName,colName,value){
        console.log(`in deleteOne`);
        const connection = await Connection;
        const sql = `DELETE FROM ?? WHERE ?? = ?`;
        const values = [tableName,colName,value];
        console.log(`values: ${values}`);
        const data = await connection.query(sql,values);
        return data;
    }
};

module.exports = orm;