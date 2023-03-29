const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors');
require('dotenv').config();


const listsRouter = require('./routes/lists');
const todosRouter = require('./routes/todos');

const connection = require('./conn')

const app = express();



app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/lists', listsRouter);
app.use('/todos', todosRouter);

module.exports = app;
