const db = require('../lib/dbConnect');

function getAllComments(req, res, next) {
    db.any(`
      DB SETUP HERE
    `)
    .then((comments) => {
      res.comments = comments;
      next();
    })
    .catch(err => next(err));
}

module.exports = {
  getAllComment,
};
