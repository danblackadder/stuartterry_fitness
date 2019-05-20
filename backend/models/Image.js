// Article.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mimetype: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Image = mongoose.model('images', ImageSchema);

module.exports = Image;