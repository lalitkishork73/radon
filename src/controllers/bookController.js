const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
// 3==> creating book
const createBook = async function (req, res) {
    let book = req.body;
    let autherID = book.author;
    let publisherID = book.publisher;

    // 3==>a
    if (!autherID) {
        res.send({ problem: "this detail is required" });
    }
    let author = await authorModel.findById(autherID);
    // 3==>b
    if (!author) {
        res.send({ problem: "author id is not present." });
    }
    // 3==>c
    if (!publisherID) {
        res.send({ problem: " that this detail is required" });
    }
    let publisher = await publisherModel.findById(publisherID);
    // 3==>d
    if (!publisher) {
        res.send({ problem: "publisher id is not present." });
    }
    let bookCreate = await bookModel.create(book)
    res.send({ bookCreate });
}

// for getting all documents
const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}
// 4==> populate
const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({ data: specificBook })

}
// 5==> put and update 
// 5==> a  isHardCover true for only two publishers.
const updateBooks = async function (req, res) {
    let hardCoverPublishers = await publisherModel.find({ name: { $in: ['Penguin', 'HarperCollins'] } }).select({_id:1})
    let Publishers = hardCoverPublishers.map((cover) => cover.id);
    let updated=await bookModel.updateMany({ publisher: { $in: Publishers } }, { isHardCover: true })
    res.send({ data: updated })
}
//5==> b rating greater than 3.5, update the books price by 10 
const updateRating = async function (req, res) {
    let ratings=await authorModel.find({ratings:{$gt:3.5}}).select({_id:1})
    let selectedRating=ratings.map((rates)=>rates.id)
    let updatedRaits=await bookModel.updateMany({ author: { $in: selectedRating } }, { $inc: { price: 10 } },{new:true})    
    res.send({ data: updatedRaits })
} 


// module Export
module.exports.createBook = createBook;
module.exports.updateBooks = updateBooks;
module.exports.updateRating = updateRating;
module.exports.getBooksData = getBooksData;
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails;
