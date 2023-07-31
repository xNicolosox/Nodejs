const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');


// config
  //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
  //Conexão com o banco de dados Mysql
  const sequelize = new Sequelize('test', 'root', '3Wpn2004', {
    host: "localhost",
    dialect:'mysql'
});

app.listen(8002, function(){
  console.log("Servidor rodando na url http://localhost:8002");
});//localhost:8002
