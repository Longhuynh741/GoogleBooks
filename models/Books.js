const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({

    title: {
        type: String,
        trim: true,
        required: true,
    },
    authors: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    image: {
        type: String,
        trim: true,
        required: true,
    },
    link: {
        type: String,
        trim: true,
        required: true,
    },

});

const Books = mongoose.model("Book", BooksSchema);

module.exports = Books;