// modelo dos posts

//chamando o sequelize
const { Sequelize, Datatypes } = require('sequelize');

const connection = require('../config/connection.js');


//criar o novo post
const Posts = connection.define('posts', {
    id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    title: {
        type: Datatypes.STRING,
        allowNull: false
    },

    imgUrl: {
        type: Datatypes.STRING,
        allowNull: true
    },

    description: {
        type: Datatypes.STRING,
        allowNull: true
    },

    text: {
        type: Datatypes.STRING,
        allowNull: false
    },

    createdAt: {
        type: Datatypes.DATE,
        allowNull: false
    }
});

module.exports = Posts;
