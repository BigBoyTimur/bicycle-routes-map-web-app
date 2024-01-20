const { UserPathModel } = require('../models/userPath');
const jwt = require("jsonwebtoken");
const {where} = require("sequelize");
const { BikepathModel } = require("../models/bikepath");

const postUserPathController = async (req, res) => {
   const { pathId, pathName, user_id } = req.body;
   if (await UserPathModel.findOne({where: {user_id, path_id: pathId}})){
      return res.json({error: 'Точка уже добавлена'});
   }
   const saved = await UserPathModel.create({user_id, path_id: pathId});
   return res.json(saved);
}

const getPathsByUserId = async (req, res) => {
   const {token} = req.cookies
   if (token) {
      jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
         if (err) throw err;
         let paths = await UserPathModel.findAll({where: {user_id: user.id}});
         paths = paths.map(item => {
            return item.dataValues.path_id
         })
         const pathsOfUser = await BikepathModel.findAll({where: {path_id: paths}})
         res.json(pathsOfUser)
      })
   } else{
      res.json(null);
   }
}

const deleteUserPath = async (req, res) => {
   const {token} = req.cookies
   if (token) {
      jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
         if (err) throw err;
         const deletedPath = await UserPathModel.destroy({where: {user_id: user.id, path_id: req.body.path_id}});
         res.json(deletedPath);
      })
   } else{
      res.json(null);
   }
}

module.exports = {
   postUserPathController,
   getPathsByUserId,
   deleteUserPath
}