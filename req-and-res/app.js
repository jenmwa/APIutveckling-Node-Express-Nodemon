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

//part II

app.get('/form', function(req,res) {
  let printForm = `
    <h1>Hej,</h1>
    <form action="saveUser" method="post">Vad heter du?<br>
    <input type="text" name="userName">
    <button>Skicka</button></form>
  `;

  res.send(printForm);
});

app.post('/saveUser', function(req, res) {
  res.send('hej på dig och Välkommen hit ' + req.body.userName + '!')
})

app.get('/json', function(req, res) {
  let users = [
    {userName: 'Jenny', email: 'jenny@mail.se'},
    {userName: 'Margaretha', email: 'maggan@mail.se'},
  ];
  res.json(users);
});

console.log(__dirname)

app.get('/test', function( req , res) {
  res.sendFile('public/test.html', {root: __dirname});
});



module.exports = app;
