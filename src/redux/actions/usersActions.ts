import { IUser } from '../../shared/interfaces';
import ActionTypes from '../constants/action-types';

const setUsers = (user: IUser) => (
  {
    type: ActionTypes.SET_USERS,
    payload: user,
  }
);

export default setUsers;
