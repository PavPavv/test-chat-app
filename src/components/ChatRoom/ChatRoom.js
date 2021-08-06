import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';

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


const ChatRoom = ({ store }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ChatView store={store} />
    </div>
  )
}

export default observer(ChatRoom);
