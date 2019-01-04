const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", async function(req,res){
    console.log(`serving index`);
    let data = await burger.selectBurgers();
    console.log(data);
   res.render("index", {burgers:data}); 
});

router.post("/", async function(req,res){
   console.log(`posting data: ${req.body.name}`);
   const newBurger = req.body.name;
   let data = await burger.insertBurger(newBurger);
   console.log(data);
   res.redirect('/');
});

module.exports = router;