'use strict';
require('dotenv').config({ silent: true });
// import dotenv from 'dotenv'
// dotenv.config()
// import express from 'express';
// import logger from 'morgan';
// import path from 'path';
// import bodyParser from 'body-parser';
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const comments = require('./routes/api/comments');
// const topics = require('./routes/topics');
// const users = require('./routes/users');

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

app.use('/api/comments', comments);
// app.use('/api/topics', topics);
// app.use('/api/users', users);

app.listen(PORT, () => console.log('server listening on', PORT));
