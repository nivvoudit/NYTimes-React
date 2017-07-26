const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    date: {
        type: Date
    },
    link: {
        type: String,
        unique: true
    }
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;