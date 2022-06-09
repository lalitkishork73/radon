const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
    name: String,
    headQuarter: String
}, { timestamp: true })

module.exports = mongoose.model("newPublisher", publisherSchema);