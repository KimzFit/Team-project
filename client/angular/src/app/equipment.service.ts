import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private apiUrl = 'http://localhost:7000/api/equipment';  // URL ของ API

  constructor(private http: HttpClient) { }

  // ฟังก์ชันดึงข้อมูลจาก API
  getEquipmentData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
