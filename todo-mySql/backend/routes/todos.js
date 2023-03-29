var express = require('express');
var router = express.Router();

const connection = require('../conn')

/* GET users listing. */
router.get('/', function(req, res, next) {

  connection.connect((err) => {
    if(err) {
      console.log(err)
    }

    connection.query("SELECT * FROM todos WHERE todoDone = 0", (err, data) => {
      if(err) {
        console.log(err)
      }

      console.log('data från query', data)
      res.json(data)

    })
  })
});

router.post('/add', function(req, res, next) {
let newTodo = req.body;

  connection.connect((err) => {
    if(err) {
      console.log('err', err)
    }

    let sql = `INSERT INTO todos (todoName, listId) VALUES ("${newTodo.newTodoName}", "${newTodo.newTodoList}")`;

    connection.query(sql, (err,data) => {
      if(err) {
        console.log('err', err)
      }
      console.log('sparad', data);
      res.json(data);
    })

  })

})

router.post('/done', function(req,res,next) {
  let todoIsDone = req.body.todoId;

  connection.connect((err) => {
    if(err) {
      console.log('err', err)
    }

    let sql = `UPDATE todos SET todoDone = 1 WHERE todoId =` + todoIsDone;
    connection.query(sql, (err, data) => {
      if(err) {
        console.log('err', err)
      }
      console.log('klar', data);
      res.json(data);
    })

  })
})

router.get('/:listId', function(req, res, next) {

  let listId = req.params.listId;

  connection.connect((err) => {
    if(err) {
      console.log(err)
    }

    connection.query("SELECT * FROM todos WHERE todoDone = 0 AND listId = " + listId , (err, data) => {
      if(err) {
        console.log(err)
      }

      console.log('data från query', data)
      res.json(data)

    })
  })
});

module.exports = router;
