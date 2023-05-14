const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const bcrypt = require("bcrypt");

const Vet = sequelize.define('vet', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    specialtyId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, 
{
    timestamps: false,
});

module.exports = Vet;