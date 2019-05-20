const express = require('express');
const router = express.Router();
const validateArticleInput = require('../validation/contact');
const ObjectId = require('mongodb').ObjectID;
const mailer = require('express-mailer');
const dotenv = require('dotenv');

var app = require('express')();
dotenv.config();

mailer.extend(app, {
  from: process.env.EMAIL,
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

router.post('/', (req, res) => {
    console.log(req.body);
    const { errors, isValid } = validateArticleInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    app.mailer.send('contact', {
        to: process.env.EMAIL,
        subject: 'New Contact Message from ' + req.body.name,
        title: req.body.subject,
        content: req.body.content,
        sender: req.body.name,
        email: req.body.email,
        contact: req.body.contact
    }, function (err) {
        if (err) {
            console.log(err);
            res.send('There was an error sending the email');
            return;
        }
        res.send('Email sent');
    });
});

module.exports = router;