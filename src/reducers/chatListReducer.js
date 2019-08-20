import { INITIALIZE_CHAT_LIST } from '../constants/actionTypes';

export const chatListReducer = (state = [], action) => {
  switch (action.type) {
    case INITIALIZE_CHAT_LIST:
      return state.concat(action.chatList);
    default:
      return state;
  }
};
