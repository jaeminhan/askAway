import React from 'react';
import TopicCard from './TopicsCard';

const TopicsPage = props => {

  const topics = props.topics.map((topic) => {
    return (
      <TopicCard
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
      <div id="topics-container">
        {topics}
      </div>
    );
}

export default TopicsPage;