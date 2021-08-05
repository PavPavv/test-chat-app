import React from 'react';
import { makeStyles } from '@material-ui/core';

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

const testMessages = [
  {
    id: 1,
    isOutgoing: true,
    body: 'Hi! How r u?',
    time: new Date('July 17, 2021 18:24:00'),
  },
  {
    id: 2,
    isOutgoing: false,
    body: 'Hi! I\'m fine thanks! And you?',
    time: new Date('July 17, 2021 18:29:00'),
  },
  {
    id: 3,
    isOutgoing: true,
    body: 'I am also ok, thanks!:) I\'d like to invite you to my birthday party this friday evening. Would you like to come?:) We will be eating eastern food and play funny games at home!',
    time: new Date('July 17, 2021 18:35:50'),
  },
  {
    id: 4,
    isOutgoing: false,
    body: 'Cool! Sure I\' come! Thank you from inviting me!',
    time: new Date('July 17, 2021 18:39:23'),
  },
  {
    id: 5,
    isOutgoing: false,
    body: 'What should I bring to the table? Maybe a bottle of red wine?',
    time: new Date('July 17, 2021 18:40:14'),
  },
  {
    id: 6,
    isOutgoing: false,
    body: 'Or smth else?',
    time: new Date('July 17, 2021 18:42:49'),
  },
  {
    id: 7,
    isOutgoing: true,
    body: 'You\'re so cute! I got everything I need, thank you!',
    time: new Date('July 17, 2021 18:45:50'),
  },
  {
    id: 8,
    isOutgoing: false,
    body: 'I got it. I\'ll come with a red wine!:)',
    time: new Date('July 17, 2021 20:03:32'),
  },
  {
    id: 9,
    isOutgoing: false,
    body: 'Ok:)',
    time: new Date('July 17, 2021 20:01:03'),
  },
  {
    id: 10,
    isOutgoing: false,
    body: 'I got it. I\'ll come with a red wine!:)',
    time: new Date('July 17, 2021 20:03:32'),
  },
  {
    id: 11,
    isOutgoing: true,
    body: 'great! See ya soon! Bye!:D',
    time: new Date('July 17, 2021 20:19:05'),
  },
  {
    id: 12,
    isOutgoing: false,
    body: 'Good bye!:)',
    time: new Date('July 17, 2021 21:28:14'),
  },

];

const ChatBody = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {testMessages.map(message => (
        <Message key={message.id} isOutgoing={message.isOutgoing} message={message.body} time={message.time} />
      ))}
    </div>
  )
}

export default ChatBody;
