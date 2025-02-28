
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
  filteredByYearData: any[] = []; 
  filteredData: any[] = []; 
  uniqueYears: number[] = [];
  selectedYear: string | number = ''; 
  searchQuery: string = ''; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEquipmentData();
  }

  fetchEquipmentData(): void {
    this.http.get<any[]>('http://localhost:7000/api/equipment')
      .subscribe(
        (data) => {
          this.equipmentData = data.sort((a, b) => b.years.years - a.years.years);
          this.filteredByYearData = [...this.equipmentData]; 
          this.filteredData = [...this.equipmentData];

          this.uniqueYears = [...new Set(this.equipmentData.map(item => item.years.years))].sort((a, b) => b - a);
        },
        (error) => {
          console.error('Error fetching equipment data:', error);
        }
      );
  }

  onYearChange(): void {
    if (this.selectedYear === 'all') {
      this.filteredByYearData = [...this.equipmentData];
    } else if (this.selectedYear) {
      this.http.post<any[]>('http://localhost:7000/api/equipment/year', { selectedYear: this.selectedYear })
        .subscribe(
          (data) => {
            this.filteredByYearData = data.sort((a, b) => b.years.years - a.years.years); // จัดเรียงข้อมูลที่ดึงมาจาก API
            this.onSearch(); 
          },
          (error) => {
            console.error('Error fetching filtered data:', error);
          }
        );
    } else {
      this.filteredByYearData = [...this.equipmentData];
    }
    this.onSearch();
  }

  onSearch(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredData = this.filteredByYearData.filter(item =>
      item.name.toLowerCase().includes(query) || 
      item.equipment_id.toString().includes(query)
    );
  }
}



