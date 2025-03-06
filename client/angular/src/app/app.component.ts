import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // ใช้ RouterOutlet สำหรับ Routing
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { StoryComponent } from './story/story.component';
import { InfoComponent } from './info/info.component';
import { PictureComponent } from './picture/picture.component';
import { IndexComponent } from './index/index.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    IndexComponent,
    NavbarComponent, 
    FooterComponent, 
    StoryComponent, 
    InfoComponent, 
    PictureComponent
  ], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-project';

}

