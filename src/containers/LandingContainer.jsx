import * as React from 'react';
import CommentsPage from '../components/CommentsPage/CommentsPage';

class LandingContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPage: 0,
      topics: [],
      currentTopic: 0,
    }
  }

  componentDidMount() {
    fetch('/api/topics')
    .then(r = r.json())
    .then((topics) => {
      this.setState({
        topics: topics,
      });
    })
    .catch(err => console.log('getAllTopics', err));
  }

  changeComponent() {
    this.setState({
      currentPage: x,
    });
  }

  renderComponent(component) {
    if (component === 0) {
      return <TopicsPage topics={this.state.topics} changeComponent={this.changeComponent.bind(this)} />
    } else {
      return <CommentsPage changeComponent={this.changeComponent.bind(this)} />
    }
  }
  
  render() {
    return (
      <React.Fragment>
        {this.renderComponent(this.state.currentPage)}
      </React.Fragment>
    )
  }
}

export default LandingContainer;