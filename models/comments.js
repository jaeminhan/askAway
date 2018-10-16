const db = require('../lib/dbConnect');

function getAllComments(req, res, next) {
    db.any(`
      SELECT * FROM comments 
      INNER JOIN topics
      ON comments.topic_id = topic.id
      WHERE topic.id =;
    `)
    .then((comments) => {
      res.comments = comments;
      next();
    })
    .catch(err => next(err));
}

module.exports = {
  getAllComments,
};
