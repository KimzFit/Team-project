import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: IndexComponent }, // หน้าแรก
  { path: 'table', component: TableComponent },
  { path: 'login', component: LoginComponent }, // เส้นทางไป TableComponent
];
