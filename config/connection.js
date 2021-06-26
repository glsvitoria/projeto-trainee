//informações de conexões
// conecto o sequelize 
const Sequelize = require('sequelize');

//crio uma nova conexão
const connection = new Sequelize({
    dialect: 'sqlite',
    storage: 'projeto.sqlite'
});

//exporto essa conexão
module.exports = connection;
