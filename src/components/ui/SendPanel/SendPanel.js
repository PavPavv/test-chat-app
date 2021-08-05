import React from 'react';
import { makeStyles, Icon } from '@material-ui/core';
import SendRounded from '@material-ui/icons/SendRounded';

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

const SendPanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input 
        type="text"
        placeholder="Введите текст"
        className={classes.input}
      />
      <SendRounded color="primary" fontSize="medium" className={classes.sendBtn} />
    </div>
  )
}

export default SendPanel;
