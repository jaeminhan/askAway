const db = require('../lib/dbConnect.js');

function getAllComments(req, res, next) {
  db.any(`SELECT *
          FROM topics
          LEFT JOIN comments
          ON topics.id = comments.topic_id
          WHERE topics.id = comments.topic_id;
          `, [req.params.id])
  .then((comments) => {
    res.comments = comments;
    next();
  })
  .catch(err => next(err));
}

module.exports = {
  getAllComments,
};


// WHERE topics.id = $1;