const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log('servern är igång på localhost:3000');
});

app.get('/', function(req, res){
    res.send('<h1>Hello WISCONSIN from express</h1><p> hej hallå hola hola</p>')
   });