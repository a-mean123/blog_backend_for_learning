const mongoose = require('mongoose');

const Article = mongoose.model('Article',{

    title: String,
    categorie: String,
    image: String,
    author: Object,
    date: String,
    content: String,
    popular: Boolean

})

module.exports = Article;