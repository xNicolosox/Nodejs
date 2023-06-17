const express = require("express");
const app = express();

app.get("/", function(req,res){
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/about", function(req,res){
  res.sendFile(__dirname + "/html/about.html");
})

app.get("/blog", function(req, res){
  res.send("welcome to my blog");
})

app.get("/info/:company/:model/:year", function(req,res){
  res.send("<h1> DADOS DO VEICULO </h1> <br>" +
  "<h2> Marca do veiculo:" + " " + req.params.company + "</h2> <br>"
   + "<h2> Modelo do veiculo:" + " " + req.params.model + "</h2> <br>"
   + "<h2> Ano do veiculo: " + " " + req.params.year + "</h2 <br>");
});

app.listen(8002, function(){
  console.log("Servidor rodando na url http://localhost:8002");
});//localhost:8002
