import React, { useState } from 'react';
import { makeStyles, Icon } from '@material-ui/core';
import SendRounded from '@material-ui/icons/SendRounded';

import { messages } from '../../../shared/testData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '44px',
    borderTop: `1px solid ${theme.palette.common.gray}`,
  },
  input: {
    width: '100%',
    padding: '0 14px',
    border: 0,
    outline: 'none',
  },
  sendBtn: {
    margin: '0 14px',
    cursor: 'pointer',
  },
}));

const SendPanel = ({ channelId }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  
  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  const handleClick = () => {
    messages.push({
      id: Date.now(),
      roomId: 'you',
      channelId,
      body: value,
      isOutgoing: true,
      ts: new Date,
    });
    console.log('messages', messages);
  }



  return (
    <div className={classes.root}>
      <input 
        type="text"
        placeholder="Введите текст"
        className={classes.input}
        value={value}
        onChange={handleChange}
      />
      <SendRounded color="primary" fontSize="medium" className={classes.sendBtn} onClick={handleClick} />
    </div>
  )
}

export default SendPanel;
