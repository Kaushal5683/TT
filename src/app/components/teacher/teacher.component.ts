import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { Teacher } from '../../models/teacher.model';
import { Subject } from '../../models/subject.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers: Teacher[] = [];
  selectedTeacher: Teacher | null = null;
  newTeacher: Teacher = new Teacher(0, '', []);
  updatedTeacher: Teacher = new Teacher(0, '', []);

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers(): void {
    this.teacherService.getTeachers().subscribe(
      (data: Teacher[]) => {
        this.teachers = data;
      },
      (error) => {
        console.error('Error fetching teachers', error);
      }
    );
  }

  selectTeacher(teacher: Teacher): void {
    this.selectedTeacher = teacher;
    this.updatedTeacher = { ...teacher }; // Copy the selected teacher's data to updatedTeacher
  }

  addTeacher(): void {
    this.teacherService.addTeacher(this.newTeacher).subscribe(
      (teacher: Teacher) => {
        this.teachers.push(teacher);
        this.newTeacher = new Teacher(0, '', []);
      },
      (error) => {
        console.error('Error adding teacher', error);
      }
    );
  }

  updateTeacher(): void {
    if (this.selectedTeacher) {
      this.teacherService.updateTeacher(this.selectedTeacher.id, this.updatedTeacher).subscribe(
        (teacher: Teacher) => {
          const index = this.teachers.findIndex(t => t.id === teacher.id);
          if (index !== -1) {
            this.teachers[index] = teacher;
          }
          this.updatedTeacher = new Teacher(0, '', []);
          this.selectedTeacher = null;
        },
        (error) => {
          console.error('Error updating teacher', error);
        }
      );
    }
  }

  deleteTeacher(id: number): void {
    this.teacherService.deleteTeacher(id).subscribe(
      () => {
        this.teachers = this.teachers.filter(t => t.id !== id);
      },
      (error) => {
        console.error('Error deleting teacher', error);
      }
    );
  }
}
