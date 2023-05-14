const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ClinicalNote = sequelize.define('clinical_notes', {
    note: {
        type: DataTypes.TEXT,
        allowNull: false
    },
},
{
    timestamps: true,
    updatedAt: false
});

module.exports = ClinicalNote;