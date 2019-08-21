import { combineReducers } from 'redux';
import { chatListReducer } from './chatListReducer';
import { selectUser } from './selectUser';
import { detailChatReducer } from './detailChatReducer';

export default combineReducers({
  chatListReducer,
  detailChatReducer,
  selectUser
});
