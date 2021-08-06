import { types } from 'mobx-state-tree';

import { Message, PickedChat } from './messages/messagesStore';

const RootStore = types
  .model({
    messages: types.map(Message),
    picked: types.optional(PickedChat, {}),
  })
  // .views(self => ({
  //   get unfinishedCount() {
  //     return values(self.todos).filter(todo => !todo.done).length;
  //   },
  //   get finishedCount() {
  //     return values(self.todos).filter(todo => todo.done).length;
  //   }
  // }))

  // .actions(self => ({
  //   addTodo(userID, name) {
  //       self.todos.set(userID, Todo.create({ name }))
  //   }
  // }));
  .actions(self => ({
    setSelectedChat(chatRoomId) {
        self.picked.channelId = chatRoomId;
    },
    sendMessage(id, message) {
      self.messages.set(id, Message.create(message));
    }
  }));

  export default RootStore;