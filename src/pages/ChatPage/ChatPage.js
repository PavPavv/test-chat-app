import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import ChatList from '../../components/ChatList/ChatList'; 
import ChatRoom from '../../components/ChatRoom/ChatRoom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const ChatPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <ChatList />
        </Grid>
        <Grid item xs={9}>
          <ChatRoom />
        </Grid>
      </Grid>
    </div>
  )
}

export default ChatPage;
