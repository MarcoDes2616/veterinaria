const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ClinicHistory = sequelize.define('clinic_history', {
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},
{
    timestamps: false
});

module.exports = ClinicHistory;