import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
  { path: '', component: IndexComponent }, // หน้าแรก
  { path: 'table', component: TableComponent } // เส้นทางไป TableComponent
];