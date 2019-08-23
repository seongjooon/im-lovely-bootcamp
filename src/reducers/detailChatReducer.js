import { GET_DETAIL_CHAT } from '../constants/actionTypes';
import { initState } from './index';

export const detailChatReducer = (
  state = initState.detailChatInitState,
  action
) => {
  switch (action.type) {
    case GET_DETAIL_CHAT:
      return state.concat(action.detailChat);
    default:
      return state;
  }
};
