import { Component, OnInit } from '@angular/core';
import { YearService } from '../../services/year.service';
import { Year } from '../../models/year.model';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  years!: Year[];
  selectedYear: Year | null = null;
  newYear: Year = new Year(0, undefined, undefined, undefined, undefined);
  updatedYear: Year = new Year(0, undefined, undefined, undefined, undefined);


  constructor(private yearService: YearService) { }

  ngOnInit(): void {
    this.getYears();
  }

  getYears(): void {
    this.yearService.getYears().subscribe(
      (data: Year[]) => {
        this.years = data;
      },
      (error) => {
        console.error('Error fetching years', error);
      }
    );
  }

  selectYear(year: Year): void {
    this.selectedYear = year;
    this.updatedYear = { ...year }; // Copy selected year's data to updatedYear
  }

  addYear(): void {
    this.yearService.addYear(this.newYear).subscribe(
      (year: Year) => {
        this.years.push(year);
        this.newYear = new Year(0,0,0,0,0,0);
      },
      (error) => {
        console.error('Error adding year', error);
      }
    );
  }

  updateYear(): void {
    if (this.selectedYear) {
      this.yearService.updateYear(this.selectedYear.id, this.updatedYear).subscribe(
        (year: Year) => {
          const index = this.years.findIndex(y => y.id === year.id);
          if (index !== -1) {
            this.years[index] = year;
          }
          this.updatedYear = new Year(0,0,0,0,0,0);
          this.selectedYear = null;
        },
        (error) => {
          console.error('Error updating year', error);
        }
      );
    }
  }

  deleteYear(id: number): void {
    this.yearService.deleteYear(id).subscribe(
      () => {
        this.years = this.years.filter(y => y.id !== id);
      },
      (error) => {
        console.error('Error deleting year', error);
      }
    );
  }
}
