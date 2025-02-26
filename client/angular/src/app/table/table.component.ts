
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  equipmentData: any[] = [];
  filteredData: any[] = [];
  uniqueYears: number[] = [];
  selectedYear: string | number = ''; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEquipmentData();
  }

  fetchEquipmentData(): void {
    this.http.get<any[]>('http://localhost:7000/api/equipment')
      .subscribe(
        (data) => {
          this.equipmentData = data;
          this.filteredData = data;
          this.uniqueYears = [...new Set(this.equipmentData.map(item => item.years.years))].sort();
        },
        (error) => {
          console.error('Error fetching equipment data:', error);
        }
      );
  }

  onYearChange(): void {
    if (this.selectedYear === 'all') {
      this.filteredData = this.equipmentData;
    } else if (this.selectedYear) {
      this.http.post<any[]>('http://localhost:7000/api/equipment/year', { selectedYear: this.selectedYear })
        .subscribe(
          (data) => {
            this.filteredData = data;
          },
          (error) => {
            console.error('Error fetching filtered data:', error);
          }
        );
    } else {
      this.filteredData = this.equipmentData;
    }
  }
}
