'use strict';
require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const commentsRoute = require('./routes/api/comments');
const topicsRoute = require('./routes/api/topics');
// const usersRoute = require('./routes/api/users');

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

app.use('/api/comments', commentsRoute);
app.use('/api/topics', topicsRoute);
// app.use('/api/users', usersRoute);

app.listen(PORT, () => console.log('server listening on', PORT)); 
