
const orm = {
    selectAll: function(){
        console.log(`in select all`);
    },

    insertOne: function(){
        console.log(`in insert one`);
    },

    updateOne: function(){
        console.log(`in updateOne`);
    }
}

module.exports = orm;