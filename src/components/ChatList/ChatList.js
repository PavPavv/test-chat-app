import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ChatName from './ChatName/ChatName';
import ChatItem from './ChatItem/ChatItem';

const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
      borderRight: `1px solid ${theme.palette.common.gray}`,
    },
    listWrap: {
      boxSizing: 'border-box',
      padding: '8px',
      height: 'calc(100vh - 55px)',
      overflowX: 'hidden',
      overflowY: 'auto',
    },
}));

const ChatList = () => {
  const classes = useStyles();

  return (
    <aside className={classes.root}>
      <ChatName name="Artyr Kh" />
      
      <div className={classes.listWrap}>
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </aside>
  )
}

export default ChatList;
