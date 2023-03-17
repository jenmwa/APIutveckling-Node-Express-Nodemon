
var express = require('express');
var router = express.Router();
const authorModels = require('../models/author-models');


/* GET users listing. */
router.get('/', async (req, res, next) => {
  const author = await authorModels.find();
  res.status(200).json(author)
})

router.post('/', async (request, response, next) => {
  const author = await authorModels.create(request.body);
  response.status(201).json(author)
})

router.put('/', async ( request, response, next) => {
  const {_id, blogAuthor} = request.body;
  const author = await authorModels.findById({_id: _id});

  author.blogAuthor = blogAuthor;
  await author.save();
  response.status(200).json(author);

})



module.exports = router;