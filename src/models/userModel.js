const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    category: {
        type: String,
        enum: ["tech", "science", "programing"]
    },
    year: Number
}, { timestamps: true })

module.exports = mongoose.model('books', bookSchema);
    