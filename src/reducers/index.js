import { combineReducers } from 'redux';
import { chatListReducer } from './chatListReducer';
import { selectUser } from './selectUser';
import { detailChatReducer } from './detailChatReducer';
import { messageReducer } from './messageReducer';

export default combineReducers({
  chatListReducer,
  detailChatReducer,
  selectUser,
  curDetailChat: messageReducer
});
