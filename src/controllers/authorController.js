// Importing Modules
const authorModel = require('../models/authorModel');
const bookModel = require("../models/bookModel");

//1 ==> create Author in database
const createAuthor = async function (req, res) {
    let getData = req.body;
    let authors = await authorModel.create(getData);
    res.send({ msg: authors });
}

//2 ==> get Author From database
const getAuthor = async function (req, res) {
    let getAuthor = await authorModel.find();
    res.send({ msg: getAuthor });
}

//3 ==> get Author id From database amd check bookModel with same Id
const authorId = async function (req, res) {
    let author = await authorModel.findOne({ author_name: "Chetan Bhagat" });
    let id = author.author_id;
    let books = await bookModel.find({ author_id: id });
    res.send(books);
};

//4 ==> get bookPrice with author name
const bookPrice = async function (req, res) {
    let books = await bookModel
        .find({ price: { $gte: 50, $lte: 100 } })
        
    let id = books.map((book) => book.author_id);
    const authors = await authorModel.find({ author_id: { $in: id } });
    let authorsName = authors.map((name) => name.author_name);
    res.send(authorsName);
};
// 5 ==> Get Books list From Database
const authorUpdates = async function (req, res) {
    let name = await bookModel.findOneAndUpdate(
        { name: "Two states" },
        { price: 100 },
        { new: true }
    );
    let id = name.author_id;
    let author = await authorModel.findOne({ author_id: id });
    let price = name.price;
    res.send({ author, price });
};

const Author_Id = async function (req, res) {
    let id = req.params.Author_Id;
    let findAuthor = await authorModel.findOne({ author_id: id });
    let bookAuthorId=findAuthor.author_id;
    let bookss = await bookModel.find({ author_id: bookAuthorId });
    res.send({Books:bookss});

}

const authorAge= async function(req,res){
    let findAuthor=await authorModel.findOne({$gt:{age:50}})
    let authorId=findAuthor.author_id;
    let name=findAuthor.author_name;
    let age=findAuthor.age;
    let bookRating= await bookModel.findOne({author_id:authorId});
    if (bookRating.ratings>4){
        res.send({name,age})
    }
}
// Exporting modules
module.exports.createAuthor = createAuthor;
module.exports.getAuthor = getAuthor;
module.exports.authorId = authorId;
module.exports.bookPrice = bookPrice;
module.exports.authorUpdates = authorUpdates;
module.exports.Author_Id = Author_Id;
module.exports.authorAge = authorAge;