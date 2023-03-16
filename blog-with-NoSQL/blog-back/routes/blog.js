var express = require('express');
var router = express.Router();
const BlogModel = require('../models/blog-models');
// const uuidAPIKey = require('uuid-apikey');

/* GET blogs. */
router.get('/', async (req, res, next) => {
  const blogs = await BlogModel.find()
  res.status(200).json(blogs);

  // res.send('hello from GET endpoint');
});

router.get('/posts', async (req, res, next) => {

  try {
  const blogs = await BlogModel.find().sort();
  let renderBlog = `<div><h2>Welcome to <br>THE BEST BLOG IN THE WORLD!</h2>`;

  for(let i = 0; i < blogs.length; i++) {
    renderBlog += `
    <div>
      <h3>${blogs[i].title}</h3>
      <p><em>${blogs[i].date}</em></p>
      <p><strong>${blogs[i].subHead}</strong></p>
      <p>${blogs[i].text}</p>
    `
  }
  
  renderBlog += `</div>`;
  res.send(renderBlog);

} catch (err) {
  console.error(err);
  res.status(500).send('Internal Server Error');
}
});




//post 1 new blog
// router.post('/', async (request, response) => {
//   const blog = await new BlogModel(request.body);

//   // const APIkey = uuidAPIKey.create().apiKey;
//   // blog.APIkey = generateApiKey();
//   //const blog = BlogModel.create(request.body);
//   await blog.save();
//   // response.status(201).json(blog)
//   response.send('hello from POST endpoint');
// })

//post MULTIPLE posts at once MOCK
router.post('/', async (request, response) => {
  const posts = request.body;

  for (const post of posts) {
    const blog = await new BlogModel(post);
    await blog.save();
  };

  response.send('hello from POST endpoint');
});

router.put('/', async ( request, response, next) => {
  const {_id, author} = request.body;
  const blog = await BlogModel.findById({_id: _id});

  blog.author = author;
  await blog.save();
  response.status(200).json(blog);

  // BlogModel.findById(_id).exec()
  //   .then(blog => {
  //     blog.author = author;
  //     return blog.save();
  //   })
  //   .then(blog => {
  //     response.status(200).json(blog);
  //   })
  //   .catch(error => {
  //     next(error);
  //   });

})

router.delete('/:id', function( request, response, next){
  BlogModel.findByIdAndDelete({_id: request.params.id})
  response.status(200).json("blog successfully deleted")
  

})



module.exports = router;
