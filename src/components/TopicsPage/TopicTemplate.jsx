import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';



function TopicCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <h2>{props.topic_id}</h2>
        <h2>{props.title}</h2>
        <p>Description: {props.content}</p>
        <p>Date started: {props.date_created}</p>
        <p>Started by user: {props.user_id}</p>
      </CardContent>
      <CardActions>
        <button size="small" onClick={() => props.changeComponent(1)}>Learn More</button>
      </CardActions>
    </Card>
  );
}

TopicCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopicCard);