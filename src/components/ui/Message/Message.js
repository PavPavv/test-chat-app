import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '200px',
    marginBottom: '10px',
    border: 0,
    borderRadius: '8px 8px 4px 8px',
    padding: '8px 10px',
    color: 'white',
    background: 'green',
  },
}));

const Message = ({ isOutgoing, message, time }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Typography variant="body1">The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.</Typography>
      <Typography variant="caption">21:10</Typography>
    </div>
  )
}

export default Message;
