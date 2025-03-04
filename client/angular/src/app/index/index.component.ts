import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-index',
  imports: [NavbarComponent , FooterComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {}
