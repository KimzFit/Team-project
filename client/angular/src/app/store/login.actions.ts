import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login] Login Request',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ token: string; payload: any }>()
);

export const loginFail = createAction(
  '[Login] Login Fail',
  props<{ error: string }>()
);
