import { SEND_MESSAGE, REQUEST_CHAT_LIST } from '../constants/actionTypes';

export const sendMsg = text => ({
  type: SEND_MESSAGE,
  text
});

export const VisibilityFilters = {
  REQUEST_CHAT_LIST
};
