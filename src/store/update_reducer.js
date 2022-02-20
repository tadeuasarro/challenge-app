import { SET_UPDATE } from '../actions/update';

const initialState = { params: null };

const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UPDATE:
      return {
        params: action.payload,
      };
    default:
      return state;
  }
};

export default updateReducer;
