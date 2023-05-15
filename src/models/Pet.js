const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Pet = sequelize.define('pets', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    specie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    race: {
        type: DataTypes.STRING,
        allowNull: true
    },
    weight: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    height: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    petImgUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
});

module.exports = Pet;