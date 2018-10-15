const express = require('express');
const comment = express.Router();
const { getAllComment } = require('../../models/comments');
const sendJSONresp = (req, res) => res.json(res.comments || []);

comment.route('/')
  .get(getAllComment, sendJSONresp)

module.exports = comments;