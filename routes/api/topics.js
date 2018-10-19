const express = require('express');
const topicsRoute = express.Router();
const { getAllTopics } = require('../../models/topics');
const sendJSONresp = (req, res) => res.json(res.topics || []);

topicsRoute.route('/')
  .get(getAllTopics, sendJSONresp)

module.exports = topicsRoute;