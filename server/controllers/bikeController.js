// const {BikepathModel} =
const {BikepathModel} = require("../models/bikepath");
const getBikePaths = async (req, res) => {
    const allPaths = await BikepathModel.findAll();
    return res.json(allPaths);
}

module.exports = {
    getBikePaths
}