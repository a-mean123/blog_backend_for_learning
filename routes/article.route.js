const express = require('express');
const router = express.Router();

const Article = require('../models/article');


router.post('/create', (req, res)=>{

    let article = new Article(req.body);
    article.save().then(
        (saved)=>{
            res.send(saved);
        }
    )

})


router.get('/recent', (req, res)=>{

    Article.find().limit(6).then((list)=>{
        res.send(list);
    })

})

router.get('/popular', (req, res)=>{

    Article.find({popular: true}).then((list)=>{
        res.send(list);
    })

})

router.get('/byid/:id', (req, res)=>{

    Article.findById({_id: req.params.id}).then(
        (article)=>{
            res.send(article);
        }
    )

})



module.exports = router;