// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-table',
//   imports: [],
//   templateUrl: './table.component.html',
//   styleUrl: './table.component.css'
// })
// export class TableComponent {

// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // นำเข้า HttpClientModule
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  equipmentData: any[] = []; // ตัวแปรเก็บข้อมูลจาก API
  uniqueYears: number[] = []; // ตัวแปรเก็บปีที่ไม่ซ้ำกัน

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEquipmentData();
  }

  fetchEquipmentData(): void {
    this.http.get<any[]>('http://localhost:7000/api/equipment')
      .subscribe(
        (data) => {
          console.log('Fetched equipment data:', data);
          this.equipmentData = data;

          // กรองปีที่ไม่ซ้ำกันจาก API
          this.uniqueYears = [...new Set(this.equipmentData.map(item => item.years.years))].sort();
        },
        (error) => {
          console.error('Error fetching equipment data:', error);
        }
      );
  }
}

