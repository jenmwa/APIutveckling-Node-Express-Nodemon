var express = require('express');
var router = express.Router();

const connection = require('../conn')

/* GET home page. */
router.get('/', function(req, res, next) {
 
  connection.connect((err) => {
    if(err) {
      console.log('err', err)
    }



    connection.query("SELECT * FROM lists" , (err, data) => {
      if(err) {
        console.log('err', err)
      }
      console.log('data från query', data);
      res.send(data)
    })
  })
});

module.exports = router;