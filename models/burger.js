const orm = require('../config/orm');

const burger = {
    selectBurgers: async function(){
        return await orm.selectAll('burgers');
        
    },
    insertBurger: async function(newBurger){
        return await orm.insertOne('burgers','burger',newBurger);
    },
    updateBurger: async function(id){
        return await orm.updateOne('burgers','eaten',true,'id',id);
    }
};

module.exports = burger;