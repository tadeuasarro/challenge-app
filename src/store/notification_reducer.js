import { SET_NOTIFICATION } from '../actions/notification';

const initialState = {
  status: null,
  message: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return action.payload;
    default:
      return state;
  }
};

export default errorReducer;
