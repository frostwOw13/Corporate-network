import { combineReducers } from 'redux';

import { floodMessagesReducer, usersReducer, workMessagesReducer } from './usersReducer';

const reducers = combineReducers({
  users: usersReducer,
  workMessages: workMessagesReducer,
  floodMessages: floodMessagesReducer,
});

export default reducers;
