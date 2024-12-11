import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassroomComponent } from './components/classroom/classroom.component';
import { SubjectComponent } from './components/subject/subject.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TimetableSlotsComponent } from './components/timetableslots/timetableslots.component';
import { YearComponent } from './components/year/year.component';

const routes: Routes = [
  { path: 'classrooms', component: ClassroomComponent },
  { path: 'subjects', component: SubjectComponent },
  { path: 'teachers', component: TeacherComponent },
  { path: 'timetables', component: TimetableSlotsComponent },
  { path: 'years', component: YearComponent },
  { path: '', redirectTo: '/years', pathMatch: 'full' },
  
  { path: '**', redirectTo: '/years' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
