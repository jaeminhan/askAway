const express = require('express');
const comments = express.Router();
const { getAllComments } = require('../../models/comments');
const sendJSONresp = (req, res) => res.json(res.comments || []);

comments.route('/')
  .get(getAllComments, sendJSONresp)

module.exports = comments;