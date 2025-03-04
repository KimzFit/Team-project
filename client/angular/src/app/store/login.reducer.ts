import { createReducer, on } from '@ngrx/store';
import { loginSuccess, loginFail } from './login.actions';

export interface LoginState {
  token: string | null;
  payload: any | null;
  error: string | null;
}

export const initialState: LoginState = {
  token: null,
  payload: null,
  error: null,
};

export const loginReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { token, payload }) => ({
    ...state,
    token,
    payload,
    error: null,
  })),
  on(loginFail, (state, { error }) => ({
    ...state,
    error,
  }))
);
