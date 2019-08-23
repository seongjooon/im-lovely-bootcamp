import { INITIALIZE_CHAT_LIST } from '../constants/actionTypes';
import { initState } from './index';

export const chatListReducer = (state = initState.chatInitState, action) => {
  switch (action.type) {
    case INITIALIZE_CHAT_LIST:
      return state.concat(action.chatList);
    default:
      return state;
  }
};
