const express = require('express');
const topics = express.Router();
const { getAllTopics } = require('../../models/topics');
const sendJSONresp = (req, res) => res.json(res.topics || []);

topics.route('/')
  .get(getAllTopics, sendJSONresp)

module.exports = topics;