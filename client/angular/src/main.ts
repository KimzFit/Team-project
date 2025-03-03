import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './app/table/table.component';
import { AppComponent } from './app/app.component';

const routes: Routes = [ 
  { path: 'equipments', component: TableComponent },  
  { path: '', redirectTo: '/equipments', pathMatch: 'full' },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, RouterModule.forRoot(routes)),
]
}).catch(err => console.error(err));
