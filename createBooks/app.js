var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addbooksRouter = require('./routes/addbooks');
var booksRouter = require('./routes/books');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/addbooks', addbooksRouter)
app.use('/books', booksRouter);

// app.get('/add', function(req, res) {
//     let printForm = `<h2>add a book</h2>
//     <p><em>How rare is it to find a book as beautiful as you</em> ☺️<br><br>
//     Want to add a book to our library?<br>
//     Please fill out the information below and add your book to the collection</p>
//                     <form action="addBook" method="post">add a book:<br>
//                         <label> Title:
//                             <input type="text" name="bookTitle">
//                         </label>
//                         <label> Author:
//                             <input type="text" name="bookAuthor">
//                         </label>
//                         <label> pages:
//                             <input type="number">
//                         </label>
//                         <button>Add</button>
//                     </form>`;

//     res.send(printForm)
// });

// app.post('/addBook', function(req, res) {
//     res.send('Thank you for adding ' + req.body.bookTitle + ' by ' + req.body.bookAuthor + ' to our library. <button>BACK TO START</button>')
// })

module.exports = app;
