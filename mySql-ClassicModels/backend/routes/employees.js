const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
    req.app.locals.con.connect(function(err) {
        if(err) {
            console.log('err', err)
        }

        let sql = `SELECT * FROM employees`;

        req.app.locals.con.query(sql, function(err, result) {
            if(err) {
                console.log('err', err)
            }
            res.send(result)
        })
    })
})

router.get("/:officeCode", function (req, res) {
    const officeEmployees = req.params.officeCode;

    req.app.locals.con.connect(function(err) {
        if(err) {
            console.log(err)
        }
         let sql = `SELECT * FROM employees WHERE officeCode = ${officeEmployees}`;

         req.app.locals.con.query(sql, function(err, result) {
            if(err) {
                console.log(err)
            }
            res.send(result)
         })
    })

})


module.exports = router;