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

router.put("/api/:id", async function(req,res){
   console.log(`updating at id:${req.params.id}`);
   const id = req.params.id;
   let data = await burger.updateBurger(id);
   console.log(data);
   res.redirect('/');
});

router.delete("/api/:id", async function(req,res){
   console.log(`deleting at id:${req.params.id}`);
   const id = req.params.id;
   let data = await burger.deleteBurger(id);
   console.log(data);
   res.redirect('/');
});

module.exports = router;