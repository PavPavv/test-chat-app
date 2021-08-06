import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import ChatList from '../../components/ChatList/ChatList'; 
import ChatRoom from '../../components/ChatRoom/ChatRoom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  noSelectedChat: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
  },
  noChatTitle: {
    padding: '2px 16px 7px 16px',
    borderRadius: '20px',
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
  }
}));

const ChatPage = ({ store }) => {
  const classes = useStyles();
  const pickedChannel = store.picked.channelId;

  useEffect(() => {
    console.log('pickedChannel',pickedChannel)
  }, [pickedChannel]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <ChatList store={store} />
        </Grid>
        <Grid item xs={9}>
          {pickedChannel 
            ? <ChatRoom store={store} /> 
            : (
              <div className={classes.noSelectedChat}>
                <div className={classes.noChatTitle}>Select a chat to start messaging</div>
              </div>
            )}
        </Grid>
      </Grid>
    </div>
  )
}

export default observer(ChatPage);
