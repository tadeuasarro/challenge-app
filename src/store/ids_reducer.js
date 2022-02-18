import { SET_CITIZEN } from '../actions/citizen';
import { SET_ADDRESS } from '../actions/address';

const initialState = {
  citizenId: null,
  addressId: null,
};

const idsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        ...state,
        addressId: action.payload.id,
      };
    case SET_CITIZEN:
      return {
        ...state,
        citizenId: action.payload.id,
      };
    default:
      return state;
  }
};

export default idsReducer;
