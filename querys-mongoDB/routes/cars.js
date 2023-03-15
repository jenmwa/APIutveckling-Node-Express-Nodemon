var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    req.app.locals.db.collection('cars').find().sort({'modelYear': -1}).toArray()

    .then(results => {
        console.log(results);

        let printCars = `<div><h2>Våra Bilar</h2>`;

        for( car in results) {
            printCars += `<div>` + results[car].carVin + ` | ` + results[car].carMake + ` | ` + results[car].carModel + ` | ` + results[car].modelYear + ` | ` + results[car].color + `</div>`;
        }

        printCars += `</div>`;
        res.send(printCars);
    })
    //
    req.app.locals.db.collection('cars').updateMany({'carMake': 'Ford'}, {$set: {'carMake': 'Fjord'}})
    .then(results => {
        console.log(results)
    })

});

router.post('/add', function(req, res, next) {
    req.app.locals.db.collection('cars').insertMany(req.body)
    .then(res => {
        res.redirect('/show');
    })
});

router.get('/show', function(req, res) {
    res.send('welcome to the cars/show!')
});

module.exports = router;
