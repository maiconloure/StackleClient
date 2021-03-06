/* eslint-disable @typescript-eslint/no-unused-vars */

import { History, LocationState } from 'history';

import * as TYPE from './type.action';

// --------------DECODE TOKEN TYPES--------------

export interface DecodeToken {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

// --------------INTERFACE TO LOGIN--------------

export interface UserInterface {
  email: string;
  name: string;
  id: number;
  username: string;
}

export interface PropsLogin {
  user: UserInterface;
  status: number | string;
  token: string;
}

export interface PropsRequestLogin {
  email: string;
  password: string;
}

// --------------INTERFACE TO REGISTER--------------

export interface PropsRegisterUser {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface PropsResponseRegister {
  data: {
    token: string;
  };
  status: number | string;
}

// --------------INTERFACE BOARD--------------

export interface PropsGetUserBoards {
  user: UserInterface;
  token: string;
  history: History<LocationState>;
}

export interface DataBoard {
  text: {
    text: string;
    position: PositionInterface;
  }[];
  notifications: string[];
  connections: any;
}

export interface UserBoards {
  title: string;
  description: string;
  users: { name: string; id: number | string }[];
  data: DataBoard;
  userId: number | string;
  id: number | string;
  connections: any;
}

export interface CreateUserBoards {
  title: string;
  description: string;
  users: { name: string; id: number | string }[];
  data: {
    text: string[];
    notifications: string[];
  };
  connections: any;
}

export interface BoardState {
  boards: UserBoards[];
  currentBoard: UserBoards;
}

// --------------CARD INTERFACES--------------

interface PositionInterface {
  x: number;
  y: number;
}

interface DataTimeInterface {
  date: string;
  hour: number | string;
}
export interface FastCardDataInterface {
  title?: string;
  subTitle?: string;
  date?: string;
  show?: boolean;
}

export interface CardDataInterface {
  checked: boolean;
  group: {
    color: string;
    number: number;
  };
  users: { name: string; id: number | string }[];
  connected: number[];
  followers: { name: string; id: number }[];
  blocked: boolean;
  fastCard?: FastCardDataInterface;
  title: string;
  time: {
    finish: DataTimeInterface;
    start: DataTimeInterface;
    done: DataTimeInterface;
  };
  description: string;
  tags: {
    color: string;
    text: string;
  }[];
}

export interface CardInterface {
  position: PositionInterface;
  data: CardDataInterface;
  boardId: number | string;
  userId: number | string;
  id: number | string | any;
}

export interface CardCreateInterface {
  position: PositionInterface;
  data: CardDataInterface;
}

export interface CardState {
  cards: CardInterface[];
}

export interface PropsUpdatedCard {
  token: string;
  card: CardInterface;
  history: History<LocationState>;
}

export interface PropsCreatedCard {
  currentBoard: UserBoards;
  user: UserInterface;
  token: string;
  card: CardCreateInterface;
  history: History<LocationState>;
}

// --------------ACTIONS INTERFACES--------------

// ACTIONS INTERFACES SERVICES

export interface LoginAction {
  type: typeof TYPE.LOGIN;
  payload: PropsLogin;
}

export interface LogoutAction {
  type: typeof TYPE.LOGOUT;
}

export interface UpdateUserAction {
  type: typeof TYPE.UPDATE_USER;
  payload: UserInterface;
}

export interface UpdateStatusAction {
  type: typeof TYPE.UPDATE_STATUS;
  payload: number | string;
}
