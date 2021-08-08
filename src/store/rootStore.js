import { types } from 'mobx-state-tree';
import { values } from 'mobx';

import { Message, PickedChat } from './messages/messagesStore';

const RootStore = types
  .model({
    messages: types.map(Message),
    picked: types.optional(PickedChat, {}),
  })

  // .views(self => ({
  //   get unreadCount() {
  //     return 9;
  //   }
  // }))

  .actions(self => ({
    setSelectedChat(chatRoomId) {
        self.picked.channelId = chatRoomId;
    },
    setUnreadCountToZero(chatRoomId) {
      values(self.messages)
        .filter(message => message.channelId === chatRoomId)
        .forEach(filteredMessage => filteredMessage.setUnreadToFalse());
    },
    sendMessage(id, message) {
      if (message === undefined) message = null;
      self.messages.set(id, Message.create(message));
    }
  }));

  export default RootStore;