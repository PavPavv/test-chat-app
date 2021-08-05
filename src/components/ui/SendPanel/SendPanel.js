import React from 'react';
import { makeStyles } from '@material-ui/core'; 

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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
      <button>test</button>
    </div>
  )
}

export default SendPanel;
