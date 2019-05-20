// user.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateArticleInput = require('../validation/article');
const ObjectId = require('mongodb').ObjectID;

const Article = require('../models/Article');

router.post(
    '/new',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateArticleInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newArticle = new Article({
            createdDate: new Date(),
            publishedDate: null,
            title: req.body.title,
            content: req.body.content,
            img: req.body.img,
        });

        console.log(newArticle);
        newArticle.save().then(article => {
            res.json(article);
        });
    },
);

router.post(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateArticleInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        Article.findById(req.params.id, (err, article) => {
            if (err) {
                res.status(500).send(err);
            } else {
                article.title = req.body.title;
                article.content = req.body.content;
                article.img = req.body.img;

                article.save((err, update) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.json(update);
                    }
                });
            }
        });
    },
);

router.post(
    '/publish/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Article.findById(req.params.id, (err, article) => {
            if (err) {
                res.status(500).send(err);
            } else {
                article.published = !article.published;
                article.published
                    ? (article.publishedDate = new Date())
                    : (article.publishedDate = null);

                article.save((err, published) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.json(published);
                    }
                });
            }
        });
    },
);

router.get(
    '/admin',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Article.find({}, (err, articles) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(articles);
            }
        }).sort({ createdDate: -1 });
    },
);

router.get('/', (req, res) => {
    Article.find({ published: true }, (err, articles) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(articles);
        }
    }).sort({ publishedDate: -1 });
});

router.get('/:id', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(article);
        }
    });
});

router.get('/title/:title', (req, res) => {
    Article.find({ title: req.params.title }, (err, article) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(article[0]);
        }
    });
});

router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        //     const article = ObjectId(req.params.id);
        //     console.log(article);
        Article.findById(req.params.id, (err, article) => {
            article.remove(err => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(204).send('Article Deleted');
                }
            });
        });
        // Article.deleteOne({ article } , (err, obj) => {
        //     if (err) throw err;
        //     console.log(obj);
        //     console.log("1 document deleted");
        //     res.json(obj);
        // })
    },
);

module.exports = router;
