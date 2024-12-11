import { Subject } from './subject.model';

export class Teacher {
  id: number;
  name: string;
  subjects: Subject[];

  constructor(id: number, name: string, subjects: Subject[]) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }
}
