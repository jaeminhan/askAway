import * as React from 'react';
import { withStyles } from '@material-ui/core';
// import styles from './styles';
import globalStyles from '../assets/globalStyles';

import CommentsPage from '../components/CommentsPage/CommentsPage';
import TopicsCard from '../components/TopicsCard/TopicsCard';


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
      return <TopicsCard topics={this.state.topics} changeComponent={this.changeComponent.bind(this)} />
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