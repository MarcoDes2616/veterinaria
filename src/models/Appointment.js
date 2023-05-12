const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Appointment = sequelize.define('appointment', {
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    reason: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    appointmentStatusId: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
});

module.exports = Appointment;