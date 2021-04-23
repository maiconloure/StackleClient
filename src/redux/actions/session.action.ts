import { ThunkAction } from 'redux-thunk';
import api from '../../services/api';
import * as TYPE from './type.action';
import { RootStoreType } from '../store';
import * as Interface from  './interface.action';

const createHeader = (token: string) => ({
  headers: {
    Authorization: 'Token ' + token,
  },
});

export const requestLogin = ({
  email,
  password,
}: Interface.PropsRequestLogin): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.LoginAction | Interface.UpdateStatusAction
> => (dispatch) => {
  api
    .post('/login/', {
      email,
      password,
    })
    .then((response) => {
      dispatch(updateStatus(response.status));
      if (response.status === 201) {
        dispatch(getUser(response));
      }
    })
    .catch((error) => {
      console.log(error)
      dispatch(updateStatus(error.response.status)); 
    });
};

export const registerUser = ({
  name,
  username,
  email,
  password,
}: Interface.PropsRegisterUser): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.LoginAction | Interface.UpdateStatusAction
> => (dispatch) => {

  api
    .post('/users/', { first_name: name, username, email, password })
    .then((response) => {
      dispatch(
        loginAction({
          user: {
            id: response.data.id,
            name: response.data.first_name,
            email: response.data.email,
            username: response.data.username,
          },
          status: 200,
          token: response.data.token,
        })
      );

    })
    .catch((error) => {
      console.log(error)
      dispatch(updateStatus(error.response.status));
    });

};

export const newPassword = ({email, username, new_password, confirm_password}: any) => async (dispatch:any) => {
  api
    .post(`/users/password_recovery/`, { email, username, new_password, confirm_password })
    .then((response) => {
      dispatch(updateStatus(response.status));
    })
    .catch((error) => {
      dispatch(updateStatus(error.response.status));
    });
}


const getUser = (
  data: Interface.PropsResponseRegister
): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.LoginAction | Interface.UpdateStatusAction
> => async (dispatch) => {

  api
    .get(`/users/`, createHeader(data.data.token))
    .then((response) => {
      dispatch(updateStatus(response.status));

      if (response.status === 200) {
        dispatch(
          loginAction({
            user: {
              id: response.data.id,
              name: response.data.first_name,
              email: response.data.email,
              username: response.data.username,
            },
            status: 200,
            token: data.data.token,
          })
        );
      }
    })
    .catch((error) => {
      dispatch(updateStatus(error.response.status));
    });

};

export const updateUserAPI = ({
  user,
  token,
}: Interface.PropsGetUserBoards): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.UpdateUserAction | Interface.UpdateStatusAction
> => (dispatch) => {
  dispatch(updateUser(user));
  api
    .patch(`/users/${user.id}`, user, createHeader(token))
    .then((response) => {
      dispatch(updateStatus(response.status));
    })
    .catch((error) => {
      dispatch(updateStatus(error.response.status));
    });
};

const updateUser = (user: Interface.UserInterface): Interface.UpdateUserAction => ({
  type: TYPE.UPDATE_USER,
  payload: user,
});

const loginAction = ({ user, status, token }: Interface.PropsLogin): Interface.LoginAction => ({
  type: TYPE.LOGIN,
  payload: { user, status, token },
});

export const logout = (): Interface.LogoutAction => ({
  type: TYPE.LOGOUT,
});

export const updateStatus = (status: number | string): Interface.UpdateStatusAction => ({
  type: TYPE.UPDATE_STATUS,
  payload: status,
});

export type ServiceAction =
  | Interface.LoginAction
  | Interface.LogoutAction
  | Interface.UpdateUserAction
  | Interface.UpdateStatusAction;