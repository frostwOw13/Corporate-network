import { combineReducers } from 'redux';

import { usersReducer, workMessagesReducer } from './usersReducer';

const reducers = combineReducers({
  users: usersReducer,
  messages: workMessagesReducer,
});

export default reducers;
