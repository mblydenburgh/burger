const orm = require('../config/orm');

const burger = {
    selectBurgers: () => orm.selectAll(),
    insertBurger: () => orm.insertOne(),
    updateBurger: () => orm.updateOne()
};

module.exports = burger;