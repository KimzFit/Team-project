import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { login, loginSuccess, loginFail } from './login.actions';
import { createEffect } from '@ngrx/effects';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap((action) =>
        this.http
          .post('http://localhost:7000/api/login', {
            email: action.email,
            password: action.password,
          })
          .pipe(
            map((response: any) => {
              localStorage.setItem('token', response.token);
              return loginSuccess({ token: response.token, payload: response.payload });
            }),
            catchError((error) => of(loginFail({ error: error.message })))
          )
      )
    )
  );
}
