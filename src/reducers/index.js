import { combineReducers } from 'redux';
import { chatListReducer } from './chatListReducer';
import { detailChatReducer } from './detailChatReducer';
import { messageReducer } from './messageReducer';

export const initState = {
  chatInitState: [],
  detailChatInitState: [],
  messagesInitState: []
}

export default combineReducers({
  chatListReducer,
  detailChatReducer,
  curDetailChat: messageReducer
});
