import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from './login.reducer';

export const selectLoginState = createFeatureSelector<LoginState>('login');

export const selectToken = createSelector(
  selectLoginState,
  (state: LoginState) => state.token
);

export const selectPayload = createSelector(
  selectLoginState,
  (state: LoginState) => state.payload
);
