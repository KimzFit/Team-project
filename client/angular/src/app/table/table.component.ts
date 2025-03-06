import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // เพิ่ม Router
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthService } from '../store/auth.service'; // เพิ่ม AuthService
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  equipmentData: any[] = [];
  filteredByYearData: any[] = [];
  filteredData: any[] = [];
  uniqueYears: number[] = [];
  uniqueRooms: string[] = [];
  selectedYear: string | number = '';
  selectedRoom: string = '';
  searchQuery: string = '';
  userRole: string | null = null;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    this.userRole = this.authService.getUserRole();

    if (this.userRole !== 'teacher') {
      this.router.navigate(['/']);
      return;
    }
    this.fetchEquipmentData();
  }

  fetchEquipmentData(): void {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    this.http
      .get<any[]>('http://localhost:7000/api/equipment', { headers })
      .subscribe(
        (data) => {
          this.equipmentData = data.sort(
            (a, b) => b.years.years - a.years.years
          );
          this.filteredByYearData = [...this.equipmentData];
          this.filteredData = [...this.equipmentData];

          this.uniqueYears = [
            ...new Set(this.equipmentData.map((item) => item.years.years)),
          ].sort((a, b) => b - a);
          this.uniqueRooms = [
            ...new Set(this.equipmentData.map((item) => item.room)),
          ].sort();
        },
        (error) => {
          console.error('Error fetching equipment data:', error);
        }
      );
  }

  onYearChange(): void {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    if (this.selectedYear === 'all') {
      this.filteredByYearData = [...this.equipmentData];
    } else if (this.selectedYear) {
      this.http
        .post<any[]>(
          'http://localhost:7000/api/equipment/year',
          { selectedYear: this.selectedYear },
          { headers }
        )
        .subscribe(
          (data) => {
            this.filteredByYearData = data.sort(
              (a, b) => b.years.years - a.years.years
            );
            this.onSearch();
          },
          (error) => {
            alert(error.error.message);
            console.error('Error fetching filtered data:', error);
          }
        );
    } else {
      this.filteredByYearData = [...this.equipmentData];
    }
    this.onSearch();
  }

  onRoomChange(): void {
    if (this.selectedRoom === 'all') {
      this.filteredByYearData = [...this.equipmentData];
    } else if (this.selectedRoom) {
      this.filteredByYearData = this.equipmentData.filter(
        (item) => item.room === this.selectedRoom
      );
    } else {
      this.filteredByYearData = [...this.equipmentData];
    }
    this.onSearch();
  }

  onSearch(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredData = this.filteredByYearData.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.equipment_id.toString().includes(query)
    );
  }

  onRoomFilter(): void {
    this.filteredData = this.filteredByYearData.sort((a, b) =>
      a.room.localeCompare(b.room)
    );
  }

  onNameSort(): void {
    this.filteredData = this.filteredByYearData.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  onSortChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'name') {
      this.onNameSort();
    } else if (value === 'room') {
      this.onRoomFilter();
    }
  }
}
