var express = require('express');
var router = express.Router();

const fs = require('fs');



router.get('/email', function (request, respons, next) {
  respons.json(emailList);
});

/* #1 READFILE. */
router.get('/', function(req, res, next) {

  fs.readFile("emails.json", function(err, data) {
    if (err) {
      console.log(err);

      if (err.code == "ENDENT") {
        console.log('filen finns inte')


      }

      res.send("404 - Nått gick fel")

    }

    const emails = JSON.parse(data)

    res.send(emails);
    return;

  });
});


//body anrop till 
/* #2 WRITEFILE. */
router.get('/add', function(req, res, next) {

  fs.readFile("emails.json", function(err, data) {
    if (err) {
      console.log(err);
  
        if (err.code == "ENOENT") {
          console.log('filen finns inte!');

          let emails = [{"username": "jenny", "email": "jenny@mail.se"}]
          
          fs.writeFile("emails.json", JSON.stringify(emails, null, 2) , function(err) {
            if (err){
              console.log(err)
            }
          })

          res.send('fil skapad och ny användare sparad')
          return;
          
        }
        res.send("404 - Nått gick fel")
    }

    const emails = JSON.parse(data)

    let newEmail = {"username": "jenny", "email": "jenny@mail.se"}
//öppnar json-filen, skapat nytt objekt eg skapat genom bodyanrop till en post, sen pushat nya mail till objekt-array som vi kallar emails, och vill nu spara nya mail till json-filen, så vi använder writefile
    emails.push(newEmail);

    fs.writeFile("emails.json", JSON.stringify(emails, null, 2) , function(err) {

      if (err){
        console.log(err)
      }
    })


    res.send(emails);
    return;

  });
});


module.exports = router;
