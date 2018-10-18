import * as React from 'react';
import { withStyles } from '@material-ui/core';
import globalStyles from '../assets/globalStyles';

import CommentsPage from '../components/CommentsPage/CommentsPage';
import TopicsPage from '../components/TopicsPage/TopicsPage';


const styles = {
  root: {
    fontFamily: globalStyles.fontFamily.roboto,
    color: 'black',
    fontSize: 16,
    width: '100%',
    margin: '100px 0',
  },
};

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
    .then((res) => res.json())
    .then((topics) => {
      this.setState({
        topics: topics,
      });
    })
    .catch(err => console.log('getAllTopics', err));
  }

  changeComponent(x) {
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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.renderComponent(this.state.currentPage)}
      </div>
    )
  }
}

export default withStyles(styles)(LandingContainer);
// export default LandingContainer;