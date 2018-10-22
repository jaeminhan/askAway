const express = require('express');
const commentsRoute = express.Router();
const { getAllComments, addComment, editComment, deleteComment } = require('../../models/comments');
const sendJSONresp = (req, res) => res.json(res.comments || []);

commentsRoute.route('/')
  .post(addComment, sendJSONresp);

commentsRoute.route('/:id')
  .get(getAllComments, sendJSONresp)
  .put(editComment, sendJSONresp)
  .delete(deleteComment, sendJSONresp);

module.exports = commentsRoute;