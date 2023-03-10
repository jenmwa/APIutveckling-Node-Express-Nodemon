var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const carsRouter = require('./routes/cars')

var app = express();

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', {
    useUnifiedTopology: true
})
.then(client => {
    console.log('We´re connected to the database!');

    const db = client.db('usersBook');
    app.locals.db = db;
})



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cars', carsRouter);

module.exports = app;
