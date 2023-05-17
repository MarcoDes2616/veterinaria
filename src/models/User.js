const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const bcrypt = require("bcrypt");
const { getImgUrl } = require('../middleware/firebase.middleware');

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
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resetCode: {
        type: DataTypes.TEXT,
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
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
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

User.beforeCreate(async(user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword
})

User.beforeFindAfterExpandIncludeAll(async(user) => {
    console.log("se ejecutó el hook");
    const img = await getImgUrl(user.profileImgUrl)
    console.log(`desde el hook ${img}`);
    user.profileImgUrl = img
})

User.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    delete values.resetCode;
    delete values.createdAt;
    return values;
}

module.exports = User;