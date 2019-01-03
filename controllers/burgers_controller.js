const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", async function(req,res){
    console.log(`serving index`);
    let burgers = await burger.selectBurgers();
    // console.log(burgers);
   res.render("index"); 
});

module.exports = router;