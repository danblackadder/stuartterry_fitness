// user.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const ObjectId = require('mongodb').ObjectID;
const fileUpload = require('express-fileupload');
const crypto = require('crypto');

const fs = require('fs')
const { promisify } = require('util')

const unlinkAsync = promisify(fs.unlink)

var multer  = require('multer')
var path = require('path')
var storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})
var upload = multer({ storage: storage })

const app = express();

const Image = require('../models/Image');

app.use(fileUpload());

router.post('/upload', upload.array('files', 10), (req, res) => {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
    req.files.forEach(file => {
        // res.send('Complete!');
        const newImage = new Image({
            name: file.originalname,
            mimetype: file.mimetype,
            location: file.filename
        });
        newImage
            .save()
    })
    res.send('File uploaded!');
});


router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    Image.find({}, (err, images) => {
        res.json(images);
    }).sort( { date: -1 });
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Image.findById(req.params.id, (err, image) => {
        unlinkAsync('uploads/' + image.location);
        console.log(image);
        image.remove(err => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.status(204).send('Image Deleted')
            }
        })
    });
})

module.exports = router;