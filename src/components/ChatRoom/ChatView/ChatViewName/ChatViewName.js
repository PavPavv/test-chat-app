import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '16px',
    height: '45px',
    borderBottom: `1px solid ${theme.palette.common.gray}`,
    background: theme.palette.common.white,
  },
}));

const ChatViewName = ({ channelId }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" noWrap>{channelId}</Typography>
    </div>
  )
}

export default observer(ChatViewName);
