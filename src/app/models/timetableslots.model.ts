import { Classroom } from "./classroom.model";
import { Subject } from "./subject.model";
import { Teacher } from "./teacher.model";
export class TimetableSlots {
  id: number;
  classroom: Classroom;
  day: number;
  slot: number;
  subject: Subject;
  teacher : Teacher;

  constructor(id: number, classroom: Classroom,day:number,slot:number,subject: Subject,teacher:Teacher) {
    this.id = id;
    this.classroom = classroom;
    this.day = day;
    this.slot = slot;
    this.subject = subject;
    this.teacher = teacher;
  }
}
