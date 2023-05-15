const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ClinicHistory = sequelize.define('clinic_history', {
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

module.exports = ClinicHistory;