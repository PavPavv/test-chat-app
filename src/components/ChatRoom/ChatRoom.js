import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ChatView from './ChatView/ChatView';

const useStyles = makeStyles(theme => ({
  root: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100vh',
    padding: '16px 0',
    background: theme.palette.common.white,
  },
}));


const ChatRoom = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ChatView />
    </div>
  )
}

export default ChatRoom;
