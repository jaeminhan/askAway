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

// function addComment(req, res, next) {
//   db.none(`INSERT INTO comments (body)
//            VALUES ($1);`, [req.body.body])
//   .then(next())
//   .catch(err => next(err));
// }

module.exports = {
  getAllComments,
  // addComment
};


// WHERE topics.id = $1;