const userModel = require('../models/userModel.js');

const addBooks = function (req, res) {
    let data = req.body
    let saveData = userModel.create(data);
    res.send({ msg: saveData });
};

module.exports.addBooks = addBooks;