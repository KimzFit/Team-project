import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { StoryComponent } from './story/story.component';  // เพิ่มการ import ของ StoryComponent
import { PictureComponent } from './picture/picture.component';  // เพิ่มการ import ของ PictureComponent

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'table', component: TableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'story', component: StoryComponent },  // เส้นทางสำหรับหน้า Story
  { path: 'picture', component: PictureComponent },  // เส้นทางสำหรับหน้า Picture
];

