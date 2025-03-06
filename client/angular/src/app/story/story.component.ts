import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-story',
  imports: [],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {
  @Output() scrollToPicture = new EventEmitter<void>();

  onScrollToPicture() {
    this.scrollToPicture.emit(); // ส่ง Event ไปที่ `AppComponent`
  }
}