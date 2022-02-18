import { combineReducers, createStore } from 'redux';

import idsReducer from './ids_reducer';

const store = createStore(
  combineReducers({
    ids: idsReducer,
  }),
);

export default store;
