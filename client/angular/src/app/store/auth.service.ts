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
  // สร้าง BehaviorSubject เพื่อเก็บข้อมูล token และ payload
  private loginStateSubject = new BehaviorSubject<AuthState>({ token: null, payload: null });

  // public observable ให้ส่วนอื่นๆ ของแอปสามารถ subscribe ได้
  loginState$ = this.loginStateSubject.asObservable();

  constructor() {}

  // ฟังก์ชั่นในการอัพเดต login state
  setLoginState(token: string, payload: any) {
    this.loginStateSubject.next({ token, payload });
  }

  // ฟังก์ชั่นสำหรับ logout (ลบ token และ payload)
  logout() {
    this.loginStateSubject.next({ token: null, payload: null });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // ฟังก์ชั่นในการเช็คว่า user ล็อกอินอยู่หรือไม่
  isLoggedIn(): boolean {
    return this.loginStateSubject.value.token !== null;
  }
}
