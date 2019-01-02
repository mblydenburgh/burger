const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", function(req,res){
    console.log(`serving index`)
    burger.selectBurgers();
   res.render("index"); 
});

module.exports = router;