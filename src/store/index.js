import { combineReducers, createStore } from 'redux';

import idsReducer from './ids_reducer';
import updateReducer from './update_reducer';
import notificationReducer from './notification_reducer';

const store = createStore(
  combineReducers({
    ids: idsReducer,
    update: updateReducer,
    notification: notificationReducer,
  }),
);

export default store;
