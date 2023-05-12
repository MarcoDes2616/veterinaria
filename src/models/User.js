const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('users', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resetCode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    passwordChangeAt: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    profileImgUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, 
{
    timestamps: true,
    updatedAt: false
});

User.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    delete values.resetCode;
    delete values.createdAt;
    return values;
}

module.exports = User;