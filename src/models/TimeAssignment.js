const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const TimeAssignment = sequelize.define('time_assignment', {
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
},
{
    timestamps: false
});

module.exports = TimeAssignment;