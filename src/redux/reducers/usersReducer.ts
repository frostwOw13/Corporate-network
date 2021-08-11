import { IUserReducerProps } from '../../shared/interfaces';
import ActionTypes from '../constants/action-types';

const usersReducer = (state = [], { type, payload }: IUserReducerProps) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return [ ...state, payload ];
    default:
      return state;
  }
};

export default usersReducer;
