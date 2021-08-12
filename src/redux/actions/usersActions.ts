import { IMessage, IUser } from '../../shared/interfaces';
import ActionTypes from '../constants/action-types';

export const setUsers = (user: IUser) => (
  {
    type: ActionTypes.SET_USERS,
    payload: user,
  }
);

export const setWorkMessage = (message: IMessage) => (
  {
    type: ActionTypes.SET_WORK_MESSAGE,
    payload: message,
  }
);

export const updateWorkMessage = (message: IMessage) => (
  {
    type: ActionTypes.UPDATE_WORK_MESSAGE,
    payload: message
  }
);

export const deleteWorkMessage = (message: IMessage) => (
  {
    type: ActionTypes.DELETE_WORK_MESSAGE,
    payload: message
  }
);

export const setFloodMessage = (message: IMessage) => (
  {
    type: ActionTypes.SET_FLOOD_MESSAGE,
    payload: message,
  }
);

export const updateFloodMessage = (message: IMessage) => (
  {
    type: ActionTypes.UPDATE_FLOOD_MESSAGE,
    payload: message
  }
);

export const deleteFloodMessage = (message: IMessage) => (
  {
    type: ActionTypes.DELETE_FLOOD_MESSAGE,
    payload: message
  }
);
