var express = require('express');
var router = express.Router();

const fs = require('fs');

/* GET users listing. */
router.get('/', function(request, respons, next) {

  fs.readFile('emaillist.json', function(error, data){
    if (error === true) {
        console.log(error)
    }

    const emaillist = JSON.parse(data);

    respons.send(emaillist);
    return;

  })
});

router.post('/add', function(request, respons, next){

  fs.readFile('emaillist.json', function(error, data) {
    if(error) {
      console.log(error)
    }

    const emaillist = JSON.parse(data);

    const newInput = {
      name: request.body.name,
      email: request.body.email,
    };
    emaillist.push(newInput);

    respons.send(emaillist)
    return;
  })
  
});



/*****************************************************
 *****************************************************
 ****************************************************/

router.get('/txt', function(request, respons, next) {

  fs.readFile('emaillist.txt', function(error, data){
    if (error === true) {
        console.log(error)
    }

    const emaillist = JSON.parse(data);

    respons.send(emaillist);
    return;

  })
});



module.exports = router;
