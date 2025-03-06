import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../store/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn = false;
  userEmail: string | null = null;

  constructor(private authService: AuthService , private router: Router) {}

  navigateHome() {
    this.router.navigate(['/']);
  }
  
  ngOnInit() {
    this.authService.loginState$.subscribe(state => {
      this.isLoggedIn = state.token !== null;
      this.userEmail = state.payload?.email || null;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/'])

  }
}
