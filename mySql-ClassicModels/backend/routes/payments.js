const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
    req.app.locals.con.connect(function (err) {
      if (err) {
        console.log("err", err);
      }
  
      let sql = `SELECT * FROM payments`;
  
      req.app.locals.con.query(sql, function (err, result) {
        if (err) {
          console.log("err", err);
        }
        res.send(result);
      });
    });
  });


module.exports = router;