import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

import userIc from '../../../assets/icons/user.svg';

const useStyles = makeStyles(theme => ({
  channel: {
    boxSizing: 'border-box',
    width: '100%',
    height: '77px',
    marginBottom: '8px',
    padding: '8px 12px 14px 12px',
    borderRadius: '4px',
    background: theme.palette.common.white,
    cursor: 'pointer',
  },
  activeChannel: {
    boxSizing: 'border-box',
    width: '100%',
    height: '77px',
    marginBottom: '8px',
    padding: '8px 12px 14px 12px',
    borderRadius: '4px',
    background: theme.palette.common.lightBlue,
    cursor: 'pointer',
  },
  img: {
    marginRight: '11px',
  },
  chatItemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  chatName: {
    maxWidth: '120px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  box: {
    display: 'flex',
  },
  counter: {
    padding: '1px 7px 2px 8px',
    borderRadius: '50%',
    marginRight: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
  },
  time: {
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.common.black,
  },
  preview: {
    display: 'inline-block',
    height: '35px',
    marginTop: '4px',
    fontSize: '14px',
    lineHeight: '17px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
}));

const ChatItem = ({ chatName, roomName, msgs, time, message, setChannelName, isActiveChannel }) => {
  const classes = useStyles();

  const handleChannelClick = () => {
    setChannelName(chatName)
    localStorage.setItem('channelId', chatName);
  };

  return (
    <div className={isActiveChannel ? classes.activeChannel : classes.channel} onClick={handleChannelClick}>
      <Grid container direction="row">
        <Grid item style={{ width: '34px' }}>
          <img src={`${userIc}`} className={classes.img} />
        </Grid>

        <Grid item style={{ width: 'calc(100% - 34px)' }}>
          <Grid container direction="column">
            <Grid item className={classes.chatItemHeader}>
              <Typography variant="h4" className={classes.chatName}>{chatName}</Typography>
              <Box className={classes.box}>
                <div className={classes.counter}>{msgs}</div>
                <div className={classes.time}>{time}</div>
              </Box>
            </Grid>

            <Grid item>
              
              <div className={classes.preview}>
                <strong>{roomName}</strong>
                <span> - </span>
                <span>{message}</span>
              </div>
            </Grid>

          </Grid>
        </Grid>

      </Grid>
    </div>
  )
}

export default ChatItem;
