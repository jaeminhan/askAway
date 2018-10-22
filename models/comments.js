const db = require('../lib/dbConnect.js');

function getAllComments(req, res, next) {
  db.any(`SELECT *
          FROM topics
          LEFT JOIN comments
          ON topics.id = comments.topic_id
          WHERE topics.id = $1;
          `, [req.params.id])
  .then((comments) => {
    res.comments = comments;
    next();
  })
  .catch(err => next(err));
}

function addComment(req, res, next) {
  db.none(`INSERT INTO comments (body, topic_id, user_id)
           VALUES ($/body/, $/topic_id/, $/user_id/);`, req.body)
  .then(next())
  .catch(err => next(err));
}

function editComment(req, res, next) {
  db.none(`UPDATE comments
           SET body = body
           WHERE id = $1;`, [req.body.id])
  .then(next())
  .catch(err => next(err));
}

function deleteComment(req, res, next) {
  db.result(`DELETE FROM comments
             WHERE id = $1;`, req.params.id)
  .then(next())
  .catch(err => next(err));
}

module.exports = {
  getAllComments,
  addComment,
  editComment,
  deleteComment,
};


// WHERE topics.id = $1;