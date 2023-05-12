const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Specialty = sequelize.define('specialty', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, 
{
    timestamps: false
});

module.exports = Specialty;