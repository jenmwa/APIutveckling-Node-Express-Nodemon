var express = require('express');
var router = express.Router();

const fs = require('fs');
const crypto = require("crypto-js");


/* GET users listing. */
router.get('/', function(req, res, next) {

  fs.readFile('users.json', function(error, data) {
    if(error === true) {
      console.log(error)
    }

    const userList = JSON.parse(data); 
    res.send(userList);

  })

});

/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.send('respond with a resource!!!!!!!');
});


module.exports = router;
