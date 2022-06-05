// import mongoose from 'mongoose';
const mongoose = require('mongoose');
// const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    firstName: String, // String is shorthand for {type: String}
    lastName: String,
    Mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ", "other"]
    },
    age: Number,
    /* comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    } */
}, { timestamps: true });

module.exports = mongoose.mod('user', userSchema);
// https://docs.google.com/document/d/1ENP1i_wdh5IZvVnD2WAzl6F50P8dEPD94t1nCNLi2Oo/editel