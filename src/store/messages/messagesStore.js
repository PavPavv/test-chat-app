import { types } from 'mobx-state-tree';

export const Message = types
  .model({
    id: types.optional(types.number, 1),
    roomId: types.optional(types.string, ''),
    channelId: types.optional(types.string, ''),
    body: types.optional(types.string, ''),
    ts: types.optional(types.Date, new Date()),
    isOutgoing: types.optional(types.boolean, false),
  });

export const PickedChat = types
  .model({
    channelId: types.optional(types.string, ''),
  });
