import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { StoryComponent } from './app/story/story.component';
import { RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { PictureComponent } from './app/picture/picture.component';  // เพิ่มการ import ของ PictureComponent


// กำหนดเส้นทางของคุณ
const routes = [
  { path: '', component: StoryComponent },
  { path: 'picture', component: PictureComponent },
];

// การตั้งค่า routing ใน Standalone App
bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: RouterModule,
      useValue: RouterModule.forRoot(routes),
    },
  ],
});
