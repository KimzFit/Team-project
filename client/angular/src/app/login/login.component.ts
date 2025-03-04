import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../store/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // import Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // เพิ่ม HttpClientModule ที่นี่
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
    // ตรวจสอบว่า token อยู่ใน localStorage หรือไม่
    if (localStorage.getItem('token')) {
      // ถ้ามี token อยู่แล้ว ให้ทำการ redirect ไปที่หน้า '/'
      this.router.navigate(['/']);
    }
  }

  onLogin() {
    const loginData = { email: this.email, password: this.password };
    this.http
      .post<{ token: string; payload: any }>('http://localhost:7000/api/login', loginData)
      .subscribe({
        next: (response) => {
          // ใช้ authService อัพเดต login state
          this.authService.setLoginState(response.token, response.payload);
          
          // เก็บข้อมูลใน localStorage สำหรับ persistence
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.payload));
          
          // Redirect ไปที่หน้า home หรือ path ที่ต้องการ
          this.router.navigate(['/']); // คุณสามารถเปลี่ยนเป็น path อื่นได้ที่นี่
        },
        error: (err) => {
          alert(err.error.message);
        },
      });
  }
}
