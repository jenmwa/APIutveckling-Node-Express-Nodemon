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

router.post('/new', function(request, respons, next){

});



router.get('/add', function(req, respons, next) {
    respons.send('Welcome to the email/add');
})

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
