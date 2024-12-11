import { Year } from "./year.model";
export class Classroom {
  id: number;
  classroomNumber : number;
  year : Year;

  constructor(id: number,classroomNumber:number,year:Year) {
    this.id = id;
    this.classroomNumber = classroomNumber;
    this.year = year;
  }
}
