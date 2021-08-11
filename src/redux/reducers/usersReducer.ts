import { IUserReducerProps } from '../../shared/interfaces';
import ActionTypes from '../constants/action-types';

const initialState = [
  {
    username: "admin",
    password: "admin",
    id: 0
  },
  {
    username: "admin1",
    password: "admin1",
    id: 1
  },
  {
    username: "admin2",
    password: "admin2",
    id: 2
  }
];

const usersReducer = (state = initialState, { type, payload }: IUserReducerProps) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return [ ...state, payload ];
    default:
      return state;
  }
};

export default usersReducer;
