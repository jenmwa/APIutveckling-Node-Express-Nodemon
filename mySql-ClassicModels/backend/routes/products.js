const express = require("express");
const router = express.Router();

//hämta från products
router.get("/", function (req, res, next) {
  req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }

    let sql = `SELECT * FROM products`;

    req.app.locals.con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log("result", result);
      res.send(result);
    });
  });
});

router.get("/:productline", (req, res) => {
  const productCategory = req.params.productline;

  req.app.locals.con.connect((err) => {
          if(err) {
          console.log("err", err);
          }

          let sql = `SELECT * FROM products WHERE productLine = '${productCategory}'`;

    req.app.locals.con.query(sql, function(err, result) {
      if(err) {
        console.log('err', err)
      }
      res.send(result);
    });
  });
});


module.exports = router;