// Importing Modules
const bookModel = require('../models/bookModel')
    

// 1 ==> Create Books in Database
const createBook = async function (req, res) {
    let getData = req.body;
    let books = await bookModel.create(getData);
    res.send({ msg: books });
}

// 2 ==> Get Books list From Database
const getbooks = async function (req, res) {
    let books = await bookModel.find();
    res.send({ msg: books });
}

// Exporting Modules
module.exports.createBook = createBook;
module.exports.getbooks = getbooks;
