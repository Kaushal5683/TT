import { Component, OnInit } from '@angular/core';
import { Classroom } from '../../models/classroom.model';
import { ClassroomService } from '../../services/classroom.service';
import { Year } from '../../models/year.model';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {
  classrooms: Classroom[] = [];
  selectedClassroom: Classroom = new Classroom(0, 0, new Year(0));

  constructor(private classroomService: ClassroomService) {}

  ngOnInit(): void {
    this.getAllClassrooms();
  }

  getAllClassrooms(): void {
    this.classroomService.getAllClassrooms().subscribe((data: Classroom[]) => {
      this.classrooms = data;
    });
  }

  createClassroom(): void {
    this.classroomService.createClassroom(this.selectedClassroom).subscribe(() => {
      this.getAllClassrooms();
      this.resetForm();
    });
  }

  updateClassroom(): void {
    this.classroomService.updateClassroom(this.selectedClassroom.id, this.selectedClassroom).subscribe(() => {
      this.getAllClassrooms();
      this.resetForm();
    });
  }

  deleteClassroom(id: number): void {
    this.classroomService.deleteClassroom(id).subscribe(() => {
      this.getAllClassrooms();
    });
  }

  selectClassroom(classroom: Classroom): void {
    this.selectedClassroom = { ...classroom };
  }

  resetForm(): void {
    this.selectedClassroom = new Classroom(0, 0, new Year(0));
  }
}
