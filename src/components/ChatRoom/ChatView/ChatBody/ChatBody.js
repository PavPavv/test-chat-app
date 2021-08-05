import React from 'react';
import { makeStyles } from '@material-ui/core';

import Message from '../../../ui/Message/Message';

const useStyles = makeStyles(theme => ({
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    padding: '15px 17px',
    background: theme.palette.common.lightGray,
    overflowX: 'hidden',
    overflowY: 'auto',
  },
}))

const ChatBody = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default ChatBody;
