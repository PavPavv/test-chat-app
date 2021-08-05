import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ChatName from './ChatName/ChatName';
import ChatItem from './ChatItem/ChatItem';
import { messages } from '../../shared/testData';

const rooms = Array.from(new Set(messages.map(message => message.channelId)));

const latestRoomSpeaker = channelName => {
  return messages.filter(message => message.channelId === channelName).sort((a, b) => b.ts - a.ts)[0].roomId;
};
const latestMessageFromChannel = channelName => {
  return messages.filter(message => message.channelId === channelName).sort((a, b) => b.ts - a.ts)[0].body;
};

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

const ChatList = () => {
  const classes = useStyles();
  const [channelName, setChannelName] = useState('');

  return (
    <aside className={classes.root}>
      <ChatName 
        name={channelName} 
      />
      
      <div className={classes.listWrap}>
        {rooms.map((room, index) => {
          const active = channelName === room;

          return (
            <ChatItem
              key={index}
              chatName={room}
              roomName={latestRoomSpeaker(room)}
              msgs="1" 
              time="11:30" 
              message={latestMessageFromChannel(room)}
              setChannelName={setChannelName}
              isActiveChannel={active}
            />
          );
        })};
      </div>
    </aside>
  )
}

export default ChatList;
