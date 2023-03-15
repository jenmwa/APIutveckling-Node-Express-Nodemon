var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello from GET endpoint');
});

router.post('/', function( request, response, next){
  res.send('hello from POST endpoint');
})

router.put('/', function( request, response, next){
  res.send('hello from PUT endpoint');
})

router.delete('/:id', function( request, response, next){
  res.send('hello from delete endpoint');
})

router.post('/add', function(request, response, next){
  

})

module.exports = router;
