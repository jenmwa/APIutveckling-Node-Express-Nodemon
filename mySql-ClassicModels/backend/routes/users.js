var express = require('express');
var router = express.Router();
// const app= require('../app');
// const mysql = require('mysql2');

/* lägga till users listing. */
// router.get('/', function(req, res, next) {

//   req.app.locals.con.connect(
//     function(err) {
//     if(err){
//       console.log(err);
//     }

//     let saveName = "Jenny";
//     let saveEmail = "jenny@mail.com";

//     //fiörts vilka kolumner, databasen users, därefter värden vi vill spara.
//     let sql = `INSERT INTO users (userName, userEmail) VALUES ("${saveName}", "${saveEmail}")`

//     req.app.locals.con.query(sql, function(err, result) {
//       if(err) {
//         console.log(err);
//       }
//       console.log('result', result);
//     })
// })


//   res.send('respond with a resource');
// });
//hämta från users
router.get('/', function(req, res, next) {

  req.app.locals.con.connect(
    function(err) {
    if(err){
      console.log(err);
    }

    let saveName = "Jenny";
    let saveEmail = "jenny@mail.com";

    // let sql = `SELECT * FROM users`
    let sql = `SELECT userName, userEmail FROM users`

    req.app.locals.con.query(sql, function(err, result) {
      if(err) {
        console.log(err);
      }
      console.log('result', result);
      res.send(result);
    })
})



});

module.exports = router;
