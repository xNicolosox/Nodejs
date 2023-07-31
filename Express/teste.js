/**
 const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '3Wpn2004', {
    host: "localhost",
    dialect:'mysql'
});
**/
const Postagem = sequelize.define("postagens",{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define ("usuarios",{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Nicolas",
    sobrenome: "Veloso",
    idade: "18",
    email:"naoedatuaconta@gmail.com"
})
//Usuario.sync({force: true});     **comentar ou apagar para não correr o risco de recriar a tabela no banco.