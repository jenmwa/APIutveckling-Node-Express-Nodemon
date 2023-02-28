var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.get('/books/:bookId', function (req, res) {
  let showBook = req.params.bookId;
  res.send('Hej till Books-routern! Visa info om bok ' + showBook)
});

app.get('/buss/:from/:to', function(req, res) {
  res.send('Visar bussresor från ' + req.params.from + ' till ' + req.params.to + '.');
})

module.exports = app;
