import { Teacher } from './teacher.model';
import { Year } from './year.model';

export class Subject {
  id: number;
  name: string;
  slotsRequired: number;
  year: Year;
  teachers: Teacher[];

  constructor(
    id: number,
    name: string,
    slotsRequired: number,
    year: Year,
    teachers: Teacher[]
  ) {
    this.id = id;
    this.name = name;
    this.slotsRequired = slotsRequired;
    this.year = year;
    this.teachers = teachers;
  }
}
