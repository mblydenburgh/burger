const orm = require('../config/orm');

const burger = {
    selectBurgers: () => orm.selectAll().then(console.log(`burgers`)),
    insertBurger: () => orm.insertOne(),
    updateBurger: () => orm.updateOne()
};

module.exports = burger;