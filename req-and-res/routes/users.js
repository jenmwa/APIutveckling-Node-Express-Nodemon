var express = require("express");
var router = express.Router();
const cors = require("cors");

router.use(cors());

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("<h1>users root</h1>");
});

router.get("/newUser", function (req, res) {
  res.send("<h2>new user routern</h2>");
});

router.post("/newUser", function (req, res) {
  console.log(req.body);
  let answer;
  if (req.body.firstName == "Kalle") {
    answer = { result: "ok" };
  } else {
    answer = { result: "error" };
  }

  res.json(answer);
});

module.exports = router;
