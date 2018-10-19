import React from 'react';

const CommentsTemplate = props => {
  return (
    <React.Fragment>
      <p>Comment: {props.body}</p>
      <p>Created On: {props.date_created}</p>
      <p>Submitted by: {props.user_id}</p>
    </React.Fragment>
  )
};

export default CommentsTemplate;