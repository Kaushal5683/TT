import { Component, OnInit } from '@angular/core';
import { TimetableSlotsService } from '../../services/timetableslots.service';
import { TimetableSlots } from '../../models/timetableslots.model';
import { Year } from '../../models/year.model';

@Component({
  selector: 'app-timetableslots',
  templateUrl: './timetableslots.component.html',
  styleUrls: ['./timetableslots.component.css']
})
export class TimetableSlotsComponent implements OnInit {
  year: Year | undefined;
  timetables: TimetableSlots[] = [];
  uniqueTimetables: { [key: string]: TimetableSlots[] } = {};
  daysArray: number[] = [];
  slotsPerDayArray: number[] = [];
  yearId: number = 1; // Example yearId; you can set this dynamically

  constructor(private timetableSlotsService: TimetableSlotsService) {}

  ngOnInit(): void {
    this.loadYearDetails();
  }

  loadYearDetails(): void {
    this.timetableSlotsService.getYear(this.yearId).subscribe(
      (year: Year) => {
        this.year = year;
        this.daysArray = Array.from({ length: year.numberOfDays || 0 }, (_, i) => i);
        this.slotsPerDayArray = Array.from({ length: year.slotsPerDay || 0 }, (_, i) => i);
        this.loadTimetables();
      },
      error => {
        console.error('Error loading year details', error);
      }
    );
  }
  generateTimetable(): void {
    this.timetableSlotsService.generateTimetable(this.yearId).subscribe(
      response => {
        console.log(response);
        this.getAllTimetables(); // Refresh timetable list
      },
      error => {
        console.error(error);
      }
    );
  }

  getAllTimetables(): void {
    this.timetableSlotsService.getAllTimetables().subscribe(
      data => {
        this.timetables = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  loadTimetables(): void {
    this.timetableSlotsService.getAllTimetables().subscribe(
      timetables => {
        this.timetables = timetables;
        this.uniqueTimetables = this.getUniqueTimetables(timetables); // Update unique timetables
      },
      error => console.error('Error loading timetables', error)
    );
  }

  getUniqueTimetables(timetables: TimetableSlots[]): { [key: string]: TimetableSlots[] } {
    const uniqueTimetables: { [key: string]: TimetableSlots[] } = {};
  
    timetables.forEach(timetable => {
      const classroomKey = `${timetable.classroom?.id}`;
  
      if (!uniqueTimetables[classroomKey]) {
        uniqueTimetables[classroomKey] = [];
      }
  
      const exists = uniqueTimetables[classroomKey].some(existing =>
        existing.day === timetable.day && existing.slot === timetable.slot
      );
  
      if (!exists) {
        uniqueTimetables[classroomKey].push(timetable);
      }
    });
  
    return uniqueTimetables;
  }

  getSubjects(timetables: TimetableSlots[], day: number, slot: number): TimetableSlots[] {
    return timetables.filter(t => t.day === day && t.slot === slot);
  }
}
