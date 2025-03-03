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
import { RouterModule } from '@angular/router';  // นำเข้า RouterModule
import { TableComponent } from './table/table.component';  // นำเข้า TableComponent

@Component({
  selector: 'app-root',
  standalone: true,  // กำหนดให้เป็น Standalone Component
  imports: [RouterModule, TableComponent],  // นำเข้า RouterModule สำหรับการทำ Routing
  template: '<router-outlet></router-outlet>',  // ใช้ router-outlet เพื่อแสดง component ตามเส้นทาง
  styleUrls: ['./app.component.css']  // ใช้ styleUrls แทน styleUrl
})
export class AppComponent {
  title = 'team';
}

