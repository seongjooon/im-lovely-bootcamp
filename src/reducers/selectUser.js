import { SELECT_USER } from '../constants/actionTypes';

export const selectUser = (state = [], action) => {
  switch (action.type) {
    case SELECT_USER:
      return state.concat(action.id);
    default:
      return state;
  }
};
