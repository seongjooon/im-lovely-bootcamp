import { GET_DETAIL_CHAT } from '../constants/actionTypes';

export const detailChatReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DETAIL_CHAT:
      return state.concat(action.detailChat);
    default:
      return state;
  }
};
