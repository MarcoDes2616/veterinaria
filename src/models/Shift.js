const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Shift = sequelize.define('shift', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, 
{
    timestamps: false
});

module.exports = Shift;