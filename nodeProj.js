const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const catCard = require("./pullTheCard.js");

app.use(bodyParser.urlencoded({extend: true}));

app.listen(3000,function(){
  console.log("teste server on port 3000");
});

app.set("view engine", "ejs");

app.get("/",(req,res) =>{
  res.render("index.ejs");
});

app.post("/show",(req,res) => {
  let numberOfCards = req.body.card;
  res.json(catCard.getCard(numberOfCards));
});
