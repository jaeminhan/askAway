const express = require('express');
const commentsRoute = express.Router();
const { getAllComments } = require('../../models/comments');
const sendJSONresp = (req, res) => res.json(res.comments || []);

// commentsRoute.route('/')
//   .post(addComment, sendJSONresp);

commentsRoute.route('/:id')
  .get(getAllComments, sendJSONresp);

module.exports = commentsRoute;