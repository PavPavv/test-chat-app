import React, { useEffect } from 'react';
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
  const pickedChannel = localStorage.getItem('channelId');

  useEffect(() => {
    console.log('pickedChannel',pickedChannel)
  }, [pickedChannel]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <ChatList />
        </Grid>
        <Grid item xs={9}>
          {pickedChannel ? <ChatRoom /> : <div>Select a chat to start messaging</div>}
        </Grid>
      </Grid>
    </div>
  )
}

export default ChatPage;
