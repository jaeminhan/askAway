import React from 'react';
import TopicTemplate from './TopicTemplate';

const TopicsCard = props => {

  const topics = props.topics.map((topic) => {
    return (
      <TopicTemplate
        key={topic.id.toString()}
        title={topic.title}
        changeComponent={props.changeComponent}
        content={topic.content}
        date_created={topic.date_created}
        user_id={topic.user_id}
      />
      );
    });
    
    return (
      <React.Fragment>
        {topics}
      </React.Fragment>
    );
}

export default TopicsCard;