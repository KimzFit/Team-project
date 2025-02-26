import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'team';
}
