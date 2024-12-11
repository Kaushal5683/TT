import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { SubjectComponent } from './components/subject/subject.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TimetableSlotsComponent } from './components/timetableslots/timetableslots.component';
import { YearComponent } from './components/year/year.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; // Import necessary modules
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    ClassroomComponent,
    SubjectComponent,
    TeacherComponent,
    TimetableSlotsComponent,
    YearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, // Include FormsModule in imports
    HttpClientModule // Include HttpClientModule in imports
  ],
  providers: [
    provideHttpClient(withFetch()) // Provide HttpClient with fetch enabled
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
