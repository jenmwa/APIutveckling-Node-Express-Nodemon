var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h2>Welcome to the users page. Wohooa!</h2>');
});

module.exports = router;
