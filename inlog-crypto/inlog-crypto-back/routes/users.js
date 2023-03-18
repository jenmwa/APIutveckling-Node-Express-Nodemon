var express = require('express');
var router = express.Router();

const fs = require('fs');
const crypto = require("crypto-js");

// const salt = 'see you back in the real world';

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


  fs.readFile('users.json', function(error, data) {
    if(error) {
      console.log(error)
    }
    let newUser = {
      'userName': request.body.userName,
      'userEmail': request.body.userEmail,
      // 'userPassword': request.body.userPassword,
    };
    const userList = JSON.parse(data);
    newUser.id = userList.length + 1;

    let userPasswordCrypto = crypto.SHA3(request.body.userPassword).toString();
    // let userPasswordCrypto = crypto.AES.encrypt(request.body.userPassword, salt).toString();
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


router.post('/login', function(request,response, next) {
  const { userName, userPassword} = request.body;

  fs.readFile('users.json', function(error, data) {
    if(error){
      console.log(error);
    }

    let userList = JSON.parse(data);

    const foundUser = userList.find(user => user.userName === userName);

    // if(userPassword === foundUser.userPassword) {
      //if(userPassword === crypto.AES.decrypt(foundUser.userPassword, salt).toString(crypto.enc.Utf8)) {
      if(crypto.SHA3(userPassword).toString() === foundUser.userPassword) {
        response.status(201).json({ userName: foundUser.userName, id: foundUser.id})
      }
      else {
        response.status(401).json("Incorrect password or username");
      };


    return;
    })
    
 
 
})


module.exports = router;
