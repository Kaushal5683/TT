import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimetableSlots } from '../models/timetableslots.model';
import { Year } from '../models/year.model';

@Injectable({
  providedIn: 'root'
})
export class TimetableSlotsService {
  private apiUrl = 'http://localhost:420/api/timetables'; // Update with your backend URL
  private baseUrl = 'http://localhost:420/api/years';

  constructor(private http: HttpClient) {}

  generateTimetable(yearId: number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/generate/${yearId}`, {});
  }

  getAllTimetables(): Observable<TimetableSlots[]> {
    return this.http.get<TimetableSlots[]>(this.apiUrl);
  }
  getYear(id: number): Observable<Year> {
    return this.http.get<Year>(`${this.baseUrl}/${id}`);
  }
}
