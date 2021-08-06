import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';
import { values } from 'mobx';

import ChatName from './ChatName/ChatName';
import ChatItem from './ChatItem/ChatItem';
import { getClockTime } from '../../shared/utils';

const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
      borderRight: `1px solid ${theme.palette.common.gray}`,
    },
    listWrap: {
      boxSizing: 'border-box',
      padding: '8px',
      height: 'calc(100vh - 55px)',
      overflowX: 'hidden',
      overflowY: 'auto',
    },
}));

const ChatList = ({ store }) => {
  const classes = useStyles();
  const channelId = store.picked.channelId;
  const messages = values(store.messages);
  const rooms = Array.from(new Set(messages.map(message => message.channelId)));

  const latestRoomSpeaker = channelName => {
    return messages.filter(message => message.channelId === channelName).sort((a, b) => b.ts - a.ts)[0].roomId;
  };

  const latestMessageFromChannel = channelName => {
    return messages.filter(message => message.channelId === channelName).sort((a, b) => b.ts - a.ts)[0].body;
  };

  const latestMsgTime = channelName => {
    return messages.filter(message => message.channelId === channelName).sort((a, b) => b.ts - a.ts)[0].ts;
  };

  return (
    <aside className={classes.root}>
      <ChatName name={channelId} />
      
      <div className={classes.listWrap}>
        {rooms.map((room, index) => {
          const active = channelId === room;

          return (
            <ChatItem
              key={index}
              chatName={room}
              roomName={latestRoomSpeaker(room)}
              msgs="1" 
              time={getClockTime(latestMsgTime(room))} 
              message={latestMessageFromChannel(room)}
              isActiveChannel={active}
              store={store}
            />
          );
        })};
      </div>
    </aside>
  )
}

export default observer(ChatList);
