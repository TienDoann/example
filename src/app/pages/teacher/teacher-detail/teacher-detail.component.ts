import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherCourseCardComponent} from "../../components/teacher-course-card/teacher-course-card.component";

@Component({
  selector: 'app-teacher-detail',
  standalone: true,
  imports: [CommonModule, TeacherCourseCardComponent],
  templateUrl: './teacher-detail.component.html',
  styleUrl: './teacher-detail.component.css'
})
export class TeacherDetailComponent {

}
