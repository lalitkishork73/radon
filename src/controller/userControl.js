const userModel = require('../models/userModel.js');

const createUser = function (req, res) {
    let data = req.body
    let saveData = userModel.create(data);
    res.send({ msg: saveData });
};

module.exports.createUser=createUser;