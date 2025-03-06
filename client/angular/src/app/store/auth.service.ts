import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface AuthState {
  token: string | null;
  payload: any | null;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginStateSubject = new BehaviorSubject<AuthState>({ token: null, payload: null });
  loginState$ = this.loginStateSubject.asObservable();

  constructor() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const payload = user ? JSON.parse(user) : null;
    
    if (token && payload) {
      this.loginStateSubject.next({ token, payload });
    }
  }

  setLoginState(token: string, payload: any) {
    this.loginStateSubject.next({ token, payload });
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(payload));
  }

  logout() {
    this.loginStateSubject.next({ token: null, payload: null });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return this.loginStateSubject.value.token !== null;
  }

  getToken(): string | null {
    return this.loginStateSubject.value.token || localStorage.getItem('token');
  }

  getUserRole(): string | null {
    return this.loginStateSubject.value.payload?.role || null;
  }
}
