import { SEND_MESSAGE } from '../constants/actionTypes';

export const sendMsg = (state = [], action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return state.concat(action.chatList);
    default:
      return state;
  }
};
