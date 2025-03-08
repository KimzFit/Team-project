import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'table', component: TableComponent },
  { path: 'login', component: LoginComponent }, 
  {path : "createEquipment", component : CreateEquipmentComponent},
  {path : '**', redirectTo : ''}
];
