const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", async function(req,res){
    console.log(`serving index`);
    let data = await burger.selectBurgers();
    console.log(data);
   res.render("index", {burgers:data}); 
});

module.exports = router;