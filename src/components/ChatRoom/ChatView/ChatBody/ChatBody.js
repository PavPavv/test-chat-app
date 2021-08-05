import React from 'react';
import { makeStyles } from '@material-ui/core';

import Message from '../../../ui/Message/Message';
import { messages } from '../../../../shared/testData';

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

const ChatBody = ({ channelId }) => {
  const classes = useStyles();
  const roomMessages = messages.filter(message => message.channelId === channelId);

  return (
    <div className={classes.root}>
      {roomMessages.sort((a, b) => b.ts - a.ts).map(message => (
        <Message key={message.id} isOutgoing={message.isOutgoing} message={message.body} time={message.ts} />
      ))}
    </div>
  )
}

export default ChatBody;
