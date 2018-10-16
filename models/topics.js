const db = require('../lib/dbConnect.js');

function getAllTopics(req, res, next) {
  db.any('SELECT * FROM topics;')
    .then((topics) => {
      res.topics = topics;
      console.log(res.topics);
      next();
    });
}

module.exports = {
  getAllTopics,
};
