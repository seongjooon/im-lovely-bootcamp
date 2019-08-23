import { SET_NEW_DETAIL_CHAT, SEND_MESSAGE } from '../constants/actionTypes';
import { initState } from './index';

export const messageReducer = (state = initState.messagesInitState, action) => {
  switch (action.type) {
    case SET_NEW_DETAIL_CHAT:
      return state.concat(action.detailChats);
    case SEND_MESSAGE:
      return state.concat(action.msgData);
    default:
      return state;
  }
};
