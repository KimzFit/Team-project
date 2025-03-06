import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { StoryComponent } from '../story/story.component';
import { InfoComponent } from '../info/info.component';
import { PictureComponent } from '../picture/picture.component';
@Component({
  selector: 'app-index',
  imports: [NavbarComponent , FooterComponent,StoryComponent,InfoComponent,PictureComponent ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {}
