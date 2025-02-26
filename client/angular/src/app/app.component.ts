// import { Component } from '@angular/core';
// import { TableComponent } from './table/table.component';

// @Component({
//   selector: 'app-root',
//   imports: [TableComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })

// export class AppComponent {
//   title = 'team';
// }
import { Component } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  standalone: true, // กำหนดให้เป็น Standalone Component
  imports: [TableComponent], // นำเข้า TableComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // เปลี่ยนจาก styleUrl เป็น styleUrls
})
export class AppComponent {
  title = 'team';
}
