import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../store/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }
  }

  onLogin() {
    Swal.fire({
      title: 'ยืนยันการล็อกอิน',
      text: 'คุณต้องการล็อกอินด้วยบัญชีนี้หรือไม่?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'ล็อกอิน',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.isConfirmed) {
        const loginData = { email: this.email, password: this.password };
        this.http
          .post<{ token: string; payload: any }>(
            'http://localhost:7777/api/login',
            loginData
          )
          .subscribe({
            next: (response) => {
              this.authService.setLoginState(response.token, response.payload);
              localStorage.setItem('token', response.token);
              localStorage.setItem('user', JSON.stringify(response.payload));

              Swal.fire({
                title: 'เข้าสู่ระบบสำเร็จ',
                text: 'ยินดีต้อนรับกลับ!',
                icon: 'success',
                confirmButtonText: 'ตกลง',
              }).then(() => {
                this.router.navigate(['/']);
              });
            },
            error: (err) => {
              Swal.fire({
                title: 'เกิดข้อผิดพลาด',
                text: err.error.message,
                icon: 'error',
                confirmButtonText: 'ตกลง',
              });
            },
          });
      }
    });
  }
}
