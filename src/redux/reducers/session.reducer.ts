/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropsLogin } from '../actions/interface.action';
import { ServiceAction } from '../actions/session.action'
import * as TYPE from '../actions/type.action';

const initialState: PropsLogin = JSON.parse(
  localStorage.getItem('session') ||
    `{
      "user": {
        "email": "",
        "name": "",
        "username": "",
        "id": ""
      },
      "status": "",
      "token": ""
    }`
);

export const session = (state = initialState, action: ServiceAction): PropsLogin => {
  switch (action.type) {
    case TYPE.LOGIN:
      localStorage.setItem('session', JSON.stringify({ ...state, ...action.payload }));
      return { ...state, ...action.payload };

    case TYPE.LOGOUT:
      localStorage.clear();
      return initialState;

    case TYPE.UPDATE_USER:
      localStorage.setItem(
        'session',
        JSON.stringify({ ...state, user: action.payload } || initialState)
      );
      return { ...state, user: action.payload };

    case TYPE.UPDATE_STATUS:
      localStorage.setItem('status', JSON.stringify({ status: action.payload } || initialState));
      return { ...state, status: action.payload };

    default:
      return state;
  }
};