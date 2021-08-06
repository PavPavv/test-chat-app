import React from 'react';
import { makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { values } from "mobx";

import Message from '../../../ui/Message/Message';

const useStyles = makeStyles(theme => ({
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    padding: '15px 17px',
    background: theme.palette.common.lightGray,
    overflowX: 'hidden',
    overflowY: 'auto',
  },
}));

const ChatBody = ({ store }) => {
  const classes = useStyles();
  const messages = values(store.messages);
  const channelId = store.picked.channelId;
  const roomMessages = messages.filter(message => message.channelId === channelId);

  return (
    <div className={classes.root}>
      {roomMessages.sort((a, b) => b.ts - a.ts).map(message => (
        <Message key={message.id} isOutgoing={message.isOutgoing} message={message.body} time={message.ts} />
      ))}
    </div>
  )
}

export default observer(ChatBody);
