var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome to the inputform to the maillist<br><br><label>please fill in you emailadress:<input type="text"></label><button id="sendBtn">SEND EMAIL</button>');

    let sendBtn = document.getElementById('sendBtn');
    sendBtn.addEventListener('click', () => {
        console.log('click')
    })

});



module.exports = router;
