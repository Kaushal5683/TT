import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject.model';
import { Teacher } from '../../models/teacher.model';
import { Year } from '../../models/year.model';
import { TeacherService } from '../../services/teacher.service'; // Import TeacherService
import { YearService } from '../../services/year.service';  // Import YearService

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjects: Subject[] = [];
  subjectForm: Subject = new Subject(0, '', 0, new Year(0), []);
  yearList: Year[] = [];  // Initialize yearList
  teacherList: Teacher[] = [];  // Initialize teacherList

  constructor(
    private subjectService: SubjectService,
    private yearService: YearService,  // Inject YearService
    private teacherService: TeacherService  // Inject TeacherService
  ) {}

  ngOnInit(): void {
    this.getAllSubjects();
    this.getAllYears();  // Fetch Year entities
    this.getAllTeachers();  // Fetch Teacher entities
  }

  getAllSubjects(): void {
    this.subjectService.getAllSubjects().subscribe((data: Subject[]) => {
      this.subjects = data;
    });
  }

  getAllYears(): void {
    this.yearService.getYears().subscribe((data: Year[]) => {
      this.yearList = data;
    });
  }

  getAllTeachers(): void {
    this.teacherService.getTeachers().subscribe((data: Teacher[]) => {
      this.teacherList = data;
    });
  }

  createSubject(): void {
    this.subjectService.createSubject(this.subjectForm).subscribe(() => {
      this.getAllSubjects();  // Refresh the list after adding a new subject
      this.subjectForm = new Subject(0, '', 0, new Year(0), []);
    });
  }

  updateSubject(): void {
    if (this.subjectForm.id) {
      this.subjectService.updateSubject(this.subjectForm.id, this.subjectForm).subscribe(() => {
        this.getAllSubjects();
        this.subjectForm = new Subject(0, '', 0, new Year(0), []);
      });
    }
  }

  deleteSubject(id: number): void {
    this.subjectService.deleteSubject(id).subscribe(() => {
      this.getAllSubjects();
    });
  }

  selectSubject(subject: Subject): void {
    this.subjectForm = Object.assign({}, subject);
  }
}
