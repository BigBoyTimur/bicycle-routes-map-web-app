const sequalize = require('../database');
const {DataTypes} = require("sequelize");

const UserModel = sequalize.define("UserModel", {
    user_id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    userName: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
}, {tableName: "users", timestamps: false});

async function createTable(){
    await UserModel.sync();
}

createTable();

module.exports = {
    UserModel
}