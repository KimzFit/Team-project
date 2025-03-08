import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthService } from '../store/auth.service';

@Component({
  selector: 'app-create-equipment',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, NavbarComponent , FooterComponent],
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.css']
})
export class CreateEquipmentComponent implements OnInit {
  equipment = {
    equipment_id: '',
    name: '',
    qty: 0,
    purchase_year: 0,
    model: '',
    status: '',
    categoryId: '', 
    room: ''
  };
  userRole: string | null = null;
  category: any[] = [];

  constructor(private http: HttpClient ,private router : Router ,private authService: AuthService) {}

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
    const currentYearAD = new Date().getFullYear(); 
    const currentYearBE = currentYearAD + 543;

    this.equipment.purchase_year = currentYearBE; 

    this.http.get('http://localhost:7777/api/category').subscribe((response: any) => {
      this.category = response.sort((a: any, b: any) => a.category_name.localeCompare(b.category_name));
    });
  }

  onSubmit() {
    Swal.fire({
      title: 'คุณต้องการบันทึกข้อมูลใช่หรือไม่?',
      text: 'โปรดยืนยันก่อนดำเนินการ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        const token = this.authService.getToken();
        const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
        const apiUrl = 'http://localhost:7777/api/equipment/create';
  
        this.http.post(apiUrl, this.equipment , {headers}).subscribe(
          () => {
            Swal.fire('สำเร็จ!', 'บันทึกข้อมูลเรียบร้อยแล้ว', 'success').then(() => {
              this.router.navigate(['/table']);
            });
          },
          (error) => {
            console.error('Error:', error);
            Swal.fire('เกิดข้อผิดพลาด!', 'ไม่สามารถบันทึกข้อมูลได้', 'error');
          }
        );
      }
    });
  }

  
}
