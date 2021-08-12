/* eslint-disable no-param-reassign */
import { IMessageReducerProps, IUserReducerProps } from '../../shared/interfaces';
import ActionTypes from '../constants/action-types';

const initialStateUsers = [
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

const workMessages = [
  {
    message: "Lorem ipsum lorem ipsum",
    author: "admin",
    id: 0
  },
  {
    message: "Lorem impus asda d a ewq f as a sdadsada as ",
    author: "admin1",
    id: 1
  }
];

const floodMessages = [
  {
    message: "12321417vp837cp283c74pj23c421",
    author: "admin",
    id: 0
  },
  {
    message: "Lorem21314143ccxxcf as a sdadsada as ",
    author: "admin1",
    id: 1
  }
];

export const usersReducer = (state = initialStateUsers, { type, payload }: IUserReducerProps) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return [ ...state, payload ];
    default:
      return state;
  }
};

export const workMessagesReducer = (state = workMessages, { type, payload }: IMessageReducerProps) => {
  switch (type) {
    case ActionTypes.SET_WORK_MESSAGE:
      return [ ...state, payload  ];
    case ActionTypes.UPDATE_WORK_MESSAGE:
      state.forEach((el) => {
        if (el.id === payload.id) {
          el.message = payload.message;
        }
      });
      return [ ...state ];
    case ActionTypes.DELETE_WORK_MESSAGE:
      return state.filter((el) => el.id !== payload.id);
    default:
      return state;
  }
};

export const floodMessagesReducer = (state = floodMessages, { type, payload }: IMessageReducerProps) => {
  switch (type) {
    case ActionTypes.SET_FLOOD_MESSAGE:
      return [ ...state, payload  ];
    case ActionTypes.UPDATE_FLOOD_MESSAGE:
      state.forEach((el) => {
        if (el.id === payload.id) {
          el.message = payload.message;
        }
      });
      return [ ...state ];
    case ActionTypes.DELETE_FLOOD_MESSAGE:
      return state.filter((el) => el.id !== payload.id);
    default:
      return state;
  }
};
