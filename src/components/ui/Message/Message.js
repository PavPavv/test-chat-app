import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import { getClockTime } from '../../../shared/utils';

const useStyles = makeStyles(theme => ({
  wrapperOut: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
  wrapperIn: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
  },
  outgoing: {
    maxWidth: '80%',
    marginBottom: '10px',
    border: 0,
    borderRadius: '8px 8px 4px 8px',
    padding: '8px 10px',
    color: theme.palette.common.white,
    background: theme.palette.secondary.main,
  },
  incoming: {
    maxWidth: '80%',
    marginBottom: '10px',
    border: 0,
    borderRadius: '8px 8px 4px 8px',
    padding: '8px 10px',
    color: theme.palette.common.heavyGray,
    background: theme.palette.common.gray,
  },
  text: {
    hyphens: 'auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  time: {
    width: '100%', 
    marginTop: '60px',
    textAlign: 'right',
  },
  separator: {
    width: '100%',
    height: '5px',
  },
}));

const Message = ({ isOutgoing = false, message = '', time = '' }) => {
  const classes = useStyles();

  return (
    <div className={isOutgoing ? classes.wrapperOut : classes.wrapperIn}>
      <div className={isOutgoing ? classes.outgoing : classes.incoming}>
        <Typography variant="body1"  className={classes.text}>{message}</Typography>
        <div className={classes.separator}></div>
        <Typography variant="caption" display="block" style={{ width: '100%', textAlign: 'right', }} >{getClockTime(time)}</Typography>
      </div>
    </div>
  )
}

export default Message;
