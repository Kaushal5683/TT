export class Year {
  id: number;
  yearNumber?: number;
  numberOfClassrooms? : number;
  numberOfSubjects? : number;
  numberOfDays? : number;
  slotsPerDay? :number;

  constructor(id: number, yearNumber?: number,numberOfClassrooms? :number,numberOfSubjects?: number,numberOfDays?:number,slotsPerDay? :number) {
    this.id = id;
    this.yearNumber = yearNumber;
    this.numberOfClassrooms = numberOfClassrooms;
    this.numberOfSubjects = numberOfSubjects;
    this.numberOfDays = numberOfDays;
    this.slotsPerDay = slotsPerDay;
  }
}
