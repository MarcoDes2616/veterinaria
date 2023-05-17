const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const bcrypt = require("bcrypt");
const { getImgUrl } = require('../middleware/firebase.middleware');
const { types } = require('pg');

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

User.afterFind(async(user) => {
    console.log(user);
    if (user.dataValues) {
        const img = await getImgUrl(user.profileImgUrl)
        user.profileImgUrl = img
        return
    }
    const urls = user.map(async(item) => {
        if(item.profileImgUrl){
            const img = await getImgUrl(item.profileImgUrl)
            item.profileImgUrl = img
        }
    })
    await Promise.all(urls) // map async
    return user
})

User.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    delete values.resetCode;
    delete values.createdAt;
    return values;
}

module.exports = User;