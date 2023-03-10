const express = require('express');
const router = express.Router();

//object id ist för hårdkodade id

let users = [
  {userId: 1, userName: 'Knatte', password: 'hej'},
  {userId: 2, userName: 'Fnatte', password: 'hopp'},
  {userId: 3, userName: 'Tjatte', password: 'hallo'},
  {userId: 4, userName: 'Kalle', password: 'hi'}
  ];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});



router.post('/', function(req, res, next) {
  let newUser = req.body;
  newUser.userId = users.length + 1;
  users.push(newUser);

  console.log(newUser)

  res.json(users);
});

/* GET users inlog. */
router.post('/login', function(req, res, next) {
  const { userName, password } = req.body;
  //hitta en användare
  const foundUser = users.find(user => user.userName === userName);

  if (password === foundUser.password) {
    res.status(201).json({ userName: foundUser.userName, id: foundUser.id });
  } else {
    res.status(401).json('incorrect login');
  }
});

module.exports = router;
