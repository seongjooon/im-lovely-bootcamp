import { LOADING_ON } from '../constants/actionTypes';

export const chatListReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING_ON:
      return state = true;
    default:
      return state;
  }
};
