const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const AppointmentStatus = sequelize.define('appointment_status', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = AppointmentStatus;