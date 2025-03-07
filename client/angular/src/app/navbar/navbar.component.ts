import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../store/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLoggedIn = false;
  userEmail: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  navigateHome() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.authService.loginState$.subscribe((state) => {
      this.isLoggedIn = state.token !== null;
      this.userEmail = state.payload?.email || null;
    });
  }

  logout() {
    Swal.fire({
      title: 'คุณแน่ใจหรือไม่?',
      text: 'คุณต้องการออกจากระบบใช่หรือไม่?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ออกจากระบบ',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout();
        this.router.navigate(['/']);
        Swal.fire('ออกจากระบบสำเร็จ!', 'คุณออกจากระบบเรียบร้อยแล้ว', 'success');
      }
    });
  }
}
