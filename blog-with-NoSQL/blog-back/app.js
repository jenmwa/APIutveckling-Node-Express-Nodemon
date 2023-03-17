var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const PORT = 3001;

var indexRouter = require('./routes/index');
var authorsRouter = require('./routes/authors');
const blogRouter = require('./routes/blog');

var app = express();

// const mongoose = require('mongoose');

// async function init() {
//     try {
//         const options = {useUnifiedTopology: true};
//         await mongoose.connect('mongodb://localhost:27017', options);
//         console.log('We´re connected to the database!');
//     }
//     catch (error) {
//         console.error(error);
//     } 
//     app.listen(PORT, () => console.log(`server is up and running on port: ${PORT}`));

// }

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose', {
   useUnifiedTopology: true
})
.then (() => {
  console.log('We´re connected to the database!');

})
.catch(err => console.log('err',err));

// const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017', {
//     useUnifiedTopology: true
// })
// .then(client => {
//     console.log('We´re connected to the database!');

//     const db = client.db('blogPosts');
//     app.locals.db = db;
// })
// .catch(err => console.log('err',err));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/authors', authorsRouter);
app.use('/blog', blogRouter);

// init();
module.exports = app;
