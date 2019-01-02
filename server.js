// set up server
const express = require('express');
const PORT = process.env.PORT || 3042;
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up handlebars
const expshbs = require('express-handlebars');
app.engine("handlebars",expshbs({ defaultLayout:'main' }));
app.set("view engine","handlebars");

// import express routes
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT,()=>{console.log(`serving fools on port ${PORT}`)});