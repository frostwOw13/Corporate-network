/* eslint-disable no-param-reassign */
import { IMessageReducerProps, IUserReducerProps } from '../../shared/interfaces';
import ActionTypes from '../constants/action-types';

const initialStateUsers = [
  {
    username: "Terrell C. Roberts",
    password: "qwerty",
    id: 0
  },
  {
    username: "John C. Kemp",
    password: "123",
    id: 1
  },
  {
    username: "Dalton J. Stevens",
    password: "qwerty123",
    id: 2
  }
];

const workMessages = [
  {
    message: "We are fortunate to have a hard worker like you. We are proud of you. Well done!",
    author: "Terrell C. Roberts",
    id: 0
  },
  {
    message: "The way you gracefully pulled off the work – I am so proud of you.",
    author: "Dalton J. Stevens",
    id: 1
  }
];

const floodMessages = [
  {
    message: "Hey, how was your weekend?",
    author: "Terrell C. Roberts",
    id: 0
  },
  {
    message: "Pretty good! I went to a baseball game with my brother.",
    author: "John C. Kemp",
    id: 1
  },
  {
    message: "Really? Who was playing?",
    author: "Terrell C. Roberts",
    id: 2
  },
  {
    message: "The Yankees and the Red Sox. We’re huge Yankees fans!",
    author: "John C. Kemp",
    id: 3
  },
  {
    message: "No kidding! You must be really good.",
    author: "Terrell C. Roberts",
    id: 4
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
