const sequalize = require('../database');
const {DataTypes} = require("sequelize");

const BikepathModel = sequalize.define("BikepathModel", {
    path_id: {type: DataTypes.STRING, primaryKey: true, autoIncrement: true},
    ID: {type: DataTypes.INTEGER},
    Name: {type: DataTypes.STRING},
    PortionName: {type: DataTypes.STRING},
    Type: {type: DataTypes.STRING},
    Width: {type: DataTypes.DOUBLE},
    Location: {type: DataTypes.STRING},
    OperOrgName: {type: DataTypes.STRING},
    DepartmentalAffiliation: {type: DataTypes.STRING},
    ObjectOperOrgPhone: {type: DataTypes.STRING},
    global_id: {type: DataTypes.INTEGER},
    geoData: {type: DataTypes.TEXT},
    geodata_center: {type: DataTypes.TEXT},
}, {tableName: "bikepaths", timestamps: false});

async function createTable(){
    await BikepathModel.sync();
}

createTable();

module.exports = {
    BikepathModel
}