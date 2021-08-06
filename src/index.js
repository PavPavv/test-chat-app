import React from 'react';
import ReactDOM from 'react-dom';
import { getSnapshot } from 'mobx-state-tree';

import App from './App';
import RootStore from './store/rootStore';

import './index.css';

const store = RootStore.create({
  messages: {
    "1": {
      id: 1,
      roomId: "Jack White",
      channelId: "Jack White",
      body: "hello!",
      ts: new Date('August 5, 2021 21:24:00'),
    },
    "2": {
      id: 2,
      roomId: "Jack White",
      channelId: "Jack White",
      body: "This is Jack White, mister! Are you here?",
      ts: new Date('August 5, 2021 21:27:10'),
    },
    "3": {
      id: 3,
      roomId: "Dave Grohl",
      channelId: "Dave Grohl",
      body: "Wazaaa!!!",
      ts: new Date('August 5, 2021 19:12:59'),
    },
    "4": {
      id: 4,
      roomId: "Dave Grohl",
      channelId: "Dave Grohl",
      body: "This is Dave Grohl, dude!",
      ts: new Date('August 5, 2021 19:14:01'),
    },
    "5": {
      id: 5,
      roomId: "Nath Williams",
      channelId: "Nath Williams",
      body: "What is up, bro!",
      ts: new Date('August 5, 2021 23:05:45'),
    },
    "6": {
      id: 6,
      roomId: "Nath Williams",
      channelId: "Nath Williams",
      body: "This is Nathan Williams from Wavves, dude!",
      ts: new Date('August 5, 2021 23:11:20'),
    },
  },

  picked: {
    channelId: "",
  },
});


// store.sendMessage(1233, 'werwe', 'werwer', '2342 dsfsdfsdfs sdfs sdfsf');

console.log('getSnapshot', getSnapshot(store))

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);