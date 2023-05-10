const Pet = require("./Pets");
const User = require("./User");


User.hasMany(Pet)
Pet.belongsTo(User)