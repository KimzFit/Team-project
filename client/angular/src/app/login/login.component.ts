import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../store/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

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

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
    
    if (localStorage.getItem('token')) {
      
      this.router.navigate(['/']);
    }
  }

  onLogin() {
    const loginData = { email: this.email, password: this.password };
    this.http
      .post<{ token: string; payload: any }>('http://localhost:7000/api/login', loginData)
      .subscribe({
        next: (response) => {
          
          this.authService.setLoginState(response.token, response.payload);
          
          
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.payload));
          
         
          this.router.navigate(['/']); 
        },
        error: (err) => {
          alert(err.error.message);
        },
      });
  }
}
