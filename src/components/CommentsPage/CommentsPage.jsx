import React from 'react';
import CommentsTemplate from './CommentsTemplate';

const CommentsPage = props => {
  const comments = props.comments.map((comment) => {
    return (
      <CommentsTemplate
        key={comment.id.toString()}
        id={comment.id}
        title={comment.title}
        topic_id={comment.topic_id}
        body={comment.body}
        date_created={comment.date_created}
        user_id={comment.user_id}
      />
    );
  });

  return (
    <div>
      <button onClick={() => props.changeComponent(0, 0)}>Click to return!</button>
      {comments}
    </div>   
  )
  };

export default CommentsPage;