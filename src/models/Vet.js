const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Vet = sequelize.define('vets', {
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