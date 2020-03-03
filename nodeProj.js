const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const pulledCard = require('./pullTheCard');

app.use(bodyParser.json());

app.listen(3000,function(){
  console.log("teste server on port 3000");
});

app.get("/",(req,res) =>{
  console.log("tes");
});

app.post("/",(req,res) => {
  console.log("tes "+req.body.card);
  res.json(new pulledCard().getCard(req.body));
});
