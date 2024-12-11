import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Year } from '../models/year.model';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  private baseUrl = 'http://localhost:420/api/years';

  constructor(private http: HttpClient) { }

  getYears(): Observable<Year[]> {
    return this.http.get<Year[]>(this.baseUrl);
  }

  getYear(id: number): Observable<Year> {
    return this.http.get<Year>(`${this.baseUrl}/${id}`);
  }

  addYear(year: Year): Observable<Year> {
    return this.http.post<Year>(this.baseUrl, year);
  }

  updateYear(id: number, year: Year): Observable<Year> {
    return this.http.put<Year>(`${this.baseUrl}/${id}`, year);
  }

  deleteYear(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
