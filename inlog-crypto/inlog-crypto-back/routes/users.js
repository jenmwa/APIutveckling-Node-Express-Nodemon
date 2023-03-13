var express = require('express');
var router = express.Router();

const fs = require('fs');
const crypto = require("crypto-js");

const salt = 'see you back in the real world';


/* GET users listing. */
router.get('/', function(req, res, next) {

  fs.readFile('users.json', function(error, data) {
    if(error === true) {
      console.log(error)
    }

    const userList = JSON.parse(data); 
    res.send(userList);
    return;
  })
});

/* READ user list jsonFile. */
router.get('/add', function(request, response, next) {
  fs.readFile('users.json', function(error, data) {
    if(error){
      console.log(error)
    }
    const userList = JSON.parse(data);
    response.send(userList);
  })
});

//add new user
router.post('/add', function(request, response, next) {
  let newUser = {
    'userName': request.body.userName,
    // 'userPassword': request.body.userPassword,
  };

  fs.readFile('users.json', function(error, data) {
    if(error) {
      console.log(error)
    }

    const userList = JSON.parse(data);
    newUser.id = userList.length + 1;

    let userPasswordCrypto = crypto.AES.encrypt(request.body.userPassword, salt).toString();
    newUser.userPassword = userPasswordCrypto;


    userList.push(newUser);

    fs.writeFile('users.json', JSON.stringify(userList, null, 2), function(error) {
      if(error) {
        console.log('Something went wrong!')
      }
    })
    response.send(userList);
    return;

  })
})


module.exports = router;
