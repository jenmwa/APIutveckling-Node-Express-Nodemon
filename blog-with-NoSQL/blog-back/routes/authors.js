var express = require('express');
var router = express.Router();
const authorModels = require('../models/author-models');


/* GET users listing. */
router.get('/', async (req, res, next) => {
  const authors = await authorModels.find().populate('blogposts');
  res.status(200).json(authors)
})

router.post('/', async (request, response, next) => {
  const author = await authorModels.create(request.body);
  response.status(201).json(author)
})

module.exports = router;
