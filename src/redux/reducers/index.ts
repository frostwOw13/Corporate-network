import { combineReducers } from 'redux';

import { usersReducer, workMessagesReducer } from './usersReducer';

const reducers = combineReducers({
  users: usersReducer,
  workMessages: workMessagesReducer,
});

export default reducers;
