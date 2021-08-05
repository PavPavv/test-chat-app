import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    background: theme.palette.common.lightGray,
  },
}))

const ChatBody = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Chat body
    </div>
  )
}

export default ChatBody;
