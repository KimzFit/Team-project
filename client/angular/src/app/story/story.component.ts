import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // import RouterModule
import { CommonModule } from '@angular/common'; // หากใช้ directive หรือ pipe พื้นฐานของ Angular เช่น *ngIf, *ngFor

@Component({
  selector: 'app-story',
  standalone: true,  // ทำให้เป็น Standalone Component
  imports: [CommonModule, RouterModule],  // เพิ่ม RouterModule ใน imports
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent {
  // โค้ดที่เกี่ยวข้องกับ StoryComponent
}
