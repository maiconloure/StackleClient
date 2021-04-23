import * as TYPE from '../redux/actions/type.action';

export interface IRequestLogin {
  email: string;
  password: string;
}

export interface ILoginAction {
  type: typeof TYPE.LOGIN;
  payload: IRequestLogin;
}