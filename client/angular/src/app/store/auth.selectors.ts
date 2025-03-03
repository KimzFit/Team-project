import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectToken = createSelector(
  selectAuthState,
  (state: AuthState) => state.token
);

export const selectPayload = createSelector(
  selectAuthState,
  (state: AuthState) => state.payload
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);
