const orm = require('../config/orm');

const burger = {
    selectBurgers: async function(){
        orm.selectAll('burgers');
        
    },
    insertBurger: () => orm.insertOne(),
    updateBurger: () => orm.updateOne()
};

module.exports = burger;