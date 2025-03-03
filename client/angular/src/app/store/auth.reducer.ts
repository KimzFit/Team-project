import { createReducer, on } from '@ngrx/store';
import { loginSuccess, loginFailure } from './auth.actions';

export interface AuthState {
  token: string | null;
  payload: any | null;
  error: string | null;
}

export const initialState: AuthState = {
  token: null,
  payload: null,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { token, payload }) => ({
    ...state,
    token,
    payload,
    error: null
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
