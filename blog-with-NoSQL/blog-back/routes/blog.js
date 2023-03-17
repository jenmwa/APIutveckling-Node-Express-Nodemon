var express = require('express');
var router = express.Router();
const BlogModel = require('../models/blog-models');

// const uuidAPIKey = require('uuid-apikey');
// const APIkey = uuidAPIKey.create().apiKey;
// blog.APIkey = generateApiKey();

/* GET blogs. */
router.get('/', async (req, res, next) => {
  const blogs = await BlogModel.find().populate('authors')
  res.status(200).json(blogs);

  // res.send('hello from GET endpoint');
});

//post 1 new blog
router.post('/', async (request, response) => {
  const blog = await BlogModel.create(request.body);
  response.status(201).json(blog)
})

//post MULTIPLE posts at once MOCK
// router.post('/', async (request, response) => {
//   const posts = request.body;

//   for (const post of posts) {
//     const blog = await new BlogModel(post);
//     await blog.save();
//   };

//   response.send('hello from POST endpoint');
// });



/*****************************************************
 ******************  BLOG/POSTS  ******************* 
 ******************************************************/

router.get('/posts', async (req, res, next) => {

  try {
  const blogs = await BlogModel.find().populate();
  let renderBlog = `<div><h2>Welcome to <br>THE BEST BLOG IN THE WORLD!</h2>`;

  for(let i = 0; i < blogs.length; i++) {
    renderBlog += `
    <div>
      <h3>${blogs[i].title}</h3>
      <p>${blogs[i].authors}</p>
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

/*****************************************************
 ******************  BLOG/AUTHORS  ******************* 
 ******************************************************/

// router.get('/authors', async (request, response) => {
//   const authors = await authorModels.find()

//   let renderAuthors = `<div><h2>the BLOGs Writers:</h2>`;

//   for(let i = 0; i < authors.length; i++) {
//     renderAuthors += `
//     <div>
//       <h4>${authors[i].blogAuthor}</h4>
//       blogposts: <p>${authors[i].blogpost}</p>
//     </div>
//     `
//   }
  
//   renderAuthors += `</div>`;
//   response.send(renderAuthors);

//   // response.status(200).json(authors);
// })

// endpoint POST/authors for 1 single added author
// router.post('/authors', async (request, response) => {
//   const authors = await new authorModels(request.body);
//   await authors.save();

//   response.send('hello from /authors endpoint');
// });

// endpoint POST/authors for multiple added authors from postman
// router.post('/authors', async (request, response) => {
// const users = request.body;

//   for (const user of users) {
//     const authors = await new authorModels(user);
//     await authors.save();
//   };

//   response.send('hello from /authors endpoint');
// });




/*****************************************************
 ****************  TESTING testing  ******************* 
 ******************************************************/




router.put('/', async ( request, response, next) => {
  const {_id, title} = request.body;
  const blog = await BlogModel.findById({_id: _id});

  blog.title = title;
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
