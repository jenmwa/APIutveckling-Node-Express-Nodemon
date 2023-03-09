var express = require("express");
var router = express.Router();

const fs = require("fs");

/* GET users listing. */
router.get("/", function (req, res, next) {
  fs.readFile("recipes.json", function (error, data) {
    if (error === true) {
      console.log(error);
    }

    const recipes = JSON.parse(data);

    res.send(recipes);
  });
});

router.post('/add', function(request, response, next) {
  console.log(request.body);
  
  fs.readFile('recipes.json', function(error, data) {
    if (error === true) {
      console.log(error);

      if(error.code === 'ENOENT') {
        console.log('the file doesn´t exist');

        let newRecipe = {
          recipeName: request.body.recipeName,
          description: request.body.description,
          ingredients: request.body.ingredients,
          prepTime: request.body.prepTime
        };

        fs.writeFile('recipes.json', JSON.stringify(newRecipe, null, 2), function(err) {
          if (err) {
            console.log(err)
          }
        })

        response.send('file created and new userinput is added');
        return;
      }

      response.send('Something went wrong')
    }
      let recipes = JSON.parse(data);

      let newRecipe = {
        recipeName: request.body.recipeName,
        description: request.body.description,
        ingredients: request.body.ingredients,
        prepTime: request.body.prepTime
      }

      recipes.push(newRecipe);

      fs.writeFile('recipes.json', JSON.stringify(recipes, null, 2), function (err){
        if(err){
          console.log(err)
        }
      })

      response.send('it´s working');
      return;
  })

})

router.get('/add', function(request, response, next) {
  fs.readFile('recipes.json', function(error, data){
    if (error === true) {
        console.log(error)
    }

    const recipes = JSON.parse(data);

    response.send(recipes);
    return;

  });
});

module.exports = router;

