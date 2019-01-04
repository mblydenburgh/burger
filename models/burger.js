const orm = require('../config/orm');

const burger = {
    selectBurgers: async function(){
        return await orm.selectAll('burgers');
        
    },
    insertBurger: async function(newBurger){
        return await orm.insertOne('burgers','burger',newBurger);
    },
    updateBurger: () => orm.updateOne()
};

module.exports = burger;