const sequalize = require('../database');
const {DataTypes} = require("sequelize");

const UserPathModel = sequalize.define("UserPathModel", {
    user_path_id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    user_id: {type: DataTypes.INTEGER},
    path_id: {type: DataTypes.INTEGER},
}, {tableName: "users_paths", timestamps: false});

async function createTable(){
    await UserPathModel.sync();
}

createTable();

module.exports = {
    UserPathModel
}