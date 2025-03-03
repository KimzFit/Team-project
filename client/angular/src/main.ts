import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // ใช้ provideRouter แทน RouterModule
import { routes } from './app/app.routes'; // ใช้ routes ที่กำหนดไว้
import { AppComponent } from './app/app.component';

// Bootstrap แอปพลิเคชัน
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // ใช้ provideRouter
}).catch(err => console.error(err));
