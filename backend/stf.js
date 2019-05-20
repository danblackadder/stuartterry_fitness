// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const path = require('path'); 

const users = require('./routes/user'); 
const articles = require('./routes/article');
const images = require('./routes/image');
const contact = require('./routes/contact');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ parameterLimit: '50000', limit: '500mb', extended: false }));
app.use(bodyParser.json({ parameterLimit: '50000', limit: '500mb' }));

app.use('/api/users', users);
app.use('/api/articles', articles);
app.use('/api/images', images);
app.use('/api/contact', contact);
app.use('/uploads', express.static(path.join(__dirname, './uploads')))

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
