const express = require('express');
const router = express.Router();

let users = [
  {userId: 1, userName: 'Knatte', password: 'hej'},
  {userId: 2, userName: 'Fnatte', password: 'hopp'},
  {userId: 3, userName: 'Tjatte', password: 'hallo'}
  ];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
