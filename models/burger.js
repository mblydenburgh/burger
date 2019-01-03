const orm = require('../config/orm');

const burger = {
    selectBurgers: async function(){
        return await orm.selectAll('burgers');
        
    },
    insertBurger: () => orm.insertOne(),
    updateBurger: () => orm.updateOne()
};

module.exports = burger;