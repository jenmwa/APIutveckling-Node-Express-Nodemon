var express = require('express');
var router = express.Router();

const fs = require('fs');
const crypto = require("crypto-js");
const { ObjectId } = require('mongodb');

// const salt = 'see you back in the real world';

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.app.locals.db.collection('users').find().toArray()
    .then(result => {
      console.log('result from get', result);
      res.json(result);
    })

  // fs.readFile('users.json', function(error, data) {
  //   if(error === true) {
  //     console.log(error)
  //   }

  //   const userList = JSON.parse(data); 
  //   res.send(userList);
  //   return;
  // })
});



/* READ user list . */
router.get('/add', function(request, response, next) {
  request.app.locals.db.collection('users').find().toArray()
    .then(result => {
      console.log('result from GET users/add', result);
      response.json(result);
    })

  // fs.readFile('users.json', function(error, data) {
  //   if(error){
  //     console.log(error)
  //   }
  //   const userList = JSON.parse(data);
  //   response.send(userList);
  // })
});

//add new user
router.post('/add', function(request, response, next) {
  let newUser = {
    'userName': request.body.userName,
    'userEmail': request.body.userEmail,
    // 'userPassword': request.body.userPassword,
  };
  let userPasswordCrypto = crypto.SHA3(request.body.userPassword).toString();
  // let userPasswordCrypto = crypto.AES.encrypt(request.body.userPassword, salt).toString();
  newUser.userPassword = userPasswordCrypto;

  console.log('new user', newUser)

  request.app.locals.db.collection('users').insertOne(newUser)
    .then(result => {
      console.log('result from db', result);
      response.json(result);
    })

// ADD IN CASE OF ERRORMSG 

  // fs.readFile('users.json', function(error, data) {
  //   if(error) {
  //     console.log(error)
  //   }
  
  //   const userList = JSON.parse(data);
  //   // newUser.id = userList.length + 1;

   


  //   userList.push(newUser);

  //   fs.writeFile('users.json', JSON.stringify(userList, null, 2), function(error) {
  //     if(error) {
  //       console.log('Something went wrong!')
  //     }
  //   })
  //   response.send(userList);
  //   return;

  // })
})


router.post('/login', function(request,response, next) {
  const { userName, userPassword} = request.body;

  console.log("username and password", userName, userPassword)
  request.app.locals.db.collection('users').findOne({"userName": userName})
  .then(result => {
    if (!result) {
      response.status(404).json({ error: 'User not found' });
      return;
    }
    console.log("find user", result.userPassword);

    if(crypto.SHA3(userPassword).toString() === result.userPassword) {
      console.log('inlog OK');
      response.status(201).json({userName: result.userName, id: result._id})
    } else {
      console.log("login failed");
      response.status(401).json({ error: 'Invalid password' });
    }
    })
    .catch(error => {
      console.log("error", error);
      response.status(500).json({ error: 'Internal server error' });
    });


  // const foundUser = request.app.locals.db.collection('users').find({userName: userName})

  // if(crypto.SHA3(userPassword).toString() === foundUser.userPassword) {
  //   response.status(201).json({userName: foundUser.userName, id: foundUser._id})
  // } else {
  //   console.log("login failed");
  // }
  // return;
  // fs.readFile('users.json', function(error, data) {
  //   if(error){
  //     console.log(error);
  //   }

  //   let userList = JSON.parse(data);

  //   const foundUser = userList.find(user => user.userName === userName);

  //   // if(userPassword === foundUser.userPassword) {
  //     //if(userPassword === crypto.AES.decrypt(foundUser.userPassword, salt).toString(crypto.enc.Utf8)) {
  //     if(crypto.SHA3(userPassword).toString() === foundUser.userPassword) {
  //       response.status(201).json({ userName: foundUser.userName, id: foundUser.id})
  //     }
  //     else {
  //       response.status(401).json("Incorrect password or username");
  //     };


  //   return;
  //   })
    
 
 
})

router.get('/:userId', function(request, response, next) {
  userId = request.params.userId;
  console.log(userId);

  request.app.locals.db.collection('users').findOne({"_id": new ObjectId(userId)})
    .then(result => {
      console.log("hitta user", result);
      response.json(result)
    })

  // let findUser = users.find(user => user.Id == userId)
  // res.json(findUser)
})


module.exports = router;
