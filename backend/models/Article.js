// Article.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    tags: {
        type: String,
        required: false
    },
    createdDate: {
        type: Date,
        required: false,
    },
    published: {
        type: Boolean,
        default: false,
    },
    publishedDate: {
        type: Date,
        required: false,
    },
    updatedDate: {
        type: Date,
        default: Date.now
    }
});

const Article = mongoose.model('articles', ArticleSchema);

module.exports = Article;