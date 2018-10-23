import * as React from 'react';
import { withStyles } from '@material-ui/core';
// import styles from './styles';
import globalStyles from '../assets/globalStyles';

import CommentsPage from '../components/CommentsPage/CommentsPage';
import TopicsCard from '../components/TopicsPage/TopicsCard';

const styles = {
  root: {
    fontFamily: globalStyles.fontFamily.roboto,
    color: 'black',
    fontSize: 16,
    width: '100%',
    margin: '100px 0',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
};

class LandingContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPage: 0,
      currentTopic: 0,
      topics: [],
      comments: [],
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

  getComments(id) {
    console.log('getcomments id: ', id);
    fetch(`/api/comments/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
    .then((res) => res.json())
    .then((comments) => {
      console.log(comments);
      this.setState({
        comments: comments,
      });
    })
    .catch(err => console.log('getComments', err));
  }

  changeComponent(x, y) {
    this.getComments(y);
  
    this.setState({
      currentPage: x,
      currentTopic: y,
    });
  }

  renderComponent(component) {
    if (component === 0) {
      return <TopicsCard topics={this.state.topics} changeComponent={(x, y) => this.changeComponent(x, y)} />;
    } else if (component === 1) {
      return <CommentsPage comments={this.state.comments} changeComponent={(x, y) => this.changeComponent(x, y)} />;
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