import React from 'react';
import { makeStyles } from '@material-ui/core';

import ChatViewName from './ChatViewName/ChatViewName';
import ChatBody from './ChatBody/ChatBody';
import SendPanel from '../../ui/SendPanel/SendPanel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '750px',
    height: 'calc(100vh - 32px)',
    margin: '0 auto',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.common.gray}`,
  },
}));

const ChatView = () => {
  const classes = useStyles();
  
  return (
    <main className={classes.root}>
      <ChatViewName name="Serdar Azmun" />
      <ChatBody />
      <SendPanel />
    </main>
  )
}

export default ChatView;
