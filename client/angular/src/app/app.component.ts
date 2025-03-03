import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // ใช้ RouterOutlet สำหรับ Routing
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  template: '<router-outlet></router-outlet>',  // ใช้ router-outlet เพื่อแสดง Component ตามเส้นทาง
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet ,NavbarComponent , FooterComponent] // ✅ ใช้เฉพาะ RouterOutlet
})
export class AppComponent {
  title = 'team';
}
